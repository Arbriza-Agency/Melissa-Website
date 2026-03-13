// ── PROJECTS ──────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'National Climate Action Plan — Colombia',
    category: 'Climate Strategy',
    year: '2023',
    client: 'Ministry of Environment, Colombia',
    description:
      'Led the economic modeling and policy design for Colombia\'s updated NDC commitments, including sectoral emission targets and fiscal instruments for green transition.',
    tags: ['NDC', 'Fiscal Policy', 'Emissions'],
    location: { lat: 4.711, lng: -74.0721, city: 'Bogotá, Colombia' },
    color: '#1B4332',
  },
  {
    id: 2,
    title: 'Urban Resilience Framework — Medellín',
    category: 'Urban Development',
    year: '2022',
    client: 'Inter-American Development Bank',
    description:
      'Designed an integrated urban resilience framework for Medellín combining climate adaptation, informal settlement upgrading, and green infrastructure investment.',
    tags: ['Urban Planning', 'Resilience', 'IDB'],
    location: { lat: 6.2442, lng: -75.5812, city: 'Medellín, Colombia' },
    color: '#2D6A4F',
  },
  {
    id: 3,
    title: 'REDD+ Carbon Market Integration',
    category: 'Environmental Economics',
    year: '2022',
    client: 'World Bank FCPF',
    description:
      'Economic analysis and institutional design for integrating Colombia\'s REDD+ program into voluntary carbon markets, including MRV systems and benefit-sharing mechanisms.',
    tags: ['Carbon Markets', 'REDD+', 'World Bank'],
    location: { lat: 1.2921, lng: -77.2876, city: 'Amazon Region, Colombia' },
    color: '#40916C',
  },
  {
    id: 4,
    title: 'Green Municipal Finance — Cali',
    category: 'Public Policy',
    year: '2021',
    client: 'UN-Habitat',
    description:
      'Assessment of municipal fiscal capacity and green bond issuance potential for sustainable infrastructure financing in Cali.',
    tags: ['Green Finance', 'Municipal', 'UN-Habitat'],
    location: { lat: 3.4516, lng: -76.532, city: 'Cali, Colombia' },
    color: '#52B788',
  },
  {
    id: 5,
    title: 'Pacific Alliance Sustainability Roadmap',
    category: 'International Cooperation',
    year: '2023',
    client: 'Pacific Alliance Secretariat',
    description:
      'Co-authored a regional sustainability roadmap for Pacific Alliance members, aligning trade, investment, and climate policies across Chile, Colombia, Mexico, and Peru.',
    tags: ['Regional Policy', 'Trade', 'Pacific Alliance'],
    location: { lat: -33.4489, lng: -70.6693, city: 'Santiago, Chile' },
    color: '#1B4332',
  },
  {
    id: 6,
    title: 'Climate Finance Gaps — COP28 Brief',
    category: 'Climate Strategy',
    year: '2023',
    client: 'UNDP LAC',
    description:
      'Policy brief on climate finance gaps in Latin America, presented at COP28 side events, analyzing concessional finance needs and blended finance mechanisms.',
    tags: ['COP28', 'Climate Finance', 'UNDP'],
    location: { lat: 25.2048, lng: 55.2708, city: 'Dubai, UAE' },
    color: '#2D6A4F',
  },
]

// ── EXPERTISE AREAS ──────────────────────────────────────────────────────────
export const expertise = [
  {
    icon: '🌿',
    title: 'Climate Strategy & Policy',
    description:
      'Design of national and subnational climate action plans, NDC implementation roadmaps, and governance frameworks for resilient low-carbon transitions.',
    skills: ['NDC Design', 'Climate Governance', 'Carbon Pricing', 'Just Transition'],
  },
  {
    icon: '🏙️',
    title: 'Sustainable Urban Development',
    description:
      'Sustainable city planning, green infrastructure investment analysis, and institutional coordination for inclusive and climate-resilient urban systems.',
    skills: ['Urban Resilience', 'Green Infrastructure', 'Housing Policy', 'Informal Settlements'],
  },
  {
    icon: '📊',
    title: 'Environmental Economics',
    description:
      'Economic modeling of environmental externalities, carbon market design, ecosystem services valuation, and green fiscal policy analysis.',
    skills: ['Carbon Markets', 'REDD+', 'Ecosystem Services', 'Green Fiscal Policy'],
  },
  {
    icon: '🌐',
    title: 'International Cooperation',
    description:
      'Multi-stakeholder coordination for climate diplomacy, regional sustainability frameworks, and bilateral technical cooperation programs.',
    skills: ['Climate Diplomacy', 'Regional Frameworks', 'Donor Coordination', 'COP Processes'],
  },
  {
    icon: '💡',
    title: 'Public Policy & Institutions',
    description:
      'Institutional strengthening, policy evaluation, and evidence-based decision support for governments and international development organizations.',
    skills: ['Policy Evaluation', 'Institutional Design', 'Regulatory Frameworks', 'Public Finance'],
  },
  {
    icon: '📈',
    title: 'Research & Analytics',
    description:
      'Applied economic research, quantitative modeling, and data-driven analysis to support policy design and strategic planning in sustainability.',
    skills: ['Econometric Modeling', 'Impact Evaluation', 'Scenario Analysis', 'Data Visualization'],
  },
]

