import { motion } from 'framer-motion';

export default function SectionTitle({
  label,
  title,
  subtitle,
  center = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      style={{
        textAlign: 'center',
        marginBottom: '48px',
      }}
    >
      {label && (
        <span
          style={{
            display: 'block',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '14px',
            color: 'var(--color-primary)',
          }}
        >
          {label}
        </span>
      )}
      <h2
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 700,
          lineHeight: 1.15,
          marginBottom: subtitle ? '14px' : '0',
          color: 'var(--color-text)',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            maxWidth: '480px',
            margin: '0 auto',
            fontSize: '15px',
            lineHeight: 1.7,
            color: 'var(--color-text-secondary)',
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
