import React from 'react'
import UserSudokuBoard from '../../../components/UserSudokuBoard'
import AISudokuBoard from '../../../components/AISudokuBoard'

export default function sudokuPage() {
    return (
                <main className="mx-auto max-w-5xl px-6 py-10 text-gray-200">
                    <section className="mb-12">
                        <p className="text-sm font-semibold uppercase tracking-widest text-purple-300">User Sudoku</p>
                        <div className="mt-4">
                            <UserSudokuBoard emptyCells={45} seed={42} />
                        </div>
                    </section>

                    <section>
                        <p className="text-sm font-semibold uppercase tracking-widest text-purple-300">AI Sudoku</p>
                        <div className="mt-4">
                            <AISudokuBoard />
                        </div>
                    </section>
                </main>
    )
}