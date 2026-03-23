import { projects } from "@/lib/project-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Find the project that matches the URL slug
  const project = projects.find((p) => p.slug === slug);

  // If the project doesn't exist, show a 404
  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto p-8 bg-gray-50 min-h-screen">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 pl-24 pr-16 pt-8">
            {/* Article */}
            <div className="flex-1">
                <header className="mt-6 mb-8 max-w-xl">
                    <h1 className="text-4xl font-bold text-brand-primary pb-1">{project.title}</h1>
                    <p className="text-s italic text-gray-600 mb-8">{project.description}</p>
                    <div className="w-[300px] h-[300px] relative overflow-hidden rounded-lg shadow-md">
                        {project.video ? (
                            <video 
                                autoPlay loop playsInline controls
                                className={project.videoClass}>
                                    <source src={project.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                            </video>
                        ) : (
                            <Image
                                src={project.topImage} 
                                alt={`${project.title} image`} 
                                className="object-cover" 
                                fill
                                priority
                            />
                        )}
                    </div>
                    <div className="mt-6">
                        {project.projectLink && (
                            <a  
                                href={project.projectLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-brand-primary text-white px-4 py-2 rounded-full hover:bg-brand-secondary transition">
                                {project.projectLinkButton}
                            </a>
                        )}
                    </div>
                </header>

                <article className="prose lg:prose-xl max-w-lg text-brand-primary">
                    <div className="whitespace-pre-wrap">
                        <h2 className="mb-2 font-handwriting text-3xl md:text-4xl">Overview</h2>
                        <p className="mb-8">{project.overview}</p>
                        <h2 className="mb-2 font-handwriting text-3xl md:text-4xl">The Dream</h2>
                        <p className="mb-8">{project.dream}</p>
                        <h2 className="mb-2 font-handwriting text-3xl md:text-4xl">Nerd Time</h2>
                        <p className="mb-8">{project.nerd}</p>
                        <h2 className="mb-2 font-handwriting text-3xl md:text-4xl">Results Produced</h2>
                        <p className="mb-8">{project.resultsProduced}</p>
                        <h2 className="mb-2 font-handwriting text-3xl md:text-4xl">How I Kept it Fun?</h2>
                        <p className="mb-8">{project.fun}</p>
                        {project.bottomImage && (
                            <div className="w-[300px] h-[300px] relative overflow-hidden rounded-lg shadow-md">
                                <Image
                                    src={project.bottomImage} 
                                    alt={`${project.title} image`} 
                                    className="object-cover" 
                                    fill
                                    priority
                                />
                            </div>
                        )}
                    </div>
                </article>
            </div>

            {/* Side Nav */}
            <aside className="md:w-64 shrink-0 md:ml-auto sticky top-16 h-fit">
                <Link href="/projects" className="text-brand-secondary hover:underline text-lg">
                ← Back to Projects
                </Link>
                <div className="gap-2 mt-4 text-brand-primary text-sm">
                    <p className="font-bold">Skills:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        {project.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="gap-2 mt-4 text-brand-primary text-sm">
                    <p className="font-bold">Tools:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        {project.tools.map((tool) => (
                            <li key={tool}>{tool}</li>
                        ))}
                    </ul>
                </div>
                <div className="gap-2 mt-4 text-brand-primary text-sm">
                    <p className="font-bold">Role:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        {project.role.map((role) => (
                            <li key={role}>{role}</li> //currently just one role, could do multiple
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    </main>
  );
}