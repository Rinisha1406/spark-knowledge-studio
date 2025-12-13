import { motion } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of Arjun, Age 8",
    content: "My son's mental math skills have improved dramatically after joining the Abacus program. He can now calculate complex problems in seconds! The teachers are very patient, encouraging, and truly dedicated to each child's progress.",
    rating: 5,
    initials: "PS",
    course: "Abacus"
  },
  {
    name: "Rajesh Kumar",
    role: "Parent of Ananya, Age 6",
    content: "The Phonics program helped my daughter read fluently within just 3 months. She now loves reading books on her own and her pronunciation has improved significantly. Highly recommended for all young learners!",
    rating: 5,
    initials: "RK",
    course: "Phonics"
  },
  {
    name: "Meena Devi",
    role: "Parent of Vikram, Age 10",
    content: "Vedic Maths has made calculations so easy for my son. He's now topping his class in mathematics and solving problems much faster than before. The shortcut techniques are truly amazing!",
    rating: 5,
    initials: "MD",
    course: "Vedic Maths"
  },
  {
    name: "Sunitha R",
    role: "Teacher Training Graduate",
    content: "The teacher training program was comprehensive and well-structured. I learned not just the techniques but also how to effectively teach them. I now run my own successful Abacus classes!",
    rating: 5,
    initials: "SR",
    course: "Teacher Training"
  },
  {
    name: "Karthik M",
    role: "Parent of Divya, Age 7",
    content: "My daughter's handwriting has transformed completely. From messy scribbles to neat, beautiful writing - the change is remarkable. The personalized attention and practice sheets really helped.",
    rating: 5,
    initials: "KM",
    course: "Handwriting"
  },
  {
    name: "Lakshmi N",
    role: "Parent of Rohit, Age 9",
    content: "The Spoken English program gave my son the confidence to speak fluently. He now participates actively in school debates and presentations. Thank you Fairfin Academy!",
    rating: 5,
    initials: "LN",
    course: "Spoken English"
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCount = 3;
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % (testimonials.length - visibleCount + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + (testimonials.length - visibleCount + 1)) % (testimonials.length - visibleCount + 1));
  };

  return (
    <section className="py-24 bg-muted/30 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              <Quote className="w-4 h-4" />
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Parents Say
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
              Real stories from families who have experienced the Fairfin difference. 
              Join our growing community of satisfied parents.
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-6"
            animate={{ x: `-${activeIndex * (100 / visibleCount)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="h-full flex flex-col p-8 bg-card rounded-3xl border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500">
                  {/* Course Badge */}
                  <div className="mb-6">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {testimonial.course}
                    </span>
                  </div>
                  
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-primary/20 mb-4" />
                  
                  {/* Content */}
                  <p className="text-muted-foreground flex-1 mb-6 leading-relaxed text-base">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <div className="w-14 h-14 rounded-full gradient-green flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-10">
          {[...Array(testimonials.length - visibleCount + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === activeIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
