# Career Roadmapper

A web application that converts a user's dream job into a personalized,
interactive skill roadmap.

---

## Problem Statement Number

1

---

## What it does

> **To be completed in later steps.**

Career Roadmapper will allow users to:
- Enter their dream job title.
- Receive a personalized, interactive skill roadmap as a visual graph.
- Explore skill dependencies and see how skills connect to one another.
- Mark skills they already know and track their learning progress.
- Discover the next recommended skill to learn based on their current knowledge.

---

## Done / Left / Plan

### ✅ Done (Step 1 — Project Setup)
- React + Vite (JavaScript) project initialized.
- `@xyflow/react` installed for the interactive graph (to be used in later steps).
- Project directory structure created (`src/components`, `src/pages`, `src/utils`, `src/styles`).
- `.gitignore` configured.
- `.env.example` created as a safe placeholder.
- Git repository initialized with initial commit.
- Development server verified working.

### 🔲 Left / Planned (Future Steps)
- Landing page UI for job title input.
- Roadmap generation logic (skill graph data).
- Interactive skill graph using `@xyflow/react`.
- Skill dependency exploration.
- "Mark as known" feature and progress tracking.
- Next-skill recommendation logic.
- Styling and responsive design.

---

## Architecture and why

> **To be completed in later steps.**

Planned architecture:
- **Frontend**: React + Vite — fast development, modern tooling, component-based UI.
- **Graph rendering**: `@xyflow/react` — purpose-built for interactive node graphs, well-suited for skill dependency visualization.
- **Styling**: Vanilla CSS — full control over design without framework overhead.
- **State**: React component state / `useState` for now; may expand if needed.

---

## What we added

> **To be completed in later steps as features are built.**

---

## How to run it

### Prerequisites
- Node.js v18 or later
- npm

### Setup

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd career-roadmapper

# 2. Install dependencies
npm install

# 3. Copy the environment example (no real values needed yet)
cp .env.example .env.local

# 4. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173** (or the next available port).

### Build for production

```bash
npm run build
npm run preview
```

---

## Tools and AI used

> **To be completed in later steps.**

- Vite — project scaffolding and dev server.
- `@xyflow/react` — interactive node graph library (planned for roadmap visualization).

---

## Who it is for

> **To be completed in later steps.**

Career Roadmapper is intended for:
- Students and self-learners who want a clear, visual path to their career goal.
- Career switchers who need to understand which skills to learn and in what order.
- Anyone who finds traditional career advice too vague and wants a structured, actionable roadmap.
