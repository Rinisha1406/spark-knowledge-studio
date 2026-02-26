import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Calculator, BookOpenText, BrainCircuit, PenTool, Languages, MessageCircle, ArrowRight, CheckCircle, Star, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useRef, MouseEvent } from "react";

import abacusImg from "../assets/abacus.jpg";
import phonicsImg from "../assets/phonics.jpg";
import vedicMathsImg from "../assets/vedic_maths.jpg";
import handwritingImg from "../assets/handwriting.jpg";
import hindiImg from "../assets/hindi.jpg";
import spokenEnglishImg from "../assets/spoken_english.jpg";

const courses = [
  {
    icon: Calculator,
    title: "Abacus",
    description: "Mental math excellence with level-wise structured program",
    features: ["Mental math mastery", "Improves concentration", "Certified trainers"],
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-200",
    popular: true,
    image: abacusImg,
  },
  {
    icon: BookOpenText,
    title: "Phonics",
    description: "Systematic reading program for early learners",
    features: ["Reading fluency", "Pronunciation skills", "Fun activities"],
    color: "from-blue-500 to-cyan-600",
    shadow: "shadow-blue-200",
    popular: false,
    image: phonicsImg,
  },
  {
    icon: BrainCircuit,
    title: "Vedic Maths",
    description: "Lightning-fast calculation techniques",
    features: ["Shortcut methods", "Exam preparation", "Mental agility"],
    color: "from-violet-500 to-purple-600",
    shadow: "shadow-violet-200",
    popular: true,
    image: vedicMathsImg,
  },
  {
    icon: PenTool,
    title: "Handwriting",
    description: "Improve penmanship with expert guidance",
    features: ["Neat writing", "Letter formation", "Practice sheets"],
    color: "from-rose-500 to-pink-600",
    shadow: "shadow-rose-200",
    popular: false,
    image: handwritingImg,
  },
  {
    icon: Languages,
    title: "Hindi",
    description: "Comprehensive Hindi language learning",
    features: ["Reading & writing", "Grammar basics", "Conversation skills"],
    color: "from-orange-500 to-amber-600",
    shadow: "shadow-orange-200",
    popular: false,
    image: hindiImg,
  },
  {
    icon: MessageCircle,
    title: "Spoken English",
    description: "Build confidence in English communication",
    features: ["Fluent speaking", "Vocabulary building", "Public speaking"],
    color: "from-sky-500 to-blue-600",
    shadow: "shadow-sky-200",
    popular: false,
    image: spokenEnglishImg,
  },
];

/* â”€â”€ Tilt-on-hover card â”€â”€ */
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const resetTilt = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={resetTilt}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring" as const, stiffness: 180, damping: 20 },
  },
};

export const CoursesPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/2 left-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl -translate-y-1/2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-0 w-80 h-80 bg-accent/8 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4"
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-4 h-4" />
            </motion.span>
            Our Programs
          </motion.span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Popular Student{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Courses</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Explore our most sought-after skill development programs designed specifically for children ages 4-14.
            Each course is crafted to build essential life skills through engaging methods.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {courses.map((course) => (
            <motion.div
              key={course.title}
              variants={cardVariants}
              className="group relative"
            >
              {/* Popular badge */}
              {course.popular && (
                <motion.div
                  className="absolute -top-3 -right-3 z-20"
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.3 }}
                >
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-lg">
                    <Zap className="w-3 h-3" fill="currentColor" />
                    Popular
                  </span>
                </motion.div>
              )}

              <div className="h-full">
                <div
                  className={`h-full bg-card rounded-2xl border border-border/50 shadow-card relative overflow-hidden flex flex-col cursor-default`}
                >
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Icon badge */}
                    <div
                      className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-lg z-10`}
                    >
                      <course.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1">


                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-6 flex-1">
                      {course.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center gap-2 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button
                      className="w-full h-10 px-4 rounded-md border text-sm font-medium flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
                      style={{ borderColor: "hsl(var(--primary) / 0.4)", color: "hsl(var(--primary))", backgroundColor: "transparent" }}
                      onMouseEnter={e => { const el = e.currentTarget; el.style.backgroundColor = "hsl(var(--primary))"; el.style.color = "hsl(var(--primary-foreground))"; el.style.borderColor = "hsl(var(--primary))"; }}
                      onMouseLeave={e => { const el = e.currentTarget; el.style.backgroundColor = "transparent"; el.style.color = "hsl(var(--primary))"; el.style.borderColor = "hsl(var(--primary) / 0.4)"; }}
                      onClick={() => navigate(`/courses#${course.title.toLowerCase().replace(/\s+/g, '-')}`)}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block relative">
            {/* Glow ring */}
            <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary blur-sm opacity-50 group-hover:opacity-80 animate-pulse-soft" />
            <Button
              size="lg"
              className="relative h-14 px-10 gradient-green text-primary-foreground hover:opacity-90 group text-base font-semibold overflow-hidden"
              onClick={() => navigate('/courses')}
            >
              <span className="relative z-10 flex items-center gap-2">
                View All 8 Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 animate-shimmer pointer-events-none" />
            </Button>
          </motion.div>
          <p className="mt-4 text-sm text-muted-foreground">
            Including Mathematics, Spoken Hindi & more
          </p>
        </motion.div>
      </div>
    </section>
  );
};
