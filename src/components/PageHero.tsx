import { motion } from "framer-motion";
import { type ElementType } from "react";

interface PageHeroProps {
    badge: string;
    badgeIcon: ElementType;
    title: string;
    highlightWord?: string;  // word inside title to highlight with accent underline
    description: string;
}

export const PageHero = ({ badge, badgeIcon: BadgeIcon, title, highlightWord, description }: PageHeroProps) => {
    // Split title around the highlight word if provided
    const titleParts = highlightWord
        ? title.split(highlightWord)
        : [title];

    return (
        <section className="relative pt-24 lg:pt-44 pb-12 lg:pb-20 gradient-hero overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-hero-pattern opacity-20 pointer-events-none" />

            {/* Animated ambient orbs */}
            <motion.div
                className="absolute top-20 right-16 w-72 h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none"
                animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none"
                animate={{ scale: [1, 1.15, 1], y: [0, 18, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-foreground/6 rounded-full blur-3xl pointer-events-none"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            {/* Floating soft-light squares */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-primary-foreground/5 rounded-3xl"
                        style={{
                            width: 200 + i * 100,
                            height: 200 + i * 100,
                            left: `${10 + i * 30}%`,
                            top: `${20 + i * 15}%`,
                            rotate: 45,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            rotate: [45, 55, 45],
                            opacity: [0.05, 0.1, 0.05],
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Floating particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-accent/50 pointer-events-none"
                    style={{ left: `${12 + i * 18}%`, top: `${25 + (i % 3) * 22}%` }}
                    animate={{ y: [0, -24, 0], opacity: [0.3, 0.9, 0.3] }}
                    transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                />
            ))}

            {/* Content */}
            <div className="container relative z-10 text-center">
                {/* Badge */}
                <motion.span
                    initial={{ opacity: 0, y: 20, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 280, delay: 0.05 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-foreground/10 text-primary-foreground font-semibold text-sm mb-7 border border-primary-foreground/20 backdrop-blur-sm"
                >
                    <motion.span
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <BadgeIcon className="w-4 h-4 text-accent" />
                    </motion.span>
                    {badge}
                </motion.span>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, type: "spring", stiffness: 100, damping: 18 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
                >
                    {highlightWord ? (
                        <>
                            {titleParts[0]}
                            <span className="relative inline-block">
                                <span className="text-accent">{highlightWord}</span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 h-1 bg-accent/60 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 0.85, duration: 0.7 }}
                                />
                            </span>
                            {titleParts[1]}
                        </>
                    ) : (
                        <>
                            {titleParts[0].split(" ").slice(0, -1).join(" ")}{" "}
                            <span className="relative inline-block">
                                <span className="text-accent">{titleParts[0].split(" ").at(-1)}</span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 h-1 bg-accent/60 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 0.85, duration: 0.7 }}
                                />
                            </span>
                        </>
                    )}
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.7 }}
                    className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed"
                >
                    {description}
                </motion.p>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-12 flex justify-center"
                >
                    <motion.div
                        className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1"
                        animate={{ borderColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.6)", "rgba(255,255,255,0.3)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-1 h-2.5 rounded-full bg-primary-foreground/60"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
