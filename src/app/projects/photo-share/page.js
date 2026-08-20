import Link from "next/link";
import PhotoShareCarousel from "@/components/PhotoShareCarousel";

export const metadata = {
  title: "PhotoShare Case Study | Josiah Blanding",
  description:
    "Case study for a team photo-sharing application built with React, Node, Express, MongoDB, Next.js, Vercel, and AWS S3.",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const screenshots = [
  { src: `${basePath}/photo-app-login.png`, alt: "Photo app login view" },
  { src: `${basePath}/photo-app-details.png`, alt: "Photo app details view" },
  { src: `${basePath}/photo-app-photos.png`, alt: "Photo app photos view" },
  { src: `${basePath}/photo-app-mentions.png`, alt: "Photo app comments view" },
];

const responsibilities = [
  "Scrum Master for a five-person Agile team across all four sprints.",
  "Built and integrated React frontend features including UserList, UserDetail, UserPhotos, routing, and route-aware navigation.",
  "Implemented MongoDB/Mongoose API routes and reshaped populated database data for frontend use.",
  "Built login/logout sessions, route protection, registration, comments, photo uploads, and @mention functionality.",
  "Led the migration from Vite/Express to Next.js and Vercel serverless deployment.",
  "Integrated AWS S3 for image storage and resolved access, CORS, deployment, and mobile upload issues.",
];

const features = [
  {
    title: "Sprints 1–2: Application Foundation",
    items: [
      "Built SPA routing and master-detail user/photo views.",
      "Connected React components to Express/MongoDB APIs.",
      "Implemented Mongoose population and frontend-friendly response structures.",
    ],
  },
  {
    title: "Sprint 3: Authentication & User Content",
    items: [
      "Implemented login, logout, registration, and protected routes.",
      "Added server-side session persistence and validation.",
      "Built photo uploading and commenting with immediate UI updates.",
    ],
  },
  {
    title: "Sprint 4: @Mentions",
    items: [
      "Extended the MongoDB schema to store comment mentions.",
      "Added mention validation and backend queries for mentioned users.",
      "Built the mention-aware comment interface.",
    ],
  },
];

const deploymentWork = [
  "Moved the Express backend into Next.js API routing using serverless-http.",
  "Converted backend modules toward ES modules for Next.js compatibility.",
  "Resolved MongoDB Atlas connectivity and authentication issues.",
  "Integrated AWS S3 and fixed image access and CORS configuration.",
  "Diagnosed Vercel's 413 mobile upload limit and desktop/mobile upload differences.",
  "Identified that in-memory sessions do not work reliably with stateless serverless functions and evaluated Mongo-backed sessions versus JWT authentication.",
  "Fixed a Vercel deployment failure caused by stale Vite framework/build settings after the Next.js migration.",
];

const awsArchitecture = [
  "Evaluated Lambda + API Gateway as an alternative serverless backend.",
  "Planned MongoDB Atlas instead of RDS to retain the existing Mongoose architecture.",
  "Considered S3 + CloudFront for static frontend hosting.",
  "Designed around avoiding EC2, RDS, and NAT Gateway costs.",
];

const LIVE_APP_URL = "https://photo-app-nine-liard.vercel.app/";

export default function PhotoShareCaseStudy() {
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
          Case Study
        </p>

        <h1 className="mt-2 text-3xl font-bold font-poppins leading-tight text-purple-400 sm:text-4xl lg:text-5xl">
          PhotoShare — Sprint Based Social Media Platform
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
          A team-built social photo application featuring authentication,
          photo sharing, comments, user profiles, and @mentions. I served as
          Scrum Master and full-stack contributor, then led the application's
          transition into a modern serverless deployment.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Role", "Scrum Master + Full-Stack Contributor"],
            ["Team", "5 developers"],
            ["Development", "4 Agile sprints"],
            [
              "Stack",
              "React, Next.js, Node, Express, MongoDB, AWS S3, Vercel",
            ],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-purple-700/50 bg-zinc-900/60 p-4"
            >
              <p className="text-xs uppercase tracking-wide text-purple-300">
                {label}
              </p>
              <p className="mt-1 text-sm">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-purple-500/70 bg-zinc-900/60 p-6 border-r-purple-500/70 border-r-40">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-300">Live App</p>
          <p className="mt-2 max-w-2xl text-gray-200">
            This web application is fully deployed and functional. Please check it out for yourself and leave a photo from your favorite movie! 
          </p>
          <a
            href={LIVE_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-purple-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-purple-900/40 transition hover:bg-purple-400"
          >
            Try the Live App
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">
          Screenshots
        </h2>

        <PhotoShareCarousel images={screenshots} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">
          My Responsibilities
        </h2>

        <ul className="mt-4 space-y-2 leading-8 text-gray-300 list-disc pl-5">
          {responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">
          Sprint Highlights
        </h2>

        <div className="mt-6 space-y-6">
          {features.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-purple-300">
                {section.title}
              </h3>

              <ul className="mt-2 space-y-1 leading-7 text-gray-300 list-disc pl-5">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">
          Key Implementation
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-purple-700/50 bg-zinc-900/60 p-4">
            <h3 className="font-semibold text-purple-300">
              Route-Aware React UI
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Built the SPA routing structure and synchronized navigation state
              with user and photo routes, allowing the interface to display
              the correct user context throughout navigation.
            </p>
          </article>

          <article className="rounded-xl border border-purple-700/50 bg-zinc-900/60 p-4">
            <h3 className="font-semibold text-purple-300">
              MongoDB API Integration
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Implemented Express/Mongoose routes, populated nested user data,
              and reshaped database responses to match the React application's
              data contract.
            </p>
          </article>

          <article className="rounded-xl border border-purple-700/50 bg-zinc-900/60 p-4">
            <h3 className="font-semibold text-purple-300">
              Authentication &amp; Sessions
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Implemented registration, login/logout, session validation, and
              protected routes for authenticated users.
            </p>
          </article>

          <article className="rounded-xl border border-purple-700/50 bg-zinc-900/60 p-4">
            <h3 className="font-semibold text-purple-300">
              Mentions &amp; Comments
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Designed the database support, validation, API queries, and UI
              behavior required for users to mention other users inside
              comments.
            </p>
          </article>
        </div>
      </section>

      <section id="deployment-evolution" className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">
          Deployment &amp; Architecture Evolution
        </h2>

        <p className="mt-3 leading-8 text-gray-300">
          After completing the original application, I led its migration from
          Vite/Express toward Next.js and serverless deployment. This exposed
          and required solving several production-level issues.
        </p>

        <ul className="mt-4 space-y-2 leading-8 text-gray-300 list-disc pl-5">
          {deploymentWork.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 className="mt-8 text-lg font-semibold text-purple-300">
          AWS Architecture Exploration
        </h3>

        <ul className="mt-3 space-y-2 leading-8 text-gray-300 list-disc pl-5">
          {awsArchitecture.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">
          Challenges &amp; Solutions
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            [
              "Database / UI mismatch",
              "Populated nested MongoDB references and reshaped responses to match the frontend.",
            ],
            [
              "Serverless sessions",
              "Recognized that in-memory sessions are unsuitable for ephemeral functions and evaluated persistent session/JWT alternatives.",
            ],
            [
              "Mobile uploads",
              "Diagnosed Vercel's 413 payload limit and investigated differences between desktop and mobile upload behavior.",
            ],
            [
              "Vercel migration",
              "Found stale Vite project settings causing failed Next.js builds and corrected the deployment configuration.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-xl border border-purple-700/50 bg-zinc-900/60 p-4"
            >
              <h3 className="font-semibold text-purple-300">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">
          What This Project Demonstrates
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "React",
            "Next.js",
            "Express",
            "MongoDB / Mongoose",
            "AWS S3",
            "Vercel",
            "Serverless Architecture",
            "Authentication",
            "REST APIs",
            "Agile / Scrum",
            "Deployment Debugging",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-purple-700/50 bg-zinc-900/60 px-3 py-1.5 text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-800 pt-8 text-sm text-gray-400">
        PhotoShare demonstrates my ability to work across the full stack,
        coordinate an Agile team, and continue improving an application beyond
        its initial implementation through deployment and architecture work.
      </footer>
    </main>
  );
}