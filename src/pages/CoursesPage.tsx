import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { EnrollmentPopup } from "@/components/EnrollmentPopup";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Star,
  Sparkles,
  GraduationCap,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Import images
import abacusImg from "@/assets/abacus.jpg";
import phonicsImg from "@/assets/phonics.jpg";
import vedicMathsImg from "@/assets/vedic_maths.jpg";
import handwritingImg from "@/assets/handwriting.jpg";
import hindiImg from "@/assets/hindi.jpg";
import spokenEnglishImg from "@/assets/spoken_english.jpg";
import spokenHindiImg from "@/assets/spoken_hindi.jpg";
import mathematicsImg from "@/assets/mathematics.jpg";

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

const courses = [
  {
    title: "Abacus",
    description: "Level-wise structured program for mental math excellence. Watch your child solve complex calculations mentally!",
    image: abacusImg,
    features: [
      "Improves mental math & calculation speed",
      "Enhances focus, memory & concentration",
      "Certified trainers with proven methods",
      "Student books & practice materials provided",
      "Regular assessments and competitions"
    ],
    ageGroup: "4-14 years",
    duration: "Level-wise program",
    batchSize: "8-10 students",
    color: "from-emerald-500 to-teal-600",
    popular: true
  },
  {
    title: "Phonics",
    description: "Systematic reading program that builds a strong foundation for reading and pronunciation skills.",
    image: phonicsImg,
    features: [
      "Improves pronunciation & blending skills",
      "Develops reading fluency step-by-step",
      "Suitable for beginners & early learners",
      "Fun & engaging learning activities",
      "Interactive phonics games and exercises"
    ],
    ageGroup: "4-8 years",
    duration: "3-6 months",
    batchSize: "6-8 students",
    color: "from-blue-500 to-cyan-600",
    popular: true
  },
  {
    title: "Vedic Maths",
    description: "Ancient Indian mathematics techniques for lightning-fast mental calculations and problem-solving.",
    image: vedicMathsImg,
    features: [
      "Shortcut techniques for fast calculation",
      "Helps in school & competitive exams",
      "Covers all arithmetic operations",
      "Mental math mastery techniques",
      "Advanced problem-solving methods"
    ],
    ageGroup: "8-14 years",
    duration: "3-6 months",
    batchSize: "8-10 students",
    color: "from-violet-500 to-purple-600",
    popular: true
  },
  {
    title: "Handwriting",
    description: "Transform your child's handwriting from messy to beautiful with our structured improvement program.",
    image: handwritingImg,
    features: [
      "Cursive & print handwriting improvement",
      "Focus on letter formation & spacing",
      "Personalized practice sheets",
      "Regular progress assessments",
      "Techniques for neat and fast writing"
    ],
    ageGroup: "5-14 years",
    duration: "2-4 months",
    batchSize: "6-8 students",
    color: "from-rose-500 to-pink-600",
    popular: false
  },
  {
    title: "Hindi",
    description: "Comprehensive Hindi language learning program covering reading, writing, grammar, and conversation.",
    image: hindiImg,
    features: [
      "Level-wise structured curriculum",
      "Reading, writing & grammar mastery",
      "Conversation and speaking practice",
      "Beginner to advanced levels",
      "Literature and poetry appreciation"
    ],
    ageGroup: "5-14 years",
    duration: "6-12 months",
    batchSize: "8-10 students",
    color: "from-orange-500 to-amber-600",
    popular: false
  },
  {
    title: "Spoken English",
    description: "Build confidence in English communication with our comprehensive spoken English program.",
    image: spokenEnglishImg,
    features: [
      "Daily use English practice",
      "Grammar & vocabulary building",
      "Conversation & public speaking",
      "Builds speaking confidence",
      "Role-plays and interactive sessions"
    ],
    ageGroup: "6-14 years",
    duration: "3-6 months",
    batchSize: "8-10 students",
    color: "from-sky-500 to-blue-600",
    popular: false
  },
  {
    title: "Spoken Hindi",
    description: "Practical Hindi communication skills for daily conversation and effective communication.",
    image: spokenHindiImg,
    features: [
      "Practical spoken Hindi skills",
      "Daily communication focus",
      "Speaking & listening practice",
      "Vocabulary building exercises",
      "Cultural context learning"
    ],
    ageGroup: "5-14 years",
    duration: "3-6 months",
    batchSize: "8-10 students",
    color: "from-lime-500 to-green-600",
    popular: false
  },
  {
    title: "Mathematics",
    description: "School syllabus support with concept clarity and regular practice for academic excellence.",
    image: mathematicsImg,
    features: [
      "Aligned with school syllabus",
      "Concepts explained with examples",
      "Weekly practice worksheets",
      "Regular doubt clearing sessions",
      "Exam preparation support"
    ],
    ageGroup: "6-14 years",
    duration: "Ongoing support",
    batchSize: "6-8 students",
    color: "from-indigo-500 to-blue-600",
    popular: false
  }
];

