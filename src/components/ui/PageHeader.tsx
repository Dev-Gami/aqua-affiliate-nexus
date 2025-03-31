
import React from 'react';

/**
 * Page header component with consistent styling
 * @param {string} title - The main title
 * @param {string} subtitle - Optional subtitle
 * @param {string} bgColor - Background color class
 */
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgColor?: string;
}

const PageHeader = ({ 
  title, 
  subtitle, 
  bgColor = 'bg-plum-mint/30' 
}: PageHeaderProps) => {
  return (
    <div className={`${bgColor} py-10 md:py-16`}>
      <div className="container-custom text-center">
        <h1 className="page-header">{title}</h1>
        {subtitle && <p className="subheading max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
