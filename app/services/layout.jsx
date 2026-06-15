import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export default function ServicesLayout({ children }) {
  return (
    <>
      <SiteNav />
      {children}
      <SiteFooter />
    </>
  );
}
