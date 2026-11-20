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
  /** Where the work was done, when it was for an employer. */
  org?: string;
  years?: string;
  role: string;
  /** What kind of work this was, shown as a short tag: design, frontend, backend. */
  kind: string;
  summary: string;
  /** Position on the home page (1–5). Projects without it appear only on /work. */
  home?: number;
  cover?: Img;
  /** Internal tools have no screenshots. Their cover is a statement and a few plain facts. */
  brief?: { line: string; notes: string[] };
  builtWith: string;
  links: { label: string; href: string }[];
  sections: Section[];
  gallery: Img[];
};

export const projects: Project[] = [
  {
    slug: 'venmail',
    name: 'Venmail',
    years: '2024–2025',
    role: 'Senior software engineer, frontend lead',
    kind: 'Web app and marketing site',
    summary: 'Rebuilding the front end of a mail, calendar and meetings product, and its marketing site, while the whole company rebranded.',
    home: 1,
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
          'Venmail puts email, calendar, video meetings and prospecting in one workspace. The product is a large Laravel and React app, and it had grown one page at a time. When the company rebranded, every screen had to change, and the code made that slow and easy to get wrong.',
        ],
      },
      {
        heading: 'My part',
        body: [
          'I led the frontend overhaul. With one other engineer I built the mail suite: the rich-text composer, bulk actions and threaded conversations. I built the calendar and booking system on my own, and brought video meetings into the mail flow so a meeting could start from a thread. I also built the public marketing site.',
        ],
      },
      {
        heading: 'Decisions',
        body: [
          'I moved the app to a modular component architecture on React and Inertia.js. Keeping Inertia meant Laravel stayed in charge of routing and data, so we could rebuild one module at a time and ship each one, instead of freezing the product for a rewrite.',
          'I wrote the team’s frontend standards: how components are structured and named, where state lives, and what a pull request has to show before it’s reviewed. A rebrand only holds if the next person to touch a screen builds it the same way.',
        ],
      },
      {
        heading: 'Result',
        body: [
          'The rebrand shipped across every module to the Figma designs. New engineers got productive faster, and changes to shared pieces like lists, menus and the composer now happen in one place.',
        ],
      },
    ],
    gallery: [
      { src: '/work/venmail/cover', widths: [800, 1600], ratio: 2880 / 1800, frame: 'browser', alt: 'Venmail home page: Email that works as hard as you do', caption: 'The marketing site, which I also built' },
      { src: '/work/venmail/features', widths: [800, 1600], ratio: 2880 / 2900, frame: 'browser', alt: 'Venmail mail features: AI rewrites, task extraction, summaries and spam detection', caption: 'Mail features' },
    ],
  },
  {
    slug: 'eazi-ai',
    name: 'Eazi AI',
    org: 'FCMB',
    role: 'Product design and frontend',
    kind: 'Web app, product design',
    summary: 'An assistant for bank staff that answers questions from the bank’s data and its own documents.',
    home: 2,
    brief: {
      line: 'Two AI agents behind one chat, and an interface that never makes you think about which one is answering.',
      notes: ['Chat with history', 'Files attached in the composer', 'Data and document modes'],
    },
    builtWith: 'JavaScript, ColdFusion (CFML), object storage, internal AI agent APIs',
    links: [],
    sections: [
      {
        heading: 'The problem',
        body: [
          'Staff who needed a figure had to ask the data team for it. Staff who needed an answer from a policy or a report had to find the document and read it. Eazi AI lets them ask instead.',
        ],
      },
      {
        heading: 'Context',
        body: [
          'There are two agents behind it. Eazi BI answers questions from the bank’s data. Eazi Documents answers from uploaded files and the internal knowledge base. Not everyone is allowed to query the data, and the two agents take files differently.',
        ],
      },
      {
        heading: 'My part',
        body: [
          'I designed the product and built the frontend: the chat, the two modes, file upload, conversation history and every state in between.',
        ],
      },
      {
        heading: 'Decisions',
        body: [
          'I used the patterns people already know from ChatGPT: a history list, a new-chat button, the composer at the bottom, and files attached in the composer rather than on a separate upload page. Bank staff shouldn’t have to learn a new interface to ask a question.',
          'The mode you see depends on your profile. Data team members get Eazi BI. Everyone else starts in Eazi Documents. Nobody is shown a mode they can’t use and then told no.',
          'An attached file is uploaded to storage first, then handed to the spreadsheet agent or the document agent depending on its type. The agent returns a session, and the conversation is tied to it. Each file shows its own progress, and you can’t ask about a file until it’s ready.',
        ],
      },
      {
        heading: 'How I checked it',
        body: [
          'I designed the states before the happy path: an empty conversation, a file uploading, a file being read, an answer arriving, an upload that fails, and an agent that doesn’t respond. Each one says what is happening and what to do next.',
        ],
      },
      {
        heading: 'Result',
        body: [
          'Staff can pull a figure or an answer themselves instead of raising a request and waiting. Every conversation is saved, so an answer can be found again later.',
        ],
      },
    ],
    gallery: [],
  },
  {
    slug: 'pitchside',
    name: 'Pitchside',
    years: '2026',
    role: 'Product, design and frontend',
    kind: 'Web app',
    summary: 'A live sportsbook and casino that runs entirely on a match simulation in the browser.',
    home: 4,
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
          'A sportsbook front end is hard to show anyone. Every screen depends on a live odds feed, which means a data provider, a betting backend and a wallet. Without them the screens are empty.',
        ],
      },
      {
        heading: 'Decisions',
        body: [
          'Pitchside runs on a match engine inside the app. Given the current time, it works out which matches exist, what minute each is in, the score, and a price for every market. Everyone who opens the site sees the same matches, and there is no server to keep running.',
          'The app talks to the engine the way it would talk to a real odds provider: REST paths for fixtures and bets, and MQTT-style topics for live prices. The betslip, the live-update layer and the data handling are production code, not demo code.',
          'When an outcome is effectively decided, its price shows a padlock instead of 125.20 next to 1.01. That is what a real bookmaker does, and it keeps the columns lined up.',
          'The betslip accepts price rises on its own and only stops the player when a price drops or a market is suspended. Live prices move all the time, and asking on every change made the slip unusable.',
        ],
      },
      {
        heading: 'How I checked it',
        body: [
          'There are 149 unit tests. Most cover the two places where a bug costs a player money or trust: the match engine (scheduling, no club in two live matches, settlement) and the betslip (price changes, combined bets, payout previews).',
          'Accessibility scores 100 in Lighthouse on every page tested. Getting there meant darkening two text colours that failed contrast, giving the banner dots 24px tap targets, labelling carousel links by their content, and allowing pinch zoom.',
        ],
      },
      {
        heading: 'Trade-offs',
        body: [
          'The home page scored 54 on a throttled mobile run. A CPU profile showed date formatting rebuilt for every row, CSS :has() selectors re-matching on every live update, and every match repriced every three seconds. Caching the formatters, swapping :has() for classes and publishing only real price changes brought sport and casino pages to 75–80. The home page still sits at 50–65 because the engine shares the main thread with React.',
          'Balances and tickets live in the browser, so clearing site data resets them. That was the price of having no server.',
        ],
      },
      {
        heading: 'What’s next',
        body: ['Moving the engine into a Web Worker, which takes it off the main thread and should fix the home page score.'],
      },
    ],
    gallery: [],
  },
  {
    slug: 'group-sign-in',
    name: 'Group sign-in',
    org: 'FCMB',
    role: 'Backend engineer',
    kind: 'Backend and identity',
    summary: 'One sign-in for staff across four companies in a banking group, each with its own identity provider.',
    brief: {
      line: 'Four identity providers, three load-balanced servers, and a session that follows you between them.',
      notes: ['Active Directory', 'Microsoft Entra ID', 'Okta', 'Internal pensions API'],
    },
    builtWith: 'ColdFusion (CFML), SQL Server, IIS, LDAP, OpenID Connect',
    links: [],
    sections: [
      {
        heading: 'The problem',
        body: [
          'Our team kept building data tools for the group’s subsidiaries: FCMB Pensions, FCMB UK and Rova. None of them had a data platform of their own, but only bank staff could sign in to ours. Every time someone from a subsidiary needed access, we created a temporary profile for them by hand.',
        ],
      },
      {
        heading: 'Context',
        body: [
          'Each company signs its staff in differently. The bank uses Active Directory, Pensions has its own login API, FCMB UK uses Microsoft Entra ID and Rova uses Okta. The platform had been on Windows authentication, and production runs on three servers behind a load balancer.',
        ],
      },
      {
        heading: 'My part',
        body: [
          'I rebuilt authentication as part of the application: the login flow, the four provider integrations, sessions that work across servers, and the profile builder that decides what each person can see.',
        ],
      },
      {
        heading: 'Decisions',
        body: [
          'You start by typing your work email. The domain decides the rest: bank and Pensions staff get a password field, UK and Rova staff are sent to Microsoft or Okta. There is one login page and no “choose your company” menu.',
          'Sessions are shared through the database rather than sticky sessions or Redis. Sticky sessions would have spread load unevenly across the servers, and Redis was one more piece of infrastructure to run. A session table in the SQL Server we already had, keyed by a cookie, lets any server pick up any session.',
          'Single sign-on bounces you out to Microsoft or Okta and back, and you may come back to a different server from the one you left. So the security values for that round trip are saved to the database before the redirect, and the callback can check them wherever it lands.',
          'Writing the session on every request would have added a database call to every page. Instead each session has a fingerprint. If nothing changed, nothing is written, apart from a timestamp touch every ten minutes. Most page loads make no session writes at all.',
          'Every provider feeds one profile builder, so permissions come from the same place no matter how you signed in. Someone who can sign in but has no profile on the platform is logged in and sees nothing, rather than being turned away with an error.',
        ],
      },
      {
        heading: 'Trade-offs',
        body: [
          'The full profile is rebuilt from source on each request. That costs a few queries per page, but a change to someone’s access takes effect on their next click, not their next login.',
        ],
      },
      {
        heading: 'How I checked it',
        body: [
          'The worst bug came from the load balancer. Its health check hit the app, got redirected to the login page, read the redirect as a failure and stopped sending traffic to servers that were fine. The health check route now skips authentication.',
          'I wrote up the whole system, from routing to the session table to logout for each provider, so the next engineer doesn’t have to read four callback files to understand it.',
        ],
      },
      {
        heading: 'Result',
        body: [
          'Staff across the group sign in with their own work accounts. Temporary profiles are gone, access follows each person’s profile, and signing out ends the session on every server at once.',
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
    kind: 'Web app and marketing site',
    summary: 'An expense tracker for people who spend in naira.',
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
        heading: 'Decisions',
        body: [
          'I set the scope for the first version: log, edit and delete expenses, move between months, and see totals, a daily average and a breakdown by category. Accounts, budgets and exports were left out on purpose.',
          'I directed the design and kept sending early versions back over type, size, colour and layout until it felt like something people would pay for. It ended up dark and editorial, with Syne for headings and one lime accent reserved for actions.',
          'Category bars are sized against the month’s total, not against the biggest category, so a bar shows its real share of what you spent and a quiet month doesn’t look like a heavy one.',
        ],
      },
      {
        heading: 'What’s next',
        body: [
          'There are no accounts yet, so the hosted demo keeps data on your device. Sign-in, budgets and recurring expenses come next, and the data model was set up so they can be added without a rewrite.',
        ],
      },
    ],
    gallery: [
      { src: '/work/spense/site', widths: [800, 1600], ratio: 1440 / 900, frame: 'browser', alt: 'Spense marketing site hero: Know exactly where your money goes', caption: 'The marketing site' },
      { src: '/work/spense/phone', widths: [400, 780], ratio: 780 / 1688, frame: 'phone', alt: 'Spense on a phone', caption: 'On a phone' },
    ],
  },

  {
    slug: 'channels',
    name: 'Channel reliability',
    org: 'FCMB',
    role: 'Fullstack engineer',
    kind: 'Fullstack, data',
    summary: 'How reliable each way of paying is right now: mobile, cards, POS and branches, in success rates and counts.',
    brief: {
      line: 'A 2% failure rate means nothing until you know whether it’s 2% of fifty or of two million.',
      notes: ['Mobile', 'Card', 'POS', 'Retail'],
    },
    builtWith: 'ColdFusion (CFML), SQL Server, JavaScript',
    links: [],
    sections: [
      {
        heading: 'The problem',
        body: [
          'Executives and operations leads need to know when a channel is failing customers, and how badly. That used to come from spreadsheets put together after the fact, which is too late to act on.',
        ],
      },
      {
        heading: 'My part',
        body: [
          'I built the API and the interface. The data analytics team wrote the queries; I turned them into endpoints, and the endpoints into a dashboard people could read at a glance.',
        ],
      },
      {
        heading: 'Decisions',
        body: [
          'Every channel shows its success and failure rate next to the raw counts. A rate on its own hides scale, and a count on its own hides proportion. Executives read the first, operations teams the second.',
          'The view answers “how are we doing at this moment?” first, and lets you move to a wider period from there.',
          'Every table can be exported. Plenty of people still report upwards in spreadsheets, and a dashboard that won’t give them the numbers ends up screenshotted.',
        ],
      },
      {
        heading: 'Result',
        body: [
          'Channel health went from a report someone compiled to a live view anyone with access can open, built on logged data instead of hand-edited sheets.',
        ],
      },
    ],
    gallery: [],
  },
  // ── More work ─────────────────────────────────────────────
  {
    slug: 'campaigns',
    name: 'Campaign manager',
    org: 'FCMB',
    role: 'Fullstack engineer',
    kind: 'Fullstack',
    summary: 'SMS and email campaigns for the bank’s CRM, with audiences written in SQL and an approval step before anything sends.',
    builtWith: 'ColdFusion (CFML), SQL Server, JavaScript',
    links: [],
    sections: [
      {
        heading: 'The problem',
        body: [
          'Birthday messages, account anniversaries and welcome texts for new customers were set up and sent by hand. There was no record of who got what, and nothing stopped the same customer getting the same message twice.',
        ],
      },
      {
        heading: 'My part',
        body: ['I built it front to back: the campaign builder, the scheduler, the approval flow and the execution logs.'],
      },
      {
        heading: 'Decisions',
        body: [
          'Audiences are SQL queries, because the people who define them already think in SQL. “Customers whose account opened this week last year” is one query, and it stays correct every time the campaign runs.',
          'A campaign can carry up to three SMS messages with customer details filled in, and the editor counts characters against the SMS limit as you type, including what personalisation will add.',
          'Nothing goes to customers on one person’s say-so. A campaign manager submits, an admin approves or rejects, and the creator gets an email either way. Before approval, a campaign can be sent to staff as a test.',
          'Campaigns run daily, weekly, monthly, quarterly or on chosen dates, and can renew on their own. Each run takes a lock, so a slow run and the next scheduled one can never send at the same time, and duplicate recipients are removed before anything goes out.',
        ],
      },
      {
        heading: 'Result',
        body: ['Recurring campaigns run on schedule without anyone sending them, and every run is logged with who it went to.'],
      },
    ],
    gallery: [],
  },
  {
    slug: 'customer-360',
    name: 'Customer 360',
    org: 'FCMB',
    role: 'Fullstack engineer',
    kind: 'Fullstack',
    summary: 'One screen for the service desk: who the customer is, what has happened to them, and how long they’ve been waiting.',
    builtWith: 'ColdFusion (CFML), SQL Server, JavaScript',
    links: [],
    sections: [
      {
        heading: 'The problem',
        body: [
          'When a customer called with a problem, the desk had to look them up in several places before they could help, and response times were tracked in spreadsheets, if at all.',
        ],
      },
      {
        heading: 'My part',
        body: ['I built the backend and the interface the service desk uses.'],
      },
      {
        heading: 'Decisions',
        body: [
          'Search comes first. An agent finds the customer, then sees their details, accounts and recent activity on one screen, in the order they usually need them on a call.',
          'Each issue is logged against the customer with a clock running from the moment it’s opened. Response time is recorded by the system, not reported by the agent.',
        ],
      },
      {
        heading: 'Result',
        body: ['Agents answer from one screen, and the desk can see how long customers actually wait instead of estimating it.'],
      },
    ],
    gallery: [],
  },
  {
    slug: 'kpi',
    name: 'KPI and appraisals',
    org: 'FCMB',
    role: 'Fullstack engineer',
    kind: 'Fullstack',
    summary: 'Staff targets, progress and appraisals in one system instead of a spreadsheet per team.',
    builtWith: 'ColdFusion (CFML), SQL Server, JavaScript',
    links: [],
    sections: [
      {
        heading: 'The problem',
        body: [
          'Targets were set in spreadsheets, progress was tracked in other spreadsheets, and at appraisal time someone had to reconcile them. Executives and operations leads had no single view of how teams were doing.',
        ],
      },
      {
        heading: 'My part',
        body: ['I built the backend and the interface for setting targets, tracking them and running appraisals.'],
      },
      {
        heading: 'Decisions',
        body: [
          'Each person’s KPIs carry a target and a weight, so an appraisal score reflects what mattered most in that role rather than an average of everything.',
          'Progress comes from the bank’s data wherever it can, so a score is based on what happened, not on what someone typed in.',
          'Appraisal is a flow, not a form. Staff assess themselves, their manager reviews, and each step is recorded, so a final score can be traced back to the inputs behind it.',
        ],
      },
      {
        heading: 'Result',
        body: ['Appraisals run in one system with a full record of every step, and managers see progress during the year instead of only at the end of it.'],
      },
    ],
    gallery: [],
  },
  {
    slug: 'stackr',
    name: 'Stackr',
    years: '2026',
    role: 'Founder, product and design',
    kind: 'Marketing site and product design',
    summary: 'A paid-newsletter platform for African writers who can’t use Stripe.',
    home: 3,
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
        heading: 'Decisions',
        body: [
          'Stackr lets a writer start a paid newsletter, collect subscriptions in naira, cedis or dollars through Paystack with Flutterwave as a fallback, and get paid into a local bank account.',
          'I wrote the product spec and kept the first version narrow: write, publish, collect, get paid. The brand is warm cream and amber with Fraunces, closer to a magazine than a dashboard.',
        ],
      },
      {
        heading: 'Where it stands',
        body: ['The marketing site and the product design are done. The app is in development.'],
      },
    ],
    gallery: [
      { src: '/work/stackr/home', widths: [800, 1600], ratio: 1440 / 900, frame: 'browser', alt: 'Stackr home page: Get paid for your writing. By your African readers.', caption: 'Home page' },
      { src: '/work/stackr/how', widths: [800, 1600], ratio: 2880 / 1650, frame: 'browser', alt: 'How Stackr works in three steps: create, write and publish, get paid', caption: 'How it works' },
    ],
  },
  {
    slug: 'feedxng',
    name: 'FeedXNG',
    years: '2022–2023',
    role: 'Fullstack engineer',
    kind: 'Design to deployment',
    summary: 'A food marketplace I designed, built and ran, from Figma to the servers.',
    builtWith: 'Vue, Nuxt, Laravel, Heroku, AWS',
    links: [{ label: 'API source code', href: 'https://github.com/loluskii/feedxng-api' }],
    sections: [
      {
        heading: 'The problem',
        body: ['Food sellers and buyers needed one place to trade, with ways to pay that work in Nigeria, including buying on credit.'],
      },
      {
        heading: 'My part',
        body: ['All of it: the UX in Figma, the Laravel backend, the Vue and Nuxt frontend, and the infrastructure on Heroku and AWS.'],
      },
      {
        heading: 'Decisions',
        body: [
          'Checkout runs through one payment layer that handles Paystack, Flutterwave and Zilla’s buy-now-pay-later credit, so every kind of payment goes through the same flow and the same order states.',
          'Sellers and buyers get separate dashboards. Sellers see sales, orders and analytics; buyers see their orders and what they’ve spent.',
        ],
      },
    ],
    gallery: [],
  },
  {
    slug: 'simzsco',
    name: 'Simzsco Advisory',
    years: '2026',
    role: 'Design direction',
    kind: 'Marketing site',
    summary: 'Website for a founder-led firm that advises on strategy, creative work and partnerships.',
    home: 5,
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
          'The firm’s work is broad: strategy, creative direction and partnerships. It needed a site that explains that plainly and shows past work without naming clients who haven’t agreed to it.',
        ],
      },
      {
        heading: 'Decisions',
        body: [
          'Warm paper tones, a heavy serif for headlines, and three stacked note cards on the opening screen. The cards follow how the firm takes on a brief: an honest read of the situation, then a route, then evidence.',
          'Past work is described by outcome and context instead of client name, so the firm can show what it has done without breaking anyone’s confidence.',
        ],
      },
    ],
    gallery: [
      { src: '/work/simzsco/phone', widths: [400, 750], ratio: 750 / 1624, frame: 'phone', alt: 'Simzsco Advisory on a phone', caption: 'On a phone' },
    ],
  },
];

