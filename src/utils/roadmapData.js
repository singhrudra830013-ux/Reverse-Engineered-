/**
 * roadmapData.js
 *
 * Static sample roadmap data for all supported careers.
 *
 * IMPORTANT: These are curated sample templates, not AI-generated or
 * personalised advice. They are clearly labelled as such in the UI.
 *
 * Layout convention:
 *   x = horizontal lane (spread siblings side by side)
 *   y = vertical tier   (each tier is ~130px apart, top → bottom = earlier → later)
 *
 * To add a new career: add a new key to ROADMAP_DATA below and define
 * its nodes + edges arrays. The key must be the career name in all-lowercase.
 */

// ─── 1. SOFTWARE ENGINEER ────────────────────────────────────────────────────

const SWE_NODES = [
  { id: 'swe-prog',     position: { x: 300, y: 0   }, data: { label: 'Programming Fundamentals' },      type: 'skillNode' },
  { id: 'swe-java',     position: { x: 300, y: 130  }, data: { label: 'Java Basics' },                  type: 'skillNode' },
  { id: 'swe-oop',      position: { x: 300, y: 260  }, data: { label: 'Object-Oriented Programming' },  type: 'skillNode' },
  { id: 'swe-dsa',      position: { x: 300, y: 390  }, data: { label: 'Data Structures & Algorithms' }, type: 'skillNode' },
  { id: 'swe-dbms',     position: { x: 80,  y: 520  }, data: { label: 'DBMS' },                         type: 'skillNode' },
  { id: 'swe-os',       position: { x: 300, y: 520  }, data: { label: 'Operating Systems' },             type: 'skillNode' },
  { id: 'swe-networks', position: { x: 520, y: 520  }, data: { label: 'Computer Networks' },             type: 'skillNode' },
  { id: 'swe-git',      position: { x: 300, y: 650  }, data: { label: 'Projects & Git' },                type: 'skillNode' },
];

const SWE_EDGES = [
  { id: 'swe-e1', source: 'swe-prog',     target: 'swe-java' },
  { id: 'swe-e2', source: 'swe-java',     target: 'swe-oop' },
  { id: 'swe-e3', source: 'swe-oop',      target: 'swe-dsa' },
  { id: 'swe-e4', source: 'swe-dsa',      target: 'swe-dbms' },
  { id: 'swe-e5', source: 'swe-dsa',      target: 'swe-os' },
  { id: 'swe-e6', source: 'swe-dsa',      target: 'swe-networks' },
  { id: 'swe-e7', source: 'swe-dbms',     target: 'swe-git' },
  { id: 'swe-e8', source: 'swe-os',       target: 'swe-git' },
  { id: 'swe-e9', source: 'swe-networks', target: 'swe-git' },
];

// ─── 2. DATA SCIENTIST ───────────────────────────────────────────────────────

const DS_NODES = [
  { id: 'ds-math',    position: { x: 150, y: 0   }, data: { label: 'Mathematics & Statistics' },    type: 'skillNode' },
  { id: 'ds-python',  position: { x: 450, y: 0   }, data: { label: 'Python Programming' },          type: 'skillNode' },
  { id: 'ds-pandas',  position: { x: 150, y: 130 }, data: { label: 'Pandas & NumPy' },              type: 'skillNode' },
  { id: 'ds-viz',     position: { x: 450, y: 130 }, data: { label: 'Data Visualisation' },          type: 'skillNode' },
  { id: 'ds-sql',     position: { x: 300, y: 260 }, data: { label: 'SQL & Databases' },             type: 'skillNode' },
  { id: 'ds-ml',      position: { x: 300, y: 390 }, data: { label: 'Machine Learning Basics' },     type: 'skillNode' },
  { id: 'ds-feature', position: { x: 100, y: 520 }, data: { label: 'Feature Engineering' },         type: 'skillNode' },
  { id: 'ds-eval',    position: { x: 300, y: 520 }, data: { label: 'Model Evaluation & Tuning' },   type: 'skillNode' },
  { id: 'ds-deep',    position: { x: 500, y: 520 }, data: { label: 'Deep Learning Fundamentals' },  type: 'skillNode' },
  { id: 'ds-project', position: { x: 300, y: 650 }, data: { label: 'End-to-End DS Projects' },      type: 'skillNode' },
];

