import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of Arjun, Age 8",
    content: "My son's mental math skills have improved dramatically after joining the Abacus program. The teachers are very patient and encouraging.",
    rating: 5,
    image: "PS"
  },
  {
    name: "Rajesh Kumar",
    role: "Parent of Ananya, Age 6",
    content: "The Phonics program helped my daughter read fluently within months. She now loves reading books on her own. Highly recommended!",
    rating: 5,
    image: "RK"
  },
  {
    name: "Meena Devi",
    role: "Parent of Vikram, Age 10",
    content: "Vedic Maths has made calculations so easy for my son. He's now topping his class in mathematics. Thank you Fairfin Academy!",
    rating: 5,
    image: "MD"
  },
  {
    name: "Sunitha R",
    role: "Teacher Training Graduate",
    content: "The teacher training program was comprehensive and well-structured. I now run my own Abacus classes successfully.",
    rating: 5,
    image: "SR"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Parents Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from the families who have experienced the Fairfin difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full flex flex-col p-6 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-card transition-all duration-300">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                {/* Content */}
                <p className="text-muted-foreground flex-1 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full gradient-green flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
