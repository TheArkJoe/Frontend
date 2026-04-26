import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { createProgramApplicationSubmission } from '../services/leads/createProgramApplicationSubmission';

const TOTAL_STEPS = 4;
const LEAVE_WARNING_MESSAGE = 'Are you sure? all data will be lost.';
const APPLICATION_DRAFT_STORAGE_KEY = 'programApplicationDraftV1';

const initialForm = {
  fullName: '',
  age: '',
  gender: '',
  whatsappNumber: '',
  email: '',
  heightCm: '',
  weightKg: '',
  foodAllergies: '',
  supplements: '',
  medicalConcerns: '',
  trainingHistory: '',
  currentExerciseFrequency: '',
  previousInjuries: '',
  primaryGoals: [],
  primaryGoalOther: '',
  specificGoals: '',
  preferredProgram: '',
  preferredProgramOther: '',
  hearAboutUs: '',
  hearAboutUsOther: '',
  acceptedTerms: false,
  additionalNotes: '',
};

const inputStyle = {
  width: '100%',
  padding: '13px 14px',
  borderRadius: '10px',
  fontSize: '14px',
  border: '1.5px solid var(--color-border)',
  background: 'var(--color-bg-tertiary)',
  color: 'var(--color-text)',
  fontFamily: 'inherit',
};

const labelStyle = {
  display: 'block',
  fontSize: '12px',
  fontWeight: 700,
  marginBottom: '8px',
  color: 'var(--color-text)',
};

const sectionTitleStyle = {
  fontSize: 'clamp(1.2rem, 2.6vw, 1.7rem)',
  fontWeight: 700,
  marginBottom: '4px',
};

const requiredAsteriskStyle = {
  color: '#ef4444',
  marginInlineStart: '4px',
};

const requiredFieldsByStep = {
  0: ['fullName', 'age', 'gender', 'whatsappNumber', 'email', 'heightCm', 'weightKg'],
  1: ['currentExerciseFrequency'],
  2: ['preferredProgram'],
  3: ['hearAboutUs', 'acceptedTerms'],
};

const goals = [
  'Muscle Gain',
  'Fat Loss',
  'Strength Improvement',
  'Improved Athletic Performance',
  'Skill Mastery (Calisthenics Movements)',
  'General Fitness & Health',
  'Improve Running Speed (Sprinting)',
];

const programs = ['Sprinting Program', 'Calisthenics Program', 'Not sure, need consultation', 'Other'];
const sources = ['Social Media', 'A friend', 'Word of Mouth', 'Joe', 'Other'];

const toStepIndex = (rawStep) => {
  const parsed = Number(rawStep || '1');
  if (!Number.isFinite(parsed)) return 0;
  return Math.min(TOTAL_STEPS - 1, Math.max(0, Math.floor(parsed) - 1));
};

console.log('[ProgramApplicationForm] Module loaded');

