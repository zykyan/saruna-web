import Link from "next/link";
import { Mail, Linkedin, Dribbble, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-stone-50 border-t border-stone-200 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="/" className="text-xl font-bold tracking-tight">
                        Saruna<span className="text-stone-400">.</span>
                    </Link>
                    <p className="text-sm text-stone-500">
                        © {new Date().getFullYear()} Saruna Shrestha. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    <Link
                        href="https://linkedin.com"
                        target="_blank"
                        className="text-stone-500 hover:text-black transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                        href="https://dribbble.com"
                        target="_blank"
                        className="text-stone-500 hover:text-black transition-colors"
                    >
                        <Dribbble className="w-5 h-5" />
                        <span className="sr-only">Dribbble</span>
                    </Link>
                    <Link
                        href="mailto:hello@saruna.design"
                        className="text-stone-500 hover:text-black transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
