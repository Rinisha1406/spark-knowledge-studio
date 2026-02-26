import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle, Target, Lightbulb, Heart, Award, Users, BookOpen, GraduationCap, Star, Clock, Shield, Sparkles, Building, User } from "lucide-react";
import { useRef, useEffect, useState, MouseEvent } from "react";
import logo from "@/assets/logo.png";
import kidsAtPlay from "@/assets/kids_at_play.jpg";

/* ─── Animated counter ─────────────────────────────────────────── */
const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
};

/* ─── 3-D tilt card ────────────────────────────────────────────── */
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 300, damping: 30 });
  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}>
      {children}
    </motion.div>
  );
};

/* ─── Data ─────────────────────────────────────────────────────── */
const values = [
  { icon: Target, title: "Excellence", color: "from-emerald-500 to-teal-600", description: "We strive for excellence in every aspect of education, setting high standards for ourselves and our students" },
  { icon: Lightbulb, title: "Innovation", color: "from-blue-500 to-cyan-600", description: "Using modern teaching methods and proven techniques to deliver the best learning experience" },
  { icon: Heart, title: "Care", color: "from-rose-500 to-pink-600", description: "Creating a nurturing environment where every child feels valued and supported in their journey" },
  { icon: CheckCircle, title: "Quality", color: "from-violet-500 to-purple-600", description: "ISO 9001:2015 certified quality standards ensuring the highest level of education" },
];

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Happy Students" },
  { icon: BookOpen, value: 10, suffix: "+", label: "Skill Programs" },
  { icon: GraduationCap, value: 50, suffix: "+", label: "Trained Teachers" },
  { icon: Award, value: 5, suffix: "+", label: "Years Experience" },
];

const features = [
  { icon: Award, title: "ISO 9001:2015 Certified", description: "Internationally recognized quality standards", color: "from-emerald-500 to-teal-600" },
  { icon: Users, title: "Experienced Faculty", description: "Trained and certified educators", color: "from-blue-500 to-cyan-600" },
  { icon: Clock, title: "Flexible Timings", description: "Convenient batch schedules", color: "from-violet-500 to-purple-600" },
  { icon: Shield, title: "Safe Environment", description: "Secure learning atmosphere", color: "from-rose-500 to-pink-600" },
  { icon: Star, title: "Proven Results", description: "Track record of student success", color: "from-amber-500 to-orange-600" },
  { icon: Building, title: "Modern Facilities", description: "Well-equipped classrooms", color: "from-sky-500 to-blue-600" },
];

const timeline = [
  { year: "Foundation", title: "Academy Established", description: "Started with a vision to provide quality skill development education to children", icon: Star },
  { year: "Growth", title: "Expanded Programs", description: "Added Phonics, Vedic Maths, and Handwriting programs to our curriculum", icon: BookOpen },
  { year: "Certification", title: "ISO Certification", description: "Achieved ISO 9001:2015 certification for quality management", icon: Award },
  { year: "Today", title: "500+ Students Strong", description: "Now serving 500+ students across two locations in Chennai", icon: Users },
];

