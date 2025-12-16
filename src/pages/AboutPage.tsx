import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { motion } from "framer-motion";
import { CheckCircle, Target, Lightbulb, Heart, Award, Users, BookOpen, GraduationCap, Star, Clock, Shield, Sparkles, Building, User } from "lucide-react";
import logo from "@/assets/logo.png";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every aspect of education, setting high standards for ourselves and our students",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Using modern teaching methods and proven techniques to deliver the best learning experience",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Heart,
    title: "Care",
    description: "Creating a nurturing environment where every child feels valued and supported in their journey",
    color: "from-rose-500 to-pink-600"
  },
  {
    icon: CheckCircle,
    title: "Quality",
    description: "ISO 9001:2015 certified quality standards ensuring the highest level of education",
    color: "from-violet-500 to-purple-600"
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Students" },
  { icon: BookOpen, value: "10+", label: "Skill Programs" },
  { icon: GraduationCap, value: "50+", label: "Trained Teachers" },
  { icon: Award, value: "5+", label: "Years Experience" },
];

const features = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    description: "Internationally recognized quality standards"
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Trained and certified educators"
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Convenient batch schedules"
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Secure learning atmosphere"
  },
  {
    icon: Star,
    title: "Proven Results",
    description: "Track record of student success"
  },
  {
    icon: Building,
    title: "Modern Facilities",
    description: "Well-equipped classrooms"
  },
];

const timeline = [
  {
    year: "Foundation",
    title: "Academy Established",
    description: "Started with a vision to provide quality skill development education to children"
  },
  {
    year: "Growth",
    title: "Expanded Programs",
    description: "Added Phonics, Vedic Maths, and Handwriting programs to our curriculum"
  },
  {
    year: "Certification",
    title: "ISO Certification",
    description: "Achieved ISO 9001:2015 certification for quality management"
  },
  {
    year: "Today",
    title: "500+ Students Strong",
    description: "Now serving 500+ students across two locations in Chennai"
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative py-28 gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-20" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />

          <div className="container relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-semibold text-sm mb-6 border border-primary-foreground/20"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              Learn, Explore, Achieve
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
            >
              About Fairfin Eduhub Academy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed"
            >
              Empowering young minds with skill development education since our founding.
              We are committed to nurturing the next generation of confident, capable learners.
            </motion.p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                  <Star className="w-4 h-4" />
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                  Building a Strong Foundation for Young Minds
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Fairfin Eduhub Academy is a premier educational institution dedicated to providing
                  high-quality skill development programs for children ages 4-14 years. As an
                  ISO 9001:2015 registered organization, we maintain the highest standards of education and training excellence.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our academy was founded with a simple yet powerful vision: to make quality
                  education accessible to every child and help them develop essential life skills.
                  We believe that every child has unique potential, and our role is to nurture and
                  develop that potential through proven teaching methodologies.
                </p>

                {/* Founder Info */}
                <div className="bg-muted/50 rounded-2xl p-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full gradient-green flex items-center justify-center text-primary-foreground">
                      <User className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Founded & Led by</p>
                      <h4 className="text-xl font-bold text-foreground">Gomathi Parthiban</h4>
                      <p className="text-sm text-muted-foreground">Proprietor & Chief Educator</p>
                    </div>
                  </div>
                </div>


              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-10 border border-border/50">
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/30 rounded-full blur-2xl" />

                  <div className="relative text-center">
                    <img
                      src={logo}
                      alt="Fairfin Eduhub Academy Logo"
                      className="w-48 h-48 mx-auto mb-8 drop-shadow-xl"
                    />
                    <h3 className="text-3xl font-bold mb-3 text-foreground">Fairfin Eduhub Academy</h3>
                    <p className="text-muted-foreground mb-4">A unit of Fairfin Technologies and Solutions</p>
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/20 text-accent-foreground font-semibold text-sm">
                      <Award className="w-4 h-4" />
                      ISO 9001:2015 Registered
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {values.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-elevated transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 gradient-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                These numbers reflect our commitment to quality education and the trust that families place in us
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
                >
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</div>
                  <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                What Sets Us Apart
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Why Families Choose Us
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                We combine traditional teaching wisdom with modern educational practices to create
                a unique learning experience for every child
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
                  className="group p-8 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-elevated transition-all text-center"
                >
                  <div className="w-16 h-16 rounded-2xl gradient-green flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Milestones Along the Way
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-8 mb-12 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full gradient-green flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                      {index + 1}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-primary to-primary/20 mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl gradient-green flex items-center justify-center mb-8 shadow-lg">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  To provide world-class skill development education that empowers children to excel
                  academically and develop essential life skills that will serve them throughout their lives.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    Make quality education accessible
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    Nurture unique talents in every child
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    Build confidence and creativity
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-10 rounded-3xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mb-8 shadow-lg">
                  <Lightbulb className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  To become the leading skill development academy in Chennai, known for producing
                  confident, capable, and creative young minds who are ready to take on future
                  challenges with excellence.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    Be the preferred choice for parents
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    Expand to more locations
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    Train 1000+ teachers
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
