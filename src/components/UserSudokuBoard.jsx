"use client";
import { useEffect, useState } from "react";
import SudokuBoardBase from "./SudokuBoardBase";
import { loadPyodideAndSudoku } from "./pyodideSudokuLoader";

export default function UserSudokuBoard({ emptyCells = 45, seed }) {
  const [runtimeSeed] = useState(() => seed ?? Math.floor(Math.random() * 1000000));
  console.log("User Sudoku seed:", runtimeSeed);
  const [puzzle, setPuzzle] = useState(null);
  const [solution, setSolution] = useState(null);
  const [validateGrid, setValidateGrid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFillButton, setShowFillButton] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const pyodide = await loadPyodideAndSudoku();
      if (cancelled) return;

      const puzzleJson = await pyodide.runPythonAsync(
        `import json\njson.dumps(generate_sudoku_puzzle(empty_cells=${emptyCells}, seed=${runtimeSeed}).tolist())`
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
    };
  }, [emptyCells, runtimeSeed]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "*" || event.code === "NumpadMultiply") {
        setShowFillButton(true);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {loading ? (
        <div className="mx-auto max-w-5xl px-6 py-6">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-500/40 nim-loading-flash to-transparent" />
            <p className="text-xl font-semibold uppercase tracking-[0.45em] nim-loading-flash text-yellow-300">LOADING PUZZLE</p>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-500/40 nim-loading-flash to-transparent" />
          </div>
        </div>
      ) : (
        <>
        <section className="mb-12">
          <div className="mt-4">
            <div className="mx-auto max-w-5xl px-6 py-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
                <p className="text-xl font-semibold uppercase tracking-[0.45em] text-purple-300">USER SUDOKU</p>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
              </div>

              <SudokuBoardBase
                puzzle={puzzle}
                solution={isFilled ? solution : null}
                validateGrid={validateGrid}
                validMessage="Great job! This is a valid sudoku board."
              />

              {showFillButton ? (
                <button
                  type="button"
                  className="mt-4 inline-flex cursor-pointer items-center rounded-md border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-200 transition hover:bg-red-500/20"
                  onClick={() => setIsFilled(true)}
                >
                  Fill User Sudoku
                </button>
              ) : null}
            </div>
          </div>
        </section>
        <div className="mb-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
                <p className="text-xl font-semibold uppercase tracking-[0.45em] text-purple-300">AI SUDOKU</p>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
        </div>
        </>
      )}
    </>
  );
}
