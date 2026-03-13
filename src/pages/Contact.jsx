import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="bg-deep-green text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="section-label text-soft-green">Contact</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">Let&apos;s collaborate</h1>
          <p className="text-white/70 font-body max-w-2xl mx-auto leading-relaxed">
            Share a few details about your project, research collaboration, or speaking request.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-light">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 space-y-4">
            <h2 className="font-display text-2xl font-semibold text-dark">Contact details</h2>
            <p className="font-body text-dark/65 text-sm">
              I typically respond within 2 business days. For urgent matters, please include timelines in the message.
            </p>
            <div className="space-y-2 text-sm font-body text-dark/70">
              <p>✉ melissa.velasquez@consultoria.com</p>
              <p>🔗 linkedin.com/in/melissavelasquez</p>
              <p>📍 Bogotá, Colombia · Remote available</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
