import Section from "../Section"

function Skills() {
  const groups = [
    {
      title: "Languages",
      items: ["Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Backend & APIs",
      items: ["REST APIs", "FastAPI", "Flask", "Django", "Node.js"],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "SQL (Schema Design)"],
    },
    {
      title: "Systems & Infra",
      items: ["Docker", "AWS", "Linux", "Git", "CI/CD Pipelines"],
    },
    {
      title: "Core CS",
      items: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Computer Networks",
        "System Design",
      ],
    },
    {
      title: "Data & AI",
      items: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "LLM Integration",
        "PDF Generation",
      ],
    },
  ]

  return (
    <Section id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-slate-300 max-w-2xl">
            A snapshot of technologies and fundamentals I’m comfortable working
            with, focused on backend systems, full-stack development, and applied AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-slate-950/40 p-8"
            >
              <h3 className="font-semibold mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm rounded-xl border border-white/10 px-3 py-1 text-slate-300"
                  >
                    {item}
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
