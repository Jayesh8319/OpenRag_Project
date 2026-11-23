export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f7f4] text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-teal-700 text-lg font-bold text-white">
              O
            </div>
            <div>
              <p className="font-semibold tracking-tight">OpenRAG Project</p>
              <p className="text-xs text-slate-500">A 20-day MVP build</p>
            </div>
          </div>
          <span className="rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800">
            Day 01 · Foundation
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-800">
          Your documents, ready for questions
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Find answers in your knowledge, with sources to back them up.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          This MVP will turn uploaded documents into searchable knowledge and
          grounded chat answers. Today&apos;s work establishes the app and API
          foundations.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-teal-800">01 · Foundation</p>
            <h2 className="mt-3 text-xl font-semibold">App scaffold</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              FastAPI and Next.js are in place. The API health check is the
              first working endpoint.
            </p>
            <p className="mt-5 text-sm font-semibold text-teal-800">
              Ready for Day 1
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">02 · Ingestion</p>
            <h2 className="mt-3 text-xl font-semibold">Add knowledge</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Document upload, parsing, and indexing will be added in upcoming
              milestones.
            </p>
            <p className="mt-5 text-sm font-medium text-slate-500">
              Coming next
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">03 · Retrieval</p>
            <h2 className="mt-3 text-xl font-semibold">Ask with citations</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Retrieval and cited answers will follow once documents can be
              indexed.
            </p>
            <p className="mt-5 text-sm font-medium text-slate-500">
              Planned
            </p>
          </article>
        </div>

        <div className="mt-10 rounded-2xl bg-slate-900 p-6 text-white sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-teal-300">Backend status</p>
            <p className="mt-1 text-sm text-slate-300">
              Start the API, then check its health at{" "}
              <code className="rounded bg-slate-800 px-2 py-1 text-white">
                /health
              </code>
              .
            </p>
          </div>
          <p className="mt-4 text-sm text-slate-400 sm:mt-0">
            API docs: <code>http://127.0.0.1:8000/docs</code>
          </p>
        </div>
      </section>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-5 text-sm text-slate-500">
          A focused document-Q&amp;A learning MVP.
        </div>
      </footer>
    </main>
  );
}
