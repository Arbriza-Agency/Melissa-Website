import { motion } from "framer-motion";

export default function SectionContainer({
  children,
  className = "",
  id,
  bgColor = "bg-white",
}) {
  return (
    <section id={id} className={`${bgColor} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-6 py-20 md:py-28"
      >
        {children}
      </motion.div>
    </section>
  );
}
