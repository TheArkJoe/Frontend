import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

const NEWSLETTER_STORAGE_KEY = 'joe_newsletter_signups_v1';

function saveNewsletterSignup(email) {
  const trimmed = String(email || '').trim();
  if (!trimmed) return { ok: false, reason: 'empty' };

  const existing = (() => {
    try {
      const raw = localStorage.getItem(NEWSLETTER_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  })();

  const next = [
    {
      email: trimmed,
      createdAt: new Date().toISOString(),
    },
    ...existing,
  ].slice(0, 1000);

  try {
    localStorage.setItem(NEWSLETTER_STORAGE_KEY, JSON.stringify(next));
  } catch {
    return { ok: false, reason: 'storage_failed' };
  }

  return { ok: true, count: next.length };
}

function downloadSignup(email) {
  try {
    const content = `Newsletter signup\nEmail: ${email}\nTime: ${new Date().toISOString()}\n`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter-signup-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  } catch {
    // ignore
  }
}

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitState, setSubmitState] = useState({ type: 'idle', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = email.trim();

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!isValid) {
      setSubmitState({ type: 'error', message: 'Please enter a valid email.' });
      return;
    }

    const res = saveNewsletterSignup(trimmed);
    if (!res.ok) {
      setSubmitState({ type: 'error', message: 'Could not save locally. Try again.' });
      return;
    }

    console.log('[Newsletter signup]', { email: trimmed, total: res.count });

    // “Creative local send”: save + download a tiny receipt file.
    downloadSignup(trimmed);

    setEmail('');
    setSubmitState({
      type: 'success',
      message: `Saved locally (${res.count} total). Downloaded a receipt.`,
    });
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
            }}
          >
            {t.newsletter.cta}
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
