"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Layout, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              Designing <span className="text-gradient">digital experiences</span> that solve complex problems with elegance.
            </h1>
            <p className="text-xl text-stone-600 max-w-2xl leading-relaxed mb-10">
              I am Saruna Shrestha, a Senior UI/UX & Product Designer. I bridge the gap between user needs and business goals through Design Thinking, rapid prototyping, and pixel-perfect execution.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 shadow-lg shadow-primary/25"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-white/50 text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-white transition-colors"
              >
                More About Me
              </Link>
            </div>
          </motion.div>

          {/* Decorative Gradient Blob */}
          <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
        </section>

        {/* Selected Work Preview */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-between items-end mb-12"
            >
              <h2 className="text-3xl font-bold">Selected Work</h2>
              <Link href="/work" className="text-stone-500 hover:text-primary flex items-center gap-2 transition-colors">
                View all projects <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Case Study 1 Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Link href="/work/fintech-dashboard" className="group block">
                  <div className="aspect-[4/3] glass-card rounded-2xl overflow-hidden mb-6 relative transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="absolute inset-0 bg-stone-200/50 group-hover:bg-stone-300/50 transition-colors flex items-center justify-center text-stone-400">
                      Project Thumbnail
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Fintech Dashboard Redesign</h3>
                  <p className="text-stone-500">UX Research • UI Design • Design System</p>
                </Link>
              </motion.div>

              {/* Case Study 2 Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/work/ecommerce-app" className="group block">
                  <div className="aspect-[4/3] glass-card rounded-2xl overflow-hidden mb-6 relative transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="absolute inset-0 bg-stone-200/50 group-hover:bg-stone-300/50 transition-colors flex items-center justify-center text-stone-400">
                      Project Thumbnail
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">E-commerce Mobile App</h3>
                  <p className="text-stone-500">Product Design • Prototyping • User Testing</p>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            My Expertise
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 glass-card rounded-2xl hover:bg-white/60 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-stone-600 leading-relaxed">
                Creating intuitive interfaces and meaningful experiences. specializing in web and mobile applications with a focus on accessibility.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 glass-card rounded-2xl hover:bg-white/60 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Design Strategy</h3>
              <p className="text-stone-600 leading-relaxed">
                Aligning design decisions with business objectives. Facilitating workshops, conducting user research, and defining product roadmaps.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 glass-card rounded-2xl hover:bg-white/60 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Prototyping</h3>
              <p className="text-stone-600 leading-relaxed">
                Building high-fidelity interactive prototypes in Figma to validation concepts early and communicate interactions clearly to developers.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
