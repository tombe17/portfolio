"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="w-full z-50 bg-white/80 sticky top-0">
            <nav className="w-full z-50 bg-white/80">
                <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
                    <Link href="/" className="text-brand-primary text-3xl font-bold tracking-tighter">
                    Thomas Bellows
                    </Link>

                    {/* Desktop Navigation (Hidden on Mobile) */}
                    <div className="hidden md:flex space-x-8 text-m font-medium items-center">
                        <Link href="/#mystory" className="hover:text-brand-secondary transition">My Story</Link>
                        <Link href="/projects" className="hover:text-brand-secondary transition">Projects</Link>
                        <Link href="/artwork" className="hover:text-brand-secondary transition">Artwork</Link>
                        <Link href="/connect" className="bg-brand-primary text-white px-4 py-2 rounded-full hover:bg-brand-secondary transition">
                            Connect
                        </Link>
                    </div>

                    <button className="md:hidden hover:cursor-pointer p-2 text-brand-primary" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4 pb-4 border-t border-gray-100`}>
                    <div className="flex flex-col space-y-2 pt-4 text-center font-medium text-brand-primary">
                        <Link href="/#mystory" onClick={() => setIsOpen(false)} className="py-2 hover:text-brand-secondary">My Story</Link>
                        <Link href="/projects" onClick={() => setIsOpen(false)} className="py-2 hover:text-brand-secondary">Projects</Link>
                        <Link href="/artwork" onClick={() => setIsOpen(false)} className="py-2 hover:text-brand-secondary">Artwork</Link>
                        <Link href="/connect" onClick={() => setIsOpen(false)} className="py-2 hover:text-brand-secondary">Connect</Link>
                    </div>
                </div>
            </nav>
      </header>
    );

}
        