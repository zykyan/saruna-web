"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, Award, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Bio Section */}
                    <section className="mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-5xl font-bold mb-8">About Me</h1>
                            <div className="prose prose-lg text-stone-600">
                                <p className="text-xl leading-relaxed mb-6">
                                    I am a Senior UI/UX Designer with over 7 years of experience crafting digital products that are not only beautiful but also accessible and easy to use. I believe in the power of design to solve real human problems.
                                </p>
                                <p className="mb-6">
                                    Currently, I am leading design initiatives at [Current Company], where I focus on building scalable design systems and mentoring junior designers. My background spans across Fintech, E-commerce, and Healthcare, giving me a diverse perspective on user needs.
                                </p>
                                <p>
                                    When I am not designing, you can find me exploring new coffee shops, reading about cognitive psychology, or hiking in the mountains.
                                </p>
                            </div>
                        </motion.div>
                    </section>

                    {/* Experience Section */}
                    <section className="mb-20">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-10 flex items-center gap-3"
                        >
                            <Briefcase className="w-6 h-6 text-primary" /> Experience
                        </motion.h2>

                        <div className="space-y-12 border-l-2 border-primary/20 ml-3 pl-8 relative">
                            {[
                                {
                                    role: "Senior Product Designer",
                                    company: "Tech Solutions Inc.",
                                    period: "2022 - Present",
                                    description: "Leading the design of the core SaaS platform. Spearheaded the adoption of a new design system which increased development speed by 30%."
                                },
                                {
                                    role: "UI/UX Designer",
                                    company: "Creative Agency XYZ",
                                    period: "2019 - 2022",
                                    description: "Collaborated with cross-functional teams to deliver award-winning websites and mobile apps for global brands."
                                },
                                {
                                    role: "Junior Designer",
                                    company: "Startup Hub",
                                    period: "2017 - 2019",
                                    description: "Designed marketing materials and early-stage product prototypes. Assisted in user research sessions."
                                }
                            ].map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-sm" />
                                    <h3 className="text-xl font-bold">{job.role}</h3>
                                    <div className="text-stone-500 mb-2">{job.company} • {job.period}</div>
                                    <p className="text-stone-600 glass-card p-4 rounded-xl inline-block w-full">{job.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Education & Certification (Optional but good for Senior) */}
                    <section className="mb-20">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-10 flex items-center gap-3"
                        >
                            <GraduationCap className="w-6 h-6 text-primary" /> Education
                        </motion.h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-6 glass-card rounded-xl"
                            >
                                <h3 className="font-bold text-lg">Bachelor in Computer Science</h3>
                                <p className="text-stone-500">University of Technology, 2017</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="p-6 glass-card rounded-xl"
                            >
                                <h3 className="font-bold text-lg">Google UX Design Certificate</h3>
                                <p className="text-stone-500">Coursera, 2018</p>
                            </motion.div>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
}
