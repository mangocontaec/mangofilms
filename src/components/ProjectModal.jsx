import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play } from 'lucide-react'

export default function ProjectModal({ isOpen, onClose, project }) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="project-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(24px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: 1100,
              background: 'var(--surface-container-low)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '90vh',
            }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: 24,
                right: 24,
                zIndex: 10,
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => e.target.style.background = 'var(--primary-container)'}
              onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
            >
              <X size={20} />
            </button>

            {/* Video Area */}
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              background: '#000',
              position: 'relative',
              overflow: 'hidden',
              flexShrink: 0,
            }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top right, rgba(255,85,70,0.1), transparent)',
              }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    border: '2px solid var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    filter: 'drop-shadow(0 0 15px rgba(255,85,70,0.3))',
                  }}
                >
                  <Play size={32} color="#fff" fill="#fff" style={{ marginLeft: 4 }} />
                </motion.div>
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: '32px 40px', overflowY: 'auto' }}>
              {project.category && (
                <p className="text-label-sm" style={{ color: 'var(--primary)', marginBottom: 12 }}>
                  {project.category}
                </p>
              )}
              <h2 className="text-headline-lg" style={{ marginBottom: 16 }}>{project.title}</h2>
              {project.description && (
                <p style={{ color: 'var(--secondary)', opacity: 0.7, maxWidth: 700, lineHeight: 1.8 }}>
                  {project.description}
                </p>
              )}
              <div style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
                <button className="btn-primary">Project Inquiry</button>
                <button className="btn-glass">Share</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
