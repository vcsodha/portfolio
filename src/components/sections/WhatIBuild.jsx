import Section from "../Section"

function WhatIBuild() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            What I build
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
            Backend systems that ingest data, compute useful insights, and serve
            clean APIs. I enjoy turning messy problems into structured services.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-7">
            <p className="text-slate-200 font-semibold mb-1">APIs & Data models</p>
            <p className="text-slate-400">
              Designing endpoints, validating inputs, and building database schemas that scale.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-7">
            <p className="text-slate-200 font-semibold mb-1">Analytics & background processing</p>
            <p className="text-slate-400">
              Rolling windows, deltas, volatility - and workers to keep ingestion stable.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-7">
            <p className="text-slate-200 font-semibold mb-1">AI integrations</p>
            <p className="text-slate-400">
              LLM interfaces that can switch between local, mock, and external providers.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default WhatIBuild
