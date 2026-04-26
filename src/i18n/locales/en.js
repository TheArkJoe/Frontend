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
    feedback: 'Feedback',
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
    applyProgramOne: 'Apply for Program One',
    billing: {
      monthly: '1 Month',
      quarterly: '3 Months',
      perMonth: '/ month',
      perQuarter: '/ 3 months',
      discountOff: 'OFF',
      save: 'Save',
    },
    tiers: [
      {
        badge: 'CALISTHENICS',
        name: 'Calisthenics & Fitness',
        description: 'Build a strong, functional, and aesthetic physique using bodyweight and weighted training.',
        prices: {
          monthly: '1,650 EGP',
          quarterly: '2,950 EGP',
        },
        includedCount: 6,
        features: [
          'Personalized calisthenics programming',
          'Progressive overload tracking',
          'Nutrition guidance & meal framework',
          'Technique analysis & form correction',
          'Weekly check-ins & adjustments',
          'Exercise demonstration library'
        ],
      },
      {
        badge: 'SPRINT',
        name: 'Sprinting & Hybrid Athletes',
        description: 'Maximize sprint speed, explosive power, and athletic performance for hybrid competitors.',
        prices: {
          monthly: '3,500 EGP',
          quarterly: '7,000 EGP',
        },
        includedCount: 7,
        features: [
          'Custom sprint & power programming',
          'Speed mechanics breakdown',
          'Strength-to-weight optimization',
          'Race & competition prep',
          'Bi-weekly performance calls',
          'Advanced performance tracking',
          'Access to track training with me once a week'
        ],
      },
    ],
  },

  // Newsletter
  newsletter: {
    label: 'NEWSLETTER',
    title: 'An Advice a Day',
    subtitle:
      'One focused piece of advice delivered daily to level up every part of your game.',
    placeholder: 'Enter your email',
    ctaNewsletter: 'Subscribe - It is Free!',
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
        'Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in your environment.',
      databaseError: 'Could not save your subscription. Please try again.',
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

  // Feedback
  feedback: {
    label: 'FEEDBACK',
    title: 'Share Your Feedback',
    subtitle:
      'Tell me what is working, what can be improved, and what you want more of. Your feedback helps me refine the coaching experience.',
    backHome: '← Back to Home',
    name: 'Name',
    email: 'Email',
    namePlaceholder: 'Your full name',
    emailPlaceholder: 'you@example.com',
    rating: 'Overall Experience',
    category: 'Feedback Type',
    categories: [
      { value: 'coaching', label: 'Coaching Program' },
      { value: 'website', label: 'Website Experience' },
      { value: 'calculator', label: 'Calorie Calculator' },
      { value: 'content', label: 'Content / Social Media' },
    ],
    goal: 'Primary Goal',
    goalPlaceholder: 'Example: Improve sprint speed and body composition',
    bestPart: 'Best Part So Far',
    bestPartPlaceholder: 'What gave you the most value?',
    improve: 'What Should Improve?',
    improvePlaceholder: 'Any suggestions to make this better?',
    recommend: 'Would You Recommend This?',
    recommendOptions: [
      { value: 'yes', label: 'Yes' },
      { value: 'maybe', label: 'Maybe' },
      { value: 'no', label: 'No' },
    ],
    contactBack: 'I am open to a follow-up message about this feedback.',
    submit: 'Submit Feedback',
    successTitle: 'Thank you for your feedback!',
    successMessage: 'Your response was saved successfully. I appreciate the time and honesty.',
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
