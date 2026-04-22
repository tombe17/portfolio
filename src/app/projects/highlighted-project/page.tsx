import { highlight } from "@/lib/highlighted-project-data";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectPage() {

  return (
    <main className="mx-auto p-8 bg-gray-50 min-h-screen">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 pl-8 md:pl-24 pr-16 pt-8">
            {/* Article */}
            <div className="flex-1">
                <header className="mt-6 mb-8 max-w-xl">
                    <h1 className="text-4xl font-bold text-brand-primary pb-1">{highlight.title}</h1>
                    <p className="text-s italic text-gray-600 mb-8">{highlight.description}</p>
                    <div className="w-[300px] h-[500px] relative overflow-hidden rounded-lg shadow-md">
                        {highlight.video ? (
                            <video 
                                autoPlay loop playsInline controls muted
                                className={highlight.videoClass}>
                                    <source src={highlight.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                            </video>
                        ) : (
                            <Image
                                src={highlight.topImage} 
                                alt={`${highlight.title} image`} 
                                className="object-cover" 
                                fill
                                priority
                            />
                        )}
                    </div>
                    <h1 className="my-2 font-handwriting text-2xl md:text-3xl max-w-lg text-brand-secondary">For the best experience, play the music while reading!</h1>
                    
                </header>

                <article className="prose lg:prose-xl max-w-lg text-brand-primary">
                    <div className="whitespace-pre-wrap">
                        <h2 className="mb-2 font-handwriting text-3xl md:text-4xl">Overview</h2>
                        <p className="mb-8">{highlight.overview}</p>
                        <h2 className="mb-2 font-handwriting text-3xl md:text-4xl">The Dream</h2>
                        <p className="mb-8">{highlight.dream}</p>
                        <div className="w-[300px] h-[300px] relative overflow-hidden rounded-lg shadow-md">
                            <Image
                                src={highlight.topImage} 
                                alt={`${highlight.title} image`} 
                                className="object-cover" 
                                fill
                                priority
                            />
                        </div>
                        <div className="mt-6 mb-6">
                            <a  
                                href={highlight.projectLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-brand-primary text-white px-4 py-2 rounded-full hover:bg-brand-secondary transition">
                                {highlight.projectLinkButton}
                            </a>
                        </div>
                        <h2 className="mb-2 font-handwriting text-3xl md:text-4xl">Nerd Time</h2>
                        <p className="mb-8">{highlight.nerd}</p>
                        <h2 className="mb-2 font-handwriting text-3xl md:text-4xl">Results Produced</h2>
                        <p className="mb-8">{highlight.resultsProduced}</p>
                        <h2 className="mb-2 font-handwriting text-3xl md:text-4xl">How I Kept it Fun?</h2>
                        <p className="mb-8">{highlight.fun}</p>
                        {highlight.bottomImage && (
                            <div className="w-[300px] h-[300px] relative overflow-hidden rounded-lg shadow-md">
                                <Image
                                    src={highlight.bottomImage} 
                                    alt={`${highlight.title} image`} 
                                    className="object-cover object-[center_-60px]" 
                                    fill
                                    priority
                                />
                            </div>
                        )}
                    </div>
                </article>
            </div>

            {/* Side Nav */}
            <aside className="md:w-64 shrink-0 md:ml-auto sticky top-24 h-fit pb-16 md:pl-16 md:pb-0">
                <Link href="/projects" className="text-brand-secondary hover:underline text-lg">
                ← Back to Projects
                </Link>
                <div className="gap-2 mt-4 text-brand-primary text-sm">
                    <p className="font-bold">Skills:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        {highlight.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="gap-2 mt-4 text-brand-primary text-sm">
                    <p className="font-bold">Tools:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        {highlight.tools.map((tool) => (
                            <li key={tool}>{tool}</li>
                        ))}
                    </ul>
                </div>
                <div className="gap-2 mt-4 text-brand-primary text-sm">
                    <p className="font-bold">Role:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        {highlight.role.map((role) => (
                            <li key={role}>{role}</li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    </main>
  );
}