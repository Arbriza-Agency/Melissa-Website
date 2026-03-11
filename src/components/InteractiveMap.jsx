import { useState, memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function InteractiveMap({ markers = [] }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 130, center: [0, 30] }}
          className="w-full h-auto"
          style={{ maxHeight: "500px" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#e8efe8"
                  stroke="#c5d5c5"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#d4e6d4", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinates={marker.coordinates}
              onClick={() => setSelected(marker)}
              style={{ cursor: "pointer" }}
            >
              <motion.circle
                r={6}
                fill="#16a34a"
                stroke="#fff"
                strokeWidth={2}
                whileHover={{ r: 9 }}
                transition={{ duration: 0.2 }}
              />
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* Tooltip / Info Card */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-80
                       bg-white rounded-xl border border-gray-200 shadow-lg p-5 z-10"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 p-1 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
            <h4 className="font-serif font-semibold text-gray-900 pr-6">
              {selected.title}
            </h4>
            <p className="text-primary-600 text-sm font-medium mt-1">
              {selected.organization}
            </p>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              {selected.description}
            </p>
            <p className="text-gray-400 text-xs mt-3">{selected.location}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(InteractiveMap);
