import { motion } from "framer-motion";
import { Award, Users, BookOpen, Clock, Shield, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    description: "Quality education backed by international standards",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Experienced and certified educators for every program",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: BookOpen,
    title: "Proven Curriculum",
    description: "Structured level-wise programs with measurable progress",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Convenient batch schedules to fit your routine",
    color: "from-orange-500 to-amber-600"
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Secure and nurturing learning atmosphere for children",
    color: "from-rose-500 to-pink-600"
  },
  {
    icon: ThumbsUp,
    title: "Trusted by Parents",
    description: "500+ happy students and growing community",
    color: "from-indigo-500 to-blue-600"
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Fairfin Advantage
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover why hundreds of parents trust us with their children's education
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-card transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
