import Section from "../Section"

function Skills() {
  const groups = [
    { title: "Languages", items: ["Python", "Java", "JavaScript"] },
    { title: "Backend & APIs", items: ["REST API Design", "FastAPI", "Flask", "Node.js", "Express"] },
    { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL"] },
    { title: "System & Infra", items: ["Docker", "AWS", "Linux", "Git", "CI/CD"] },
    { title: "Core CS", items: ["DSA", "OOP", "Concurrency", "Operating Systems"] },
    { title: "Data & AI", items: ["Pandas", "NumPy", "Scikit-learn", "LLM APIs"] },
  ]

  return (
    <Section id="skills">
        <div className="max-w-7xl mx-auto">
      <div className="mb-14">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p className="text-slate-300 max-w-2xl">
          A snapshot of what I’m comfortable building with — focused on backend + systems + applied AI.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-3xl border border-white/10 bg-slate-950/40 p-8"
          >
            <h3 className="font-semibold mb-4">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((x) => (
                <span
                  key={x}
                  className="text-sm rounded-xl border border-white/10 px-3 py-1 text-slate-300"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </Section>
  )
}

export default Skills
