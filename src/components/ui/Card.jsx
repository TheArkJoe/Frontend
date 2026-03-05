import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hover = true,
  glow = false,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={hover ? { y: -6, scale: 1.01 } : {}}
      transition={{ duration: 0.4 }}
      className={`rounded-2xl p-6 md:p-8 transition-all duration-300 ${className}`}
      style={{
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        boxShadow: glow ? 'var(--shadow-glow)' : 'var(--shadow-soft)',
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
