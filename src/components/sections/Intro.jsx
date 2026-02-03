import { motion } from "framer-motion"
import Section from "../Section"

function Intro() {
  return (
    <Section>
      <div className="relative min-h-screen grid lg:grid-cols-2 items-center">

        <div className="pt-14 relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-sm uppercase tracking-[0.25em] text-sky-400/90 mb-6"
          >
            SOFTWARE ENGINEER · BACKEND & FULL-STACK · SYSTEMS · APPLIED AI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="text-5xl sm:text-6xl font-bold leading-[1.05] mb-7"
          >
            I build <span className="text-sky-400">APIs, data pipelines, and end-to-end features designed</span>{" "}
            <br className="hidden sm:block" />
            for correctness, reliability, and scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg text-slate-300 mb-10"
          >
            Hello, I'm Vidisha Sodha, a Software Engineer who enjoys building clean,
            reliable systems designed to scale. I recently completed my Master's
            in Computer Science from Purdue University, where I focused on backend
            development, databases, system design, and applied machine learning
            through hands-on work.
            <br /><br />
            I'm particularly interested in backend and full-stack engineering,
            where APIs, data, and thoughtful architecture come together to create
            dependable software. Alongside core engineering, I enjoy exploring
            applied AI and LLMs, with a focus on building intelligent features
            that integrate cleanly into real-world systems.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-sky-400 px-7 py-4 text-black font-medium w-fit"
            >
              Projects
            </a>

            <a
              href="https://github.com/vcsodha"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 px-7 py-4 text-slate-200 hover:border-sky-400/60 w-fit"
            >
              View GitHub
            </a>
          </div>

          <div className="mt-12 text-slate-500 text-sm">
            Scroll to see projects↓
          </div>
        </div>

        <div className="hidden lg:block relative h-full">
          <div
            className="absolute right-[-120px] top-1/2 -translate-y-1/2
                       w-[520px] h-[520px]
                       rounded-full
                       bg-sky-500/10
                       blur-[150px]"
          />
        </div>

      </div>
    </Section>
  )
}

export default Intro
