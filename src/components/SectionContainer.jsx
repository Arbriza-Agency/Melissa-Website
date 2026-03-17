import { motion, useReducedMotion } from 'framer-motion'

export default function SectionContainer({
  label,
  title,
  subtitle,
  children,
  className = '',
  dark = false,
  centered = false,
}) {
  const reduceMotion = useReducedMotion()
  const MotionSection = motion.section

  return (
    <MotionSection
      className={`py-20 px-6 ${dark ? 'bg-forest text-dark' : 'bg-light'} ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto">
        {(label || title || subtitle) && (
          <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
            {label && (
              <p className={`section-label mb-3 ${dark ? 'text-soft-green' : ''}`}>
                {label}
              </p>
            )}
            {title && (
              <h2 className={`font-display text-3xl md:text-4xl font-bold leading-tight
                              ${dark ? 'text-dark' : 'text-dark'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`mt-4 text-base font-body leading-relaxed max-w-2xl
                             ${centered ? 'mx-auto' : ''}
                             ${dark ? 'text-dark/70' : 'text-dark/70'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </MotionSection>
  )
}
