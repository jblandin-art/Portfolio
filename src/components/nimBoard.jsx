"use client";
import { useState } from "react";

const STICK_WIDTH = 40;
const STICK_HEIGHT = 110;
import { NimLogic } from "./nim-logic.jsx";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function NimBoard() {
  const [ready, setReady] = useState(false);

  // call setReady(true) after Pyodide + game init finishes
  // e.g., pass setReady into your nim init logic

  return (
    <>
    <NimLogic setReady={setReady} />
    <div className="mb-6 flex items-center gap-4">
        <div id="status-break-1" className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
        {//text-purple-300
        }
        <p id="status" className="text-lg font-semibold uppercase tracking-[0.45em] text-yellow-300">
          GAME LOADING
        </p>
        <div id="status-break-2" className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
      </div>
    <div id="game-board" className={`relative ${ready ? '' : 'hidden'}`}>
        {//<div id="full-width-wrapper" className="">
        }
        <button id="ai-turn-button-mobile" className="z-50 hidden rounded-xl border border-red-600/70 bg-red-900/60 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-red-100 transition hover:border-red-500/70 hover:bg-red-800/80 hover:text-red-50 sm:hidden">
          Trigger AI-Turn
        </button>
        <button id="ai-turn-button" className="z-50 absolute left-0 top-1/2 -translate-y-1/2 rounded-xl border border-red-600/70 bg-red-900/60 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-red-100 transition hover:border-red-500/70 hover:bg-red-800/80 hover:text-red-50">
          AI-Turn
        </button>
        {//</div>
        }
        {/*First Row*/}
        <div id="rows-container" className="flex flex-col gap-16 p-0 m-0">
          <section id="row1" className="flex justify-center items-center relative">
            <div className="mx-auto inline-flex w-fit items-center justify-center gap-1">
              <div className="stick">
                <Image
                  src={`${basePath}/Glowstick1.png`}
                  alt="Stick"
                  width={STICK_WIDTH}
                  height={STICK_HEIGHT}
                  className="w-[25px] sm:w-[40px] h-auto block"
                />
              </div>
            </div>
            <button id="remove-stick-1" className="absolute right-0 top-1/2 -translate-y-1/2 rounded-xl border border-purple-700/50 bg-slate-900/70 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-purple-300 transition hover:border-purple-500/70 hover:bg-slate-900/90 hover:text-purple-200">
              Remove Stick
            </button>
            <button id="remove-stick-1-mobile" className="absolute right-0 top-1/2 -translate-y-1/2 hidden rounded-xl border border-purple-700/50 bg-slate-900/70 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-purple-300 transition hover:border-purple-500/70 hover:bg-slate-900/90 hover:text-purple-200 sm:hidden">
              Remove
            </button>
          </section>
          <section id="row2" className="flex justify-center items-center relative">
            <div className="mx-auto inline-flex w-fit items-center justify-center gap-1">
              <div className="stick">
                <Image
                  src={`${basePath}/Glowstick1.png`}
                  alt="Stick"
                  width={STICK_WIDTH}
                  height={STICK_HEIGHT}
                  className="w-[25px] sm:w-[40px] h-auto block"
                />
              </div>
              <div className="stick">
                <Image
                  src={`${basePath}/Glowstick1.png`}
                  alt="Stick"
                  width={STICK_WIDTH}
                  height={STICK_HEIGHT}
                  className="w-[25px] sm:w-[40px] h-auto block"
                />
              </div>
              <div className="stick">
                <Image
                  src={`${basePath}/Glowstick1.png`}
                  alt="Stick"
                  width={STICK_WIDTH}
                  height={STICK_HEIGHT}
                  className="w-[25px] sm:w-[40px] h-auto block"
                />
              </div>
            </div>
            <button id="remove-stick-2" className="absolute right-0 top-1/2 -translate-y-1/2 rounded-xl border border-purple-700/50 bg-slate-900/70 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-purple-300 transition hover:border-purple-500/70 hover:bg-slate-900/90 hover:text-purple-200">
              Remove Stick
            </button>
            <button id="remove-stick-2-mobile" className="absolute right-0 top-1/2 -translate-y-1/2 hidden rounded-xl border border-purple-700/50 bg-slate-900/70 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-purple-300 transition hover:border-purple-500/70 hover:bg-slate-900/90 hover:text-purple-200 sm:hidden">
              Remove
            </button>
          </section>
          <section id="row3" className="flex justify-center items-center relative">
            <div className="mx-auto inline-flex w-fit items-center justify-center gap-1">
              <div className="stick">
                <Image
                  src={`${basePath}/Glowstick1.png`}
                  alt="Stick"
                  width={STICK_WIDTH}
                  height={STICK_HEIGHT}
                  className="w-[25px] sm:w-[40px] h-auto block"
                />
              </div>
              <div className="stick">
                <Image
                  src={`${basePath}/Glowstick1.png`}
                  alt="Stick"
                  width={STICK_WIDTH}
                  height={STICK_HEIGHT}
                  className="w-[25px] sm:w-[40px] h-auto block"
                />
              </div>
              <div className="stick">
                <Image
                  src={`${basePath}/Glowstick1.png`}
                  alt="Stick"
                  width={STICK_WIDTH}
                  height={STICK_HEIGHT}
                  className="w-[25px] sm:w-[40px] h-auto block"
                />
              </div>
              <div className="stick">
                <Image
                  src={`${basePath}/Glowstick1.png`}
                  alt="Stick"
                  width={STICK_WIDTH}
                  height={STICK_HEIGHT}
                  className="w-[25px] sm:w-[40px] h-auto block"
                />
              </div>
              <div className="stick">
                <Image
                  src={`${basePath}/Glowstick1.png`}
                  alt="Stick"
                  width={STICK_WIDTH}
                  height={STICK_HEIGHT}
                  className="w-[25px] sm:w-[40px] h-auto block"
                />
              </div>
            </div>
            <button id="remove-stick-3" className="absolute right-0 top-1/2 -translate-y-1/2 rounded-xl border border-purple-700/50 bg-slate-900/70 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-purple-300 transition hover:border-purple-500/70 hover:bg-slate-900/90 hover:text-purple-200">
              Remove Stick
            </button>
            <button id="remove-stick-3-mobile" className="absolute right-0 top-1/2 -translate-y-1/2 hidden rounded-xl border border-purple-700/50 bg-slate-900/70 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-purple-300 transition hover:border-purple-500/70 hover:bg-slate-900/90 hover:text-purple-200 sm:hidden">
              Remove
            </button>
          </section>
          <section id="row4" className="flex justify-center items-center relative">
            <div className="mx-auto inline-flex w-fit items-center justify-center gap-1">
              <div className="stick">
                <Image
                  src={`${basePath}/Glowstick1.png`}
                  alt="Stick"
                  width={STICK_WIDTH}
                  height={STICK_HEIGHT}
                  className="w-[25px] sm:w-[40px] h-auto block"
                />
              </div>
              <div className="stick">
                <Image
                  src={`${basePath}/Glowstick1.png`}
                  alt="Stick"
                  width={STICK_WIDTH}
                  height={STICK_HEIGHT}
                  className="w-[25px] sm:w-[40px] h-auto block"
                />
              </div>
              <div className="stick">
                <Image
                  src={`${basePath}/Glowstick1.png`}
                  alt="Stick"
                  width={STICK_WIDTH}
                  height={STICK_HEIGHT}
                  className="w-[25px] sm:w-[40px] h-auto block"
                />
              </div>
              <div className="stick">
                <Image
                  src={`${basePath}/Glowstick1.png`}
                  alt="Stick"
                  width={STICK_WIDTH}
                  height={STICK_HEIGHT}
                  className="w-[25px] sm:w-[40px] h-auto block"
                />
              </div>
              <div className="stick">
                <Image
                  src={`${basePath}/Glowstick1.png`}
                  alt="Stick"
                  width={STICK_WIDTH}
                  height={STICK_HEIGHT}
                  className="w-[25px] sm:w-[40px] h-auto block"
                />
              </div>
              <div className="stick">
                <Image
                  src={`${basePath}/Glowstick1.png`}
                  alt="Stick"
                  width={STICK_WIDTH}
                  height={STICK_HEIGHT}
                  className="w-[25px] sm:w-[40px] h-auto block"
                />
              </div>
              <div className="stick">
                <Image
                  src={`${basePath}/Glowstick1.png`}
                  alt="Stick"
                  width={STICK_WIDTH}
                  height={STICK_HEIGHT}
                  className="w-[25px] sm:w-[40px] h-auto block"
                />
              </div>
            </div>
            <button id="remove-stick-4" className="absolute right-0 top-1/2 -translate-y-1/2 rounded-xl border border-purple-700/50 bg-slate-900/70 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-purple-300 transition hover:border-purple-500/70 hover:bg-slate-900/90 hover:text-purple-200">
              Remove Stick
            </button>
            <button id="remove-stick-4-mobile" className="absolute right-0 top-1/2 -translate-y-1/2 hidden rounded-xl border border-purple-700/50 bg-slate-900/70 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-purple-300 transition hover:border-purple-500/70 hover:bg-slate-900/90 hover:text-purple-200 sm:hidden">
              Remove
            </button>
          </section>
        </div>
      </div>
      </>
  );
}