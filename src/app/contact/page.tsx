"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 px-6 flex items-center justify-center relative overflow-hidden">
                {/* Decorative Background Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

                <div className="max-w-2xl w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-card p-12 rounded-3xl"
                    >
                        <h1 className="text-5xl font-bold mb-6">Let's Work Together</h1>
                        <p className="text-xl text-stone-600 mb-12">
                            I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <Link
                            href="mailto:hello@saruna.design"
                            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full text-lg font-medium hover:scale-105 transition-transform shadow-lg shadow-primary/20"
                        >
                            <Mail className="w-5 h-5" /> Say Hello
                        </Link>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-20 flex justify-center gap-8"
                        >
                            <Link href="https://linkedin.com" target="_blank" className="text-stone-500 hover:text-primary transition-colors flex flex-col items-center gap-2 group">
                                <div className="p-4 bg-white/50 rounded-full group-hover:bg-white transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <span className="text-sm font-medium">LinkedIn</span>
                            </Link>
                            <Link href="https://github.com" target="_blank" className="text-stone-500 hover:text-primary transition-colors flex flex-col items-center gap-2 group">
                                <div className="p-4 bg-white/50 rounded-full group-hover:bg-white transition-colors">
                                    <Github className="w-6 h-6" />
                                </div>
                                <span className="text-sm font-medium">GitHub</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
