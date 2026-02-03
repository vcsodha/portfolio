import { motion } from "framer-motion"
import Section from "../Section"

function FeaturedProject({ title, desc, bullets, tech, link, demo }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur p-10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
    >
      <div className="flex items-start justify-between gap-6">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="flex gap-4 text-sm">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:underline"
          >
            GitHub →
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-sky-400"
            >
              Demo →
            </a>
          )}
        </div>
      </div>

      <p className="text-slate-300 mt-4 mb-6">{desc}</p>

      <ul className="list-disc list-inside space-y-2 text-slate-400">
        {bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>

      <div className="mt-7 text-sm text-slate-500">{tech}</div>
    </motion.div>
  )
}

function SmallProject({ title, desc, tech }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-white/10 bg-slate-950/40 p-6"
    >
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-slate-400 text-sm mb-3">{desc}</p>
      <p className="text-xs text-slate-500">{tech}</p>
    </motion.div>
  )
}

function ProjectMoments() {
  return (
    <Section id="projects">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-slate-300 max-w-2xl">
          Projects that reflect how I design, build, and reason about software systems.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mb-24">
        <FeaturedProject
          title="Market Data Platform"
          desc="Backend system for ingesting simulated market tick data and exposing analytics APIs."
          bullets={[
            "Schema validation and rate-limited ingestion endpoints",
            "Time-series data model indexed by symbol and timestamp",
            "Rolling averages, deltas, and volatility over configurable windows",
            "Background processing and alerting for stability",
          ]}
          tech="Python · FastAPI · PostgreSQL · Docker"
          link="https://github.com/vcsodha/market_data_platform"
        />

        <FeaturedProject
          title="AI Chatbot (Local LLM)"
          desc="Stateful chatbot running entirely on a locally hosted LLM with persistent sessions."
          bullets={[
            "Explicit chat and message modeling for session persistence",
            "Provider-agnostic LLM interface (local, mock, external)",
            "Containerized deployment with public UI",
          ]}
          tech="Python · Flask · SQLite · Docker · Ollama"
          link="https://github.com/vcsodha/ai-chatbot-flask"
          demo="https://ai-chatbot-flask-5p5h.onrender.com/ui"
        />

        <FeaturedProject
          title="Resume Analyzer"
          desc="Full-stack web app that evaluates resume–job fit using skill extraction, weighted scoring, and actionable feedback."
          bullets={[
            "Extracts and normalizes technical skills from resumes and job descriptions",
            "Weighted scoring based on required vs preferred skills",
            "Generates improvement suggestions and downloadable PDF reports",
          ]}
          tech="Python · FastAPI · JavaScript · React · HTML · CSS · Groq LLM API"
          link="https://github.com/vcsodha/resume_analyzer"
          demo="https://resume-analyzer-2r8n.onrender.com"
        />

      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-8 text-slate-200">
          Additional Projects
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SmallProject
            title="AI-Powered Partner Data Validator"
            desc="Validated uploaded datasets using FastAPI schemas with structured error reporting."
            tech="FastAPI · Pydantic · Data Validation"
          />

          <SmallProject
            title="Collaborative Code Editor"
            desc="Real-time code collaboration using WebSockets with session recovery logic."
            tech="WebSockets · Node.js · Real-Time Systems"
          />

          <SmallProject
            title="ExpenTrack"
            desc="Full-stack expense tracking app with REST APIs, MongoDB models, and React dashboards."
            tech="React · Node.js · MongoDB · REST APIs"
          />

          <SmallProject
            title="Exoplanet Detection (ML)"
            desc="ML pipeline on Kepler flux data using SMOTE and multiple classifiers."
            tech="Scikit-learn · SVM · Neural Networks · XGBoost"
          />
        </div>
      </div>
    </Section>
  )
}

export default ProjectMoments