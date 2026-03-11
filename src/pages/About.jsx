import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-earth-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            subtitle="Sobre Mí"
            title="Perfil Profesional"
            description="Economista y especialista en sostenibilidad con experiencia en estrategia climática, política pública y desarrollo internacional."
          />
        </div>
      </section>

      <SectionContainer bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Side Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="w-full aspect-square bg-gray-100 rounded-2xl mb-6 flex items-center justify-center border border-gray-200">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg className="h-8 w-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <p className="text-sm">Foto</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Ubicación</span>
                  <span className="text-sm font-medium text-gray-900">Por definir</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Idiomas</span>
                  <span className="text-sm font-medium text-gray-900">Español, Inglés</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Especialidad</span>
                  <span className="text-sm font-medium text-gray-900">Sostenibilidad</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                Trayectoria Profesional
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Profesional con sólida formación en economía y un profundo compromiso con la sostenibilidad
                y la acción climática. Mi trayectoria combina análisis económico riguroso con una visión estratégica
                orientada al desarrollo sostenible y la cooperación internacional.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                He colaborado con organizaciones internacionales y gobiernos locales en el diseño e implementación
                de políticas públicas orientadas a la transición ecológica, la economía circular y la mitigación
                del cambio climático.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Mi enfoque integra herramientas de análisis cuantitativo, investigación académica y consultoría
                estratégica para generar impacto positivo en materia ambiental, social y económica a escala global.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-primary-50 rounded-xl p-6">
                <h4 className="font-serif font-semibold text-gray-900 mb-2">Misión</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Contribuir al desarrollo sostenible a través de estrategias basadas en evidencia,
                  innovación política y colaboración internacional.
                </p>
              </div>
              <div className="bg-earth-50 rounded-xl p-6">
                <h4 className="font-serif font-semibold text-gray-900 mb-2">Visión</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Un mundo donde la economía y la sostenibilidad convergent para generar
                  prosperidad compartida y resiliencia climática.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
