import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="section">
      <div className="content">
        <div className="avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="title">
          <span className="name">Sera Uysal</span>
        </h1>

        <div className="chips">
          <span className="chip">M.Sc. Economics (LMU)</span>
          <span className="chip">CFA Level I</span>
          <span className="chip">Ministry of Treasury and Finance of Türkiye</span>
        </div>

        <div className="cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="bg" aria-hidden="true">
        <div className="gradient" />
      </div>
    </section>
  );
}
