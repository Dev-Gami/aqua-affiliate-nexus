
/**
 * Service card component for highlighting company services
 * @param {string} title - Service title
 * @param {string} description - Service description
 * @param {React.ReactNode} icon - Service icon
 */
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="bg-plum-mint/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-plum-dark-teal">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-plum-dark-teal mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
