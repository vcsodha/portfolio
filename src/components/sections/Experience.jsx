import Section from "../Section"

function Experience() {
  const items = [
    {
      role: "Data Engineer",
      company: "Bitmechanix Solutions",
      place: "Gujarat, India",
      period: "Jan 2023 – Dec 2023",
      bullets: [
        "Engineered automated Python ETL pipelines and Nginx-backed services, reducing manual entry by 33%. ",
        "Optimized PostgreSQL query execution and schema design, ensuring sub-second response for distributed data tasks.",
        "Streamlined deployment by implementing CI/CD automation and build pipelines, reducing production rollout time by 18%.",
        " Implemented custom observability metrics and structured logging to resolve service bottlenecks 26% faster.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Wings Tech Solution",
      place: "Gujarat, India",
      period: "Aug 2022 – Dec 2022",
      bullets: [
        "Developed REST APIs and web services in Python and Java, supporting external partner integrations.",
        "Enhanced application stability through defensive programming and rigorous validation/debugging processes.",
        "Collaborated on refactoring legacy codebases, improving system reliability and scalability by 15%.",
        "Engineered multi-threaded data processing tasks in Java to handle large-scale partner integrations, ensuring thread safety and data integrity.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "AceSoftex",
      place: "Gujarat, India",
      period: "Jun 2022 – Aug 2022",
      bullets: [
        "Built backend feature enhancements for API-driven applications using Node.js and MySQL, ensuring scalability for growing user datasets.",
        "Performed validation and debugging for RESTful services, identifying edge-case vulnerabilities and improving overall application stability.",
        "Refactored database queries to improve data retrieval logic, resulting in a noticeable reduction in average API response latency",
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
