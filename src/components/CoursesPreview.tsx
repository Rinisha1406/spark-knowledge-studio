import { motion } from "framer-motion";
import { Calculator, BookOpenText, BrainCircuit, PenTool, Languages, MessageCircle, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const courses = [
  {
    icon: Calculator,
    title: "Abacus",
    description: "Mental math excellence with level-wise structured program",
    features: ["Mental math mastery", "Improves concentration", "Certified trainers"],
    color: "from-emerald-500 to-teal-600",
    popular: true
  },
  {
    icon: BookOpenText,
    title: "Phonics",
    description: "Systematic reading program for early learners",
    features: ["Reading fluency", "Pronunciation skills", "Fun activities"],
    color: "from-blue-500 to-cyan-600",
    popular: false
  },
  {
    icon: BrainCircuit,
    title: "Vedic Maths",
    description: "Lightning-fast calculation techniques",
    features: ["Shortcut methods", "Exam preparation", "Mental agility"],
    color: "from-violet-500 to-purple-600",
    popular: true
  },
  {
    icon: PenTool,
    title: "Handwriting",
    description: "Improve penmanship with expert guidance",
    features: ["Neat writing", "Letter formation", "Practice sheets"],
    color: "from-rose-500 to-pink-600",
    popular: false
  },
  {
    icon: Languages,
    title: "Hindi",
    description: "Comprehensive Hindi language learning",
    features: ["Reading & writing", "Grammar basics", "Conversation skills"],
    color: "from-orange-500 to-amber-600",
    popular: false
  },
  {
    icon: MessageCircle,
    title: "Spoken English",
    description: "Build confidence in English communication",
    features: ["Fluent speaking", "Vocabulary building", "Public speaking"],
    color: "from-sky-500 to-blue-600",
    popular: false
  }
];

export const CoursesPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            <Star className="w-4 h-4" />
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Popular Student Courses
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Explore our most sought-after skill development programs designed specifically for children ages 4-14. 
            Each course is crafted to build essential life skills through engaging methods.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Popular badge */}
              {course.popular && (
                <div className="absolute -top-3 -right-3 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-lg">
                    <Star className="w-3 h-3" fill="currentColor" />
                    Popular
                  </span>
                </div>
              )}
              
              <div className="h-full p-6 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500 relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <course.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
                </div>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <Link to="/contact">
                  <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground group-hover:border-primary transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/courses">
            <Button size="lg" className="h-14 px-10 gradient-green text-primary-foreground hover:opacity-90 group text-base font-semibold">
              View All 8 Courses
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Including Mathematics, Spoken Hindi & more
          </p>
        </motion.div>
      </div>
    </section>
  );
};
