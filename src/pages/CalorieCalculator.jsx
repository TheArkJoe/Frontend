import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Flame, Beef, Wheat, Droplets } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CalorieCalculator() {
  const { t } = useLanguage();
  const c = t.calculator;

  const [form, setForm] = useState({
    gender: 'male',
    age: '',
    height: '',
    weight: '',
    activity: 0,
    goal: 0,
    training: 0,
  });

  const [results, setResults] = useState(null);

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const calculate = (e) => {
    e.preventDefault();
    const { gender, age, height, weight, activity, goal } = form;
    const a = parseInt(age);
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!a || !h || !w) return;

    let bmr =
      gender === 'male'
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const activityMultipliers = [1.2, 1.375, 1.55, 1.725, 1.9];
    let tdee = bmr * activityMultipliers[activity];

    if (goal === 0) tdee -= 400;
    if (goal === 2) tdee += 350;

    const calories = Math.round(tdee);
    const protein = Math.round(w * 2.0);
    const fats = Math.round((calories * 0.25) / 9);
    const carbs = Math.round((calories - protein * 4 - fats * 9) / 4);

    setResults({ calories, protein, carbs, fats });
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
    transition: 'border-color 0.2s',
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
    cursor: 'pointer',
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

  const macroData = results
    ? [
        { icon: Flame, label: c.calories, value: results.calories, unit: c.unit.kcal, color: 'var(--color-primary)' },
        { icon: Beef, label: c.protein, value: results.protein, unit: c.unit.g, color: '#ef4444' },
        { icon: Wheat, label: c.carbs, value: results.carbs, unit: c.unit.g, color: '#eab308' },
        { icon: Droplets, label: c.fats, value: results.fats, unit: c.unit.g, color: '#06b6d4' },
      ]
    : [];

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* ─── Page Content ─── */}
      <section style={{ padding: '120px 24px 96px' }} id='calculator'>
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
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
                transition: 'color 0.2s',
              }}
            >
              <ArrowLeft size={14} />
              {c.backHome}
            </Link>
          </motion.div>

          {/* Page heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '40px' }}
          >
            <h1
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: 'var(--color-text)',
                marginBottom: '10px',
              }}
            >
              {c.title}
            </h1>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'var(--color-text-secondary)',
                maxWidth: '480px',
              }}
            >
              {c.subtitle}
            </p>
          </motion.div>

          {/* Form card */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={calculate}
            style={{
              borderRadius: '16px',
              padding: '32px',
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
              }}
            >
              {/* Gender — full width */}
              <div style={{ gridColumn: 'span 2' }}>
                <label style={labelStyle}>{c.gender}</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {['male', 'female'].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => update('gender', g)}
                      style={{
                        flex: 1,
                        padding: '13px',
                        borderRadius: '10px',
                        fontSize: '14px',
                        fontWeight: 500,
                        border: form.gender === g ? 'none' : '1.5px solid var(--color-border)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        background:
                          form.gender === g
                            ? 'var(--color-primary)'
                            : 'var(--color-bg-tertiary)',
                        color: form.gender === g ? '#fff' : 'var(--color-text)',
                        fontFamily: 'inherit',
                      }}
                    >
                      {g === 'male' ? c.male : c.female}
                    </button>
                  ))}
                </div>
              </div>

              {/* Age */}
              <div>
                <label style={labelStyle}>{c.age}</label>
                <input
                  type="number"
                  min="10"
                  max="100"
                  value={form.age}
                  onChange={(e) => update('age', e.target.value)}
                  placeholder={c.unit.years}
                  style={inputStyle}
                  required
                />
              </div>

              {/* Height */}
              <div>
                <label style={labelStyle}>{c.height}</label>
                <input
                  type="number"
                  min="100"
                  max="250"
                  value={form.height}
                  onChange={(e) => update('height', e.target.value)}
                  placeholder={c.unit.cm}
                  style={inputStyle}
                  required
                />
              </div>

              {/* Weight */}
              <div>
                <label style={labelStyle}>{c.weight}</label>
                <input
                  type="number"
                  min="30"
                  max="300"
                  value={form.weight}
                  onChange={(e) => update('weight', e.target.value)}
                  placeholder={c.unit.kg}
                  style={inputStyle}
                  required
                />
              </div>

              

              {/* Goal */}
              <div>
                <label style={labelStyle}>{c.goal}</label>
                <select
                  value={form.goal}
                  onChange={(e) => update('goal', parseInt(e.target.value))}
                  style={selectStyle}
                >
                  {c.goalOptions.map((opt, i) => (
                    <option key={i} value={i}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Training Frequency — full width */}
              <div style={{ gridColumn: 'span 2' }}>
                <label style={labelStyle}>{c.trainingFrequency}</label>
                <select
                  value={form.training}
                  onChange={(e) => update('training', parseInt(e.target.value))}
                  style={selectStyle}
                >
                  {c.trainingOptions.map((opt, i) => (
                    <option key={i} value={i}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Calculate Button */}
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              type="submit"
              style={{
                width: '100%',
                marginTop: '28px',
                padding: '16px',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 700,
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                background: 'var(--color-primary)',
                boxShadow: '0 4px 24px rgba(26, 188, 156, 0.25)',
                fontFamily: 'inherit',
              }}
            >
              {c.calculate}
            </motion.button>
          </motion.form>

          {/* ─── Results ─── */}
          {results && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                marginTop: '32px',
                borderRadius: '16px',
                padding: '32px',
                background: 'var(--color-card)',
                border: '2px solid var(--color-primary)',
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  textAlign: 'center',
                  marginBottom: '28px',
                  color: 'var(--color-text)',
                }}
              >
                {c.results}
              </h3>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '12px',
                }}
              >
                {macroData.map(({ icon: Icon, label, value, unit, color }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    style={{
                      textAlign: 'center',
                      padding: '20px 12px',
                      borderRadius: '12px',
                      background: 'var(--color-bg-tertiary)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <Icon
                      size={22}
                      style={{ color, marginBottom: '8px' }}
                    />
                    <div
                      style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        fontWeight: 800,
                        color: 'var(--color-text)',
                        lineHeight: 1.2,
                      }}
                    >
                      {value}
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 500,
                        color: 'var(--color-text-muted)',
                        marginTop: '2px',
                      }}
                    >
                      {unit}
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--color-text-secondary)',
                        marginTop: '4px',
                      }}
                    >
                      {label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
