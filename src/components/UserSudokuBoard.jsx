"use client";
import { useEffect, useState } from "react";
import SudokuBoardBase from "./SudokuBoardBase";
import { loadPyodideAndSudoku } from "./pyodideSudokuLoader";

export default function UserSudokuBoard({ emptyCells = 45, seed = 42 }) {
  const [puzzle, setPuzzle] = useState(null);
  const [validateGrid, setValidateGrid] = useState(null);
  const [loading, setLoading] = useState(true);

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
  }, [emptyCells, seed]);

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
        <section className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-300">User Sudoku</p>
          <div className="mt-4">
            <div className="mx-auto max-w-5xl px-6 py-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
                <p className="text-xl font-semibold uppercase tracking-[0.45em] text-purple-300">SUDOKU PUZZLE</p>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
              </div>

              <SudokuBoardBase puzzle={puzzle} validateGrid={validateGrid} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
