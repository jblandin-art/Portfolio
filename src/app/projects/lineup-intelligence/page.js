import Link from "next/link";

export const metadata = {
  title: "Lineup Intelligence Case Study | Josiah Blanding",
  description:
    "Case study for Lineup Intelligence, an NBA lineup analytics dashboard built with Django, Angular, PostgreSQL, and data-processing tools.",
  alternates: {
    canonical: "/projects/lineup-intelligence",
  },
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const technologies = [
  "Python",
  "Django",
  "PostgreSQL",
  "Pandas",
  "NumPy",
  "Angular",
  "TypeScript",
  "RxJS",
  "SCSS",
  "HTML",
  "Vercel",
];

const metrics = [
  "Net points per possession",
  "Offensive and defensive efficiency",
  "Field-goal percentage",
  "Rebound rate",
  "Turnover behavior",
  "Possession sample size",
];

const implementationDecisions = [
  {
    title: "Possession-level aggregation",
    description:
      "Django and Django REST Framework expose an API that transforms raw NBA possession data into reusable lineup-level summaries.",
  },
  {
    title: "Basketball-specific evaluation",
    description:
      "The dashboard prioritizes metrics that help coaches, front offices, and analysts evaluate how player combinations actually perform together.",
  },
  {
    title: "High-clarity dashboarding",
    description:
      "Angular provides filtering, sorting, and ranking views that make a large results set easy to scan and compare.",
  },
  {
    title: "Deployment-ready services",
    description:
      "The application separates its frontend and backend deployment concerns across Vercel and Railway while retaining PostgreSQL for structured data.",
  },
];

export default function LineupIntelligenceCaseStudy() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-8 sm:py-10 text-gray-200">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-md border border-purple-500/70 bg-zinc-900/70 px-4 py-2 text-sm text-purple-100 transition hover:border-purple-400 hover:bg-zinc-800"
        >
          Back to Portfolio
        </Link>
      </div>

      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-300">
          Featured Case Study
        </p>
        <h1 className="mt-2 max-w-4xl text-3xl font-bold font-poppins leading-tight text-purple-400 sm:text-4xl lg:text-5xl">
          Lineup Intelligence
        </h1>
        <p className="mt-3 max-w-3xl text-xl leading-8 text-gray-200">
          NBA lineup analytics dashboard for finding the most effective player combinations.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
          Lineup Intelligence turns raw NBA possession data into an interactive lineup-performance dashboard for coaches, front offices, and analysts. It ranks player combinations by efficiency, possession outcomes, and sample size so teams can compare lineups across an entire league.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Role", "Full-stack engineer and data-product builder"],
            ["Timeline", "Technical project sprint"],
            ["Frontend", "Angular + TypeScript"],
            ["Backend", "Django + DRF + PostgreSQL"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-purple-700/50 bg-zinc-900/60 p-4">
              <p className="text-xs uppercase tracking-wide text-purple-300">{label}</p>
              <p className="mt-1 text-sm">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://thunder-sandy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-400"
          >
            Try the Live App
          </a>
          <a
            href="https://github.com/jblandin-art/thunder"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-purple-700/60 bg-zinc-900/60 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-800"
          >
            View Code
          </a>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">The Problem</h2>
        <p className="mt-3 leading-8 text-gray-300">
          Raw possession data contains the detail needed for meaningful lineup evaluation, but it is difficult to use directly. The project needed to aggregate that data into a clear interface for understanding how one-, two-, three-, four-, and five-player combinations perform across a season.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Dashboard Preview</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-purple-700/50 bg-zinc-900/60 p-2">
          <img
            src={`${basePath}/thunder-frontend-dashboard.png`}
            alt="NBA lineup analytics dashboard showing sortable lineup cards with net points per possession, efficiency metrics, and player combinations."
            className="w-full rounded-lg"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">How It Works</h2>
        <p className="mt-3 leading-8 text-gray-300">
          The backend cleans and aggregates possession records into lineup summaries. The Angular interface then makes those summaries searchable through lineup-size filters, sortable rankings, and minimum-possession thresholds.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {implementationDecisions.map((item) => (
            <article key={item.title} className="rounded-xl border border-purple-700/50 bg-zinc-900/60 p-4">
              <h3 className="font-semibold text-purple-300">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Metrics That Matter</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 leading-7 text-gray-300 list-disc pl-5">
          {metrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Backend API</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-purple-700/50 bg-zinc-900/60 p-2">
          <img
            src={`${basePath}/thunder-backend-dashboard.png`}
            alt="Backend view for the Lineup Intelligence NBA lineup analytics application."
            className="w-full rounded-lg"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Demo</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-purple-700/50 bg-zinc-900/60 p-2">
          <video className="w-full rounded-lg" controls playsInline preload="metadata">
            <source src={`${basePath}/thunder-demo.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Challenges and Outcomes</h2>
        <p className="mt-3 leading-8 text-gray-300">
          The main challenges were cleaning and aggregating a large possession dataset, choosing rankings that balance efficiency with sample size, and presenting the results without overwhelming the user. The result is a reusable data product that turns raw basketball events into actionable lineup comparisons.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Technologies</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span key={technology} className="rounded-full border border-purple-600/60 bg-zinc-900/60 px-3 py-1 text-xs text-purple-100">
              {technology}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
