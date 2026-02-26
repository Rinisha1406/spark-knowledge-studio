import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of Arjun, Age 8",
    content: "My son's mental math skills have improved dramatically after joining the Abacus program. He can now calculate complex problems in seconds! The teachers are very patient, encouraging, and truly dedicated to each child's progress.",
    rating: 5,
    initials: "PS",
    course: "Abacus",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Rajesh Kumar",
    role: "Parent of Ananya, Age 6",
    content: "The Phonics program helped my daughter read fluently within just 3 months. She now loves reading books on her own and her pronunciation has improved significantly. Highly recommended for all young learners!",
    rating: 5,
    initials: "RK",
    course: "Phonics",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Meena Devi",
    role: "Parent of Vikram, Age 10",
    content: "Vedic Maths has made calculations so easy for my son. He's now topping his class in mathematics and solving problems much faster than before. The shortcut techniques are truly amazing!",
    rating: 5,
    initials: "MD",
    course: "Vedic Maths",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Sunitha R",
    role: "Teacher Training Graduate",
    content: "The teacher training program was comprehensive and well-structured. I learned not just the techniques but also how to effectively teach them. I now run my own successful Abacus classes!",
    rating: 5,
    initials: "SR",
    course: "Teacher Training",
    color: "from-rose-500 to-pink-600",
  },
  {
    name: "Karthik M",
    role: "Parent of Divya, Age 7",
    content: "My daughter's handwriting has transformed completely. From messy scribbles to neat, beautiful writing - the change is remarkable. The personalized attention and practice sheets really helped.",
    rating: 5,
    initials: "KM",
    course: "Handwriting",
    color: "from-orange-500 to-amber-600",
  },
  {
    name: "Lakshmi N",
    role: "Parent of Rohit, Age 9",
    content: "The Spoken English program gave my son the confidence to speak fluently. He now participates actively in school debates and presentations. Thank you Fairfin Eduhub Academy!",
    rating: 5,
    initials: "LN",
    course: "Spoken English",
    color: "from-sky-500 to-blue-600",
  },
];

const VISIBLE = 3; // cards visible at once

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back
  const maxIndex = testimonials.length - VISIBLE;

  const next = useCallback(() => {
    setDirection(1);
    setIndex((p) => Math.min(p + 1, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((p) => Math.max(p - 1, 0));
  }, []);

  // Auto-advance every 4 s
  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1);
      setIndex((p) => (p >= maxIndex ? 0 : p + 1));
    }, 4000);
    return () => clearInterval(t);
  }, [maxIndex]);

  return (
    <section className="py-24 bg-muted/30 overflow-hidden relative">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/6 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4"
            >
              <motion.span
                animate={{ rotate: [0, -15, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Quote className="w-4 h-4" />
              </motion.span>
              Testimonials
            </motion.span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Parents Say</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
              Real stories from families who have experienced the Fairfin Eduhub difference.
              Join our growing community of satisfied parents.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                disabled={index === 0}
                className="w-12 h-12 rounded-full border-2 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-30"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                disabled={index >= maxIndex}
                className="w-12 h-12 rounded-full border-2 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-30"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${index * (100 / VISIBLE)}%` }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="group flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % VISIBLE) * 0.1, type: "spring", stiffness: 160 }}
                whileHover={{ y: -6 }}
              >
                <div className="h-full flex flex-col p-8 bg-card rounded-3xl border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500 relative overflow-hidden gradient-border">
                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                  {/* Corner shine on hover */}
                  <motion.div
                    className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: `var(--gradient-green)` }}
                  />

                  {/* Course Badge */}
                  <div className="mb-6">
                    <motion.span
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${t.color} text-white text-xs font-semibold`}
                      whileHover={{ scale: 1.08 }}
                    >
                      {t.course}
                    </motion.span>
                  </div>

                  {/* Quote Icon */}
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                  >
                    <Quote className="w-12 h-12 text-primary/20 mb-4" />
                  </motion.div>

                  {/* Content */}
                  <p className="text-muted-foreground flex-1 mb-6 leading-relaxed text-base">
                    "{t.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, si) => (
                      <motion.div
                        key={si}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + si * 0.07, type: "spring", stiffness: 400 }}
                      >
                        <Star className="w-5 h-5 fill-accent text-accent" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <motion.div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {t.initials}
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">{t.name}</h4>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {[...Array(maxIndex + 1)].map((_, i) => (
            <motion.button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              animate={{ width: i === index ? 28 : 10, backgroundColor: i === index ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.25)" }}
              transition={{ duration: 0.25 }}
              className="h-2.5 rounded-full hover:opacity-80"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
