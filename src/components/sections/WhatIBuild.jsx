import Section from "../Section"

function WhatIBuild() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-6">What I build</h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
            Backend systems that ingest data, enforce correctness, and expose reliable APIs.
            I enjoy turning messy problems into structured services that are easy to operate and extend.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-7">
            <p className="text-slate-200 font-semibold mb-1">APIs & Data Models</p>
            <p className="text-slate-400">
              Designing REST endpoints, validating inputs, and modeling schemas for integrity and scale.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-7">
            <p className="text-slate-200 font-semibold mb-1">Analytics, Monitoring & Background Jobs</p>
            <p className="text-slate-400">
              Rolling averages, deltas, and anomaly signals — plus background processing to keep workflows stable under load.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-7">
            <p className="text-slate-200 font-semibold mb-1">AI integrations</p>
            <p className="text-slate-400">
              Provider-agnostic LLM interfaces designed for safe integration across local, mock, and external backends.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default WhatIBuild
