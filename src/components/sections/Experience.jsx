import Section from "../Section"

function Experience() {
  const items = [
    {
      role: "Engineering Intern",
      company: "Bitmechanix Solutions",
      place: "Ahmedabad, India",
      period: "Jan 2023 - Apr 2023",
      bullets: [
        "Reviewed simulation workflows and data dependencies to find inefficiencies and repeated processing.",
        "Helped restructure processing stages and data handling logic to reduce manual intervention.",
        "Built small automation scripts and execution routines for consistent simulation runs.",
        "Tracked metrics; contributed to ~14.5 hours/week reduction and ~9.5% operational cost reduction.",
      ],
    },
    {
      role: "Developer Intern",
      company: "AceSoftex",
      place: "Rajkot, India",
      period: "Jun 2022 - Jul 2022",
      bullets: [
        "Implemented small feature updates and bug fixes using JavaScript, Node.js, and MySQL.",
        "Assisted in backend API testing to identify basic performance issues and error cases.",
        "Added input checks and basic edge-case handling to reduce errors during testing.",
        "Participated in team discussions and code reviews to learn development workflows.",
      ],
    },
  ]

  return (
    <Section id="experience">
      <div className="mb-14">
        <h2 className="text-4xl font-bold mb-4">Experience</h2>
        <p className="text-slate-300 max-w-2xl">
          Internships where I focused on workflow efficiency, backend reliability, and improving engineering processes.
        </p>
      </div>

      <div className="space-y-10">
        {items.map((it) => (
          <div
            key={it.role + it.company}
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
                <li key={idx} className="text-slate-300/90">{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Experience
