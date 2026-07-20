import type { Metadata } from 'next';

import Cell from '@/components/Projects/Cell';
import PageWrapper from '@/components/Template/PageWrapper';
import data from '@/data/projects';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Projects',
  description: 'Financial analytics and quantitative research projects by Sera Uysal.',
  path: '/projects',
});

export default function ProjectsPage() {
  const biProjects = data.filter(p => p.type === 'applied');
  const researchProjects = data.filter(p => p.type === 'research');

  return (
    <PageWrapper>
      <section className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">
            My work in financial analytics, business intelligence and econometric research
          </p>
        </header>

        {biProjects.length > 0 && (
          <section className="projects-featured">
            <h2 className="projects-section-title">Business Intelligence & Financial Analytics</h2>
            <div className="projects-grid projects-grid--featured">
              {biProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}

        {researchProjects.length > 0 && (
          <section className="projects-other">
            <h2 className="projects-section-title">Quantitative Research & Policy Analysis</h2>
            <div className="projects-grid">
              {researchProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}
      </section>
    </PageWrapper>
  );
}
