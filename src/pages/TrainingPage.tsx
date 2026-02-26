import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { TrainingEnrollmentPopup } from "@/components/TrainingEnrollmentPopup";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { Calculator, BrainCircuit, BookOpenText, Award, Clock, Users, CheckCircle, ArrowRight, Briefcase, GraduationCap, Target, Star, Sparkles, TrendingUp, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Import images
import abacusTrain from "@/assets/abacus_practice.jpg";
import vedicMathsTrain from "@/assets/vedic_maths_speed.jpg";
import phonicsTrain from "@/assets/phonics_reading.jpg";

const ImageWithLoading = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-muted-foreground/20" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

const trainings = [
  {
    icon: Calculator,
    title: "Abacus Teacher Training",
    description: "Become a certified Abacus trainer and start your own successful teaching career or academy",
    duration: "3-6 Months",
    certification: "Level-wise Certification",
    mode: "Online & Offline",
    image: abacusTrain,
    features: [
      "Complete training with study materials",
      "Level-wise teaching methodology",
      "Hands-on practice sessions",
      "Business guidance & support",
      "Certification upon completion",
      "Ongoing mentorship support",
      "Student acquisition strategies",
      "Marketing assistance provided"
    ],
    outcomes: [
      "Start your own Abacus academy",
      "Join established centers",
      "Teach online or offline"
    ],
    color: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.2)",
  },
  {
    icon: BrainCircuit,
    title: "Vedic Maths Teacher Training",
    description: "Master the art of teaching ancient Vedic Mathematics techniques and fast calculation methods",
    duration: "2-4 Months",
    certification: "Professional Certificate",
    mode: "Online & Offline",
    image: vedicMathsTrain,
    features: [
      "Learn all Vedic Maths sutras",
      "Fast calculation techniques",
      "Teaching methodology training",
      "Practice with real students",
      "Certification on completion",
      "Career support provided",
      "Lesson planning guidance",
      "Assessment creation skills"
    ],
    outcomes: [
      "Teach in schools or coaching centers",
      "Start private tuitions",
      "Online teaching opportunities"
    ],
    color: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.2)",
  },
  {
    icon: BookOpenText,
    title: "Phonics Teacher Training",
    description: "Learn to teach reading effectively using the phonics approach and help children become fluent readers",
    duration: "2-3 Months",
    certification: "Phonics Instructor Certificate",
    mode: "Online & Offline",
    image: phonicsTrain,
    features: [
      "Jolly Phonics based approach",
      "Blending & segmenting techniques",
      "Teaching tools & resources",
      "Classroom management skills",
      "Certification included",
      "Job placement assistance",
      "Interactive teaching methods",
      "Special needs accommodation"
    ],
    outcomes: [
      "Teach in pre-schools",
      "Start phonics classes",
      "Early childhood education"
    ],
    color: "from-blue-500 to-cyan-600",
    glow: "rgba(59,130,246,0.2)",
  }
];

const benefits = [
  { icon: Award, title: "Certified Programs", description: "Receive recognized certification that validates your teaching skills and expertise", accent: "from-amber-400 to-orange-500" },
  { icon: Clock, title: "Flexible Schedule", description: "Weekend and weekday batches available to suit your timing and commitments", accent: "from-blue-400 to-cyan-500" },
  { icon: Users, title: "Small Batches", description: "Personalized attention with limited seats per batch for better learning", accent: "from-emerald-400 to-teal-500" },
  { icon: Briefcase, title: "Career Support", description: "Guidance to start your own academy or get placed in established centers", accent: "from-rose-400 to-pink-500" },
  { icon: TrendingUp, title: "Business Guidance", description: "Learn how to market your services and acquire students effectively", accent: "from-violet-400 to-purple-500" },
  { icon: BadgeCheck, title: "Lifetime Access", description: "Access to updated materials and ongoing support even after completion", accent: "from-sky-400 to-blue-500" },
];

const successStories = [
  { name: "Sunitha R", role: "Abacus Trainer, Chennai", content: "After completing the Abacus teacher training, I started my own classes. Now I have 50+ students and growing!", initials: "SR", color: "from-emerald-500 to-teal-600" },
  { name: "Pradeep K", role: "Vedic Maths Instructor", content: "The training was comprehensive. I now teach Vedic Maths to school students and help them excel in exams.", initials: "PK", color: "from-violet-500 to-purple-600" },
  { name: "Kavitha M", role: "Phonics Teacher", content: "I work with a reputed pre-school now, all thanks to the Phonics training from Fairfin Academy.", initials: "KM", color: "from-blue-500 to-cyan-600" },
];

