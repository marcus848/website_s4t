
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">Nosso Portfólio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos recentes e veja como podemos ajudar o seu negócio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Item 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <div className="aspect-video rounded-t-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Desenvolvimento Web" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-1">E-commerce Moderno</h3>
              <p className="text-gray-500 text-sm mb-3">Desenvolvimento Web</p>
              <p className="text-gray-600 text-sm">
                Plataforma de e-commerce com integração de pagamentos e sistema de gestão de estoque.
              </p>
            </div>
            <div className="absolute inset-0 bg-purple-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                Ver Projeto
              </Button>
            </div>
          </div>
          
          {/* Portfolio Item 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <div className="aspect-video rounded-t-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Dashboard Power BI" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-1">Dashboard Financeiro</h3>
              <p className="text-gray-500 text-sm mb-3">Power BI</p>
              <p className="text-gray-600 text-sm">
                Dashboard completo para acompanhamento de métricas financeiras e projeções de negócio.
              </p>
            </div>
            <div className="absolute inset-0 bg-purple-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                Ver Projeto
              </Button>
            </div>
          </div>
          
          {/* Portfolio Item 3 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <div className="aspect-video rounded-t-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                alt="Aplicação Web" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-1">App de Gestão</h3>
              <p className="text-gray-500 text-sm mb-3">Aplicação Web</p>
              <p className="text-gray-600 text-sm">
                Sistema de gestão empresarial com múltiplos módulos para controle de operações.
              </p>
            </div>
            <div className="absolute inset-0 bg-purple-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                Ver Projeto
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-purple-600 hover:bg-purple-700">
            Ver Mais Projetos <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
