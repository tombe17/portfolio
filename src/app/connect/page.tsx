'use client';
import { Linkedin, MailIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Connect() {

  return (
      <main className="min-h-screen w-full relative">
        {/* The Background Image */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/connect-page/me-laughing.jpg"
            alt="Background"
            fill
            className="object-cover object-top opacity-80"
            priority
          />
        </div>

        <div className="flex flex-col justify-center items-center text-center text-3xl p-24">
          
          {/* Connect Info */}
          <div>
            <h3 className="text-5xl font-bold mb-4 text-brand-secondary">Let's Connect!</h3>
            <div className='flex flex-row items-center justify-center gap-2'>
              <Link 
              href="https://linkedin.com/in/thomas-bellows" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group flex flex-col items-center gap-1 text-brand-primary hover:text-brand-secondary">
              <Linkedin size={24} strokeWidth={1.5} />
              <span className="text-[10px] tracking-widest font-bold opacity-70 group-hover:opacity-100">
                LinkedIn
              </span>
              </Link>
              <Link 
              href="mailto:tombellows17@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Link to Email"
              className="group flex flex-col items-center gap-1 text-brand-primary hover:text-brand-secondary">
              <MailIcon size={24} strokeWidth={1.5} />
              <span className="text-[10px] tracking-widest font-bold opacity-70 group-hover:opacity-100">
                Email
              </span>
              </Link>
              
            </div>
          </div>

          {/* Form */}
          <form 
            action="https://api.web3forms.com/submit" method="POST"
            className="w-3/5 flex flex-col max-w-6xl p-8 text-md md:text-lg gap-6">
            <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY}/>

            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text"
                name="name"
                required
                placeholder='Name'
                className="w-full p-2 bg-gray-200 text-brand-primary rounded-md outline-none placeholder:text-brand-primary"
              />
              <input 
                type="email"
                name="email"
                required
                placeholder='Email'
                className="w-full p-2 bg-gray-200 text-brand-primary rounded-md outline-none placeholder:text-brand-primary"
              />
            </div>

            <div>
              <textarea 
                required
                name="message"
                placeholder='Place your message here...'
                rows={4}
                className="w-full p-2 bg-gray-200 text-brand-primary bg-clip-padding rounded-md outline-none placeholder:text-brand-primary"
              />
            </div>

            <button 
              type="submit"
              className="w-full text-xl cursor-pointer bg-brand-primary text-white py-2 rounded-md hover:bg-brand-secondary transition outline-none"
            >
              Send Message
            </button>
          </form>

        </div>
      </main>
    );
}