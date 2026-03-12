import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

export default function ProjectCard({ title, organization, description, location, year }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-primary-200 transition-colors h-full flex flex-col"
    >
      <div className="mb-4">
        <h3 className="font-serif text-base font-semibold text-gray-900 leading-snug mb-1">
          {title}
        </h3>
        <p className="text-sm text-primary-700 font-semibold">
          {organization}
        </p>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
        {description}
      </p>
      <div className="flex flex-col gap-1.5 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-1.5 text-gray-400 text-xs">
          <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
          <span>{location}</span>
        </div>
        {year && (
          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
            <span>{year}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
