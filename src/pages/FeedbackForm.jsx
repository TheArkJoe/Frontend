import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FeedbackForm() {
  const { t } = useLanguage();
  const f = t.feedback;

  const [form, setForm] = useState({
    name: '',
    email: '',
    rating: 0,
    category: 'coaching',
    goal: '',
    bestPart: '',
    improve: '',
    recommend: '',
    contactBack: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.rating) return;
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '13px 16px',
    borderRadius: '10px',
    fontSize: '14px',
    border: '1.5px solid var(--color-border)',
    background: 'var(--color-bg-tertiary)',
    color: 'var(--color-text)',
    outline: 'none',
    fontFamily: 'inherit',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '8px',
    color: 'var(--color-text-muted)',
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ padding: '120px 24px 96px' }} id="feedback">
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                marginBottom: '40px',
              }}
            >
              <ArrowLeft size={14} />
              {f.backHome}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '26px' }}
          >
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
              }}
            >
              {f.label}
            </span>
            <h1
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                fontWeight: 700,
                color: 'var(--color-text)',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              {f.title}
            </h1>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{f.subtitle}</p>
          </motion.div>

          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              style={{
                borderRadius: '16px',
                padding: '32px',
                background: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                display: 'grid',
                gap: '18px',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                <div>
                  <label style={labelStyle}>{f.name}</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder={f.namePlaceholder}
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>{f.email}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder={f.emailPlaceholder}
                    style={inputStyle}
                    required
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>{f.rating}</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[1, 2, 3, 4, 5].map((star) => {
                    const active = star <= form.rating;
                    return (
                      <button
                        key={star}
                        type="button"
                        onClick={() => update('rating', star)}
                        style={{
                          border: 'none',
                          background: 'transparent',
                          cursor: 'pointer',
                          padding: 0,
                          color: active ? '#f59e0b' : 'var(--color-border)',
                        }}
                      >
                        <Star fill={active ? '#f59e0b' : 'none'} size={22} />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label style={labelStyle}>{f.category}</label>
                <select
                  value={form.category}
                  onChange={(e) => update('category', e.target.value)}
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                >
                  {f.categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={labelStyle}>{f.goal}</label>
                <input
                  type="text"
                  value={form.goal}
                  onChange={(e) => update('goal', e.target.value)}
                  placeholder={f.goalPlaceholder}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>{f.bestPart}</label>
                <textarea
                  value={form.bestPart}
                  onChange={(e) => update('bestPart', e.target.value)}
                  placeholder={f.bestPartPlaceholder}
                  style={{ ...inputStyle, minHeight: '110px', resize: 'vertical' }}
                  required
                />
              </div>

              <div>
                <label style={labelStyle}>{f.improve}</label>
                <textarea
                  value={form.improve}
                  onChange={(e) => update('improve', e.target.value)}
                  placeholder={f.improvePlaceholder}
                  style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
                />
              </div>

              <div>
                <label style={labelStyle}>{f.recommend}</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {f.recommendOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => update('recommend', option.value)}
                      style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: '10px',
                        border: form.recommend === option.value ? 'none' : '1.5px solid var(--color-border)',
                        background: form.recommend === option.value ? 'var(--color-primary)' : 'var(--color-bg-tertiary)',
                        color: form.recommend === option.value ? '#fff' : 'var(--color-text)',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        fontWeight: 600,
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'var(--color-text-secondary)',
                  fontSize: '14px',
                }}
              >
                <input
                  type="checkbox"
                  checked={form.contactBack}
                  onChange={(e) => update('contactBack', e.target.checked)}
                />
                {f.contactBack}
              </label>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                style={{
                  marginTop: '8px',
                  width: '100%',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '10px',
                  padding: '15px',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#fff',
                  background: 'var(--color-primary)',
                  fontFamily: 'inherit',
                }}
              >
                {f.submit}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                borderRadius: '16px',
                padding: '30px',
                background: 'var(--color-card)',
                border: '1px solid var(--color-border)',
              }}
            >
              <h2 style={{ marginBottom: '8px', color: 'var(--color-text)' }}>{f.successTitle}</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{f.successMessage}</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
