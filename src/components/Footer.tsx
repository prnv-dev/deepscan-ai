import { Link } from "react-router-dom";
import { toast } from "sonner";

const FaviconIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
    <defs>
      <linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e56a0"/>
        <stop offset="100%" stopColor="#3b82f6"/>
      </linearGradient>
      <linearGradient id="fg2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa"/>
        <stop offset="100%" stopColor="#38bdf8"/>
      </linearGradient>
    </defs>
    <path d="M32 4 L56 16 V34 C56 48 44 58 32 62 C20 58 8 48 8 34 V16 Z" fill="url(#fg)" stroke="url(#fg2)" strokeWidth="2"/>
    <line x1="18" y1="28" x2="46" y2="28" stroke="#60a5fa" strokeWidth="1.5" opacity="0.4"/>
    <line x1="20" y1="34" x2="44" y2="34" stroke="#60a5fa" strokeWidth="1.5" opacity="0.3"/>
    <line x1="22" y1="40" x2="42" y2="40" stroke="#60a5fa" strokeWidth="1.5" opacity="0.2"/>
    <ellipse cx="32" cy="30" rx="11" ry="7" fill="none" stroke="#e0f2fe" strokeWidth="2"/>
    <circle cx="32" cy="30" r="4" fill="#e0f2fe"/>
    <circle cx="32" cy="30" r="1.8" fill="#1e56a0"/>
    <path d="M24 46 L30 52 L42 40" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const sectionLinks: Record<string, string> = {
  Features: "#features",
  Pricing: "#pricing",
};

const Footer = () => {
  const handleClick = (label: string) => {
    const href = sectionLinks[label];
    if (href) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      toast.info(`${label} page coming soon!`);
    }
  };

  return (
    <footer className="bg-foreground text-background py-16 relative overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <FaviconIcon className="h-8 w-8" />
              <span className="font-display text-lg font-bold">
                Verify<span className="text-primary">AI</span>
              </span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              AI-powered content verification platform protecting millions from misinformation.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-background/80">Product</h4>
            <ul className="space-y-2.5">
              {["Features", "Pricing"].map((l) => (
                <li key={l}>
                  <button onClick={() => handleClick(l)} className="footer-link text-sm text-background/50 hover:text-background transition-colors duration-300">
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-background/80">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="footer-link text-sm text-background/50 hover:text-background transition-colors duration-300">About</Link>
              </li>
              <li>
                <Link to="/security" className="footer-link text-sm text-background/50 hover:text-background transition-colors duration-300">Security</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-background/80">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/privacy" className="footer-link text-sm text-background/50 hover:text-background transition-colors duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link text-sm text-background/50 hover:text-background transition-colors duration-300">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">© 2026 VerifyAI. All rights reserved.</p>
          <p className="text-xs text-background/40">contact@verifyai.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
