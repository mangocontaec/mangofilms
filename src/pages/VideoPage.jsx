import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import ProjectModal from '../components/ProjectModal'
import './VideoPage.css'

const videos = [
  { id: 1, title: 'The Abyss', category: 'Narrative Short', span: '8', aspect: '16/9', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-GdftCzIPyXe-FOJVvm-B6w_KIQR2lonBLyz5Kg_lSn8pIvV4oxjTFAmq4299i1-TIVUtLrXjJk9HRf5M8dHNdAjtMgeDQaunPghCzYF-QXI8rTZyZzYFmvulJY-SYRdHiLAPIJMg0fhbvhK8P2wbH7Xgv6Wr0sHDbhARlYUC-IZNeU9j85h1wCa1FcYkEiAHTYHDcjC5p7btnLx-oUXqxRjhyyDRyGUH4RH2-2bmhDhx9Y32mXzrD4fjMOVrjFcyjUw9m6M5Xfw', description: 'A deep sea narrative exploring the silence of the unknown.' },
  { id: 2, title: 'Neon Pulse', category: 'Commercial', span: '4', aspect: '1/1', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzaPdtaOa8R4x5WNjZLwsTzBE_vplIc9MTl3gIFpjcDTVKO6YBSGl3t_23ZvpCD_78wyfgncvunW_tRle5a3-ibRELFqm5-GXoZCSoSVzBcSQVPWl-iP6xuz6bX4_WqbnIfHpEXAH_vKnTfyldwEDkgq5y9_5vcArVC8zrp7d2omdIZEe8g9xOJ6RwLmiBVsa9JpA0Fn21YyXleNXmFTvxzHsnAigDDOMJk2bNLa1vDQfW_EdiY_-XccQozVvDdUkV9aLZ67lBKgk', description: 'Commercial work for urban streetwear.' },
  { id: 3, title: 'Silver Lining', category: 'Architectural', span: '4', aspect: '1/1', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCss2JUiPPHT5QDbDkWyuGf9z3r5sxUJ9WyylqH501UaN8xDxruN01JQcUZvh3ZLvVvJ-pvugBa_IS4jpDXMZxP9aj3V3205E0Fk4fQ5SL15uGUO3lcyD9Grugf8aX22AQ2EeJGI0L0r8FXYU_KdG6Qgdioxu0qpi2FtBvax-wXtvSNfsaBPBNPrBCKBXIyT7kU__c7BXLRE8C3a4-9Kwnvpj3IKcdit2Xr6JkyoSAFMYNKBArRrNQow8g4SPMtAE5Np5wCZxGb8ME', description: 'A minimalist study on light and architecture.' },
  { id: 4, title: 'Ignition', category: 'Automotive', span: '8', aspect: '16/9', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6zLONm9G7OjEYr5vJBMHA0f8aBi2-9F49fiAm5iGoNQW1GtXJzu-fL-DugkYtq7vBmh_ied3_S-Xo-Y6y6bFoiB4vaMhuSq1AwLrQ5IYEquV27ko8FgxEekajnOccp8Eqp0SWlO44D8kfwEWeKrO1_U2kTIHdYrJ69U87wXSdJI9rrFGl7SpdVRzGu5ieuhC1Ke_KCN6DSN_kBP-chVvcZ3UZhN5igZVCwwyS88CmK5FEKBQFqFOxp9WG5RbaLMRvfsG8nkJ5LGo', description: 'Automotive showcase of speed and precision.' },
  { id: 5, title: 'Fragments', category: 'Experimental', span: '4', aspect: '16/9', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfb9Sit3AJfkdnt3n92WnFgU2c5GmPIXtMSALpgyFCQZLO-iOpyHpiarZnZcWkqcfADKDHg2_uUqpll3iwlwqFahbAWvgC2pStgOQKRaJBwcjIF6gt-NODVrPt0wa8BODBnI738J4Po61exf5VwT4kMmwbTVBP2lo58zWFafQEEUNnVUkYqWdbMjC1kQVK_eaQmj27av0QJUQmPab_uJEgu1FiSLENOIPM1dh7DZe3T7mtq405j0RV79aUAhO8BHGHCrN5lU15g0M', description: 'Experimental motion design using light particles.' },
  { id: 6, title: 'The Last Stand', category: 'Documentary', span: '4', aspect: '16/9', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3oqU-ioE7dgMwqdkyhDsndNO-PtBI_JjKjK4tGMD3fdJb4Qbdrib4_RlMXZM3-q6yBjKcNr3NIIIF8ieCwWJ9_fV0jPZ_qcN4aRjFwQ3iSXksYUu6peqe8qJMatyzyGwII09CfSLM44xOEkZTKW-w5uzTe9xQKoRR9wRpfjho5h8_D49rxmz4qyjqMlJzZS0LKOUB8NxP0Uix5DxHvxKu0PyVUxXyExu6ESlRFqaQXuvufH0pJsWWTNKI_tVnmXWGXIkPN-16jew', description: 'A gripping documentary about nature\'s resilience.' },
  { id: 7, title: 'Beyond Horizon', category: 'Music Video', span: '4', aspect: '16/9', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvdpib2a7n1Qw1FhX3Jgv0eViylxO1blLy3W47ZwH9BSNbFtpExl1rzXCh3A54HMH24wNupsTRLpbkAsgbI-61tQSspMlm2ykVQpA7Bz5A1O27Jfw04sFlXkrbEzvJstfMscvkSuNY_XsT891lElQK6ATO_OnbsARwPBKOmRxGG0_JmEoDEBjRVz3izwzJptlbISgDw17SftbMKY4nBCyolTInfingINpb2qqgCA80F_eOyF2w9eWKyNeXzvZyL3E97WmPBw9G3f4', description: 'Space-themed music video visualizer.' },
]

export default function VideoPage() {
  const [modalProject, setModalProject] = useState(null)

  return (
    <PageTransition>
      <main className="video-page">
        {/* Hero */}
        <section className="video-hero container-main">
          <ScrollReveal>
            <div className="video-hero__badge glass">Cinematic Portfolio</div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-headline-lg" style={{ maxWidth: 700, marginBottom: 32 }}>
              Crafting visual stories that <span style={{ color: 'var(--primary-container)' }}>ignite the senses</span> and redefine standards.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p style={{ color: 'var(--secondary)', opacity: 0.8, maxWidth: 560 }}>
              Explore our curated collection of narrative shorts, commercial masterpieces, and experimental visual journeys.
            </p>
          </ScrollReveal>
        </section>

        {/* Bento Grid */}
        <section className="video-grid container-main">
          <div className="video-grid__inner">
            {videos.map((v, i) => (
              <ScrollReveal
                key={v.id}
                delay={i * 0.08}
                className={`video-grid__item video-grid__item--span-${v.span}`}
              >
                <motion.div
                  className="video-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setModalProject(v)}
                  style={{ aspectRatio: v.aspect }}
                >
                  <img src={v.image} alt={v.title} />
                  <div className="video-card__overlay">
                    <span className="text-label-sm" style={{ color: 'var(--primary)' }}>{v.category}</span>
                    <h3 className="text-headline-mobile">{v.title}</h3>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      <ProjectModal
        isOpen={!!modalProject}
        onClose={() => setModalProject(null)}
        project={modalProject}
      />
    </PageTransition>
  )
}
