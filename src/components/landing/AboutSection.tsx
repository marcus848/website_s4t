
import { Button } from "@/components/ui/button";
import { Globe, Database } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20" id="sobre">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Equipe de Tecnologia" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">Por que escolher nossos serviços?</h2>
            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <div className="rounded-full bg-purple-100 p-2 h-10 w-10 flex items-center justify-center shrink-0">
                  <Globe className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Experiência Comprovada</h3>
                  <p className="text-gray-600">Anos de experiência fornecendo soluções para empresas de diversos setores.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="rounded-full bg-purple-100 p-2 h-10 w-10 flex items-center justify-center shrink-0">
                  <Database className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Soluções Personalizadas</h3>
                  <p className="text-gray-600">Projetos desenvolvidos de acordo com as necessidades específicas do seu negócio.</p>
                </div>
              </div>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">Saiba Mais</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
