import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award, Star, Play, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import heroChildren from "@/assets/hero-children.jpg";
import logo from "@/assets/logo.png";

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
  "Teacher Training"
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-10 lg:pt-40">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      
      {/* Animated decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full animate-float blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full animate-float-delayed blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-primary-foreground/10 rounded-full animate-pulse-soft blur-2xl" />
      
      {/* Floating icons */}
      <motion.div 
        className="absolute top-32 right-[20%] hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center shadow-elevated">
          <Sparkles className="w-8 h-8 text-accent-foreground" />
        </div>
      </motion.div>

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - About Page Design */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }} 
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-10 border border-border/50">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/30 rounded-full blur-2xl" />

              <div className="relative text-center">
                <img
                  src={logo}
                  alt="Fairfin Eduhub Academy Logo"
                  className="w-48 h-48 mx-auto mb-8 drop-shadow-xl"
                />
                <h3 className="text-3xl font-bold mb-3 text-foreground">Fairfin Eduhub Academy</h3>
                <p className="text-foreground mb-4">A unit of Fairfin Technologies and Solutions</p>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/20 text-accent-foreground font-semibold text-sm">
                  <Award className="w-4 h-4" />
                  ISO 9001:2015 Registered
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.6 + index * 0.1 }} 
                  className="bg-primary-foreground/10 backdrop-blur-md rounded-xl p-4 text-center border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-xs text-primary-foreground/80 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Original Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-primary-foreground"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }} 
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 border border-primary-foreground/20"
            >
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold">ISO 9001:2015 Registered</span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3 }} 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
            >
              Empowering <br />
              Young Minds with{" "}
              <span className="text-accent relative">
                Skill Development
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
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
              transition={{ delay: 0.4 }} 
              className="text-lg md:text-xl opacity-90 mb-8 max-w-xl leading-relaxed"
            >
              Premium education programs designed for children ages 4-14. We nurture young minds with proven teaching methods and certified trainers.
            </motion.p>

            {/* Highlights Tags */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {highlights.map((item, i) => (
                <span 
                  key={i}
                  className="px-3 py-1.5 text-sm bg-primary-foreground/10 rounded-full border border-primary-foreground/20"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.5 }} 
              className="flex flex-wrap gap-4"
            >
              <Link to="/courses">
                <Button size="lg" className="h-14 px-8 gradient-accent text-accent-foreground font-bold shadow-elevated hover:opacity-90 group text-base">
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-8 border-2 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/10 text-base font-semibold"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Book Free Demo
                </Button>
              </Link>
            </motion.div>

            {/* Tagline */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.7 }} 
              className="mt-10 flex items-center gap-4"
            >
              <p className="text-xl font-heading italic text-accent font-medium">
                "Learn, Explore, Achieve"
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent max-w-32" />
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
