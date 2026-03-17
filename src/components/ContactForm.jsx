import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', organization: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // In production: connect to email service / API
    setSent(true)
  }

  if (sent) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-soft-green/30 rounded-full flex items-center justify-center mx-auto mb-5">
          <span className="text-3xl">✓</span>
        </div>
        <h3 className="font-display text-2xl font-semibold text-dark mb-2">Message Sent!</h3>
        <p className="text-dark/60 font-body text-sm">
          Thank you for reaching out. Melissa will respond within 2 business days.
        </p>
        <button onClick={() => { setSent(false); setForm({ name:'',email:'',organization:'',subject:'',message:'' }) }}
          className="mt-6 btn-outline text-sm">
          Send Another Message
        </button>
      </div>
    )
  }

  const field = (name, label, type = 'text', placeholder = '') => (
    <div>
      <label className="block text-xs font-body font-medium text-dark/60 mb-1.5 tracking-wide uppercase">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handleChange}
        placeholder={placeholder}
        required={['name','email','message'].includes(name)}
        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-forest/70
                   text-sm font-body text-dark placeholder:text-dark/40
                   focus:outline-none focus:ring-2 focus:ring-soft-green/25 focus:border-soft-green/40
                   transition-all duration-200"
      />
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {field('name', 'Full Name', 'text', 'Your name')}
        {field('email', 'Email Address', 'email', 'your@email.com')}
      </div>
      {field('organization', 'Organization / Institution', 'text', 'Optional')}
      <div>
        <label className="block text-xs font-body font-medium text-dark/60 mb-1.5 tracking-wide uppercase">
          Subject
        </label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-forest/70
                     text-sm font-body text-dark
                     focus:outline-none focus:ring-2 focus:ring-soft-green/25 focus:border-soft-green/40
                     transition-all duration-200"
        >
          <option value="">Select a topic...</option>
          <option>Climate Strategy Consulting</option>
          <option>Urban Development Project</option>
          <option>Research Collaboration</option>
          <option>Speaking Engagement</option>
          <option>Other Inquiry</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-body font-medium text-dark/60 mb-1.5 tracking-wide uppercase">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Describe your project or inquiry..."
          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-forest/70
                     text-sm font-body text-dark placeholder:text-dark/40 resize-none
                     focus:outline-none focus:ring-2 focus:ring-soft-green/25 focus:border-soft-green/40
                     transition-all duration-200"
        />
      </div>
      <button type="submit" className="btn-primary w-full justify-center py-3.5">
        Send Message
        <span>→</span>
      </button>
      <p className="text-xs font-body text-center text-dark/40">
        Typically responds within 2 business days
      </p>
    </form>
  )
}