/* ── Animation Variants ── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 120, damping: 16 } },
};

const TrainingPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTraining, setSelectedTraining] = useState("");

  const handleEnquireClick = (trainingTitle: string) => {
    setSelectedTraining(trainingTitle);
    setIsPopupOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>

        <PageHero
          badge="Launch Your Teaching Career"
          badgeIcon={GraduationCap}
          title="Teacher Training Programs"
          highlightWord="Programs"
          description="Become a certified trainer and start your rewarding journey in education. Our comprehensive programs prepare you to excel as an instructor."
        />

        {/* ══════════════════════════════ BENEFITS ══════════════════════════════ */}
        <section className="py-20 bg-muted/50 relative overflow-hidden">
          <motion.div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
            animate={{ rotate: [0, 360] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />

          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-14"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4"
              >
                <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                  <Sparkles className="w-4 h-4" />
                </motion.span>
                Why Choose Us
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our{" "}
                <span className="relative inline-block">
                  <span className="text-gradient">Training Programs?</span>
                  <motion.span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.7 }} />
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive training that prepares you for a successful career in education
              </p>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  variants={cardVariants}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                  className="flex items-start gap-5 p-6 bg-card rounded-2xl border border-border/50 shadow-soft transition-all duration-300 group"
                >
                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.accent} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <benefit.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors duration-300">{benefit.title}</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════ TRAINING PROGRAMS ══════════════════════════════ */}
        <section className="py-24 relative overflow-hidden">
          <motion.div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"
            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />

          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4"
              >
                <motion.span animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <Sparkles className="w-4 h-4" />
                </motion.span>
                Certification Courses
              </motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Choose Your{" "}
                <span className="relative inline-block">
                  <span className="text-gradient">Training Program</span>
                  <motion.span className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.8 }} />
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Select the program that matches your passion and career goals
              </p>
            </motion.div>

            <div className="space-y-10">
              {trainings.map((training, index) => (
                <motion.div
                  key={training.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.1 }}
                  className="group"
                >
                  <motion.div
                    className="bg-card rounded-3xl border-2 border-border/50 shadow-soft overflow-hidden"
                    whileHover={{ boxShadow: `0 30px 60px ${training.glow}, 0 8px 20px rgba(0,0,0,0.06)`, borderColor: "hsl(var(--primary) / 0.25)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* 1. Full-Width Header (Modified to be more compact) */}
                    <div className={`p-6 lg:px-8 lg:py-6 bg-gradient-to-br ${training.color} relative overflow-hidden`}>
                      {/* Animated background circles */}
                      <motion.div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10"
                        animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 0] }} transition={{ duration: 8, repeat: Infinity }} />
                      <motion.div className="absolute -bottom-10 left-1/4 w-24 h-24 rounded-full bg-white/10"
                        animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 7, repeat: Infinity, delay: 1 }} />

                      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <motion.div
                              className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                              whileHover={{ scale: 1.1, rotate: 6 }}
                            >
                              <training.icon className="w-6 h-6 text-white" />
                            </motion.div>
                            <motion.h3
                              className="text-xl lg:text-2xl font-bold text-white"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                            >
                              {training.title}
                            </motion.h3>
                          </div>
                          <p className="text-white/85 text-sm lg:text-base max-w-3xl leading-relaxed">
                            {training.description}
                          </p>
                        </div>

                        {/* Meta badges on header */}
                        <div className="flex flex-wrap gap-2">
                          {[training.duration, training.mode].map((badge, i) => (
                            <motion.div key={badge}
                              className="px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm border border-white/5"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + i * 0.1 }}
                              whileHover={{ backgroundColor: "rgba(255,255,255,0.3)", scale: 1.05 }}
                            >
                              {badge}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 2. Bottom Content Section */}
                    <div className="grid lg:grid-cols-5">
                      {/* Left – Image panel */}
                      <div className="lg:col-span-2 relative h-72 lg:h-full overflow-hidden group/img border-r border-border/30">
                        <ImageWithLoading
                          src={training.image}
                          alt={training.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-6 left-6 text-white group-hover/img:translate-y-[-5px] transition-transform duration-300">
                          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-1 text-accent">Practical Training</p>
                          <p className="text-lg font-bold">Hands-on Experience</p>
                        </div>
                      </div>

                      {/* Right – features panel */}
                      <div className="lg:col-span-3 p-8 lg:p-12 bg-card">
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                          {/* Features */}
                          <div>
                            <motion.h4
                              className="font-bold text-foreground mb-4 flex items-center gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 }}
                            >
                              <CheckCircle className="w-5 h-5 text-primary" />
                              What You'll Learn
                            </motion.h4>
                            <ul className="space-y-2.5">
                              {training.features.map((feature, i) => (
                                <motion.li key={i}
                                  className="flex items-start gap-3 text-sm"
                                  initial={{ opacity: 0, x: -15 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.1 * i + 0.2 }}
                                >
                                  <motion.span whileHover={{ scale: 1.2 }}>
                                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  </motion.span>
                                  <span className="text-muted-foreground">{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Outcomes */}
                          <div>
                            <motion.h4
                              className="font-bold text-foreground mb-4 flex items-center gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.25 }}
                            >
                              <Target className="w-5 h-5 text-accent" />
                              Career Opportunities
                            </motion.h4>
                            <ul className="space-y-3 mb-6">
                              {training.outcomes.map((outcome, i) => (
                                <motion.li key={i}
                                  className="flex items-start gap-3 text-sm"
                                  initial={{ opacity: 0, x: -15 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.1 * i + 0.25 }}
                                >
                                  <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}>
                                    <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" />
                                  </motion.span>
                                  <span className="text-muted-foreground">{outcome}</span>
                                </motion.li>
                              ))}
                            </ul>

                            {/* Certification badge */}
                            <motion.div
                              className="p-4 rounded-xl bg-accent/10 border border-accent/20"
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                              whileHover={{ scale: 1.02, backgroundColor: "hsl(var(--accent) / 0.15)" }}
                            >
                              <div className="flex items-center gap-3">
                                <motion.div
                                  animate={{ rotate: [0, 10, -10, 0] }}
                                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                  <Award className="w-8 h-8 text-accent" />
                                </motion.div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Upon Completion</p>
                                  <p className="font-bold text-foreground">{training.certification}</p>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </div>

                        {/* CTA */}
                        <motion.div
                          className="flex flex-wrap gap-4 pt-6 border-t border-border"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                        >
                          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            <Button
                              onClick={() => handleEnquireClick(training.title)}
                              className="h-12 px-8 gradient-green text-primary-foreground hover:opacity-90 group/btn text-base font-semibold"
                            >
                              Enquire Now
                              <motion.span className="ml-2" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                                <ArrowRight className="w-5 h-5" />
                              </motion.span>
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            <a href="tel:+919092592817">
                              <Button variant="outline" className="h-12 px-8 border-2 text-base hover:border-primary/50 hover:text-primary transition-colors">
                                Call: +91 9092592817
                              </Button>
                            </a>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ SUCCESS STORIES ══════════════════════════════ */}
        <section className="py-24 bg-muted/30 relative overflow-hidden">
          <motion.div className="absolute top-0 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 7, repeat: Infinity }} />

          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4"
              >
                <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>⭐</motion.span>
                Success Stories
              </motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Trainers'{" "}
                <span className="relative inline-block">
                  <span className="text-gradient">Journey</span>
                  <motion.span className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.8 }} />
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Hear from those who transformed their careers through our training programs
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {successStories.map((story, index) => (
                <motion.div
                  key={story.name}
                  variants={cardVariants}
                  whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
                  className="p-8 bg-card rounded-3xl border border-border/50 shadow-soft relative overflow-hidden group"
                >
                  {/* Decorative quote mark */}
                  <motion.div
                    className="absolute -top-2 -left-2 text-8xl font-serif text-primary/8 select-none pointer-events-none leading-none"
                    animate={{ opacity: [0.06, 0.12, 0.06] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >"</motion.div>

                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${story.color}`} />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <motion.div key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i + 0.2 + index * 0.1, type: "spring", stiffness: 400 }}
                      >
                        <Star className="w-5 h-5 fill-accent text-accent" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-8 leading-relaxed text-base relative z-10">
                    "{story.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-5 border-t border-border">
                    <motion.div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${story.color} flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {story.initials}
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">{story.name}</h4>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />

      <TrainingEnrollmentPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        selectedTraining={selectedTraining}
      />
    </div>
  );
};

export default TrainingPage;
