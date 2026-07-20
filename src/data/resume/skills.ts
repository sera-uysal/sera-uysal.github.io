export interface Skill {
  title: string;
  competency: number;
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
  { title: 'Excel', competency: 4, category: ['Tools & Technical'] },
  { title: 'R', competency: 4, category: ['Tools & Technical'] },
  { title: 'Power BI', competency: 4, category: ['Tools & Technical'] },
  { title: 'Python', competency: 4, category: ['Tools & Technical'] },
  { title: 'SQL', competency: 4, category: ['Tools & Technical'] },

  // Finance & Analytics
  { title: 'Econometrics', competency: 4, category: ['Finance & Analytics'] },
  { title: 'Data Analysis', competency: 4, category: ['Finance & Analytics'] },
  { title: 'Financial Regulation & Policy', competency: 4, category: ['Finance & Analytics'] },
  { title: 'Financial Analysis & Reporting', competency: 4, category: ['Finance & Analytics'] },
  { title: 'Contract Management', competency: 4, category: ['Finance & Analytics'] },
  { title: 'Budgeting & Forecasting', competency: 4, category: ['Finance & Analytics'] },
  { title: 'Financial Modeling', competency: 4, category: ['Finance & Analytics'] },

  // Languages
  { title: 'Turkish (Native)', competency: 4, category: ['Languages'] },
  { title: 'English (C1)', competency: 4, category: ['Languages'] },
  { title: 'German (C1.2)', competency: 4, category: ['Languages'] },
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
