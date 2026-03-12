import { Mail, Linkedin, MapPin, Download, Globe } from "lucide-react";
import { motion } from "framer-motion";
import SectionContainer from "../components/SectionContainer";
import ContactForm from "../components/ContactForm";

const contactInfo = [
  {
    icon: Mail,
    label: "Correo electrÃ³nico",
    value: "melissa.velasquez@consultoria.com",
    href: "mailto:melissa.velasquez@consultoria.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/melissavelasquez",
    href: "https://linkedin.com/in/melissavelasquez",
    external: true,
  },
  {
    icon: MapPin,
    label: "UbicaciÃ³n",
    value: "BogotÃ¡, Colombia Â· Disponible en remoto",
    href: null,
  },
  {
    icon: Globe,
    label: "Disponibilidad",
    value: "Abierta a proyectos internacionales",
    href: null,
  },
];

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Page Banner */}
      <section className="bg-primary-900 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-300 mb-4">
            Contacto
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            Hablemos
          </h1>
          <p className="text-primary-200/70 text-lg max-w-xl leading-relaxed">
            Â¿Interesada en colaborar en proyectos de polÃ­tica climÃ¡tica, sostenibilidad o cooperaciÃ³n internacional?
            EscrÃ­beme.
          </p>
        </div>
      </section>

      <SectionContainer bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
              InformaciÃ³n de Contacto
            </h3>
            <div className="space-y-4 mb-10">
              {contactInfo.map(({ icon: Icon, label, value, href, external }) => {
                const content = (
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-gray-900">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>

            {/* Download CV */}
            <div className="p-6 bg-earth-50 rounded-2xl border border-earth-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">CurrÃ­culum Vitae</p>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                Descarga el CV actualizado con el detalle completo de experiencia profesional y formaciÃ³n acadÃ©mica.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-900 text-white text-sm font-semibold rounded-xl hover:bg-primary-800 transition-colors"
              >
                <Download className="h-4 w-4" />
                Descargar CV (PDF)
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
              Enviar Mensaje
            </h3>
            <ContactForm />
          </motion.div>

        </div>
      </SectionContainer>
    </div>
  );
}
