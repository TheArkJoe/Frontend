const en = {
  // Navbar
  nav: {
    home: 'Home',
    about: 'About',
    achievements: 'Achievements',
    journey: 'Journey',
    programs: 'Programs',
    apply: 'Apply',
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
      { number: '5+', label: 'Years Training and Sprinting' },
      { number: '50+', label: 'Athletes Coached' },
    ],
  },

  // Track Record
  trackRecord: {
    label: 'TRACK RECORD',
    title: 'Performance Backed by Results',
    items: [
      'Online Coaching Experience',
      'University Sprint Championship Medalist',
      'Founder of AUC Calisthenics Team',
      '5+ Years Advanced Sprint and Calisthenics Training',
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
    coverageFeatures: [
      'Custom Training Plan',
      'Personalized Nutrition Plan',
      'Nutrition Starter Kit',
      'Weekly check-ins and Reviews',
      'Direct WhatsApp Coach Access',
      'Bi-Weekly Strategy Calls',
      'Educational Nutrition Guide',
    ],
    tiers: [
      {
        badge: 'BASIC',
        name: 'Foundations',
        description: 'For beginners building strength and athletic base.',
        includedCount: 4,
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
        includedCount: 6,
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
        includedCount: 7,
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
      'One powerful insight a day.\n Two minutes to read.\n Delivered straight to your inbox.',
    placeholder: 'Enter your email',
    ctaNewsletter: 'Apply for Newsletter',
    ctaProgram: 'Apply for Program',
    selector: {
      program: 'Program',
      newsletter: 'Newsletter',
    },
    messages: {
      invalidEmail: 'Please enter a valid email.',
      programSuccess: 'Application sent for program.',
      newsletterSuccess: 'Application sent for newsletter.',
      genericError: 'Could not submit right now. Try again.',
      integrationMissing:
        'Google Sheets integration is not configured yet. Add VITE_LEADS_ENDPOINT in your environment.',
      wrongEndpoint:
        'VITE_LEADS_ENDPOINT is invalid. Use your Apps Script Web App URL ending with /exec, not the sheet URL.',
      endpointAuthError:
        'Endpoint rejected the request. Check Apps Script deployment access and API key settings.',
      endpointNetworkError:
        'Could not reach the endpoint. Check internet access and ensure the endpoint URL is reachable.',
      endpointInvalidResponse:
        'Endpoint returned an unexpected response. Verify your Apps Script doPost handler and returned JSON.',
    },
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
        q: 'Who is this coaching designed for?',
        a: 'My coaching is designed for individuals who value high-level physical performance, structure, and long-term health. Most clients are professionals, entrepreneurs, and athletes who want a personalized system that fits into demanding schedules while delivering measurable results.',
      },
      {
        q: 'What makes your coaching different?',
        a: 'This is not a generic fitness program. Every client receives a fully individualized system built around their goals, schedule, recovery capacity, and training history. My background in sprint performance and strength-to-weight training allows me to combine athletic development, strength training, and body composition strategies into one integrated approach.',
      },
      {
        q: 'What kind of results do your clients achieve?',
        a: 'Clients typically experience significant improvements in strength, physical performance, body composition, and overall energy levels. However, results depend on consistency and commitment. My role is to provide the strategy, structure, and accountability required to achieve high-level results.',
      },
      {
        q: 'Is this suitable for beginners?',
        a: 'Yes. Programs are tailored to each client’s level, whether they are new to training or already experienced. The focus is always on sustainable progress and long-term development.',
      },
      {
        q: 'How does online coaching work?',
        a: 'The process is structured and straightforward: initial assessment and consultation, personalized training system and nutrition guidance designed around your goals, weekly progress reviews and program adjustments upon need, and ongoing communication and performance feedback. This ensures the program evolves with your progress.',
      },
      {
        q: 'Do I need access to a gym?',
        a: 'Not necessarily. Programs can be designed for full gym environments, private studios, or minimal equipment depending on your setup and preferences.',
      },
      {
        q: 'How much time do I need to commit?',
        a: 'Most clients train between 3–5 sessions per week, each lasting approximately 45–75 minutes. The program is designed to fit into demanding professional schedules.',
      },
      {
        q: 'Do you provide nutrition guidance?',
        a: 'Yes. Clients receive practical nutrition guidance designed to support training performance, recovery, and body composition goals. The focus is on sustainable habits rather than restrictive dieting.',
      },
      {
        q: 'How does communication work during coaching?',
        a: 'Clients receive bi-weekly structured check-ins where progress, training performance, recovery, and adjustments are reviewed. Outside of those check-ins, clients are welcome to reach out at any time for questions, feedback, or clarification. I respond as promptly as possible to ensure momentum is never lost. If a deeper discussion is needed, clients may request a private call, which will be scheduled at the earliest available time. The goal is simple: consistent guidance and uninterrupted progress.',
      },
      {
        q: 'What am I giving up?',
        a: 'Commitment. This coaching works best for individuals who are prepared to take their physical development seriously. That means showing up consistently, following the structure, and communicating honestly during check-ins. You are not giving up flexibility or autonomy. The system is designed to integrate into demanding schedules. What you are committing to is a higher standard of discipline, accountability, and long-term progress.',
      },
      {
        q: 'How do I get started?',
        a: 'Prospective clients begin by completing the coaching application form. This helps determine whether the program is a strong fit for their goals and expectations. Qualified applicants will then be invited to schedule a consultation.',
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
