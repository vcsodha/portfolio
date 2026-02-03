import Section from "../Section"

function Contact() {
  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-slate-300 max-w-xl">
            If you’re hiring for backend / full-stack / software roles, I’d love to connect.
            The fastest way is email.
          </p>

          <div className="mt-10 flex flex-col gap-3 text-slate-300">
            <a className="hover:text-sky-400" href="mailto:sodhavidisha@gmail.com">
              sodhavidisha@gmail.com
            </a>
            <a
              className="hover:text-sky-400"
              href="https://www.linkedin.com/in/vidisha-sodha"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-sky-400"
              href="https://github.com/vcsodha"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-10">
          <p className="text-slate-200 font-semibold mb-2">Quick links</p>
          <div className="flex flex-col gap-3 text-slate-300">
            <a
              className="hover:text-sky-400"
              href="/Vidisha_Sodha_Resume_.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume (PDF)
            </a>
            <a
              className="hover:text-sky-400"
              href="https://github.com/vcsodha/market_data_platform"
              target="_blank"
              rel="noreferrer"
            >
              Data Integration, Analytics & Monitoring Platform
            </a>
            <a
              className="hover:text-sky-400"
              href="https://github.com/vcsodha/ai-chatbot-flask"
              target="_blank"
              rel="noreferrer"
            >
              AI Chatbot 
            </a>
          </div>

          <div className="mt-8 text-sm text-slate-500">
           
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
