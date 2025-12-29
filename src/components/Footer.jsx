function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Vidisha Sodha</p>
      </div>
    </footer>
  )
}

export default Footer