const DS_EDGES = [
  { id: 'ds-e1',  source: 'ds-math',    target: 'ds-pandas' },
  { id: 'ds-e2',  source: 'ds-python',  target: 'ds-pandas' },
  { id: 'ds-e3',  source: 'ds-python',  target: 'ds-viz' },
  { id: 'ds-e4',  source: 'ds-pandas',  target: 'ds-sql' },
  { id: 'ds-e5',  source: 'ds-viz',     target: 'ds-sql' },
  { id: 'ds-e6',  source: 'ds-sql',     target: 'ds-ml' },
  { id: 'ds-e7',  source: 'ds-math',    target: 'ds-ml' },
  { id: 'ds-e8',  source: 'ds-ml',      target: 'ds-feature' },
  { id: 'ds-e9',  source: 'ds-ml',      target: 'ds-eval' },
  { id: 'ds-e10', source: 'ds-ml',      target: 'ds-deep' },
  { id: 'ds-e11', source: 'ds-feature', target: 'ds-project' },
  { id: 'ds-e12', source: 'ds-eval',    target: 'ds-project' },
  { id: 'ds-e13', source: 'ds-deep',    target: 'ds-project' },
];

// ─── 3. AI / ML ENGINEER ────────────────────────────────────────────────────

const AIML_NODES = [
  { id: 'ai-python',     position: { x: 150, y: 0   }, data: { label: 'Python Programming' },           type: 'skillNode' },
  { id: 'ai-math',       position: { x: 450, y: 0   }, data: { label: 'Linear Algebra & Calculus' },    type: 'skillNode' },
  { id: 'ai-ml',         position: { x: 300, y: 130 }, data: { label: 'Machine Learning Fundamentals' },type: 'skillNode' },
  { id: 'ai-dl',         position: { x: 300, y: 260 }, data: { label: 'Deep Learning & Neural Nets' },  type: 'skillNode' },
  { id: 'ai-cv',         position: { x: 80,  y: 390 }, data: { label: 'Computer Vision' },              type: 'skillNode' },
  { id: 'ai-nlp',        position: { x: 300, y: 390 }, data: { label: 'NLP & Text Processing' },        type: 'skillNode' },
  { id: 'ai-frameworks', position: { x: 520, y: 390 }, data: { label: 'ML Frameworks (PyTorch/TF)' },   type: 'skillNode' },
  { id: 'ai-mlops',      position: { x: 150, y: 520 }, data: { label: 'MLOps & Model Deployment' },     type: 'skillNode' },
  { id: 'ai-eval',       position: { x: 450, y: 520 }, data: { label: 'Evaluation & Experimentation' }, type: 'skillNode' },
  { id: 'ai-project',    position: { x: 300, y: 650 }, data: { label: 'AI Research / Product Build' },  type: 'skillNode' },
];

const AIML_EDGES = [
  { id: 'ai-e1',  source: 'ai-python',     target: 'ai-ml' },
  { id: 'ai-e2',  source: 'ai-math',       target: 'ai-ml' },
  { id: 'ai-e3',  source: 'ai-ml',         target: 'ai-dl' },
  { id: 'ai-e4',  source: 'ai-dl',         target: 'ai-cv' },
  { id: 'ai-e5',  source: 'ai-dl',         target: 'ai-nlp' },
  { id: 'ai-e6',  source: 'ai-dl',         target: 'ai-frameworks' },
  { id: 'ai-e7',  source: 'ai-cv',         target: 'ai-mlops' },
  { id: 'ai-e8',  source: 'ai-nlp',        target: 'ai-mlops' },
  { id: 'ai-e9',  source: 'ai-frameworks', target: 'ai-eval' },
  { id: 'ai-e10', source: 'ai-mlops',      target: 'ai-project' },
  { id: 'ai-e11', source: 'ai-eval',       target: 'ai-project' },
];

// ─── 4. WEB DEVELOPER ───────────────────────────────────────────────────────

