import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

const Security = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-display text-4xl font-bold mb-2">Security</h1>
          <p className="text-muted-foreground mb-10">How we protect your data and ensure platform integrity</p>

          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Our Commitment to Security</h2>
              <p>Security is at the core of everything we build at VerifyAI. We understand that our users trust us with sensitive content and data, and we take that responsibility seriously. Our security practices are designed to meet and exceed industry standards, ensuring your information is protected at every layer of our platform.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Data Encryption</h2>
              <p>All data transmitted to and from VerifyAI is encrypted using TLS 1.3, the latest and most secure transport layer protocol. Data stored on our servers is encrypted at rest using AES-256 encryption, the same standard used by governments and financial institutions worldwide. Encryption keys are managed through a dedicated key management service with automatic rotation.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Infrastructure Security</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Isolated Processing:</strong> Each verification request is processed in an isolated environment to prevent cross-contamination of data.</li>
                <li><strong>Network Security:</strong> Our infrastructure is protected by enterprise-grade firewalls, intrusion detection systems, and DDoS mitigation.</li>
                <li><strong>Regular Audits:</strong> We conduct quarterly security audits and annual penetration testing by independent third-party firms.</li>
                <li><strong>Access Controls:</strong> Strict role-based access controls (RBAC) ensure that only authorized personnel can access sensitive systems.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Privacy by Design</h2>
              <p>VerifyAI follows privacy-by-design principles. We do not retain submitted content beyond the time needed for analysis unless you explicitly opt in to data storage. Our systems are designed to minimize data collection, and we never sell or share your data with third parties for advertising purposes. You maintain full ownership and control of your content at all times.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Compliance</h2>
              <p className="mb-3">VerifyAI is committed to meeting global data protection and security standards:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>GDPR:</strong> Full compliance with the European General Data Protection Regulation, including data subject rights and lawful processing.</li>
                <li><strong>CCPA:</strong> Compliance with the California Consumer Privacy Act for users in California.</li>
                <li><strong>SOC 2 Type II:</strong> Our controls are aligned with SOC 2 Trust Service Criteria for security, availability, and confidentiality.</li>
                <li><strong>ISO 27001:</strong> Our information security management system follows ISO 27001 framework principles.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Incident Response</h2>
              <p>Our dedicated security team monitors our systems 24/7 for potential threats. In the event of a security incident, we follow a structured response plan that includes immediate containment, thorough investigation, user notification within 72 hours as required by GDPR, and comprehensive remediation. We maintain detailed incident logs and conduct post-incident reviews to continuously improve our security posture.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Responsible AI</h2>
              <p>As an AI-powered platform, we are committed to responsible and ethical AI practices. Our models undergo regular bias testing and fairness audits. We maintain transparency in how our AI reaches its conclusions by providing confidence scores and source attribution. We actively work to prevent our technology from being misused and continuously evaluate the societal impact of our verification tools.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Report a Vulnerability</h2>
              <p>We value the security research community and welcome responsible disclosure of vulnerabilities. If you discover a security issue, please contact us immediately:</p>
              <p className="mt-2"><strong>Email:</strong> security@verifyai.com</p>
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

export default Security;
