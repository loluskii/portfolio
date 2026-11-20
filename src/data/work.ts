export type Img = {
  /** Path without the width suffix, e.g. /work/spense/cover */
  src: string;
  widths: number[];
  alt: string;
  /** width / height of the stored image */
  ratio: number;
  frame?: 'browser' | 'phone' | 'plain';
  caption?: string;
};

export type Section = { heading: string; body: string[] };

export type Project = {
  slug: string;
  name: string;
  years: string;
  role: string;
  summary: string;
  feature: boolean;
  cover?: Img;
  /** Shown on the home page instead of a cover when there are no screenshots. */
  coverText?: string;
  builtWith: string;
  links: { label: string; href: string }[];
  sections: Section[];
  gallery: Img[];
};

export const projects: Project[] = [
  {
    slug: 'pitchside',
    name: 'Pitchside',
    years: '2026',
    role: 'Product, design and frontend',
    summary: 'A live sportsbook and casino that runs entirely on a match simulation.',
    feature: true,
    cover: {
      src: '/work/pitchside/strip',
      widths: [800, 1600],
      ratio: 1800 / 964,
      alt: 'Four Pitchside phone screens: the home page, live betting, a match page and the Liftoff casino game',
      frame: 'plain',
    },
    builtWith: 'Next.js 16, React 19, TypeScript, Tailwind CSS, TanStack Query, Zustand',
    links: [
      { label: 'Live site', href: 'https://pitchside-app-alpha.vercel.app' },
      { label: 'Source code', href: 'https://github.com/loluskii/pitchside' },
      { label: 'One-minute demo', href: 'https://github.com/loluskii/pitchside/blob/main/docs/media/pitchside-demo.mp4' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: [
          'A sportsbook front end is hard to show anyone. Every screen depends on a live odds feed, which means a data provider, a betting backend and a wallet. Without those, the screens are empty.',
        ],
      },
      {
        heading: 'What I did',
        body: [
          'Pitchside runs on a match engine inside the app. Given the current time, it works out which matches exist, what minute each one is in, the score, and a price for every market. Everyone who opens the site sees the same matches, and there is no server to keep running.',
          'The app talks to the engine the way it would talk to a real odds provider: REST paths for fixtures and bets, and MQTT-style topics for live prices. So the betslip, the live-update layer and the data handling are production code, not demo code.',
          'On top of that sit football, basketball, ice hockey and tennis, a betslip with singles, accumulators, system bets and booking codes, four casino games, and a play-money wallet.',
        ],
      },
      {
        heading: 'Details that matter',
        body: [
          'When an outcome is effectively decided, its price shows a padlock instead of 125.20 next to 1.01. That is what a real bookmaker does, and it keeps the columns lined up.',
          'The betslip accepts price rises on its own and only asks the player when a price drops or a market is suspended. Live prices move constantly, and asking every time made the slip unusable.',
        ],
      },
      {
        heading: 'How I checked it',
        body: [
          'There are 149 unit tests. Most cover the two places where a bug costs a player money or trust: the match engine (scheduling, no club in two live matches, settlement) and the betslip (price changes, combined bets, payout previews).',
          'Accessibility scores 100 in Lighthouse on every page tested. Getting there meant darkening two text colours that failed contrast, giving the banner dots 24px tap targets, labelling the carousel links by their content, and allowing pinch zoom.',
          'Performance is where it fell short. The home page scored 54 on a throttled mobile run. A CPU profile showed date formatting rebuilt for every row, CSS :has() selectors re-matching on every live update, and the live feed repricing every match every three seconds. Caching the formatters, swapping :has() for classes, and sending only real price changes brought sport and casino pages to 75 to 80.',
        ],
      },
      {
        heading: 'What it doesn’t do yet',
        body: [
          'The home page still scores 50 to 65, because the engine shares the main thread with React. Moving the engine into a Web Worker is the next step.',
          'Balances and tickets live in the browser, so clearing site data resets them and an account can’t move between devices. That was a deliberate trade for having no server.',
        ],
      },
    ],
    gallery: [],
  },
  {
    slug: 'spense',
    name: 'Spense',
    years: '2026',
    role: 'Product and design direction',
    summary: 'An expense tracker for people who spend in naira.',
    feature: true,
    cover: {
      src: '/work/spense/cover',
      widths: [800, 1600],
      ratio: 1440 / 900,
      alt: 'The Spense dashboard: monthly total, top category, daily average, an expense form and spending by category',
      frame: 'browser',
    },
    builtWith: 'React, TypeScript, Vite, FastAPI, PostgreSQL. Marketing site in Astro.',
    links: [
      { label: 'Open the app', href: 'https://spense-app.vercel.app' },
      { label: 'Marketing site', href: 'https://spense-web.vercel.app' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: [
          'Most budgeting apps assume dollars, bank syncing and a lot of setup. Spense is for logging what you spend in naira in a few seconds, then seeing where the month went.',
        ],
      },
      {
        heading: 'What I did',
        body: [
          'I set the scope for the first version: log, edit and delete expenses, move between months, and see totals, a daily average and a breakdown by category. Accounts, budgets and exports were left for later on purpose.',
          'I directed the design and pushed back on early versions over type, size, colour and layout until it felt like a product someone would pay for. The result is dark and editorial, with Syne for headings and a single lime accent for actions.',
        ],
      },
      {
        heading: 'Details that matter',
        body: [
          'Category bars are sized against the month’s total, not against the biggest category. A bar shows its real share of what you spent, so a quiet month doesn’t look like a heavy one.',
          'The live demo runs in your browser with sample data, so anyone can try it without signing up.',
        ],
      },
      {
        heading: 'What it doesn’t do yet',
        body: [
          'There are no accounts, so the hosted demo keeps data on your device. Sign-in, budgets and recurring expenses are the next things on the list, and the data model was set up so they can be added without a rewrite.',
        ],
      },
    ],
    gallery: [
      { src: '/work/spense/site', widths: [800, 1600], ratio: 1440 / 900, frame: 'browser', alt: 'Spense marketing site hero: Know exactly where your money goes', caption: 'The marketing site' },
      { src: '/work/spense/phone', widths: [400, 780], ratio: 780 / 1688, frame: 'phone', alt: 'Spense on a phone', caption: 'On a phone' },
    ],
  },
  {
    slug: 'simzsco',
    name: 'Simzsco Advisory',
    years: '2026',
    role: 'Design direction',
    summary: 'Website for a founder-led firm advising on strategy, creative work and partnerships.',
    feature: false,
    cover: {
      src: '/work/simzsco/cover',
      widths: [800],
      ratio: 800 / 600,
      alt: 'Simzsco Advisory home page: Position. Prepare. Connect., with three stacked note cards',
      frame: 'browser',
    },
    builtWith: 'Nuxt',
    links: [{ label: 'simzscoadvisory.com', href: 'https://simzscoadvisory.com' }],
    sections: [
      {
        heading: 'The problem',
        body: [
          'The firm’s work is broad: strategy, creative direction and partnerships. It needed a site that explains that in plain terms, and shows past work without exposing clients who haven’t agreed to be named.',
        ],
      },
      {
        heading: 'What I did',
        body: [
          'I directed the design: warm paper tones, a heavy serif for headlines, and three stacked note cards in the opening screen. The cards follow how the firm takes on a brief: first an honest read of the situation, then a route, then evidence.',
          'Past work is described by outcome and context rather than by client name, so the firm can show what it has done without breaking anyone’s confidence.',
        ],
      },
    ],
    gallery: [
      { src: '/work/simzsco/phone', widths: [400, 750], ratio: 750 / 1624, frame: 'phone', alt: 'Simzsco Advisory on a phone', caption: 'On a phone' },
    ],
  },
  {
    slug: 'stackr',
    name: 'Stackr',
    years: '2026',
    role: 'Founder, product and design',
    summary: 'A paid-newsletter platform for African writers who can’t use Stripe.',
    feature: false,
    cover: {
      src: '/work/stackr/cover',
      widths: [800, 1600],
      ratio: 1440 / 900,
      alt: 'Stackr product page with a writer dashboard showing revenue, subscribers and open rate',
      frame: 'browser',
    },
    builtWith: 'Next.js and GSAP for the site. The app is planned on React, FastAPI, PostgreSQL and Tiptap.',
    links: [{ label: 'Source code', href: 'https://github.com/loluskii/stackr' }],
    sections: [
      {
        heading: 'The problem',
        body: [
          'Substack and similar tools pay writers through Stripe, which most Nigerian and Ghanaian writers can’t use. Their readers would also rather pay in naira or cedis than in dollars.',
        ],
      },
      {
        heading: 'What I’m building',
        body: [
          'Stackr lets a writer start a paid newsletter and collect subscriptions in naira, cedis or dollars through Paystack, with Flutterwave as a fallback, then get paid into a local bank account.',
          'I wrote the product spec and kept the first version narrow: write, publish, collect, get paid. The brand is warm cream and amber with Fraunces, closer to a magazine than a dashboard.',
        ],
      },
      {
        heading: 'Where it stands',
        body: ['The marketing site and the product design are done. The app itself is in development.'],
      },
    ],
    gallery: [
      { src: '/work/stackr/home', widths: [800, 1600], ratio: 1440 / 900, frame: 'browser', alt: 'Stackr home page: Get paid for your writing. By your African readers.', caption: 'Home page' },
      { src: '/work/stackr/how', widths: [800, 1600], ratio: 2880 / 1650, frame: 'browser', alt: 'How Stackr works in three steps: create, write and publish, get paid', caption: 'How it works' },
    ],
  },
  {
    slug: 'venmail',
    name: 'Venmail',
    years: '2024–2025',
    role: 'Senior software engineer',
    summary: 'Email, calendar, meetings and prospecting in one workspace.',
    feature: false,
    cover: {
      src: '/work/venmail/prospects',
      widths: [800, 1600],
      ratio: 2880 / 1650,
      alt: 'Venmail prospects list with a contact being added',
      frame: 'plain',
    },
    builtWith: 'React, TypeScript, Inertia.js, Laravel',
    links: [],
    sections: [
      {
        heading: 'The problem',
        body: [
          'Venmail was going through a company-wide rebrand. Its product, a large Laravel and React app, had grown into pages that were hard to change consistently.',
        ],
      },
      {
        heading: 'What I did',
        body: [
          'I led the frontend overhaul during the rebrand, moving the app to a modular component architecture on React and Inertia.js.',
          'I set the team’s frontend standards for component structure, naming, state and pull-request review, which made onboarding faster and the codebase more consistent.',
          'With one other engineer I built the mail suite: a rich-text composer, bulk actions and Gmail-style threads. I also built the calendar and booking system, and brought video meetings into the mail workflow.',
          'Every screen was built to the Figma designs across a product with many modules.',
        ],
      },
    ],
    gallery: [
      { src: '/work/venmail/cover', widths: [800, 1600], ratio: 2880 / 1800, frame: 'browser', alt: 'Venmail home page: Email that works as hard as you do', caption: 'Venmail’s public site' },
      { src: '/work/venmail/features', widths: [800, 1600], ratio: 2880 / 2900, frame: 'browser', alt: 'Venmail mail features: AI rewrites, task extraction, summaries and spam detection', caption: 'Mail features' },
    ],
  },
  {
    slug: 'feedxng',
    name: 'FeedXNG',
    years: '2022–2023',
    role: 'Fullstack engineer',
    summary: 'A food services marketplace, built end to end.',
    feature: false,
    coverText: 'Figma to Laravel to Nuxt, and three payment providers behind one checkout.',
    builtWith: 'Vue, Nuxt, Laravel, Heroku, AWS',
    links: [{ label: 'API source code', href: 'https://github.com/loluskii/feedxng-api' }],
    sections: [
      {
        heading: 'The problem',
        body: [
          'Food sellers and buyers needed one place to trade, with payment options that work in Nigeria, including buying on credit.',
        ],
      },
      {
        heading: 'What I did',
        body: [
          'I owned the product from design to deployment: the UX in Figma, the Laravel backend, and the Vue and Nuxt frontend.',
          'Checkout runs through one payment layer that handles Paystack, Flutterwave and Zilla’s credit, so each transaction type uses the same flow.',
          'Sellers and buyers each have their own dashboard. Sellers see sales, orders and analytics; buyers see their orders and spending.',
          'I set up and ran the infrastructure on Heroku and AWS, including deployment and environment configuration.',
        ],
      },
    ],
    gallery: [],
  },
];

