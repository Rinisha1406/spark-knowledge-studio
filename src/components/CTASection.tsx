import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Enroll today and watch your child develop essential skills for lifelong success. 
            Book a free demo class now!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="h-14 px-8 gradient-accent text-accent-foreground hover:opacity-90 text-lg group">
                Book Free Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+919092592817">
              <Button size="lg" variant="outline" className="h-14 px-8 border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 9092592817
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-primary-foreground/70 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              ISO 9001:2015 Certified
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              500+ Happy Students
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              2 Convenient Locations
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
