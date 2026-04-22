import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/project-data";
import { highlight } from "@/lib/highlighted-project-data";


export default function Projects() {
  return (
      <main className="min-h-screen bg-gray-50 w-full mx-auto p-16">
        <div className="flex flex-col justify-center items-center text-center">
          <header className="mb-12">
            <h1 className="text-6xl font-extrabold font-handwriting text-brand-secondary tracking-tight">
              Project Portfolio
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Below are some of the projects I've worked on, click on any of them for more info!
            </p>
          </header>
        </div>

      {/* The Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* First have the highlighted project */}
        <Link 
            key="highlighted-project" 
            href="/projects/highlighted-project"
            className="group block bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-2xl hover:shadow-brand-secondary/100 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
          {/* Project Image Wrapper */}
          <div className="aspect-video relative overflow-hidden bg-gray-100">
            <Image
              src={highlight.topImage}
              alt={highlight.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Project Details */}
          <div className="p-4">      
            <h3 className="text-3xl font-bold font-handwriting text-brand-primary mb-2 group-hover:text-brand-secondary transition-colors">
              {highlight.title}
            </h3>
            <p className="text-xs text-gray-500 line-clamp-2">
              {highlight.description}
            </p>
            <div className="mt-4 flex items-center text-sm font-bold text-brand-primary group-hover:text-brand-secondary transition-colors">
              View Highlighted Project 
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </Link>

        {/* Rest of the projects */}
        {projects.map((project) => (
          <Link 
            key={project.slug} 
            href={`/projects/${project.slug}`}
            className="group block bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Project Image Wrapper */}
            <div className="aspect-video relative overflow-hidden bg-gray-100">
              <Image
                src={project.topImage}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Details */}
            <div className="p-4">      
              <h3 className="text-3xl font-bold font-handwriting text-brand-primary mb-2 group-hover:text-brand-secondary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-xs text-gray-500 line-clamp-2">
                {project.description}
              </p>
              
              <div className="mt-4 flex items-center text-sm font-bold text-brand-primary group-hover:text-brand-secondary transition-colors">
                View Project 
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </main>
    );
}