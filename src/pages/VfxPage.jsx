import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import ProjectModal from '../components/ProjectModal'
import './VfxPage.css'

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5yqWAO8gkVKm-pR8aAcz7fEGTKHjUpZRhvOWyFbDes2lqdsPSIkmujHMceNwXyhbxQ0Fy9wXsL3L3qLlpETSqCBLoVFuMFlsNsfPoNAMg4ohE4Rzvbxys0j4_tOlaSZs58_GJTRiGdvxwXvOfGfYtcqmawR4RzbgUP_7fbYBXTA3Mno1vIYYcrG3UyTaqH6TvYSp2ZnTlSibWN4OQxeG0o1r32-oLsO-yV_OnIL_WuoYD2yO9wy8guGcXHzw_-OZ_lC7TJjLZLdY'

const vfxProjects = [
  { id: 1, title: 'Temporal Displacement Simulation', category: 'Project: Chronos', span: '8', tag: 'Case Study', description: 'A deep dive into 4-dimensional rendering techniques with a custom particle engine in Houdini.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkOrIqwWHY7n6WG1MucGR-jK2Uo3FgGlFWRRONPze1v_HG0mgor7PCALeQo-cKK6VzR7dCxWy15nFTNy6ylHil_fFJRbk9cZQy8x-OxjTPAE0533uslLeUypyDjCE1QnSbJIMQMpUjPAnCbnn9EWLAqpTSXATXFxklRE8dJ4QAxuLeesdbme-4Rke-9yJKARTOU7S8pFHNFc6I7gKtP_Z7JzTM8ryfL1Ikdo6M0DhVZMEUwQZ4azrXirMb8r7l-JkWirzcOZ--E-w' },
  { id: 2, title: 'The Nebula Corridor', category: '3D Environment', span: '4', description: 'Creating realistic deep-space environments using volume rendering and procedural gas simulations.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8bbHxGuH_HtPLI5mnJxxIyR5oaOHnGs3M9VpDcp3kA8rB2j7BDd6WpUQ3iMddor_q6FFUzWjn_1aME5VsQ8P7IlTLQXMOpUwFVa3SxllwqokRSQF97Pq25dCrrVlDgOsuvtgxobPRdEg0d7D_PcmJ7XkwJbolj4eUrf1jKHlfK8BQNhAkDRZjSuywdXV2k2k0-nORoU7QKRIjC_xPWlRxqOVQTX49yzdDjooOlKGk7c_pcS_QkDks3Iuoxboz5avYOeR1OmkzIOw' },
  { id: 3, title: 'Augmented Reality Skin', category: 'Character VFX', span: '4', description: 'Seamlessly blending mechanical components with human skin using advanced tracking.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXYIE1iKpttuvYU7y-nj0O8eqPLKY5J7SgLRDHoEkeJdk9IZTxeVxKcFM4GYTrBQWLQSI80zYNTA_zcuJ56ntvuPb2WSRu_S07qLETCzEA8cRzH9JNxYLpp-S3726xIoTUIkiJuk6FmOHChpN67zTi_y7SEFr-zQtSEmawgcWLcmh4G-JUjEFN7jDLSBuvDYcLDeOebhDFex5r-5Dxv3ybo_mQYdPzhrrg7iuE0gNNhSIYsAbX77a7I5hJxDA9IA4z8iNe1M0T74M' },
  { id: 4, title: 'Kinetic Fracture Engine', category: 'Procedural Animation', span: '8', description: 'An exploration of dynamic structural failure with a proprietary glass fracture toolset.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfptVI7JXwu1ywxntI48bWGTBEFDg0CTnDx5KD-RWGv3QAUTpw_qLCIJjT6gRdx61OzNk_JtJ1CoCc8EVY9gODBE-vYG8gcFL2xr6rUArmywB22GYgTc1v-kp6B7GyM532tda9_ieoHuUJMHAo33yYkUqrv65-XNMCQ3-bOwiKgJ97u_YcxuCio0fyEA-vbLxiW4aENN-Fn1S6q6qPOvX6QmroVnJqel7NBuAjQl9N92QbdFdmGcJow4xGYC4pKiZGWbQ3NTFWDnc' },
]

export default function VfxPage() {
  const [modalProject, setModalProject] = useState(null)
  const [filter, setFilter] = useState('all')

  return (
    <PageTransition>
      <main className="vfx-page">
        {/* Hero */}
        <section className="vfx-hero container-main">
          <motion.div
            className="vfx-hero__image"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
          >
            <img src={HERO_IMG} alt="VFX Studio" className="vfx-hero__img" />
            <div className="vfx-hero__gradient" />
            <div className="vfx-hero__text">
              <ScrollReveal>
                <span className="text-label-sm" style={{ color: 'var(--primary)', letterSpacing: '0.3em', display: 'block', marginBottom: 16 }}>Special Visual Effects</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-display-lg">
                  Blurring the lines between <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>reality</span> and imagination.
                </h1>
              </ScrollReveal>
            </div>
          </motion.div>
        </section>

        {/* Gallery Header */}
        <section className="vfx-gallery container-main">
          <div className="vfx-gallery__header">
            <ScrollReveal>
              <h2 className="text-headline-lg">Project Gallery</h2>
            </ScrollReveal>
            <div className="vfx-gallery__filters">
              <button
                className={`vfx-filter text-label-sm ${filter === 'all' ? '' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Projects
              </button>
              <button
                className={`vfx-filter vfx-filter--active text-label-sm`}
                onClick={() => setFilter('cinematic')}
              >
                Cinematic
              </button>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="vfx-grid">
            {vfxProjects.map((p, i) => (
              <ScrollReveal
                key={p.id}
                delay={i * 0.1}
                className={`vfx-grid__item vfx-grid__item--span-${p.span}`}
              >
                <motion.div
                  className="vfx-card"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setModalProject(p)}
                >
                  <div className="vfx-card__image" style={{ aspectRatio: p.span === '8' ? '16/9' : '1/1' }}>
                    <img src={p.image} alt={p.title} />
                    <div className="vfx-card__darken" />
                    {p.tag && <span className="vfx-card__tag btn-primary" style={{ padding: '4px 12px', position: 'absolute', top: 16, right: 16, fontSize: 10 }}>{p.tag}</span>}
                  </div>
                  <div className="vfx-card__info">
                    <p className="text-label-sm" style={{ color: 'var(--primary)', marginBottom: 8 }}>{p.category}</p>
                    <h3 style={{ fontSize: 20, fontWeight: 700, fontFamily: 'var(--font-display)' }}>{p.title}</h3>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      <ProjectModal isOpen={!!modalProject} onClose={() => setModalProject(null)} project={modalProject} />
    </PageTransition>
  )
}
