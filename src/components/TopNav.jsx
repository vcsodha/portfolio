import { scrollToId } from "../utils/scrollToId"
function TopNav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-3 backdrop-blur">
          <div className="font-semibold tracking-tight">
            <span className="text-sky-400">Vidisha</span>{" "}
            <span className="text-slate-300">Sodha</span>
          </div>

          <div className="hidden sm:flex gap-5 text-sm text-slate-300">
  <button onClick={() => scrollToId("projects")} className="hover:text-sky-400">
    Projects
  </button>
  <button onClick={() => scrollToId("skills")} className="hover:text-sky-400">
    Skills
  </button>
  <button onClick={() => scrollToId("education")} className="hover:text-sky-400">
    Education
  </button>
  <button onClick={() => scrollToId("experience")} className="hover:text-sky-400">
    Experience
  </button>
  <button onClick={() => scrollToId("contact")} className="hover:text-sky-400">
    Contact
  </button>
</div>

          <a
            href="/Vidisha_Sodha_Resume_.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-sm rounded-xl border border-white/10 px-4 py-2 hover:border-sky-400/60"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopNav