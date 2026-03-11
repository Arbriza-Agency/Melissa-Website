import { motion } from "framer-motion";

export default function Card({ icon: Icon, title, description, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.25 }}
      className={`bg-white rounded-2xl border border-gray-100 p-8 transition-colors hover:border-primary-200 ${className}`}
    >
      {Icon && (
        <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
