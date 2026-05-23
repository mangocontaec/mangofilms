import { useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, ArrowLeft, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import ProjectModal from '../components/ProjectModal'
import './HomePage.css'

const SHOWREEL_URL = 'https://www.youtube.com/watch?v=bLgjHzZNEuM'
const YOUTUBE_EMBED = 'https://www.youtube.com/embed/bLgjHzZNEuM?autoplay=1&mute=1&loop=1&playlist=bLgjHzZNEuM&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1&fs=0'
const WA_LINK = 'https://wa.link/uviyuj'

/* ── Reusable particle button ── */
function ParticleBtn({ href, target = '_blank', children, className = '' }) {
  const [particles, setParticles] = useState([])
  const btnRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const rect = btnRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now() + Math.random()
    const angle = Math.random() * 360
    const size = Math.random() * 7 + 3
    const dist = Math.random() * 60 + 30
    setParticles(prev => [...prev.slice(-25), { id, x, y, angle, size, dist }])
    setTimeout(() => setParticles(prev => prev.filter(p => p.id !== id)), 900)
  }, [])

  return (
    <a
      ref={btnRef}
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={`particle-btn ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setParticles([])}
    >
      {particles.map(p => (
        <span
          key={p.id}
          className="showreel-particle"
          style={{
            left: p.x, top: p.y,
            width: p.size, height: p.size,
            '--angle': `${p.angle}deg`,
            '--dist': `${p.dist}px`,
          }}
        />
      ))}
      <span className="particle-btn__sweep" />
      {children}
    </a>
  )
}

const MANIFESTO_IMG = '/nosotros.jpg'

const projects = [
  { id: 1, title: 'Neo-Genesis', subtitle: 'Creative Direction / Visual Effects', tag: 'VFX', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTul6hAKuNX0YSpFWl7D7s_uxyeCuwkA-z4bzkn67xG5yvqg5EskZQLz99qgBakRZej2OJvqT44I_vkVmRkqlmI82AFI7LjDwG1Al6I8PXFjnP3wkgR7sur1rcKh_MVJGDtrYVQbxGoQdjCBWTSFHMlXGnCSFG1NVyxi64NUNxYyXe6jBdPC4ayeAsq1su_JNtug-pFYylxdRlEosiTM-5HoikkTMtAyM7yshNjq2MUYljy1AQIaefPXP_J2wEyLyBgnugjF2FCJo' },
  { id: 2, title: 'The Last Frontier', subtitle: 'Cinematografía / Narrativa', tag: 'Video', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADZ1KMvE_VF4HMexdvqLg798HoRkarhrvS0VX8Xb9gwAE-TlvAY-Kt4asIZXvKfLNlvR5nQq2XE9AE4wUkQzGki9CftSaNoIIeTv3eET-ml0kez-6aXTaGxISc2huCYnNN3Dz2fI6n7vqoUCIRpcq9U8nQH4L_C52N8uf5QbzwYO9d2593fT6HbCyi5fRC5zzogzz9w7glJkKr1gCnn4fmaaj8nGUflEYBy7k4Xh_84X2CF3dm4wq_ApkrAwWrvLbTE20CsSAybvI' },
  { id: 3, title: 'Digital Pulsar', subtitle: '3D Motion / Sound Design', tag: 'Motion', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3iECjUpzY83iUrV9U7wU9j1SuPLkkht-8vjBYys9pzkP4nfJaRZDAo_QpG8PMR4WTf9XpBi-h08E0SPIByqHix71c_37YJL7aBdoadfimIhUTFnTgxtSe8ef6U5lx796fOIQciHcYT4JRQEMLXC6K-w7zEgivmo-m2yomHL2MaMvzYR1IE5KVLghl8jJ4GBEezIGn7tKIf5qdbsXmGIAVhRsjMevvbu2EIGW21R-RPGcqRgjSBCSbOZQXHIyYXp3OGwtUfIH4u5M' },
  { id: 4, title: 'Neon Abyss', subtitle: 'Simulación de fluidos / VFX', tag: 'VFX', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtQu9mCREtxHUO99bBl34pJm_XCo8uguGi4Uqn05SX5rKWqfmQ1VJNsMICAiYF_7dYIL49b2eWGOunlB8jjXyIqxIi3MKJFG5FiJpVc1dCH1Kq_IaSMSqMPCwXdEfGZ7Bm_F_6KTkb1qElQjl_4dqKFCGIIpqZdaHqQ0wnFz9b8hnjJzHiPXzuA_IvLcGIwjy-Ds-T-e0JeMJI9HdKaHj3YPUvzXS3LLcXFiUmBOxuGKUOeSXEJ6pVj' },
  { id: 5, title: 'Vortex Phase', subtitle: 'Product Motion / Branding', tag: 'Motion', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpHKzJfgTzBkxpRbJmS6blZmUlXbpA5qbxSgFdaZTU9jW45HFKrJ7m-L4n9cF1XEUP6v6UfCbdOqO30j83gkH8wBKKGQ97b7N70fWPQ3XxBQ5HVR-x6b_oDEJPBvT7hPEZIzg4Fc0J_SbZhDENAflmcxuXRDIbCMN3i2ylKOl_8mHuJh5Pk-hy_b8DEPk_WaOaS0Xy1hJ76TkI_RFcJLwIQgPgHqCGPZ-4JJPCTg3RJVEcxFOB1r' },
  { id: 6, title: 'Eclipse Noir', subtitle: 'Fotografía Cinemática', tag: 'Photo', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD77nDqm8WtHPhC4UczKL9iAUCZ3XlMD3l7YQRLa3uscnvTTM1NNM5IuhRhzYtCGXyLnhb-6xBl95Zwvisae1gaeYRvOxsVYfbS8CevxOXva1wGOFX0Sj6t2_Tr4bpocziBf7hY_da9UZnVo32R9q82yIJXwvEjEf6TiwcIAIIMk4LEXTOeFIe1w8tjsQ97QoMZL4aA359KzUAyV9ysVdLMMV3414p07tpnVGBRPDavyR5nV609hEQ-HTLu8f02WxJoCnIKY7xwLx8' },
  { id: 7, title: 'Quantum City', subtitle: 'Mapping / Instalación Visual', tag: 'Mapping', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABUi1saSWYP9ddpCpUFCSebzTcrlvnIbNPC8_0_lqBZj69uhb9Pj8d5N6xJ_EPa1a2J9kSdM8qJHSnD5wkZ87CTSAqTo1nravRq4aGYeHIFSxfOnzTwLKO5OlGavKsGwuhwxMuO4v4UDCmSDbh26er2F5pTuZW8OGHvx19LITOrunKsJX2gmnrObtCDrEJdT_Q3d_uXkQ2gs53B2fEb4LIWOOPJyUDKJVTcyND2Ma1zXxXisOn6i788pcOWmoqCw6YqdeCuxdB69w' },
  { id: 8, title: 'Fractal Dreams', subtitle: 'Animación 2D / Ilustración', tag: '2D', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApeioBBBVOmAWCNSj3U47uMW-WTLy6nvh3vwDUVdEarAnWv7RMFPB-dYFxrQjnbqqmsZC5yNthMlvuJ5pyhnovi0G7CF6_WdK64GUosc92BN7ByFy19tc9nspJEFrzrZA6fHwOSp0sUS0sgaUfRuDk8HfRPfjUPk_cmDrIhXweb27kE6-L3c-4YOjgTuiaVlXhFWyAUBrOV1pt43Yy6vkaUZvo8XQhPzQ7IfrEjCbpF2DCxK2G3mBXRr3mS2I_1FNAucLfB09sN1g' },
]

const brandLogos = [
  { src: '/logo-lov.png', alt: 'LOV' },
  { src: '/logo-mango.png', alt: 'Mango Films' },
  { src: '/logo-cartago.png', alt: 'Cartago Spirit' },
]

const stats = [
  { number: 421, label: 'Proyectos Realizados' },
  { number: 182, label: 'Clientes Felices' },
  { number: 8, label: 'Años de Experiencia' },
]

export default function HomePage() {
  const [modalProject, setModalProject] = useState(null)
  const carouselRef = useRef(null)

  const scrollCarousel = (dir) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir * 540, behavior: 'smooth' })
    }
  }

  return (
    <PageTransition>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__video-wrap">
          <iframe
            src={YOUTUBE_EMBED}
            className="hero__video-iframe"
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            title="Mango Films Showreel Background"
            frameBorder="0"
          />
          <div className="hero__video-overlay" />
        </div>

        {/* Button pinned to bottom */}
        <motion.div
          className="hero__btn-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <ParticleBtn href={SHOWREEL_URL} className="showreel-btn">
            <Play size={18} className="showreel-btn__icon" />
            <span className="showreel-btn__text">Watch Showreel</span>
          </ParticleBtn>
        </motion.div>

        <div className="hero__scroll-indicator">
          <span className="text-label-sm">Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ── NOSOTROS ── */}
      <section className="manifesto container-main">
        <div className="manifesto__grid">
          <div className="manifesto__text">
            <ScrollReveal>
              <span className="text-label-sm" style={{ color: 'var(--primary)', letterSpacing: '0.3em', display: 'block', marginBottom: 16 }}>Quiénes somos</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-headline-lg" style={{ marginBottom: 32, color: '#fff' }}>
                Nosotros.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="manifesto__divider" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p style={{ color: 'rgba(200,198,197,0.85)', maxWidth: 560, marginBottom: 24, lineHeight: 1.8 }}>
                Somos una productora audiovisual con varios años de experiencia enfocada en las artes visuales multidisciplinarias como <span style={{ color: 'var(--primary)' }}>3D, Animación 2D, VFX, Filmmaking, Mapping</span>.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p style={{ color: 'rgba(200,198,197,0.7)', maxWidth: 560, lineHeight: 1.8 }}>
                Mango Films se ubica en <strong style={{ color: '#fff' }}>Ambato — Ecuador</strong>, siendo parte de varios proyectos colaborativos con varias productoras a nivel nacional e internacional, teniendo un amplio portafolio de trabajos de alto nivel.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} direction="right" className="manifesto__image-wrap">
            <div className="manifesto__image-card glass primary-glow">
              <img src={MANIFESTO_IMG} alt="Equipo Mango Films" />
              <div className="manifesto__image-overlay" />
              <div className="manifesto__image-badge">
                <span className="manifesto__image-line" />
                <p className="text-label-sm" style={{ color: 'var(--primary)' }}>Ambato — Ecuador</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PROYECTOS SELECCIONADOS ── */}
      <section className="works">
        <div className="container-main works__header">
          <div>
            <ScrollReveal>
              <span className="text-label-sm" style={{ color: 'var(--primary)', letterSpacing: '0.3em', display: 'block', marginBottom: 16 }}>Portafolio</span>
              <h2 className="text-headline-lg" style={{ color: '#fff' }}>Proyectos Seleccionados</h2>
            </ScrollReveal>
          </div>
          <div className="works__arrows">
            <button className="works__arrow glass" onClick={() => scrollCarousel(-1)}>
              <ArrowLeft size={20} />
            </button>
            <button className="works__arrow glass" onClick={() => scrollCarousel(1)}>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="works__carousel-wrap">
          <div className="works__fade-left" />
          <div className="works__carousel no-scrollbar" ref={carouselRef}>
            {projects.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.07} className="works__card-wrap">
                <motion.div
                  className="works__card"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setModalProject(p)}
                >
                  <div className="works__card-image">
                    <img src={p.image} alt={p.title} />
                    <div className="works__card-overlay" />
                    <div className="works__card-play">
                      <Play size={24} fill="#fff" />
                    </div>
                    <span className="works__card-tag glass text-label-xs">{p.tag}</span>
                  </div>
                  <h3 className="text-headline-mobile works__card-title">{p.title}</h3>
                  <p className="works__card-subtitle">{p.subtitle}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          <div className="works__fade-right" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats container-main">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="stats__card glass glass-hover">
                <span className="stats__number">
                  <AnimatedCounter end={s.number} />
                </span>
                <span className="text-label-sm stats__label">{s.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── MARCAS ── */}
      <section className="clients">
        <div className="container-main" style={{ textAlign: 'center', marginBottom: 48 }}>
          <ScrollReveal>
            <span className="text-label-sm" style={{ color: 'rgba(200,198,197,0.5)', letterSpacing: '0.4em' }}>
              Marcas que confían en nuestro trabajo
            </span>
          </ScrollReveal>
        </div>
        <div className="clients__logos">
          {brandLogos.map((logo, i) => (
            <motion.img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="clients__logo"
              whileHover={{ scale: 1.12, filter: 'grayscale(0) brightness(1.2)' }}
            />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section container-main">
        <div className="cta-section__card glass">
          <div className="cta-section__glow cta-section__glow--tl" />
          <div className="cta-section__glow cta-section__glow--br" />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <ScrollReveal>
              <h2 className="text-display-lg" style={{ color: '#fff', marginBottom: 16, textAlign: 'center' }}>
                ¡Hagamos un proyecto juntos!
              </h2>
              <p className="text-headline-mobile" style={{ color: 'var(--primary)', fontStyle: 'italic', textAlign: 'center', marginBottom: 48 }}>
                Contáctanos ahora.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="cta-section__buttons">
                <ParticleBtn href={WA_LINK} className="wa-btn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.222-4.032c1.53.913 3.36 1.396 5.229 1.397 5.462 0 9.903-4.44 9.905-9.903 0-2.646-1.03-5.133-2.902-7.007-1.871-1.873-4.359-2.903-7.007-2.903-5.463 0-9.903 4.44-9.905 9.903 0 1.929.505 3.808 1.46 5.47l-.951 3.474 3.567-.935z"/>
                  </svg>
                  <span style={{ position: 'relative', zIndex: 1 }}>Contactar por WhatsApp</span>
                </ParticleBtn>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={!!modalProject}
        onClose={() => setModalProject(null)}
        project={modalProject}
      />
    </PageTransition>
  )
}
