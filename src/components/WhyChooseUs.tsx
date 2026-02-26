import { motion, useInView } from "framer-motion";
import { Award, Users, BookOpen, Clock, Shield, ThumbsUp, Target, Lightbulb, GraduationCap, Heart, Sparkles, TrendingUp } from "lucide-react";
import { useRef, useEffect, useState } from "react";


const features = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    description: "Quality education backed by international standards ensuring the best learning experience for your child",
    color: "from-emerald-500 to-teal-600",
    delay: 0,
  },
  {
    icon: Users,
    title: "Expert Certified Trainers",
    description: "Experienced and certified educators who are passionate about nurturing young minds with personalized attention",
    color: "from-blue-500 to-cyan-600",
    delay: 0.1,
  },
  {
    icon: BookOpen,
    title: "Proven Curriculum",
    description: "Structured level-wise programs with measurable progress tracking and regular assessments",
    color: "from-violet-500 to-purple-600",
    delay: 0.2,
  },
  {
    icon: Clock,
    title: "Flexible Batch Timings",
    description: "Convenient weekday and weekend batches designed to fit your child's school schedule",
    color: "from-orange-500 to-amber-600",
    delay: 0.3,
  },
  {
    icon: Shield,
    title: "Safe Learning Environment",
    description: "Secure and nurturing atmosphere where children feel comfortable to learn and grow",
    color: "from-rose-500 to-pink-600",
    delay: 0.4,
  },
  {
    icon: ThumbsUp,
    title: "Trusted by 500+ Parents",
    description: "Growing community of satisfied families who have seen remarkable progress in their children",
    color: "from-indigo-500 to-blue-600",
    delay: 0.5,
  },
];

const achievements = [
  { icon: GraduationCap, value: 500, suffix: "+", label: "Students Trained" },
  { icon: Target, value: 95, suffix: "%", label: "Success Rate" },
  { icon: TrendingUp, value: 10, suffix: "+", label: "Skill Programs" },
  { icon: Heart, value: 100, suffix: "%", label: "Parent Satisfaction" },
];

/* ── Animated counter ── */
const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.93 },
  visible: (delay: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring" as const, stiffness: 160, damping: 18, delay },
  }),
};

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* ── Animated background orbs ── */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/6 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-accent/6 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      {/* Centre accent */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4"
          >
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.span>
            Why Choose Us
          </motion.span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Fairfin Eduhub{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Advantage</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </span>
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            We combine proven teaching methodologies with modern techniques to deliver exceptional educational experiences.
            Here's why hundreds of parents trust us with their children's development.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              custom={feature.delay}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="h-full p-8 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500 relative overflow-hidden gradient-border">
                {/* Hover gradient fill */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ scale: 1.18, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                {/* Corner accent */}
                <motion.div
                  className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${feature.color} opacity-0 group-hover:opacity-10 rounded-tl-3xl transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl gradient-hero p-8 md:p-12 relative overflow-hidden"
        >
          {/* Animated background decoration */}
          <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none" />
          <motion.div
            className="absolute top-0 right-1/4 w-60 h-60 bg-accent/15 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-1/4 w-48 h-48 bg-primary-foreground/10 rounded-full blur-2xl"
            animate={{ scale: [1, 1.2, 1], x: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />

          <div className="relative text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Our Track Record Speaks for Itself
            </h3>
            <p className="text-primary-foreground/80">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.7, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors cursor-default"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
                >
                  <item.icon className="w-10 h-10 mx-auto mb-4 text-accent" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  <Counter target={item.value} suffix={item.suffix} />
                </div>
                <div className="text-primary-foreground/80 text-sm font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
