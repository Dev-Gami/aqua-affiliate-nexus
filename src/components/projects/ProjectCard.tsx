
import { Link } from 'react-router-dom';

/**
 * Project card component for showcasing completed projects
 * @param {string} id - Project ID for routing
 * @param {string} title - Project title
 * @param {string} description - Short project description
 * @param {string} image - Project image URL
 * @param {string} category - Project category
 * @param {string} client - Client name
 * @param {string} year - Year completed
 */
interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  client: string;
  year: string;
}

const ProjectCard = ({ 
  id, 
  title, 
  description, 
  image, 
  category, 
  client, 
  year 
}: ProjectCardProps) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
        <div className="absolute top-0 right-0 bg-plum-dark-teal text-white px-3 py-1 text-sm font-medium">
          {year}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="text-sm text-plum-teal font-medium mb-2">{category}</div>
        <h3 className="text-xl font-bold text-plum-dark-teal mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        
        <div className="flex justify-between items-center mt-auto">
          <div className="text-sm font-medium">
            <span className="text-plum-teal">Client:</span> {client}
          </div>
          <Link 
            to={`/projects/${id}`} 
            className="text-plum-dark-teal hover:text-plum-teal font-medium text-sm flex items-center"
          >
            View Details
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
