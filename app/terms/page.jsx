import JsonLd from "../components/JsonLd";
import { createMetadata } from "../../lib/site";
import { breadcrumbSchema } from "../../lib/schema";

const TITLE = "Terms of Service";
const DESCRIPTION =
  "Terms and conditions for using Twin Digital Marketing's website and services.";
const PATH = "/terms";

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function TermsPage() {
  return (
    <div className="legal-page">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: TITLE, path: PATH },
        ])}
      />
      <div className="wrap">
        <div className="eyebrow">Legal</div>
        <h1>Terms of Service</h1>
        <p className="legal-date">Last updated: June 2026</p>

        <div className="legal-body">
          <h2>1. Agreement to terms</h2>
          <p>By accessing or using twindigitalmarketing.com, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.</p>

          <h2>2. Services</h2>
          <p>Twin Digital Marketing provides digital marketing services including social media management, SEO, paid advertising, and web design. Specific terms for client engagements are set out in individual service agreements.</p>

          <h2>3. Use of this website</h2>
          <p>You agree to use this website only for lawful purposes. You must not:</p>
          <ul>
            <li>Use the site in any way that breaches applicable laws or regulations</li>
            <li>Transmit any unsolicited promotional or advertising material</li>
            <li>Attempt to gain unauthorised access to any part of the site</li>
            <li>Use the site to harm, defraud, or mislead others</li>
          </ul>

          <h2>4. Intellectual property</h2>
          <p>All content on this website — including text, graphics, logos, and images — is the property of Twin Digital Marketing and protected by applicable intellectual property laws. You may not reproduce or distribute content without our written permission.</p>

          <h2>5. Contact form submissions</h2>
          <p>By submitting our contact form, you consent to us using your information to respond to your enquiry. We will not use your details for unrelated marketing without your consent.</p>

          <h2>6. Disclaimer of warranties</h2>
          <p>This website is provided "as is" without warranties of any kind. We do not warrant that the site will be uninterrupted or error-free. Results from our marketing services vary and are not guaranteed.</p>

          <h2>7. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, Twin Digital Marketing shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.</p>

          <h2>8. Links to third-party sites</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.</p>

          <h2>9. Changes to these terms</h2>
          <p>We reserve the right to update these Terms at any time. Continued use of the site after changes are posted constitutes acceptance of the updated Terms.</p>

          <h2>10. Governing law</h2>
          <p>These Terms are governed by the laws of the jurisdiction in which Twin Digital Marketing operates.</p>

          <h2>11. Contact us</h2>
          <p>If you have questions about these Terms, email us at <a href="mailto:yin@twindigitalmarketing.com">yin@twindigitalmarketing.com</a>.</p>
        </div>
      </div>
    </div>
  );
}
