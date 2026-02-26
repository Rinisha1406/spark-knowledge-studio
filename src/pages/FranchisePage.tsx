import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { motion, useMotionValue, useTransform, animate, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { Building, TrendingUp, Users, Shield, Award, BarChart, CheckCircle, ArrowRight, Briefcase, DollarSign, MapPin, Handshake, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
    {
        icon: TrendingUp,
        title: "High ROI",
        description: "Proven business model ensuring excellent returns on your investment with low risk"
    },
    {
        icon: Shield,
        title: "Brand Recognition",
        description: "Leverage our established brand reputation and trust in the education sector"
    },
    {
        icon: Users,
        title: "Complete Support",
        description: "End-to-end support in recruitment, training, marketing, and operations"
    },
    {
        icon: Handshake,
        title: "Training & Guidance",
        description: "Comprehensive training for you and your staff to ensure quality delivery"
    },
    {
        icon: BarChart,
        title: "Marketing Assistance",
        description: "Centralized marketing support and strategies to help you grow your center"
    },
    {
        icon: Award,
        title: "Curriculum Access",
        description: "Access to our structured, research-based curriculum and teaching materials"
    },
];

const requirements = [
    {
        icon: MapPin,
        title: "Space Requirement",
        value: "500 - 800 sq.ft",
        description: "Commercial or residential space in a prime location accessible to students"
    },
    {
        icon: DollarSign,
        title: "Investment",
        value: "Low Investment",
        description: "Affordable startup costs with flexible payment options available"
    },
    {
        icon: Briefcase,
        title: "Passion",
        value: "Education Focus",
        description: "Strong desire to contribute to the education sector and child development"
    }
];

const support = [
    "Site selection and setup assistance",
    "Staff recruitment and training",
    "Marketing and launch support",
    "Operational guidelines and manuals",
    "Regular academic audits",
    "Technical support and software access"
];

const franchiseLocations = [
    {
        address: "Kotturpuram, Chennai – 600085"
    },
    {
        address: "Mangadu – 600122"
    },
    {
        address: "Madurai"
    },
    {
        address: "Trichy – 620028"
    },
    {
        address: "Banaveduthottam, Parivakkam – 600056"
    },
    {
        address: "Paraniputhur – 600122"
    },
    {
        address: "Raja Annamalaipuram, Chennai – 600028"
    },
    {
        address: "Chidambaram – 608001"
    },
    {
        address: "Vijayawada"
    },
    {
        address: "Saudi Arabia"
    }
];

/* ── Animation Variants ── */
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 15 }
    }
};

