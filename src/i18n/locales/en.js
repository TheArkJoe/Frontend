const en = {
  // Navbar
  nav: {
    home: 'Home',
    about: 'About',
    achievements: 'Achievements',
    journey: 'Journey',
    //programs: 'Programs',
    //apply: 'Apply',
    calculator: 'Calorie Calculator',
    faq: 'FAQ',
    applyNow: 'Apply Now',
  },

  // Hero
  hero: {
    title: 'Coaching for Athletes Who Want',
    titleHighlight: 'Real Results',
    subtitle:
      'University Champion Sprinter. Founder of AUC Calisthenics Team. Online Performance Coach.',
    badge1: '5+ Years Training',
    badge2: 'University Medalist',
    badge3: 'Team Founder',
    badge4: 'Online Coach',
    cta: 'Apply for Coaching',
    ctaSecondary: 'Calorie Calculator',
  },

  // About
  about: {
    label: 'WHO I AM',
    title: 'From Lockdown Training to University Champion',
    p1: "I started my calisthenics journey in 2020 during lockdown, building raw strength from bodyweight fundamentals. What began as survival training became a disciplined system.",
    p2: "I founded the AUC Calisthenics Team, served as head trainer for a year, and have been coaching clients in both calisthenics and fitness for over a year.",
    p3: "I expanded into sprint specialization, competed in university sprint championships, and won multiple medals. Now I help serious athletes unlock the same results through structured, data-driven coaching.",
    cta: 'Train With Me',
    stats: [
      { number: '5+', label: 'Years Training' },
      { number: '3+', label: 'Years Sprinting' },
      { number: '50+', label: 'Athletes Coached' },
    ],
  },

  // Track Record
  trackRecord: {
    label: 'TRACK RECORD',
    title: 'Performance Backed by Results',
    items: [
      'University Sprint Championship Medalist',
      'Founder of AUC Calisthenics Team',
      '3+ Years Advanced Sprint Training',
      '5+ Years Advanced Calisthenics Training',
      'Online Coaching Experience',
      'Athlete Development Focus',
    ],
  },

  // Journey
  journey: {
    label: 'EXPERIENCE · CONSISTENCY · PROGRESS',
    title: 'Built over years. Not weeks.',
    subtitle:
      "This is not a highlight reel. This is documented progress — phases of growth, discipline, setbacks, and evolution. I don't coach theory. I coach experience.",
    items: [
      { caption: 'Gold medal in the 100m dash sprint, 2023.' },
      { caption: 'Gold medal in the 100m dash sprint, 2024.' },
      { caption: 'Recognition as the MVP of CrossFit and Track & Field, 2024.' },
      { caption: 'Recognised as the Chair of the Athletic Committee, AUC 2025.' },
      { caption: 'Featured on the AUC Magazine as the founder of the Calisthenics Team, 2025.' },
      { caption: 'Won gold at a deadlift competition with 225 kg, 2025.' },
    ],
    tagline: "I don't give you a program.",
    taglineBold: 'I give you the recipe that caters to your world.',
    cta: 'Work With Me',
  },

  // Programs
  programs: {
    label: 'PROGRAMS',
    title: 'Coaching Programs',
    mostPopular: 'Most Popular',
    tiers: [
      {
        badge: 'BASIC',
        name: 'Foundations',
        description: 'For beginners building strength and athletic base.',
        features: [
          'Personalized monthly training plan',
          'Weekly check-ins',
          'Exercise demonstration videos',
          'Email support',
        ],
        cta: 'Apply Now',
      },
      {
        badge: 'PERFORMANCE',
        name: 'Performance Athlete',
        description:
          'For serious athletes looking to improve sprint speed and strength-to-weight ratio.',
        features: [
          'Custom sprint + calisthenics programming',
          'Bi-weekly performance calls',
          'Nutrition guidance',
          'Technique analysis',
          'Progress tracking system',
        ],
        cta: 'Apply Now',
        popular: true,
      },
      {
        badge: 'ELITE',
        name: 'Elite Performance',
        description: 'For competitive athletes demanding full optimization.',
        features: [
          'Full performance periodization',
          'Weekly 1-on-1 coaching calls',
          'Personalized sprint mechanics breakdown',
          'Priority WhatsApp support',
          'Advanced performance tracking',
          'Competition prep guidance',
        ],
        cta: 'Apply Now',
      },
    ],
  },

  // Newsletter
  newsletter: {
    label: 'NEWSLETTER',
    title: 'An Advice a Day',
    subtitle:
      'Subscribe and receive one daily piece of advice — training, mindset, nutrition — straight to your inbox.',
    placeholder: 'Enter your email',
    cta: 'Subscribe',
    disclaimer: 'No spam. Unsubscribe anytime.',
  },

  // Calorie Calculator
  calculator: {
    label: 'TOOL',
    title: 'Calorie & Macro Calculator',
    subtitle:
      'Enter your metrics below to estimate your daily calorie needs and optimal macronutrient breakdown for your goal.',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    age: 'Age',
    height: 'Height',
    weight: 'Weight',
    activityLevel: 'Activity Level',
    activityOptions: [
      'Sedentary (little or no exercise)',
      'Lightly Active (1-3 days/week)',
      'Moderately Active (3-5 days/week)',
      'Very Active (6-7 days/week)',
      'Super Active (athlete/physical job)',
    ],
    goal: 'Goal',
    goalOptions: ['Lose Weight', 'Maintain Weight', 'Gain Muscle'],
    trainingFrequency: 'Training Frequency',
    trainingOptions: [
      '1-2 days/week',
      '3-4 days/week',
      '5-6 days/week',
      'Every day',
    ],
    calculate: 'Calculate',
    results: 'Your Results',
    calories: 'Daily Calories',
    protein: 'Protein',
    carbs: 'Carbs',
    fats: 'Fats',
    unit: {
      cm: 'cm',
      kg: 'kg',
      years: 'years',
      g: 'g',
      kcal: 'kcal',
    },
    heroTitle: 'Fuel Your',
    heroHighlight: 'Performance',
    heroSubtitle: 'Calculate your exact calorie and macro needs based on your body, lifestyle, and goals.',
    heroCta: 'Start Calculating',
    backHome: '← Back to Home',
  },

  // FAQ
  faq: {
    label: 'FAQ',
    title: 'Frequently Asked Questions',
    items: [
      {
        q: 'Is this program suitable for beginners?',
        a: 'Yes! The Foundations program is designed specifically for beginners who want to build a strong athletic base.',
      },
      {
        q: 'Do I need gym access?',
        a: 'Not necessarily. Many calisthenics exercises can be done with minimal equipment. However, gym access can help with sprint and advanced strength training.',
      },
      {
        q: 'Is nutrition included?',
        a: 'The Performance and Elite tiers include nutrition guidance. Use our free Calorie Calculator as a starting point!',
      },
      {
        q: 'How soon will I see results?',
        a: 'With consistent effort, most athletes see noticeable improvements within 4-6 weeks. Significant transformation takes 3-6 months.',
      },
      {
        q: 'What if I get injured?',
        a: 'Your program will be adjusted to accommodate recovery. Communication is key — we work around your situation.',
      },
      {
        q: 'Is sprint training safe?',
        a: 'Yes, when programmed correctly. Proper warm-ups, progressions, and technique drills are built into every plan.',
      },
      {
        q: 'How is communication handled?',
        a: 'Depending on your tier: email, WhatsApp, or direct 1-on-1 calls. You will always have a direct line to your coach.',
      },
    ],
  },

  // Footer
  footer: {
    tagline: 'Elite Sprint & Calisthenics Performance Coach',
    rights: '© 2026 All rights reserved.',
  },

  // Calculator Preview (CTA on home page)
  calcPreview: {
    label: 'FREE TOOL',
    title: 'Know Your Numbers',
    subtitle:
      'Use our free Calorie & Macro Calculator to find out exactly how much you need to eat to reach your goals.',
    cta: 'Open Calculator',
    features: [
      'Personalized calorie targets',
      'Optimal macro breakdown',
      'Goal-specific recommendations',
      'Completely free',
    ],
  },
};

export default en;
