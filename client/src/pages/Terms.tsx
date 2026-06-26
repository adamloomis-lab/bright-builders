import PolicyLayout from "@/components/PolicyLayout";
import { useSeo } from "@/hooks/useSeo";
import { BUSINESS } from "@/lib/site";

const UPDATED = "May 23, 2026";

export default function Terms() {
  useSeo({
    title: "Terms of Service | Bright Builders Corp",
    description:
      "The terms that govern your use of the Bright Builders Corp website and the information presented on it.",
    path: "/terms",
  });

  return (
    <PolicyLayout
      title="Terms of Service"
      intro="Please read these terms carefully. By using our website, you agree to them."
      updated={UPDATED}
    >
      <h2>Acceptance of Terms</h2>
      <p>
        By accessing or using the website at {BUSINESS.domain} (the "Site"), operated by{" "}
        {BUSINESS.name}, you agree to be bound by these Terms of Service. If you do not agree,
        please do not use the Site.
      </p>

      <h2>Use of the Site</h2>
      <p>
        You may use the Site for lawful purposes only. You agree not to use the Site in any way
        that could damage, disable, or impair it, or interfere with any other party's use of the
        Site.
      </p>

      <h2>Quotes &amp; Estimates</h2>
      <p>
        Any quotes, estimates, or project information provided through the Site are for general
        informational purposes and do not constitute a binding contract. Final pricing, scope, and
        terms are confirmed in a separate written agreement before any work begins.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this Site — including text, images, logos, and design — is the property of
        {" "}{BUSINESS.name} or its licensors and is protected by applicable intellectual property
        laws. You may not reproduce or reuse it without our written permission.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        The Site may contain links to third-party websites. We are not responsible for the content
        or practices of those sites and provide the links for your convenience only.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        The Site is provided "as is" without warranties of any kind, whether express or implied. We
        do not warrant that the Site will be uninterrupted, error-free, or free of harmful
        components.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, {BUSINESS.name} will not be liable for any indirect,
        incidental, or consequential damages arising from your use of the Site.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the Site after changes are
        posted constitutes acceptance of the revised Terms.
      </p>

      <h2>Contact Us</h2>
      <ul>
        <li>Email: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
        <li>Phone: <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></li>
        <li>{BUSINESS.street}, {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}</li>
      </ul>

      <p className="note">
        These Terms of Service are provided as a general template for informational purposes and are
        not legal advice. We recommend reviewing them with a qualified attorney to ensure they meet
        the requirements that apply to your business.
      </p>
    </PolicyLayout>
  );
}
