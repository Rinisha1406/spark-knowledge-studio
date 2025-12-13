import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Calculator, 
  BookOpenText, 
  BrainCircuit, 
  PenTool, 
  Languages, 
  MessageCircle,
  MessagesSquare,
  GraduationCap,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const courses = [
  {
    icon: Calculator,
    title: "Abacus",
    description: "Level-wise structured program for mental math excellence",
    features: [
      "Improves mental math & calculation speed",
      "Enhances focus, memory & concentration",
      "Certified trainers with proven methods",
      "Student books & practice materials provided"
    ],
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: BookOpenText,
    title: "Phonics",
    description: "Systematic reading program for early learners",
    features: [
      "Improves pronunciation & blending skills",
      "Develops reading fluency step-by-step",
      "Suitable for beginners & early learners",
      "Fun & engaging learning activities"
    ],
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: BrainCircuit,
    title: "Vedic Maths",
    description: "Ancient techniques for lightning-fast calculations",
    features: [
      "Shortcut techniques for fast calculation",
      "Helps in school & competitive exams",
      "Covers all arithmetic operations",
      "Mental math mastery techniques"
    ],
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: PenTool,
    title: "Handwriting",
    description: "Improve penmanship with structured practice",
    features: [
      "Cursive & print handwriting improvement",
      "Focus on letter formation & spacing",
      "Personalized practice sheets",
      "Regular progress assessments"
    ],
    color: "from-rose-500 to-pink-600"
  },
  {
    icon: Languages,
    title: "Hindi",
    description: "Comprehensive Hindi language learning",
    features: [
      "Level-wise structured curriculum",
      "Reading, writing & grammar",
      "Conversation practice",
      "Beginner to advanced levels"
    ],
    color: "from-orange-500 to-amber-600"
  },
  {
    icon: MessageCircle,
    title: "Spoken English",
    description: "Build confidence in English communication",
    features: [
      "Daily use English practice",
      "Grammar & vocabulary building",
      "Conversation & public speaking",
      "Builds speaking confidence"
    ],
    color: "from-sky-500 to-blue-600"
  },
  {
    icon: MessagesSquare,
    title: "Spoken Hindi",
    description: "Practical Hindi for daily communication",
    features: [
      "Practical spoken Hindi skills",
      "Daily communication focus",
      "Speaking & listening practice",
      "Vocabulary building exercises"
    ],
    color: "from-lime-500 to-green-600"
  },
  {
    icon: GraduationCap,
    title: "Mathematics",
    description: "School syllabus support with concept clarity",
    features: [
      "Aligned with school syllabus",
      "Concepts explained with examples",
      "Weekly practice worksheets",
      "Regular doubt clearing sessions"
    ],
    color: "from-indigo-500 to-blue-600"
  }
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative py-24 gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-20" />
          <div className="container relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
            >
              Student Courses
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/90 max-w-2xl mx-auto"
            >
              Comprehensive skill development programs for ages 4-14
            </motion.p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group h-full"
                >
                  <div className="h-full flex flex-col bg-card rounded-2xl border border-border/50 shadow-card hover:shadow-elevated transition-all duration-500 overflow-hidden">
                    {/* Card Header with Gradient */}
                    <div className={`p-6 bg-gradient-to-r ${course.color}`}>
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                        <course.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{course.title}</h3>
                      <p className="text-white/80 text-sm mt-1">{course.description}</p>
                    </div>

                    {/* Card Body */}
                    <div className="flex-1 p-6 flex flex-col">
                      <ul className="space-y-3 flex-1">
                        {course.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Button - Always at bottom */}
                      <div className="mt-6 pt-4 border-t border-border">
                        <Link to="/contact">
                          <Button className="w-full gradient-green text-primary-foreground hover:opacity-90 group/btn">
                            Enquire Now
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Ready to Enroll Your Child?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Give your child the gift of quality education. Contact us today for a free demo class!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gradient-green text-primary-foreground hover:opacity-90">
                    Book Free Demo
                  </Button>
                </Link>
                <a href="tel:+919092592817">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Call Now: +91 9092592817
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
