import Link from "next/link";
import Footer from "@/components/footer.jsx";

export default function Home() {
    return (
        <>
        <main id="home" className="mx-auto max-w-5xl px-6 py-8 sm:py-10 text-gray-200">
            <header className="mb-4 space-y-2">
            <h1 className="text-3xl font-bold font-poppins mt-2 tracking-wide text-purple-400">Josiah Blanding</h1>
            <p className="text-lg text-muted-foreground font-playfair italic">
                <span className="inline-flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                        <path d="M3 4h18v12H3z" />
                        <path d="M8 20h8" />
                        <path d="M12 16v4" />
                    </svg>
                    Charlotte, NC
                </span>
            </p>
            <p className="text-lg text-muted-foreground font-playfair italic">
                <span className="inline-flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                        <rect x="2" y="4" width="20" height="14" rx="2" ry="2" />
                        <path d="M7 8h10" />
                        <path d="M7 12h10" />
                        <path d="M7 16h10" />
                    </svg>
                    Software Developer
                </span>
            </p>
            </header>
            <p className="font-sans text-gray-300 tracking-wide leading-8 max-w-2xl mt-2 text-lg">
                Welcome to my domain. I'm Josiah, someone who spends the majority of their time coding and the rest being a secret agent. In my glory days I was a digital creator and now I aspire to be a part of the creation process through software development.
            </p>

            <section id="projects" className="mt-10 scroll-mt-20">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold font-poppins text-purple-400">Projects</h2>
                    <p className="text-sm text-muted-foreground mt-1">Three curated builds that show real impact in UX, performance, and data management.</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <article className="group rounded-2xl border border-purple-700/60 bg-gradient-to-br from-slate-900/80 to-purple-950/70 p-5 transition hover:-translate-y-1 hover:shadow-[0_15px_60px_-20px_rgba(80,0,200,0.6)]">
                        <div className="mb-4 flex items-center justify-between">
                            <span className="rounded-lg bg-purple-900/40 px-3 py-1 text-xs font-semibold text-purple-200">Electron + React</span>
                            <span className="text-xs text-muted-foreground">2026</span>
                        </div>
                        <h3 className="text-xl font-semibold text-purple-50">IG Metrics - Desktop Analytics Tool</h3>
                        <p className="mt-2 text-sm text-gray-300 leading-7">A desktop application that analyzes exported Instagram follower data and visualizes relationship metrics. Features import/analysis of datasets, identification of non-followers, engagement stats, interactive charts, and CSV export for large username lists.</p>
                        <div className="mt-4 flex gap-2">
                            <Link href="/projects/ig-metrics" className="rounded-md bg-purple-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-purple-400 transition">Case Study</Link>
                            <a target="_blank" href="https://github.com/jblandin-art/instagram-metrics-app/releases/tag/v1.0.0" className="rounded-md border border-purple-500/70 px-3 py-1.5 text-sm text-purple-200 hover:bg-purple-800/50 transition">Download</a>
                        </div>
                    </article>

                    <article className="group rounded-2xl border border-purple-700/60 bg-gradient-to-br from-slate-900/80 to-purple-950/70 p-5 transition hover:-translate-y-1 hover:shadow-[0_15px_60px_-20px_rgba(80,0,200,0.6)]">
                        <div className="mb-4 flex items-center justify-between">
                            <span className="rounded-lg bg-purple-900/40 px-3 py-1 text-xs font-semibold text-purple-200">PostgreSQL + Bash</span>
                            <span className="text-xs text-muted-foreground">2026</span>
                        </div>
                        <h3 className="text-xl font-semibold text-purple-50">Periodic Table Database + Interactive CLI</h3>
                        <p className="mt-2 text-sm text-gray-300 leading-7">A relational database cleanup and scripting project where I repaired a legacy schema, normalized element types into a lookup table, enforced constraints and foreign keys, and built an executable Bash script that queries elements by atomic number, symbol, or name.</p>
                        <div className="mt-4 flex gap-2">
                            <Link href="/projects/periodic-table" className="rounded-md bg-purple-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-purple-400 transition">Case Study</Link>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/jblandin-art/Periodic-Table-Database" className="rounded-md border border-purple-500/70 px-3 py-1.5 text-sm text-purple-200 hover:bg-purple-800/50 transition">Code</a>
                        </div>
                    </article>

                    <article className="group rounded-2xl border border-purple-700/60 bg-gradient-to-br from-slate-900/80 to-purple-950/70 p-5 transition hover:-translate-y-1 hover:shadow-[0_15px_60px_-20px_rgba(80,0,200,0.6)]">
                        <div className="mb-4 flex items-center justify-between">
                            <span className="rounded-lg bg-purple-900/40 px-3 py-1 text-xs font-semibold text-purple-200">React + Node + MongoDB</span>
                            <span className="text-xs text-muted-foreground">2026</span>
                        </div>
                        <h3 className="text-xl font-semibold text-purple-50">PhotoShare - Social Media Platform</h3>
                        <p className="mt-2 text-sm text-gray-300 leading-7">A sprint-based team build of a photo sharing app with route-aware UX, user detail/photo flows, MongoDB-backed APIs, and comment-thread user linking. I led as Scrum Master and completed major API and frontend integration work.</p>
                        <div className="mt-4 flex gap-2">
                            <Link href="/projects/photo-share" className="rounded-md bg-purple-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-purple-400 transition">Case Study</Link>
                            <Link href="/projects/photo-share#sprint-highlights" className="rounded-md border border-purple-500/70 px-3 py-1.5 text-sm text-purple-200 hover:bg-purple-800/50 transition">Sprint Highlights</Link>
                        </div>
                    </article>
                </div>
            </section>

            <section id="contact" className="mt-10 mb-8">
                <div className="mb-4">
                    <h2 className="text-2xl font-bold font-poppins text-purple-400">Contact</h2>
                    <p className="mt-1 text-sm text-muted-foreground">I'm currently taking internships and looking to contribute to impactful projects. Feel free to reach out at josiahblanding.dev@gmail.com and my resume is available for download below.</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm">
                    <a href="mailto:josiahblanding.dev@gmail.com" className="rounded-md bg-purple-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-400">Email me</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1gPmN441X0kzEZO27OXUgc4zADaKM18mv/view?usp=sharing" className="rounded-md border border-purple-500/50 px-4 py-2 text-sm text-purple-200 transition hover:bg-purple-800/40">Download resume</a>
                </div>
            </section>
        </main>
        {// <Footer /> Can't Decide if I want the footer or not :(
        }
        </>
    );
}