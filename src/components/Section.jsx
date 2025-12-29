import { motion } from "framer-motion"

function Section({ id, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen flex items-center py-16 scroll-mt-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {children}
      </div>
    </motion.section>
  )
}

export default Section
