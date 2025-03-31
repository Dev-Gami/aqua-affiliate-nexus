
import Layout from '../components/layout/Layout';
import StatsCounter from '../components/home/StatsCounter';
import CompanyLogo from '../components/home/CompanyLogo';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';

/**
 * Home page component with hero section, stats counters, and company affiliates
 */
const Index = () => {
  // Sample data for stats counters
  const stats = [
    { label: 'Projects Completed', value: 1500, suffix: '+' },
    { label: 'Square Yards Covered', value: 25000, suffix: '+' },
    { label: 'Satisfied Clients', value: 950, suffix: '+' },
    { label: 'Affiliated Companies', value: 30, suffix: '+' },
  ];

  // Sample data for affiliated company logos
  const affiliatedCompanies = [
    { name: 'Plumbing Supplies Inc.', logo: '/placeholder.svg' },
    { name: 'Water Solutions', logo: '/placeholder.svg' },
    { name: 'Pipe Masters', logo: '/placeholder.svg' },
    { name: 'Quality Fittings', logo: '/placeholder.svg' },
    { name: 'Drain Experts', logo: '/placeholder.svg' },
    { name: 'Valve Systems', logo: '/placeholder.svg' },
  ];

  // Sample data for services
  const services = [
    {
      title: 'Residential Plumbing',
      description: 'Complete solutions for homes and apartments',
      icon: '🏠',
    },
    {
      title: 'Commercial Services',
      description: 'Expert plumbing for businesses and commercial properties',
      icon: '🏢',
    },
    {
      title: 'Emergency Repairs',
      description: '24/7 rapid response for urgent plumbing issues',
      icon: '🚨',
    },
  ];

  return (
    <Layout noTopPadding>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-plum-dark-teal via-plum-teal to-plum-mint py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                Professional Plumbing Services You Can Trust
              </h1>
              <p className="text-lg mb-8 text-plum-white/90 max-w-lg">
                We provide expert plumbing solutions for residential and commercial properties with a focus on quality, reliability, and customer satisfaction.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-secondary">
                  Get a Quote
                </Link>
                <Link to="/services" className="btn-primary">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-lg">
                  {/* Placeholder for hero image */}
                  <div className="absolute inset-0 bg-plum-dark-teal/20 backdrop-blur-sm rounded-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-5xl">
                    🔧
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-plum-dark-teal font-bold text-4xl">25+</div>
                  <div className="text-plum-teal">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-plum-dark-teal text-center mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCounter
                key={index}
                label={stat.label}
                endValue={stat.value}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-plum-dark-teal mb-4">
              Our Services
            </h2>
            <p className="text-plum-teal max-w-2xl mx-auto">
              We offer a comprehensive range of plumbing services to meet all your residential and commercial needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-plum-dark-teal mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="text-plum-dark-teal hover:text-plum-teal font-medium inline-flex items-center">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-plum-mint/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-plum-dark-teal mb-6">
                Why Choose PlumbingCo?
              </h2>
              <p className="text-plum-teal mb-8">
                With over 25 years of experience, we've built a reputation for excellence in the plumbing industry. Our dedicated team ensures each project is completed to the highest standards.
              </p>
              
              <div className="space-y-4">
                {[
                  'Licensed and Insured Professionals',
                  'Transparent Pricing with No Hidden Fees',
                  'Prompt and Reliable Service',
                  '100% Satisfaction Guarantee',
                  'Modern Equipment and Techniques',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-plum-dark-teal mt-1 mr-3 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-plum-dark-teal text-white rounded-lg flex items-center">
                <Phone size={24} className="mr-3 shrink-0" />
                <div>
                  <div className="text-sm">For Emergency Services</div>
                  <div className="font-bold text-xl">(555) 123-4567</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="h-80 bg-plum-teal/20 rounded-lg flex items-center justify-center">
                {/* Placeholder for "Why Choose Us" image */}
                <div className="text-7xl">🚿</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-md w-32 h-32 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-plum-dark-teal">100%</div>
                <div className="text-center text-sm text-plum-teal">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliated Companies */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-plum-dark-teal text-center mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-plum-teal text-center max-w-2xl mx-auto mb-12">
            We work with leading suppliers and manufacturers to ensure we deliver the best quality products and services to our clients.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {affiliatedCompanies.map((company, index) => (
              <CompanyLogo
                key={index}
                name={company.name}
                logo={company.logo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-plum-dark-teal py-12 md:py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Plumbing Project?
          </h2>
          <p className="text-plum-mint max-w-2xl mx-auto mb-8">
            Whether you need a simple repair or a complete plumbing installation, our team is ready to help. Get in touch today for a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
            <Link to="/projects" className="bg-transparent hover:bg-plum-teal/20 text-white py-2 px-6 rounded-md border border-white transition-colors duration-300 font-medium">
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
