import Link from 'next/link';

export default function References() {
  return (
      <div className="references">
          <h3 className="title">References</h3>
          <div className="link-to"/>
          <p className="text-sm text-[var(--color-fg-light)] text-center">
              Available upon request.{' '}
              <Link
                  href="/contact"
                  className="font-medium text-[var(--color-accent)] hover:text-[var(--color-fg-bold)] transition-colors duration-150"
              >
                  Get in touch →
              </Link>
          </p>
      </div>
  );
}
