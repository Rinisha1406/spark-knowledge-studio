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
        {/* Top Bar with Email and Social Icons - Desktop Only - Fixed */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#008A61] text-white py-2">
          <div className="container flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">contact@brainbay.in</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-accent transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Header - Desktop - Fixed with top margin for top bar */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-soft" : "bg-white"
            }`}
        >
          <div className="container flex items-center justify-between py-4">
            {/* Phone Number - Left */}
            <a href="tel:+919941076103" className="flex items-center gap-2 border border-[#008A61] rounded-full p-2 hover:bg-[#FF9800] hover:bg-opacity-10 transition-colors">
              <Phone className="w-5 h-5 text-[#008A61]" />
              <span className="text-lg font-semibold text-[#008A61]">+91 9941076103</span>
            </a>

            {/* Logo - Center */}
            <Link to="/" className="flex flex-col items-center justify-center">
              <img src={logo} alt="The Brainbay" className="h-20 w-auto" />
              <div className="text-center mt-1">
                <p className="text-sm font-medium text-gray-700">Exploring young minds</p>
              </div>
            </Link>

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

          {/* Navigation Menu - Bottom */}
          <div className="border-t border-gray-200">
            <div className="container">
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
            </div>
          </div>
        </motion.nav>
      </div>

        {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Top Bar - Green */}
        <div className="bg-[#008A61] py-2 px-4 flex flex-col items-center justify-center text-white">
          <div className="flex items-center gap-2 mb-1">
            <Mail className="w-4 h-4" />
            <span className="text-sm">contact@brainbay.in</span>
          </div>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Main Header - Mobile */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-soft" : "bg-white"
            }`}
        >
          <div className="container flex flex-col items-center py-4 gap-4">
            {/* Mobile Phone Number */}
              <div className="flex flex-col items-center py-2">
                <a
                  href="tel:+919941076103"
                  className="flex items-center gap-2 border-2 rounded-full p-2 transition-colors
                            border-[#008A61] hover:bg-[#008A61] hover:bg-opacity-10"
                >
                  <Phone className="w-5 h-5 text-[#008A61]" />
                  <span className="text-lg font-semibold text-[#008A61]">
                    +91 9941076103
                  </span>
                </a>
              </div>

            {/* Logo - Mobile */}
            <Link to="/" className="flex flex-col items-center justify-center">
              <img src={logo} alt="The Brainbay" className="h-28 w-auto" />
              <div className="text-center mt-1">
                <p className="text-sm font-medium text-gray-700">Exploring young minds</p>
                <p className="text-xs text-gray-600">AN ISO 9001:2015 CERTIFIED COMPANY</p>
              </div>
            </Link>

            {/* Mobile Buttons - Stacked Vertically */}
            <div className="flex flex-col items-center gap-3 w-full max-w-xs px-4">
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

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="bg-[#8BC34A] text-white p-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Menu - Mobile - Only show when menu is open */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-gray-200"
              >
                <div className="container">
                  <div className="flex flex-wrap items-center justify-center gap-4 py-3">
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
                        className={`font-medium transition-colors text-sm ${location.pathname === link.href ? "text-primary" : "text-gray-700 hover:text-primary"
                          }`}
                      >
                        {link.name}
                      </Link>
                    ))}
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
