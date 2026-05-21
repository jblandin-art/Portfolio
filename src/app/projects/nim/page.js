import Link from 'next/link';
import Image from 'next/image';
import { NimLogic } from '../../../components/nim-logic.jsx';
import NimBoard from '../../../components/nimBoard.jsx';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: "Play Nim | Josiah Blanding",
  description:
    "A simple implementation of the game Nim. Play against an AI opponent that uses an Adversarial Search algorithm to find the optimal move. Designed with Next.js and Tailwind CSS.",
};

export default function NimPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-8 sm:py-10 text-gray-200">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-md border border-purple-500/70 bg-purple-900/40 px-4 py-2 text-sm text-purple-100 transition hover:border-purple-400 hover:bg-purple-800/60"
        >
          Back to Portfolio
        </Link>
      </div>

      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-300">Case Study</p>
        <h1 className="mt-2 max-w-3xl text-3xl font-bold font-poppins leading-tight text-purple-400 sm:text-4xl lg:text-5xl">
          Nim - Adversarial Search Implementation
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
          Nim is a simple turn-based game. Players take turns removing as many items as they'd like from one pile at a time. The player who takes the last pile wins. This project was fun to implement as I was very hands on with it's development. The AI opponent utilizes an Adversarial Minimax search algorithm to find the optimal move, in order to win you must utilize the optimal strategy of Nim.
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
            <p className="mt-1 text-sm">6 Hours</p>
          </div>
          <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-wide text-purple-300">Stack</p>
            <p className="mt-1 text-sm">Python</p>
          </div>
        </div>
      </header>
      <NimBoard />
    </main>

  )
}