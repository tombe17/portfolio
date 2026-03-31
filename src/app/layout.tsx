import type { Metadata } from "next";
import { Montserrat, Caveat } from "next/font/google"; // Import Montserrat
import { Linkedin, Github } from "lucide-react";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import MotionProvider from "@/components/motion";
import Navbar from "@/components/Navbar";
import "./globals.css";

// Configure Montserrat and Caveat
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"], 
});

const handwriting = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Thomas Bellows Portfolio",
  description: "Portfolio of Thomas Bellows - Experience Designer and Producer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //console.log("Font Variable Check:", handwriting.variable);

  return (
    <html lang="en" className={`${montserrat.variable} ${handwriting.variable}`} 
      style={{ "--font-handwriting": handwriting.style.fontFamily } as React.CSSProperties}
      suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen flex flex-col">
      
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        <MotionProvider>
          {children}
        </MotionProvider>
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          
          <div className="hidden md:flex text-center md:text-left">
            <p className="font-bold text-lg text-brand-primary">Thomas Bellows</p>
          </div>
          
          <div className="flex space-x-6 text-sm text-gray-600 items-center justify-center">
            <Link 
              href="https://linkedin.com/in/thomas-bellows" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Link to LinkedIn Profile"
              className="group flex flex-col items-center gap-1 text-brand-primary hover:text-brand-secondary">
              <Linkedin size={24} strokeWidth={1.5} />
              <span className="text-[10px] tracking-widest font-bold opacity-70 group-hover:opacity-100">
                LinkedIn
              </span>
            </Link>
            <Link 
             href="https://github.com/tombe17?tab=repositories" 
             target="_blank" 
             rel="noopener noreferrer"
             aria-label="Link to GitHub Profile"
             className="group flex flex-col items-center gap-1 text-brand-primary hover:text-brand-secondary">
              <Github size={24} strokeWidth={1.5} />
              <span className="text-[10px] tracking-widest font-bold opacity-70 group-hover:opacity-100">
                GitHub
              </span>
            </Link>
    
          </div>

          <p className="hidden md:flex text-xs text-gray-400 text-center md:text-right">
            © 2026 Built with Next.js & TypeScript
          </p>
        </div>
      </footer>
      <Analytics />
      </body>
    </html>
  );
}