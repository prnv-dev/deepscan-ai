import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Send } from "lucide-react";

const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("You're on the waitlist! We'll be in touch soon.");
    setEmail("");
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center glass-card rounded-3xl p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 gradient-blue opacity-5" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Ready to Fight <span className="gradient-blue-text">Misinformation?</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Join thousands of journalists, researchers, and organizations already using DeepScan AI.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-background/50 border-border/50"
                required
              />
              <Button type="submit" className="gradient-blue text-primary-foreground border-0 h-12 px-6 hover:opacity-90 transition-opacity shrink-0">
                <Send className="h-4 w-4 mr-2" />
                Join Waitlist
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
