export const metadata = {
  title: "Social Media Marketing",
  description: "Strategy, content, and community management that turns followers into customers across every platform.",
};

const INCLUDED = [
  "Custom content strategy tailored to your brand voice and audience",
  "Professional graphics, captions, and short-form video scripts",
  "Daily community management and comment engagement",
  "Full platform coverage: Instagram, Facebook, TikTok, LinkedIn, X",
  "Content calendar planned 30 days in advance",
  "Monthly performance reports with growth insights",
  "Hashtag research and competitor monitoring",
];

const HOW = [
  { n: "01", title: "Brand Audit", body: "We dig into your existing presence, competitors, and audience to find what's working and what isn't." },
  { n: "02", title: "Strategy", body: "We build a content calendar, posting cadence, and platform mix that matches your goals." },
  { n: "03", title: "Create & Publish", body: "Our team handles creation and publishing — you just review and approve before anything goes live." },
  { n: "04", title: "Optimize", body: "We track what performs, cut what doesn't, and continuously refine to grow your reach and engagement." },
];

export default function SocialMediaPage() {
  return (
    <>
      <header className="service-hero">
        <div className="wrap">
          <div className="eyebrow">Social Media Marketing</div>
          <h1>Turn followers into <span className="accent">paying customers.</span></h1>
          <p className="service-hero-sub">
            We handle the strategy, content, and community so you can focus on running your business — not your feeds.
          </p>
          <a href="/#contact" className="btn">Free Consultation</a>
        </div>
      </header>

      <section className="section">
        <div className="wrap service-content">
          <div>
            <div className="eyebrow">What&apos;s included</div>
            <h2>Everything your brand needs</h2>
            <ul className="service-list">
              {INCLUDED.map((item) => (
                <li key={item}><span className="check">✓</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="service-aside">
            <div className="aside-card">
              <div className="eyebrow">Average results</div>
              <div className="aside-stat"><span className="num">+180%</span><span>follower growth in 6 months</span></div>
              <div className="aside-stat"><span className="num">4.2x</span><span>increase in profile reach</span></div>
              <div className="aside-stat"><span className="num">3x</span><span>more inbound enquiries</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="center">
            <div className="eyebrow">How it works</div>
            <h2>A process built for results</h2>
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
          <h2>Ready to grow your social presence?</h2>
          <p className="lead" style={{ margin: "16px auto 32px" }}>
            Book a free strategy call. We&apos;ll audit your accounts and show you exactly what we&apos;d do.
          </p>
          <a href="/#contact" className="btn">Book a Free Call</a>
        </div>
      </section>
    </>
  );
}
