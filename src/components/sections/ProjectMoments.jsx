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
          title="Data Integration, Analytics & Monitoring Platform"
          desc="Scalable backend system for ingesting, processing, and analyzing structured data through production-style REST APIs."
          bullets={[
           "Designed scalable backend pipelines to ingest, process, and analyze data using Python and PostgreSQL",
           "Built REST APIs supporting multi-stage workflows with strict correctness and validation guarantees",
           "Implemented rolling averages, deltas, and anomaly signals to monitor system behavior under varying data volumes",
           "Ensured data integrity, reproducibility, and reliability across production-like workloads",
          ]}
          tech="Python · FastAPI · PostgreSQL · SQL · Docker"

          link="https://github.com/vcsodha/market_data_platform"
        />

        <FeaturedProject
          title="AI Chatbot Platform"
          desc="Backend-driven chatbot platform with secure session handling and production-safe API workflows."
          bullets={[
            "Built backend infrastructure supporting secure session handling and persistent conversations",
            "Designed provider-agnostic service interfaces enabling safe integration with multiple model backends",
            "Exposed production-style APIs for chat workflows and message handling",
            "Containerized services using Docker to ensure reliable and reproducible deployments",
          ]}
          tech="Python · Flask · SQLite · Docker · Ollama"

          link="https://github.com/vcsodha/ai-chatbot-flask"
          demo="https://ai-chatbot-flask-5p5h.onrender.com/ui"
        />

        <FeaturedProject
          title="Resume Match Analyzer"
          desc="Full-stack web application that analyzes resume–job alignment using structured skill extraction and scoring."
          bullets={[
            "Built API-driven workflows to extract and normalize technical skills from resumes and job descriptions",
            "Implemented weighted scoring logic to compare required and preferred skills",
            "Generated structured feedback and downloadable reports to highlight gaps and improvement areas",
          ]}
          tech="Python · FastAPI · JavaScript · React · HTML · CSS · LLM API"

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