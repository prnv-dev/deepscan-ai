import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

const Terms = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-display text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-10">Last updated: February 23, 2026</p>

          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using VerifyAI's content verification platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service. These Terms constitute a legally binding agreement between you and VerifyAI Inc.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Description of Service</h2>
              <p>VerifyAI provides an AI-powered content verification platform that analyzes text, images, URLs, and other media for accuracy, misinformation, bias, and credibility. Our Service uses advanced machine learning algorithms to deliver verification scores, detailed analysis reports, and source attribution. Results are provided for informational purposes and should not be considered as definitive truth determinations.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. User Accounts</h2>
              <p>To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and complete information during registration and to keep your account information updated. You must notify us immediately of any unauthorized use of your account.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Acceptable Use</h2>
              <p className="mb-3">You agree not to use the Service to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Violate any applicable local, state, national, or international law or regulation.</li>
                <li>Submit content that is illegal, harmful, threatening, abusive, or otherwise objectionable.</li>
                <li>Attempt to reverse-engineer, decompile, or disassemble any part of the Service.</li>
                <li>Use automated means (bots, scrapers) to access the Service beyond the provided API.</li>
                <li>Interfere with or disrupt the integrity or performance of the Service.</li>
                <li>Misrepresent verification results or use them to deceive others.</li>
                <li>Exceed the rate limits or usage quotas associated with your subscription plan.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Intellectual Property</h2>
              <p>The Service, including its original content, features, and functionality, is owned by VerifyAI Inc. and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You retain ownership of the content you submit for verification. By submitting content, you grant us a limited, non-exclusive license to process and analyze it for the purpose of providing the Service.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Subscription &amp; Payments</h2>
              <p>Certain features of the Service require a paid subscription. Subscription fees are billed in advance on a monthly or annual basis depending on your selected plan. You authorize us to charge your designated payment method for recurring fees. Refunds are handled on a case-by-case basis and are generally available within 30 days of purchase for annual plans.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Disclaimers</h2>
              <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. VerifyAI makes no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of verification results. AI-generated analysis may contain errors, and users should exercise independent judgment. We do not guarantee uninterrupted or error-free operation of the Service.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, VerifyAI Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising out of or related to your use of the Service. Our total liability shall not exceed the amount you paid for the Service in the twelve (12) months preceding the claim.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Termination</h2>
              <p>We may terminate or suspend your account and access to the Service immediately, without prior notice, if you breach these Terms. Upon termination, your right to use the Service will cease immediately. You may cancel your account at any time through your account settings. All provisions of these Terms that by their nature should survive termination shall survive.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">10. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in San Francisco County, California.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">11. Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
              <p className="mt-2"><strong>Email:</strong> legal@verifyai.com</p>
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

export default Terms;
