import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export default function TermsLayout({ children }) {
  return (
    <>
      <SiteNav />
      {children}
      <SiteFooter />
    </>
  );
}
