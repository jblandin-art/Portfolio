import Link from "next/link";

export const metadata = {
  title: "NeuralEncoding Case Study | Josiah Blanding",
  description:
    "Case study for NeuralEncoding, an Electron desktop telemetry dashboard built with React and a Python FastAPI backend.",
};

const stack = [
  "Electron",
  "React",
  "Vite",
  "Python",
  "FastAPI",
  "Uvicorn",
  "Tailwind CSS",
  "JavaScript",
  "CSS",
];

const highlights = [
  "Built a dedicated desktop shell so the monitoring experience feels like an operator workstation, not a browser tab.",
  "Implemented full-screen first launch behavior with fast keyboard exit handling for focused review sessions.",
  "Presented dense telemetry with a clear visual hierarchy across waveform, signal quality, status, and event panels.",
  "Hid scrollbars while preserving mouse and trackpad scrolling to keep the UI clean without reducing usability.",
  "Addressed theme-specific shell edge artifacts to keep visual consistency across system light and dark modes.",
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function NeuralEncodingCaseStudy() {
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
          NeuralEncoding - Desktop Neural Telemetry Dashboard
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
          NeuralEncoding is an operator-style desktop monitoring prototype for EEG-like telemetry.
          It combines an Electron shell, React interface layers, and a Python FastAPI stream source
          to deliver a full-screen, high-density telemetry experience.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-wide text-purple-300">Role</p>
            <p className="mt-1 text-sm">Lead Front-end Developer</p>
          </div>
          <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-wide text-purple-300">Platform</p>
            <p className="mt-1 text-sm">Desktop (Electron)</p>
          </div>
          <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-wide text-purple-300">Frontend</p>
            <p className="mt-1 text-sm">React + Vite</p>
          </div>
          <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-wide text-purple-300">Backend</p>
            <p className="mt-1 text-sm">Python + FastAPI</p>
          </div>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Problem</h2>
        <p className="mt-3 leading-8 text-gray-300">
          A browser-first interface felt too generic for continuous telemetry monitoring.
          The product needed to behave like a dedicated workstation surface while still handling
          dense real-time data, logs, and diagnostic indicators without visual clutter.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Demo</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Local project demo video from the public directory.
        </p>
        <div className="mt-4 overflow-hidden rounded-xl border border-purple-700/50 bg-slate-900/70 p-2">
          <video
            className="w-full rounded-lg"
            controls
            playsInline
            preload="metadata"
          >
            <source src={`${basePath}/NeuralEncodingDashboardSample.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Solution</h2>
        <ul className="mt-4 space-y-3 text-gray-300 leading-8 list-disc pl-5">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Architecture</h2>
        <div className="mt-4 space-y-4">
          <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <p className="text-purple-300">Desktop shell</p>
            <p className="mt-1 text-sm text-gray-300">
              Electron loads the compiled main process entry and hosts the monitoring surface in a desktop window.
            </p>
          </div>
          <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <p className="text-purple-300">Frontend monitor</p>
            <p className="mt-1 text-sm text-gray-300">
              React views render live feed and system diagnostics panels with a unified telemetry visual language.
            </p>
          </div>
          <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <p className="text-purple-300">Stream source</p>
            <p className="mt-1 text-sm text-gray-300">
              FastAPI and Uvicorn run as a separate backend process that provides telemetry stream data.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Tech Stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span key={item} className="rounded-full border border-purple-600/60 bg-purple-900/30 px-3 py-1 text-xs text-purple-100">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Important Note</h2>
        <p className="mt-3 leading-8 text-gray-300">
          Current stream behavior appears to be simulated for prototype and operator-testing scenarios.
          This project is positioned as a neural telemetry monitoring prototype rather than a finalized
          hardware-integrated medical acquisition system.
        </p>
      </section>

      <section className="mb-10 flex flex-wrap gap-3">
        <a
          href="https://github.com/jblandin-art/NeuralEncoding"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-purple-500 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-400 transition"
        >
          View Code
        </a>
        <a
          href="mailto:josiahblanding@gmail.com"
          className="rounded-md border border-purple-500/70 px-4 py-2 text-sm text-purple-200 hover:bg-purple-800/40 transition"
        >
          Contact
        </a>
      </section>
    </main>
  );
}
