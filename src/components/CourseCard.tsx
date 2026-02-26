import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ElementType } from "react";

interface CourseCardProps {
  title: string;
  description: string;
  features: string[];
  index: number;
  image?: string;
  icon?: ElementType;
  color?: string;
  variant?: string;
}

export const CourseCard = ({ title, description, features, index, image, icon: Icon, color = "from-emerald-500 to-teal-600" }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full bg-card rounded-2xl border border-border/50 shadow-card hover:shadow-elevated transition-all duration-500 overflow-hidden flex flex-col">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 gradient-green opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none z-10" />

        {/* Course Image */}
        {image && (
          <div className="relative h-40 overflow-hidden flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-40`} />
            {Icon && (
              <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        )}

        {/* Card Body */}
        <div className="p-6 flex flex-col flex-1">
          {/* Content */}
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>

          {/* Features */}
          <ul className="space-y-2 mb-6 flex-1">
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
      </div>
    </motion.div>
  );
};
