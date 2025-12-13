import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+91 9092592817", "+91 9600024136"],
    action: "tel:+919092592817",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["fairfineduhubacademy@outlook.com"],
    action: "mailto:fairfineduhubacademy@outlook.com",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: By Appointment"],
    action: null,
    color: "from-violet-500 to-purple-600"
  }
];

const locations = [
  {
    name: "Head Office",
    address: "No: 1, Rajamani Street, CRM Nagar, Karayanchavadi, Poonamallee, Chennai - 56",
    mapUrl: "https://maps.google.com/?q=Poonamallee+Chennai"
  },
  {
    name: "Branch Office",
    address: "15b2, Sri Krishna Nagar, Mangadu, Chennai - 600 122",
    mapUrl: "https://maps.google.com/?q=Mangadu+Chennai"
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
        <section className="relative py-24 gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-20" />
          <div className="container relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/90 max-w-2xl mx-auto"
            >
              We'd love to hear from you
            </motion.p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 -mt-12 relative z-20">
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
                  <div className="p-6 bg-card rounded-2xl border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Form & Locations */}
        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                  <h2 className="text-2xl font-bold mb-2 text-foreground">Send us a Message</h2>
                  <p className="text-muted-foreground mb-6">Fill the form below and we'll get back to you soon</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block text-foreground">Full Name *</label>
                        <Input
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block text-foreground">Phone Number *</label>
                        <Input
                          placeholder="+91 XXXXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">Email Address</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">Course Interested In</label>
                      <Input
                        placeholder="e.g., Abacus, Phonics, Teacher Training"
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">Message</label>
                      <Textarea
                        placeholder="Tell us about your requirements..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full h-12 gradient-green text-primary-foreground hover:opacity-90 text-base">
                      <Send className="w-5 h-5 mr-2" />
                      Submit Enquiry
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Locations */}
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Our Locations</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {locations.map((location, index) => (
                      <div key={index} className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                        <h4 className="font-semibold text-primary mb-2">{location.name}</h4>
                        <p className="text-muted-foreground text-sm mb-3">{location.address}</p>
                        <a 
                          href={location.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline font-medium"
                        >
                          View on Google Maps →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-primary-foreground">
                  <h3 className="text-xl font-bold mb-4">Quick Connect</h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Need immediate assistance? Reach out to us directly!
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <a href="tel:+919092592817" className="flex-1">
                      <Button variant="secondary" className="w-full h-12">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </a>
                    <a href="https://wa.me/919092592817" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="secondary" className="w-full h-12">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border/50">
                  <span className="font-medium text-foreground">Follow Us:</span>
                  <a
                    href="https://www.instagram.com/gomathichinni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/14KFNu2SzwK/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
