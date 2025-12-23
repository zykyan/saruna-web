import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Saruna Shrestha | Senior UI/UX Designer",
  description: "Portfolio of Saruna Shrestha, a Senior UI/UX & Product Designer specializing in Design Thinking, Prototyping, and creating impact-driven user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          outfit.variable,
          "antialiased bg-stone-50 text-stone-900 selection:bg-stone-900 selection:text-white font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
