
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { ArrowLeft, Calendar, User, MapPin, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

/**
 * Project detail page component to display individual project information
 */
const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Sample project data - In a real app, you would fetch this based on the ID
  const project = {
    id: id || '',
    title: 'Commercial Tower Plumbing',
    description: 'Complete plumbing system installation for a 15-story commercial building including water supply, drainage, and fire protection systems.',
    fullDescription: `
      This comprehensive commercial plumbing project involved designing and installing complete plumbing systems for a modern 15-story office tower in the heart of downtown. Our team was engaged from the initial planning stages through final implementation and testing.
      
      The project included installing over 10,000 feet of piping, 200 fixtures, and a state-of-the-art water management system that reduces water usage by 40% compared to conventional systems.
      
      Our specialized commercial team coordinated closely with architects, general contractors, and building management to ensure all work met strict commercial building codes while maintaining the project timeline and budget.
    `,
    image: '/placeholder.svg',
    gallery: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
    ],
    category: 'Commercial',
    client: 'Metro Developments',
    year: '2022',
    location: 'Downtown Metro',
    projectManager: 'Michael Chen',
    duration: '18 months',
    challenges: [
      'Coordinating with multiple contractors in a high-rise setting',
      'Implementing water-saving fixtures while maintaining high pressure',
      'Meeting strict commercial building code requirements',
      'Installing systems without disrupting other construction activities',
    ],
    solutions: [
      'Created detailed phasing plan to coordinate with other trades',
      'Designed custom pressure-boosting system for upper floors',
      'Utilized BIM (Building Information Modeling) for advance planning',
      'Scheduled critical work during off-hours to minimize disruption',
    ],
    results: [
      '40% reduction in water usage compared to similar buildings',
      'All systems passed inspection on first attempt',
      'Zero safety incidents during 18-month installation',
      'Completed on schedule and within budget',
    ],
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container-custom py-10">
        {/* Back button */}
        <Link to="/projects" className="flex items-center text-plum-dark-teal hover:text-plum-teal font-medium mb-6">
          <ArrowLeft size={18} className="mr-2" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <div className="h-80 relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-plum-black/70 to-transparent">
              <div className="inline-block bg-plum-dark-teal text-white px-3 py-1 text-sm font-medium rounded-md mb-3">
                {project.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <User size={20} className="text-plum-dark-teal mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Client</div>
                  <div className="font-medium">{project.client}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar size={20} className="text-plum-dark-teal mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Completion Year</div>
                  <div className="font-medium">{project.year}</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="text-plum-dark-teal mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="font-medium">{project.location}</div>
                </div>
              </div>
            </div>
            
            <h2 className="text-xl font-bold text-plum-dark-teal mb-4">Project Overview</h2>
            <p className="text-gray-600 mb-6 whitespace-pre-line">{project.fullDescription}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-bold text-plum-dark-teal mb-4">Project Details</h2>
                <div className="space-y-3">
                  <div className="flex">
                    <div className="w-32 font-medium">Project Type:</div>
                    <div>{project.category}</div>
                  </div>
                  <div className="flex">
                    <div className="w-32 font-medium">Duration:</div>
                    <div>{project.duration}</div>
                  </div>
                  <div className="flex">
                    <div className="w-32 font-medium">Manager:</div>
                    <div>{project.projectManager}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-plum-dark-teal mb-4">Challenges & Solutions</h2>
                <div className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle size={16} className="text-plum-dark-teal mt-1 mr-2 shrink-0" />
                      <span className="text-sm">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <h2 className="text-xl font-bold text-plum-dark-teal mb-4">Project Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {project.results.map((result, index) => (
                <div key={index} className="bg-plum-mint/10 p-4 rounded-md">
                  <CheckCircle size={16} className="text-plum-dark-teal inline-block mr-2" />
                  {result}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Project Gallery */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-plum-dark-teal mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.gallery.map((image, index) => (
              <div key={index} className="bg-white p-2 rounded-lg shadow-md">
                <div className="h-48 overflow-hidden rounded">
                  <img 
                    src={image} 
                    alt={`Project image ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Related Projects - In a real app, you would fetch related projects */}
        <div>
          <h2 className="text-2xl font-bold text-plum-dark-teal mb-6">Similar Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Similar project ${i}`}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-plum-dark-teal mb-1">Similar Commercial Project {i}</h3>
                  <p className="text-sm text-gray-600 mb-3">Brief description of another similar commercial plumbing project.</p>
                  <Link 
                    to={`/projects/similar-${i}`} 
                    className="text-plum-dark-teal hover:text-plum-teal text-sm font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 bg-plum-dark-teal text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how we can help with your commercial plumbing needs.
          </p>
          <Link to="/contact" className="btn-secondary inline-block">
            Get in Touch
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
