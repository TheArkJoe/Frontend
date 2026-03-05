import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer select-none';

  const sizes = {
    sm: 'px-5 py-2.5 text-sm rounded-lg',
    md: 'px-7 py-3 text-sm rounded-lg',
    lg: 'px-8 py-3.5 text-base rounded-lg',
  };

  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: '#ffffff',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-text)',
      border: '1.5px solid var(--color-border)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
    },
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${sizes[size]} ${className}`}
      style={variants[variant]}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}
