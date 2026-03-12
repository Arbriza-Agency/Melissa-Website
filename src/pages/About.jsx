import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Languages } from "lucide-react";
import SectionContainer from "../components/SectionContainer";

const profile = [
  { label: "UbicaciÃ³n", value: "BogotÃ¡, Colombia Â· Remoto", icon: MapPin },
  { label: "Idiomas", value: "EspaÃ±ol Â· InglÃ©s Â· PortuguÃ©s (intermedio)", icon: Languages },
  { label: "Email", value: "melissa.velasquez@consultoria.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/melissavelasquez", icon: Linkedin },
];

const focusAreas = [
  "Estrategia ClimÃ¡tica & NDC",
  "Desarrollo Urbano Sostenible",
  "CooperaciÃ³n Internacional",
  "PolÃ­tica Ambiental & RegulaciÃ³n",
  "EconomÃ­a Ambiental",
  "Financiamiento ClimÃ¡tico",
  "Sostenibilidad Corporativa (ESG)",
  "EconomÃ­a Circular",
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Page Banner */}
      <section className="bg-primary-900 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-300 mb-4">
              Perfil Profesional
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4 max-w-2xl">
              Melissa VelÃ¡squez
            </h1>
            <p className="text-primary-200/70 text-lg max-w-xl leading-relaxed">
              Economista Â· Estrategia ClimÃ¡tica Â· Desarrollo Urbano Sostenible Â· CooperaciÃ³n Internacional
            </p>
          </motion.div>
        </div>
      </section>

      <SectionContainer bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Photo */}
              <div className="w-full aspect-square bg-earth-100 rounded-2xl border border-earth-200 flex items-center justify-center">
                <div className="text-center text-earth-400">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-earth-200 flex items-center justify-center">
                    <svg className="h-8 w-8 text-earth-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <p className="text-xs font-medium">Foto Profesional</p>
                </div>
              </div>

              {/* Info table */}
              <div className="divide-y divide-gray-100">
                {profile.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="py-3 flex items-start gap-3">
                    <Icon className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{label}</p>
                      <p className="text-sm text-gray-900 font-medium mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Focus areas */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Ãreas de Enfoque</p>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <span key={area} className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full border border-primary-100">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-5">
                Trayectoria Profesional
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Melissa VelÃ¡squez es economista con especializaciÃ³n en sostenibilidad, polÃ­tica climÃ¡tica y
                  desarrollo urbano. Con mÃ¡s de 8 aÃ±os de experiencia en el sector pÃºblico, organismos internacionales y
                  consultorÃ­a estratÃ©gica, ha liderado proyectos de alto impacto en AmÃ©rica Latina, Europa y Ãfrica.
                </p>
                <p>
                  Su trabajo se centra en el diseÃ±o de estrategias de desarrollo sostenible, la implementaciÃ³n de
                  polÃ­ticas climÃ¡ticas y la gestiÃ³n de programas de cooperaciÃ³n internacional. Ha colaborado con
                  el <strong className="text-gray-800">PNUD</strong>, el{" "}
                  <strong className="text-gray-800">Banco Interamericano de Desarrollo (BID)</strong>,{" "}
                  <strong className="text-gray-800">ONU-HÃ¡bitat</strong> y gobiernos nacionales y locales en el diseÃ±o
                  de marcos normativos, planes de acciÃ³n climÃ¡tica y estrategias de resiliencia urbana.
                </p>
                <p>
                  Es autora de investigaciones sobre economÃ­a ambiental, financiamiento climÃ¡tico y transiciÃ³n
                  ecolÃ³gica, publicadas en revistas especializadas y presentadas en foros internacionales como la
                  COP, el Foro Urbano Mundial y la ComisiÃ³n EconÃ³mica para AmÃ©rica Latina y el Caribe (CEPAL).
                </p>
                <p>
                  Su enfoque integra herramientas de anÃ¡lisis cuantitativo, evaluaciÃ³n de impacto y consultorÃ­a
                  estratÃ©gica para generar soluciones concretas en materia de polÃ­tica climÃ¡tica, urbanismo sostenible
                  y gobernanza ambiental a escala global.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-primary-900 rounded-2xl p-7 text-white">
                <h4 className="font-serif text-lg font-semibold mb-3">MisiÃ³n</h4>
                <p className="text-primary-200/80 text-sm leading-relaxed">
                  Impulsar polÃ­ticas y estrategias que transformen la relaciÃ³n entre economÃ­a,
                  desarrollo humano y sostenibilidad ambiental con impacto medible.
                </p>
              </div>
              <div className="bg-earth-50 rounded-2xl p-7 border border-earth-200">
                <h4 className="font-serif text-lg font-semibold text-gray-900 mb-3">VisiÃ³n</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Un mundo donde la acciÃ³n climÃ¡tica y el desarrollo socioeconÃ³mico se refuercen
                  mutuamente, liderado por polÃ­ticas basadas en evidencia e innovaciÃ³n.
                </p>
              </div>
            </div>

            {/* Orgs worked with */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                Ha colaborado con
              </p>
              <div className="flex flex-wrap gap-3">
                {["PNUD / UNDP", "BID", "ONU-HÃ¡bitat", "Banco Mundial", "GIZ", "CEPAL", "ICLEI"].map((org) => (
                  <span key={org} className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-200 rounded-xl">
                    {org}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
