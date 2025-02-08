import React from 'react';

interface Technology {
  name: string;
  icon: string;
}

interface TechFilterProps {
  technologies: Technology[];
  selectedTech: string;
  onTechSelect: (tech: string) => void;
}

const TechFilter: React.FC<TechFilterProps> = ({ technologies, selectedTech, onTechSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <button
        onClick={() => onTechSelect('all')}
        className={`px-4 py-2 rounded-full transition-colors duration-300 border ${
          selectedTech === 'all'
            ? 'bg-purple-600 text-white border-purple-500'
            : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
        }`}
      >
        All
      </button>
      {technologies.map((tech, index) => (
        <button
          key={index}
          onClick={() => onTechSelect(tech.name.toLowerCase())}
          className={`px-4 py-2 rounded-full transition-colors duration-300 border ${
            selectedTech === tech.name.toLowerCase()
              ? 'bg-purple-600 text-white border-purple-500'
              : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
          }`}
        >
          <span className="mr-2">{tech.icon}</span>
          {tech.name}
        </button>
      ))}
    </div>
  );
};

export default TechFilter;