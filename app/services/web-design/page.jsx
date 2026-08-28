import JsonLd from "../../components/JsonLd";
import { createMetadata } from "../../../lib/site";
import { breadcrumbSchema, serviceSchema } from "../../../lib/schema";

const TITLE = "Web Design & Branding";
const DESCRIPTION =
  "Stunning, conversion-focused websites and brand identities that make the right first impression.";
const PATH = "/services/web-design";

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const INCLUDED = [
  "Custom website design — no templates, no shortcuts",
  "Mobile-first, fully responsive development",
  "Conversion rate optimisation built into every page",
  "Logo design and full brand identity system",
  "Colour palette, typography, and style guide",
  "Copywriting for all key pages",
  "SEO-ready structure from day one",
  "Post-launch support and revisions",
];

const HOW = [
  { n: "01", title: "Discovery", body: "We learn your business, audience, and goals — and study your competitors to find your edge." },
  { n: "02", title: "Design", body: "We present a full design concept. You give feedback, we refine until it's perfect." },
  { n: "03", title: "Build", body: "We develop your site for speed, accessibility, and conversion — then test across every device." },
  { n: "04", title: "Launch", body: "We handle go-live, set up analytics, and stay available for the first 30 days." },
];

export default function WebDesignPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: TITLE, path: PATH },
          ]),
        ]}
      />
      <header className="service-hero">
        <div className="wrap">
          <div className="eyebrow">Web Design & Branding</div>
          <h1>A brand that makes the <span className="accent">right first impression.</span></h1>
          <p className="service-hero-sub">
            Custom websites and brand identities built to convert visitors into customers — and make your business impossible to forget.
          </p>
          <a href="/#contact" className="btn">Free Consultation</a>
        </div>
      </header>

      <section className="section">
        <div className="wrap service-content">
          <div>
            <div className="eyebrow">What&apos;s included</div>
            <h2>Design that works as hard as you do</h2>
            <ul className="service-list">
              {INCLUDED.map((item) => (
                <li key={item}><span className="check">✓</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="service-aside">
            <div className="aside-card">
              <div className="eyebrow">Average results</div>
              <div className="aside-stat"><span className="num">+67%</span><span>increase in time on site</span></div>
              <div className="aside-stat"><span className="num">2.8x</span><span>more enquiry form submissions</span></div>
              <div className="aside-stat"><span className="num">-52%</span><span>bounce rate reduction</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="center">
            <div className="eyebrow">How it works</div>
            <h2>From brief to launch</h2>
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
          <h2>Ready for a website that actually converts?</h2>
          <p className="lead" style={{ margin: "16px auto 32px" }}>
            Tell us about your project. We&apos;ll come back with ideas and a clear plan, no obligation.
          </p>
          <a href="/#contact" className="btn">Start Your Project</a>
        </div>
      </section>
    </>
  );
}
