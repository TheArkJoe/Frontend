import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

export default function TrackRecord() {
  const { t } = useLanguage();

  return (
    <section
      id="achievements"
      style={{
        padding: '96px 24px',
        background: 'var(--color-bg-secondary)',
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <SectionTitle label={t.trackRecord.label} title={t.trackRecord.title} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px 48px',
          }}
        >
          {t.trackRecord.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              style={{
                padding: '12px 16px',
                borderLeft: '2px solid var(--color-primary)',
              }}
            >
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: 1.5,
                  color: 'var(--color-text)',
                }}
              >
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
