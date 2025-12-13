import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calculator, BrainCircuit, BookOpenText, Award, Clock, Users, CheckCircle, ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const trainings = [
  {
    icon: Calculator,
    title: "Abacus Teacher Training",
    description: "Become a certified Abacus trainer and start your own classes",
    duration: "3-6 Months",
    features: [
      "Complete training with study materials",
      "Level-wise teaching methodology",
      "Hands-on practice sessions",
      "Business guidance & support",
      "Certification upon completion",
      "Ongoing mentorship"
    ],
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: BrainCircuit,
    title: "Vedic Maths Teacher Training",
    description: "Master the art of teaching Vedic Mathematics techniques",
    duration: "2-4 Months",
    features: [
      "Learn all Vedic Maths sutras",
      "Fast calculation techniques",
      "Teaching methodology training",
      "Practice with real students",
      "Certification on completion",
      "Career support provided"
    ],
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: BookOpenText,
    title: "Phonics Teacher Training",
    description: "Learn to teach reading effectively using phonics approach",
    duration: "2-3 Months",
    features: [
      "Jolly Phonics based approach",
      "Blending & segmenting techniques",
      "Teaching tools & resources",
      "Classroom management skills",
      "Certification included",
      "Job placement assistance"
    ],
    color: "from-blue-500 to-cyan-600"
  }
];

const benefits = [
  { 
    icon: Award, 
    title: "Certified Programs", 
    description: "Receive recognized certification that validates your teaching skills" 
  },
  { 
    icon: Clock, 
    title: "Flexible Schedule", 
    description: "Weekend and weekday batches available to suit your timing" 
  },
  { 
    icon: Users, 
    title: "Small Batches", 
    description: "Personalized attention with limited seats per batch" 
  },
  { 
    icon: Briefcase, 
    title: "Career Support", 
    description: "Guidance to start your own academy or get placed" 
  },
];

const TrainingPage = () => {
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
              Teacher Training
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/90 max-w-2xl mx-auto"
            >
              Start your journey as a certified trainer
            </motion.p>
          </div>
        </section>

        {/* Benefits Bar */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border/50 shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                Certification Courses
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Choose Your Training Program
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {trainings.map((training, index) => (
                <motion.div
                  key={training.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group h-full"
                >
                  <div className="h-full flex flex-col bg-card rounded-2xl border-2 border-border/50 hover:border-primary/30 shadow-card hover:shadow-elevated transition-all duration-500 overflow-hidden">
                    {/* Badge */}
                    <div className="relative">
                      <div className={`p-8 bg-gradient-to-r ${training.color}`}>
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {training.duration}
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                          <training.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{training.title}</h3>
                        <p className="text-white/80 mt-2">{training.description}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8 flex flex-col">
                      <h4 className="font-semibold text-foreground mb-4">What You'll Learn:</h4>
                      <ul className="space-y-3 flex-1">
                        {training.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Button */}
                      <div className="mt-8">
                        <Link to="/contact">
                          <Button className="w-full gradient-green text-primary-foreground hover:opacity-90 h-12 text-base group/btn">
                            Enquire Now
                            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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

        {/* CTA */}
        <section className="py-16 gradient-hero">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
                Ready to Start Your Teaching Career?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Join our teacher training program and become a certified instructor. Limited seats available!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gradient-accent text-accent-foreground hover:opacity-90">
                    Apply Now
                  </Button>
                </Link>
                <a href="tel:+919092592817">
                  <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10">
                    Talk to Us
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

export default TrainingPage;
