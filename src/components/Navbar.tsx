"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        // Container to center the floating navbar
        <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                    "w-full max-w-4xl rounded-full transition-all duration-300",
                    scrolled
                        ? "glass py-3 px-6 shadow-xl shadow-primary/5 bg-white/80"
                        : "bg-transparent py-4 px-6 border border-transparent"
                )}
            >
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tight z-50 group">
                        <span className="group-hover:text-primary transition-colors">Saruna</span>
                        <span className="text-accent">.</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "px-5 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden",
                                        isActive ? "text-primary bg-primary/10" : "text-stone-600 hover:text-primary hover:bg-stone-50"
                                    )}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}

                        {/* CTA Button in Navbar */}
                        <Link
                            href="/contact"
                            className={cn(
                                "ml-4 px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105",
                                scrolled
                                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-md"
                                    : "bg-white text-stone-900 border border-stone-200 shadow-sm hover:border-primary/50"
                            )}
                        >
                            Hire Me
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden z-50 p-2 text-stone-800"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu Overlay - Separate from the floating bar for structure */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="absolute top-16 left-0 w-full mt-2 p-4"
                        >
                            <div className="glass rounded-3xl p-6 flex flex-col gap-4 shadow-2xl">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-xl font-medium p-4 rounded-xl transition-colors text-center",
                                            pathname === link.href
                                                ? "bg-primary/10 text-primary"
                                                : "text-stone-600 hover:bg-stone-50"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}
