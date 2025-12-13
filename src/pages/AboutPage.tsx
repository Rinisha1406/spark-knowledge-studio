import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Target, Lightbulb, Heart, Award, Users, BookOpen, GraduationCap } from "lucide-react";
import logo from "@/assets/logo.png";

const values = [
  { icon: Target, title: "Excellence", description: "We strive for excellence in every aspect of education" },
  { icon: Lightbulb, title: "Innovation", description: "Using modern teaching methods and techniques" },
  { icon: Heart, title: "Care", description: "Nurturing environment for holistic development" },
  { icon: CheckCircle, title: "Quality", description: "ISO 9001:2015 certified quality standards" },
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Students" },
  { icon: BookOpen, value: "10+", label: "Skill Programs" },
  { icon: GraduationCap, value: "50+", label: "Trained Teachers" },
  { icon: Award, value: "5+", label: "Years Experience" },
];

const AboutPage = () => {
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
              About Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/90 max-w-2xl mx-auto"
            >
              Empowering young minds since our founding
            </motion.p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Building a Strong Foundation for Young Minds
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Fairfin Eduhub Academy is a premier educational institution dedicated to providing 
                  high-quality skill development programs for children ages 4-14 years. As an 
                  ISO 9001:2015 registered organization, we maintain the highest standards of 
                  education and training.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Led by <strong className="text-foreground">Gomathi Parthiban</strong>, our academy 
                  offers comprehensive courses including Abacus, Phonics, Vedic Maths, Handwriting, 
                  and Language programs. We also provide specialized teacher training certifications 
                  to spread quality education.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {values.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg gradient-green flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-10 border border-border/50">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl" />
                  
                  <div className="relative text-center">
                    <img 
                      src={logo} 
                      alt="Fairfin Eduhub Academy Logo" 
                      className="w-40 h-40 mx-auto mb-6 drop-shadow-xl"
                    />
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Fairfin Eduhub Academy</h3>
                    <p className="text-muted-foreground mb-2">A unit of Fairfin Technologies and Solutions</p>
                    <div className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground font-medium text-sm">
                      ISO 9001:2015 Registered
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 gradient-hero">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
                >
                  <stat.icon className="w-10 h-10 mx-auto mb-3 text-accent" />
                  <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{stat.value}</div>
                  <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl gradient-green flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide world-class skill development education that empowers children to excel 
                  academically and develop essential life skills. We aim to make quality education 
                  accessible to every child in our community.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading skill development academy in Chennai, known for producing 
                  confident, capable, and creative young minds who are ready to take on future 
                  challenges with excellence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