const WEB_NODES = [
  { id: 'web-html',     position: { x: 150, y: 0   }, data: { label: 'HTML & Semantic Markup' },    type: 'skillNode' },
  { id: 'web-css',      position: { x: 450, y: 0   }, data: { label: 'CSS & Responsive Design' },   type: 'skillNode' },
  { id: 'web-js',       position: { x: 300, y: 130 }, data: { label: 'JavaScript Fundamentals' },   type: 'skillNode' },
  { id: 'web-dom',      position: { x: 300, y: 260 }, data: { label: 'DOM & Browser APIs' },        type: 'skillNode' },
  { id: 'web-react',    position: { x: 150, y: 390 }, data: { label: 'React (or Vue / Angular)' },  type: 'skillNode' },
  { id: 'web-git',      position: { x: 450, y: 390 }, data: { label: 'Git & Version Control' },     type: 'skillNode' },
  { id: 'web-node',     position: { x: 150, y: 520 }, data: { label: 'Node.js & REST APIs' },       type: 'skillNode' },
  { id: 'web-db',       position: { x: 450, y: 520 }, data: { label: 'Databases (SQL / NoSQL)' },   type: 'skillNode' },
  { id: 'web-deploy',   position: { x: 300, y: 650 }, data: { label: 'Deployment & DevOps Basics' },type: 'skillNode' },
];

const WEB_EDGES = [
  { id: 'web-e1', source: 'web-html',   target: 'web-js' },
  { id: 'web-e2', source: 'web-css',    target: 'web-js' },
  { id: 'web-e3', source: 'web-js',     target: 'web-dom' },
  { id: 'web-e4', source: 'web-dom',    target: 'web-react' },
  { id: 'web-e5', source: 'web-dom',    target: 'web-git' },
  { id: 'web-e6', source: 'web-react',  target: 'web-node' },
  { id: 'web-e7', source: 'web-git',    target: 'web-node' },
  { id: 'web-e8', source: 'web-react',  target: 'web-db' },
  { id: 'web-e9', source: 'web-node',   target: 'web-deploy' },
  { id: 'web-e10',source: 'web-db',     target: 'web-deploy' },
];

// ─── 5. UX DESIGNER ─────────────────────────────────────────────────────────

const UX_NODES = [
  { id: 'ux-principles', position: { x: 300, y: 0   }, data: { label: 'Design Principles & Theory' },   type: 'skillNode' },
  { id: 'ux-research',   position: { x: 100, y: 130 }, data: { label: 'User Research Methods' },        type: 'skillNode' },
  { id: 'ux-ia',         position: { x: 400, y: 130 }, data: { label: 'Information Architecture' },      type: 'skillNode' },
  { id: 'ux-wire',       position: { x: 100, y: 260 }, data: { label: 'Wireframing & Sketching' },      type: 'skillNode' },
  { id: 'ux-proto',      position: { x: 400, y: 260 }, data: { label: 'Prototyping (Figma)' },           type: 'skillNode' },
  { id: 'ux-visual',     position: { x: 250, y: 390 }, data: { label: 'Visual Design & Typography' },   type: 'skillNode' },
  { id: 'ux-test',       position: { x: 250, y: 520 }, data: { label: 'Usability Testing' },             type: 'skillNode' },
  { id: 'ux-system',     position: { x: 100, y: 650 }, data: { label: 'Design Systems' },               type: 'skillNode' },
  { id: 'ux-handoff',    position: { x: 400, y: 650 }, data: { label: 'Developer Handoff' },             type: 'skillNode' },
];

const UX_EDGES = [
  { id: 'ux-e1', source: 'ux-principles', target: 'ux-research' },
  { id: 'ux-e2', source: 'ux-principles', target: 'ux-ia' },
  { id: 'ux-e3', source: 'ux-research',   target: 'ux-wire' },
  { id: 'ux-e4', source: 'ux-ia',         target: 'ux-proto' },
  { id: 'ux-e5', source: 'ux-wire',       target: 'ux-visual' },
  { id: 'ux-e6', source: 'ux-proto',      target: 'ux-visual' },
  { id: 'ux-e7', source: 'ux-visual',     target: 'ux-test' },
  { id: 'ux-e8', source: 'ux-test',       target: 'ux-system' },
  { id: 'ux-e9', source: 'ux-test',       target: 'ux-handoff' },
];

// ─── 6. PRODUCT MANAGER ─────────────────────────────────────────────────────

