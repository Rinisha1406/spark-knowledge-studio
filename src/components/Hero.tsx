import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import heroChildren from "@/assets/hero-children.jpg";

const stats = [
  { icon: Users, value: "500+", label: "Students" },
  { icon: BookOpen, value: "10+", label: "Courses" },
  { icon: Award, value: "ISO", label: "Certified" },
  { icon: Star, value: "4.9", label: "Rating" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full animate-float blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full animate-float-delayed blur-3xl" />

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-primary-foreground">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">ISO 9001:2015 Registered</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Young Minds with <span className="text-accent">Skill Development</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg md:text-xl opacity-90 mb-8 max-w-xl">
              Premium education programs including Abacus, Phonics, Vedic Maths, Handwriting & more for children ages 4-14.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4">
              <Link to="/courses">
                <Button size="lg" className="gradient-accent text-accent-foreground font-semibold shadow-elevated hover:opacity-90 group">
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10">
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-8 text-lg font-heading italic text-accent">
              "Learn, Explore, Achieve"
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated mb-6">
              <img src={heroChildren} alt="Happy children learning at Fairfin Eduhub Academy" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {stats.map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + index * 0.1 }} className="bg-primary-foreground/10 backdrop-blur-md rounded-xl p-3 text-center border border-primary-foreground/10">
                  <stat.icon className="w-6 h-6 mx-auto mb-1 text-accent" />
                  <div className="text-lg font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-xs text-primary-foreground/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};
