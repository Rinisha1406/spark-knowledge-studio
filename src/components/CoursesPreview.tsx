import { motion } from "framer-motion";
import { Calculator, BookOpenText, BrainCircuit, PenTool, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const courses = [
  {
    icon: Calculator,
    title: "Abacus",
    description: "Mental math excellence with level-wise structured program",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: BookOpenText,
    title: "Phonics",
    description: "Systematic reading program for early learners",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: BrainCircuit,
    title: "Vedic Maths",
    description: "Lightning-fast calculation techniques",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: PenTool,
    title: "Handwriting",
    description: "Improve penmanship with expert guidance",
    color: "from-rose-500 to-pink-600"
  }
];

export const CoursesPreview = () => {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Popular Courses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our most popular skill development programs for children ages 4-14
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${course.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <course.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm">{course.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/courses">
            <Button size="lg" className="gradient-green text-primary-foreground hover:opacity-90 group">
              View All Courses
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
