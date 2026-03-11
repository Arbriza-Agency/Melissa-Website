export default function Timeline({ items }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-primary-200" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-6 md:gap-8">
            {/* Dot */}
            <div className="relative z-10 flex-shrink-0 mt-1.5">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary-100 border-2 border-primary-400 flex items-center justify-center">
                {item.icon && <item.icon className="h-4 w-4 md:h-5 md:w-5 text-primary-600" />}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-2">
              {item.period && (
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-600 mb-1">
                  {item.period}
                </span>
              )}
              <h3 className="font-serif text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-sm text-gray-500 mt-0.5">{item.subtitle}</p>
              )}
              {item.description && (
                <p className="text-gray-500 text-sm leading-relaxed mt-2">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
