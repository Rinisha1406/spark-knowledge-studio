import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "./ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Function to scroll to top of the page
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Teacher Training", href: "/training" },
  { name: "Franchise", href: "/franchise" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:block">

        {/* Main Header - Desktop - Fixed with top margin for top bar */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-soft" : "bg-white"
            }`}
        >
          <div className="container flex items-center justify-between py-4">
            {/* Logo - Center */}
            <Link to="/" className="flex flex-col">
              <img src={logo} alt="Fair Fin" className="h-20 w-auto" />
            </Link>

            <div className="flex items-center justify-center gap-8 py-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => {
                      if (location.pathname === link.href) {
                        scrollToTop();
                      }
                    }}
                    className={`font-medium transition-colors relative group ${location.pathname === link.href ? "text-primary" : "text-gray-700 hover:text-primary"
                      }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                  </Link>
                ))}
              </div>

            {/* Buttons - Right */}
            <div className="flex items-center gap-3">
              <Link to="/contact">
                <Button
                  size="sm"
                  className="bg-[#008A61] text-white rounded-full shadow-soft hover:opacity-90 px-4"
                >
                  Enroll Now
                </Button>
              </Link>
              <Link to="/franchise-enquiry">
                <Button
                  size="sm"
                  className="bg-[#E5B624] text-white rounded-full shadow-soft hover:opacity-90 px-4"
                >
                  Franchise Enquiry
                </Button>
              </Link>
            </div>
          </div>
        </motion.nav>
      </div>

        {/* Mobile Layout */}
      <div className="lg:hidden">

        {/* Main Header - Mobile */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-soft" : "bg-white"
            }`}
        >
          <div className="container flex items-center justify-between py-4">
            {/* Logo - Left */}
            <Link to="/" className="flex flex-col">
              <img src={logo} alt="Fair Fin" className="h-16 w-auto" />
            </Link>

            {/* Modern Menu Button - Right */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 group"
            >
              <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>

          {/* Navigation Menu - Mobile - Only show when menu is open */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-gray-200 bg-white"
              >
                <div className="container py-4">
                  <div className="flex flex-col space-y-3">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          if (location.pathname === link.href) {
                            scrollToTop();
                          }
                        }}
                        className={`font-medium transition-colors py-2 px-4 rounded-lg ${location.pathname === link.href 
                          ? "text-primary bg-primary/10" 
                          : "text-gray-700 hover:text-primary hover:bg-gray-50"
                          }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                    
                    {/* Action Buttons in Menu */}
                    <div className="pt-6 border-t border-gray-100 space-y-6 flex flex-col items-center">
                      <Link 
                        to="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full max-w-xs"
                      >
                        <Button
                          size="sm"
                          className="w-full bg-[#008A61] text-white rounded-full shadow-soft hover:opacity-90 py-2 text-sm"
                        >
                          Enroll Now
                        </Button>
                      </Link>
                      <Link 
                        to="/franchise-enquiry"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full max-w-xs"
                      >
                        <Button
                          size="sm"
                          className="w-full bg-[#E5B624] text-white rounded-full shadow-soft hover:opacity-90 py-2 text-sm"
                        >
                          Franchise Enquiry
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </>
  );
};
