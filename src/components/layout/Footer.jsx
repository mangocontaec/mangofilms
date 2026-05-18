import { Link } from 'react-router-dom'
import './Footer.css'

const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd2JbHjLfvWirwvu15r0sS6cmHBZIr7wgoLcciM1hDgtq0ZBVil_QDqoHVOMS2LPv4JR-lVHZqgFJrYYkCOdWZtWEdgfgFnuj-7HzZkxHHWK-A3G1eBHKIg9ZtJAN3U-wm62LkJQdd1rc-x62H-IGimiUEsCcTqsznNrJ0h5524aQ3wmdhnLmBWmRyETxAx-gqaxkG1R5euMXa6LhDNCK-5VqUsV1AnM4_LdVeXA_GjXtZJzdZkJs2EYHHbnDx0HqUBSqRgJSjl88'

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Vimeo', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'WhatsApp', href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={LOGO_URL} alt="Mango Films" className="footer__logo" />
          <p className="footer__copy">© 2024 Mango Films. Cinematic Excellence.</p>
        </div>

        <div className="footer__socials">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="footer__social-link text-label-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer__location">
          <p className="text-label-xs" style={{ color: 'rgba(200,198,197,0.4)', marginBottom: 8 }}>Main Office</p>
          <p style={{ color: '#fff' }}>Montreal, Canada</p>
        </div>
      </div>
    </footer>
  )
}
