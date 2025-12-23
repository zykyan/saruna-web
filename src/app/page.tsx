"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Layout, Users, Zap, MousePointer2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { caseStudies } from "@/lib/data";
import Process from "@/components/Process";

const titleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

export default function Home() {
  const titleText = "Crafting digital experiences with passion and purpose.";
  const words = titleText.split(" ");

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden">
          {/* Background Graphics */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <motion.div
              animate={{
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-60"
            />
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl opacity-50"
            />
          </div>

          <div className="px-6 py-20 md:py-40 max-w-7xl mx-auto relative z-10 perspective-1000">
            <div className="max-w-4xl">

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-primary/20 text-sm font-medium text-stone-600"
              >
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                Available for new projects
              </motion.div>

              {/* Staggered Title Animation */}
              <motion.h1
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-8 text-stone-900"
              >
                {words.map((word, i) => (
                  <span key={i} className="inline-block mr-4">
                    {word.split("").map((char, j) => (
                      <motion.span key={j} variants={letterVariants} className="inline-block">
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-xl md:text-2xl text-stone-600 max-w-2xl leading-relaxed mb-12"
              >
                🤟 Hi, I&apos;m Saruna. With 4+ years of experience in UI/UX design, I have honed my skills to prioritize simplicity and user-centricity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 shadow-xl shadow-primary/30 hover:shadow-primary/50 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md border border-white/60 text-stone-800 px-8 py-4 rounded-full font-medium text-lg hover:bg-white transition-all hover:shadow-lg"
                >
                  More About Me
                </Link>
              </motion.div>
            </div>
          </div>
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
              {caseStudies.slice(0, 2).map((study, index) => (
                <motion.div
                  key={study.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  <Link href={`/work/${study.slug}`} className="group block">
                    <div className="aspect-[4/3] glass-card rounded-2xl overflow-hidden mb-6 relative transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="absolute inset-0 bg-stone-200/50 group-hover:bg-stone-300/50 transition-colors flex items-center justify-center text-stone-400 text-center p-6">
                        {/* Use title as placeholder if no image */}
                        <div className="font-bold text-lg">{study.title} Preview</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{study.title}</h3>
                    <p className="text-stone-500">{study.category} • {study.role}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <Process />

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
                Specializing in User Experience, Banner Design, and both Low & High Fidelity Wireframing.
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
              <h3 className="text-xl font-bold mb-4">Research & Strategy</h3>
              <p className="text-stone-600 leading-relaxed">
                Conducting deep user research to inform design decisions and prioritization of simplicity.
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
                Building interactive prototypes to validate flows and ensure user-centricity before development.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
