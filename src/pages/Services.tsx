
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import ServiceCard from '../components/services/ServiceCard';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

/**
 * Services page component to showcase company services
 */
const Services = () => {
  // Sample service data
  const services = [
    {
      title: 'Residential Plumbing',
      description: 'Complete plumbing solutions for homes including installation, repair, and maintenance of pipes, fixtures, and water systems.',
      icon: <span className="text-2xl">🏠</span>,
    },
    {
      title: 'Commercial Plumbing',
      description: 'Specialized plumbing services for businesses, offices, and commercial properties with minimal disruption to operations.',
      icon: <span className="text-2xl">🏢</span>,
    },
    {
      title: 'Emergency Repairs',
      description: '24/7 emergency plumbing services for urgent issues like burst pipes, leaks, and flooding to prevent further damage.',
      icon: <span className="text-2xl">🚨</span>,
    },
    {
      title: 'Pipe Installation & Repair',
      description: 'Expert installation and repair of all types of piping systems, ensuring proper water flow and preventing future issues.',
      icon: <span className="text-2xl">🔧</span>,
    },
    {
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning services to remove clogs and ensure proper drainage throughout your plumbing system.',
      icon: <span className="text-2xl">🚿</span>,
    },
    {
      title: 'Fixture Installation',
      description: 'Installation and replacement of sinks, toilets, showers, and other plumbing fixtures with attention to detail.',
      icon: <span className="text-2xl">🚽</span>,
    },
    {
      title: 'Water Heater Services',
      description: 'Installation, repair, and maintenance of water heaters to ensure reliable hot water supply for your home or business.',
      icon: <span className="text-2xl">♨️</span>,
    },
    {
      title: 'Sewer Line Services',
      description: 'Comprehensive sewer line services including inspection, cleaning, repair, and replacement for proper waste removal.',
      icon: <span className="text-2xl">🧹</span>,
    },
    {
      title: 'Maintenance Contracts',
      description: 'Regular maintenance plans to prevent major plumbing issues and extend the life of your plumbing systems.',
      icon: <span className="text-2xl">📋</span>,
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Our Services" 
        subtitle="We offer comprehensive plumbing solutions for residential and commercial properties."
      />

      {/* Main Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-plum-dark-teal mb-4">
              Our Service Process
            </h2>
            <p className="text-plum-teal max-w-2xl mx-auto">
              We follow a streamlined process to ensure high-quality, efficient service for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'We discuss your plumbing needs and schedule an on-site evaluation.',
              },
              {
                step: '02',
                title: 'Detailed Assessment',
                description: 'Our experts diagnose the issue and provide a comprehensive solution.',
              },
              {
                step: '03',
                title: 'Clear Quote',
                description: 'We provide a transparent quote with no hidden fees or surprise charges.',
              },
              {
                step: '04',
                title: 'Expert Execution',
                description: 'Our licensed plumbers complete the work efficiently and professionally.',
              },
            ].map((step, index) => (
              <div key={index} className="relative border border-gray-200 rounded-lg p-6 bg-white">
                <div className="absolute -top-5 left-6 bg-plum-dark-teal text-white text-lg font-bold py-1 px-3 rounded">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-plum-dark-teal mt-4 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-plum-mint/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-plum-dark-teal mb-6">
                Areas We Serve
              </h2>
              <p className="text-plum-teal mb-8">
                We provide our professional plumbing services across multiple locations to ensure more communities have access to reliable plumbing solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Downtown Metro',
                  'North County',
                  'Westside',
                  'East Hills',
                  'South Harbor',
                  'Riverdale',
                  'Lakefront',
                  'Central Valley',
                ].map((area, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle size={16} className="text-plum-dark-teal mr-2 shrink-0" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link to="/contact" className="btn-primary inline-block">
                  Schedule Service
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-plum-dark-teal mb-4">Not sure if we serve your area?</h3>
              <p className="text-gray-600 mb-4">
                Contact us today to check if your location is within our service area. We're constantly expanding to reach more communities.
              </p>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <div className="font-medium text-plum-dark-teal mb-2">Call us for immediate assistance:</div>
                <div className="text-xl font-bold text-plum-teal">(555) 123-4567</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-plum-dark-teal mb-4">
              Transparent Pricing
            </h2>
            <p className="text-plum-teal max-w-2xl mx-auto">
              We believe in transparent pricing with no hidden fees. Our rates are competitive and reflect the quality of our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Diagnostic Service',
                price: '$75',
                description: 'Professional assessment of your plumbing issue',
                features: [
                  'Comprehensive inspection',
                  'Problem identification',
                  'Detailed solution plan',
                  'Upfront cost estimate',
                ],
              },
              {
                title: 'Standard Service',
                price: '$150+',
                description: 'Common plumbing repairs and installations',
                features: [
                  'Leak repairs',
                  'Fixture installations',
                  'Drain cleaning',
                  'Basic water heater service',
                ],
                highlighted: true,
              },
              {
                title: 'Commercial Services',
                price: 'Custom Quote',
                description: 'Tailored solutions for business properties',
                features: [
                  'Large-scale installations',
                  'System maintenance',
                  'Code compliance checks',
                  'Emergency response priority',
                ],
              },
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`border rounded-lg overflow-hidden h-full flex flex-col ${
                  plan.highlighted 
                    ? 'border-plum-dark-teal shadow-md' 
                    : 'border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-plum-dark-teal text-white py-2 px-4 text-center font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`p-6 flex-grow ${plan.highlighted ? 'bg-white' : 'bg-white'}`}>
                  <h3 className="text-xl font-bold text-plum-dark-teal mb-2">{plan.title}</h3>
                  <div className="text-3xl font-bold text-plum-teal mb-2">{plan.price}</div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle size={16} className="text-plum-dark-teal mt-1 mr-2 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                  <Link 
                    to="/contact" 
                    className={`w-full text-center py-2 px-4 rounded-md font-medium ${
                      plan.highlighted
                        ? 'bg-plum-dark-teal hover:bg-plum-teal text-white'
                        : 'bg-white border border-plum-dark-teal text-plum-dark-teal hover:bg-plum-mint/20'
                    } transition-colors duration-300 block`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need a custom solution? Contact us for a personalized quote tailored to your specific requirements.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-plum-dark-teal text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-plum-mint max-w-2xl mx-auto">
              Read what our satisfied customers have to say about our plumbing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                location: 'Downtown Metro',
                testimonial: 'The PlumbingCo team responded quickly to our emergency leak. They were professional, clean, and fixed the issue permanently.',
              },
              {
                name: 'Sarah Johnson',
                location: 'Westside',
                testimonial: 'We hired PlumbingCo for a complete bathroom remodel. Their attention to detail and quality of work exceeded our expectations.',
              },
              {
                name: 'Michael Brown',
                location: 'East Hills',
                testimonial: 'As a property manager, I rely on PlumbingCo for all our plumbing needs. They're always dependable, honest, and reasonably priced.',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-plum-teal/30 p-6 rounded-lg">
                <div className="text-2xl mb-4">"</div>
                <p className="italic mb-6">{testimonial.testimonial}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-plum-mint/30 rounded-full mr-3"></div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-plum-mint">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-plum-dark-teal mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-plum-teal max-w-2xl mx-auto mb-8">
            Contact us today to schedule a service or request a quote. Our friendly team is ready to assist you with all your plumbing needs.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Contact Us Now
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