/* ─── Section that uses useInView for guaranteed animation ──────── */
const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  return (
    <motion.div
      ref={ref}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─── Page ─────────────────────────────────────────────────────── */
const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>

        <PageHero
          badge="Learn, Explore, Achieve"
          badgeIcon={Sparkles}
          title="About Fairfin Eduhub"
          highlightWord="Eduhub"
          description="Empowering young minds with skill development education since our founding. We are committed to nurturing the next generation of confident, capable learners."
        />

        {/* ══════════════════════════════════════════
            OUR STORY
        ══════════════════════════════════════════ */}
        <section className="py-24 relative overflow-hidden">
          {/* Static ambient orb */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left – text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
                >
                  <span>
                    <Star className="w-4 h-4" />
                  </span>
                  Our Story
                </motion.span>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                  Building a Strong{" "}
                  <span className="relative inline-block">
                    <span className="text-gradient">Foundation</span>
                    <motion.span
                      className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </span>
                  {" "}for Young Minds
                </h2>

                {["Fairfin Eduhub Academy is a premier educational institution dedicated to providing high-quality skill development programs for children ages 4-14 years. As an ISO 9001:2015 registered organization, we maintain the highest standards of education and training excellence.",
                  "Our academy was founded with a simple yet powerful vision: to make quality education accessible to every child and help them develop essential life skills. We believe that every child has unique potential, and our role is to nurture and develop that potential."
                ].map((para, i) => (
                  <motion.p key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                    className="text-muted-foreground text-lg mb-6 leading-relaxed"
                  >{para}</motion.p>
                ))}

                {/* Founder card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="bg-muted/50 rounded-2xl p-6 mb-8 border border-border/50 hover:shadow-elevated transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full gradient-green flex items-center justify-center text-primary-foreground">
                      <User className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Founded &amp; Led by</p>
                      <h4 className="text-xl font-bold text-foreground">Gomathi Parthiban</h4>
                      <p className="text-sm text-muted-foreground">Proprietor &amp; Chief Educator</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right – animated logo panel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-10 border border-border/50 overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/30 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative text-center">
                    {/* Spinning rings behind logo */}
                    <div className="relative w-48 h-48 mx-auto mb-8">
                      <motion.div className="absolute inset-0 rounded-full border-2 border-primary/20"
                        animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
                      <motion.div className="absolute inset-4 rounded-full border-2 border-accent/20"
                        animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
                      <div className="absolute inset-0 rounded-full bg-primary/5" />
                      <motion.img
                        src={logo}
                        alt="Fairfin Eduhub Academy Logo"
                        className="absolute inset-0 w-full h-full object-contain p-4 drop-shadow-xl"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>

                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl font-bold mb-3 text-foreground"
                    >Fairfin Eduhub Academy</motion.h3>
                    <p className="text-muted-foreground mb-4">A unit of Fairfin Technologies and Solutions</p>

                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/20 text-accent-foreground font-semibold text-sm"
                    >
                      <span>
                        <Award className="w-4 h-4" />
                      </span>
                      ISO 9001:2015 Registered
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
              {values.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, type: "spring", stiffness: 180 }}
                  whileHover={{ y: -6 }}
                  className="group flex flex-col items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-elevated transition-all relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="flex-shrink-0">
                    <motion.div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            STATS
        ══════════════════════════════════════════ */}
        <section className="py-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-10" />
          <div className="absolute top-0 right-1/4 w-60 h-60 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-primary-foreground/10 rounded-full blur-2xl pointer-events-none" />

          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Our Impact in Numbers</h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                These numbers reflect our commitment to quality education and the trust that families place in us
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.7, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="text-center p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors cursor-default"
                >
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FEATURES GRID  (3-D tilt cards)
        ══════════════════════════════════════════ */}
        <section className="py-24 bg-muted/30 relative">
          <div className="absolute top-10 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-0 w-56 h-56 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                What Sets Us Apart
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Why Families{" "}
                <span className="relative inline-block">
                  <span className="text-gradient">Choose Us</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  />
                </span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                We combine traditional teaching wisdom with modern educational practices to create a unique learning experience
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const cardRef = useRef<HTMLDivElement>(null);
                const isInView = useInView(cardRef, { once: true, margin: "0px" });
                return (
                  <motion.div
                    key={feature.title}
                    ref={cardRef}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 180, damping: 20 }}
                  >
                    <TiltCard className="h-full">
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="group h-full p-8 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-elevated transition-all text-center relative overflow-hidden"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        <motion.div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg mx-auto mb-6`}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <feature.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </motion.div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            TIMELINE
        ══════════════════════════════════════════ */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Milestones{" "}
                <span className="text-gradient">Along the Way</span>
              </h2>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => {
                const itemRef = useRef<HTMLDivElement>(null);
                const isInView = useInView(itemRef, { once: true, margin: "0px" });
                return (
                  <motion.div
                    key={item.year}
                    ref={itemRef}
                    animate={isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                    }
                    transition={{ delay: index * 0.15, type: "spring", stiffness: 150, damping: 20 }}
                    className="flex gap-8 mb-12 last:mb-0 group"
                  >
                    {/* Step indicator */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <motion.div
                        className="w-16 h-16 rounded-full gradient-green flex items-center justify-center text-primary-foreground font-bold shadow-lg relative"
                        whileHover={{ scale: 1.15 }}
                      >
                        <div className="absolute inset-0 rounded-full bg-primary/20 rounded-full" />
                        <item.icon className="w-7 h-7 relative z-10" />
                      </motion.div>
                      {index < timeline.length - 1 && (
                        <motion.div
                          className="w-0.5 bg-gradient-to-b from-primary to-primary/20 mt-4"
                          initial={{ height: 0 }}
                          animate={isInView ? { height: "100%" } : { height: 0 }}
                          transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                        />
                      )}
                    </div>

                    {/* Content card */}
                    <motion.div
                      className="flex-1 pb-12"
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-6 bg-card rounded-2xl border border-border/50 shadow-soft group-hover:shadow-elevated transition-all relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold mb-3"
                        >
                          {item.year}
                        </motion.span>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            MISSION & VISION
        ══════════════════════════════════════════ */}
        <section className="py-24 bg-muted/30 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative">
            {/* Full-width image banner */}
            <AnimatedSection className="relative rounded-3xl overflow-hidden h-56 mb-14">
              <motion.img
                src={kidsAtPlay}
                alt="Kids at play"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
              <div className="absolute inset-0 flex items-center px-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Driven by Purpose</h2>
                  <p className="text-white/85 text-lg max-w-lg">Every decision we make is guided by our mission to empower children and our vision for a brighter tomorrow.</p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              {(() => {
                const missionRef = useRef<HTMLDivElement>(null);
                const isInView = useInView(missionRef, { once: true, margin: "0px" });
                return (
                  <motion.div
                    ref={missionRef}
                    animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 40, x: -20 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 150 }}
                    whileHover={{ y: -5 }}
                    className="p-10 rounded-3xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-16 h-16 rounded-2xl gradient-green flex items-center justify-center mb-8 shadow-lg">
                      <Target className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-3xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                      To provide world-class skill development education that empowers children to excel
                      academically and develop essential life skills that will serve them throughout their lives.
                    </p>
                    <ul className="space-y-3">
                      {["Make quality education accessible", "Nurture unique talents in every child", "Build confidence and creativity"].map((listItem, i) => (
                        <li key={listItem} className="flex items-center gap-3 text-muted-foreground">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })()}

              {/* Vision */}
              {(() => {
                const visionRef = useRef<HTMLDivElement>(null);
                const isInView = useInView(visionRef, { once: true, margin: "0px" });
                return (
                  <motion.div
                    ref={visionRef}
                    animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 40, x: 20 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 150, delay: 0.15 }}
                    whileHover={{ y: -5 }}
                    className="p-10 rounded-3xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mb-8 shadow-lg">
                      <Lightbulb className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-3xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                      To become the leading skill development academy in Chennai, known for producing
                      confident, capable, and creative young minds who are ready to take on future challenges.
                    </p>
                    <ul className="space-y-3">
                      {["Be the preferred choice for parents", "Expand to more locations", "Train 1000+ teachers"].map((listItem, i) => (
                        <li key={listItem} className="flex items-center gap-3 text-muted-foreground">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })()}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div >
  );
};

export default AboutPage;
