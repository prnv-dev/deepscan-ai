import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

const About = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-display text-4xl font-bold mb-2">About VerifyAI</h1>
          <p className="text-muted-foreground mb-10">Building trust in the age of information</p>

          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Our Mission</h2>
              <p>At VerifyAI, we believe that access to accurate information is a fundamental right. In a world where misinformation spreads faster than ever, our mission is to empower individuals, journalists, researchers, and organizations with AI-powered tools that make truth verification instant, accessible, and reliable. We are committed to fighting the misinformation epidemic one verification at a time.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">What We Do</h2>
              <p className="mb-3">VerifyAI is an AI-powered content verification platform that analyzes and validates information across multiple formats:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Text Verification:</strong> Analyze articles, social media posts, and claims for factual accuracy, bias detection, and source credibility.</li>
                <li><strong>Image Analysis:</strong> Detect manipulated images, deepfakes, and AI-generated visuals using advanced computer vision models.</li>
                <li><strong>URL Scanning:</strong> Evaluate website credibility, check for known misinformation sources, and analyze domain reputation.</li>
                <li><strong>Real-Time Monitoring:</strong> Track emerging narratives and flag potential misinformation campaigns as they develop.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Our Technology</h2>
              <p>Our platform is built on cutting-edge artificial intelligence, combining multiple approaches for maximum accuracy. We use transformer-based neural networks trained on millions of verified data points, multi-source cross-referencing against trusted databases, natural language processing for context understanding and sentiment analysis, and computer vision models for image and video authenticity detection. Our AI continuously learns and adapts, improving its accuracy with every analysis performed.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Our Values</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Accuracy First:</strong> We never compromise on the precision of our verification results. Every analysis undergoes rigorous validation.</li>
                <li><strong>Transparency:</strong> We explain our methodology and provide confidence scores so users understand how conclusions are reached.</li>
                <li><strong>Privacy:</strong> Your data belongs to you. We process content for verification without storing it beyond what's necessary.</li>
                <li><strong>Accessibility:</strong> Truth verification should be available to everyone, which is why we offer a generous free tier alongside our premium plans.</li>
                <li><strong>Independence:</strong> We maintain strict editorial independence and are not influenced by political, corporate, or ideological interests.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">The Vision</h2>
              <p>We envision a world where every piece of information can be verified in seconds, where misinformation loses its power, and where truth is always just one click away. VerifyAI is more than a tool — it's a movement toward a more informed, more truthful digital ecosystem. Together, we can build a future where facts prevail.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Contact Us</h2>
              <p>We'd love to hear from you. Whether you have questions, feedback, or partnership inquiries, reach out to us:</p>
              <p className="mt-2"><strong>Email:</strong> hello@verifyai.com</p>
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

export default About;
