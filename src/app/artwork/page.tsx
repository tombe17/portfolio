'use client'; // Ensure this is at the top of your file

import { useState } from 'react';
import Image from "next/image";
import { photoLinks } from "@/lib/artwork/photo-links";
import { sculptureLinks } from '@/lib/artwork/sculpture-links';

type Picture = {
  link: string;
  name: string;
};


export default function Artwork() {
  const allArtwork = [...photoLinks, ...sculptureLinks];
  
  // 2. Track by INDEX in the master list
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Helper to find the index of a specific photo when clicked
  const handleOpen = (item: Picture) => {
    const index = allArtwork.findIndex(a => a.link === item.link);
    setSelectedIndex(index);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % allArtwork.length);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + allArtwork.length) % allArtwork.length);
  };

  const selectedPhoto = selectedIndex !== null ? allArtwork[selectedIndex] : null;

  return (
      <main className="min-h-screen bg-gray-50 w-full mx-auto p-16">
        <div className="flex flex-col justify-center items-center text-center">
          <header className="mb-12">
            <h1 className="text-6xl font-extrabold font-handwriting text-brand-secondary tracking-tight">
              Artwork
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Thanks for swimming over to my art!
            </p>
          </header>
        </div>

        <div className="flex flex-col justify-left">
            <h1 className="text-6xl font-extrabold font-handwriting text-brand-secondary tracking-tight mb-12">
              Photography
            </h1>
        </div>

        {/* Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photoLinks.map((photo) => (
            <button 
              key={photo.name} 
              onClick={() => handleOpen(photo)}
              className="cursor-zoom-in group relative aspect-[4/3] bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <Image
                onContextMenu={(e) => e.preventDefault()}
                src={photo.link}
                alt={photo.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent flex items-end p-5">
                <h3 className="text-2xl font-bold font-handwriting text-white group-hover:text-brand-secondary transition-colors duration-300">
                  {photo.name}
                </h3>
              </div>
            </button>
          ))}
        </div>

        <div className="flex flex-col justify-left">
            <h1 className="text-6xl font-extrabold font-handwriting text-brand-secondary tracking-tight mb-12 mt-12">
              Sculpting
            </h1>
        </div>

        {/* Sculpting */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sculptureLinks.map((photo) => (
            <button 
              key={photo.name} 
              onClick={() => handleOpen(photo)}
              className="cursor-zoom-in group relative aspect-[4/3] bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <Image
                onContextMenu={(e) => e.preventDefault()}
                src={photo.link}
                alt={photo.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent flex items-end p-5">
                <h3 className="text-2xl font-bold font-handwriting text-white group-hover:text-brand-secondary transition-colors duration-300">
                  {photo.name}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* The Full-Screen Overlay (The Modal) */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedIndex(null)} // Click anywhere to close
          >
            <button className="absolute top-6 right-8 text-white font-light text-5xl hover:scale-110 transition-transform">×</button>
            <button onClick={showPrev} className="absolute left-8 text-white text-7xl z-[60] hover:scale-110 transition-transform">‹</button>
            <button onClick={showNext} className="absolute right-8 text-white text-7xl z-[60] hover:scale-110 transition-transform">›</button>
            
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <div className="relative w-full h-full max-h-[85vh] transition-all duration-500">
                <Image
                  onContextMenu={(e) => e.preventDefault()}
                  src={selectedPhoto.link}
                  alt={selectedPhoto.name}
                  fill
                  className="object-contain rounded shadow-2xl"
                />
              </div>
              <p className="text-white mt-4 text-center font-medium">{selectedPhoto.name}</p>
            </div>
          </div>
        )}
      </main>
    );
}