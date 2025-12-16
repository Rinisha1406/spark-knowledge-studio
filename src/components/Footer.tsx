import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Teacher Training", href: "/training" },
  { name: "Contact", href: "/contact" },
];

const courses = [
  "Abacus",
  "Phonics",
  "Vedic Maths",
  "Handwriting",
  "Spoken English",
  "Mathematics",
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative">
      {/* Main Footer */}
      <div className="gradient-hero text-primary-foreground pt-16 pb-8">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-block"
              >
                <img src={logo} alt="Fairfin Eduhub Academy" className="h-20 w-auto mb-4 bg-white rounded-lg p-2 hover:opacity-90 transition-opacity" />
              </Link>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Empowering young minds with quality skill development programs. 
                ISO 9001:2015 certified institution for ages 4-14.
              </p>
              <p className="text-sm italic text-accent">"Learn, Explore, Achieve"</p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.name === 'Home' ? '/' : link.href}
                      className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-bold text-lg mb-4">Our Courses</h4>
              <ul className="space-y-2">
                {courses.map((course) => (
                  <li key={course}>
                    <Link
                      to="/courses"
                      className="text-primary-foreground/70 hover:text-accent transition-colors text-sm block"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      {course}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-bold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                  <div>
                    <a href="tel:+919092592817" className="text-primary-foreground/80 hover:text-accent transition-colors block">
                      +91 9092592817
                    </a>
                    <a href="tel:+919600024136" className="text-primary-foreground/80 hover:text-accent transition-colors block">
                      +91 9600024136
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                  <a href="mailto:fairfineduhubacademy@outlook.com" className="text-primary-foreground/80 hover:text-accent transition-colors break-all">
                    fairfineduhubacademy@outlook.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                  <span className="text-primary-foreground/80">
                    CRM Nagar, Poonamallee, Chennai - 56
                  </span>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://www.instagram.com/gomathichinni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/share/14KFNu2SzwK/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Fairfin Eduhub Academy. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/70">
              Proprietor: <span className="text-accent">Gomathi Parthiban</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full gradient-accent text-accent-foreground shadow-elevated flex items-center justify-center hover:scale-110 transition-transform z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};
