import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import './PhotographyPage.css'

const photoProjects = [
  { id: 1, title: 'Neon Noir: Tokyo', category: 'Editorial / 2024', tags: ['Architectural', '8 Images'], span: '8', aspect: '16/9', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc9MLyYG15FCyOpmvcQONQtMJQNISxzL4LDOH_Oi3j_c7cKsOChM9vfFh8mJvLyPXJk7ViTdmSA6zlDZn7ONNttkgK86IQmeXPY5nFVQStasB3xSvP68ue9_rydXfpUFXzxp9NznqPDllUhOW_4USA39Imldc8gGKSb6h4t_HA_ouJIzVMRodHCC80vWaksn-1ntYvvZqoDXCmTIU04DLolNKwwtMs4mGqaUVyV-rCbpb_GtQCosgj_W9J6n5DiewH5u1_DimAxGo' },
  { id: 2, title: 'Fluid Dynamics', category: 'Motion / 2023', tags: ['Experimental'], span: '4', aspect: '9/16', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdDFuM2HoQcHMc0GdC0uW_buDIBbvFlqdsk-NHiXn3nV1VZhOHM9mxjfpMK82-x3e-4w3O04uLw8uxm92S8tk__1A8N5xB3ltSHtIR9bI2qT_U-G_7WPqmV2V7va7WLWAO2ARXcU9N6-TwjuWVoZYmmgVt2M-xfjEMil2NsTdDiLmTYBS4vmL1gYqhsFuKXB-6qd1cMf4WU3nOpwNMFW5IgoKm_Xnp3ahoQLNA_tS46kB0qxuPl5CrUO7e1t4UI1s_2iIPsLHBmVg' },
  { id: 3, title: 'Monolith', category: 'Commercial', tags: ['Brutalist'], span: '4', aspect: '1/1', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArK3yiGRmrGr6AS7ya99vMhiGpf3DhgOlk5aUe4WIaxg_xKeT_iCA3tmrTyLpGClcoKHsHZhc-4kJsNqBcaQBRPt1iLkQiSJhMc4W9tQJzUIpK1pcMrvdG01GzESliDnpkmxTN-VZygdx-JOmE2wgRP8mwS64HoHJZdxZYf53ukDeKforyFMy4xMrfRxUFEzdrwxEIiGq-TsnOeLWdmKV5oFoj-TG3qDYayRqzY15a1S36GmmMESe1acvqUixR0aHMB5Ce5erns_E' },
  { id: 4, title: 'Vanguard Threads', category: 'Fashion / 2024', tags: ['Editorial'], span: '8', aspect: '21/9', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcJHWQGzKDm-kOA7mu7S_nFWVLVZUUOekozlAavMPdg-BSDcEtoH0fAx7Kz-RBBcDNHPYsB6DQ4II6sW1Pa17lchEg9EVc5XeHXukrb8rxPVt37x2kT2A0-XQJ31UtO09T_6OMNhgn-YBaVuZTtjArmT9qmpuXdSRh_S1S5h8zQX842K-_MqoYGh6mxlMeYLcptyV6KaNMdwK64SfDyOMjf-PWYUn3DXn1gNWvZw-_lK0SHW0IvqN7Wk__Y87eHz-6AFKqlqTIs0g' },
]

const AVATAR_1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqct7-oiTrG9BM2S2hELoJHC_hFFo9J-I14YNtUgfy4VjROI-PY1fjQ_oNCsMIefkVkDVxWxYcI7XoepXOI5kLdDhtpD36uXnvyL9UoaqA9HZb4be-K8KRidhnkN-O1dPurmHUbx-3hFXD12Zxj8NmThSknF86up8t9IXy63g8eKe4IfEJHcces1tj9faYnomralncDdbix9yXnhIXxqbbnnarEmWrld5dDiScCo934qP4C9jfwRpf4rM45vbh5-nG4Ta3aAyOhac'
const AVATAR_2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuANrAGeBmdE_Y-DZQO-3axYs5s1TYf86lbFY--qkiXKCwnZwHNf6y7gWGwbQztmdOg_duA1g7OU1aCUQu6ODom2eRh1gxdl5DhrJTQL1-uSBt4Ssxr2kaRtV5vBNplYaiEBmmvrbD9sUmsLqrvAvRGeh_t0SDHgeWAi4pp_wTZ2On6MIcXfzmpn8HLRHKBC-ZZ_TQm9gv3me0BvBwg9UMfd7k6R0xUA5W8WT5lefNRNRQ_wL8H6wr7H1ulR7vby9eu4-_yDFTDr5S0'

export default function PhotographyPage() {
  return (
    <PageTransition>
      <main className="photo-page">
        {/* Hero */}
        <header className="photo-hero container-main">
          <div className="photo-hero__top">
            <div className="photo-hero__left">
              <ScrollReveal>
                <span className="photo-badge glass text-label-sm">Portfolio</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-headline-lg" style={{ marginBottom: 24 }}>
                  Cinematic <span style={{ color: 'var(--primary)' }}>Stills</span>.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p style={{ color: 'var(--on-surface-variant)', maxWidth: 480 }}>
                  Capturing the essence of a story in a single frame. From high-fashion editorial to raw architectural brutalism, our photography pushes the boundaries of visual narrative.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.3} className="photo-hero__team">
              <div className="photo-hero__avatars">
                <img src={AVATAR_1} alt="" className="photo-hero__avatar" />
                <img src={AVATAR_2} alt="" className="photo-hero__avatar" style={{ marginLeft: -12 }} />
              </div>
              <span className="text-label-sm" style={{ color: 'var(--secondary)' }}>Awards Winning Team</span>
            </ScrollReveal>
          </div>
        </header>

        {/* Bento Grid */}
        <section className="photo-grid container-main">
          <div className="photo-grid__inner">
            {photoProjects.map((p, i) => (
              <ScrollReveal
                key={p.id}
                delay={i * 0.1}
                className={`photo-grid__item photo-grid__item--span-${p.span}`}
              >
                <motion.div
                  className="photo-card glass"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="photo-card__image" style={{ aspectRatio: p.aspect }}>
                    <img src={p.image} alt={p.title} />
                  </div>
                  <div className="photo-card__overlay">
                    <span className="text-label-sm" style={{ color: 'var(--primary)', marginBottom: 8, display: 'block' }}>{p.category}</span>
                    <h3 className="text-headline-mobile">{p.title}</h3>
                    {p.tags && (
                      <div className="photo-card__tags">
                        {p.tags.map(t => (
                          <span key={t} className="photo-tag text-label-xs">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="photo-cta container-main">
          <ScrollReveal>
            <div className="photo-cta__card glass">
              <div className="photo-cta__radial" />
              <h2 className="text-headline-lg" style={{ marginBottom: 32, position: 'relative', zIndex: 1 }}>Start Your Next Vision.</h2>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                <Link to="/contact" className="btn-primary primary-glow">Book a Shoot</Link>
                <button className="btn-glass">View Rates</button>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </PageTransition>
  )
}
