import Section from "../Section"

function Experience() {
  const items = [
    {
      role: "Engineering Intern",
      company: "Bitmechanix Solutions",
      place: "India",
      period: "Jan 2023 – Dec 2023",
      bullets: [
        "Optimized backend data processing workflows and automated pipelines using C and shell scripting, improving efficiency and reproducibility in production simulation systems ",
        "Implemented structured logging, monitoring, and validation checks, enhancing observability and reducing debugging time",
        "Analyzed runtime performance and system bottlenecks, contributing to ~14.5 hours/week productivity improvement and ~9.5% operational cost reduction while collaborating with cross-functional teams",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "AceSoftex",
      place: "Gujarat, India",
      period: "Jun 2022 – Aug 2022",
      bullets: [
        "Developed and enhanced backend APIs using Node.js, JavaScript, and MySQL in production-style environments",
        "Diagnosed API performance issues and implemented validation checks to improve service reliability",
        "Tested and debugged backend services to identify performance bottlenecks and ensure stable API behavior",
      ],
    },
  ]

  return (
    <Section id="experience">
      <div className="mb-14">
        <h2 className="text-4xl font-bold mb-4">Experience</h2>
        <p className="text-slate-300 max-w-2xl">
          Professional experience in Python, Golang, and Java. Proven track record in developing scalable web services, optimizing distributed systems, and implementing CI/CD automation. Adept at performance tuning and troubleshooting in Linux/Windows environments.
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
