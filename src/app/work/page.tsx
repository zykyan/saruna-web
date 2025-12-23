"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { motion } from "framer-motion";

export default function Work() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mb-16"
                    >
                        <h1 className="text-5xl font-bold mb-6">Selected Work</h1>
                        <p className="text-xl text-stone-600 leading-relaxed">
                            A collection of projects where I helped companies navigate complex problems and deliver tangible business results through design.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={`/work/${study.slug}`} className="group block">
                                    <div className="aspect-[4/3] glass-card rounded-2xl overflow-hidden mb-8 relative transition-transform duration-500 group-hover:-translate-y-2">
                                        {/* Placeholder for real images */}
                                        <div className="absolute inset-0 bg-stone-200/50 group-hover:bg-stone-300/50 transition-colors flex items-center justify-center text-stone-400">
                                            <span className="sr-only">{study.title} thumbnail</span>
                                            Image for {study.title}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <div className="text-sm font-medium text-stone-500 uppercase tracking-wider">{study.category}</div>
                                        <h2 className="text-3xl font-bold group-hover:text-primary transition-colors">{study.title}</h2>
                                        <p className="text-stone-600 line-clamp-2 text-lg">{study.description}</p>
                                        <div className="flex items-center gap-2 mt-4 text-sm font-medium text-black group-hover:text-primary transition-colors">
                                            Read Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
