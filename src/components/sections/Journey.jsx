import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';
import mainPage from '../../assets/MainPage.jpeg';
import aucMag from '../../assets/aucmag.jpg.jpeg';
import chairOfAthletics from '../../assets/ChairofAthletics.jpeg';
import mvp24 from '../../assets/mvp24.JPG.jpeg';
import gold2025 from '../../assets/gold2025.jpeg';
import gold24 from '../../assets/gold24.jpg.jpeg';
import gold23 from '../../assets/gold23.jpg.jpeg';
import fromLockDown from '../../assets/fromLockDown.jpeg';

export default function Journey() {
  const { t } = useLanguage();

  const journeyItems = [
    {
      src: gold23,
      alt: 'Gold medal in the 100m dash sprint, 2023.',
      caption: t.journey.items[0].caption,
    },
    {
      src: gold24,
      alt: 'Gold medal in the 100m dash sprint, 2024.',
      caption: t.journey.items[1].caption,
    },
    {
      src: mvp24,
      alt: 'Recognition as the MVP of CrossFit and Track & Field, 2024.',
      caption: t.journey.items[2].caption,
    },
    {
      src: chairOfAthletics,
      alt: 'Recognised as the Chair of the Athletic Committee, AUC 2025.',
      caption: t.journey.items[3].caption,
    },
    {
      src: aucMag,
      alt: 'Featured on the AUC Magazine as the founder of the Calisthenics Team, 2025.',
      caption: t.journey.items[4].caption,
    },
    {
      src: gold2025,
      alt: 'Won gold at a deadlift competition with 225 kg, 2025.',
      caption: t.journey.items[5].caption,
    },
  ];

  return (
    <section id="journey" style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <SectionTitle
          label={t.journey.label}
          title={t.journey.title}
          subtitle={t.journey.subtitle}
        />

        {/* Combined Photo and Text Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginTop: '56px',
          }}
        >
          {journeyItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
                border: '1px solid var(--color-border)',
                background: 'var(--color-card-bg)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.07)',
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.6), transparent 50%)',
                  pointerEvents: 'none',
                }}
              />
              <p
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '20px',
                  right: '20px',
                  margin: 0,
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: 500,
                  textShadow: '0 1px 5px rgba(0,0,0,0.4)',
                }}
              >
                {item.caption}
              </p>
            </motion.div>
          ))}
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
