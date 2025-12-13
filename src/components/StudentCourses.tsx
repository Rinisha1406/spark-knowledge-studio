import { motion } from "framer-motion";
import { 
  Calculator, 
  BookOpenText, 
  BrainCircuit, 
  PenTool, 
  Languages, 
  MessageCircle,
  MessagesSquare,
  GraduationCap
} from "lucide-react";
import { CourseCard } from "./CourseCard";

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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

export const StudentCourses = () => {
  return (
    <section id="courses" className="py-20">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Student <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill development programs designed for children ages 4-14. 
            Each course is structured to build a strong foundation for academic excellence.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={course.title}
              icon={course.icon}
              title={course.title}
              description={course.description}
              features={course.features}
              index={index}
              variant="student"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
