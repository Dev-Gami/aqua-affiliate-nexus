
import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

/**
 * Contact page with contact information and form
 */
const Contact = () => {
  return (
    <Layout>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for all your plumbing needs."
      />

      {/* Contact Information and Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-plum-dark-teal mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Have a question or need a quote? Contact us using the information below or fill out the contact form, and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-plum-mint/30 p-3 rounded-full mr-4">
                    <MapPin size={20} className="text-plum-dark-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-plum-dark-teal mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Plumbing Street<br />Watertown, NY 10010</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-plum-mint/30 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-plum-dark-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-plum-dark-teal mb-1">Call Us</h3>
                    <p className="text-gray-600">Main Office: (555) 123-4567<br />Emergency: (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-plum-mint/30 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-plum-dark-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-plum-dark-teal mb-1">Email Us</h3>
                    <p className="text-gray-600">General Inquiries: info@plumbingco.com<br />Support: support@plumbingco.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-plum-mint/30 p-3 rounded-full mr-4">
                    <Clock size={20} className="text-plum-dark-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-plum-dark-teal mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday-Friday: 8am-6pm<br />
                      Saturday: 9am-2pm<br />
                      Sunday: Closed<br />
                      <span className="font-medium text-plum-teal mt-1 block">
                        24/7 Emergency Service Available
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-plum-dark-teal text-white rounded-lg">
                <h3 className="font-bold text-xl mb-3">Emergency Service</h3>
                <p className="mb-4">
                  We offer 24/7 emergency plumbing services. For after-hours emergencies, please call our emergency line.
                </p>
                <div className="text-xl font-bold">(555) 987-6543</div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-plum-dark-teal mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-plum-dark-teal mb-6 text-center">
            Our Location
          </h2>
          <div className="rounded-lg overflow-hidden shadow-md h-96 bg-gray-200">
            {/* Map would be embedded here in a real application */}
            <div className="w-full h-full flex items-center justify-center bg-plum-teal/10">
              <div className="text-center">
                <MapPin size={40} className="text-plum-dark-teal mx-auto mb-4" />
                <p className="font-medium">Interactive map would be displayed here</p>
                <p className="text-sm text-gray-600 mt-2">123 Plumbing Street, Watertown, NY 10010</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-plum-dark-teal mb-4">
              Areas We Serve
            </h2>
            <p className="text-plum-teal max-w-2xl mx-auto">
              We provide our professional plumbing services throughout the following areas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Downtown Metro',
              'North County',
              'Westside',
              'East Hills',
              'South Harbor',
              'Riverdale',
              'Lakefront',
              'Central Valley',
              'Greenfield',
              'Highland Park',
              'Oceanview',
              'Mountain Ridge',
            ].map((area, index) => (
              <div key={index} className="bg-white py-3 px-4 rounded-md shadow-sm">
                <ArrowRight size={16} className="text-plum-dark-teal inline mr-2" />
                <span>{area}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Not sure if we service your area? Contact us to find out.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-plum-dark-teal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-plum-teal max-w-2xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: 'Do you offer free estimates?',
                answer: 'Yes, we provide free estimates for all residential and commercial plumbing projects. Contact us to schedule an appointment with one of our plumbing experts.'
              },
              {
                question: 'Are your plumbers licensed and insured?',
                answer: 'Absolutely. All our plumbers are fully licensed, insured, and have undergone extensive training and background checks for your peace of mind.'
              },
              {
                question: 'How quickly can you respond to emergencies?',
                answer: 'For emergency situations, we typically respond within 1-2 hours. We offer 24/7 emergency services to address urgent plumbing issues.'
              },
              {
                question: 'Do you offer warranties on your work?',
                answer: 'Yes, we stand behind our work with comprehensive warranties. All installations come with a 1-year warranty on labor, and we honor manufacturer warranties on parts and fixtures.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept cash, checks, all major credit cards, and digital payment methods like PayPal for your convenience. Payment plans are available for larger projects.'
              },
              {
                question: 'Do I need to be home during the service?',
                answer: "While it's preferable for someone to be present during the service, arrangements can be made if you can't be home. We prioritize your comfort and security."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-plum-dark-teal mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-plum-dark-teal text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready for Professional Plumbing Service?
          </h2>
          <p className="text-plum-mint max-w-2xl mx-auto mb-8">
            Contact us today to schedule a service appointment or request a quote for your plumbing project.
          </p>
          <div className="inline-block bg-white text-plum-dark-teal py-3 px-6 rounded-md font-bold text-xl">
            (555) 123-4567
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
