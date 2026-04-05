import Link from "next/link";

export const metadata = {
  title: "PhotoShare Case Study | Josiah Blanding",
  description:
    "Case study for a sprint-based team photo sharing app built with React, Node, Express, and MongoDB.",
};

const sprintHighlights = [
  "Implemented SPA routing shell with a master-detail layout for user list, detail view, and photo view.",
  "Built route-aware top bar context text that updates to Details of or Photos of the active user.",
  "Connected UserList, UserDetail, and UserPhotos views to backend APIs using axios.",
  "Migrated backend routes to MongoDB/Mongoose and returned UI-friendly response payloads.",
  "Populated comment user references, then reshaped nested objects for frontend compatibility.",
  "Maintained sprint workflow as Scrum Master while documenting team execution and decisions.",
];

const responsibilities = [
  "Scrum Master for a five-person team.",
  "Led MongoDB/Express API implementation and integration details.",
  "Completed UserList and UserDetail frontend work.",
  "Primary documentation owner for sprint deliverables.",
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function PhotoShareCaseStudy() {
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
          PhotoShare - Sprint Based Social Media Platform
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
          PhotoShare is a team-built web app focused on helping everyday users share photos and
          comments with friends. My work centered on sprint delivery across API integration,
          MongoDB-backed data flow, and route-aware frontend behavior.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-wide text-purple-300">Role</p>
            <p className="mt-1 text-sm">Scrum Master + Full-Stack Contributor</p>
          </div>
          <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-wide text-purple-300">Team</p>
            <p className="mt-1 text-sm">5 developers</p>
          </div>
          <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-wide text-purple-300">Timeline</p>
            <p className="mt-1 text-sm">~1 month (10+ hours personal implementation)</p>
          </div>
          <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-wide text-purple-300">Stack</p>
            <p className="mt-1 text-sm">React, MUI, Node, Express, MongoDB</p>
          </div>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Problem And Audience</h2>
        <p className="mt-3 leading-8 text-gray-300">
          The product solves a simple social problem, helping people share memories and reconnect
          through photo timelines.
          The audience is general users, not a niche professional segment.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Screenshots</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          User details, photo board, and comment thread views from the app.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <img
            src={`${basePath}/photo-app-details.png`}
            alt="Photo app details view"
            className="h-auto w-full rounded-xl border border-purple-700/50"
          />
          <img
            src={`${basePath}/photo-app-photos.png`}
            alt="Photo app photos view"
            className="h-auto w-full rounded-xl border border-purple-700/50"
          />
          <img
            src={`${basePath}/photo-app-comments.png`}
            alt="Photo app comments view"
            className="h-auto w-full rounded-xl border border-purple-700/50"
          />
        </div>
      </section>

      <section id="sprint-highlights" className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Sprint 1 And Sprint 2 Highlights</h2>
        <ul className="mt-4 space-y-3 text-gray-300 leading-8 list-disc pl-5">
          {sprintHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">My Responsibilities</h2>
        <ul className="mt-4 space-y-3 text-gray-300 leading-8 list-disc pl-5">
          {responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Implementation Highlights</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="min-w-0 rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <h3 className="text-purple-300">SPA Routing Shell</h3>
            <pre className="mt-3 max-w-full overflow-x-auto rounded-lg bg-slate-950/80 p-3 text-[11px] text-gray-300 sm:text-xs">
{`<HashRouter>
  <Grid container spacing={8}>
    <Grid item sm={3}><UserList /></Grid>
    <Grid item sm={9}>
      <Switch>
        <Route path="/users/:userId" render={props => <UserDetail {...props} />} />
        <Route path="/photos/:userId" render={props => <UserPhotos {...props} />} />
      </Switch>
    </Grid>
  </Grid>
</HashRouter>`}
            </pre>
          </article>

          <article className="min-w-0 rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <h3 className="text-purple-300">Route-Aware Top Bar Context</h3>
            <pre className="mt-3 max-w-full overflow-x-auto rounded-lg bg-slate-950/80 p-3 text-[11px] text-gray-300 sm:text-xs">
{`const path = this.props.location.pathname;
if (path.includes("/users/") || path.includes("/photos/")) {
  const userId = path.split("/").pop();
  axios.get("/user/" + userId).then((response) => {
    const prefix = path.includes("/photos/") ? "Photos of " : "Details of ";
    this.setState({ contextText: prefix + response.data.first_name + " " + response.data.last_name });
  });
}`}
            </pre>
          </article>

          <article className="min-w-0 rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <h3 className="text-purple-300">Mongo Route Projection</h3>
            <pre className="mt-3 max-w-full overflow-x-auto rounded-lg bg-slate-950/80 p-3 text-[11px] text-gray-300 sm:text-xs">
{`app.get("/user/list", function (request, response) {
  User.find({}, "_id first_name last_name", function (err, users) {
    if (err) return response.status(500).send(JSON.stringify(err));
    response.status(200).send(users);
  });
});`}
            </pre>
          </article>

          <article className="min-w-0 rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <h3 className="text-purple-300">Populate + Response Reshape</h3>
            <pre className="mt-3 max-w-full overflow-x-auto rounded-lg bg-slate-950/80 p-3 text-[11px] text-gray-300 sm:text-xs">
{`Photo.find({ user_id: id }, "_id file_name date_time user_id comments")
  .populate("comments.user_id", "_id first_name last_name")
  .exec(function (err, photos) {
    const plainPhotos = JSON.parse(JSON.stringify(photos));
    plainPhotos.forEach((photo) => {
      photo.comments.forEach((c) => {
        c.user = c.user_id;
        delete c.user_id;
      });
    });
    res.status(200).send(plainPhotos);
  });`}
            </pre>
          </article>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Challenges And Solutions</h2>
        <div className="mt-4 space-y-4">
          <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <p className="text-purple-300">Challenge: Mongoose model shape mismatched the frontend data contract.</p>
            <p className="mt-1 text-sm text-gray-300">Solution: Populated nested comment users and reshaped payload objects from user_id to user.</p>
          </div>
          <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <p className="text-purple-300">Challenge: Route context and selected user state drifted during navigation.</p>
            <p className="mt-1 text-sm text-gray-300">Solution: Synced state with route/hash updates and refreshed context text on route changes.</p>
          </div>
          <div className="rounded-xl border border-purple-700/50 bg-slate-900/70 p-4">
            <p className="text-purple-300">Challenge: Team consistency across sprint workflows.</p>
            <p className="mt-1 text-sm text-gray-300">Solution: Scrum-driven checkpoints and clear run/rebuild/lint documentation for shared execution.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins text-purple-400">Learnings And Next Steps</h2>
        <p className="mt-3 leading-8 text-gray-300">
          This project strengthened my understanding of API call patterns, request-response modeling,
          and how backend schema decisions affect frontend developer experience.
        </p>
        <p className="mt-3 leading-8 text-gray-300">
          Next sprint scope includes authentication, protected routes, comments posting, uploads,
          and registration flows to transition from prototype behavior into a real user platform.
        </p>
      </section>

      <section className="mb-10 flex flex-wrap gap-3">
        <a
          href="#sprint-highlights"
          className="rounded-md bg-purple-500 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-400 transition"
        >
          View Sprint Highlights
        </a>
        <a
          href="mailto:josiahblanding.dev@gmail.com"
          className="rounded-md border border-purple-500/70 px-4 py-2 text-sm text-purple-200 hover:bg-purple-800/40 transition"
        >
          Contact Me
        </a>
      </section>
    </main>
  );
}