/** Short write-ups of single problems, each linking to the case study it comes from. */
export const notes = [
  {
    title: 'Sharing sessions across three servers without Redis',
    body: 'A session table in the database we already had, a fingerprint so unchanged sessions are never rewritten, and single sign-on state saved before the redirect so it survives landing on another server.',
    slug: 'group-sign-in',
  },
  {
    title: 'Why a betslip should accept price rises without asking',
    body: 'Live prices change every few seconds. Stopping the player on every change trains them to tap “accept” blindly, so the slip only interrupts when the change is bad for them.',
    slug: 'pitchside',
  },
  {
    title: 'Making sure a campaign can’t send twice',
    body: 'Each run takes a lock before it starts, and recipients are de-duplicated before anything goes out. A slow run and the next scheduled one can never overlap.',
    slug: 'campaigns',
  },
  {
    title: 'Percentages lie without counts',
    body: 'A channel dashboard that shows only failure rates makes a quiet hour look like an outage. Rates and counts sit side by side, for the executive and the operations lead.',
    slug: 'channels',
  },
];

export const experience = [
  { years: '2021–2026', company: 'FCMB', role: 'Software Engineer, Data Science team', note: 'Internal tools for a banking group, front to back. Led the data platforms team for a period.' },
  { years: '2022–now', company: 'Sportsbook engine', role: 'Channels & Experience Lead, Senior Frontend Engineer', note: 'Frontend architecture for a white-label sportsbook. Load times down 55%; new clients launched in days instead of weeks.' },
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
