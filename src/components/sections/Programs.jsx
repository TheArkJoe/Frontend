import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

export default function Programs() {
  const { t } = useLanguage();
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const programOneApplyLink = 'https://docs.google.com/forms/d/e/1FAIpQLScudcs02nZqD1NRDRa9kUA86KsZLwFIPjL0vD9X6aKg_NjYXQ/viewform?usp=dialog';

  const coverageFeatures =
    t.programs.coverageFeatures || [
      'Custom Training Plan',
      'Personalized Nutrition Plan',
      'Nutrition Starter Kit',
      'Weekly check-ins and Reviews',
      'Direct WhatsApp Coach Access',
      'Bi-Weekly Strategy Calls',
      'Educational Nutrition Guide',
    ];

  const visibleTiers = (t.programs.tiers || []).slice(0, 2);

  const periodOptions = [
    {
      key: 'monthly',
      label: t.programs?.billing?.monthly || '1 Month',
      priceSuffix: t.programs?.billing?.perMonth || '/ month',
    },
    {
      key: 'quarterly',
      label: t.programs?.billing?.quarterly || '3 Months',
      priceSuffix: t.programs?.billing?.perQuarter || '/ 3 months',
    },
  ];

  const activePeriod = periodOptions.find((period) => period.key === selectedPeriod) || periodOptions[0];

  const getTierPrice = (tier) => {
    if (selectedPeriod === 'quarterly') {
      return (
        tier.prices?.quarterly
        || tier.priceQuarterly
        || tier.priceThreeMonths
        || tier.price3Months
        || tier.price
      );
    }

    return tier.prices?.monthly || tier.priceMonthly || tier.price;
  };

  return (
    <section
      id="programs"
      style={{
        padding: '96px 24px',
        background: 'var(--color-bg-secondary)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle label={t.programs.label} title={t.programs.title} />

        <div
          className="programs-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {visibleTiers.map((tier, i) => (
            <motion.div
              className="program-card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              style={{
                position: 'relative',
                borderRadius: '24px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                transition: 'all 0.3s ease',
              }}
            >
              {tier.popular && i === 0 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#fff',
                    background: 'var(--color-primary)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Star size={10} fill="white" />
                  {t.programs.mostPopular}
                </div>
              )}

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'var(--color-bg-secondary)',
                  borderRadius: '999px',
                  padding: '4px',
                  marginBottom: '22px',
                  width: 'fit-content',
                }}
              >
                {periodOptions.map((period) => {
                  const isActive = selectedPeriod === period.key;

                  return (
                    <button
                      key={period.key}
                      type="button"
                      onClick={() => setSelectedPeriod(period.key)}
                      style={{
                        background: isActive ? 'var(--color-primary)' : 'transparent',
                        color: isActive ? '#fff' : 'var(--color-text-secondary)',
                        padding: '8px 16px',
                        borderRadius: '999px',
                        fontSize: '14px',
                        fontWeight: 500,
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {period.label}
                    </button>
                  );
                })}
              </div>

              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                  color: 'var(--color-primary)',
                }}
              >
                {tier.badge}
              </span>

              <h3
                style={{
                  fontSize: '2.15rem',
                  fontWeight: 700,
                  marginBottom: '12px',
                  color: 'var(--color-text)',
                }}
              >
                {tier.name}
              </h3>

              <p
                style={{
                  fontSize: '15px',
                  marginBottom: '24px',
                  lineHeight: 1.6,
                  color: 'var(--color-text-secondary)',
                }}
              >
                {tier.description}
              </p>

              <ul
                style={{
                  flex: 1,
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginBottom: '28px',
                }}
              >
                {tier.features.map((feature, fi) => {
                  const isIncluded = fi < (tier.includedCount ?? tier.features.length);

                  return (
                  <li
                    key={fi}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                    }}
                  >
                    {isIncluded ? (
                      <Check
                        size={16}
                        strokeWidth={2.5}
                        style={{
                          marginTop: '2px',
                          flexShrink: 0,
                          color: 'var(--color-primary)',
                        }}
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        style={{
                          width: '16px',
                          height: '16px',
                          marginTop: '2px',
                          flexShrink: 0,
                          borderRadius: '4px',
                          border: '1.5px solid var(--color-border)',
                          opacity: 0.8,
                        }}
                      />
                    )}
                    <span
                      style={{
                        fontSize: '14px',
                        color: isIncluded
                          ? 'var(--color-text-secondary)'
                          : 'var(--color-text-secondary)',
                        opacity: isIncluded ? 1 : 0.55,
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                  );
                })}
              </ul>

              <p
                style={{
                  fontSize: '2.7rem',
                  fontWeight: 800,
                  textAlign: 'center',
                  marginBottom: '20px',
                  color: 'var(--color-text)',
                  lineHeight: 1,
                }}
              >
                {getTierPrice(tier)}
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--color-text-secondary)',
                    marginLeft: '6px',
                  }}
                >
                  {activePeriod.priceSuffix}
                </span>
              </p>
            </motion.div>
          ))}
        </div>

        <div
          style={{
            marginTop: '32px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <a
            href={programOneApplyLink}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 24px',
              borderRadius: '12px',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-text)',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '14px',
              transition: 'all 0.2s ease',
            }}
          >
            {t.programs.applyProgramOne || 'Apply for Program One'}
          </a>
        </div>
      </div>
    </section>
  );
}
