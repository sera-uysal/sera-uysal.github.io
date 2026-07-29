import Link from 'next/link';

export default function Projects() {
    return (
        <div className="projects">
            <h3 className="title">Projects</h3>
            <p className="text-sm text-[var(--color-fg-light)] text-center">
                My applied work in business intelligence, financial analytics and
                econometric research.{' '}
                <Link
                    href="/projects"
                    className="font-medium text-[var(--color-accent)] hover:text-[var(--color-fg-bold)] transition-colors duration-150"
                >
                    Browse my projects →
                </Link>
            </p>
        </div>
    );
}