"use client";
import { useEffect, useState } from "react";
import SudokuBoardBase from "./SudokuBoardBase";

async function loadPyodideAndSudoku() {
  if (!globalThis.pyodide) {
    await new Promise((resolve, reject) => {
      if (window.loadPyodide) {
        resolve(window.loadPyodide);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js";
      script.async = true;
      script.onload = () => resolve(window.loadPyodide);
      script.onerror = reject;
      document.head.appendChild(script);
    });

    const loadPyodide = window.loadPyodide;
    // @ts-ignore
    globalThis.pyodide = await loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.1/full/" });

    try {
      await globalThis.pyodide.loadPackage(["numpy"]);
    } catch (e) {
      console.warn("pyodide.loadPackage numpy failed, attempting micropip fallback", e);
      await globalThis.pyodide.runPythonAsync(`import micropip\nawait micropip.install('numpy')`);
    }

    const sudokuPath = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/sudoku.py`;
    const resp = await fetch(sudokuPath);
    const source = await resp.text();
    if (!resp.ok) {
      throw new Error(`Failed to fetch sudoku.py: ${resp.status} ${resp.statusText}`);
    }

    await globalThis.pyodide.runPythonAsync(`import json\n${source}`);
  }

  return globalThis.pyodide;
}

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
        `json.dumps(generate_sudoku_puzzle(empty_cells=${emptyCells}, seed=${seed}).tolist())`
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
        <SudokuBoardBase puzzle={puzzle} validateGrid={validateGrid} />
      )}
    </div>
  );
}
