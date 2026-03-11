export default function SectionHeader({ subtitle, title, description, align = "center" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-16 max-w-2xl ${alignClass}`}>
      {subtitle && (
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary-600 mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
