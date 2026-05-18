import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd2JbHjLfvWirwvu15r0sS6cmHBZIr7wgoLcciM1hDgtq0ZBVil_QDqoHVOMS2LPv4JR-lVHZqgFJrYYkCOdWZtWEdgfgFnuj-7HzZkxHHWK-A3G1eBHKIg9ZtJAN3U-wm62LkJQdd1rc-x62H-IGimiUEsCcTqsznNrJ0h5524aQ3wmdhnLmBWmRyETxAx-gqaxkG1R5euMXa6LhDNCK-5VqUsV1AnM4_LdVeXA_GjXtZJzdZkJs2EYHHbnDx0HqUBSqRgJSjl88'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/video', label: 'Video' },
  { path: '/3d-motion', label: '3D/Motion' },
  { path: '/vfx', label: 'VFX' },
  { path: '/photography', label: 'Photography' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo">
            <img src={LOGO_URL} alt="Mango Films Logo" />
          </Link>

          <div className="navbar__links">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar__link text-label-sm ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link to="/contact" className="navbar__cta btn-primary" style={{ padding: '10px 24px' }}>
            Let's Talk
          </Link>

          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="mobile-menu__links">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={link.path}
                    className={`mobile-menu__link text-headline-lg ${location.pathname === link.path ? 'mobile-menu__link--active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
