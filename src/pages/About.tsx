
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import TeamMember from '../components/about/TeamMember';
import { ArrowRight, Award, Calendar, CheckCircle, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * About page component with company history, mission, and team members
 */
const About = () => {
  // Sample team member data
  const teamMembers = [
    {
      name: 'Robert Johnson',
      role: 'Founder & CEO',
      bio: 'With over 30 years of experience in the plumbing industry, Robert founded PlumbingCo with a vision to provide exceptional plumbing services with integrity and professionalism.',
      image: '/placeholder.svg',
    },
    {
      name: 'Jennifer Williams',
      role: 'Operations Director',
      bio: 'Jennifer oversees all operations, ensuring projects are completed on time and to the highest standards. Her attention to detail and management skills have been instrumental in our growth.',
      image: '/placeholder.svg',
    },
    {
      name: 'Michael Chen',
      role: 'Technical Director',
      bio: 'Michael brings 20+ years of technical expertise to lead our team of plumbers. He specializes in complex commercial projects and implementing innovative plumbing solutions.',
      image: '/placeholder.svg',
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="About Us" 
        subtitle="Learn more about our company, our history, and the dedicated team behind our success."
      />

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-plum-dark-teal mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 1998 by master plumber Robert Johnson, PlumbingCo started as a small family-owned business dedicated to providing quality plumbing services to the local community.
              </p>
              <p className="text-gray-600 mb-4">
                Over the past 25 years, we've grown into a trusted plumbing contractor serving both residential and commercial clients across the region. Our commitment to quality workmanship, customer satisfaction, and professional integrity has remained unchanged since day one.
              </p>
              <p className="text-gray-600 mb-4">
                Today, with a team of over 30 skilled plumbers and technicians, we handle projects of all sizes—from simple residential repairs to complex commercial installations and ongoing maintenance contracts.
              </p>
              
              <div className="mt-6">
                <Link to="/services" className="btn-primary inline-flex items-center">
                  Our Services <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-md">
                <div className="bg-plum-teal/20 h-80 flex items-center justify-center">
                  {/* Placeholder for company image */}
                  <div className="text-6xl">🏢</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-plum-dark-teal text-white py-3 px-5 rounded-md shadow-lg">
                <div className="text-lg font-bold">Est. 1998</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-plum-dark-teal mb-4">
              Our Mission, Vision & Values
            </h2>
            <p className="text-plum-teal max-w-2xl mx-auto">
              The principles that guide our business and define who we are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-plum-mint/30 rounded-full flex items-center justify-center text-plum-dark-teal mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-plum-dark-teal mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional plumbing services that improve the comfort, safety, and efficiency of homes and businesses through quality workmanship, reliability, and customer-centered service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-plum-mint/30 rounded-full flex items-center justify-center text-plum-dark-teal mb-4">
                <span className="text-xl">👁️</span>
              </div>
              <h3 className="text-xl font-bold text-plum-dark-teal mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the premier plumbing service provider in the region, recognized for our technical excellence, innovative solutions, and unwavering commitment to customer satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-plum-mint/30 rounded-full flex items-center justify-center text-plum-dark-teal mb-4">
                <span className="text-xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-plum-dark-teal mb-3">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-plum-dark-teal mt-1 mr-2 shrink-0" />
                  <span>Integrity in all our actions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-plum-dark-teal mt-1 mr-2 shrink-0" />
                  <span>Excellence in workmanship</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-plum-dark-teal mt-1 mr-2 shrink-0" />
                  <span>Respect for clients and colleagues</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-plum-dark-teal mt-1 mr-2 shrink-0" />
                  <span>Innovation in our solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-plum-dark-teal mb-4">
              Our Journey
            </h2>
            <p className="text-plum-teal max-w-2xl mx-auto">
              Key milestones in our company's history that have shaped who we are today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-plum-mint transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {[
                {
                  year: '1998',
                  title: 'Company Founded',
                  description: 'PlumbingCo was established by Robert Johnson with a small team of 3 plumbers focusing on residential services.',
                },
                {
                  year: '2003',
                  title: 'Commercial Expansion',
                  description: 'Expanded services to include commercial plumbing projects and grew the team to 10 skilled professionals.',
                },
                {
                  year: '2008',
                  title: 'New Headquarters',
                  description: 'Moved to larger headquarters and established our training program for apprentice plumbers.',
                },
                {
                  year: '2012',
                  title: 'Regional Growth',
                  description: 'Expanded service area to cover the entire metropolitan region and surrounding counties.',
                },
                {
                  year: '2018',
                  title: '20th Anniversary',
                  description: 'Celebrated 20 years of service with over 1,000 completed projects and a team of 25 employees.',
                },
                {
                  year: '2023',
                  title: 'Present Day',
                  description: 'Now a team of 30+ professionals handling projects across the region with a reputation for excellence.',
                },
              ].map((milestone, index) => (
                <div key={index} className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2"></div>
                  
                  {/* Year marker on timeline (desktop only) */}
                  <div className="hidden md:flex absolute left-1/2 items-center justify-center">
                    <div className="w-10 h-10 bg-plum-dark-teal rounded-full text-white flex items-center justify-center font-bold text-sm transform -translate-x-1/2">
                      <Calendar size={16} />
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md relative">
                    {/* Year (mobile only) */}
                    <div className="md:hidden bg-plum-dark-teal text-white w-16 py-1 rounded text-center font-bold text-sm absolute -top-3 left-4">
                      {milestone.year}
                    </div>
                    
                    <h3 className="text-xl font-bold text-plum-dark-teal mb-2 mt-2">
                      <span className="hidden md:inline mr-2">{milestone.year}:</span> 
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section-padding bg-plum-mint/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-plum-dark-teal mb-4">
              By The Numbers
            </h2>
            <p className="text-plum-teal max-w-2xl mx-auto">
              Our achievements and growth over the years.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users size={24} />, value: '30+', label: 'Team Members' },
              { icon: <Award size={24} />, value: '25+', label: 'Years Experience' },
              { icon: <Clock size={24} />, value: '24/7', label: 'Emergency Service' },
              { icon: <Calendar size={24} />, value: '1500+', label: 'Projects Completed' },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-plum-dark-teal rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-plum-dark-teal mb-2">{stat.value}</div>
                <div className="text-plum-teal">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-plum-dark-teal mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-plum-teal max-w-2xl mx-auto">
              The experienced professionals who lead our company and ensure we deliver excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
          
          <div className="mt-12 bg-plum-dark-teal/5 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-plum-dark-teal mb-3">Join Our Team</h3>
            <p className="text-plum-teal mb-4">
              We're always looking for skilled plumbers, technicians, and office staff to join our growing team.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications and Affiliations */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-plum-dark-teal mb-4">
              Our Certifications & Affiliations
            </h2>
            <p className="text-plum-teal max-w-2xl mx-auto">
              We maintain the highest industry standards through proper certifications and professional affiliations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Master Plumbers License',
              'National Plumbing Association',
              'Green Plumbing Certification',
              'State Contractors Board',
              'Commercial Plumbing Specialists',
              'Building Safety Association',
              'Plumbing Educators Network',
              'Regional Business Alliance',
            ].map((cert, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  {/* Placeholder for certification logos */}
                  <div className="w-10 h-10 bg-plum-mint/30 rounded-full flex items-center justify-center text-plum-dark-teal">
                    <Award size={20} />
                  </div>
                </div>
                <div className="text-sm font-medium text-plum-teal">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-plum-dark-teal mb-6">
                Community Involvement
              </h2>
              <p className="text-gray-600 mb-4">
                At PlumbingCo, we believe in giving back to the communities we serve. Throughout our history, we've been active participants in various community initiatives and charitable activities.
              </p>
              <p className="text-gray-600 mb-4">
                Our team regularly volunteers for home repair projects for elderly and disabled residents, participates in career days at local schools, and sponsors community events.
              </p>
              <p className="text-gray-600 mb-4">
                We also support the next generation of plumbers through our apprenticeship program and scholarships for trade school students pursuing careers in plumbing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-plum-dark-teal mb-4">Our Community Initiatives</h3>
              <ul className="space-y-4">
                {[
                  'Annual "Fix-It Day" for low-income homeowners',
                  'Plumbing workshops for homeowners',
                  'Trade school scholarships for aspiring plumbers',
                  'Sponsorship of local youth sports teams',
                  'Disaster relief assistance',
                ].map((initiative, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-plum-dark-teal mt-1 mr-3 shrink-0" />
                    <span>{initiative}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-plum-dark-teal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-plum-mint max-w-2xl mx-auto mb-8">
            Whether you need residential or commercial plumbing services, our team is ready to assist you with your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services" className="btn-secondary">
              Browse Our Services
            </Link>
            <Link to="/contact" className="bg-transparent hover:bg-plum-teal/20 text-white py-2 px-6 rounded-md border border-white transition-colors duration-300 font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
