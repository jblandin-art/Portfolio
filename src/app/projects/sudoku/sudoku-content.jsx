"use client";

import { useState } from "react";
import UserSudokuBoard from "../../../components/UserSudokuBoard";
import AISudokuBoard from "../../../components/AISudokuBoard";

export default function SudokuContent() {
  const [aiLoading, setAiLoading] = useState(true);

  return (
    <main className="mx-auto max-w-5xl py-10 text-gray-200">
      <UserSudokuBoard emptyCells={45} />
{/*
      <div className={`mb-6 transition-opacity duration-300 ease-out ${aiLoading ? "opacity-0" : "opacity-100"}`}>
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-300">AI Sudoku</p>
        <div className="mt-4 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
          <p className="text-xl font-semibold uppercase tracking-[0.45em] text-purple-300">SUDOKU PUZZLE</p>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
        </div>
      </div>*/
      }

      <AISudokuBoard onLoadingChange={setAiLoading} />
    </main>
  );
}