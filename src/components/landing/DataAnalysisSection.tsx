import SwapImage from "../ui/swap-image";
import { BarChart2, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";
import front from "@/assets/data-after.png";
import back from "../../assets/data-before.png";

export default function DataAnalysisSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-purple-50" id="analise-dados">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Texto à esquerda */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">
                            De planilhas a Insights Poderosos
                        </h2>
                        <p className="text-gray-600 space-y-4 mb-6">
                            Pare de depender de planilhas complicadas. Transforme dados brutos em insights valiosos e gráficos interativos. Com dashboards em Power BI, sua empresa toma decisões mais rápidas e estratégicas, deixando para trás as limitações do Excel tradicional.
                        </p>
                        {/* <div className="space-y-4 mb-6">
                            <div className="flex gap-4">
                                <div className="rounded-full bg-purple-100 p-2 h-10 w-10 flex items-center justify-center shrink-0">
                                    <FileSpreadsheet className="h-5 w-5 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Simplifique seus dados</h3>
                                    <p className="text-gray-600">
                                        Chega de planilhas complexas. Transforme dados brutos em insights visuais com o Power BI.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="rounded-full bg-purple-100 p-2 h-10 w-10 flex items-center justify-center shrink-0">
                                    <BarChart2 className="h-5 w-5 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Decisões mais rápidas</h3>
                                    <p className="text-gray-600">
                                        Dashboards claros ajudam você a tomar decisões com mais confiança e agilidade.
                                    </p>
                                </div>
                            </div>
                        </div> */}
                        <Button className="bg-purple-600 hover:bg-purple-700">Ver soluções</Button>
                    </div>

                    {/* SwapImage à direita */}
                    <div className="lg:w-1/2">
                        <SwapImage
                            beforeImage={back}
                            afterImage={front}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
