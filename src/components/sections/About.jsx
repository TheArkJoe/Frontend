import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';
import fromLockDown from '../../assets/fromLockDown.jpeg';

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      style={{
        padding: '96px 24px'
      }}
    >
      <div
        className="about-wrap"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '56px',
        }}
      >
        {/* Image Column */}
        <motion.div
          className="about-photo"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{
            width: '100%',
            maxWidth: '460px',
            flex: '0 0 auto',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          }}
        >
          <img
            src={fromLockDown}
            alt="Founder portrait"
            style={{
              width: '100%',
              display: 'block',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </motion.div>

        {/* Text Content Column */}
        <div className="about-content" style={{ flex: 1, width: '100%', minWidth: 0 }}>
          <SectionTitle
            label={t.about.label}
            title={t.about.title}
            center={false}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              marginTop: '24px',
            }}
          >
            {[t.about.p1, t.about.p2, t.about.p3].map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: '15px',
                  lineHeight: 1.9,
                  color: 'var(--color-text-secondary)',
                  margin: 0,
                  textAlign: 'left',
                }}
              >
                {p}
              </p>
            ))}
          </motion.div>

          {/* Stats row */}
          {t.about.stats && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                marginTop: '48px',
              }}
            >
              {t.about.stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    textAlign: 'center',
                    padding: '24px 16px',
                    borderRadius: '12px',
                    background: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
                      fontWeight: 800,
                      marginBottom: '4px',
                      color: 'var(--color-primary)',
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ marginTop: '48px', textAlign: 'left' }}
          >
            <a href="#programs" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '12px 28px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--color-primary)',
                  fontFamily: 'inherit',
                }}
              >
                {t.about.cta}
                <ArrowRight size={15} />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (min-width: 900px) {
          #about .about-wrap {
            flex-direction: row;
            align-items: center;
          }

          #about .about-photo {
            max-width: 420px;
          }
        }
      `}</style>
    </section>
  );
}
