
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import ProjectCard from '../components/projects/ProjectCard';
import { useState } from 'react';

/**
 * Projects page to showcase completed company projects
 */
const Projects = () => {
  // Sample project data
  const allProjects = [
    {
      id: 'commercial-tower-1',
      title: 'Commercial Tower Plumbing',
      description: 'Complete plumbing system installation for a 15-story commercial building including water supply, drainage, and fire protection systems.',
      image: '/placeholder.svg',
      category: 'Commercial',
      client: 'Metro Developments',
      year: '2022',
      tags: ['commercial', 'installation'],
    },
    {
      id: 'luxury-apartment-2',
      title: 'Luxury Apartment Complex',
      description: 'Installation of high-end fixtures and plumbing systems for a 200-unit luxury apartment complex with swimming pools and spa facilities.',
      image: '/placeholder.svg',
      category: 'Residential',
      client: 'Highland Properties',
      year: '2021',
      tags: ['residential', 'installation', 'luxury'],
    },
    {
      id: 'hospital-3',
      title: 'Medical Center Renovation',
      description: 'Comprehensive plumbing renovation for a medical center with specialized systems for medical gases, sterilization, and waste management.',
      image: '/placeholder.svg',
      category: 'Healthcare',
      client: 'Regional Healthcare',
      year: '2023',
      tags: ['healthcare', 'renovation'],
    },
    {
      id: 'hotel-4',
      title: 'Beachfront Hotel',
      description: 'Complete plumbing system installation for a 300-room beachfront hotel including water conservation systems and saltwater handling.',
      image: '/placeholder.svg',
      category: 'Hospitality',
      client: 'Coastal Resorts',
      year: '2020',
      tags: ['hospitality', 'installation'],
    },
    {
      id: 'office-5',
      title: 'Corporate Headquarters',
      description: 'Installation of modern plumbing systems with smart water management technology for a corporate headquarters building.',
      image: '/placeholder.svg',
      category: 'Commercial',
      client: 'Tech Innovations Inc.',
      year: '2022',
      tags: ['commercial', 'installation', 'smart-systems'],
    },
    {
      id: 'school-6',
      title: 'Public School Renovation',
      description: 'Upgrading plumbing infrastructure for a large public school including water-efficient fixtures and improved drainage systems.',
      image: '/placeholder.svg',
      category: 'Educational',
      client: 'City School District',
      year: '2021',
      tags: ['educational', 'renovation', 'water-efficiency'],
    },
    {
      id: 'restaurant-7',
      title: 'Restaurant Chain Upgrade',
      description: 'Standardized plumbing upgrades for a restaurant chain across 15 locations, improving efficiency and meeting health regulations.',
      image: '/placeholder.svg',
      category: 'Food Service',
      client: 'Gourmet Group',
      year: '2023',
      tags: ['food-service', 'renovation'],
    },
    {
      id: 'residential-8',
      title: 'Historic Home Restoration',
      description: 'Careful restoration of plumbing systems in a 150-year-old historic mansion while preserving the original architecture.',
      image: '/placeholder.svg',
      category: 'Residential',
      client: 'Heritage Foundation',
      year: '2020',
      tags: ['residential', 'restoration', 'historic'],
    },
    {
      id: 'industrial-9',
      title: 'Manufacturing Facility',
      description: 'Industrial plumbing installation for a manufacturing facility with specialized systems for chemical handling and waste processing.',
      image: '/placeholder.svg',
      category: 'Industrial',
      client: 'Advanced Manufacturing Co.',
      year: '2022',
      tags: ['industrial', 'installation'],
    },
  ];

  // Filter state
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Get all unique categories for filter
  const categories = ['all', ...new Set(allProjects.map(project => project.category.toLowerCase()))];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category.toLowerCase() === activeFilter);

  return (
    <Layout>
      <PageHeader 
        title="Our Projects" 
        subtitle="Browse through our portfolio of successful plumbing projects across various sectors."
      />

      {/* Project Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-center flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  activeFilter === category
                    ? 'bg-plum-dark-teal text-white'
                    : 'bg-white text-plum-teal hover:bg-plum-mint/30'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  category={project.category}
                  client={project.client}
                  year={project.year}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-plum-dark-teal mb-2">No projects found</h3>
              <p className="text-plum-teal">Try selecting a different category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      <section className="section-padding bg-plum-mint/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-plum-dark-teal mb-4">
              Our Project Statistics
            </h2>
            <p className="text-plum-teal max-w-2xl mx-auto">
              We've successfully completed numerous projects across different sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '60%', label: 'Commercial Projects' },
              { value: '25%', label: 'Residential Projects' },
              { value: '10%', label: 'Industrial Projects' },
              { value: '5%', label: 'Specialized Sectors' },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-plum-dark-teal mb-2">{stat.value}</div>
                <div className="text-plum-teal">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-plum-dark-teal mb-4">
              Our Project Approach
            </h2>
            <p className="text-plum-teal max-w-2xl mx-auto">
              Every project follows our proven methodology to ensure quality, timeliness, and client satisfaction.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-plum-mint transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {[
                {
                  step: '01',
                  title: 'Planning & Design',
                  description: 'We work closely with architects and clients to develop detailed plumbing plans that align with the overall project vision.',
                },
                {
                  step: '02',
                  title: 'Material Selection',
                  description: 'We select high-quality materials and fixtures that meet project specifications, budget requirements, and industry standards.',
                },
                {
                  step: '03',
                  title: 'Installation',
                  description: 'Our licensed plumbers execute the installation with precision, following all building codes and best practices.',
                },
                {
                  step: '04',
                  title: 'Testing & Quality Control',
                  description: 'We conduct rigorous testing to ensure all systems function properly and meet our high standards for quality.',
                },
                {
                  step: '05',
                  title: 'Completion & Handover',
                  description: 'We complete final inspections, provide documentation, and ensure client satisfaction before project handover.',
                },
              ].map((phase, index) => (
                <div key={index} className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2"></div>
                  
                  {/* Circle marker on timeline (desktop only) */}
                  <div className="hidden md:flex absolute left-1/2 items-center justify-center">
                    <div className="w-8 h-8 bg-plum-dark-teal rounded-full text-white flex items-center justify-center font-bold text-sm transform -translate-x-1/2">
                      {phase.step}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md relative">
                    {/* Circle marker (mobile only) */}
                    <div className="md:hidden w-8 h-8 bg-plum-dark-teal rounded-full text-white flex items-center justify-center font-bold text-sm absolute -top-4 left-4">
                      {phase.step}
                    </div>
                    
                    <h3 className="text-xl font-bold text-plum-dark-teal mb-3 mt-2">{phase.title}</h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-plum-dark-teal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-plum-mint max-w-2xl mx-auto mb-8">
            Contact us today to discuss your plumbing project requirements and how we can help bring your vision to life.
          </p>
          <a href="/contact" className="btn-secondary inline-block">
            Get in Touch
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
