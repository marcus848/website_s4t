
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">O que nossos clientes dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça as experiências de empresas que transformaram seus negócios com nossas soluções.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gray-200 mb-3"></div>
                <h4 className="font-bold">Ana Silva</h4>
                <p className="text-sm text-gray-500">CEO, Empresa ABC</p>
              </div>
              <p className="text-gray-600 italic">
                "Os dashboards desenvolvidos transformaram completamente nossa visão dos dados. Agora tomamos decisões mais rápidas e assertivas."
              </p>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-6">
                <img className="h-16 w-16 rounded-full bg-gray-200 mb-3" src="https://media.licdn.com/dms/image/v2/D4D03AQHu5aNTNcGt0g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718299327502?e=1753920000&v=beta&t=XiRmycrUnKpW3DrVCOvpez4y-mphJ73Z58RQFl7WGIk" alt="" />
                <h4 className="font-bold">Paulo Calmon</h4>
                <p className="text-sm text-gray-500">Sócio, Ação Consultoria</p>
              </div>
              <p className="text-gray-600 italic">
                "Gostaria de compartilhar minha experiência
                incrível com o Marcus Gomes e seu trabalho impecável na construção de planilhas e
                soluções digitais. Sua dedicação à qualidade, pontualidade e eficiência é simplesmente
                extraordinária! Desde o primeiro contato, Marcus demonstrou um profissionalismo
                exemplar. Sua atenção aos detalhes e compromisso com a excelência resultaram em entregas
                de alta qualidade, que superaram minhas expectativas. Cada planilha e solução digital
                criada por ele reflete seu conhecimento profundo e habilidades técnicas impressionantes"
              </p>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gray-200 mb-3"></div>
                <h4 className="font-bold">Mariana Costa</h4>
                <p className="text-sm text-gray-500">Gerente, Startup 123</p>
              </div>
              <p className="text-gray-600 italic">
                "A consultoria nos ajudou a identificar oportunidades de melhoria nos processos que não estávamos enxergando."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
