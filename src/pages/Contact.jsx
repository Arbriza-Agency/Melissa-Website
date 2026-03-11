import { Mail, Linkedin, MapPin, Download } from "lucide-react";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-earth-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            subtitle="Contacto"
            title="Hablemos"
            description="¿Interesado en colaborar en proyectos de sostenibilidad, consultoría o investigación? No dudes en contactarme."
          />
        </div>
      </section>

      <SectionContainer bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
              Información de Contacto
            </h3>
            <div className="space-y-5 mb-10">
              <a
                href="mailto:contacto@melissa.com"
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Correo electrónico</p>
                  <p className="text-sm text-gray-500">contacto@melissa.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">LinkedIn</p>
                  <p className="text-sm text-gray-500">linkedin.com/in/melissa</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Ubicación</p>
                  <p className="text-sm text-gray-500">Por definir</p>
                </div>
              </div>
            </div>

            {/* Download CV */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white text-sm font-semibold rounded-xl hover:bg-primary-800 transition-colors"
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
              Enviar Mensaje
            </h3>
            <ContactForm />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
