import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

interface CourseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
  variant?: "student" | "teacher";
}

export const CourseCard = ({ icon: Icon, title, description, features, index, variant = "student" }: CourseCardProps) => {
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
        
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${
          variant === "teacher" ? "gradient-accent" : "gradient-green"
        }`}>
          <Icon className={`w-7 h-7 ${variant === "teacher" ? "text-accent-foreground" : "text-primary-foreground"}`} />
        </div>

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

        {/* CTA */}
        <Button 
          variant="outline" 
          className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground group-hover:border-primary transition-all"
        >
          Learn More
        </Button>
      </div>
    </motion.div>
  );
};
