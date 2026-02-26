import { motion } from "framer-motion";
import { Images, GraduationCap, Users, Star } from "lucide-react";

import abacusPractice from "@/assets/abacus_practice.jpg";
import achievement from "@/assets/achievement.jpg";
import classroomActivities from "@/assets/classroom_activities.jpg";
import focusedStudy from "@/assets/focused_study.jpg";
import groupLearning from "@/assets/group_learning.jpg";
import handwritingClass from "@/assets/handwriting_class.jpg";
import happyLearners from "@/assets/happy_learners.jpg";
import hindiClass from "@/assets/hindi_class.jpg";
import kidsAtPlay from "@/assets/kids_at_play.jpg";
import phonicsReading from "@/assets/phonics_reading.jpg";
import spokenEnglishClass from "@/assets/spoken_english_class.jpg";
import vedicMathsSpeed from "@/assets/vedic_maths_speed.jpg";

/* Gallery definition — first item is the 2×2 hero tile */
const gallery = [
    { src: happyLearners, label: "Happy Learners", tag: "Our Students", span: "col-span-2 row-span-2" },
    { src: abacusPractice, label: "Abacus Practice", tag: "Abacus", span: "" },
    { src: phonicsReading, label: "Phonics Reading", tag: "Phonics", span: "" },
    { src: classroomActivities, label: "Classroom Activities", tag: "Activities", span: "" },
    { src: vedicMathsSpeed, label: "Vedic Maths Speed", tag: "Vedic Maths", span: "" },
    { src: groupLearning, label: "Group Learning", tag: "Teamwork", span: "" },
    { src: handwritingClass, label: "Handwriting Class", tag: "Handwriting", span: "col-span-2" },
    { src: hindiClass, label: "Hindi Class", tag: "Hindi", span: "" },
    { src: spokenEnglishClass, label: "Spoken English Class", tag: "English", span: "" },
    { src: kidsAtPlay, label: "Kids at Play", tag: "Fun Learning", span: "" },
    { src: focusedStudy, label: "Focused Study", tag: "Concentration", span: "" },
    { src: achievement, label: "Achievement Moments", tag: "Success", span: "" },
];

const stats = [
    { icon: Users, value: "500+", label: "Students Enrolled" },
    { icon: GraduationCap, value: "10+", label: "Skill Programs" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Images, value: "2", label: "Learning Centres" },
];

export const GallerySection = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Soft ambient blobs */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container relative">

                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4"
                    >
                        <span>
                            <Images className="w-4 h-4" />
                        </span>
                        Photo Gallery
                    </motion.span>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                        Life at{" "}
                        <span className="relative inline-block">
                            <span className="text-gradient">Fairfin Eduhub</span>
                            <motion.span
                                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </span>
                    </h2>

                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        A glimpse into our vibrant learning environment — where every child grows,
                        explores, and achieves their potential every single day.
                    </p>
                </motion.div>

                {/* ── Masonry-style image grid ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4 mb-16">
                    {gallery.map((item, i) => (
                        <motion.div
                            key={i}
                            className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.span}`}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: i * 0.06, type: "spring", stiffness: 150, damping: 18 }}
                            whileHover={{ scale: 1.02, zIndex: 10 }}
                        >
                            {/* Image */}
                            <img
                                src={item.src}
                                alt={item.label}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                            />

                            {/* Always-visible dark vignette at bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Tag pill */}
                            <div className="absolute top-3 left-3">
                                <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold border border-white/20">
                                    {item.tag}
                                </span>
                            </div>

                            {/* Caption — always shown */}
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <p className="text-white font-semibold text-sm md:text-base drop-shadow-lg translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.label}
                                </p>
                            </div>

                            {/* Green tint overlay on hover */}
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
                        </motion.div>
                    ))}
                </div>

                {/* ── Stats strip ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 220 }}
                            whileHover={{ y: -5, scale: 1.04 }}
                            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 text-center"
                        >
                            <motion.div
                                className="w-14 h-14 rounded-xl gradient-green flex items-center justify-center shadow-md"
                                whileHover={{ scale: 1.15, rotate: 8 }}
                            >
                                <s.icon className="w-7 h-7 text-primary-foreground" />
                            </motion.div>
                            <div>
                                <div className="text-3xl font-bold text-primary">
                                    {s.value}
                                </div>
                                <div className="text-sm text-muted-foreground mt-0.5">{s.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};
