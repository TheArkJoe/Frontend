import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      style={{
        padding: '96px 24px',
      }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <SectionTitle label={t.faq.label} title={t.faq.title} center />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              style={{
                borderRadius: '12px',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                background: 'var(--color-card)',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '18px 22px',
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                  color: 'var(--color-text)',
                  fontSize: '15px',
                  fontWeight: 600,
                }}
              >
                {item.q}
                <ChevronDown
                  size={18}
                  style={{
                    flexShrink: 0,
                    color: 'var(--color-text-muted)',
                    transition: 'transform 0.2s ease',
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      style={{
                        padding: '0 22px 20px',
                        fontSize: '14px',
                        lineHeight: 1.75,
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
