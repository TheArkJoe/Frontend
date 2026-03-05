import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

export default function Programs() {
  const { t } = useLanguage();

  return (
    <section
      id="programs"
      style={{
        padding: '96px 24px',
        background: 'var(--color-bg-secondary)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle label={t.programs.label} title={t.programs.title} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {t.programs.tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              style={{
                position: 'relative',
                borderRadius: '16px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--color-card)',
                border: tier.popular
                  ? '2px solid var(--color-primary)'
                  : '1px solid var(--color-border)',
                boxShadow: tier.popular ? 'var(--shadow-glow)' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              {tier.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#fff',
                    background: 'var(--color-primary)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Star size={10} fill="white" />
                  {t.programs.mostPopular}
                </div>
              )}

              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  color: 'var(--color-primary)',
                }}
              >
                {tier.badge}
              </span>

              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '8px',
                  color: 'var(--color-text)',
                }}
              >
                {tier.name}
              </h3>

              <p
                style={{
                  fontSize: '14px',
                  marginBottom: '24px',
                  lineHeight: 1.6,
                  color: 'var(--color-text-secondary)',
                }}
              >
                {tier.description}
              </p>

              <ul
                style={{
                  flex: 1,
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginBottom: '28px',
                }}
              >
                {tier.features.map((feature, fi) => (
                  <li
                    key={fi}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                    }}
                  >
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      style={{
                        marginTop: '2px',
                        flexShrink: 0,
                        color: 'var(--color-primary)',
                      }}
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

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  border: tier.popular ? 'none' : '1.5px solid var(--color-border)',
                  background: tier.popular ? 'var(--color-primary)' : 'transparent',
                  color: tier.popular ? '#fff' : 'var(--color-text)',
                  transition: 'all 0.2s ease',
                }}
              >
                {tier.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
