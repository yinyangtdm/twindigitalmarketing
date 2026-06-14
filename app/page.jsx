import ContactForm from "./components/ContactForm";

const SERVICES = [
  {
    icon: "📱",
    title: "Social Media Marketing",
    body: "Strategy, content, and community management that turns followers into customers across every platform.",
  },
  {
    icon: "🔍",
    title: "SEO & Content",
    body: "Rank higher and stay there. Technical SEO plus content that earns traffic and builds lasting authority.",
  },
  {
    icon: "🎯",
    title: "Paid Ads / PPC",
    body: "Google and Meta campaigns engineered for ROI — every dollar tracked, tested, and optimized.",
  },
  {
    icon: "✨",
    title: "Web Design & Branding",
    body: "Stunning, conversion-focused websites and brand identities that make the right first impression.",
  },
];

const STEPS = [
  { n: "01", title: "Discover", body: "We learn your goals, audience, and market to build the right strategy." },
  { n: "02", title: "Plan", body: "A clear, tailored roadmap with channels, milestones, and measurable KPIs." },
  { n: "03", title: "Execute", body: "We launch campaigns and content, managing every detail for you." },
  { n: "04", title: "Optimize", body: "Continuous testing and reporting so your results compound over time." },
];

function Logo() {
  return (
    <div className="logo">
      <span className="mark">T</span> TWIN<span className="sub">digital</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="nav">
        <div className="wrap nav-inner">
          <Logo />
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="btn">Free Strategy Call</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="wrap">
          <div className="pill">
            <span className="dot" /> Full-service digital marketing
          </div>
          <h1>
            Marketing that makes
            <br />
            your brand <span className="accent">impossible to ignore.</span>
          </h1>
          <p className="sub">
            We help businesses grow with data-driven social, SEO, paid ads, and
            standout web design — all under one roof.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn">Get a Free Strategy Call</a>
            <a href="#services" className="btn btn-ghost">See What We Do</a>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="center">
            <div className="eyebrow">What we do</div>
            <h2>Everything you need to grow</h2>
            <p className="lead">
              Four core services, one dedicated team. No silos, no handoffs —
              just results.
            </p>
          </div>
          <div className="grid">
            {SERVICES.map((s) => (
              <div className="card" key={s.title}>
                <div className="ico" aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="stats">
            <div className="stat">
              <div className="num">3.2x</div>
              <div className="lbl">Avg. return on ad spend</div>
            </div>
            <div className="stat">
              <div className="num">+180%</div>
              <div className="lbl">Avg. organic traffic growth</div>
            </div>
            <div className="stat">
              <div className="num">50+</div>
              <div className="lbl">Brands grown &amp; counting</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" id="process">
        <div className="wrap">
          <div className="center">
            <div className="eyebrow">How we work</div>
            <h2>A simple, proven process</h2>
          </div>
          <div className="steps">
            {STEPS.map((step) => (
              <div className="step" key={step.n}>
                <div className="n">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="wrap">
          <div className="contact-box">
            <div>
              <h2>Let&apos;s grow your brand</h2>
              <p className="lead">
                Tell us about your business and goals. We&apos;ll get back to you
                within one business day with a free strategy session.
              </p>
              <div className="contact-info">
                <a href="mailto:yin@twindigitalmarketing.com">
                  yin@twindigitalmarketing.com
                </a>
                <br />
                <div className="socials">
                  <a href="#" aria-label="Instagram">Instagram</a>
                  <a href="#" aria-label="LinkedIn">LinkedIn</a>
                  <a href="#" aria-label="X">X</a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="wrap foot">
          <Logo />
          <div>© 2026 Twin Digital Marketing. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
