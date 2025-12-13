import { motion } from "framer-motion";
import { Award, Users, BookOpen, Clock, Shield, ThumbsUp, Target, Lightbulb, GraduationCap, Heart, Sparkles, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    description: "Quality education backed by international standards ensuring the best learning experience for your child",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: Users,
    title: "Expert Certified Trainers",
    description: "Experienced and certified educators who are passionate about nurturing young minds with personalized attention",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: BookOpen,
    title: "Proven Curriculum",
    description: "Structured level-wise programs with measurable progress tracking and regular assessments",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Clock,
    title: "Flexible Batch Timings",
    description: "Convenient weekday and weekend batches designed to fit your child's school schedule",
    color: "from-orange-500 to-amber-600"
  },
  {
    icon: Shield,
    title: "Safe Learning Environment",
    description: "Secure and nurturing atmosphere where children feel comfortable to learn and grow",
    color: "from-rose-500 to-pink-600"
  },
  {
    icon: ThumbsUp,
    title: "Trusted by 500+ Parents",
    description: "Growing community of satisfied families who have seen remarkable progress in their children",
    color: "from-indigo-500 to-blue-600"
  }
];

const achievements = [
  { icon: GraduationCap, value: "500+", label: "Students Trained" },
  { icon: Target, value: "95%", label: "Success Rate" },
  { icon: TrendingUp, value: "10+", label: "Skill Programs" },
  { icon: Heart, value: "100%", label: "Parent Satisfaction" },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Fairfin Advantage
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            We combine proven teaching methodologies with modern techniques to deliver exceptional educational experiences. 
            Here's why hundreds of parents trust us with their children's development.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500 relative overflow-hidden">
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl gradient-hero p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Our Track Record Speaks for Itself
            </h3>
            <p className="text-primary-foreground/80">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
              >
                <item.icon className="w-10 h-10 mx-auto mb-4 text-accent" />
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{item.value}</div>
                <div className="text-primary-foreground/80 text-sm font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