const PM_NODES = [
  { id: 'pm-market',    position: { x: 150, y: 0   }, data: { label: 'Market & User Research' },      type: 'skillNode' },
  { id: 'pm-strategy',  position: { x: 450, y: 0   }, data: { label: 'Product Strategy & Vision' },   type: 'skillNode' },
  { id: 'pm-roadmap',   position: { x: 300, y: 130 }, data: { label: 'Roadmapping & Prioritisation' },type: 'skillNode' },
  { id: 'pm-agile',     position: { x: 100, y: 260 }, data: { label: 'Agile & Scrum' },               type: 'skillNode' },
  { id: 'pm-spec',      position: { x: 400, y: 260 }, data: { label: 'Writing PRDs & User Stories' }, type: 'skillNode' },
  { id: 'pm-ux',        position: { x: 100, y: 390 }, data: { label: 'UX Collaboration' },            type: 'skillNode' },
  { id: 'pm-data',      position: { x: 400, y: 390 }, data: { label: 'Data-Driven Decision Making' }, type: 'skillNode' },
  { id: 'pm-launch',    position: { x: 150, y: 520 }, data: { label: 'Go-to-Market & Launch' },       type: 'skillNode' },
  { id: 'pm-metrics',   position: { x: 450, y: 520 }, data: { label: 'Metrics & OKRs' },              type: 'skillNode' },
  { id: 'pm-leadership',position: { x: 300, y: 650 }, data: { label: 'Stakeholder & Team Leadership' },type: 'skillNode' },
];

const PM_EDGES = [
  { id: 'pm-e1',  source: 'pm-market',   target: 'pm-roadmap' },
  { id: 'pm-e2',  source: 'pm-strategy', target: 'pm-roadmap' },
  { id: 'pm-e3',  source: 'pm-roadmap',  target: 'pm-agile' },
  { id: 'pm-e4',  source: 'pm-roadmap',  target: 'pm-spec' },
  { id: 'pm-e5',  source: 'pm-agile',    target: 'pm-ux' },
  { id: 'pm-e6',  source: 'pm-spec',     target: 'pm-data' },
  { id: 'pm-e7',  source: 'pm-ux',       target: 'pm-launch' },
  { id: 'pm-e8',  source: 'pm-data',     target: 'pm-metrics' },
  { id: 'pm-e9',  source: 'pm-launch',   target: 'pm-leadership' },
  { id: 'pm-e10', source: 'pm-metrics',  target: 'pm-leadership' },
];

// ─── REGISTRY ────────────────────────────────────────────────────────────────

/**
 * Map of normalised career name → { nodes, edges }.
 * Keys are lowercase + trimmed so matching is case-insensitive and
 * ignores accidental leading/trailing spaces.
 *
 * Supported careers (matching the suggestion chips in Hero.jsx):
 *   software engineer | data scientist | ai/ml engineer
 *   web developer     | ux designer    | product manager
 */
export const ROADMAP_DATA = {
  'software engineer': { nodes: SWE_NODES,  edges: SWE_EDGES  },
  'data scientist':    { nodes: DS_NODES,   edges: DS_EDGES   },
  'ai/ml engineer':    { nodes: AIML_NODES, edges: AIML_EDGES },
  'web developer':     { nodes: WEB_NODES,  edges: WEB_EDGES  },
  'ux designer':       { nodes: UX_NODES,   edges: UX_EDGES   },
  'product manager':   { nodes: PM_NODES,   edges: PM_EDGES   },
};

/**
 * Look up a sample roadmap for the given career string.
 * Matching is case-insensitive and trims surrounding whitespace.
 * Returns null if no sample exists — the UI shows an honest message in that case.
 *
 * @param {string} career
 * @returns {{ nodes: object[], edges: object[] } | null}
 */
export function getRoadmapForCareer(career) {
  const key = career.trim().toLowerCase();
  return ROADMAP_DATA[key] ?? null;
}

/**
 * Build the initial skill-status map for a set of nodes.
 * Every skill starts as 'not-started'.
 * Status is kept in React state only (in-memory); persistence is a future step.
 *
 * @param {object[]} nodes
 * @returns {Record<string, 'not-started' | 'in-progress' | 'known'>}
 */
export function buildInitialStatus(nodes) {
  const status = {};
  for (const node of nodes) {
    status[node.id] = 'not-started';
  }
  return status;
}
