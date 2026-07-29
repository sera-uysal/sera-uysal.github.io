export interface Skill {
  title: string;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  /** Pre-computed text color for contrast - 'dark' for light backgrounds, 'light' for dark */
  textColor: 'dark' | 'light';
}

const skills: Skill[] = [
  // Tools & Technical
  { title: 'Excel', category: ['Tools & Technical'] },
  { title: 'R', category: ['Tools & Technical'] },
  { title: 'Power BI', category: ['Tools & Technical'] },
  { title: 'Tableau', category: ['Tools & Technical'] },
  { title: 'Python', category: ['Tools & Technical'] },
  { title: 'SQL', category: ['Tools & Technical'] },

  // Finance & Analytics
  { title: 'Econometrics', category: ['Finance & Analytics'] },
  { title: 'Data Analysis', category: ['Finance & Analytics'] },
  { title: 'Financial Regulation & Policy', category: ['Finance & Analytics'] },
  { title: 'Financial Analysis & Reporting', category: ['Finance & Analytics'] },
  { title: 'Contract Management', category: ['Finance & Analytics'] },
  { title: 'Budgeting & Forecasting', category: ['Finance & Analytics'] },
  { title: 'Financial Modeling', category: ['Finance & Analytics'] },

  // Languages
  { title: 'Turkish (Native)', category: ['Languages'] },
  { title: 'English (C1)', category: ['Languages'] },
  { title: 'German (DSH-3/C1.2)', category: ['Languages'] },
];

/**
 * Category colors with pre-computed text contrast.
 * Uses CSS custom properties defined in tailwind.css for runtime styling,
 * with textColor pre-computed from the hex values for accessibility.
 */
const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' }, // #6968b3
  { color: 'var(--color-skill-2)', textColor: 'dark' }, // #37b1f5
  { color: 'var(--color-skill-3)', textColor: 'light' }, // #40494e
];

// Fallback colors for categories beyond the predefined set
const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
];

function buildCategories(): Category[] {
  const explicitOrder = ['Tools & Technical', 'Finance & Analytics', 'Languages'];

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

  return explicitOrder.map((category, index) => {
    const colorConfig = allColors[index] ?? {
      color: '#888888',
      textColor: 'light' as const,
    };
    return {
      name: category,
      color: colorConfig.color,
      textColor: colorConfig.textColor,
    };
  });
}

const categories: Category[] = buildCategories();

export { categories, skills };
