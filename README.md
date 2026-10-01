# أمان (Amān) — Technology & Safety Awareness

> **"Understand technology. Stay safer."**  
> An educational, human-first public platform helping everyday people understand digital systems, recognize online threats, and make confident, secure decisions.

---

## 📖 About the Brand: أمان (Amān)

The Arabic word **أمان (Amān)** signifies *safety, security, protection, peace, and serenity*. 

In an era where technology evolves faster than public education, millions of everyday individuals—students, families, merchants, freelancers, small business owners, and seniors—rely on smartphones, digital banking, instant messaging, and cloud services every day without ever being taught how modern digital risks actually operate or how to defend themselves.

**أمان** was founded to close this knowledge gap. It exists to replace fear, panic, and overwhelming technical jargon with clarity, dignity, and calm, practical capability.

---

## 🧭 Core Editorial Principles

Every guide, scam bulletin, checklist, and response plan published on أمان adheres strictly to five foundational standards:

1. **Calm & Evidence-Based (Zero Fearmongering)**  
   We reject apocalyptic rhetoric, breathless headlines (*"Hackers are targeting everyone!"*), and shock tactics. We explain the structural mechanisms behind attacks so readers can make rational, level-headed decisions.

2. **Plain Human Language**  
   We eliminate barrier-entry technical jargon. When a technical concept is necessary (e.g., encryption, phishing, two-factor authentication), we define it using intuitive, real-world analogies.

3. **Actionable & Practical**  
   Every piece of content answers the reader's immediate question: *"What should I actually do right now?"* We prioritize numbered triage steps, interactive checklists, and concrete verification routines.

4. **Grounded in Real-World Context**  
   Our guidance reflects genuine threat environments—such as fake bank credit alert SMS, WhatsApp 6-digit hijacking, SIM swapping, and point-of-sale skimming—alongside global digital security standards.

5. **Verified & Authoritative Sourcing**  
   Materials are researched and cross-referenced with documentation from leading standards bodies, regulators, and platform providers:
   - **NIST** (National Institute of Standards and Technology) Digital Identity Guidelines
   - **CISA** (Cybersecurity & Infrastructure Security Agency) Consumer Advisories
   - **NITDA** (National Information Technology Development Agency)
   - **CBN** (Central Bank of Nigeria) Consumer Protection & Electronic Payments Directives
   - **NCC** (Nigerian Communications Commission) Consumer Directives
   - Official platform security protocols from Google, Apple, and WhatsApp

---

## 🌐 Website Sections & Features

The platform is architected as an accessible, responsive, single-page application (SPA) organized into focused operational hubs:

### 1. 🏠 Home (`/`)
- **Brand Hero**: Clear statement of purpose and quick-start actions.
- **Interactive Risk Decision Scenario**: Hands-on simulated micro-decisions (e.g., responding to unexpected delivery SMS or suspicious attachments) with immediate explanatory feedback.
- **Urgent Advisory Ticker**: Highlighting the latest confirmed scam trends.
- **Interactive Quick-Checklist**: Five-minute digital health audit with immediate progress tracking.

### 2. 📚 Learn (`/learn`)
- Educational explainers breaking down how modern digital concepts work:
  - *Passphrases vs. Passwords*
  - *How Phishing Mechanisms Exploit Emotion & Urgency*
  - *Two-Factor Authentication: Authenticator Apps vs. SMS*
  - *Public Wi-Fi & VPN Realities*
  - *App Permissions & Data Harvesting*

### 3. 🛡️ Stay Safe (`/stay-safe`)
- Preventative routines and proactive guidance organized by life domain:
  - **Account Security**: Password managers, 2FA setup, recovery codes.
  - **Financial Safety**: Mobile money verification, USSD security, POS awareness.
  - **Device Care**: Software updates, lock screen configuration, backup hygiene.
  - **Interactive Checklists**: Saveable, step-by-step security audits for home, work, and travel.

### 4. 🚨 Scam Alerts Desk (`/scam-alerts`)
- Up-to-date documentation on active deceptive tactics, including:
  - *Fake Bank Credit Alert SMS (Spoofed Alpha-numeric sender IDs)*
  - *WhatsApp 6-Digit Verification Code Hijacking*
  - *Job & Task Advance-Fee Deceptions*
  - *Social Engineering & Impersonation*
