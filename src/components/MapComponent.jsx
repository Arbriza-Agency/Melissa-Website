import { useState } from 'react'
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Sphere,
  ZoomableGroup,
} from 'react-simple-maps'

const GEO_URL = '/media/countries-110m.json'

const LIVED_WORKED_IDS = new Set(['840', '222', '250', '051'])
const PROFESSIONAL_PRIMARY_IDS = new Set(['484', '170', '218', '152'])
const PROFESSIONAL_SECONDARY_IDS = new Set(['032', '388'])

const COUNTRY_NAMES = {
  '051': 'Armenia',
  '152': 'Chile',
  '170': 'Colombia',
  '218': 'Ecuador',
  '222': 'El Salvador',
  '250': 'France',
  '032': 'Argentina',
  '388': 'Jamaica',
  '484': 'Mexico',
  '840': 'United States',
}

const MARKERS = [
  { id: '840', label: ['United States'], coordinates: [-98, 38], dx: -86, dy: -6, variant: 'lived' },
  { id: '222', label: ['El Salvador'], coordinates: [-88.9, 13.8], dx: -88, dy: 16, variant: 'lived' },
  { id: '250', label: ['France'], coordinates: [2.2, 46.2], dx: 56, dy: -14, variant: 'lived' },
  { id: '051', label: ['Armenia'], coordinates: [44.8, 40.3], dx: 52, dy: 8, variant: 'lived' },
  { id: '484', label: [], coordinates: [-102.3, 23.5], variant: 'professional-primary' },
  { id: '170', label: [], coordinates: [-74.2, 4.6], variant: 'professional-primary' },
  { id: '218', label: [], coordinates: [-78.4, -1.3], variant: 'professional-primary' },
  { id: '152', label: [], coordinates: [-71.0, -31.8], variant: 'professional-primary' },
  { id: '032', label: [], coordinates: [-64.2, -34.5], variant: 'professional-secondary' },
  { id: '388', label: [], coordinates: [-77.3, 18.1], variant: 'professional-secondary' },
]

const GROUP_ANNOTATIONS = [
  {
    id: 'latam',
    coordinates: [-79.5, 6],
    dx: -142,
    dy: 86,
    label: ['Mexico, Colombia,', 'Ecuador, Chile,', 'Argentina,', 'Montego Bay, Jamaica'],
    variant: 'professional-primary',
  },
]

const LEGEND_GROUPS = [
  {
    title: 'Lived & Worked in',
    tone: 'lived',
    items: ['United States', 'El Salvador', 'France', 'Armenia'],
  },
  {
    title: 'Professional Experience in',
    tone: 'professional-primary',
    items: ['Mexico, Colombia, Ecuador, Chile', 'Argentina, Montego Bay, Jamaica'],
  },
]

function getGeoId(geo) {
  return String(geo.id).padStart(3, '0')
}

function getRegionVariant(geoId) {
  if (LIVED_WORKED_IDS.has(geoId)) return 'lived'
  if (PROFESSIONAL_PRIMARY_IDS.has(geoId)) return 'professional-primary'
  if (PROFESSIONAL_SECONDARY_IDS.has(geoId)) return 'professional-secondary'
  return 'default'
}

function getVariantStyles(variant, active = false) {
  if (variant === 'lived') {
    return {
      fill: active ? '#D6BC99' : '#C4A882',
      stroke: active ? 'rgba(245,241,234,0.52)' : 'rgba(231,205,174,0.34)',
      marker: '#C4A882',
      ring: 'rgba(231,205,174,0.58)',
      label: 'rgba(245,241,234,0.94)',
      connector: 'rgba(231,205,174,0.54)',
    }
  }

  if (variant === 'professional-secondary') {
    return {
      fill: active ? '#C29C68' : '#AC865A',
      stroke: active ? 'rgba(245,241,234,0.34)' : 'rgba(196,168,130,0.24)',
      marker: '#B89362',
      ring: 'rgba(196,168,130,0.42)',
      label: 'rgba(245,241,234,0.82)',
      connector: 'rgba(196,168,130,0.38)',
    }
  }

  if (variant === 'professional-primary') {
    return {
      fill: active ? '#A8865B' : '#8E6F48',
      stroke: active ? 'rgba(245,241,234,0.32)' : 'rgba(196,168,130,0.22)',
      marker: '#8E6F48',
      ring: 'rgba(196,168,130,0.38)',
      label: 'rgba(245,241,234,0.8)',
      connector: 'rgba(196,168,130,0.34)',
    }
  }

  return {
    fill: active ? 'url(#landGradientActive)' : 'url(#landGradient)',
    stroke: active ? 'rgba(245,241,234,0.18)' : 'rgba(245,241,234,0.09)',
    marker: '#8A837B',
    ring: 'rgba(245,241,234,0.16)',
    label: 'rgba(245,241,234,0.74)',
    connector: 'rgba(245,241,234,0.24)',
  }
}

