import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Ordaro",
  description: "Ordaro Privacy Policy - Learn how we collect, use, and protect your information.",
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
          Ordaro Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Last updated: November 2025
        </p>

        <div className="mt-8 space-y-8">
          <p className="text-gray-700 dark:text-gray-300">
            Ordaro ("we", "our", or "the App") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use our services.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mt-8 mb-4">
              1. Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mt-6 mb-3">
              1.1 Google Account Data (via OAuth)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you sign in using Google, we may request access to the following data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Your basic profile information (name, email, profile photo)</li>
              <li>Google Workspace data only if required by the features you use</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              We do not collect any Gmail content, files, contacts, or other data unless explicitly required and shown during Google's permission screen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use your Google data solely to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Authenticate your identity</li>
              <li>Create and manage your Ordaro account</li>
              <li>Sync business or dashboard data (if applicable)</li>
              <li>Provide features within the Ordaro platform</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              We do not use your data for advertising, selling, or tracking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mt-8 mb-4">
              3. Data Sharing
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We do not share or sell your Google user data with third parties.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Data is only shared with essential service providers needed to operate the app (e.g., hosting providers). These providers are bound by strict confidentiality and security requirements.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We never transfer Google data to external apps or use it for any unrelated purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mt-8 mb-4">
              4. Data Storage & Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We store your data securely using industry-standard practices, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Encryption in transit (HTTPS/SSL)</li>
              <li>Encrypted databases (where applicable)</li>
              <li>Access controls and audit logging</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Your OAuth tokens are stored securely and never exposed publicly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mt-8 mb-4">
              5. User Control & Data Deletion
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You can:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Revoke our access to your Google account at any time by visiting:{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:underline"
                >
                  https://myaccount.google.com/permissions
                </a>
              </li>
              <li>
                Request deletion of your Ordaro account or data by emailing us at:{" "}
                <a
                  href="mailto:support@ordaro.cloud"
                  className="text-brand-primary hover:underline"
                >
                  support@ordaro.cloud
                </a>
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Once deleted, your data is permanently removed from our systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mt-8 mb-4">
              6. Children's Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Ordaro is not intended for users under 13 years of age, and we do not knowingly collect information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mt-8 mb-4">
              7. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mt-8 mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions or privacy-related requests, contact us:
            </p>
            <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@ordaro.cloud"
                  className="text-brand-primary hover:underline"
                >
                  support@ordaro.cloud
                </a>
              </li>
              <li>
                Website:{" "}
                <a
                  href="https://ordaro.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:underline"
                >
                  https://ordaro.cloud
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

