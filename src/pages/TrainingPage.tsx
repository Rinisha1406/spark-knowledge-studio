import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { motion } from "framer-motion";
import { Calculator, BrainCircuit, BookOpenText, Award, Clock, Users, CheckCircle, ArrowRight, Briefcase, GraduationCap, Target, Star, Sparkles, TrendingUp, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const trainings = [
  {
    icon: Calculator,
    title: "Abacus Teacher Training",
    description: "Become a certified Abacus trainer and start your own successful teaching career or academy",
    duration: "3-6 Months",
    certification: "Level-wise Certification",
    mode: "Online & Offline",
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
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: BrainCircuit,
    title: "Vedic Maths Teacher Training",
    description: "Master the art of teaching ancient Vedic Mathematics techniques and fast calculation methods",
    duration: "2-4 Months",
    certification: "Professional Certificate",
    mode: "Online & Offline",
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
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: BookOpenText,
    title: "Phonics Teacher Training",
    description: "Learn to teach reading effectively using the phonics approach and help children become fluent readers",
    duration: "2-3 Months",
    certification: "Phonics Instructor Certificate",
    mode: "Online & Offline",
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
    color: "from-blue-500 to-cyan-600"
  }
];

const benefits = [
  { 
    icon: Award, 
    title: "Certified Programs", 
    description: "Receive recognized certification that validates your teaching skills and expertise" 
  },
  { 
    icon: Clock, 
    title: "Flexible Schedule", 
    description: "Weekend and weekday batches available to suit your timing and commitments" 
  },
  { 
    icon: Users, 
    title: "Small Batches", 
    description: "Personalized attention with limited seats per batch for better learning" 
  },
  { 
    icon: Briefcase, 
    title: "Career Support", 
    description: "Guidance to start your own academy or get placed in established centers" 
  },
  { 
    icon: TrendingUp, 
    title: "Business Guidance", 
    description: "Learn how to market your services and acquire students effectively" 
  },
  { 
    icon: BadgeCheck, 
    title: "Lifetime Access", 
    description: "Access to updated materials and ongoing support even after completion" 
  },
];

const successStories = [
  {
    name: "Sunitha R",
    role: "Abacus Trainer, Chennai",
    content: "After completing the Abacus teacher training, I started my own classes. Now I have 50+ students and growing!",
    initials: "SR"
  },
  {
    name: "Pradeep K",
    role: "Vedic Maths Instructor",
    content: "The training was comprehensive. I now teach Vedic Maths to school students and help them excel in exams.",
    initials: "PK"
  },
  {
    name: "Kavitha M",
    role: "Phonics Teacher",
    content: "I work with a reputed pre-school now, all thanks to the Phonics training from Fairfin Academy.",
    initials: "KM"
  }
];

const TrainingPage = () => {
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
              <GraduationCap className="w-4 h-4 text-accent" />
              Launch Your Teaching Career
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
            >
              Teacher Training Programs
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed"
            >
              Become a certified trainer and start your rewarding journey in education. 
              Our comprehensive programs prepare you to excel as an instructor.
            </motion.p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Training Programs?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive training that prepares you for a successful career in education
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-5 p-6 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-card transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                    <benefit.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                <Sparkles className="w-4 h-4" />
                Certification Courses
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Choose Your Training Program
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Select the program that matches your passion and career goals
              </p>
            </motion.div>

            <div className="space-y-8">
              {trainings.map((training, index) => (
                <motion.div
                  key={training.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card rounded-3xl border-2 border-border/50 hover:border-primary/30 shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden">
                    <div className="grid lg:grid-cols-3">
                      {/* Left - Header */}
                      <div className={`p-10 bg-gradient-to-br ${training.color} flex flex-col justify-center`}>
                        <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                          <training.icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">{training.title}</h3>
                        <p className="text-white/85 mb-6 leading-relaxed">{training.description}</p>
                        
                        {/* Meta badges */}
                        <div className="flex flex-wrap gap-3">
                          <span className="px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium">
                            {training.duration}
                          </span>
                          <span className="px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium">
                            {training.mode}
                          </span>
                        </div>
                      </div>

                      {/* Right - Content */}
                      <div className="lg:col-span-2 p-10">
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                          {/* Features */}
                          <div>
                            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-primary" />
                              What You'll Learn
                            </h4>
                            <ul className="space-y-3">
                              {training.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm">
                                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Outcomes */}
                          <div>
                            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                              <Target className="w-5 h-5 text-accent" />
                              Career Opportunities
                            </h4>
                            <ul className="space-y-3 mb-6">
                              {training.outcomes.map((outcome, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm">
                                  <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" />
                                  <span className="text-muted-foreground">{outcome}</span>
                                </li>
                              ))}
                            </ul>
                            
                            {/* Certification badge */}
                            <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                              <div className="flex items-center gap-3">
                                <Award className="w-8 h-8 text-accent" />
                                <div>
                                  <p className="text-sm text-muted-foreground">Upon Completion</p>
                                  <p className="font-bold text-foreground">{training.certification}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
                          <Link to="/contact">
                            <Button className="h-12 px-8 gradient-green text-primary-foreground hover:opacity-90 group/btn text-base font-semibold">
                              Enquire Now
                              <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                          <a href="tel:+919092592817">
                            <Button variant="outline" className="h-12 px-8 border-2 text-base">
                              Call: +91 9092592817
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Trainers' Journey
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Hear from those who transformed their careers through our training programs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-card rounded-3xl border border-border/50 shadow-soft hover:shadow-elevated transition-all"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    "{story.content}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <div className="w-14 h-14 rounded-full gradient-green flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {story.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{story.name}</h4>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default TrainingPage;
