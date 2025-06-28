import SwapImage from "../ui/swap-image";
import { BarChart2, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";
import front from "@/assets/data-after.png";
import back from "../../assets/data-before.png";

export default function WebSection() {
    return (
        <section className="py-20 bg-white" id="analise-dados">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                    {/* SwapImage à direita */}
                    <div className="lg:w-1/2">
                        <SwapImage
                            beforeImage={back}
                            afterImage={front}
                        />
                    </div>

                    {/* Texto à esquerda */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">
                            Coloque Seu Negócio no Mundo Digital
                        </h2>
                        <p className="text-gray-600 space-y-4 mb-6">
                            Marque presença na internet com um site profissional e responsivo. Enquanto você foca no negócio, seu site atrai clientes 24 horas por dia, passando credibilidade e ampliando seu alcance além das fronteiras físicas. Transforme visitantes online em clientes reais com uma presença digital sólida.
                        </p>
                        <Button className="bg-purple-600 hover:bg-purple-700">Ver soluções</Button>
                    </div>


                </div>
            </div>
        </section>
    );
}
