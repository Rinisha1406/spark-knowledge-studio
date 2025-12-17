import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { motion } from "framer-motion";
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
                {/* Hero Banner */}
                <section className="relative pt-32 lg:pt-56 py-28 gradient-hero overflow-hidden">
                    <div className="absolute inset-0 bg-hero-pattern opacity-20" />
                    <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />

                    <div className="container relative z-10 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-semibold text-sm mb-6 border border-primary-foreground/20"
                        >
                            <Building className="w-4 h-4 text-accent" />
                            Partner With Us
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
                        >
                            Start Your Own Academy
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed"
                        >
                            Join the Fairfin Eduhub Academy family and build a successful education business.
                            Together, let's shape the future of the next generation.
                        </motion.p>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Why Choose Our Franchise?
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                                We provide the perfect platform for aspiring edupreneurs to succeed
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group p-8 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-elevated transition-all text-center"
                                >
                                    <div className="w-16 h-16 rounded-2xl gradient-green flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Franchise Owners Section */}
                <section className="py-24 bg-muted/50">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                                Our Partners
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Meet Our Franchise Partner
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                                Proud partners who are making a difference in their communities
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[90rem] mx-auto items-start">
                            {franchiseLocations.map((location, index) => (
                                <motion.div
                                    key={location.address}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="bg-card rounded-3xl overflow-hidden border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 h-48 flex flex-col">
                                        {/* Content */}
                                        <div className="p-6 flex-1 flex flex-col justify-center text-center">
                                            <div className="mb-4">
                                                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                                                <h3 className="text-lg font-bold text-foreground mb-2">
                                                    {location.address}
                                                </h3>
                                                <p className="text-sm text-primary font-medium">
                                                    Unit franchise of fairfin eduhub
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-20 pt-12 border-t border-border/50"
                        >
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">{franchiseLocations.length}+</div>
                                    <div className="text-sm text-muted-foreground">Franchise Partners</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-accent mb-2">6+</div>
                                    <div className="text-sm text-muted-foreground">Cities Across TN</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                                    <div className="text-sm text-muted-foreground">Support Satisfaction</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-accent mb-2">5+</div>
                                    <div className="text-sm text-muted-foreground">Years Experience</div>
                                </div>
                            </div>

                            <div className="text-center mt-10">
                                <Link to="/franchise-enquiry">
                                    <Button className="h-12 px-8 gradient-green text-primary-foreground hover:opacity-90 font-semibold rounded-xl">
                                        Join Our Growing Network
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Requirements & Support */}
                <section className="py-24 bg-muted/30">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* Requirements */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-3xl font-bold mb-8 text-foreground">Franchise Requirements</h3>
                                <div className="space-y-6">
                                    {requirements.map((req, index) => (
                                        <div key={req.title} className="flex gap-4 p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                                <req.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-foreground">{req.title}</h4>
                                                <div className="text-accent font-semibold mb-1">{req.value}</div>
                                                <p className="text-sm text-muted-foreground">{req.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Support */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-card rounded-3xl border border-border/50 p-10 shadow-soft"
                            >
                                <h3 className="text-3xl font-bold mb-6 text-foreground">Our Support System</h3>
                                <p className="text-muted-foreground mb-8">
                                    We are committed to your success. Our dedicated support team works closely with
                                    franchise partners to ensure smooth operations and growth.
                                </p>
                                <ul className="space-y-4">
                                    {support.map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-foreground/80 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10">
                                    <Link to="/franchise-enquiry">
                                        <Button className="w-full h-12 gradient-green text-primary-foreground hover:opacity-90 font-semibold text-lg">
                                            Become a Partner
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>



                <CTASection />
            </main>
            <Footer />
        </div >
    );
};

export default FranchisePage;