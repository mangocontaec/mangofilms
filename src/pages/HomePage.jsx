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

function ParticleShowreelBtn() {
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

  const handleMouseLeave = () => setParticles([])

  return (
    <a
      ref={btnRef}
      href={SHOWREEL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="showreel-btn"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {particles.map(p => (
        <span
          key={p.id}
          className="showreel-particle"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            '--angle': `${p.angle}deg`,
            '--dist': `${p.dist}px`,
          }}
        />
      ))}
      <span className="showreel-btn__sweep" />
      <Play size={18} className="showreel-btn__icon" />
      <span className="showreel-btn__text">Watch Showreel</span>
    </a>
  )
}

const HERO_BG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRrxn4tY6Mn95rp9FAwWKSQwYeplZ6iibF_0v038YrJo_ukxKZ4rVeHU1Mtqbvk5U8AZ8L7wiygdjS5h2F54C9nWHPrLjdebl0KRI4Z-TDrT9ipqYbuPjQkPWbiVbMuWn9QLMAOUU-TeRTXJFuX7GGNy7p_stQDwW8iK4_APOGW3u-g_1L4NusMbfcoRWBpN_KIlD2IKuxYmdwc7Vof55bftYaFp8w322ZRtrt-c-YpqS9eF70hbCuHu6SbARa9W9EaLdDIDzBPJY'
const MANIFESTO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7LnhNokvxXYkOt3Ir-J2GgqDPXuJ0QIy53U9KGfNPFATFDkiMwufu6zPLrEcPpSNfjbrbTJB8C5MygptRi8Rkfoq4Tw650ZUdgI3QvjG97rQ9PAqg-G-KGHGKBYsecPqPwiI2Tbp12blUj68Ao2FN1SJglyIdbekVSK4uIy0z6ue0xo05IVzfQIeK1dv6Jcf0B4f3lSyhQZfUPbV2nJj5xKme7J6FSuXkVrP7Du0cREurEeiBVuSiVGuzcG_oO19qWCYzETgnIu4'

