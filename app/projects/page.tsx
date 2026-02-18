export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-28">

      <h1 className="text-4xl font-semibold mb-16">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">
            AI-Powered Sentiment Analysis System
          </h3>

          <p className="text-slate-600 text-sm mb-4">
            End-to-end NLP pipeline for review classification and insight reporting.
          </p>

          <p className="text-xs text-slate-500 mb-6">
            Python • TF-IDF • Scikit-learn • NLP
          </p>

          <a
            href="https://github.com/dasaradhdharmesh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-900 hover:text-white transition text-sm"
          >
            GitHub
          </a>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">
            Resume Analysis & Career Readiness Platform
          </h3>

          <p className="text-slate-600 text-sm mb-4">
            Resume–JD skill matching system with scoring and analytics insights.
          </p>

          <p className="text-xs text-slate-500 mb-6">
            Python • SQL • Text Processing • Scoring Logic
          </p>

          <a
            href="https://github.com/dasaradhdharmesh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-900 hover:text-white transition text-sm"
          >
            GitHub
          </a>
        </div>

      </div>

    </main>
  );
}
