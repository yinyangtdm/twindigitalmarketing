export const metadata = {
  title: "Paid Ads / PPC",
  description: "Google and Meta campaigns engineered for ROI — every dollar tracked, tested, and optimised.",
};

const INCLUDED = [
  "Google Search, Display, and Shopping campaign setup",
  "Meta (Facebook & Instagram) ad campaign management",
  "Audience research and buyer persona targeting",
  "Creative ad copywriting and design",
  "A/B testing on headlines, creatives, and audiences",
  "Retargeting campaigns to recover lost leads",
  "Weekly spend reports and monthly ROI reviews",
];

const HOW = [
  { n: "01", title: "Research", body: "We analyse your market, competitors' ads, and ideal customer to build targeting that converts." },
  { n: "02", title: "Build", body: "We create campaigns, ad sets, and creatives — built to capture attention and drive action." },
  { n: "03", title: "Launch", body: "Campaigns go live with tight budget controls. We monitor performance from day one." },
  { n: "04", title: "Scale", body: "We cut what doesn't work, scale what does, and keep optimising until every pound earns." },
];

export default function PaidAdsPage() {
  return (
    <>
      <header className="service-hero">
        <div className="wrap">
          <div className="eyebrow">Paid Ads / PPC</div>
          <h1>Every dollar working <span className="accent">harder for you.</span></h1>
          <p className="service-hero-sub">
            Google and Meta campaigns engineered for ROI — not vanity metrics. We track, test, and optimise until your ad spend pays off.
          </p>
          <a href="/#contact" className="btn">Free Consultation</a>
        </div>
      </header>

      <section className="section">
        <div className="wrap service-content">
          <div>
            <div className="eyebrow">What&apos;s included</div>
            <h2>Full PPC management, end to end</h2>
            <ul className="service-list">
              {INCLUDED.map((item) => (
                <li key={item}><span className="check">✓</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="service-aside">
            <div className="aside-card">
              <div className="eyebrow">Average results</div>
              <div className="aside-stat"><span className="num">3.2x</span><span>average return on ad spend</span></div>
              <div className="aside-stat"><span className="num">-38%</span><span>cost per lead within 90 days</span></div>
              <div className="aside-stat"><span className="num">2x</span><span>more conversions, same budget</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="center">
            <div className="eyebrow">How it works</div>
            <h2>Research, build, launch, scale</h2>
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
          <h2>Tired of wasted ad spend?</h2>
          <p className="lead" style={{ margin: "16px auto 32px" }}>
            We&apos;ll audit your current campaigns for free and tell you exactly where you&apos;re losing money.
          </p>
          <a href="/#contact" className="btn">Get a Free Ad Audit</a>
        </div>
      </section>
    </>
  );
}
