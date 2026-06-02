export const siteMeta = {
  name: 'Isaac Adelore',
  role: 'Product Engineer',
  location: 'Lagos, Nigeria',
  email: 'adeloreisaac@gmail.com',
  github: 'https://github.com/adeloreisaac',
  linkedin: 'https://linkedin.com/in/adeloreisaac',
  description:
    'Product engineer building fast, polished product interfaces across real-time platforms, dashboards, white-label systems, payments, and full-stack product delivery.',
};

export const navLinks = [
  { href: '#brands', label: 'Brands' },
  { href: '#what-i-do', label: 'Capabilities' },
  { href: '#stand-for', label: 'Values' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export const capabilityCards = [
  {
    title: 'Product engineering',
    copy:
      'I shape flows, reduce product ambiguity, and turn business rules into interfaces that feel obvious once they reach production.',
    tags: ['Product thinking', 'UX judgment', 'Systems', 'Execution'],
  },
  {
    title: 'Frontend systems',
    copy:
      'Vue, React, Next.js, Astro, TypeScript, state management, component systems, white-label structure, motion, and the details that make frontend work hold together.',
    tags: ['Vue', 'React', 'Next.js', 'Astro', 'TypeScript'],
  },
  {
    title: 'Complex interface work',
    copy:
      'Real-time odds, browser calling, conferencing, dashboards, internal tools, multi-role surfaces, and UI that stays calm while the underlying state keeps moving.',
    tags: ['Realtime UX', 'WebSocket', 'SIP.js', 'Internal tools'],
  },
  {
    title: 'Full-stack support',
    copy:
      'Laravel, Node, NestJS, payments, deployment, and design-to-production execution when the fastest path is one engineer who can carry more than the UI.',
    tags: ['Laravel', 'Node', 'NestJS', 'Payments', 'Deployment'],
  },
];

export const featuredWork = {
  label: 'Featured case study',
  name: 'White-label sportsbook platform',
  period: 'Realtime product system',
  summary:
    'Frontend architecture across web, mobile, retail terminals, and admin for a real-time white-label platform used across multiple brands and operator surfaces.',
  detail:
    'The real challenge was keeping a multi-brand, real-time product fast, maintainable, and coherent across every surface while new clients and product demands kept arriving.',
  metrics: [
    { value: '55%', label: 'faster load times after performance work' },
    { value: '<1s', label: 'live odds latency over WebSocket' },
    { value: 'Days', label: 'new client onboarding, down from weeks' },
  ],
  points: [
    'Built the white-label theming infrastructure, shared component conventions, and branching workflows that cut duplicate effort across client builds.',
    'Shipped live odds feeds, mid-placement bet slip recalculations, and virtual game interfaces with Vue, TypeScript, Pinia, and WebSocket updates.',
    'Mentored junior engineers, tightened review standards, and improved frontend consistency across consumer and operator tooling.',
  ],
  stack: ['Vue.js', 'TypeScript', 'Pinia', 'Vue Router', 'WebSocket'],
  surfaces: ['Web', 'Mobile', 'Retail', 'Admin'],
};

export const selectedWork = [
  {
    name: 'Enterprise mailing suite',
    period: 'Multi-module product rebuild',
    label: 'Messaging product',
    summary:
      'Rebuilt a large Laravel + React / Inertia product from monolithic sprawl into cleaner modular frontend architecture during a company-wide rebrand.',
    impact:
      'Delivered rich-text composition, Gmail-style threading, conferencing, booking, and clearer frontend standards across the team.',
    role: 'Frontend architecture + product UI',
    stack: ['React', 'TypeScript', 'Inertia.js', 'Laravel'],
    visual: 'venmail',
    visualNote: 'Thread UX, composer flows, modular frontend architecture',
  },
  {
    name: 'Social + live streaming platform',
    period: 'High-fidelity Next.js build',
    label: 'Frontend performance',
    summary:
      'Translated dense Figma flows into a production-ready Next.js interface with strong responsiveness, accessibility, and brand fidelity.',
    impact:
      'Resolved rendering bottlenecks for a 50% page-load improvement while adding OAuth and live streaming features.',
    role: 'Build, optimisation, live features',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Chakra UI'],
    visual: 'talstrike',
    visualNote: 'High-fidelity build, performance passes, live features',
  },
  {
    name: 'Marketplace + payment workflows',
    period: 'End-to-end product ownership',
    label: 'Marketplace',
    summary:
      'Owned a marketplace end to end, from Figma UX through Laravel backend and Vue/Nuxt frontend, including dashboards, analytics, and order flows.',
    impact:
      'Built role-specific dashboards and a unified payment layer across Paystack, Flutterwave, and Zilla credit flows.',
    role: 'UX, frontend, backend, payments',
    stack: ['Vue', 'Nuxt', 'Laravel', 'AWS', 'Payments'],
    visual: 'feedx',
    visualNote: 'Buyer and seller dashboards, analytics, checkout flows',
  },
  {
    name: 'Browser call suite',
    period: 'Realtime communication UI',
    label: 'Web calling',
    summary:
      'Integrated browser-based calling, payment support, contact management, and reusable Vue components into a communication product that needed reliability more than novelty.',
    impact:
      'Added SIP.js calling features and monitoring with Sentry, Replay, and Crashlytics to improve triage and uptime after launch.',
    role: 'Realtime UI + monitoring',
    stack: ['Vue.js', 'SIP.js', 'Sentry', 'Crashlytics'],
    visual: 'pressone',
    visualNote: 'Call controls, operator states, monitoring hooks',
  },
];

export const brands = [
  'Sportsbook Engine',
  'Venmail',
  'Talstrike',
  'PressOne Africa',
  'FeedxNG',
  'LordwinGames',
];

export const standFor = [
  {
    title: 'Leadership',
    copy:
      'I raise the quality bar, mentor where needed, and make tradeoffs explicit so teams can move with less confusion.',
  },
  {
    title: 'Integrity',
    copy:
      'I prefer the honest version of the work: clear risks, clear constraints, and no pretending a fragile solution is solid.',
  },
  {
    title: 'Ownership',
    copy:
      'I do not treat a ticket as finished until the product outcome makes sense in the hands of real users.',
  },
];

export const aboutPoints = [
  'I learned by building, failing, rebuilding, and shipping under pressure. That is still how I think: clear tradeoffs, fast iteration, and no romanticism about complexity.',
  "My best work happens when a product is no longer simple, when the UI has to carry live state, business rules, multiple brands, or a design system that can't fall apart under delivery pressure.",
  "I'm frontend-heavy, but I don't think in frontend-only terms. I care about the product, the backend contracts, the team's review culture, and whether the experience still feels intentional when it reaches production.",
];
