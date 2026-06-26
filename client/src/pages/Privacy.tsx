import PolicyLayout from "@/components/PolicyLayout";
import { useSeo } from "@/hooks/useSeo";
import { BUSINESS } from "@/lib/site";

const UPDATED = "May 23, 2026";

export default function Privacy() {
  useSeo({
    title: "Privacy Policy | Bright Builders Corp",
    description:
      "How Bright Builders Corp collects, uses, and protects the information you share with us through our website and quote requests.",
    path: "/privacy",
  });

  return (
    <PolicyLayout
      title="Privacy Policy"
      intro="Your privacy matters to us. This policy explains what information we collect and how we use it."
      updated={UPDATED}
    >
      <h2>Overview</h2>
      <p>
        {BUSINESS.name} ("we," "us," or "our") operates the website at {BUSINESS.domain}.
        This Privacy Policy describes how we collect, use, and safeguard the information you
        provide when you visit our site or request a quote.
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect the following information when you interact with us:</p>
      <ul>
        <li><strong>Contact details</strong> you submit through our quote or contact forms — such as your name, phone number, email address, and project details.</li>
        <li><strong>Usage information</strong> automatically collected by your browser, such as your device type, browser, and the pages you view.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to your inquiries and provide quotes or estimates.</li>
        <li>To schedule consultations and carry out requested services.</li>
        <li>To improve our website and the services we offer.</li>
        <li>To send you information you have requested or that relates to your project.</li>
      </ul>

      <h2>Sharing Your Information</h2>
      <p>
        We do not sell or rent your personal information. We may share information with trusted
        service providers who help us operate our business (for example, email or scheduling
        tools), and only as needed to provide our services. We may also disclose information when
        required by law.
      </p>

      <h2>Cookies &amp; Analytics</h2>
      <p>
        Our website may use cookies and similar technologies to understand how visitors use the
        site. You can disable cookies in your browser settings, though some features may not work
        as intended.
      </p>

      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect the information you share with us. However, no
        method of transmission over the internet is completely secure, and we cannot guarantee
        absolute security.
      </p>

      <h2>Your Choices</h2>
      <p>
        You may request that we update or delete the personal information we hold about you by
        contacting us using the details below.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please reach out:
      </p>
      <ul>
        <li>Email: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
        <li>Phone: <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></li>
        <li>{BUSINESS.street}, {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}</li>
      </ul>

      <p className="note">
        This Privacy Policy is provided as a general template for informational purposes and is not
        legal advice. We recommend reviewing it with a qualified attorney to ensure it meets the
        requirements that apply to your business.
      </p>
    </PolicyLayout>
  );
}
