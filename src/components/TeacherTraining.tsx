import { motion } from "framer-motion";
import { Calculator, BrainCircuit, BookOpenText, Award, Clock, Users } from "lucide-react";
import { Button } from "./ui/button";

const trainings = [
  {
    icon: Calculator,
    title: "Abacus Teacher Training",
    description: "Become a certified Abacus trainer",
    features: [
      "Complete training with materials",
      "Level-wise teaching methods",
      "Certification provided",
      "Business guidance included"
    ]
  },
  {
    icon: BrainCircuit,
    title: "Vedic Maths Teacher Training",
    description: "Master the art of teaching Vedic Mathematics",
    features: [
      "Learn fast calculation techniques",
      "Teaching methodology included",
      "Certification on completion",
      "Ongoing support provided"
    ]
  },
  {
    icon: BookOpenText,
    title: "Phonics Teacher Training",
    description: "Learn to teach reading effectively",
    features: [
      "Jolly Phonics based approach",
      "Blending & segmenting techniques",
      "Teaching tools & resources",
      "Certification included"
    ]
  }
];

const benefits = [
  { icon: Award, title: "Certified Programs", description: "Recognized certification upon completion" },
  { icon: Clock, title: "Flexible Schedule", description: "Weekend & weekday batches available" },
  { icon: Users, title: "Small Batches", description: "Personalized attention for every trainee" },
];

export const TeacherTraining = () => {
  return (
    <section id="training" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Career Opportunity</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Teacher <span className="text-gradient">Training Courses</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start your journey as a certified trainer. Our comprehensive teacher training 
            programs equip you with skills and certification to teach professionally.
          </p>
        </motion.div>

        {/* Benefits Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="flex items-center gap-4 bg-background rounded-xl p-4 shadow-soft"
            >
              <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h4 className="font-semibold">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Training Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {trainings.map((training, index) => (
            <motion.div
              key={training.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-background rounded-2xl p-8 border-2 border-primary/20 hover:border-primary/50 shadow-card hover:shadow-elevated transition-all duration-500">
                {/* Badge */}
                <div className="absolute -top-3 right-6 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Certification
                </div>

                <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mb-6">
                  <training.icon className="w-8 h-8 text-accent-foreground" />
                </div>

                <h3 className="text-xl font-bold mb-2">{training.title}</h3>
                <p className="text-muted-foreground mb-6">{training.description}</p>

                <ul className="space-y-3 mb-8">
                  {training.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full gradient-green text-primary-foreground hover:opacity-90">
                  Enquire Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
