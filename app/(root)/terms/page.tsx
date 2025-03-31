import Link from "next/link";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-light-100">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-4xl font-bold text-dark-100 mb-6 text-center">
            Terms of Service
          </h1>

          <p className="text-sm text-dark-200 mb-8 text-center">
            Effective Date: 30 March 2025
          </p>

          <div className="prose max-w-none text-dark-200 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">1. Acceptance of Terms</h2>
              <p className="text-dark-100">
                By accessing or using PrepMate's services, website, or mobile application (collectively referred to as "Services"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">2. Changes to the Terms</h2>
              <p className="text-dark-100">
                We reserve the right to modify or replace these Terms at any time. When changes are made, the updated version will be posted on this page with an updated "Effective Date." It is your responsibility to review these Terms periodically. Continued use of our Services after any such changes constitutes your acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">3. Use of Our Services</h2>
              <p className="text-dark-100">
                You agree to use our Services only for lawful purposes and in accordance with these Terms. You are responsible for all activity on your account, and you agree to provide accurate, current, and complete information during registration and maintain the confidentiality of your account credentials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">4. Account Registration</h2>
              <p className="text-dark-100">
                To access certain features of our Services, you may be required to register for an account. You must be at least [Insert Age Requirement] years old to use our Services. By creating an account, you represent and warrant that the information you provide is accurate and complete.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">5. User Obligations</h2>
              <p className="text-dark-100">You agree not to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li className="text-dark-100">Violate any applicable laws or regulations.</li>
                <li className="text-dark-100">Engage in any activity that could damage, disable, or impair our Services or interfere with other users' enjoyment of the Services.</li>
                <li className="text-dark-100">Use our Services to transmit harmful or illegal content.</li>
                <li className="text-dark-100">Attempt to access or hack any part of the Services you are not authorized to access.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">6. Privacy Policy</h2>
              <p className="text-dark-100">
                Your use of our Services is also governed by our <Link href="/privacy-policy" className="text-primary-200 hover:underline">Privacy Policy</Link>, which explains how we collect, use, and protect your personal information. By using our Services, you consent to the practices described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">7. Intellectual Property</h2>
              <p className="text-dark-100">
                All content, trademarks, logos, and intellectual property on our Services are owned by PrepMate or its licensors. You may not use, copy, reproduce, or distribute any content without express permission, except as permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">8. Termination</h2>
              <p className="text-dark-100">
                We may suspend or terminate your account and access to our Services at any time, with or without cause, and with or without notice, for conduct that violates these Terms or is harmful to other users or to us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">9. Disclaimers and Limitation of Liability</h2>
              <p className="text-dark-100">
                Our Services are provided "as is" and "as available," without any warranties of any kind, express or implied. We do not guarantee that our Services will be uninterrupted or error-free. In no event shall PrepMate be liable for any damages arising from the use or inability to use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">10. Indemnification</h2>
              <p className="text-dark-100">
                You agree to indemnify, defend, and hold harmless PrepMate, its affiliates, officers, employees, and agents from any claims, damages, losses, or liabilities arising out of your use of the Services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">11. Governing Law</h2>
              <p className="text-dark-100">
                These Terms will be governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law principles. Any disputes will be resolved in the competent courts located in [Insert Location].
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">12. Severability</h2>
              <p className="text-dark-100">
                If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision will be deemed severable from these Terms and will not affect the validity and enforceability of the remaining provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">13. Contact Us</h2>
              <p className="text-dark-100">
                If you have any questions or concerns about these Terms, please contact us at:
              </p>
              <div className="mt-12 flex justify-center">
            <Link href="/contact" className="btn-secondary px-6 py-3">
              Contact Us
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

export default TermsOfService;