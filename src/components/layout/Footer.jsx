import { Instagram, MessageCircle, Mail, Youtube } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const socialIconStyle = {
    padding: '8px',
    color: 'var(--color-text-secondary)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.2s',
  };

  return (
    <footer
      style={{
        padding: '56px 24px',
        background: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          className="footer-top"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {/* Left */}
          <div
            className="footer-brand"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <span
              style={{
                fontSize: '1.05rem',
                fontWeight: 900,
                color: 'var(--color-text)',
              }}
            >
              JOE
            </span>
            <p
              style={{
                margin: 0,
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
              }}
            >
              © {new Date().getFullYear()} Joe. All rights reserved.
            </p>
          </div>

          {/* Social */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {[
              { icon: Instagram, href: 'https://www.instagram.com/joee_joeyy?igsh=M2E0YXZ4dDVzY3Bv', label: 'Instagram' },
              { icon: MessageCircle, href: 'https://wa.me/201027909082', label: 'WhatsApp' },
              { icon: Youtube, href: 'https://youtube.com/@joeejoeyy?si=D8rxRXdY0U4r8GY2', label: 'YouTube' },
              { icon: Mail, href: 'mailto:coach@example.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={socialIconStyle}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: '32px',
            paddingTop: '24px',
            textAlign: 'center',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <p
            style={{
              fontSize: '12px',
              margin: 0,
              color: 'var(--color-text-muted)',
            }}
          >
            {t.footer.rights}
          </p>
        </div>
        </div>
    </footer>
  );
}
