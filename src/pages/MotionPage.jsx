import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import ProjectModal from '../components/ProjectModal'
import './MotionPage.css'

const motionProjects = [
  { id: 1, title: 'Neon Abyss', category: 'Featured Project', description: 'Experimental fluid dynamics simulation exploring the intersection of light and organic geometry.', span: '8', aspect: '16/9', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuvCjfaz8xfu_3iAsl3aeKBstVLAJy16LvU_XOoCr1BIDXirEiPVPDfys6JUMrU715vk-wiLf8ENED1eb9sNUxmPDdGeBwSy1OBB2bytarbF12C_RIM1KTty5sN81U9Wi-0JSA53_1c7VIBJ3s_z0HiI_ie2_tOrk13pciwKJ7tA2_mu-UYL0CTkIJsmaTQdC6Erp9Bx-3k7bdlE4OLRR6-M2NtvVm2lWU-IP-QB-7TmiriXvsrZ6dLh6--sYJAWoMs4BuSRBlrmw' },
  { id: 2, title: 'Vortex Phase', category: 'Product Motion', span: '4', aspect: '4/5', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdo_PUUtniYp4Lyr9ICZFEs-AfumXVNOgl5UgmFEG4FZh-JgFRFYX5smUoPWVK1A1ucH7U39UpAbuBzKdWuHZfO0ZKXG2pnHhwjmlaEncztZH2eAyY_hr8F9VRqtlz0hocN67A9yldFdyfkMJJNlyoIQNx8IRsO78nwAxCAALmWDE7wnGZPQtVl6FWv4oxskzC1GojO0WCc8MmOGvel74WAX3Pfiym4MhIKiuQQmC-50b50IYmG7fWMRDNgI7QExKJ2ecpPNEQS1o' },
  { id: 3, title: 'Cyber Pulse', category: 'Character Design', span: '4', aspect: '4/5', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-R0CsnALjeHxHLdIGVUyHX7_m4I2Dhu-UYMJqGXsfyZOoyUtWMseqkaYaaTkm0ehryEqLfJSoWjJYEpZCPUr-HVeNrkPJOmsiv3X_1DIflucKuOCDldbQ5327VbmE2FNgexRz95U9299JqQ6glz-wpDFFw8r4c_gNSUIan8nrYFG4XikSbz2ADIf5hDHUa4h0UuJGX78aYVeeo_5WtitGESrNP2hv6NQzTZNqFwjmpuPUyz_2ZS_KYJuO8lirBzOQc3GGFFdNpVU' },
  { id: 4, title: 'Titan 01', category: 'Environmental', description: 'Environmental world-building for high-stakes brand narrative.', span: '8', aspect: '16/9', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlSYmhiGvY7jZ3jb0rfV1x3cWd9NdQYzCge6HfyC-Z4U1TQ6Khl79DQd_i1GyGOEr7BbXymE78ogbTr5Kmvg8E80s1ZJWyDZx_Q-9i8IfTgKhMOyyxfVLlMsgzX927QSgka_9TkV3ogAXuJ4j4PoY1Ad-ctfPoP81Pf7rGnITZve2OHxXSpO1ElvClMRMC9C7-o70lCUElIvcAYHf6lwVsYpOeX-Yo2iB0cV_pUcxfqRTziKamR4pcJUkKK59D10Dz5zPPSMBFjoE' },
]

const motionStats = [
  { label: 'Precision', value: '144', accent: 'fps', desc: 'Ultra-high fidelity motion delivery for cinematic clarity.', highlight: true },
  { label: 'Clients', value: '50+', desc: 'Global brands trust our 3D vision.' },
  { label: 'Awards', value: '12', desc: 'Recognized for technical excellence in 2023.' },
]

export default function MotionPage() {
  const [modalProject, setModalProject] = useState(null)

  return (
    <PageTransition>
      <main className="motion-page">
        {/* Hero */}
        <header className="motion-hero container-main">
          <div className="motion-hero__glow" />
          <ScrollReveal>
            <span className="text-label-sm motion-hero__badge">Atmospheric Motion</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-display-lg text-glow" style={{ maxWidth: 700, marginBottom: 24 }}>
              Synthetic <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Realities</span> & Digital Fluidity.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p style={{ color: 'var(--secondary)', opacity: 0.8, maxWidth: 560 }}>
              Crafting avant-garde 3D narratives and high-stakes motion graphics for brands that inhabit the future. We merge cinematic depth with technical precision.
            </p>
          </ScrollReveal>
        </header>

        {/* Bento Grid */}
        <section className="motion-grid container-main">
          <div className="motion-grid__inner">
            {motionProjects.map((p, i) => (
              <ScrollReveal
                key={p.id}
                delay={i * 0.1}
                className={`motion-grid__item motion-grid__item--span-${p.span}`}
              >
                <motion.div
                  className="motion-card"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setModalProject(p)}
                  style={{ aspectRatio: p.aspect }}
                >
                  <img src={p.image} alt={p.title} />
                  <div className="motion-card__overlay">
                    <span className="text-label-sm" style={{ color: 'var(--primary)', marginBottom: 8, display: 'block' }}>{p.category}</span>
                    <h3 className="text-headline-lg">{p.title}</h3>
                    {p.description && <p style={{ color: 'rgba(200,198,197,0.8)', maxWidth: 500, marginTop: 8 }}>{p.description}</p>}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="motion-stats container-main">
          <div className="motion-stats__grid">
            {motionStats.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`motion-stat glass glass-hover ${s.highlight ? 'motion-stat--highlight' : ''}`}>
                  <span className="text-label-sm" style={{ color: s.highlight ? 'var(--primary)' : 'var(--secondary)' }}>{s.label}</span>
                  <div className="motion-stat__value">
                    {s.value}{s.accent && <span style={{ color: 'var(--primary)' }}>{s.accent}</span>}
                  </div>
                  <p style={{ color: 'rgba(200,198,197,0.6)', fontSize: 14 }}>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={0.3}>
              <div className="motion-stat glass glass-hover motion-stat--cta">
                <span className="text-label-sm" style={{ color: 'var(--primary)' }}>Workflow</span>
                <div style={{ fontSize: 32, fontWeight: 700, fontFamily: 'var(--font-display)', lineHeight: 1.2 }}>Start Your Sprint</div>
                <Link to="/contact" className="motion-stat__link">
                  <span className="text-label-sm">Book Call</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <ProjectModal isOpen={!!modalProject} onClose={() => setModalProject(null)} project={modalProject} />
    </PageTransition>
  )
}