export const experience = [
  { years: '2022–now', company: 'Sportsbook engine', role: 'Channels & Experience Lead, Senior Frontend Engineer', note: 'Frontend architecture for a white-label sportsbook across web, mobile, retail terminals and admin.' },
  { years: '2024–2025', company: 'Venmail', role: 'Senior Software Engineer', note: 'Frontend rebuild during a company-wide rebrand.' },
  { years: '2024', company: 'Talstrike', role: 'Contract Senior Frontend Engineer', note: 'Next.js build from Figma, with page loads 50% faster.' },
  { years: '2023', company: 'PressOne Africa', role: 'Web Engineer', note: 'Browser calling with SIP.js: transfers, availability and airtime.' },
  { years: '2022–2023', company: 'FeedXNG', role: 'Fullstack Engineer', note: 'A food marketplace, built end to end.' },
  { years: '2020–2022', company: 'LordwinGames Play', role: 'Frontend Engineer and UI/UX Designer', note: 'Design and code for a gaming platform with over 100,000 users.' },
];

export function srcset(img: Img) {
  return img.widths.map((w) => `${img.src}-${w}.webp ${w}w`).join(', ');
}

export function fallback(img: Img) {
  return `${img.src}-${img.widths[img.widths.length - 1]}.webp`;
}
