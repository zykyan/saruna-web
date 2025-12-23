import Link from "next/link";
import { Mail, Linkedin, Github, Dribbble, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-stone-200 bg-white/50 backdrop-blur-sm mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col gap-2">
                    <div className="text-sm text-stone-500">
                        Copyright © Saruna. | Designed by Saruna Shrestha.
                    </div>
                    <div className="text-xs text-stone-400">
                        I am committed to giving my best to achieve success together.
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="mailto:sarunasharestha94@gmail.com" className="text-stone-500 hover:text-primary transition-colors flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                    <Link href="tel:+9779851108479" className="text-stone-500 hover:text-primary transition-colors flex items-center gap-2">
                        <Phone className="w-5 h-5" />
                        <span className="sr-only">Phone</span>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" className="text-stone-500 hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="https://dribbble.com" target="_blank" className="text-stone-500 hover:text-primary transition-colors">
                        <Dribbble className="w-5 h-5" />
                        <span className="sr-only">Dribbble</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