export default function ProgramApplicationForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [form, setForm] = useState(() => {
    try {
      const raw = window.sessionStorage.getItem(APPLICATION_DRAFT_STORAGE_KEY);
      if (!raw) return initialForm;
      const parsed = JSON.parse(raw);
      return { ...initialForm, ...parsed };
    } catch {
      return initialForm;
    }
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const step = useMemo(() => toStepIndex(searchParams.get('step')), [searchParams]);

  useEffect(() => {
    console.log('[ProgramApplicationForm] Mounted', {
      currentPath: window.location.pathname,
      hasSupabaseUrl: Boolean(import.meta.env.VITE_SUPABASE_URL),
      hasSupabasePublishableKey: Boolean(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY),
    });

    const onUnhandledRejection = (event) => {
      console.log('[ProgramApplicationForm] Unhandled rejection', {
        reason: event?.reason,
      });
    };

    const onGlobalError = (event) => {
      console.log('[ProgramApplicationForm] Global error', {
        message: event?.message,
        filename: event?.filename,
        lineno: event?.lineno,
        colno: event?.colno,
        error: event?.error,
      });
    };

    window.addEventListener('unhandledrejection', onUnhandledRejection);
    window.addEventListener('error', onGlobalError);

    return () => {
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
      window.removeEventListener('error', onGlobalError);
    };
  }, []);

  useEffect(() => {
    if (searchParams.get('step')) {
      return;
    }

    try {
      const raw = window.sessionStorage.getItem(APPLICATION_DRAFT_STORAGE_KEY);
      if (!raw) {
        setSearchParams({ step: '1' }, { replace: true });
        return;
      }

      const parsed = JSON.parse(raw);
      const restoredStep = toStepIndex(parsed?.step ? String(parsed.step) : '1');
      setSearchParams({ step: String(restoredStep + 1) }, { replace: true });
    } catch {
      setSearchParams({ step: '1' }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    try {
      window.sessionStorage.setItem(
        APPLICATION_DRAFT_STORAGE_KEY,
        JSON.stringify({
          ...form,
          step: step + 1,
        }),
      );
    } catch {
      // ignore storage write failures
    }
  }, [form, step]);

  const shouldGuard = !submitted;

  useEffect(() => {
    if (!shouldGuard) return undefined;

    const onBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = LEAVE_WARNING_MESSAGE;
    };

    window.addEventListener('beforeunload', onBeforeUnload);
    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, [shouldGuard]);

  useEffect(() => {
    if (!shouldGuard) return undefined;

    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    window.history.pushState({ applyGuard: true }, '', currentUrl);

    const onPopState = () => {
      const confirmed = window.confirm(LEAVE_WARNING_MESSAGE);
      if (!confirmed) {
        window.history.pushState({ applyGuard: true }, '', currentUrl);
      }
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [shouldGuard]);

  const pagesLeft = TOTAL_STEPS - (step + 1);
  const progressPercent = ((step + 1) / TOTAL_STEPS) * 100;

  const update = (key, value) => {
    setErrorMessage('');
    setSubmitMessage('');
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleGoal = (goal) => {
    setErrorMessage('');
    setForm((prev) => {
      const isSelected = prev.primaryGoals.includes(goal);
      return {
        ...prev,
        primaryGoals: isSelected
          ? prev.primaryGoals.filter((item) => item !== goal)
          : [...prev.primaryGoals, goal],
      };
    });
  };

  const stepHasRequiredValues = (stepIndex) => {
    const required = requiredFieldsByStep[stepIndex] || [];

    for (const field of required) {
      if (field === 'acceptedTerms') {
        if (!form.acceptedTerms) return false;
        continue;
      }

      if (!String(form[field] ?? '').trim()) {
        return false;
      }
    }

    if (stepIndex === 2 && form.primaryGoals.length === 0) {
      return false;
    }

    return true;
  };

  const goToStep = (nextStep) => {
    const bounded = Math.min(TOTAL_STEPS - 1, Math.max(0, nextStep));
    setSearchParams({ step: String(bounded + 1) });
  };

  const handleNext = () => {
    if (!stepHasRequiredValues(step)) {
      setErrorMessage('Please complete all required fields before continuing.');
      return;
    }

    goToStep(step + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    goToStep(step - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('[ProgramApplicationForm] Submit started', {
      step,
      requiredFieldsValid: stepHasRequiredValues(step),
      selectedGoalsCount: form.primaryGoals.length,
      email: form.email,
      preferredProgram: form.preferredProgram,
      acceptedTerms: form.acceptedTerms,
    });

    if (!stepHasRequiredValues(step)) {
      console.log('[ProgramApplicationForm] Submit blocked: missing required fields', {
        step,
      });
      setErrorMessage('Please complete all required fields before submitting.');
      return;
    }

    if (form.primaryGoals.length === 0) {
      console.log('[ProgramApplicationForm] Submit blocked: no primary goals selected');
      setErrorMessage('Please choose at least one primary fitness goal.');
      return;
    }

    try {
      setSubmitting(true);
      setErrorMessage('');
      const result = await createProgramApplicationSubmission(form);
      console.log('[ProgramApplicationForm] Submit success', {
        saved: result?.saved,
        rowsReturned: Array.isArray(result?.data) ? result.data.length : 0,
      });
      try {
        window.sessionStorage.removeItem(APPLICATION_DRAFT_STORAGE_KEY);
      } catch {
        // ignore storage remove failures
      }
      setSubmitted(true);
      setSubmitMessage('Application submitted successfully.');
    } catch (error) {
      console.log('[ProgramApplicationForm] Submit failed', {
        message: error?.message,
        code: error?.code,
        details: error?.details,
        name: error?.name,
        stack: error?.stack,
      });
      setErrorMessage('Could not submit now. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const renderRequiredMark = () => <span style={requiredAsteriskStyle}>*</span>;

  const StepHeader = ({ title, subtitle }) => (
    <div style={{ marginBottom: '20px' }}>
      <h2 style={sectionTitleStyle}>{title}</h2>
      {subtitle && (
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>{subtitle}</p>
      )}
    </div>
  );

  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ padding: '120px 24px 120px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
                marginBottom: '24px',
              }}
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              borderRadius: '18px',
              padding: '28px',
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-soft)',
            }}
          >
            <div style={{ marginBottom: '18px' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--color-primary)',
                }}
              >
                Program Application
              </span>
              <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', marginTop: '8px' }}>
                Apply for Coaching
              </h1>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '14px' }}>
                {step === 0 && (
                  <>
                    <StepHeader title="General Information" />

                    <div>
                      <label style={labelStyle}>Full Name {renderRequiredMark()}</label>
                      <input
                        value={form.fullName}
                        onChange={(e) => update('fullName', e.target.value)}
                        style={inputStyle}
                        required
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px' }}>
                      <div>
                        <label style={labelStyle}>Age {renderRequiredMark()}</label>
                        <input
                          type="number"
                          min="10"
                          max="100"
                          value={form.age}
                          onChange={(e) => update('age', e.target.value)}
                          style={inputStyle}
                          required
                        />
                      </div>

                      <div>
                        <label style={labelStyle}>Gender {renderRequiredMark()}</label>
                        <select
                          value={form.gender}
                          onChange={(e) => update('gender', e.target.value)}
                          style={inputStyle}
                          required
                        >
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px' }}>
                      <div>
                        <label style={labelStyle}>WhatsApp Number {renderRequiredMark()}</label>
                        <input
                          value={form.whatsappNumber}
                          onChange={(e) => update('whatsappNumber', e.target.value)}
                          style={inputStyle}
                          required
                        />
                      </div>

                      <div>
                        <label style={labelStyle}>Email Address {renderRequiredMark()}</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          style={inputStyle}
                          required
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px' }}>
                      <div>
                        <label style={labelStyle}>Hight (cm) {renderRequiredMark()}</label>
                        <input
                          type="number"
                          min="80"
                          max="260"
                          value={form.heightCm}
                          onChange={(e) => update('heightCm', e.target.value)}
                          style={inputStyle}
                          required
                        />
                      </div>

                      <div>
                        <label style={labelStyle}>Weight (kg) {renderRequiredMark()}</label>
                        <input
                          type="number"
                          min="25"
                          max="300"
                          value={form.weightKg}
                          onChange={(e) => update('weightKg', e.target.value)}
                          style={inputStyle}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>
                        Do you have any food allergies or dietary restrictions? if yes, specify.
                      </label>
                      <textarea
                        value={form.foodAllergies}
                        onChange={(e) => update('foodAllergies', e.target.value)}
                        style={{ ...inputStyle, minHeight: '84px', resize: 'vertical' }}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Do you use supplements? If yes, specify.</label>
                      <textarea
                        value={form.supplements}
                        onChange={(e) => update('supplements', e.target.value)}
                        style={{ ...inputStyle, minHeight: '84px', resize: 'vertical' }}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>
                        Do you have any medical conditions or health concerns that may affect your training? if yes, specify.
                      </label>
                      <textarea
                        value={form.medicalConcerns}
                        onChange={(e) => update('medicalConcerns', e.target.value)}
                        style={{ ...inputStyle, minHeight: '90px', resize: 'vertical' }}
                      />
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <StepHeader title="Training History" />

                    <div>
                      <label style={labelStyle}>
                        Have you trained consistently before? If yes, what type of training have you done previously? and for how long?
                      </label>
                      <textarea
                        value={form.trainingHistory}
                        onChange={(e) => update('trainingHistory', e.target.value)}
                        style={{ ...inputStyle, minHeight: '96px', resize: 'vertical' }}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>
                        Do you currently exercise regularly? If yes, how often per week? {renderRequiredMark()}
                      </label>
                      <input
                        value={form.currentExerciseFrequency}
                        onChange={(e) => update('currentExerciseFrequency', e.target.value)}
                        style={inputStyle}
                        required
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Have you previously had any injuries? If yes, specify.</label>
                      <textarea
                        value={form.previousInjuries}
                        onChange={(e) => update('previousInjuries', e.target.value)}
                        style={{ ...inputStyle, minHeight: '96px', resize: 'vertical' }}
                      />
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <StepHeader title="Fitness Goals" />

                    <div>
                      <label style={labelStyle}>
                        What is your primary fitness goal? (Choose multiple if applicable) {renderRequiredMark()}
                      </label>
                      <div style={{ display: 'grid', gap: '8px' }}>
                        {goals.map((goal) => {
                          const active = form.primaryGoals.includes(goal);

                          return (
                            <button
                              key={goal}
                              type="button"
                              onClick={() => toggleGoal(goal)}
                              style={{
                                textAlign: 'left',
                                borderRadius: '10px',
                                border: active ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                                background: active ? 'rgba(26,188,156,0.12)' : 'var(--color-bg-tertiary)',
                                color: 'var(--color-text)',
                                padding: '11px 12px',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                                fontSize: '14px',
                              }}
                            >
                              {goal}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Other:</label>
                      <input
                        value={form.primaryGoalOther}
                        onChange={(e) => update('primaryGoalOther', e.target.value)}
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>
                        List any specific fitness or skill goals (e.g., muscle-up, handstand, sprint times)
                      </label>
                      <textarea
                        value={form.specificGoals}
                        onChange={(e) => update('specificGoals', e.target.value)}
                        style={{ ...inputStyle, minHeight: '92px', resize: 'vertical' }}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Preferred Program {renderRequiredMark()}</label>
                      <div style={{ display: 'grid', gap: '8px' }}>
                        {programs.map((option) => {
                          const active = form.preferredProgram === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => update('preferredProgram', option)}
                              style={{
                                textAlign: 'left',
                                borderRadius: '10px',
                                border: active ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                                background: active ? 'rgba(26,188,156,0.12)' : 'var(--color-bg-tertiary)',
                                color: 'var(--color-text)',
                                padding: '11px 12px',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                                fontSize: '14px',
                              }}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Other:</label>
                      <input
                        value={form.preferredProgramOther}
                        onChange={(e) => update('preferredProgramOther', e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <StepHeader title="Additional Notes" />

                    <div>
                      <label style={labelStyle}>How did you hear of us {renderRequiredMark()}</label>
                      <div style={{ display: 'grid', gap: '8px' }}>
                        {sources.map((source) => {
                          const active = form.hearAboutUs === source;
                          return (
                            <button
                              key={source}
                              type="button"
                              onClick={() => update('hearAboutUs', source)}
                              style={{
                                textAlign: 'left',
                                borderRadius: '10px',
                                border: active ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                                background: active ? 'rgba(26,188,156,0.12)' : 'var(--color-bg-tertiary)',
                                color: 'var(--color-text)',
                                padding: '11px 12px',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                                fontSize: '14px',
                              }}
                            >
                              {source}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Other:</label>
                      <input
                        value={form.hearAboutUsOther}
                        onChange={(e) => update('hearAboutUsOther', e.target.value)}
                        style={inputStyle}
                      />
                    </div>

                    <div style={{ marginTop: '8px' }}>
                      <label style={labelStyle}>
                        Terms & Conditions & Refund Policy {renderRequiredMark()}
                      </label>
                      <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: '10px' }}>
                        By proceeding with registration and payment, you confirm your full agreement with these Terms & Conditions and Refund Policy.
                      </p>
                      <Link
                        to="/terms-and-refund-policy"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          color: 'var(--color-primary)',
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: 600,
                          marginBottom: '8px',
                        }}
                      >
                        Open Terms & Conditions & Refund Policy
                      </Link>

                      <label
                        style={{
                          marginTop: '8px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          fontSize: '14px',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={form.acceptedTerms}
                          onChange={(e) => update('acceptedTerms', e.target.checked)}
                        />
                        I agree to the Terms & Conditions & Refund Policy.
                      </label>
                    </div>

                    <div>
                      <label style={labelStyle}>
                        Any additional notes or things you’d like the coach to know about you
                      </label>
                      <textarea
                        value={form.additionalNotes}
                        onChange={(e) => update('additionalNotes', e.target.value)}
                        style={{ ...inputStyle, minHeight: '110px', resize: 'vertical' }}
                      />
                    </div>
                  </>
                )}

                {errorMessage && (
                  <p style={{ color: '#ef4444', fontSize: '13px', fontWeight: 600 }}>{errorMessage}</p>
                )}

                <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 0}
                    style={{
                      border: '1px solid var(--color-border)',
                      background: 'transparent',
                      color: step === 0 ? 'var(--color-text-muted)' : 'var(--color-text)',
                      borderRadius: '10px',
                      padding: '11px 14px',
                      cursor: step === 0 ? 'not-allowed' : 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'inherit',
                      fontWeight: 600,
                    }}
                  >
                    <ArrowLeft size={16} />
                    Back
                  </button>

                  {step < TOTAL_STEPS - 1 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      style={{
                        border: 'none',
                        background: 'var(--color-primary)',
                        color: '#fff',
                        borderRadius: '10px',
                        padding: '11px 15px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontFamily: 'inherit',
                        fontWeight: 700,
                      }}
                    >
                      Next
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={submitting}
                      style={{
                        border: 'none',
                        background: 'var(--color-primary)',
                        color: '#fff',
                        borderRadius: '10px',
                        padding: '11px 15px',
                        cursor: submitting ? 'not-allowed' : 'pointer',
                        fontFamily: 'inherit',
                        fontWeight: 700,
                        opacity: submitting ? 0.7 : 1,
                      }}
                    >
                      {submitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  )}
                </div>
              </form>
            ) : (
              <div
                style={{
                  borderRadius: '12px',
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border)',
                  padding: '18px',
                }}
              >
                <p
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--color-text)',
                    fontWeight: 700,
                    marginBottom: '6px',
                  }}
                >
                  <CheckCircle2 size={18} color="var(--color-primary)" />
                  Application received
                </p>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{submitMessage}</p>
              </div>
            )}
          </motion.div>

          {!submitted && (
            <div
              style={{
                marginTop: '14px',
                position: 'sticky',
                bottom: '14px',
                zIndex: 2,
                borderRadius: '12px',
                border: '1px solid var(--color-border)',
                background: 'var(--color-card)',
                padding: '12px 14px',
                boxShadow: 'var(--shadow-soft)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '12px',
                  color: 'var(--color-text-secondary)',
                  marginBottom: '8px',
                }}
              >
                <span>{`Page ${step + 1} of ${TOTAL_STEPS}`}</span>
                <span>{pagesLeft === 0 ? 'Final page' : `${pagesLeft} page${pagesLeft > 1 ? 's' : ''} left`}</span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '999px',
                  background: 'var(--color-bg-tertiary)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${progressPercent}%`,
                    height: '100%',
                    borderRadius: '999px',
                    background: 'var(--color-primary)',
                    transition: 'width 0.2s ease',
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
