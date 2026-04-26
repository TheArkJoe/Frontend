import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';
import { createLeadSubmission } from '../../services/leads/createLeadSubmission';

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitState, setSubmitState] = useState({ type: 'idle', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = email.trim();

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!isValid) {
      setSubmitState({ type: 'error', message: t.newsletter.messages.invalidEmail });
      return;
    }

    setSubmitState({ type: 'loading', message: '' });

    try {
      await createLeadSubmission({
        email: trimmed,
      });

      setEmail('');
      setSubmitState({
        type: 'success',
        message: t.newsletter.messages.newsletterSuccess,
      });
    } catch (error) {
      const errorCode = error?.code || error?.message || 'UNKNOWN';
      console.error('Lead submission error', {
        code: errorCode,
        message: error?.message,
        details: error?.details,
        raw: error,
      });

      if (errorCode === 'SUPABASE_NOT_CONFIGURED') {
        setSubmitState({
          type: 'error',
          message: t.newsletter.messages.integrationMissing,
        });
        return;
      }

      if (errorCode === 'SUPABASE_INSERT_FAILED') {
        setSubmitState({
          type: 'error',
          message: t.newsletter.messages.databaseError,
        });
        return;
      }

      const debugSuffix = import.meta.env.DEV ? ` [${errorCode}]` : '';
      setSubmitState({
        type: 'error',
        message: `${t.newsletter.messages.genericError}${debugSuffix}`,
      });
    }
  };

  return (
    <section
      id="newsletter"
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
          className="newsletter-form"
          onSubmit={handleSubmit}
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
              opacity: submitState.type === 'loading' ? 0.85 : 1,
            }}
            disabled={submitState.type === 'loading'}
          >
            {t.newsletter.ctaNewsletter}
            <Send size={14} />
          </motion.button>
        </form>

        {submitState.type !== 'idle' && (
          <p
            style={{
              margin: '0 auto 10px',
              maxWidth: '420px',
              fontSize: '12px',
              color:
                submitState.type === 'success'
                  ? 'var(--color-primary)'
                  : 'var(--color-text-secondary)',
            }}
          >
            {submitState.message}
          </p>
        )}

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
