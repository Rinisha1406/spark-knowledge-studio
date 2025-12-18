import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface EnrollmentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

const courses = [
  "Abacus",
  "Phonics", 
  "Vedic Maths",
  "Handwriting",
  "Hindi",
  "Spoken English",
  "Spoken Hindi",
  "Mathematics"
];

export const EnrollmentPopup = ({ isOpen, onClose, selectedCourse = "" }: EnrollmentPopupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: selectedCourse,
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    onClose();
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      course: selectedCourse,
      message: ""
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Popup */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Enroll Now</h2>
                  <p className="text-muted-foreground mt-1">Start your learning journey today</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-foreground">Full Name *</label>
                    <Input
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-14 text-base"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-foreground">Phone Number *</label>
                    <Input
                      placeholder="+91 XXXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-14 text-base"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block text-foreground">Email Address</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-14 text-base"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block text-foreground">Interested In</label>
                  <div className="relative">
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full h-14 px-4 pr-12 rounded-md border border-input bg-background text-foreground text-base appearance-none cursor-pointer"
                    >
                      <option value="">Select an option</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>{course}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block text-foreground">Message</label>
                  <Textarea
                    placeholder="Tell us about your requirements, your child's age, preferred timings..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="resize-none text-base"
                  />
                </div>
                <Button type="submit" className="w-full h-14 bg-green-600 hover:bg-green-700 text-primary-foreground text-lg font-semibold">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Enquiry
                </Button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
