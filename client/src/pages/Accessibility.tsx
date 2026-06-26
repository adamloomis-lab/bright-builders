import PolicyLayout from "@/components/PolicyLayout";
import { useSeo } from "@/hooks/useSeo";
import { BUSINESS } from "@/lib/site";

const UPDATED = "June 2026";

export default function Accessibility() {
  useSeo({
    title: "Accessibility Statement | Bright Builders Corp",
    description:
      "Bright Builders Corp is committed to making our website accessible to everyone, including people with disabilities.",
    path: "/accessibility",
  });

  return (
    <PolicyLayout
      title="Accessibility Statement"
      intro="We're committed to making our website usable and welcoming for everyone."
      updated={UPDATED}
    >
      <h2>Our commitment</h2>
      <p>
        This site is built to WCAG 2.1 AA, the standard referenced by the ADA for web
        accessibility. We review and update our accessibility practices on an ongoing basis.
      </p>

      <h2>What we have done</h2>
      <p>Among the steps we have taken to support accessible browsing:</p>
      <ul>
        <li>
          We include skip links so keyboard and screen reader users can bypass navigation and get
          straight to the main content.
        </li>
        <li>
          A visible outline appears on every interactive element when navigated by keyboard, so
          focus is always clear.
        </li>
        <li>
          Text colors meet the 4.5:1 minimum contrast ratio for readability by people with low
          vision.
        </li>
        <li>
          All form fields, buttons, and interactive elements have descriptive labels readable by
          screen readers.
        </li>
        <li>
          Animations automatically reduce for users who have the Reduce Motion preference enabled
          on their device.
        </li>
      </ul>

      <h2>Report an issue</h2>
      <p>
        If you encounter any accessibility barrier on this site, please contact us and we will
        address it promptly. You can reach us by phone at{" "}
        <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>.
      </p>
    </PolicyLayout>
  );
}
