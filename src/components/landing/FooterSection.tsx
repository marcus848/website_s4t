
const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre Nós</h3>
            <p className="text-gray-400">
              Especialistas em soluções digitais para empresas que buscam crescimento e inovação.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#servicos" className="text-gray-400 hover:text-white">Desenvolvimento Web</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-white">Power BI</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-white">Consultoria</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Início</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-white">Serviços</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white">Portfólio</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white">Sobre</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contato@seudominio.com</li>
              <li>(11) 9999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 Sua Empresa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
