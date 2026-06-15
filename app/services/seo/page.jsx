export const metadata = {
  title: "SEO & Content",
  description: "Technical SEO and content strategy that earns traffic and builds lasting authority.",
};

const INCLUDED = [
  "Full technical SEO audit and implementation",
  "Keyword research targeting high-intent buyers",
  "On-page optimisation for every key page",
  "Monthly blog content written by industry experts",
  "Link-building campaigns to grow domain authority",
  "Local SEO setup for map pack visibility",
  "Google Search Console and Analytics monitoring",
];

const HOW = [
  { n: "01", title: "Audit", body: "We run a full technical crawl of your site, find what's holding you back, and fix it fast." },
  { n: "02", title: "Research", body: "We map keywords to buyer intent — targeting terms that bring in leads, not just traffic." },
  { n: "03", title: "Optimise", body: "We update on-page elements, improve site speed, and build content that ranks." },
  { n: "04", title: "Build Authority", body: "Monthly content and link-building compounds your rankings over time." },
];

export default function SEOPage() {
  return (
    <>
      <header className="service-hero">
        <div className="wrap">
          <div className="eyebrow">SEO & Content</div>
          <h1>Rank higher. <span className="accent">Stay there.</span></h1>
          <p className="service-hero-sub">
            Technical SEO combined with content that earns traffic and builds authority — month after month.
          </p>
          <a href="/#contact" className="btn">Free Consultation</a>
        </div>
      </header>

      <section className="section">
        <div className="wrap service-content">
          <div>
            <div className="eyebrow">What&apos;s included</div>
            <h2>Full-stack SEO, done for you</h2>
            <ul className="service-list">
              {INCLUDED.map((item) => (
                <li key={item}><span className="check">✓</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="service-aside">
            <div className="aside-card">
              <div className="eyebrow">Average results</div>
              <div className="aside-stat"><span className="num">+180%</span><span>organic traffic in 6 months</span></div>
              <div className="aside-stat"><span className="num">Top 3</span><span>rankings for target keywords</span></div>
              <div className="aside-stat"><span className="num">2.4x</span><span>more leads from search</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="center">
            <div className="eyebrow">How it works</div>
            <h2>From audit to authority</h2>
          </div>
          <div className="steps">
            {HOW.map((s) => (
              <div className="step" key={s.n}>
                <div className="n">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap center">
          <h2>Want to see where you stand?</h2>
          <p className="lead" style={{ margin: "16px auto 32px" }}>
            We&apos;ll run a free SEO audit and show you your biggest opportunities in 15 minutes.
          </p>
          <a href="/#contact" className="btn">Get a Free Audit</a>
        </div>
      </section>
    </>
  );
}
