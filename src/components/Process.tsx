"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Lightbulb, PenTool, Rocket } from "lucide-react";
import { useRef } from "react";

const steps = [
    {
        title: "Discover",
        subtitle: "Research & Strategy",
        description: "I start by immersing myself in the problem space. Through user interviews, competitor analysis, and data deep-dives, I uncover the 'whys' before tackling the 'hows'.",
        icon: Search,
        color: "bg-blue-500",
        gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
        title: "Define",
        subtitle: "Personas & Logic",
        description: "Insights are synthesized into actionable strategies. I create user personas, empathy maps, and user journeys to ensure every design decision is rooted in real user needs.",
        icon: Lightbulb,
        color: "bg-amber-500",
        gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
        title: "Design",
        subtitle: "Wireframes to Hi-Fi",
        description: "This is where ideas take shape. unique, iterative prototyping allows us to validate concepts quickly. I move from low-fidelity sketches to pixel-perfect, accessible UI designs.",
        icon: PenTool,
        color: "bg-pink-500",
        gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
        title: "Deliver",
        subtitle: "Testing & Handoff",
        description: "Design doesn't end at handoff. I work closely with developers to ensure implementation matches the vision, and conduct usablity testing to refine the final product.",
        icon: Rocket,
        color: "bg-emerald-500",
        gradient: "from-emerald-500/20 to-green-500/20"
    }
];

export default function Process() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={container} className="relative pt-20 pb-40 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Sticky Header */}
                    <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-center mb-12 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">How I Work</h2>
                            <p className="text-xl text-stone-600 leading-relaxed mb-8">
                                Great design isn't just about aesthetics; it's a repeatable process of solving problems. Here is my framework for delivering high-impact work.
                            </p>
                            <div className="hidden lg:block w-24 h-1 bg-primary rounded-full" />
                        </motion.div>
                    </div>

                    {/* Scrolling Steps */}
                    <div className="lg:w-2/3 flex flex-col gap-8 md:gap-32 relative">
                        {/* Vertical Line Line */}
                        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 hidden md:block" />

                        {steps.map((step, i) => {
                            // Dynamic opacity based on scroll could be added here if desired, 
                            // but simple stacking cards works best for readability.
                            return (
                                <Card key={i} step={step} index={i} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Card({ step, index }: { step: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="sticky top-32 glass-card p-8 md:p-12 rounded-3xl border border-white/50 shadow-lg backdrop-blur-xl mb-8 last:mb-0"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-30 rounded-3xl -z-10`} />

            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className={`w-16 h-16 rounded-2xl ${step.color} bg-opacity-10 flex items-center justify-center shrink-0 border border-white/20 shadow-inner md:relative z-10 bg-white/50 backdrop-blur-md`}>
                    <step.icon className={`w-8 h-8 text-${step.color.replace('bg-', '')}`} strokeWidth={1.5} />
                </div>

                <div>
                    <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm font-bold tracking-wider uppercase text-stone-500 opacity-60">Phase 0{index + 1}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{step.title}</h3>
                    <h4 className="text-xl text-primary font-medium mb-4">{step.subtitle}</h4>
                    <p className="text-lg text-stone-600 leading-relaxed">{step.description}</p>
                </div>
            </div>
        </motion.div>
    );
}
