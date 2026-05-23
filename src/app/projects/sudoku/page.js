import Link from 'next/link'
import SudokuScrollReset from './scroll-reset'
import SudokuContent from './sudoku-content'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
    title: "Play Sudoku | Josiah Blanding",
    description:
        "An in-browser Sudoku experience using Pyodide for puzzle generation and solving, with an AI reveal mode.",
};

export default function SudokuPage() {
    return (
        <>
            <SudokuScrollReset />
            <main className="mx-auto max-w-5xl py-8 sm:py-10 text-gray-200">
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-md border border-purple-500/70 bg-purple-900/40 px-4 py-2 text-sm text-purple-100 transition hover:border-purple-400 hover:bg-purple-800/60"
                    >
                        Back to Portfolio
                    </Link>
                </div>

                <header className="">
                    <p className="text-sm font-semibold uppercase tracking-widest text-purple-300">Case Study</p>
                    <h1 className="mt-2 max-w-3xl text-3xl font-bold font-poppins leading-tight text-purple-400 sm:text-4xl lg:text-5xl">
                        Sudoku - AI Solving Algorithm + Interactive Game Build
                    </h1>
                    <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
                        An interactive Sudoku implementation that generates puzzles in Python (via Pyodide), provides a user board, and an AI board that progressively reveals the solution.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
                            <p className="text-xs uppercase tracking-wide text-purple-300">Role</p>
                            <p className="mt-1 text-sm">Solo Developer</p>
                        </div>
                        <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
                            <p className="text-xs uppercase tracking-wide text-purple-300">Team</p>
                            <p className="mt-1 text-sm">1 developer</p>
                        </div>
                        <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
                            <p className="text-xs uppercase tracking-wide text-purple-300">Timeline</p>
                            <p className="mt-1 text-sm">Several hours</p>
                        </div>
                        <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
                            <p className="text-xs uppercase tracking-wide text-purple-300">Stack</p>
                            <p className="mt-1 text-sm">Python, Pyodide, React, Next.js</p>
                        </div>
                    </div>
                </header>

                <SudokuContent />

                
            </main>
        </>
    );
}