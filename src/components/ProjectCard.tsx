import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  repoUrl?: string;
  demoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-600">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-auto h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-800 text-purple-400 rounded-full text-sm border border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-purple-400 rounded-md hover:bg-gray-900 transition-colors border border-gray-600"
            >
              <Github className="h-4 w-4" />
              <span>Repositorio</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-purple-400 rounded-md hover:bg-gray-900 transition-colors border border-gray-600"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;