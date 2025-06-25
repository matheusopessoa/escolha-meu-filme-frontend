import { Link } from 'react-router-dom';
import { Film } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/90 backdrop-blur-md border-t border-white/10 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Film className="h-8 w-8 text-netflix-red" />
              <span className="text-white font-bold text-xl">EscolhaMeuFilme</span>
            </Link>
            <p className="text-white/70 mb-4">
              Ajudamos você a encontrar o filme perfeito para assistir, sem complicações.
            </p>

          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-netflix-red transition-colors">Página Inicial</Link></li>
              <li><Link to="/escolher-filme" className="text-white/70 hover:text-netflix-red transition-colors">Descubra o seu filme</Link></li>
              <li><Link to="/top10" className="text-white/70 hover:text-netflix-red transition-colors">Top 10</Link></li>
              <li><Link to="/como-escolhemos" className="text-white/70 hover:text-netflix-red transition-colors">Como Escolhemos</Link></li>
              <li><Link to="/aleatorio" className="text-white/70 hover:text-netflix-red transition-colors">Modo Aleatório</Link></li>
              <li><Link to="/blog" className="text-white/70 hover:text-netflix-red transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li><Link to="/top10/genre/Ação" className="text-white/70 hover:text-netflix-red transition-colors">Ação</Link></li>
              <li><Link to="/top10/genre/Comédia" className="text-white/70 hover:text-netflix-red transition-colors">Comédia</Link></li>
              <li><Link to="/top10/genre/Drama" className="text-white/70 hover:text-netflix-red transition-colors">Drama</Link></li>
              <li><Link to="/top10/genre/Terror" className="text-white/70 hover:text-netflix-red transition-colors">Terror</Link></li>
              <li><Link to="/top10/genre/Romance" className="text-white/70 hover:text-netflix-red transition-colors">Romance</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-white/70 hover:text-netflix-red transition-colors">Sobre Nós</Link></li>
              <li><Link to="/termos" className="text-white/70 hover:text-netflix-red transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="text-white/70 hover:text-netflix-red transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/aviso-legal" className="text-white/70 hover:text-netflix-red transition-colors">Aviso Legal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EscolhaMeuFilme. Todos os direitos reservados.
          </p>
          <p className="text-white/60 text-sm">
            Esta plataforma não armazena nenhum filme, apenas recomenda onde assistir legalmente.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
