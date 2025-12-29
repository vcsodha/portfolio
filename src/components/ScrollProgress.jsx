import { motion, useScroll } from "framer-motion"

function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-sky-400/70"
    />
  )
}

export default ScrollProgress
