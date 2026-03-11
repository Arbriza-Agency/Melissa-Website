import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ProjectCard({ title, organization, description, location }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-primary-200 transition-colors"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-serif text-lg font-semibold text-gray-900">
            {title}
          </h3>
          <p className="text-primary-600 text-sm font-medium mt-1">
            {organization}
          </p>
        </div>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex items-center gap-1.5 text-gray-400 text-xs">
        <MapPin className="h-3.5 w-3.5" />
        <span>{location}</span>
      </div>
    </motion.div>
  );
}
