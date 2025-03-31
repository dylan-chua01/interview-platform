import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-light-100">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-4xl font-bold text-dark-100 mb-8 text-center">
            Privacy Policy
          </h1>

          <p className="text-sm text-dark-200 mb-8 text-center">
            Effective Date: 30th March 2025
          </p>

          <div className="prose max-w-none text-dark-200">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">Introduction</h2>
              <p className="text-dark-100">
                PrepMate ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your information when you visit our website or use our services.
              </p>
              <p className="mt-2 text-dark-100">
                By using our website or services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8 text-dark-100">
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">Information We Collect</h2>
              <p className="text-dark-100">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li className="text-dark-100">
                  <strong className="text-dark-100">Personal Information:</strong> When you use our services, you may be asked to provide personal details such as your name, email address, phone number, and any other information necessary for account creation, billing, or customer service.
                </li>
                <li className="text-dark-100">
                  <strong className="text-dark-100">Usage Data:</strong> We collect information on how our website and services are accessed and used. This may include your IP address, browser type, device information, and browsing activity on our website.
                </li>
                <li className="text-dark-100">
                  <strong className="text-dark-100">Cookies and Tracking Technologies:</strong> We use cookies to track activity on our website and to improve the user experience. You can control cookie settings through your browser preferences.
                </li>
              </ul>
            </section>

            <section className="mb-8 text-dark-100">
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">How We Use Your Information</h2>
              <p className="text-dark-100">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-dark-100">
                <li className="text-dark-100">Providing and maintaining our services</li>
                <li className="text-dark-100">Personalizing your experience</li>
                <li className="text-dark-100">Communicating with you regarding updates, promotions, or support</li>
                <li className="text-dark-100">Analyzing website traffic and improving our services</li>
                <li className="text-dark-100">Ensuring compliance with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">How We Share Your Information</h2>
              <p className="text-dark-100">
                We may share your information in the following cases:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li className="text-dark-100">
                  <strong>With Service Providers:</strong> We may share your information with third-party vendors, contractors, or service providers who assist us in operating our website and providing our services.
                </li>
                <li className="text-dark-100">
                  <strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or if we believe such action is necessary to comply with legal obligations, protect our rights, or prevent illegal activity.
                </li>
                <li className="text-dark-100">
                  <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your personal information may be transferred as part of the transaction.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">Data Security</h2>
              <p className="text-dark-100">
                We take reasonable steps to protect your personal information from unauthorized access, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">Your Rights and Choices</h2>
              <p className="text-dark-100">
                Depending on your location, you may have certain rights regarding your personal data, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li className="text-dark-100">The right to access, update, or delete your personal information.</li>
                <li className="text-dark-100">The right to object to or restrict certain processing activities.</li>
                <li className="text-dark-100">The right to withdraw consent if you have previously given consent for data processing.</li>
              </ul>
              <p className="mt-2 text-dark-100">
                To exercise any of these rights, please contact us at <a href="mailto:privacy@prepmate.com" className="text-primary-200 hover:underline">privacy@prepmate.com</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">Children's Privacy</h2>
              <p className="text-dark-100">
                Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child under the age of 13, we will take steps to delete that information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-dark-100">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Please review this policy periodically for updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">Contact Us</h2>
              <p className="text-dark-100">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-12 flex justify-center">
            <Link href="/contact" className="btn-secondary px-6 py-3">
              Contact
            </Link>
          </div>
            </section>
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/" className="btn-secondary px-6 py-3">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;