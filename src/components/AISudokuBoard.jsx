"use client";
import { useEffect, useRef, useState } from "react";
import SudokuBoardBase from "./SudokuBoardBase";
import { loadPyodideAndSudoku } from "./pyodideSudokuLoader";

export default function AISudokuBoard({ emptyCells = 45, seed = 42 }) {
  const [puzzle, setPuzzle] = useState(null);
  const [solution, setSolution] = useState(null);
  const [validateGrid, setValidateGrid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visibleCells, setVisibleCells] = useState([]);
  const [revealCells, setRevealCells] = useState([]);
  const timerRef = useRef(null);
  const timeoutRefs = useRef([]);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const pyodide = await loadPyodideAndSudoku();
      if (cancelled) return;

      const puzzleJson = await pyodide.runPythonAsync(
        `import json\njson.dumps(generate_sudoku_puzzle(empty_cells=${emptyCells}, seed=${seed}).tolist())`
      );
      if (cancelled) return;

      const jsPuzzle = JSON.parse(puzzleJson);
      setPuzzle(jsPuzzle);

      const puzzleLiteral = puzzleJson.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
      const solutionJson = await pyodide.runPythonAsync(
        `import json, numpy as np\npuzzle_grid = np.array(json.loads('${puzzleLiteral}'), dtype=int)\nsolver = ImprovedSudokuResolver(puzzle_grid)\nsolver.find_solution()\njson.dumps(solver.grid.tolist())`
      );
      if (cancelled) return;

      setSolution(JSON.parse(solutionJson));
      setVisibleCells([]);
      setRevealCells([]);

      setValidateGrid(() => async (grid) => {
        const gridLiteral = JSON.stringify(grid).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
        const result = await pyodide.runPythonAsync(
          `import json\ncandidate_grid = json.loads('${gridLiteral}')\nis_valid_sudoku_grid(candidate_grid)`
        );
        return Boolean(result);
      });

      setLoading(false);
    }

    init().catch((err) => {
      console.error(err);
      setLoading(false);
    });

    return () => {
      cancelled = true;
      if (timerRef.current) clearInterval(timerRef.current);
      timeoutRefs.current.forEach((timeoutId) => clearTimeout(timeoutId));
      timeoutRefs.current = [];
    };
  }, [emptyCells, seed]);

  useEffect(() => {
    if (!puzzle || !solution) return;

    const emptyCellsList = [];
    puzzle.forEach((row, r) => row.forEach((value, c) => {
      if (!value) emptyCellsList.push([r, c]);
    }));

    let index = 0;
    timerRef.current = setInterval(() => {
      const batch = emptyCellsList.slice(index, index + 3);
      if (batch.length === 0) {
        clearInterval(timerRef.current);
        timerRef.current = null;
        return;
      }

      const batchKeys = batch.map(([r, c]) => `cell-${r}-${c}`);
      setVisibleCells((previous) => Array.from(new Set([...previous, ...batchKeys])));
      setRevealCells(batchKeys);

      const timeoutId = setTimeout(() => setRevealCells([]), 700);
      timeoutRefs.current.push(timeoutId);

      index += 3;
      if (index >= emptyCellsList.length) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timeoutRefs.current.forEach((timeoutId) => clearTimeout(timeoutId));
      timeoutRefs.current = [];
    };
  }, [puzzle, solution]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-6">
      <div className="mb-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
        <p className={`text-lg font-semibold uppercase tracking-[0.45em] ${loading ? "text-yellow-300" : "text-purple-300"}`}>
          {loading ? "LOADING PUZZLE" : "SUDOKU PUZZLE"}
        </p>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
      </div>

      {loading ? (
        <p className="text-sm text-purple-300/70">Generating puzzle…</p>
      ) : (
        <SudokuBoardBase puzzle={puzzle} solution={solution} validateGrid={validateGrid} revealCells={revealCells} visibleCells={visibleCells} />
      )}
    </div>
  );
}
