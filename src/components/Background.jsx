function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-sky-400/15 blur-3xl" />
      <div className="absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-indigo-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
    </div>
  )
}

export default Background
