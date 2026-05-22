"use client";
import { useEffect, useState } from "react";

export default function SudokuBoardBase({ puzzle = null, solution = null, validateGrid = null, onChange = null, readOnly = false, revealCells = [], visibleCells = null }) {
  const emptyGrid = Array.from({ length: 9 }, () => Array(9).fill(0));
  const [grid, setGrid] = useState(emptyGrid);
  const [boardValid, setBoardValid] = useState(null);

  useEffect(() => {
    if (!puzzle) return;
    const normalized = Array.from({ length: 9 }, (_, r) =>
      Array.from({ length: 9 }, (_, c) => {
        const puzzleValue = puzzle[r]?.[c];
        const solutionValue = solution?.[r]?.[c];
        const parsedPuzzleValue = typeof puzzleValue === "number" ? puzzleValue : parseInt(puzzleValue) || 0;
        const parsedSolutionValue = typeof solutionValue === "number" ? solutionValue : parseInt(solutionValue) || 0;
        return parsedPuzzleValue > 0 ? parsedPuzzleValue : parsedSolutionValue;
      })
    );
    setGrid(normalized);
  }, [puzzle, solution]);

  useEffect(() => {
    let cancelled = false;

    async function checkGrid() {
      if (!validateGrid) {
        setBoardValid(null);
        return;
      }

      if (grid.some((row) => row.some((value) => value === 0))) {
        setBoardValid(null);
        return;
      }

      try {
        const isValid = await validateGrid(grid);
        if (!cancelled) {
          setBoardValid(Boolean(isValid));
        }
      } catch (error) {
        if (!cancelled) {
          setBoardValid(false);
        }
      }
    }

    checkGrid();

    return () => {
      cancelled = true;
    };
  }, [grid, validateGrid]);

  function handleCellChange(r, c, value) {
    const v = value.replace(/[^0-9]/g, "").slice(0, 1);
    const num = v === "" ? 0 : Number(v);
    const next = grid.map((row) => row.slice());
    next[r][c] = num;
    setGrid(next);
    if (onChange) onChange(next);
  }

  return (
    <div className="mx-auto max-w-md sm:max-w-lg">
      <div
        className={`grid w-full grid-cols-9 gap-0 bg-transparent rounded-lg overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.12)] border ${boardValid === false ? "border-red-500/50" : boardValid ? "border-emerald-500/50" : "border-purple-700/40"}`}
      >
        {grid.map((row, r) =>
          row.map((val, c) => {
            const isPrefilled = puzzle && (puzzle[r]?.[c] || 0) > 0;
            const cellKey = `cell-${r}-${c}`;
            const rightBorder = (c + 1) % 3 === 0 && c !== 8 ? "border-r-2 border-purple-700/40" : "border-r border-purple-700/20";
            const bottomBorder = (r + 1) % 3 === 0 && r !== 8 ? "border-b-2 border-purple-700/40" : "border-b border-purple-700/20";
            const correctnessClass = boardValid === false
              ? "text-red-200 bg-red-500/10"
              : boardValid
                ? "text-emerald-200 bg-emerald-500/10"
                : "text-purple-200";

            const isRevealed = revealCells && revealCells.includes(cellKey);
            const isVisible = !Array.isArray(visibleCells) || visibleCells.includes(cellKey) || isPrefilled;
            return (
              <div
                key={cellKey}
                className={`relative grid aspect-square w-full place-items-center bg-slate-900/65 ${correctnessClass} ${rightBorder} ${bottomBorder} ${isRevealed ? 'sudoku-reveal' : ''}`}
              >
                {isPrefilled || readOnly ? (
                  <span className="relative z-10 flex h-full w-full items-center justify-center text-sm sm:text-base font-semibold leading-none select-none">{val}</span>
                ) : (
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                    <span className={`pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-sm sm:text-base font-semibold leading-none select-none transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                      {val === 0 ? "" : String(val)}
                    </span>
                    <input
                      aria-label={`r${r}c${c}`}
                      className="absolute inset-0 z-20 h-full w-full appearance-none border-0 bg-transparent p-0 text-center text-sm sm:text-base leading-none outline-none caret-purple-300 opacity-0"
                      value={val === 0 ? "" : String(val)}
                      onChange={(e) => handleCellChange(r, c, e.target.value)}
                    />
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
      <p className="mt-3 text-xs text-purple-300/80">
        {boardValid === null
          ? ""
          : boardValid
            ? "Valid Sudoku board. Any solved version that satisfies alldiff is accepted."
            : "There is a conflict in the board."}
      </p>
    </div>
  );
}