const processSteps = [
  {
    step: "01",
    title: "Free Demo Class",
    description: "Experience our teaching methodology firsthand with a complimentary demo session"
  },
  {
    step: "02",
    title: "Assessment",
    description: "We assess your child's current level to place them in the right batch"
  },
  {
    step: "03",
    title: "Enrollment",
    description: "Choose a convenient batch timing and complete the enrollment process"
  },
  {
    step: "04",
    title: "Start Learning",
    description: "Begin the exciting journey of skill development with our expert trainers"
  }
];

const CoursesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleEnquireClick = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setIsPopupOpen(true);
  };
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative pt-32 lg:pt-56 py-28 gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-20" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />

          <div className="container relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-semibold text-sm mb-6 border border-primary-foreground/20"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              8 Comprehensive Programs
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
            >
              Student Courses
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive skill development programs designed for children ages 4-14.
              Each course is crafted to build essential skills through engaging, proven methodologies.
            </motion.p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                Choose Your Program
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Skill Development Courses
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Each program is designed by experts to deliver maximum learning outcomes
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  id={course.title.toLowerCase().replace(/\s+/g, '-')}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group h-full relative"
                >
                  {/* Popular badge */}
                  {course.popular && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-lg">
                        <Star className="w-3 h-3" fill="currentColor" />
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="h-full flex flex-col bg-card rounded-3xl border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden">
                    {/* Card Header with Image or Gradient */}
                    <div className={`h-64 overflow-hidden`}>
                      {course.image ? (
                        <ImageWithLoading
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className={`h-full p-8 bg-gradient-to-br ${course.color}`}>
                          <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                          <p className="text-white/85 leading-relaxed">{course.description}</p>
                        </div>
                      )}
                    </div>
                    {/* Course title and description for image cards */}
                    {course.image && (
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">

                          <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-4 line-clamp-3 min-h-[4.5rem]">{course.description}</p>
                      </div>
                    )}

                    {/* Card Body */}
                    <div className="flex-1 px-6 pb-6 flex flex-col">
                      {/* Course Meta */}
                      <div className="grid grid-cols-3 gap-3 mb-4 border-b border-border pb-4">
                        <div className="text-center">
                          <Users className="w-5 h-5 mx-auto mb-1 text-primary" />
                          <p className="text-xs text-muted-foreground">{course.ageGroup}</p>
                        </div>
                        <div className="text-center">
                          <Clock className="w-5 h-5 mx-auto mb-1 text-primary" />
                          <p className="text-xs text-muted-foreground">{course.duration}</p>
                        </div>
                        <div className="text-center">
                          <GraduationCap className="w-5 h-5 mx-auto mb-1 text-primary" />
                          <p className="text-xs text-muted-foreground">{course.batchSize}</p>
                        </div>
                      </div>

                      {/* Features */}
                      {/* Features */}
                      <ul className="space-y-3 flex-1 mb-6">
                        {course.features.slice(0, 5).map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm min-h-[1.25rem]">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground line-clamp-1">{feature}</span>
                          </li>
                        ))}
                        {/* Fill empty spots if less than 5 features to keep height alignment */}
                        {Array.from({ length: Math.max(0, 5 - course.features.length) }).map((_, i) => (
                          <li key={`empty-${i}`} className="flex items-start gap-3 text-sm min-h-[1.25rem] invisible">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">Placeholder</span>
                          </li>
                        ))}
                      </ul>

                      {/* Button - Always at bottom */}
                      <Button
                        onClick={() => handleEnquireClick(course.title)}
                        className="w-full h-12 gradient-green text-primary-foreground hover:opacity-90 group/btn text-base font-semibold"
                      >
                        Enquire Now
                        <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment Process */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Simple Enrollment Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Getting started is easy! Follow these simple steps to enroll your child
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connector line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/20 -translate-x-1/2" />
                  )}

                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full gradient-green flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />

      {/* Enrollment Popup */}
      <EnrollmentPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        selectedCourse={selectedCourse}
      />
    </div>
  );
};

export default CoursesPage;
