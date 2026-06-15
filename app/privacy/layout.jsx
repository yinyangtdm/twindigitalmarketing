import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export default function PrivacyLayout({ children }) {
  return (
    <>
      <SiteNav />
      {children}
      <SiteFooter />
    </>
  );
}
