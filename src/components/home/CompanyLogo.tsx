
/**
 * Company logo component for affiliate showcase
 * @param {string} name - Company name
 * @param {string} logo - Path to logo image
 */
interface CompanyLogoProps {
  name: string;
  logo: string;
}

const CompanyLogo = ({ name, logo }: CompanyLogoProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-16 w-24 flex items-center justify-center">
        <img src={logo} alt={`${name} logo`} className="max-h-full max-w-full object-contain" />
      </div>
      <p className="mt-2 text-sm text-plum-teal font-medium">{name}</p>
    </div>
  );
};

export default CompanyLogo;