- Each alert details: What is happening, How it works, Red flag indicators, What the scammer wants, Exactly what to do (and what **not** to do), and Official reporting channels.

### 5. 🆘 What To Do (Incident Response) (`/what-to-do`)
- High-priority, stress-reducing triage steps for urgent situations:
  - *"I clicked a suspicious link"*
  - *"My social media or messaging account was taken over"*
  - *"I transferred funds to a fraudulent party"*
  - *"My phone was lost or stolen"*
- Designed with clear visual hierarchy, chronological action steps, and explicit "Do Not Panic" instructions.

### 6. 📖 Resources & Glossary (`/resources`)
- **Digital Safety Glossary**: Searchable, plain-English definitions with everyday analogies.
- **Helpline Directory**: Verified contact points for emergency fraud desks, national reporting agencies, and cybercrime hotlines.

### 7. 🔍 Universal Search
- Real-time instant search indexed across all articles, alerts, checklists, emergency guides, and glossary terms.

---

## 🛠️ Technology Stack

- **Core Framework**: React 19 + TypeScript
- **Build System**: Vite 8
- **Styling**: Tailwind CSS v4
- **Icons**: [Lucide React](https://lucide.dev/)
- **Micro-Animations**: Motion
- **Architecture**: Client-side single-page app (SPA) with zero tracking scripts, no third-party data profiling, and defensive isolation against injected browser extension errors.

---

## 📂 Project Directory Structure

```text
├── index.html                   # HTML entry point with early extension guard script
├── metadata.json                # AI Studio application metadata & configuration
├── package.json                 # Project dependencies and build scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration with Tailwind CSS plugin
├── public/                      # Static assets and favicons
└── src/
    ├── main.tsx                 # React entry point with ErrorBoundary and safety handlers
    ├── App.tsx                  # Main router and modal state coordinator
    ├── index.css                # Tailwind CSS global styles
    ├── types/                   # Shared TypeScript definitions (Article, ScamAlert, etc.)
    ├── data/                    # Structured static educational datasets
    │   ├── articles.ts          # Educational guides and explainers
    │   ├── scamAlerts.ts        # Threat and deception alerts
    │   ├── emergencyGuides.ts   # Incident response walkthroughs
    │   ├── checklists.ts        # Actionable security audits
    │   ├── glossary.ts          # Technology terms with analogies
    │   └── scenarios.ts         # Interactive decision-making exercises
    ├── components/              # Shared UI components
    │   ├── Header.tsx           # Navigation bar with responsive mobile menu
    │   ├── Footer.tsx           # Brand footer, links, and official disclaimer
    │   ├── ArticleModal.tsx     # Full reading view modal with copy link & print
    │   └── SearchModal.tsx      # Instant search dialog
    └── views/                   # Section view containers
        ├── HomeView.tsx         # Landing page view
        ├── LearnView.tsx        # Educational repository view
        ├── StaySafeView.tsx     # Preventative routines & checklists view
        ├── ScamAlertsView.tsx   # Threat intelligence bulletin view
        ├── WhatToDoView.tsx     # Emergency response triage view
        ├── ResourcesView.tsx    # Glossary & hotlines directory view
        ├── AboutView.tsx        # Brand mission & editorial charter view
        ├── ContactView.tsx      # Community feedback and reporting view
        └── LegalView.tsx        # Privacy policy, terms, and cookie disclosure
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install
```

### Running Locally
```bash
# Start local development server on port 3000
npm run dev
```

The app will be available at `http://localhost:3000`.

### Type-Checking & Linting
```bash
# Run TypeScript compilation check
npm run lint
```

### Production Build
```bash
# Build optimized bundle for production
npm run build
```

---

## ⚖️ Legal & Incident Response Disclaimer

*The educational content provided on **أمان (Amān)** is published solely for public general awareness and digital literacy. It does not constitute certified legal counsel, financial advisory, or licensed emergency cyber incident response. If you are experiencing active financial extortion, ongoing identity theft, or physical security threats, immediately contact your financial institution's emergency fraud department and relevant local law enforcement authorities.*
