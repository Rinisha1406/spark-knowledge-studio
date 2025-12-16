import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  description: string;
  features: string[];
  index: number;
}

export const CourseCard = ({ title, description, features, index }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full bg-card rounded-2xl p-6 border border-border/50 shadow-card hover:shadow-elevated transition-all duration-500 overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 gradient-green opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

        {/* Content */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Only Enquire Now Button */}
        <Link to="/contact" className="block w-full">
          <Button 
            className="w-full gradient-green text-primary-foreground hover:opacity-90 group/btn text-sm font-semibold"
          >
            Enquire Now
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};
