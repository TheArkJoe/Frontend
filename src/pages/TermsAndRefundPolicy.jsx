import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndRefundPolicy() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: '120px 24px 96px',
        background: 'var(--color-bg-secondary)',
      }}
    >
      <div
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          borderRadius: '20px',
          padding: '30px',
          background: 'var(--color-card)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-soft)',
        }}
      >
        <span
          style={{
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--color-primary)',
          }}
        >
          Legal
        </span>
        <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginTop: '8px', marginBottom: '12px' }}>
          Terms & Conditions & Refund Policy
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', textIndent: '2.5em' }}>
          By submitting this form and enrolling in coaching services, you confirm that you have read, understood, and agreed to the following terms and conditions. All training programs, nutrition plans, consultations, and support services are provided for educational and informational purposes only and do not replace professional medical advice, diagnosis, or treatment. You acknowledge that you are voluntarily participating in physical training and nutrition programs and that you are responsible for consulting a qualified healthcare professional before beginning, especially if you have any pre-existing medical conditions. You accept full responsibility for your health, safety, and well-being and agree to inform the coach of any injuries, illnesses, or physical limitations that may affect your participation.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', textIndent: '2.5em' }}>
          You understand that results vary from person to person and depend heavily on individual effort, consistency, lifestyle habits, and adherence to the program. Failure to follow the provided plans or instructions may limit results, and the coach cannot be held responsible for lack of progress due to non-compliance. While reasonable guidance and support will be provided, coaching services do not include 24/7 availability, and response times may vary depending on workload and time zones. Scheduled calls and check-ins must be attended on time, and repeated missed appointments may lead to rescheduling limitations.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', textIndent: '2.5em' }}>
          All coaching fees must be paid in full before services begin unless an agreed payment plan is arranged in writing. Prices may change at any time; however, active clients will not be affected by pricing adjustments during their current coaching period.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', textIndent: '2.5em' }}>
          Due to the time, planning, and personalization required to create coaching programs, all payments are non-refundable once services have started. Refunds will not be issued for change of mind, lack of time to follow the program, dissatisfaction due to unmet expectations without proper compliance, or failure to adhere to the plan. If a client chooses to cancel before coaching begins, a partial refund may be considered at the coach’s discretion. In exceptional cases such as medical emergencies that prevent participation, coaching may be paused and resumed at a later time with appropriate documentation.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', textIndent: '2.5em' }}>
          All programs, guides, documents, videos, and materials provided remain the intellectual property of the coach and are for personal use only. Sharing, distributing, reproducing, or reselling these materials without written permission is strictly prohibited.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', textIndent: '2.5em' }}>
          By proceeding with registration and payment, you confirm your full agreement with these Terms & Conditions and Refund Policy.
        </p>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="button"
          onClick={() => navigate(-1)}
          style={{
            border: '1px solid var(--color-border)',
            background: 'var(--color-bg-tertiary)',
            color: 'var(--color-text)',
            borderRadius: '10px',
            padding: '11px 14px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            fontFamily: 'inherit',
            fontWeight: 600,
          }}
        >
          <ArrowLeft size={16} />
          Back
        </motion.button>
      </div>
    </section>
  );
}
