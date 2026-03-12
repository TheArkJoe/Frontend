import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

import mainPage from '../../assets/MainPage.jpeg';

export default function Hero() {
  const { t } = useLanguage();
  const badges = [t.hero.badge1, t.hero.badge2, t.hero.badge3, t.hero.badge4];

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${mainPage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '140px 24px 100px',
        }}
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '24px',
            textShadow: '0 2px 40px rgba(0,0,0,0.3)',
          }}
        >
          {t.hero.title}{' '}
          <span className="text-gradient">{t.hero.titleHighlight}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontSize: '1.05rem',
            maxWidth: '520px',
            margin: '0 auto 32px',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.78)',
          }}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Credential badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px 14px',
            marginBottom: '40px',
          }}
        >
          {badges.map((badge, i) => (
            <span
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {badge}
              </span>
              {i < badges.length - 1 && (
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px' }}>
                  •
                </span>
              )}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <a href="#newsletter" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '14px 32px',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 600,
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--color-primary)',
                boxShadow: '0 4px 24px rgba(26, 188, 156, 0.35)',
                fontFamily: 'inherit',
              }}
            >
              {t.hero.cta}
              <ArrowRight size={16} />
            </motion.button>
          </a>
          <Link to="/calculator" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '14px 32px',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 500,
                color: '#fff',
                cursor: 'pointer',
                background: 'rgba(255,255,255,0.1)',
                border: '1.5px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(10px)',
                fontFamily: 'inherit',
              }}
            >
              {t.hero.ctaSecondary}
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom fade to page bg */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '180px',
          pointerEvents: 'none',
          background: 'linear-gradient(to top, var(--color-bg), transparent)',
        }}
      />
    </section>
  );
}
