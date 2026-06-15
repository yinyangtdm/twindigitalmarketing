import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Client Questionnaire",
  description: "Tell us about your project so we can build the perfect website for you.",
};

export default function OnboardingLayout({ children }) {
  return (
    <>
      <SiteNav />
      {children}
      <SiteFooter />
    </>
  );
}
