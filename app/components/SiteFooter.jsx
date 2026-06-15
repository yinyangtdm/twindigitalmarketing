import Logo from "./Logo";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap foot">
        <Logo />
        <div className="foot-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <div>© 2026 Twin Digital Marketing. All rights reserved.</div>
      </div>
    </footer>
  );
}
