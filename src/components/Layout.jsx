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
          background: 'rgb(17, 24, 39)',
          backgroundImage: `
            linear-gradient(135deg, rgb(17, 24, 39) 0%, rgb(31, 17, 17) 50%, rgb(17, 24, 39) 100%),
            radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.15) 0%, rgba(17, 24, 39, 0) 70%)
          `,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            content: '""',
            position: 'absolute',
            width: '200%',
            height: '200%',
            top: '-50%',
            left: '-50%',
            background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.5,
            animation: 'grain 8s steps(10) infinite'
          }}
        />
      </div>
      
      <Header />
      
      <main className="page-layout-content">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
