
import { Card, CardContent } from "@/components/ui/card";
import { Code, ChartBar, Users, Brain, Cpu, FileSpreadsheet, QrCode } from "lucide-react";

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
                Websites responsivos e aplicações web personalizadas que fortalecem sua presença online e convertem visitantes em clientes.
              </p>
            </CardContent>
          </Card>

          {/* Power BI */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <ChartBar className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Power BI</h3>
              <p className="text-gray-600">
                Dashboards interativos, conectados a diversas fontes de dados, que transformam informações em insights valiosos para decisões estratégicas.
              </p>
            </CardContent>
          </Card>

          {/* Excel */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <FileSpreadsheet className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excel</h3>
              <p className="text-gray-600">
                Soluções completas em Excel com dashboards, automações e formulários personalizados que otimizam processos e aumentam a produtividade
              </p>
            </CardContent>
          </Card>

          {/* Consultancy */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Consultoria em IA</h3>
              <p className="text-gray-600">
                Analisamos seu negócio e implementamos ferramentas de IA sob medida, focando em produtividade, recução de custos e inovação.
              </p>
            </CardContent>
          </Card>

          {/* Automatization */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Automação de Processos</h3>
              <p className="text-gray-600">
                Digitalizamos rotinas e conectamos ferramentas com Power Automate e outras soluções Microsoft para tornar sua opeçração mais eficiente.
              </p>
            </CardContent>
          </Card>

          {/* Digitalization */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <QrCode className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Digitalização Estratégica</h3>
              <p className="text-gray-600">
                Avaliamos sua empresa e sugerimos as melhores tecnologias para cada área, transformando processos manuais em fluxos digitais inteligentes.
              </p>
            </CardContent>
          </Card>


        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
