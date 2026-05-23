"use client";
import { useEffect, useState } from "react";

export default function SudokuBoardBase({ puzzle = null, solution = null, validateGrid = null, onChange = null, readOnly = false, revealCells = [], visibleCells = null, validMessage = "Valid Sudoku board.", showValidationState = true, forceHiddenValues = false, showMobileTapHint = true, showMobileKeypad = true }) {
  const emptyGrid = Array.from({ length: 9 }, () => Array(9).fill(0));
  const keypadValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [grid, setGrid] = useState(emptyGrid);
  const [boardValid, setBoardValid] = useState(null);
  const [isMobileInputMode, setIsMobileInputMode] = useState(false);
  const [activeCell, setActiveCell] = useState(null);

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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const updateInputMode = () => {
      setIsMobileInputMode(mediaQuery.matches || (navigator.maxTouchPoints || 0) > 0);
    };

    updateInputMode();
    mediaQuery.addEventListener("change", updateInputMode);

    return () => {
      mediaQuery.removeEventListener("change", updateInputMode);
    };
  }, []);

  useEffect(() => {
    if (readOnly || !isMobileInputMode) {
      setActiveCell(null);
    }
  }, [readOnly, isMobileInputMode]);

  function handleCellChange(r, c, value) {
    const v = value.replace(/[^0-9]/g, "").slice(0, 1);
    const num = v === "" ? 0 : Number(v);
    applyCellValue(r, c, num);
  }

  function applyCellValue(r, c, num) {
    const next = grid.map((row) => row.slice());
    next[r][c] = num;
    setGrid(next);
    if (onChange) onChange(next);
  }

  const displayBoardValid = showValidationState ? boardValid : null;
  const enableMobileKeypad = isMobileInputMode && showMobileKeypad;

  return (
    <div className="mx-auto max-w-md sm:max-w-lg">
      <div className="relative">
        <div
          className={`grid w-full grid-cols-9 gap-0 rounded-lg overflow-hidden bg-black/80 border shadow-[0_0_40px_rgba(168,85,247,0.1)] ${displayBoardValid === false ? "border-red-500/50" : "border-purple-700/40"}`}
        >
          {grid.map((row, r) =>
            row.map((val, c) => {
              const isPrefilled = puzzle && (puzzle[r]?.[c] || 0) > 0;
              const cellKey = `cell-${r}-${c}`;
              const rightBorder = (c + 1) % 3 === 0 && c !== 8 ? "border-r-2 border-purple-700/40" : "border-r border-purple-700/20";
              const bottomBorder = (r + 1) % 3 === 0 && r !== 8 ? "border-b-2 border-purple-700/40" : "border-b border-purple-700/20";
              const correctnessClass = displayBoardValid === false
                ? "text-red-100 bg-red-500/15"
                : displayBoardValid
                  ? "text-emerald-300 bg-emerald-900/35"
                  : "text-purple-50";

              const isRevealed = revealCells && revealCells.includes(cellKey);
              const isVisible = !Array.isArray(visibleCells) || visibleCells.includes(cellKey) || isPrefilled;
              const shouldHideValue = forceHiddenValues && !readOnly;
              const isActiveMobileCell = enableMobileKeypad && activeCell?.r === r && activeCell?.c === c;
              return (
                <div
                  key={cellKey}
                  className={`relative grid aspect-square w-full place-items-center bg-black/95 transition-colors duration-500 ease-out ${correctnessClass} ${rightBorder} ${bottomBorder} ${isActiveMobileCell ? "ring-2 ring-purple-300/90 ring-inset" : ""} ${isRevealed ? 'sudoku-reveal' : ''}`}
                >
                  {isPrefilled || readOnly ? (
                    <span className={`relative z-10 flex h-full w-full items-center justify-center text-[1.125rem] sm:text-[1.3rem] font-bold leading-none select-none transition-opacity duration-300 ${shouldHideValue ? "opacity-0" : "opacity-100"}`}>{val}</span>
                  ) : (
                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                      <span className={`pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-[1.125rem] sm:text-[1.3rem] font-bold leading-none select-none transition-opacity duration-700 ${isVisible && !shouldHideValue ? "opacity-100" : "opacity-0"}`}>
                        {val === 0 ? "" : String(val)}
                      </span>
                      {enableMobileKeypad ? (
                        <button
                          type="button"
                          aria-label={`Select row ${r + 1} column ${c + 1}`}
                          className="absolute inset-0 z-20 h-full w-full bg-transparent p-0 outline-none"
                          onClick={() => setActiveCell({ r, c })}
                        />
                      ) : !isMobileInputMode ? (
                        <input
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          maxLength={1}
                          aria-label={`r${r}c${c}`}
                          className="absolute inset-0 z-20 h-full w-full appearance-none border-0 bg-transparent p-0 text-center text-[1.125rem] sm:text-[1.3rem] leading-none outline-none caret-purple-100 opacity-0 focus:opacity-100 focus:text-transparent"
                          value={val === 0 ? "" : String(val)}
                          onChange={(e) => handleCellChange(r, c, e.target.value)}
                        />
                      ) : null}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 rounded-lg border border-emerald-900/80 transition-opacity transition-colors duration-500 ease-out ${displayBoardValid ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      <p
        className={`mt-3 text-xs text-purple-300/80 transition-opacity duration-500 ease-out ${displayBoardValid === null ? "opacity-0" : "opacity-100"}`}
      >
        {displayBoardValid === null
          ? ""
          : displayBoardValid
            ? validMessage
            : "There is a conflict in the board."}
      </p>

      {enableMobileKeypad && !readOnly ? (
        <section className="mt-4 rounded-lg border border-purple-700/60 bg-black/75 p-3">
          {activeCell || showMobileTapHint ? (
            <p className="mb-2 text-center text-xs uppercase tracking-widest text-purple-200">
              {activeCell ? `Cell r${activeCell.r + 1} c${activeCell.c + 1}` : "Tap a cell to enter a value"}
            </p>
          ) : null}
          <div className="grid grid-cols-5 gap-2">
            {keypadValues.map((n) => (
              <button
                key={`key-${n}`}
                type="button"
                className="rounded-md border border-purple-600/70 bg-slate-900/90 py-2 text-sm font-semibold text-purple-50 transition hover:border-purple-400 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-55"
                onClick={() => {
                  if (!activeCell) return;
                  applyCellValue(activeCell.r, activeCell.c, n);
                }}
                disabled={!activeCell}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              className="rounded-md border border-purple-600/70 bg-slate-900/90 py-2 text-xs font-semibold uppercase tracking-wide text-purple-50 transition hover:border-purple-400 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-55"
              onClick={() => {
                if (!activeCell) return;
                applyCellValue(activeCell.r, activeCell.c, 0);
              }}
              disabled={!activeCell}
            >
              Clear
            </button>
          </div>
        </section>
      ) : null}
    </div>
  );
}
