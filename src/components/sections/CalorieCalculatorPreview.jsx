import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function CalorieCalculatorPreview() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            background: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
            }}
          >
            {/* Left - Content */}
            <div
              style={{
                padding: '56px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                  display: 'block',
                  color: 'var(--color-primary)',
                }}
              >
                {t.calcPreview.label}
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 700,
                  marginBottom: '16px',
                  lineHeight: 1.2,
                  color: 'var(--color-text)',
                }}
              >
                {t.calcPreview.title}
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  marginBottom: '28px',
                  lineHeight: 1.7,
                  color: 'var(--color-text-secondary)',
                }}
              >
                {t.calcPreview.subtitle}
              </p>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginBottom: '28px',
                }}
              >
                {t.calcPreview.features.map((feature, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      style={{ flexShrink: 0, color: 'var(--color-primary)' }}
                    />
                    <span
                      style={{
                        fontSize: '14px',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link to="/calculator" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    background: 'var(--color-primary)',
                    fontFamily: 'inherit',
                  }}
                >
                  <Calculator size={17} />
                  {t.calcPreview.cta}
                  <ArrowRight size={16} />
                </motion.button>
              </Link>
            </div>

            {/* Right - Visual */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                background: 'var(--color-bg-tertiary)',
              }}
            >
              <div style={{ width: '100%', maxWidth: '320px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Gender', 'Age', 'Height', 'Weight', 'Goal'].map((label, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderRadius: '10px',
                      padding: '12px 16px',
                      background: 'var(--color-card)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
                      {label}
                    </span>
                    <div
                      style={{
                        height: '8px',
                        borderRadius: '4px',
                        width: `${50 + i * 12}px`,
                        background: 'var(--color-border)',
                      }}
                    />
                  </div>
                ))}
                <div
                  style={{
                    borderRadius: '10px',
                    padding: '12px',
                    textAlign: 'center',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#fff',
                    background: 'var(--color-primary)',
                  }}
                >
                  Calculate →
                </div>
              </div>

              {/* Floating result */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  background: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    color: 'var(--color-primary)',
                  }}
                >
                  2,450
                </div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>
                  kcal/day
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
