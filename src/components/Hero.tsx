import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award, Star, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useEffect, useState } from "react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Students", description: "Growing every year" },
  { icon: BookOpen, value: "10+", label: "Skill Programs", description: "Comprehensive courses" },
  { icon: Award, value: "ISO", label: "Certified", description: "Quality assured" },
  { icon: Star, value: "4.9", label: "Parent Rating", description: "Trusted by families" },
];

const highlights = [
  "Abacus & Mental Math",
  "Phonics & Reading",
  "Vedic Maths",
  "Handwriting",
  "Languages",
  "Teacher Training",
];

// Rotating hero words
const heroWords = ["Skill Development", "Bright Futures", "Young Achievers", "Strong Foundations"];

// Floating particles config
const particles = [
  { size: 10, x: "15%", y: "20%", delay: 0, duration: 8, drift: "drift-1" },
  { size: 6, x: "80%", y: "15%", delay: 1, duration: 10, drift: "drift-2" },
  { size: 14, x: "70%", y: "75%", delay: 2, duration: 7, drift: "drift-3" },
  { size: 8, x: "30%", y: "80%", delay: 0.5, duration: 9, drift: "drift-4" },
  { size: 5, x: "50%", y: "10%", delay: 3, duration: 11, drift: "drift-1" },
  { size: 12, x: "90%", y: "55%", delay: 1.5, duration: 8, drift: "drift-2" },
  { size: 7, x: "10%", y: "60%", delay: 2.5, duration: 10, drift: "drift-3" },
];

export const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((p) => (p + 1) % heroWords.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-10 lg:pt-20">
      {/* ── Animated gradient background ── */}
      <div className="absolute inset-0 gradient-hero animate-gradient" style={{ backgroundSize: "300% 300%" }} />
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />

      {/* ── Large glowing orbs ── */}
      <div className="absolute top-16 right-8 w-80 h-80 bg-accent/25 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-16 left-8 w-96 h-96 bg-secondary/25 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-primary-foreground/10 rounded-full blur-2xl animate-float-slow" />

      {/* ── Floating particles ── */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-accent/60 animate-${p.drift}`}
          style={{ width: p.size, height: p.size, left: p.x, top: p.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.7, 0.5, 0.8, 0.5], scale: 1 }}
          transition={{ delay: p.delay, duration: p.duration, repeat: Infinity, repeatType: "reverse" }}
        />
      ))}

      {/* ── Spinning decorative ring ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none hidden lg:block">
        <div className="w-full h-full rounded-full border border-primary-foreground/8 animate-spin-slow" />
        <div className="absolute inset-10 rounded-full border border-accent/10 animate-spin-reverse" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Logo card + stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-foreground/12 via-primary-foreground/6 to-accent/8 rounded-3xl p-10 border border-primary-foreground/20 backdrop-blur-sm animate-glow">
              {/* Shimmer sweep */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 animate-shimmer" />
              </div>

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/30 rounded-full blur-2xl" />

              <div className="relative text-center">
                {/* Pulsing ring around logo */}
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <span className="absolute inset-0 rounded-full bg-accent/20 animate-ping-slow" />
                  <motion.img
                    src={logo}
                    alt="Fairfin Eduhub Academy Logo"
                    className="w-full h-full drop-shadow-xl relative z-10"
                    animate={{ rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <h3 className="text-3xl font-bold mb-3 text-primary-foreground">Fairfin Eduhub Academy</h3>
                <p className="text-primary-foreground/80 mb-4">A unit of Fairfin Technologies and Solutions</p>
                <motion.div
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/20 text-accent-foreground font-semibold text-sm"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <Award className="w-4 h-4" />
                  ISO 9001:2015 Registered
                </motion.div>
              </div>
            </div>

            {/* ── Stats grid ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.12, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="bg-primary-foreground/12 backdrop-blur-md rounded-xl p-4 text-center border border-primary-foreground/15 hover:bg-primary-foreground/20 transition-colors cursor-default"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-xs text-primary-foreground/75 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Text content ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-primary-foreground"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              className="inline-flex items-center gap-2 bg-primary-foreground/12 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 border border-primary-foreground/20"
            >
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold">ISO 9001:2015 Registered</span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </motion.div>

            {/* Main Heading with rotating word */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
            >
              Empowering <br />
              Young Minds with{" "}
              <span className="text-accent relative inline-block min-w-[10px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="block"
                  >
                    {heroWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
                {/* Underline */}
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.9 }}
                >
                  <motion.path
                    d="M0 6 Q 75 0, 150 6 Q 225 12, 300 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-lg md:text-xl opacity-90 mb-8 max-w-xl leading-relaxed"
            >
              Premium education programs designed for children ages 4-14. We nurture young minds with proven teaching methods and certified trainers.
            </motion.p>

            {/* Highlight Tags with stagger */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } } }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {highlights.map((item, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.7, y: 10 },
                    visible: { opacity: 1, scale: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  className="px-3 py-1.5 text-sm bg-primary-foreground/12 rounded-full border border-primary-foreground/20 cursor-default transition-colors"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/courses">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" className="h-14 px-8 gradient-accent text-accent-foreground font-bold shadow-elevated hover:opacity-90 group text-base relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Courses
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 animate-shimmer pointer-events-none" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex items-center gap-4"
            >
              <p className="text-xl font-heading italic text-accent font-medium">
                "Learn, Explore, Achieve"
              </p>
              <motion.div
                className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent max-w-32"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 0.7 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};
