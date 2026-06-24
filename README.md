# NEXOVYTE | Full-Stack Legal Automation & Cloud Business Platform

This is the production-ready full-stack web application for **NEXOVYTE** (nexovyte.com) built using Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Prisma ORM. It integrates the flagship legal workflow automation platform, **LexFlow™**.

---

## 🚀 Technology Stack Overview

- **Frontend Core**: Next.js + TypeScript + Tailwind CSS (v4)
- **Animations**: Framer Motion (scroll reveals, sliding tab transitions, responsive canvas flow nets)
- **Database ORM**: Prisma ORM (v5) supporting PostgreSQL connections
- **Backend API Routes**: Route Handlers for contacts, job applications, newsletter signups, consultation bookings, and product inquiries
- **AWS Integrations**: Real-time simulated endpoints for Amazon Bedrock inference, Cognito authorization headers, and S3 file download loaders
- **Telemetry Charts**: High-fidelity `<canvas>` rendering bezier throughput curves

---

## 📂 Project Architecture

```bash
nexovyte-app/
├── prisma/
│   └── schema.prisma        # PostgreSQL database tables configuration
├── public/
│   ├── logo.svg             # Transparent high-contrast branding logo
│   └── favicon.ico          # Browser tab icon asset
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── booking/     # Meeting booking POST endpoint
│   │   │   ├── careers/     # Candidate application POST endpoint
│   │   │   ├── contact/     # Client contact submission POST endpoint
│   │   │   ├── newsletter/  # Newsletter subscription POST endpoint
│   │   │   └── product-inquiry/ # LexFlow demo request POST endpoint
│   │   ├── about/           # Corporate history & leadership
│   │   ├── services/        # 10 service profiles (AWS, SaaS, DevOps, legal)
│   │   ├── lexflow/         # Flagship product sandbox, pricing, and FAQ
│   │   ├── solutions/       # Custom audience strategies tabs
│   │   ├── industries/      # Compliance configurations grid (HIPAA, PCI-DSS)
│   │   ├── case-studies/    # Telemetry simulator & projects
│   │   ├── resources/       # SDK code snippets selector & S3 progress downloads
│   │   ├── contact/         # Contact forms & booking calendars
│   │   ├── thank-you/       # Submission confirmation landing page
│   │   ├── newsletter-confirm/ # Subscription confirmation landing page
│   │   ├── privacy/         # Privacy policy terms
│   │   ├── terms/           # Terms of service terms
│   │   ├── cookies/         # Cookie policy terms
│   │   ├── disclaimer/      # Legal disclaimers terms
│   │   ├── globals.css      # Custom midnight styling configurations
│   │   ├── layout.tsx       # Root layout skeleton with Navbar & Footer
│   │   ├── page.tsx         # Responsive corporate homepage
│   │   ├── sitemap.ts       # Dynamic search engine crawl sitemaps
│   │   └── robots.ts        # Direct indexing permissions controls
│   ├── components/
│   │   ├── Navbar.tsx       # Responsive header with SVG logo
│   │   ├── Footer.tsx       # Newsletter-hooked footer blocks
│   │   ├── BackgroundCanvas.tsx # Floating background neural mesh
│   │   └── AwsArchitecture.tsx # Interactive serverless AWS pipeline
│   └── lib/
│       └── db.ts            # Prisma initializer with memory fallbacks
├── .env.example             # Configuration variables blueprint
├── package.json
└── tsconfig.json
```

---

## 🛠️ Local Development & Setup

### 1. Prerequisite Installations
- Ensure **Node.js** (v18.x or above) is installed.
- Ensure **npm** (v10.x or above) is ready.

### 2. Install Project Dependencies
Run the installation command:
```bash
npm install
```

### 3. Generate Prisma Clients
Compile local database models mapping definitions:
```bash
npx prisma generate
```

### 4. Configure Environment Variables
Copy `.env.example` to `.env` and fill in your actual AWS Credentials and PostgreSQL database URL:
```bash
cp .env.example .env
```
*(Note: If `DATABASE_URL` is omitted, the application uses local memory-store database fallbacks automatically, ensuring it remains fully operational for staging and demo reviews).*

### 5. Launch Development Server
Boot the Next.js development server:
```bash
npm run dev
```
Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚡ Deployment to Vercel

This repository is optimized for instant deployment to Vercel:

1. **Connect GitHub**: Push the repository code to your GitHub account.
2. **Import Project**: Log into [Vercel Dashboard](https://vercel.com) and click **Add New > Project**, then import this repository.
3. **Set Environment Variables**: Copy keys from `.env.example` and paste them into Vercel's **Environment Variables** settings panel (particularly `DATABASE_URL` if connecting a live Neon/PostgreSQL database, alongside AWS Cognito credentials).
4. **Deploy**: Click **Deploy**. Vercel will automatically run `npm run build` and output a live SSL-secured production URL.
