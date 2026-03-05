import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

export default function Journey() {
  const { t } = useLanguage();

  return (
    <section id="journey" style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <SectionTitle
          label={t.journey.label}
          title={t.journey.title}
          subtitle={t.journey.subtitle}
        />

        {/* Timeline */}
        <div style={{ position: 'relative', marginLeft: '12px' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: '8px',
              bottom: '8px',
              width: '1px',
              background: 'var(--color-border)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {t.journey.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{ position: 'relative', paddingLeft: '32px' }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-3.5px',
                    top: '7px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--color-primary)',
                  }}
                />
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: 'var(--color-text-secondary)',
                    margin: 0,
                  }}
                >
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: 'center',
            marginTop: '72px',
            paddingTop: '48px',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <p
            style={{
              fontSize: '1.125rem',
              marginBottom: '4px',
              color: 'var(--color-text-muted)',
            }}
          >
            {t.journey.tagline}
          </p>
          <p
            style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              marginBottom: '32px',
              color: 'var(--color-text)',
            }}
          >
            {t.journey.taglineBold}
          </p>
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
                background: 'var(--color-primary)',
                fontFamily: 'inherit',
              }}
            >
              {t.journey.cta}
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
