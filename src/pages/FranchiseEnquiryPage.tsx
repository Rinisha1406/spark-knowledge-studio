import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Send, Building, Phone, Mail, ChevronDown, Clock } from "lucide-react";
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
        details: ["Mon - Sat: 9:00 AM - 8:00 PM"],
        action: null,
        color: "from-violet-500 to-purple-600",
        description: "Flexible scheduling available"
    }
];

const FranchiseEnquiryPage = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        course: "Franchise Enquiry",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Franchise Enquiry Submitted!",
            description: "Our franchise team will contact you shortly.",
        });
        setFormData({ name: "", phone: "", email: "", course: "Franchise Enquiry", message: "" });
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                {/* Hero Banner */}
                <section className="relative py-20 gradient-hero overflow-hidden">
                    <div className="absolute inset-0 bg-hero-pattern opacity-20" />
                    <div className="container relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6"
                        >
                            Franchise Enquiry
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-primary-foreground/90 max-w-2xl mx-auto"
                        >
                            Take the first step towards owning a successful education franchise.
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

                <section className="py-20">
                    <div className="container max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-card rounded-3xl p-10 border border-border/50 shadow-card"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-2xl gradient-green flex items-center justify-center">
                                    <Building className="w-7 h-7 text-primary-foreground" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-foreground">Partner Application</h2>
                                    <p className="text-muted-foreground">Please provide your details below</p>
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
                                    <label className="text-sm font-semibold mb-2 block text-foreground">Interested In</label>
                                    <div className="relative">
                                        <select
                                            value={formData.course}
                                            disabled
                                            className="w-full h-14 px-4 pr-12 rounded-md border border-input bg-muted text-foreground/70 text-base appearance-none cursor-not-allowed"
                                        >
                                            <option value="Franchise Enquiry">Franchise Enquiry</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-semibold mb-2 block text-foreground">Message</label>
                                    <Textarea
                                        placeholder="Tell us about yourself and why you're interested..."
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="resize-none text-base"
                                    />
                                </div>

                                <Button type="submit" className="w-full h-14 gradient-green text-primary-foreground hover:opacity-90 text-lg font-semibold">
                                    <Send className="w-5 h-5 mr-2" />
                                    Submit Application
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default FranchiseEnquiryPage;
