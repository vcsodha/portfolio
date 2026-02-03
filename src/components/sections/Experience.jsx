import Section from "../Section"

function Experience() {
  const items = [
    {
      role: "Engineering Intern",
      company: "Bitmechanix Solutions",
      place: "Ahmedabad, India",
      period: "Jan 2023 – Apr 2023",
      bullets: [
        "Instrumented runtime and usage metrics to identify performance bottlenecks and feature adoption trends.",
        "Built backend workflows and automation tooling supporting production systems and internal operations.",
        "Partnered with engineers and cross-functional stakeholders to design and iterate on internal tools.",
        "Supported production workflows by monitoring services, debugging runtime issues, and iterating post-deployment.",
        "Contributed to a multi-service codebase by making changes safely through testing, debugging, and monitoring.",
        "Contributed to ~14.5 hours/week productivity gains and ~9.5% operational cost reduction through workflow improvements.",
      ],
    },
    {
      role: "Developer Intern",
      company: "AceSoftex",
      place: "Rajkot, India",
      period: "Jun 2022 – Jul 2022",
      bullets: [
        "Implemented feature updates and production bug fixes across backend services and internal web interfaces.",
        "Worked with JavaScript, Node.js, and MySQL to improve API behavior, stability, and error handling.",
        "Debugged REST endpoints and edge cases, improving reliability through input validation and safer flows.",
        "Participated in team discussions and code reviews while following collaborative development workflows.",
      ],
    },
  ]

  return (
    <Section id="experience">
      <div className="mb-14">
        <h2 className="text-4xl font-bold mb-4">Experience</h2>
        <p className="text-slate-300 max-w-2xl">
          Internships where I worked on backend workflows, reliability, and data-driven process improvements in production-style environments.
        </p>
      </div>

      <div className="space-y-10">
        {items.map((it) => (
          <div
            key={`${it.role}-${it.company}-${it.period}`}
            className="rounded-3xl border border-white/10 bg-slate-950/40 p-9"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold">
                  {it.role} · {it.company}
                </h3>
                <p className="text-slate-400 text-sm">{it.place}</p>
              </div>
              <p className="text-slate-500 text-sm">{it.period}</p>
            </div>

            <ul className="mt-6 list-disc list-inside space-y-2 text-slate-300">
              {it.bullets.map((b, idx) => (
                <li key={idx} className="text-slate-300/90">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Experience
