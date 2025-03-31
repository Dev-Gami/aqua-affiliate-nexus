
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

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
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${noTopPadding ? '' : 'pt-8 md:pt-12'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
