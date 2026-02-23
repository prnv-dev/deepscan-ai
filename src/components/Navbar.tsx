import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Shield, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Security", href: "#security" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  const scrollTo = (href: string) => {
    setOpen(false);
    if (pathname === "/") {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + href);
    }
  };

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
      scrolled 
        ? "glass border-border/60 shadow-sm" 
        : "bg-transparent border-transparent"
    }`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <button onClick={handleLogoClick} className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
          <Shield className="h-7 w-7 text-primary" />
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Deep<span className="text-primary">Scan</span> AI
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="nav-link-underline text-sm font-medium text-muted-foreground transition-colors hover:text-foreground pb-1"
            >
              {l.label}
            </button>
          ))}
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2">
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            onClick={() => scrollTo("#pricing")}
            className="gradient-blue text-primary-foreground border-0 hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="font-display">Navigation</SheetTitle>
              <div className="mt-8 flex flex-col gap-4">
                {navLinks.map((l, i) => (
                  <button
                    key={l.href}
                    onClick={() => scrollTo(l.href)}
                    className="text-left text-lg font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-2 opacity-0 animate-fade-up"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    {l.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollTo("#pricing")}
                  className="gradient-blue text-primary-foreground border-0 mt-4 opacity-0 animate-fade-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
