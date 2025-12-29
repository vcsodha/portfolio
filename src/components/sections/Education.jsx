import Section from "../Section"

function Education() {
  return (
    <Section id="education">
    <div class name = "pt-32">
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Education
          </h2>

          <p className="text-slate-300 max-w-xl leading-relaxed">
            My academic journey helped me build a strong foundation in
            computer science fundamentals, with an emphasis on backend
            engineering, systems, and applied machine learning.
          </p>
        </div>
        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-8">
            <h3 className="text-xl font-semibold">
              Master of Computer Science
            </h3>

            <p className="text-slate-400 mt-1">
              Purdue University · Indiana, USA
            </p>

            <p className="text-slate-500 text-sm mt-1">
              Jan 2024 – Dec 2025
            </p>

            <p className="text-slate-300 mt-4">
              Coursework: Algorithm, Database Systems, Game Design Core Skills, Heuristic Problem Solving, Human Computer
Interface, Machine Learning, Operating Systems, Software Design, Software Engineering, Web Development
            </p>
          </div>


          <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-8">
            <h3 className="text-xl font-semibold">
              Bachelor of Electronics & Communication Engineering
            </h3>

            <p className="text-slate-400 mt-1">
              G H Patel College of Engineering & Technology · Gujarat, India
            </p>

            <p className="text-slate-500 text-sm mt-1">
              2019 – 2023
            </p>

          </div>
        </div>
      </div>
      </div>
    </Section>
  )
}

export default Education