const Counter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
    const numericPart = parseInt(value) || 0;
    const suffix = value.replace(numericPart.toString(), '');
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            animate(count, numericPart, { duration, ease: "easeOut" });
        }
    }, [inView, numericPart, count, duration]);

    return (
        <span ref={ref}>
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

const FranchisePage = () => {
    const handleContactOwner = (owner) => {
        // In a real application, this would open a contact modal or form
        console.log('Contact owner:', owner);
        // You can implement a modal or redirect to enquiry form
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <PageHero
                    badge="Partner With Us"
                    badgeIcon={Building}
                    title="Start Your Own Academy"
                    highlightWord="Academy"
                    description="Join the Fairfin Eduhub Academy family and build a successful education business. Together, let's shape the future of the next generation."
                />

                {/* Benefits Section */}
                <section className="py-24 relative overflow-hidden">
                    {/* Background decoration */}
                    <motion.div
                        className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Why Choose Our <span className="text-gradient">Franchise?</span>
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-lg whitespace-pre-line">
                                We provide the perfect platform for aspiring edupreneurs to succeed
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    variants={itemVariants}
                                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                    className="group p-8 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-elevated transition-all text-center relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <motion.div
                                        className="w-16 h-16 rounded-2xl gradient-green flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform shadow-lg"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <benefit.icon className="w-8 h-8 text-primary-foreground" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{benefit.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Franchise Owners Section */}
                <section className="py-24 bg-muted/50 relative overflow-hidden">
                    <motion.div
                        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <div className="container relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                                className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4"
                            >
                                Our Partners
                            </motion.span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Meet Our <span className="text-gradient">Franchise Partners</span>
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                                Proud partners who are making a difference in their communities
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[90rem] mx-auto items-start"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {franchiseLocations.map((location, index) => (
                                <motion.div
                                    key={location.address}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className="group"
                                >
                                    <div className="bg-card rounded-3xl overflow-hidden border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 h-40 flex flex-col relative group">
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {/* Content */}
                                        <div className="p-6 flex-1 flex flex-col justify-center text-center relative z-10">
                                            <div className="mb-2">
                                                <motion.div
                                                    animate={{ y: [0, -3, 0] }}
                                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                                >
                                                    <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
                                                </motion.div>
                                                <h3 className="text-base font-bold text-foreground mb-1">
                                                    {location.address}
                                                </h3>
                                                <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                                                    Unit franchise of fairfin eduhub
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Stats Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-20 pt-16 border-t border-border/50"
                        >
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                                {[
                                    { label: "Franchise Partners", value: `${franchiseLocations.length}+`, color: "text-primary" },
                                    { label: "Cities Across TN", value: "6+", color: "text-accent" },
                                    { label: "Support Satisfaction", value: "100%", color: "text-primary" },
                                    { label: "Years Experience", value: "5+", color: "text-accent" }
                                ].map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        className="text-center"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <motion.div
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", stiffness: 100, delay: 0.3 + i * 0.1 }}
                                            className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
                                        >
                                            <Counter value={stat.value} />
                                        </motion.div>
                                        <div className="text-sm font-medium text-muted-foreground font-display">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="text-center mt-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <Link to="/franchise-enquiry#partner-application">
                                    <Button className="h-14 px-10 gradient-green text-primary-foreground hover:opacity-90 font-bold rounded-2xl shadow-lg hover:shadow-primary/20 transition-all text-lg animate-primary-glow-pulse">
                                        Join Our Growing Network
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Requirements & Support */}
                <section className="py-24 bg-card relative overflow-hidden">
                    <div className="container relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* Requirements */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <h3 className="text-3xl font-bold mb-10 text-foreground flex items-center gap-3">
                                    <div className="w-2 h-10 bg-primary rounded-full" />
                                    Franchise Requirements
                                </h3>
                                <div className="space-y-6">
                                    {requirements.map((req, index) => (
                                        <motion.div
                                            key={req.title}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 }}
                                            whileHover={{ x: 5 }}
                                            className="flex gap-5 p-6 bg-muted/40 rounded-2xl border border-border/50 hover:border-primary/30 transition-all group"
                                        >
                                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                <req.icon className="w-7 h-7 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{req.title}</h4>
                                                <div className="text-accent font-bold text-base mb-1">{req.value}</div>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{req.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Support */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="bg-gradient-to-br from-card to-muted/30 rounded-[2.5rem] border border-border/50 p-10 lg:p-14 shadow-soft relative group"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Handshake className="w-32 h-32 text-primary" />
                                </div>

                                <h3 className="text-3xl font-bold mb-6 text-foreground">Our Support System</h3>
                                <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                                    We are committed to your success. Our dedicated support team works closely with
                                    franchise partners to ensure smooth operations and growth.
                                </p>
                                <ul className="space-y-5">
                                    {support.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                            className="flex items-center gap-4 group/li"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover/li:bg-green-500/20 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                            </div>
                                            <span className="text-foreground/80 font-semibold group-hover/li:text-foreground transition-colors">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <motion.div
                                    className="mt-12"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link to="/franchise-enquiry#partner-application">
                                        <Button className="w-full h-14 gradient-green text-primary-foreground hover:opacity-90 font-bold text-xl rounded-2xl shadow-lg">
                                            Become a Partner
                                            <ArrowRight className="w-6 h-6 ml-2" />
                                        </Button>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default FranchisePage;