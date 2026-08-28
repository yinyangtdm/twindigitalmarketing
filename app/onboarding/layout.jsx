import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { createMetadata } from "../../lib/site";

export const metadata = createMetadata({
  title: "Client Questionnaire",
  description: "Tell us about your project so we can build the perfect website and marketing strategy for you.",
  path: "/onboarding",
});

export default function OnboardingLayout({ children }) {
  return (
    <>
      <SiteNav />
      {children}
      <SiteFooter />
    </>
  );
}
