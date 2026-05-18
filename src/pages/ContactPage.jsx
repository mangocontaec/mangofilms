import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Video } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import './ContactPage.css'

const STUDIO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuABUi1saSWYP9ddpCpUFCSebzTcrlvnIbNPC8_0_lqBZj69uhb9Pj8d5N6xJ_EPa1a2J9kSdM8qJHSnD5wkZ87CTSAqTo1nravRq4aGYeHIFSxfOnzTwLKO5OlGavKsGwuhwxMuO4v4UDCmSDbh26er2F5pTuZW8OGHvx19LITOrunKsJX2gmnrObtCDrEJdT_Q3d_uXkQ2gs53B2fEb4LIWOOPJyUDKJVTcyND2Ma1zXxXisOn6i788pcOWmoqCw6YqdeCuxdB69w'
const MAP_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD77nDqm8WtHPhC4UczKL9iAUCZ3XlMD3l7YQRLa3uscnvTTM1NNM5IuhRhzYtCGXyLnhb-6xBl95Zwvisae1gaeYRvOxsVYfbS8CevxOXva1wGOFX0Sj6t2_Tr4bpocziBf7hY_da9UZnVo32R9q82yIJXwvEjEf6TiwcIAIIMk4LEXTOeFIe1w8tjsQ97QoMZL4aA359KzUAyV9ysVdLMMV3414p07tpnVGBRPDavyR5nV609hEQ-HTLu8f02WxJoCnIKY7xwLx8'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', type: 'Cinematic Video', message: '' })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you within 24 hours.')
  }

  return (
    <PageTransition>
      <main className="contact-page cinema-gradient">
        <div className="contact-layout container-main">
          {/* Left Column */}
          <div className="contact-hero">
            <ScrollReveal>
              <span className="contact-badge text-label-sm">
                <Video size={14} />
                Film Production Studio
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-display-lg text-glow contact-title">
                Let's Create <br />
                <span style={{ color: 'var(--primary-fixed-dim)' }}>Something Immortal.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p style={{ color: 'var(--secondary)', opacity: 0.8, maxWidth: 440, marginBottom: 48, lineHeight: 1.8 }}>
                From cinematic visual effects to high-stakes 3D motion, our team is ready to bring your vision into the frame. Reach out and start the scene.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.3}>
              <div className="contact-stats">
                <div className="contact-stat glass glass-hover">
                  <div className="contact-stat__number">150+</div>
                  <div className="text-label-sm" style={{ color: 'var(--secondary)', opacity: 0.6 }}>Global Projects</div>
                </div>
                <div className="contact-stat glass glass-hover">
                  <div className="contact-stat__number">12</div>
                  <div className="text-label-sm" style={{ color: 'var(--secondary)', opacity: 0.6 }}>Awards Won</div>
                </div>
              </div>
            </ScrollReveal>

            {/* Studio Image */}
            <ScrollReveal delay={0.4}>
              <div className="contact-studio glass">
                <img src={STUDIO_IMG} alt="Film production studio" />
                <div className="contact-studio__info">
                  <p className="text-label-sm" style={{ color: '#fff' }}>Our Studio Hub</p>
                  <p style={{ color: 'var(--secondary-fixed)', fontSize: 14 }}>Based in London, Working Worldwide</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column — Form */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="contact-form-card glass">
              <div className="contact-form-glow" />
              <h2 className="text-headline-lg" style={{ marginBottom: 32 }}>Start a Project</h2>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label className="text-label-sm">Your Name</label>
                    <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="contact-form__group">
                    <label className="text-label-sm">Email Address</label>
                    <input type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="contact-form__group">
                  <label className="text-label-sm">Project Type</label>
                  <select name="type" value={formData.type} onChange={handleChange}>
                    <option>Cinematic Video</option>
                    <option>3D Animation</option>
                    <option>VFX Post-Production</option>
                    <option>Corporate Branding</option>
                    <option>Photography</option>
                  </select>
                </div>

                <div className="contact-form__group">
                  <label className="text-label-sm">Message</label>
                  <textarea name="message" rows={4} placeholder="Tell us about your masterpiece..." value={formData.message} onChange={handleChange} />
                </div>

                <div className="contact-form__actions">
                  <motion.button
                    type="submit"
                    className="btn-primary contact-submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Request <Send size={16} />
                  </motion.button>
                  <a href="https://wa.me/yourlink" className="btn-glass contact-whatsapp">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.222-4.032c1.53.913 3.36 1.396 5.229 1.397 5.462 0 9.903-4.44 9.905-9.903 0-2.646-1.03-5.133-2.902-7.007-1.871-1.873-4.359-2.903-7.007-2.903-5.463 0-9.903 4.44-9.905 9.903 0 1.929.505 3.808 1.46 5.47l-.951 3.474 3.567-.935z"/>
                    </svg>
                    Enviar a WhatsApp
                  </a>
                </div>
              </form>

              {/* Contact Info */}
              <div className="contact-info">
                <div>
                  <p className="text-label-sm" style={{ color: 'var(--secondary)', marginBottom: 8 }}>Connect Directly</p>
                  <p style={{ fontWeight: 700 }}>hello@mangofilms.com</p>
                  <p style={{ fontWeight: 700 }}>+44 20 7946 0123</p>
                </div>
                <div>
                  <p className="text-label-sm" style={{ color: 'var(--secondary)', marginBottom: 8 }}>Studio Hours</p>
                  <p style={{ fontWeight: 700 }}>Mon — Fri</p>
                  <p style={{ fontWeight: 700 }}>10:00 — 19:00 GMT</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Map Section */}
        <section className="contact-map container-main">
          <ScrollReveal>
            <div className="contact-map__card glass">
              <div className="contact-map__bg" style={{ backgroundImage: `url(${MAP_IMG})` }} />
              <div className="contact-map__gradient" />
              <div className="contact-map__pin">
                <div className="contact-map__pin-glow" />
                <div className="contact-map__pin-icon">
                  <MapPin size={20} fill="var(--on-primary-fixed)" />
                </div>
              </div>
              <div className="contact-map__label glass">
                <h4 style={{ fontWeight: 700 }}>Creative Quarter Studio</h4>
                <p style={{ color: 'var(--secondary-fixed-dim)', fontSize: 14 }}>32 Film Ave, Shoreditch, London</p>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </PageTransition>
  )
}
