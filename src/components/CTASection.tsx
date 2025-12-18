import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle, Calendar, Award, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const benefits = [
  "Free demo class available",
  "Flexible batch timings",
  "Certified trainers",
  "Proven curriculum"
];

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-semibold text-sm mb-6 border border-primary-foreground/20"
            >
              <Calendar className="w-4 h-4 text-accent" />
              Enroll Today
            </motion.span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Ready to Give Your Child the Best Start in Life?
            </h2>

            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Join hundreds of families who trust Fairfin Eduhub Academy for their children's skill development.
              Book a free demo class today and see the difference!
            </p>

            {/* Benefits List */}
            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-primary-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="tel:+919092592817">
                <Button size="lg" variant="outline" className="h-14 px-8 border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  +91 9092592817
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Trust Card */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Award className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">ISO 9001:2015 Certified</h3>
                  <p className="text-primary-foreground/80">
                    Quality assured education following international standards. Your child deserves the best!
                  </p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">2 Convenient Locations</h3>
                  <p className="text-primary-foreground/80 mb-3">
                    Visit us at Poonamallee or Mangadu, Chennai. Choose the center closest to you!
                  </p>
                  <Link to="/contact" className="text-accent font-semibold hover:underline">
                    View Locations →
                  </Link>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 text-center border border-primary-foreground/20">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/70">Students</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 text-center border border-primary-foreground/20">
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-sm text-primary-foreground/70">Courses</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 text-center border border-primary-foreground/20">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-primary-foreground/70">Years</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
