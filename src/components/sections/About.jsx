import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      style={{
        padding: '96px 24px',
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <SectionTitle label={t.about.label} title={t.about.title} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          {[t.about.p1, t.about.p2, t.about.p3].map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: '15px',
                lineHeight: 1.9,
                color: 'var(--color-text-secondary)',
                margin: 0,
                textAlign: 'center',
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
            transition={{ duration: 0.5, delay: 0.1 }}
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
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginTop: '40px', textAlign: 'center' }}
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
    </section>
  );
}