function LabelBlock({ lines, textAnchor = 'start', fill }) {
  return (
    <text
      textAnchor={textAnchor}
      fontSize="12"
      fontFamily="Montserrat, system-ui, sans-serif"
      fontWeight="500"
      fill={fill}
      paintOrder="stroke"
      stroke="rgba(15,15,14,0.92)"
      strokeWidth="3.6"
      strokeLinejoin="round"
    >
      {lines.map((line, index) => (
        <tspan key={line} x="0" dy={index === 0 ? 0 : 16}>
          {line}
        </tspan>
      ))}
    </text>
  )
}

export default function MapComponent() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1240px',
        margin: '0 auto',
        borderRadius: '32px',
        padding: '36px 28px 28px',
        background:
          'radial-gradient(circle at 50% 0%, rgba(196,168,130,0.10) 0%, rgba(15,15,14,0.0) 30%), linear-gradient(180deg, rgba(26,25,24,0.98) 0%, rgba(15,15,14,1) 100%)',
        border: '1px solid rgba(196,168,130,0.16)',
        boxShadow: '0 28px 80px rgba(0,0,0,0.32)',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '18px' }}>
        <p
          style={{
            margin: '0 0 10px',
            fontSize: '11px',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'rgba(196,168,130,0.72)',
            fontFamily: 'Montserrat, system-ui, sans-serif',
            fontWeight: '600',
          }}
        >
          Global Experience
        </p>
        <h2
          style={{
            margin: '0',
            fontSize: 'clamp(34px, 4.6vw, 52px)',
            lineHeight: 1.06,
            color: '#F5F1EA',
            fontFamily: 'Georgia, Times New Roman, serif',
            fontWeight: '700',
            letterSpacing: '-0.02em',
          }}
        >
          Global Experience
        </h2>
        <p
          style={{
            maxWidth: '760px',
            margin: '16px auto 0',
            fontSize: '15px',
            lineHeight: '1.8',
            color: 'rgba(245,241,234,0.66)',
            fontFamily: 'Montserrat, system-ui, sans-serif',
          }}
        >
          Over the past ten years, I have lived, studied, and worked across multiple regions,
          shaping a diverse and internationally informed perspective on climate strategy,
          economic development, and urban resilience.
        </p>
      </div>

      <div
        style={{
          position: 'relative',
          borderRadius: '26px',
          overflow: 'hidden',
          background:
            'radial-gradient(circle at 50% 18%, rgba(245,241,234,0.05) 0%, rgba(15,15,14,0) 34%), linear-gradient(180deg, rgba(24,24,23,0.98) 0%, rgba(15,15,14,0.98) 100%)',
          border: '1px solid rgba(196,168,130,0.12)',
          padding: '16px 8px 8px',
        }}
      >
        <ComposableMap
          width={1200}
          height={620}
          projection="geoMercator"
          projectionConfig={{ scale: 182 }}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <defs>
            <linearGradient id="oceanGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#121110" />
              <stop offset="52%" stopColor="#171614" />
              <stop offset="100%" stopColor="#0F0F0E" />
            </linearGradient>
            <linearGradient id="landGradient" x1="120" y1="120" x2="1040" y2="540" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#403C37" />
              <stop offset="55%" stopColor="#35322E" />
              <stop offset="100%" stopColor="#2A2825" />
            </linearGradient>
            <linearGradient id="landGradientActive" x1="160" y1="120" x2="1020" y2="560" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4B463F" />
              <stop offset="50%" stopColor="#3D3934" />
              <stop offset="100%" stopColor="#302D29" />
            </linearGradient>
            <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <Sphere fill="url(#oceanGradient)" />

          <ZoomableGroup center={[0, 14]}>
            <Geographies geography={GEO_URL}>
              {({ geographies }) => {
                const visibleGeographies = geographies.filter((geo) => getGeoId(geo) !== '010')

                return (
                  <>
                    <g transform="translate(0 6)" opacity="0.28">
                      {visibleGeographies.map((geo) => (
                        <Geography
                          key={`${geo.rsmKey}-shadow`}
                          geography={geo}
                          fill="rgba(0,0,0,0.34)"
                          stroke="none"
                        />
                      ))}
                    </g>

                    {visibleGeographies.map((geo) => {
                      const geoId = getGeoId(geo)
                      const variant = getRegionVariant(geoId)
                      const isActive = hoveredId === geoId
                      const styles = getVariantStyles(variant, isActive)

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={styles.fill}
                          stroke={styles.stroke}
                          strokeWidth={variant === 'default' ? 0.65 : 1.05}
                          style={{
                            default: { outline: 'none' },
                            hover: { outline: 'none' },
                            pressed: { outline: 'none' },
                          }}
                          onMouseEnter={() => {
                            if (variant !== 'default') setHoveredId(geoId)
                          }}
                          onMouseLeave={() => setHoveredId(null)}
                        />
                      )
                    })}
                  </>
                )
              }}
            </Geographies>

            {MARKERS.map((marker) => {
              const isActive = hoveredId === marker.id
              const styles = getVariantStyles(marker.variant, isActive)

              return (
                <Marker
                  key={marker.id}
                  coordinates={marker.coordinates}
                  onMouseEnter={() => setHoveredId(marker.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <g filter="url(#softGlow)" style={{ cursor: 'pointer' }}>
                    <circle
                      r={marker.variant === 'lived' ? 7 : 5.5}
                      fill="rgba(15,15,14,0.88)"
                      stroke={styles.ring}
                      strokeWidth={marker.variant === 'lived' ? 1.8 : 1.4}
                    />
                    <circle r={marker.variant === 'lived' ? 2.8 : 2.4} fill={styles.marker} />
                  </g>
                </Marker>
              )
            })}

            {MARKERS.filter((marker) => marker.label.length > 0).map((marker) => {
              const isActive = hoveredId === marker.id
              const styles = getVariantStyles(marker.variant, isActive)
              const textAnchor = marker.dx < 0 ? 'end' : 'start'

              return (
                <Annotation
                  key={`${marker.id}-annotation`}
                  subject={marker.coordinates}
                  dx={marker.dx}
                  dy={marker.dy}
                  connectorProps={{
                    stroke: styles.connector,
                    strokeWidth: 1.15,
                    strokeLinecap: 'round',
                  }}
                >
                  <LabelBlock
                    lines={marker.label}
                    textAnchor={textAnchor}
                    fill={styles.label}
                  />
                </Annotation>
              )
            })}

            {GROUP_ANNOTATIONS.map((annotation) => {
              const styles = getVariantStyles(annotation.variant, hoveredId && PROFESSIONAL_PRIMARY_IDS.has(hoveredId) ? true : false)
              const textAnchor = annotation.dx < 0 ? 'end' : 'start'

              return (
                <Annotation
                  key={annotation.id}
                  subject={annotation.coordinates}
                  dx={annotation.dx}
                  dy={annotation.dy}
                  connectorProps={{
                    stroke: styles.connector,
                    strokeWidth: 1.1,
                    strokeLinecap: 'round',
                  }}
                >
                  <LabelBlock
                    lines={annotation.label}
                    textAnchor={textAnchor}
                    fill="rgba(245,241,234,0.78)"
                  />
                </Annotation>
              )
            })}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '18px 28px',
          marginTop: '22px',
        }}
      >
        {LEGEND_GROUPS.map((group) => {
          const styles = getVariantStyles(group.tone)

          return (
            <div
              key={group.title}
              style={{
                borderRadius: '18px',
                border: '1px solid rgba(196,168,130,0.10)',
                background: 'rgba(255,255,255,0.02)',
                padding: '16px 18px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '9999px',
                    background: styles.marker,
                    boxShadow: `0 0 0 3px ${styles.ring}`,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(245,241,234,0.78)',
                    fontFamily: 'Montserrat, system-ui, sans-serif',
                    fontWeight: '600',
                  }}
                >
                  {group.title}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {group.items.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <div
                      style={{
                        width: '9px',
                        height: '9px',
                        marginTop: '6px',
                        borderRadius: '2px',
                        background: styles.fill.startsWith('url(') ? '#57514A' : styles.fill,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.6',
                        color: 'rgba(245,241,234,0.7)',
                        fontFamily: 'Montserrat, system-ui, sans-serif',
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
