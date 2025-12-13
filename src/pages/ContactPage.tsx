import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Send, MessageCircle, CheckCircle, Sparkles, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+91 9092592817", "+91 9600024136"],
    action: "tel:+919092592817",
    color: "from-emerald-500 to-teal-600",
    description: "Call us during working hours"
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["fairfineduhubacademy@outlook.com"],
    action: "mailto:fairfineduhubacademy@outlook.com",
    color: "from-blue-500 to-cyan-600",
    description: "We respond within 24 hours"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: By Appointment"],
    action: null,
    color: "from-violet-500 to-purple-600",
    description: "Flexible scheduling available"
  }
];

const locations = [
  {
    name: "Head Office - Poonamallee",
    address: "No: 1, Rajamani Street, CRM Nagar, Karayanchavadi, Poonamallee, Chennai - 56",
    mapUrl: "https://maps.google.com/?q=Poonamallee+Chennai",
    phone: "+91 9092592817"
  },
  {
    name: "Branch Office - Mangadu",
    address: "15b2, Sri Krishna Nagar, Mangadu, Chennai - 600 122",
    mapUrl: "https://maps.google.com/?q=Mangadu+Chennai",
    phone: "+91 9600024136"
  }
];

const courses = [
  "Abacus",
  "Phonics",
  "Vedic Maths",
  "Handwriting",
  "Hindi",
  "Spoken English",
  "Spoken Hindi",
  "Mathematics",
  "Abacus Teacher Training",
  "Vedic Maths Teacher Training",
  "Phonics Teacher Training"
];

const faqs = [
  {
    question: "What is the age group for your courses?",
    answer: "Our courses are designed for children ages 4-14 years. Each program has specific age recommendations based on the skill level required."
  },
  {
    question: "Do you offer a trial class?",
    answer: "Yes! We offer a FREE demo class for all our programs. This helps you understand our teaching methodology before enrollment."
  },
  {
    question: "What are the batch timings?",
    answer: "We have flexible batch timings including morning, afternoon, and evening slots on both weekdays and weekends."
  },
  {
    question: "How long are the courses?",
    answer: "Course duration varies by program - from 2-3 months for short courses to level-wise programs that can span 6-12 months."
  }
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", phone: "", email: "", course: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative py-28 gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-20" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />
          
          <div className="container relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-semibold text-sm mb-6 border border-primary-foreground/20"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              Get in Touch
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed"
            >
              Have questions or ready to enroll? We'd love to hear from you. 
              Reach out and let's discuss how we can help your child succeed.
            </motion.p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 -mt-16 relative z-20">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.action || "#"}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group block"
                >
                  <div className="p-8 bg-card rounded-3xl border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 text-center h-full">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <info.icon className="w-9 h-9 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground text-xl mb-2">{info.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{info.description}</p>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-foreground font-medium">{detail}</p>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Form & Locations */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form - Larger */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="bg-card rounded-3xl p-10 border border-border/50 shadow-card">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl gradient-green flex items-center justify-center">
                      <Send className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">Send us a Message</h2>
                      <p className="text-muted-foreground">Fill the form and we'll get back to you soon</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                      <label className="text-sm font-semibold mb-2 block text-foreground">Course Interested In</label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full h-14 px-4 rounded-md border border-input bg-background text-foreground text-base"
                      >
                        <option value="">Select a course</option>
                        {courses.map((course) => (
                          <option key={course} value={course}>{course}</option>
                        ))}
                      </select>
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
                    <Button type="submit" className="w-full h-14 gradient-green text-primary-foreground hover:opacity-90 text-lg font-semibold">
                      <Send className="w-5 h-5 mr-2" />
                      Submit Enquiry
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Right Side - Locations & Quick Contact */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-6"
              >
                {/* Locations */}
                <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-card">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                      <Building className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Our Locations</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {locations.map((location, index) => (
                      <div key={index} className="p-5 rounded-2xl bg-muted/50 hover:bg-muted transition-colors">
                        <h4 className="font-bold text-primary mb-2 text-lg">{location.name}</h4>
                        <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{location.address}</p>
                        <div className="flex flex-wrap gap-3">
                          <a 
                            href={`tel:${location.phone.replace(/\s/g, '')}`}
                            className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                          >
                            <Phone className="w-4 h-4" />
                            {location.phone}
                          </a>
                          <a 
                            href={location.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                          >
                            <MapPin className="w-4 h-4" />
                            View on Map
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-primary-foreground">
                  <h3 className="text-xl font-bold mb-4">Quick Connect</h3>
                  <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                    Need immediate assistance? Reach out to us directly via call or WhatsApp!
                  </p>
                  
                  <div className="space-y-3">
                    <a href="tel:+919092592817" className="block">
                      <Button variant="secondary" className="w-full h-14 text-base font-semibold">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </Button>
                    </a>
                    <a href="https://wa.me/919092592817" target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="secondary" className="w-full h-14 text-base font-semibold">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        WhatsApp Us
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border/50">
                  <span className="font-semibold text-foreground">Follow Us:</span>
                  <a
                    href="https://www.instagram.com/gomathichinni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                  >
                    <Instagram className="w-7 h-7" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/14KFNu2SzwK/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                  >
                    <Facebook className="w-7 h-7" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                FAQs
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Quick answers to common questions about our programs
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-card transition-all"
                >
                  <h4 className="font-bold text-foreground mb-3 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed pl-8">{faq.answer}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-muted-foreground mb-4">
                Have more questions? We're happy to help!
              </p>
              <Link to="/contact">
                <Button size="lg" className="gradient-green text-primary-foreground hover:opacity-90">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
