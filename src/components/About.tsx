import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Target, Lightbulb, Heart, Sparkles, Award } from "lucide-react";
import logo from "@/assets/logo.png";
import heroChildren from "@/assets/hero-children.jpg";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img6 from "@/assets/6.jpg";

const features = [
  { icon: Target, title: "Focused Learning", description: "Level-wise structured programs tailored for each child", color: "from-emerald-500 to-teal-600" },
  { icon: Lightbulb, title: "Expert Trainers", description: "Certified trainers with years of experience", color: "from-violet-500 to-purple-600" },
  { icon: Heart, title: "Caring Environment", description: "Nurturing space that encourages curiosity", color: "from-rose-500 to-pink-600" },
  { icon: CheckCircle, title: "Proven Results", description: "Track record of student success and growth", color: "from-orange-500 to-amber-600" },
];

const stats = [
  { value: "4-14", label: "Age Group" },
  { value: "2", label: "Branches" },
  { value: "10+", label: "Programs" },
];

// Collage photos for right panel
const collageImages = [
  { src: heroChildren, alt: "Children learning", className: "col-span-2 row-span-2" },
  { src: img1, alt: "Student activity", className: "" },
  { src: img2, alt: "Classroom session", className: "" },
  { src: img3, alt: "Kids at abacus", className: "" },
  { src: img4, alt: "Group learning", className: "" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background orbs */}
      <motion.div
        className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4"
            >
              <Sparkles className="w-4 h-4" />
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              Building a Strong Foundation for{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Young Minds</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ delay: 0.7, duration: 0.7 }}
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-muted-foreground text-lg mb-6"
            >
              Fairfin Eduhub Academy is a premier educational institution dedicated to providing
              high-quality skill development programs for children ages 4-14 years. As an
              ISO 9001:2015 registered organization, we maintain the highest standards of
              education and training.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.33 }}
              className="text-muted-foreground mb-8"
            >
              Led by <strong className="text-foreground">Gomathi Parthiban</strong>, our academy
              offers comprehensive courses including Abacus, Phonics, Vedic Maths, Handwriting,
              and Language programs. We also provide specialized teacher training certifications.
            </motion.p>

            {/* Features grid */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.93 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200 } },
                  }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 group"
                >
                  <motion.div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-md`}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Photo Collage ── */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Photo collage grid */}
            <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[480px]">
              {/* Large hero image spanning 2 cols × 2 rows */}
              <motion.div
                className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={heroChildren} alt="Children learning at Fairfin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                {/* ISO badge overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-primary">ISO 9001:2015</span>
                </div>
              </motion.div>

              {/* Small images */}
              {[img1, img2, img3, img4].map((src, i) => (
                <motion.div
                  key={i}
                  className="rounded-2xl overflow-hidden relative group"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                >
                  <img src={src} alt={`Students ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Stats banner overlapping the collage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, type: "spring", stiffness: 180 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-card rounded-2xl shadow-elevated border border-border/50 px-6 py-4 flex items-center justify-around gap-4"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl font-bold text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
              {/* Dividers */}
              <div className="absolute left-1/3 top-1/4 bottom-1/4 w-px bg-border" />
              <div className="absolute left-2/3 top-1/4 bottom-1/4 w-px bg-border" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
