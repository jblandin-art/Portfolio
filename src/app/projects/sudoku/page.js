import React from 'react'
import UserSudokuBoard from '../../../components/UserSudokuBoard'
import AISudokuBoard from '../../../components/AISudokuBoard'

export default function sudokuPage() {
    return (
                <main className="mx-auto max-w-5xl px-6 py-10 text-gray-200">
                    <UserSudokuBoard emptyCells={45} seed={42} />
                    <AISudokuBoard />
                </main>
    )
}