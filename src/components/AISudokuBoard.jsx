"use client";
import React from "react";
import UserSudokuBoard from "./UserSudokuBoard";

async function loadPyodideAndSudoku() {
  if (!globalThis.pyodide) {
    await new Promise((res) => {
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js";
      s.onload = res;
      document.head.appendChild(s);
    });
    // @ts-ignore
    globalThis.pyodide = await globalThis.loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.1/full/" });
    try {
      await globalThis.pyodide.loadPackage(["numpy"]);
    } catch (e) {
      // ignore; numpy optional in some builds
    }
    const resp = await fetch("/sudoku.py");
    const code = await resp.text();
    await globalThis.pyodide.runPythonAsync(code);
  }
  return globalThis.pyodide;
}

export async function fetchPuzzleAndSolution(emptyCells = 45, seed = 42) {
  const pyodide = await loadPyodideAndSudoku();
  const pyCode = `import json\n_p = generate_sudoku_puzzle(empty_cells=${emptyCells}, seed=${seed})\n_s = ImprovedSudokuResolver(_p)\n_s.find_solution()\njson.dumps(_p) + '||SEP||' + json.dumps(_s.grid)`;
  const res = await pyodide.runPythonAsync(pyCode);
  const parts = res.split("||SEP||");
  const p = JSON.parse(parts[0]);
  const s = JSON.parse(parts[1]);
  return { puzzle: p, solution: s };
}

export function startAutoReveal({ puzzle, solution, onUpdate = () => {}, onReveal = () => {}, intervalMs = 1000, batchSize = 3 }) {
  if (!puzzle || !solution) return () => {};
  const empties = [];
  puzzle.forEach((row, r) => row.forEach((v, c) => { if (!v) empties.push([r, c]); }));
  let idx = 0;
  const timeouts = [];
  let currentGrid = puzzle.map((r) => r.slice());

  const interval = setInterval(() => {
    const batch = empties.slice(idx, idx + batchSize);
    if (!batch || batch.length === 0) {
      clearInterval(interval);
      return;
    }

    batch.forEach(([r, c]) => {
      currentGrid[r][c] = solution[r][c];
    });

    onUpdate(currentGrid.map((r) => r.slice()));

    const keys = batch.map(([r, c]) => `cell-${r}-${c}`);
    onReveal(keys);
    const t = setTimeout(() => onReveal([]), 650);
    timeouts.push(t);

    idx += batchSize;
    if (idx >= empties.length) {
      clearInterval(interval);
    }
  }, intervalMs);

  return () => {
    clearInterval(interval);
    timeouts.forEach((t) => clearTimeout(t));
  };
}

export default function AISudokuBoard(props) {
  return <UserSudokuBoard {...props} />;
}
