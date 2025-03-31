
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollFadeIn from '../ui/ScrollFadeIn';

/**
 * Main layout component that wraps all pages
 * @param {ReactNode} children - The page content
 * @param {boolean} noTopPadding - Option to remove top padding for pages with hero sections
 */
interface LayoutProps {
  children: ReactNode;
  noTopPadding?: boolean;
}

const Layout = ({ children, noTopPadding = false }: LayoutProps) => {
  // Process children to wrap each direct section child with ScrollFadeIn
  const enhancedChildren = React.Children.map(children, (child, index) => {
    // Only apply ScrollFadeIn to section elements at the top level
    if (React.isValidElement(child) && 
        (child.type === 'section' || 
         (typeof child.type === 'function' && child.type.name === 'Section'))) {
      return (
        <ScrollFadeIn delay={index * 100}>
          {child}
        </ScrollFadeIn>
      );
    }
    return child;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${noTopPadding ? '' : 'pt-8 md:pt-12'}`}>
        {enhancedChildren}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
