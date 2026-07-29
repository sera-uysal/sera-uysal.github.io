export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image?: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
  type?: string;
}

const data: Project[] = [
  {
    title: 'MBS Loan Trade Execution Analysis',
    subtitle: 'Applied Business Intelligence & Financial Analytics Project',
    link: '/documents/projects/mbs_loan_trade_execution_analysis.pdf',
    image: '/images/projects/mbs_loan_trade_execution_analysis_thumbnail.png',
    desc: 'Executed a $336.6M whole-loan pool analysis for agency MBS execution. Achieved a 7.07% profit margin, surpassing the target by 2.07 points. Developed Power BI dashboard to visualize key metrics and support trading strategies.',
    tech: ['Power BI', 'Data Visualization'],
    featured: true,
    type: 'applied'
  },
  {
    title: 'Global Tech Layoffs — SQL Pipeline & Tableau Dashboard',
    subtitle: 'Applied Business Intelligence & Financial Analytics Project',
    link: 'https://public.tableau.com/views/GlobalTechLayoffs2020-2023/Dashboard',
    image: '/images/projects/layoffs_thumbnail.png',
    desc: 'End-to-end SQL analytics pipeline in MySQL, transforming publicly-reported tech-layoff events (2020–2023) into a governed, quality-audited dataset. Surfaced the findings in an Tableau dashboard covering the monthly trend, an industry Pareto, funding-stage risk and top movers by year — showing that three months drove 45.6% of all cuts and that early-stage firms failed while late-stage firms downsized.',
    tech: ['Tableau', 'SQL', 'Data Visualization'],
    featured: true,
    type: 'applied'
  },
  {
    title: 'Profit Shifting through Intangible Assets',
    subtitle: 'Quantitative Research & Policy Analysis',
    link: 'https://github.com/sera-uysal/research-projects/#masters-thesis',
    desc: "Master's thesis (grade 1.3) on profit shifting by multinational firms through patent box regimes. Built a full R pipeline over firm-level ORBIS data (2014–2022) and applied Difference-in-Differences with Coarsened Exact Matching. Found patent boxes associated with increased profit shifting, especially for firms with historical patent ownership.",
    tech: ['R', 'SQL', 'DiD', 'CEM'],
    type: 'research'
  },
  {
    title: 'Gender Inequality Policy Evaluation',
    subtitle: 'Quantitative Research & Policy Analysis',
    link: 'https://github.com/sera-uysal/ml-in-econometrics',
    desc: 'Evaluated U.S. policy interventions using advanced machine learning techniques. Applied Causal Forests, Augmented Inverse Propensity Weighting, and Double ML. Conducted heterogeneity analysis using Lasso-penalized models.',
    tech: ['Python', 'Machine Learning', 'Lasso', 'AIPW'],
    type: 'research'
  },
  {
    title: 'Pay Transparency & Racial Wage Gaps',
    subtitle: 'Quantitative Research & Policy Analysis',
    link: 'https://github.com/sera-uysal/empirical-topics-in-domestic-public-finance',
    desc: 'Investigated the impact of pay transparency laws on racial wage gaps. Utilized staggered Difference-in-Differences analysis on CPS microdata. Focused on five specific U.S. states between 2010 and 2024 to find actionable insights.',
    tech: ['R', 'Staggered DiD', 'Public Policy'],
    type: 'research'
  },
  {
    title: 'Parliamentary Discourse Analysis in Canada',
    subtitle: 'Quantitative Research & Policy Analysis',
    link: 'https://github.com/sera-uysal/data-analytics',
    desc: 'Scraped Canadian parliamentary speeches and metadata (1980–2020) with Python and Selenium. Applied topic modelling, clustering, and fixed effects regressions to link discourse themes to electoral outcomes. Found issue-salient topics correlated positively with vote shares.',
    tech: ['Python', 'Selenium', 'Topic Modelling', 'NLP'],
    type: 'research'
  },
];

export default data;
