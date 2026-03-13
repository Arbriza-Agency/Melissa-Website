import { useState } from 'react'

// Country SVG paths for a Mercator-style world map (simplified but recognizable)
// Using a viewBox of 0 0 1000 500

const LIVED_WORKED = ['United States', 'El Salvador', 'France', 'Armenia']
const PROFESSIONAL = ['Mexico', 'Colombia', 'Ecuador', 'Chile', 'Argentina', 'Jamaica']

const COUNTRY_COLORS = {
  'United States': '#4A72B0',
  'El Salvador': '#C0724A',
  'France': '#C0724A',
  'Armenia': '#7B5EA7',
  'Mexico': '#7A9E5C',
  'Colombia': '#7A9E5C',
  'Ecuador': '#7A9E5C',
  'Chile': '#7A9E5C',
  'Argentina': '#A8C47A',
  'Jamaica': '#A8C47A',
}

// Approximate country paths in SVG viewBox 0 0 1000 500
const COUNTRIES = [
  {
    id: 'united-states',
    name: 'United States',
    path: 'M 120 120 L 280 118 L 285 125 L 290 145 L 278 155 L 260 158 L 245 170 L 230 172 L 215 165 L 200 168 L 185 162 L 170 168 L 155 162 L 140 165 L 128 158 L 118 148 L 115 135 Z',
    labelX: 200,
    labelY: 145,
  },
  {
    id: 'alaska',
    name: '',
    path: 'M 90 95 L 115 90 L 120 100 L 118 110 L 108 115 L 95 112 L 88 105 Z',
    labelX: 0,
    labelY: 0,
    color: '#4A72B0',
  },
  {
    id: 'canada',
    name: '',
    path: 'M 118 88 L 285 85 L 288 118 L 120 120 L 115 105 Z',
    labelX: 0,
    labelY: 0,
    color: '#CCCCCC',
  },
  {
    id: 'mexico',
    name: 'Mexico',
    path: 'M 128 158 L 200 155 L 215 165 L 205 180 L 195 192 L 180 200 L 165 198 L 152 190 L 142 180 L 132 170 Z',
    labelX: 170,
    labelY: 178,
  },
  {
    id: 'guatemala',
    name: '',
    path: 'M 180 200 L 195 198 L 197 208 L 188 212 L 180 208 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'el-salvador',
    name: 'El Salvador',
    path: 'M 178 208 L 186 207 L 188 212 L 183 215 L 177 213 Z',
    labelX: 182,
    labelY: 213,
  },
  {
    id: 'colombia',
    name: 'Colombia',
    path: 'M 192 220 L 210 218 L 218 225 L 218 240 L 210 248 L 198 248 L 190 240 L 188 230 Z',
    labelX: 203,
    labelY: 235,
  },
  {
    id: 'ecuador',
    name: 'Ecuador',
    path: 'M 190 248 L 202 248 L 205 262 L 195 265 L 187 258 Z',
    labelX: 196,
    labelY: 258,
  },
  {
    id: 'peru',
    name: '',
    path: 'M 195 265 L 212 260 L 220 275 L 215 295 L 200 300 L 190 290 L 188 275 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'brazil',
    name: '',
    path: 'M 215 228 L 260 222 L 280 230 L 285 260 L 275 290 L 255 305 L 230 308 L 210 298 L 205 275 L 215 255 L 215 240 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'chile',
    name: 'Chile',
    path: 'M 200 298 L 208 298 L 215 320 L 218 355 L 212 375 L 205 360 L 200 340 L 198 315 Z',
    labelX: 210,
    labelY: 332,
  },
  {
    id: 'argentina',
    name: 'Argentina',
    path: 'M 210 298 L 240 295 L 248 315 L 245 345 L 235 370 L 220 378 L 212 370 L 208 350 L 210 320 Z',
    labelX: 232,
    labelY: 338,
  },
  {
    id: 'venezuela',
    name: '',
    path: 'M 210 218 L 235 215 L 242 222 L 238 232 L 220 235 L 212 228 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  // Europe
  {
    id: 'france',
    name: 'France',
    path: 'M 450 130 L 468 128 L 475 135 L 473 148 L 462 155 L 450 152 L 445 142 Z',
    labelX: 460,
    labelY: 143,
  },
  {
    id: 'uk',
    name: '',
    path: 'M 435 118 L 445 115 L 448 122 L 445 130 L 437 132 L 433 126 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'spain',
    name: '',
    path: 'M 435 148 L 458 145 L 462 155 L 455 162 L 440 162 L 432 156 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'germany',
    name: '',
    path: 'M 465 122 L 482 120 L 488 128 L 485 138 L 472 140 L 465 133 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'italy',
    name: '',
    path: 'M 468 140 L 480 138 L 485 148 L 482 160 L 474 165 L 468 158 L 466 148 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'poland',
    name: '',
    path: 'M 482 118 L 502 116 L 508 124 L 505 133 L 490 135 L 482 128 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'ukraine',
    name: '',
    path: 'M 500 120 L 528 118 L 535 128 L 530 138 L 510 140 L 500 130 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'scandinavia',
    name: '',
    path: 'M 455 95 L 490 90 L 500 100 L 495 115 L 482 118 L 465 115 L 458 105 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  // Middle East & Central Asia
  {
    id: 'turkey',
    name: '',
    path: 'M 515 148 L 548 145 L 555 152 L 550 162 L 530 165 L 515 160 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'armenia',
    name: 'Armenia',
    path: 'M 548 152 L 558 150 L 562 156 L 558 162 L 550 162 Z',
    labelX: 558,
    labelY: 158,
  },
  {
    id: 'iran',
    name: '',
    path: 'M 555 158 L 585 155 L 592 165 L 588 180 L 570 185 L 555 178 L 552 168 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'saudi',
    name: '',
    path: 'M 530 168 L 558 165 L 568 172 L 568 192 L 555 200 L 535 198 L 525 188 L 528 175 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  // Africa
  {
    id: 'morocco',
    name: '',
    path: 'M 435 162 L 455 160 L 458 172 L 450 180 L 436 178 L 432 170 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'west-africa',
    name: '',
    path: 'M 420 182 L 460 178 L 468 192 L 465 210 L 448 215 L 428 212 L 418 198 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'central-africa',
    name: '',
    path: 'M 460 200 L 510 198 L 520 215 L 515 235 L 495 242 L 470 240 L 458 225 L 458 210 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'east-africa',
    name: '',
    path: 'M 510 195 L 535 193 L 542 205 L 540 225 L 528 235 L 515 232 L 510 218 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'south-africa',
    name: '',
    path: 'M 465 240 L 510 238 L 518 260 L 510 280 L 490 288 L 472 282 L 462 265 L 462 250 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  // Asia
  {
    id: 'russia',
    name: '',
    path: 'M 500 80 L 700 65 L 760 75 L 765 100 L 740 115 L 680 118 L 600 115 L 540 112 L 510 105 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'china',
    name: '',
    path: 'M 640 130 L 720 125 L 740 135 L 742 158 L 728 172 L 700 178 L 668 175 L 645 165 L 635 148 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'india',
    name: '',
    path: 'M 600 158 L 640 155 L 648 165 L 645 185 L 635 200 L 618 205 L 602 198 L 596 182 L 596 168 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'southeast-asia',
    name: '',
    path: 'M 700 175 L 740 170 L 752 182 L 748 200 L 728 208 L 705 205 L 695 192 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'japan',
    name: '',
    path: 'M 748 128 L 760 125 L 768 132 L 765 145 L 755 148 L 748 142 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  // Australia
  {
    id: 'australia',
    name: '',
    path: 'M 720 280 L 790 272 L 815 285 L 818 315 L 800 335 L 770 340 L 745 330 L 728 312 L 718 295 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'new-zealand',
    name: '',
    path: 'M 830 318 L 840 315 L 845 325 L 840 335 L 832 332 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  // Caribbean
  {
    id: 'cuba',
    name: '',
    path: 'M 210 188 L 235 185 L 240 190 L 235 195 L 212 195 Z',
    labelX: 0, labelY: 0, color: '#CCCCCC',
  },
  {
    id: 'jamaica',
    name: 'Jamaica',
    path: 'M 228 196 L 238 194 L 241 199 L 236 203 L 227 201 Z',
    labelX: 234,
    labelY: 200,
  },
]

const LABEL_POSITIONS = {
  'United States':  { x: 165, y: 148, lineX: 200, lineY: 142 },
  'El Salvador':    { x: 140, y: 222, lineX: 182, lineY: 211 },
  'France':         { x: 500, y: 130, lineX: 462, lineY: 140 },
  'Armenia':        { x: 590, y: 148, lineX: 560, lineY: 156 },
  'Mexico':         { x: 148, y: 185, lineX: 168, lineY: 178 },
  'Colombia':       { x: 175, y: 248, lineX: 200, lineY: 235 },
  'Ecuador':        { x: 165, y: 265, lineX: 192, lineY: 256 },
  'Chile':          { x: 178, y: 338, lineX: 206, lineY: 330 },
  'Argentina':      { x: 250, y: 350, lineX: 232, lineY: 340 },
  'Jamaica':        { x: 220, y: 215, lineX: 234, lineY: 200 },
}

const REGION_LABELS = {
  'United States': 'United States',
  'El Salvador': 'El Salvador',
  'France': 'France',
  'Armenia': 'Armenia',
  'Mexico': 'México, Colombia,\nEcuador, Chile,\nArgentina,\nMontego Bay, Jamaica',
}

const getCountryColor = (name) => {
  if (!name) return null
  if (COUNTRY_COLORS[name]) return COUNTRY_COLORS[name]
  return null
}

export default function MapComponent() {
  const [hovered, setHovered] = useState(null)

  return (
    <div style={{
      background: '#F5F2EE',
      borderRadius: '12px',
      padding: '32px',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      maxWidth: '960px',
      margin: '0 auto',
    }}>
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '8px' }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: '400',
          color: '#2C2C2C',
          margin: '0 0 12px 0',
          letterSpacing: '0.02em',
        }}>Global Experience</h2>
        <div style={{
          width: '60px',
          height: '1px',
          background: '#888',
          margin: '0 auto 16px',
        }} />
        <p style={{
          fontSize: '13px',
          color: '#555',
          maxWidth: '520px',
          margin: '0 auto 24px',
          lineHeight: '1.6',
          fontStyle: 'italic',
        }}>
          Over the past ten years, I have lived, studied, and worked across multiple regions,
          shaping a diverse and internationally informed perspective on climate strategy,
          economic development, and urban resilience.
        </p>
      </div>

      {/* Map */}
      <div style={{ position: 'relative', background: '#D6E8F0', borderRadius: '8px', overflow: 'hidden' }}>
        <svg
          viewBox="0 0 1000 500"
          style={{ width: '100%', display: 'block' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ocean */}
          <rect width="1000" height="500" fill="#D6E8F0" />

          {/* Countries */}
          {COUNTRIES.map((country) => {
            const color = country.color || getCountryColor(country.name) || '#C8C8C8'
            const isHighlighted = LIVED_WORKED.includes(country.name) || PROFESSIONAL.includes(country.name)
            const isHovered = hovered === country.name
            return (
              <path
                key={country.id}
                d={country.path}
                fill={color}
                stroke="#F5F2EE"
                strokeWidth="1"
                opacity={isHovered ? 0.85 : 1}
                style={{ cursor: isHighlighted ? 'pointer' : 'default', transition: 'opacity 0.2s' }}
                onMouseEnter={() => isHighlighted && country.name && setHovered(country.name)}
                onMouseLeave={() => setHovered(null)}
              />
            )
          })}

          {/* Pin dots */}
          {[
            { name: 'United States', cx: 200, cy: 142, ring: true },
            { name: 'El Salvador', cx: 182, cy: 211, ring: true },
            { name: 'France', cx: 462, cy: 140, ring: true },
            { name: 'Armenia', cx: 555, cy: 156, ring: true },
            { name: 'Mexico', cx: 168, cy: 178, ring: false },
            { name: 'Colombia', cx: 200, cy: 235, ring: false },
            { name: 'Ecuador', cx: 192, cy: 256, ring: false },
            { name: 'Chile', cx: 206, cy: 330, ring: false },
            { name: 'Argentina', cx: 232, cy: 340, ring: false },
            { name: 'Jamaica', cx: 234, cy: 200, ring: false },
          ].map(pin => (
            <g key={pin.name}>
              {pin.ring && (
                <circle cx={pin.cx} cy={pin.cy} r="5" fill="white" stroke="#4A6FA5" strokeWidth="1.5" />
              )}
              {!pin.ring && (
                <circle cx={pin.cx} cy={pin.cy} r="5" fill="white" stroke="#5A8A3C" strokeWidth="1.5" />
              )}
              <circle
                cx={pin.cx}
                cy={pin.cy}
                r="2.5"
                fill={pin.ring ? '#4A6FA5' : '#5A8A3C'}
              />
            </g>
          ))}

          {/* Labels */}
          {/* United States */}
          <line x1="190" y1="148" x2="165" y2="148" stroke="#333" strokeWidth="0.8" />
          <circle cx="165" cy="148" r="1.5" fill="#333" />
          <text x="162" y="146" textAnchor="end" fontSize="9" fontFamily="Georgia, serif" fill="#2C2C2C" fontWeight="500">United States</text>

          {/* El Salvador */}
          <line x1="178" y1="211" x2="140" y2="222" stroke="#333" strokeWidth="0.8" />
          <circle cx="140" cy="222" r="1.5" fill="#333" />
          <text x="137" y="220" textAnchor="end" fontSize="9" fontFamily="Georgia, serif" fill="#2C2C2C" fontWeight="500">El Salvador</text>

          {/* France */}
          <line x1="462" y1="135" x2="505" y2="125" stroke="#333" strokeWidth="0.8" />
          <circle cx="505" cy="125" r="1.5" fill="#333" />
          <text x="508" y="124" textAnchor="start" fontSize="9" fontFamily="Georgia, serif" fill="#2C2C2C" fontWeight="500">France</text>

          {/* Armenia */}
          <line x1="562" y1="156" x2="600" y2="158" stroke="#333" strokeWidth="0.8" />
          <circle cx="600" cy="158" r="1.5" fill="#333" />
          <text x="603" y="157" textAnchor="start" fontSize="9" fontFamily="Georgia, serif" fill="#2C2C2C" fontWeight="500">Armenia</text>

          {/* Latin America group label */}
          <line x1="168" y1="178" x2="135" y2="268" stroke="#333" strokeWidth="0.8" />
          <circle cx="135" cy="268" r="1.5" fill="#333" />
          <text x="132" y="268" textAnchor="end" fontSize="8.5" fontFamily="Georgia, serif" fill="#2C2C2C">México, Colombia,</text>
          <text x="132" y="279" textAnchor="end" fontSize="8.5" fontFamily="Georgia, serif" fill="#2C2C2C">Ecuador, Chile,</text>
          <text x="132" y="290" textAnchor="end" fontSize="8.5" fontFamily="Georgia, serif" fill="#2C2C2C">Argentina,</text>
          <text x="132" y="301" textAnchor="end" fontSize="8.5" fontFamily="Georgia, serif" fill="#2C2C2C">Montego Bay, Jamaica</text>

          {/* Hover tooltip */}
          {hovered && (
            <g>
              <rect
                x={LABEL_POSITIONS[hovered] ? LABEL_POSITIONS[hovered].lineX - 5 : 400}
                y={LABEL_POSITIONS[hovered] ? LABEL_POSITIONS[hovered].lineY - 18 : 200}
                width="120" height="22" rx="4"
                fill="rgba(0,0,0,0.75)"
              />
              <text
                x={LABEL_POSITIONS[hovered] ? LABEL_POSITIONS[hovered].lineX + 55 : 460}
                y={LABEL_POSITIONS[hovered] ? LABEL_POSITIONS[hovered].lineY - 3 : 215}
                textAnchor="middle"
                fontSize="8"
                fontFamily="Georgia, serif"
                fill="white"
              >{hovered}</text>
            </g>
          )}
        </svg>
      </div>

      {/* Legend */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '48px',
        marginTop: '20px',
        flexWrap: 'wrap',
      }}>
        {/* Lived & Worked */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#4A72B0', border: '1.5px solid #3A5A90' }} />
            <span style={{ fontSize: '12px', fontFamily: 'Georgia, serif', color: '#333', fontWeight: '600' }}>Lived &amp; Worked in:</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 24px', paddingLeft: '6px' }}>
            {[
              { label: 'United States', color: '#4A72B0' },
              { label: 'El Salvador', color: '#C0724A' },
              { label: 'France', color: '#C0724A' },
              { label: 'Armenia', color: '#7B5EA7' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: item.color, flexShrink: 0 }} />
                <span style={{ fontSize: '12px', fontFamily: 'Georgia, serif', color: '#444' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#7A9E5C', border: '1.5px solid #5A8A3C' }} />
            <span style={{ fontSize: '12px', fontFamily: 'Georgia, serif', color: '#333', fontWeight: '600' }}>Professional Experience in:</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '6px' }}>
            {[
              { label: 'Mexico, Colombia, Ecuador · Chile', color: '#7A9E5C' },
              { label: 'Argentina · Montego Bay, Jamaica', color: '#A8C47A' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: item.color, flexShrink: 0 }} />
                <span style={{ fontSize: '12px', fontFamily: 'Georgia, serif', color: '#444' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}