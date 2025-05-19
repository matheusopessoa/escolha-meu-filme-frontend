import { useState } from 'react';
import Header from '../assets/components/Header';
import Footer from '../assets/components/Footer';
import MenuSanduiche from '../assets/components/MenuSanduiche';
import { useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children, showMenuSanduiche = true }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="page-layout">
      <div 
        className="page-layout-bg"
        style={{
          backgroundImage: 'url("/pcbg.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1
        }}
      />
      
      <Header />
    
      
      <main className="page-layout-content">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
