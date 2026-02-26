import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle, Calendar, Award, MapPin, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const benefits = [
  "Free demo class available",
  "Flexible batch timings",
  "Certified trainers",
  "Proven curriculum",
];

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-hero animate-gradient" style={{ backgroundSize: "300% 300%" }} />
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />



      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-semibold text-sm mb-6 border border-primary-foreground/20"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Calendar className="w-4 h-4 text-accent" />
              </motion.div>
              Enroll Today
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight"
            >
              Ready to Give Your Child the{" "}
              <span className="text-accent relative">
                Best Start
                <motion.svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.7 }}
                >
                  <motion.path
                    d="M0 4 Q 50 0, 100 4 Q 150 8, 200 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>{" "}
              in Life?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-primary-foreground/80 mb-8 leading-relaxed"
            >
              Join hundreds of families who trust Fairfin Eduhub Academy for their children's skill development.
              Book a free demo class today and see the difference!
            </motion.p>

            {/* Benefits List */}
            <motion.ul
              className="grid sm:grid-cols-2 gap-4 mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
            >
              {benefits.map((benefit) => (
                <motion.li
                  key={benefit}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 200 } },
                  }}
                  className="flex items-center gap-3 text-primary-foreground"
                >
                  <motion.div whileHover={{ scale: 1.3, rotate: 10 }}>
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  </motion.div>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="tel:+919092592817">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 text-lg relative overflow-hidden group"
                  >
                    <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    +91 9092592817
                    <span className="absolute inset-0 animate-shimmer pointer-events-none" />
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right Content - Info Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-6"
          >
            {/* Trust Card */}
            <motion.div
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 relative overflow-hidden group"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-5 relative">
                <motion.div
                  className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center flex-shrink-0 shadow-lg"
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Award className="w-8 h-8 text-accent-foreground" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">ISO 9001:2015 Certified</h3>
                  <p className="text-primary-foreground/80">
                    Quality assured education following international standards. Your child deserves the best!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 relative overflow-hidden group"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-5 relative">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">2 Convenient Locations</h3>
                  <p className="text-primary-foreground/80 mb-3">
                    Visit us at Poonamallee or Mangadu, Chennai. Choose the center closest to you!
                  </p>
                  <Link to="/contact" className="text-accent font-semibold hover:underline inline-flex items-center gap-1 group/link">
                    View Locations
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "500+", label: "Students" },
                { value: "10+", label: "Courses" },
                { value: "5+", label: "Years" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 250 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 text-center border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors cursor-default"
                >
                  <motion.div
                    className="text-2xl font-bold text-accent"
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  >
                    {s.value}
                  </motion.div>
                  <div className="text-sm text-primary-foreground/70">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
