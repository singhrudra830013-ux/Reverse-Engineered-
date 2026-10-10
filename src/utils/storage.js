/**
 * storage.js — localStorage helpers for Career Roadmapper.
 *
 * Each career's progress is stored under its own key so careers never
 * overwrite each other. Keys use the normalised (lowercase + trimmed)
 * career name — the same normalisation used by getRoadmapForCareer().
 *
 * Key format:  "career-roadmapper:progress:<normalised-career>"
 * Value format: JSON object  { nodeId: 'not-started' | 'in-progress' | 'known', … }
 *
 * All read/write operations are wrapped in try/catch.
 * If stored data is missing, unreadable, or structurally invalid,
 * the helpers return null so the caller can fall back to defaults.
 */

/** Prefix used for all localStorage keys. */
const KEY_PREFIX = 'career-roadmapper:progress:';

/**
 * Build the localStorage key for a given career.
 * Normalises the career name so "Software Engineer" and "software engineer"
 * map to the same key.
 *
 * @param {string} career
 * @returns {string}
 */
function storageKey(career) {
  return KEY_PREFIX + career.trim().toLowerCase();
}

/**
 * The set of valid status values. Used to validate loaded data.
 */
const VALID_STATUSES = new Set(['not-started', 'in-progress', 'known']);

/**
 * Load saved skill statuses for a career from localStorage.
 *
 * Returns a validated status map { nodeId → status } if valid saved data
 * exists, or null if the data is absent, corrupted, or fails validation.
 * The caller should fall back to buildInitialStatus() when null is returned.
 *
 * Validation rules:
 *   - Parsed value must be a non-null plain object (not an array).
 *   - Every value in the object must be one of the three valid statuses.
 *     (Extra keys in saved data are kept; missing keys are ignored here —
 *      the caller merges with fresh defaults so new nodes are handled.)
 *
 * @param {string} career
 * @returns {Record<string, string> | null}
 */
export function loadProgress(career) {
  try {
    const raw = localStorage.getItem(storageKey(career));
    if (raw === null) return null; // nothing saved yet

    const parsed = JSON.parse(raw);

    // Must be a plain object, not null / array / primitive
    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      Array.isArray(parsed)
    ) {
      return null;
    }

    // Every stored value must be a valid status string
    for (const val of Object.values(parsed)) {
      if (!VALID_STATUSES.has(val)) return null;
    }

    return parsed;
  } catch {
    // JSON.parse threw, or localStorage is unavailable (e.g. private mode with
    // storage disabled, or a SecurityError) — return null to fall back safely.
    return null;
  }
}

/**
 * Persist skill statuses for a career to localStorage.
 *
 * Silently swallows errors (e.g. storage quota exceeded, private-browsing
 * restrictions) — progress simply won't be saved in those edge cases.
 *
 * @param {string} career
 * @param {Record<string, string>} statusMap  — { nodeId → status }
 */
export function saveProgress(career, statusMap) {
  try {
    localStorage.setItem(storageKey(career), JSON.stringify(statusMap));
  } catch {
    // Storage unavailable or quota exceeded — fail silently.
  }
}

/**
 * Merge saved progress with fresh default statuses.
 *
 * This handles the case where a roadmap gains new nodes after the user
 * has previously saved progress: new node IDs default to 'not-started'
 * while previously saved IDs keep their stored status.
 *
 * @param {Record<string, string>} freshDefaults  — from buildInitialStatus()
 * @param {Record<string, string> | null} saved   — from loadProgress()
 * @returns {Record<string, string>}
 */
export function mergeProgress(freshDefaults, saved) {
  if (!saved) return freshDefaults;

  const merged = { ...freshDefaults }; // start from fresh defaults (all 'not-started')
  for (const [id, status] of Object.entries(saved)) {
    // Only apply saved status if the node ID still exists in the current roadmap
    if (id in merged && VALID_STATUSES.has(status)) {
      merged[id] = status;
    }
  }
  return merged;
}
