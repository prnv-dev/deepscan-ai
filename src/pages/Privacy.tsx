import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

const Privacy = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-display text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">Last updated: February 23, 2026</p>

          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>Welcome to VerifyAI. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered content verification platform.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Account Information:</strong> Name, email address, and password when you create an account.</li>
                <li><strong>Content Data:</strong> Text, URLs, images, and other content you submit for verification analysis.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our platform, including pages visited, features used, and timestamps.</li>
                <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
                <li><strong>Payment Information:</strong> Billing details processed securely through our third-party payment provider.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Provide, maintain, and improve our content verification services.</li>
                <li>Process and complete transactions.</li>
                <li>Send you technical notices, updates, and administrative messages.</li>
                <li>Respond to your comments, questions, and customer service requests.</li>
                <li>Train and improve our AI models for more accurate verification results.</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information. All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We conduct regular security audits and penetration testing to ensure the integrity of our systems. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Cookies &amp; Tracking</h2>
              <p>We use essential cookies to maintain your session and preferences. We also use analytics cookies to understand how our platform is used, which helps us improve our services. You can control cookie preferences through your browser settings. Our platform does not respond to "Do Not Track" signals.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Third-Party Services</h2>
              <p>We may share your information with third-party service providers who assist us in operating our platform, including cloud hosting providers, payment processors, and analytics services. These providers are contractually obligated to protect your information and may only use it for the purposes we specify.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Your Rights</h2>
              <p className="mb-3">Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal obligations.</li>
                <li><strong>Portability:</strong> Request your data in a structured, machine-readable format.</li>
                <li><strong>Objection:</strong> Object to processing of your personal data for certain purposes.</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, please contact us at privacy@verifyai.com.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Children's Privacy</h2>
              <p>Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child under 16, we will take steps to delete that information promptly.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our platform after such changes constitutes your acceptance of the updated policy.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
              <p className="mt-2"><strong>Email:</strong> privacy@verifyai.com</p>
              <p><strong>Address:</strong> VerifyAI Inc., 123 AI Boulevard, San Francisco, CA 94105, USA</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </PageTransition>
  );
};

export default Privacy;
