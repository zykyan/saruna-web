import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/data";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import * as motion from "framer-motion/client";
import { ScrollProgress } from "@/components/ScrollProgress";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);
    if (!study) return { title: "Not Found" };

    return {
        title: `${study.title} | Saruna Shrestha`,
        description: study.description,
    };
}

export default async function CaseStudy({ params }: Props) {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);

    if (!study) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <ScrollProgress />
            <Navbar />

            <main className="flex-grow pt-32 px-6">
                <article className="max-w-4xl mx-auto">
                    <Link href="/work" className="inline-flex items-center gap-2 text-stone-500 hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to All Work
                    </Link>

                    <header className="mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                        >
                            {study.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-stone-600 leading-relaxed mb-8 max-w-2xl"
                        >
                            {study.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-stone-200"
                        >
                            <div>
                                <dt className="text-sm font-medium text-stone-500 mb-1">Role</dt>
                                <dd className="font-medium text-primary">{study.role}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-stone-500 mb-1">Year</dt>
                                <dd className="font-medium">{study.year}</dd>
                            </div>
                            <div className="col-span-2 md:col-span-2">
                                <dt className="text-sm font-medium text-stone-500 mb-1">Category</dt>
                                <dd className="font-medium">{study.category}</dd>
                            </div>
                        </motion.div>
                    </header>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="aspect-video glass-card rounded-2xl mb-16 overflow-hidden flex items-center justify-center text-stone-400"
                    >
                        {/* Hero Image Placeholder */}
                        Hero Image
                    </motion.div>

                    <div className="grid md:grid-cols-[1fr_2fr] gap-12 mb-20">
                        <div>
                            <h2 className="text-2xl font-bold sticky top-32">The Challenge</h2>
                        </div>
                        <div className="prose prose-lg text-stone-600">
                            <p>{study.challenge}</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-[1fr_2fr] gap-12 mb-20">
                        <div>
                            <h2 className="text-2xl font-bold sticky top-32">The Solution</h2>
                        </div>
                        <div className="prose prose-lg text-stone-600">
                            <p>{study.solution}</p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-3xl p-8 md:p-12 mb-20 bg-primary/5 border-primary/10"
                    >
                        <h2 className="text-3xl font-bold mb-6 text-primary">Impact & Results</h2>
                        <p className="text-xl leading-relaxed text-stone-800">{study.impact}</p>
                    </motion.div>

                </article>
            </main>

            <Footer />
        </div>
    );
}