const projects = [
  { id: 1, title: 'Neo-Genesis', subtitle: 'Creative Direction / Visual Effects', tag: 'VFX', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTul6hAKuNX0YSpFWl7D7s_uxyeCuwkA-z4bzkn67xG5yvqg5EskZQLz99qgBakRZej2OJvqT44I_vkVmRkqlmI82AFI7LjDwG1Al6I8PXFjnP3wkgR7sur1rcKh_MVJGDtrYVQbxGoQdjCBWTSFHMlXGnCSFG1NVyxi64NUNxYyXe6jBdPC4ayeAsq1su_JNtug-pFYylxdRlEosiTM-5HoikkTMtAyM7yshNjq2MUYljy1AQIaefPXP_J2wEyLyBgnugjF2FCJo' },
  { id: 2, title: 'The Last Frontier', subtitle: 'Cinematography / Narrative Film', tag: 'Video', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADZ1KMvE_VF4HMexdvqLg798HoRkarhrvS0VX8Xb9gwAE-TlvAY-Kt4asIZXvKfLNlvR5nQq2XE9AE4wUkQzGki9CftSaNoIIeTv3eET-ml0kez-6aXTaGxISc2huCYnNN3Dz2fI6n7vqoUCIRpcq9U8nQH4L_C52N8uf5QbzwYO9d2593fT6HbCyi5fRC5zzogzz9w7glJkKr1gCnn4fmaaj8nGUflEYBy7k4Xh_84X2CF3dm4wq_ApkrAwWrvLbTE20CsSAybvI' },
  { id: 3, title: 'Digital Pulsar', subtitle: '3D Motion / Sound Design', tag: 'Motion', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3iECjUpzY83iUrV9U7wU9j1SuPLkkht-8vjBYys9pzkP4nfJaRZDAo_QpG8PMR4WTf9XpBi-h08E0SPIByqHix71c_37YJL7aBdoadfimIhUTFnTgxtSe8ef6U5lx796fOIQciHcYT4JRQEMLXC6K-w7zEgivmo-m2yomHL2MaMvzYR1IE5KVLghl8jJ4GBEezIGn7tKIf5qdbsXmGIAVhRsjMevvbu2EIGW21R-RPGcqRgjSBCSbOZQXHIyYXp3OGwtUfIH4u5M' },
]

const clientLogos = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDX--WCRaq9wbVG4ooaUDNU8a1fi1S9LbHkN2SrN1j5gEWaiUJocZJrV3vCFXBP_Kb5MA3EgPWihGDPXTh_WeDPIpg8yW-hZ5AFFaUYDXvk3zNtagEFl31jhlSUsOi7Wy8vSTZOwP80Yy0GCZJ9NLNvZ3dxi96cDkq-8M1QX-umFvayV6CZxu81b8NWDLEPa03fbCGJJDxG-JuXRl-uyr4S8-yCt0FjYqPJKp15UPxrhm-Ph33enNGa8XDtqozy1HUiS20AAzIgrEo',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuApeioBBBVOmAWCNSj3U47uMW-WTLy6nvh3vwDUVdEarAnWv7RMFPB-dYFxrQjnbqqmsZC5yNthMlvuJ5pyhnovi0G7CF6_WdK64GUosc92BN7ByFy19tc9nspJEFrzrZA6fHwOSp0sUS0sgaUfRuDk8HfRPfjUPk_cmDrIhXweb27kE6-L3c-4YOjgTuiaVlXhFWyAUBrOV1pt43Yy6vkaUZvo8XQhPzQ7IfrEjCbpF2DCxK2G3mBXRr3mS2I_1FNAucLfB09sN1g',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAdxgbParJjzyyyUGIlcfbPmV55-0Mq3JY2bmjRcVHlHg1Tt_pYTPHl6D5ts1eJP8CGk5W3i_mstephS1PJCxPLxGBigA93Yzargfr_jZNKEHmyXkgX2Dp49HVC-2N70Itgs2ssRtOXGTQnF0RqibwoCQXQu7Mj8RywxjuiP8AdVck-u4Tj2fsa-gfLW_v6ry2W_ck3pLNN4-g5MPznnvv-Tc_n2wOKUVMltXTdo98M9BO7QcejXvl7gpsowhzjnh4nOcuh01zudb4',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDD0YRLLnvx_uc8iS_6uNlDuyRRn3KF6xk1c6SqI-GskmBjc7fllV4DGUwTuIy3S-LVV7TEXDyhbqpAmmak9P6pyHizqREgVdP8fhia9Ngs_m7zt8TZrO-4PkGy7wkvT5nh9qkxqpxNCECCbvjYQBb8t75_2B3OYA17NzgifYjNt1J9NrWu57LdNYIkUtTi5dSn3ph0tyl0QeE2mT4uSnG6nnuIghMQ4bdGVYFz1heghTa-4txrJSg8at7SjHCywPFHjEyEMxAD8gc',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Pa29SAmEcXzIVcd1_mMp9m0mmdsLqzpXunntN_NW5IhsIav_dFE1810DpAzPnZeR-dBjtpV2teLt9tpH9K-nZm10Q_PputwmdMwe7OIGML48-htJEdf2Sl_vdg_4v1-d_Dy0j0w_QqdpmOIA78MAHd2Oyk8jqPfArGh5F_45YU-caDQgcakAwRWg_pzbyo4F3OfbtbqMbSjy58JAbL_TzyoEkMUd9sqOPfH65ZGL_Jd2lWFBBvgbwb6UQi59PJIA4sqlwm88RDU',
]

const stats = [
  { number: 356, label: 'Proyectos Realizados' },
  { number: 200, label: 'Clientes Felices' },
  { number: 12, label: 'Años de Experiencia' },
  { number: 24, label: 'Premios Ganados' },
]

export default function HomePage() {
  const [modalProject, setModalProject] = useState(null)
  const heroRef = useRef(null)
  const carouselRef = useRef(null)

  const scrollCarousel = (dir) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir * 540, behavior: 'smooth' })
    }
  }

  return (
    <PageTransition>
      {/* HERO */}
      <section className="hero" ref={heroRef}>
        {/* YouTube Video Background */}
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

        <div className="hero__content hero__content--centered">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ParticleShowreelBtn />
          </motion.div>
        </div>

        <div className="hero__scroll-indicator">
          <span className="text-label-sm">Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto container-main">
        <div className="manifesto__grid">
          <div className="manifesto__text">
            <ScrollReveal>
              <span className="text-label-sm" style={{ color: 'var(--primary)', letterSpacing: '0.3em', display: 'block', marginBottom: 16 }}>Manifesto</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-headline-lg" style={{ marginBottom: 32, color: '#fff' }}>
                We design and deploy cinematic solutions with <span style={{ color: 'var(--secondary)' }}>people at the core</span>, ensuring every frame enhances real user experiences.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="manifesto__divider" />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p style={{ color: 'rgba(200,198,197,0.7)', maxWidth: 560 }}>
                Mango Films is more than a production house. We are a collective of dreamers, technical wizards, and storytellers based in the heart of creativity. We push the boundaries of what is possible in the digital realm.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} direction="right" className="manifesto__image-wrap">
            <div className="manifesto__image-card glass primary-glow">
              <img src={MANIFESTO_IMG} alt="Digital art projection" />
              <div className="manifesto__image-overlay" />
              <div className="manifesto__image-badge">
                <span className="manifesto__image-line" />
                <p className="text-label-sm" style={{ color: 'var(--primary)' }}>Est. 2012</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="works">
        <div className="container-main works__header">
          <div>
            <ScrollReveal>
              <span className="text-label-sm" style={{ color: 'var(--primary)', letterSpacing: '0.3em', display: 'block', marginBottom: 16 }}>Portfolio</span>
              <h2 className="text-headline-lg" style={{ color: '#fff' }}>Selected Works</h2>
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

        <div className="works__carousel no-scrollbar" ref={carouselRef}>
          {projects.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.1} className="works__card-wrap">
              <motion.div
                className="works__card"
                whileHover={{ scale: 1.02 }}
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
      </section>

      {/* STATS */}
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

      {/* CLIENT LOGOS */}
      <section className="clients">
        <div className="container-main" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="text-label-sm" style={{ color: 'rgba(200,198,197,0.4)', letterSpacing: '0.5em' }}>
            Trusted By Industry Leaders
          </span>
        </div>
        <div className="clients__logos">
          {clientLogos.map((logo, i) => (
            <motion.img
              key={i}
              src={logo}
              alt="Client logo"
              className="clients__logo"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section container-main">
        <div className="cta-section__card glass">
          <div className="cta-section__glow cta-section__glow--tl" />
          <div className="cta-section__glow cta-section__glow--br" />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <ScrollReveal>
              <h2 className="text-display-lg" style={{ color: '#fff', marginBottom: 32, textAlign: 'center' }}>
                ¿Deseas realizar un proyecto? <br />
                <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Contáctanos ahora.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p style={{ color: 'rgba(200,198,197,0.7)', marginBottom: 48, maxWidth: 560, margin: '0 auto 48px', textAlign: 'center' }}>
                Estamos listos para llevar tu visión al siguiente nivel. Cuéntanos tu idea y nuestro equipo se pondrá en contacto en menos de 24 horas.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="cta-section__buttons">
                <a href="https://wa.me/yourwhatsappnumber" className="btn-primary">
                  Contactar por WhatsApp
                </a>
                <Link to="/video" className="btn-glass">Nuestros Servicios</Link>
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