// ── EDUCATION ────────────────────────────────────────────────────────────────
export const education = [
  {
    year: '2018 – 2020',
    degree: 'Master of Science in Environmental Economics',
    institution: 'London School of Economics and Political Science',
    location: 'London, UK',
    description:
      'Specialized in climate policy, environmental valuation, and international climate finance. Thesis: "Carbon Pricing Mechanisms and Fiscal Equity in Emerging Economies."',
    type: 'education',
  },
  {
    year: '2012 – 2017',
    degree: 'Bachelor of Economics',
    institution: 'Universidad de los Andes',
    location: 'Bogotá, Colombia',
    description:
      'Major in development economics and public policy. Graduated with honors. Research focus on urban poverty and fiscal decentralization.',
    type: 'education',
  },
  {
    year: '2021',
    degree: 'Certificate in Climate Finance',
    institution: 'Frankfurt School of Finance & Management',
    location: 'Online / Frankfurt, Germany',
    description:
      'Intensive program on green bonds, blended finance, and climate-related financial risk assessment frameworks (TCFD).',
    type: 'certificate',
  },
  {
    year: '2019',
    degree: 'Certificate in Urban Economics',
    institution: 'World Bank Institute',
    location: 'Washington D.C., USA',
    description:
      'Program covering urban economics, land use policy, and municipal finance instruments for sustainable city development.',
    type: 'certificate',
  },
]

// ── AWARDS ───────────────────────────────────────────────────────────────────
export const awards = [
  {
    year: '2023',
    title: 'Latin America Climate Leader',
    issuer: 'Climate Action Network International',
    description:
      'Recognized for outstanding contributions to climate policy design and advocacy in the Latin American region.',
    category: 'Recognition',
  },
  {
    year: '2022',
    title: 'Best Policy Paper — Urban Climate Resilience',
    issuer: 'International Society for Ecological Economics',
    description:
      'Award for research paper on urban resilience frameworks integrating ecological and economic approaches.',
    category: 'Research',
  },
  {
    year: '2021',
    title: 'Young Economist of the Year',
    issuer: 'Sociedad Colombiana de Economistas',
    description:
      'National recognition for contributions to applied environmental economics and public policy research.',
    category: 'Recognition',
  },
  {
    year: '2020',
    title: 'LSE Climate Research Grant',
    issuer: 'London School of Economics',
    description:
      'Competitive research grant for doctoral work on carbon pricing equity implications in emerging markets.',
    category: 'Grant',
  },
  {
    year: '2019',
    title: 'COP25 Youth Delegate',
    issuer: 'UNFCCC',
    description:
      'Selected as youth delegate representing Colombia at the 25th Conference of the Parties in Madrid.',
    category: 'Recognition',
  },
  {
    year: '2017',
    title: 'Summa Cum Laude',
    issuer: 'Universidad de los Andes',
    description:
      'Graduated with highest academic distinction in the Economics program.',
    category: 'Academic',
  },
]

// ── STATS ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: '20+', label: 'Projects Led' },
  { value: '8+',  label: 'Years Experience' },
  { value: '12',  label: 'Countries' },
  { value: '6',   label: 'Int\'l Organizations' },
]

// ── CLIENTS / PARTNERS ───────────────────────────────────────────────────────
export const partners = [
  'World Bank', 'UNDP', 'IDB', 'UN-Habitat',
  'UNEP', 'GIZ', 'Pacific Alliance', 'UNFCCC',
]
