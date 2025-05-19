import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Film } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 py-3 backdrop-blur-lg bg-black/70 border-b border-white/10">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Film className="h-8 w-8 text-netflix-red" />
            <span className="text-white font-bold text-xl">EscolhaMeuFilme</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-netflix-red transition-colors">Início</Link>
            <Link to="/escolher-filme" className="text-white hover:text-netflix-red transition-colors">Escolher Filme</Link>
            <Link to="/como-escolhemos" className="text-white hover:text-netflix-red transition-colors">Como Escolhemos</Link>
            <Link to="/aleatorio" className="text-white hover:text-netflix-red transition-colors">Aleatório</Link>
            <Link to="/blog" className="text-white hover:text-netflix-red transition-colors">Blog</Link>
            <Button asChild className="btn-primary ml-4 text-black">
              <Link to="/escolher-filme">Começar Agora</Link>
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Abrir menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-3 space-y-2 flex flex-col">
            <Link to="/" className="text-white hover:text-netflix-red transition-colors py-2">Início</Link>
            <Link to="/escolher-filme" className="text-white hover:text-netflix-red transition-colors py-2">Escolher Filme</Link>
            <Link to="/top10" className="text-white hover:text-netflix-red transition-colors py-2">Top 10</Link>
            <Link to="/como-escolhemos" className="text-white hover:text-netflix-red transition-colors py-2">Como Escolhemos</Link>
            <Link to="/aleatorio" className="text-white hover:text-netflix-red transition-colors py-2">Aleatório</Link>
            <Link to="/blog" className="text-white hover:text-netflix-red transition-colors py-2">Blog</Link>
            <Button asChild className="btn-primary mt-2 w-full">
              <Link className='text-black' to="/escolher-filme">Começar Agora</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
