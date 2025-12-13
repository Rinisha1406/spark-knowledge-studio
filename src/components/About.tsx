import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Target, Lightbulb, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const features = [
  { icon: Target, title: "Focused Learning", description: "Level-wise structured programs tailored for each child" },
  { icon: Lightbulb, title: "Expert Trainers", description: "Certified trainers with years of experience" },
  { icon: Heart, title: "Caring Environment", description: "Nurturing space that encourages curiosity" },
  { icon: CheckCircle, title: "Proven Results", description: "Track record of student success and growth" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Building a Strong Foundation for{" "}
              <span className="text-gradient">Young Minds</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Fairfin Eduhub Academy is a premier educational institution dedicated to providing 
              high-quality skill development programs for children ages 4-14 years. As an 
              ISO 9001:2015 registered organization, we maintain the highest standards of 
              education and training.
            </p>
            <p className="text-muted-foreground mb-8">
              Led by <strong className="text-foreground">Gomathi Parthiban</strong>, our academy 
              offers comprehensive courses including Abacus, Phonics, Vedic Maths, Handwriting, 
              and Language programs. We also provide specialized teacher training certifications.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg gradient-green flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Logo & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              
              <div className="relative text-center">
                <img 
                  src={logo} 
                  alt="Fairfin Eduhub Academy Logo" 
                  className="w-48 h-48 mx-auto mb-6 drop-shadow-lg"
                />
                <h3 className="text-2xl font-bold mb-2">Fairfin Eduhub Academy</h3>
                <p className="text-muted-foreground mb-6">A unit of Fairfin Technologies and Solutions</p>
                
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4-14</div>
                    <div className="text-xs text-muted-foreground">Age Group</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2</div>
                    <div className="text-xs text-muted-foreground">Branches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-xs text-muted-foreground">Programs</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
