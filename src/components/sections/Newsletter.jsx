import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  return (
    <section
      style={{
        padding: '96px 24px',
        background: 'var(--color-bg-secondary)',
      }}
    >
      <div style={{ maxWidth: '550px', margin: '0 auto', textAlign: 'center' }}>
        <SectionTitle
          label={t.newsletter.label}
          title={t.newsletter.title}
          subtitle={t.newsletter.subtitle}
          center
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          style={{
            display: 'flex',
            gap: '10px',
            maxWidth: '420px',
            margin: '32px auto 16px',
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.newsletter.placeholder}
            style={{
              flex: 1,
              padding: '12px 16px',
              borderRadius: '10px',
              fontSize: '14px',
              border: '1.5px solid var(--color-border)',
              background: 'var(--color-card)',
              color: 'var(--color-text)',
              outline: 'none',
              fontFamily: 'inherit',
            }}
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '12px 22px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              background: 'var(--color-primary)',
              fontFamily: 'inherit',
              whiteSpace: 'nowrap',
            }}
          >
            {t.newsletter.cta}
            <Send size={14} />
          </motion.button>
        </form>
        <p
          style={{
            fontSize: '12px',
            color: 'var(--color-text-muted)',
          }}
        >
          {t.newsletter.disclaimer}
        </p>
      </div>
    </section>
  );
}
