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

const franchiseOwners = [
    {
        name: "Mrs. Gowthami",
        location: "Mangadu, Chennai",
        initials: "G",
        image: "/src/assets/1.jpg",
        address: "15b2, Sri Krishna Nagar street, Mangadu-600122",
        phone: "+91 98765 43210",
        email: "gowthami@example.com",
        joinedDate: "2022"
    },
    {
        name: "Mrs. Nithya Menon",
        location: "Kotturpuram, Chennai",
        initials: "NM",
        image: "/src/assets/2.jpg",
        address: "No 1, South Lock street, Kotturpuram, Chennai - 600085",
        phone: "+91 98765 43211",
        email: "nithya@example.com",
        joinedDate: "2021"
    },
    {
        name: "Mrs. J. Nithya",
        location: "Madurai",
        initials: "JN",
        image: "/src/assets/3.jpg",
        address: "27, Aasath street, New meenakshi nagar, Powerhouse back side, Madurai",
        phone: "+91 98765 43212",
        email: "j.nithya@example.com",
        joinedDate: "2023"
    },
    {
        name: "Mrs. Radha Krishnan",
        location: "Trichy",
        initials: "RK",
        image: "/src/assets/4.jpg",
        address: "Anna Nagar, Trichy 620028",
        phone: "+91 98765 43213",
        email: "radha@example.com",
        joinedDate: "2022"
    },
    {
        name: "Mrs. Priya Sundar",
        location: "Parivakkam, Chennai",
        initials: "PS",
        image: "/src/assets/5.jpg",
        address: "Plot No. 36, Banaveduthottam, Parivakkam - 600056",
        phone: "+91 98765 43214",
        email: "priya@example.com",
        joinedDate: "2023"
    },
    {
        name: "Mrs. Rekha Kumar",
        location: "Paraniputhur, Kancheepuram",
        initials: "RK",
        image: "/src/assets/6.jpg",
        address: "No. 6/192, Subburaya Nagar, Paraniputhur-600122",
        phone: "+91 98765 43215",
        email: "rekha@example.com",
        joinedDate: "2022"
    },
    {
        name: "Mrs. Kalpana",
        location: "Raja Annamalaipuram, Chennai",
        initials: "K",
        image: "/src/assets/7.jpg",
        address: "19, RA Puram, Thideer Nagar, Raja Annamalaipuram, Chennai, TamilNadu - 600028",
        phone: "+91 98765 43216",
        email: "kalpana@example.com",
        joinedDate: "2021"
    },
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
                                Meet Our Franchise Owners
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                                Proud partners who are making a difference in their communities
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[90rem] mx-auto items-start">
                            {franchiseOwners.map((owner, index) => (
                                <motion.div
                                    key={owner.name + owner.location}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="bg-card rounded-3xl overflow-hidden border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 h-full flex flex-col">
                                        {/* Image Container with Fallback */}
                                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                                            {owner.image ? (
                                                <img
                                                    src={owner.image}
                                                    alt={`${owner.name} - Franchise Owner in ${owner.location}`}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                        const fallback = target.parentElement?.querySelector('.fallback') as HTMLElement;
                                                        if (fallback) fallback.style.display = 'flex';
                                                    }}
                                                />
                                            ) : null}
                                            {/* Fallback Avatar */}
                                            <div
                                                className={`fallback w-full h-full flex items-center justify-center ${!owner.image ? 'flex' : 'hidden'}`}
                                            >
                                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                                    <span className="text-5xl font-bold text-primary-foreground">
                                                        {owner.initials}
                                                    </span>
                                                </div>
                                            </div>

                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="mb-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <h3 className="text-xl font-bold text-foreground">
                                                        {owner.name.trim() || `Franchise Owner`}
                                                    </h3>
                                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md">
                                                        Owner
                                                    </span>
                                                </div>


                                            </div>
                                            <div className="mt-auto pt-4 border-t border-border/50">
                                                <div className="flex items-start gap-2 mb-4">
                                                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                                        {owner.address}
                                                    </p>
                                                </div>

                                                {/* Contact Info (Collapsed by default) */}
                                                <details className="group/details">
                                                    <summary className="text-sm font-medium text-primary cursor-pointer hover:text-primary/80 flex items-center justify-between mb-2">
                                                        <span>Contact Details</span>
                                                        <ArrowRight className="w-4 h-4 group-open/details:rotate-90 transition-transform" />
                                                    </summary>
                                                    <div className="space-y-2 pt-2">
                                                        <div className="flex items-center gap-2 text-sm">
                                                            <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                                                            <span className="text-muted-foreground">{owner.phone}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm">
                                                            <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                                                            <span className="text-muted-foreground truncate">{owner.email}</span>
                                                        </div>
                                                    </div>
                                                </details>


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
                                    <div className="text-4xl font-bold text-primary mb-2">{franchiseOwners.length}+</div>
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