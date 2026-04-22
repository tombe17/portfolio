"use client"; // <--- Add this at the absolute top
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <main className="min-h-screen bg-white w-full">

        {/* First Picture */}
        <section className="relative w-full min-h-[400px] md:min-h-[600px] overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/home-page/kayak.png" // Place your image in the /public folder
                alt="Kayaking on the River"
                fill
                className="object-cover object-center brightness-70 scale-125 md:scale-100" // brightness-50 makes text easier to read
                priority // Tells Next.js to load this immediately
              />
            </div>
            <div className="relative z-20 max-w-6xl mx-auto px-6 pb-12 md:pb-16 pt-32 min-h-[400px] md:min-h-[600px] flex flex-col justify-end text-center">
              <h1 className="text-4xl md:text-6xl font-bold font-handwriting text-gray-300 leading-tight">
                Howdy! <span className="text-gray-300">Come on in the water's great!</span>
              </h1>
            </div>
        </section>

        {/* Beginning of Story */}
        <section id="mystory" className="flex flex-col px-8 md:px-6 py-8 gap-4 items-center bg-gray-50 w-full">
          <div className="pb-6 max-w-6xl mx-auto">
            <p className="text-xl md:text-3xl text-brand-primary text-center max-w-3xl">
              Okay, so it's a little cold. But you wouldn't have jumped in if I told you that. Anyways, let's jump into my story!
            </p><br></br>
            <p className="text-xl md:text-3xl text-brand-primary text-center max-w-3xl pt-4">
                As a kid, I always imagined myself in movies and wanted to be a 
                <strong className="font-bold"> "Movie Maker."</strong>
            </p>
          </div>
          <div className="relative w-full max-w-2xl min-h-[300px] md:min-h-[600px] aspect-video overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/home-page/movie-pic.jpg" // Place your image in the /public folder
              alt="When I grow up, I want to be a Movie Maker"
              fill
              className="object-cover object-top brightness-90 scale-120 md:scale-100"
            />
            <motion.p 
              initial={{ opacity: 0, x: -150 }}        // Start invisible and 150px to the left
              whileInView={{ opacity: 1, x: 0 }}     // Slide to the left into original spot
              viewport={{ once: true }}              // Only animate once
              transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                delay: 0.2                           // Optional: wait 0.2s so it appears after the header
              }}
              className="absolute inset-0 flex items-center justify-center text-center text-brand-primary text-3xl p-6 md:text-5xl font-handwriting drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]" >
              Or maybe I should've been an artist ;)
            </motion.p>
          </div>

          <p className="text-xl md:text-3xl text-brand-primary text-center max-w-3xl p-6 pb-12">
            I found that stories helped me connect to others and make sense of my experiences.<br></br><br></br>
            I want to "make movies" that people 
            <strong className="font-bold"> live through </strong> 
            that help them connect to others.<br></br><br></br>
            Whether we're in the blue sky phase, the construction phase, or managing logistics along the way, here's how I help: 
          </p>
        </section>

        {/* Who I am Sections */}
        <div className="w-full">
          {/* Dreamer Section */}
          <section className="w-full mx-auto grid md:grid-cols-2 items-center">
            <div className="relative w-full max-h-[500px] aspect-square overflow-hidden order-1">
              <Image
                src="/home-page/dream-big.jpg" // Place your image in the /public folder
                alt="Dream Big"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center order-2 md:order-1 space-y-4 max-w-xl p-12 md:p-8">
              <Link href="/connect">
                <h3 className="text-4xl md:text-6xl text-brand-secondary transition-all hover:scale-110 hover:drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] cursor-pointer">
                  <span className="font-handwriting">I'm a </span>
                  <span className="font-handwriting font-bold">Dreamer.</span>
                </h3>
              </Link>
              <h2 className="text-base md:text-2xl text-brand-primary leading-snug text-gray-700">
                I dream big. I'm all about envisioning the future, perfect for blue sky discussions! 
                If you need an idea or want to hear my latest dream, let's chat!
              </h2>
            </div>
          </section>

          {/* Nerd Section */}
          <section className="w-full mx-auto grid md:grid-cols-2 items-center bg-gray-50">
            <div className="relative w-full max-h-[500px] aspect-square overflow-hidden order-1 md:order-2">
              <Image
                src="/home-page/vmuseum.jpg" // Place your image in the /public folder
                alt="Heart Rate Monitor"
                fill
                className="object-cover object-bottom"
              />
            </div>
            <div className="flex flex-col justify-center text-center order-2 md:order-1 space-y-4 max-w-xl p-12 md:p-8">
              <Link href="/projects/valentines-museum">
                <h3 className="text-4xl md:text-6xl text-brand-secondary transition-all hover:scale-110 hover:drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] cursor-pointer">
                  <span className="font-handwriting">I'm a </span>
                  <span className="font-handwriting font-bold">Nerd. </span>
                </h3>
              </Link>
              <h2 className="text-base md:text-2xl text-brand-primary leading-snug text-gray-700">
                It's true, even if I deny it. I love programming, and using technology to simplify and maximize life. 
                I built this heart rate monitor for the Valentine's Museum during its construction phase!
              </h2>
            </div>
          </section>

          {/* Producer Section */}
          <section className="w-full mx-auto grid md:grid-cols-2 items-center">
            <div className="relative w-full max-h-[500px] aspect-square overflow-hidden order-1">
              <Image
                src="/home-page/batman.jpg" // Place your image in the /public folder
                alt="Batman"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center order-2 md:order-1 space-y-4 max-w-xl p-12 md:p-8">
              <Link href="/projects/gratitude-events">
                <h3 className="text-4xl md:text-6xl text-brand-secondary transition-all hover:scale-110 hover:drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] cursor-pointer">
                  <span className="font-handwriting">I'm a </span>
                  <span className="font-handwriting font-bold">Producer.</span>
                </h3>
              </Link>
              <h2 className="text-base md:text-2xl text-brand-primary leading-snug">
                I build spaces for people to connect, focusing on education, spiritual, and memorable experiences. 
                I led a team to celebrate volunteers in BYUSA with a suprise - Batman!
              </h2>
            </div>
          </section>

          {/* Kid Section */}
          <section className="w-full mx-auto grid md:grid-cols-2 items-center bg-gray-50">
            <div className="relative w-full max-h-[500px] aspect-square overflow-hidden order-1 md:order-2">
              <Image
                src="/home-page/mario.jpg" // Place your image in the /public folder
                alt="Mario"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center text-center order-2 md:order-1 space-y-4 max-w-xl p-12 md:p-8">
              <Link href="/projects/highlighted-project">
                <h3 className="text-4xl md:text-6xl text-brand-secondary transition-all hover:scale-110 hover:drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] cursor-pointer">
                  <span className="font-handwriting">I'm a </span>
                  <span className="font-handwriting font-bold">Kid.</span>
                </h3>
              </Link>
              <h2 className="text-base md:text-2xl text-brand-primary leading-snug">
                In my heart, I mean. Sometimes you just gotta enjoy life. Have some fun and do something goofy like hitting all the blocks in Super Nintendo World. 
                (If you couldn't tell, I like Mario) Wa-hoo!
              </h2>
            </div>
          </section>
        </div>

        {/* Link Section */}
        <section className="relative aspect-video w-full min-h-[400px] md:min-h-[600px] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 z-0 w-full h-full object-cover brightness-70"
          >
            <source src="/home-page/wipeout.mp4" type="video/mp4" />
            Sploosh. Your browser does not support the video tag.
          </video>
          <div className="relative z-20 max-w-4xl mx-auto px-4 md:px-6 pb-16 pt-16 md:pt-32 min-h-[400px] md:min-h-[600px] flex flex-col justify-center text-center">
            <p className="text-sm md:text-xl font-bold text-gray-300 pb-8">
              The water's not that bad, right?
              It can be nerve-wracking meeting new people, but making connections makes a difference! Even if you fall like me, it'll be ok :) 
            <br></br><br></br>
              From here, I'll let you swim around my projects, check out my art, or connect with me!<br></br>
              <span className="block italic text-sm md:text-xl pt-3">yes, I actually did become an artist too :)</span>
              <br></br>
              <span className="font-handwriting -rotate-3 inline-block pt-3 text-4xl md:text-6xl">Cheers! </span>
            </p>
            <div className="flex justify-center items-center gap-2 md:gap-4">
              <Link href="/projects" className="border border-brand-secondary px-4 py-2 text-xs md:px-8 md:py-3 md:text-base rounded-full text-white hover:bg-brand-secondary hover:text-white transition">
                View Projects
              </Link>
              <Link href="/projects/highlighted-project" className="border border-brand-secondary bg-brand-secondary px-4 py-2 text-xs md:px-8 md:py-3 md:text-base rounded-full text-white hover:text-black transition">
                Highlighted Project
              </Link>
              <Link href="/artwork" className="border border-brand-secondary px-4 py-2 text-xs md:px-8 md:py-3 md:text-base rounded-full text-white hover:bg-brand-secondary hover:text-white transition">
                View Art
              </Link>
            </div>
          </div>
        </section>
      </main>
  );
}