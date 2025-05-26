
import { Card, CardContent } from "@/components/ui/card";
import { Code, ChartBar, Users } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="servicos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em tecnologia para impulsionar o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Desenvolvimento Web</h3>
              <p className="text-gray-600">
                Websites responsivos e aplicações web personalizadas que convertem visitantes em clientes.
              </p>
            </CardContent>
          </Card>

          {/* Power BI */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <ChartBar className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dashboards Power BI</h3>
              <p className="text-gray-600">
                Transforme dados em insights valiosos com painéis interativos e relatórios dinâmicos.
              </p>
            </CardContent>
          </Card>

          {/* Consultancy */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Consultoria Digital</h3>
              <p className="text-gray-600">
                Estratégias personalizadas para otimizar seus processos e melhorar a tomada de decisão.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
