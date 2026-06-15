import Logo from "./Logo";
import NavMobile from "./NavMobile";

const SERVICES = [
  { label: "Social Media Marketing", href: "/services/social-media" },
  { label: "SEO & Content", href: "/services/seo" },
  { label: "Paid Ads / PPC", href: "/services/paid-ads" },
  { label: "Web Design & Branding", href: "/services/web-design" },
];

export default function SiteNav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Logo />
        <div className="nav-links">
          <div className="nav-dropdown">
            <span className="nav-dropdown-trigger">
              Services <span className="chevron">▾</span>
            </span>
            <div className="dropdown-menu">
              {SERVICES.map((s) => (
                <a key={s.href} href={s.href}>{s.label}</a>
              ))}
            </div>
          </div>
          <a href="/#process">Process</a>
          <a href="/#contact">Contact</a>
        </div>
        <a href="/#contact" className="btn nav-cta">Free Consultation</a>
        <NavMobile services={SERVICES} />
      </div>
    </nav>
  );
}
