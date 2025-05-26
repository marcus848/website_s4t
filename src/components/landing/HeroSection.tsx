
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <header className="bg-gradient-to-r from-purple-700 to-violet-600 text-white pt-24">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Soluções Digitais para o Crescimento do seu Negócio
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Desenvolvimento web profissional e análise de dados com Power BI para empresas médias e pequenas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
              Solicitar Orçamento
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
              Nossos Serviços <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="relative h-64 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
          alt="Tecnologia e Inovação" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
    </header>
  );
};

export default HeroSection;
