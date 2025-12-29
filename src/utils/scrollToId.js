export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return

  const NAV_HEIGHT = 96 
  const y =
    el.getBoundingClientRect().top +
    window.pageYOffset -
    NAV_HEIGHT

  window.scrollTo({
    top: y,
    behavior: "smooth",
  })
}
