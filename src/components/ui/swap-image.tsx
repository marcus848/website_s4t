import React, { useState, useRef } from 'react';

type Props = {
    backImage: string;
    frontImage: string;
};

export default function SwapImage({ backImage, frontImage }: Props) {
    const [divider, setDivider] = useState(50);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        // Calcula porcentagem do cursor em relação à largura do container
        const offsetX = e.clientX - rect.left;
        let newPercent = (offsetX / rect.width) * 100;
        // Garante que fique entre 0 e 100
        newPercent = Math.max(0, Math.min(100, newPercent));
        setDivider(newPercent);
    };
    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative overflow-hidden cursor-ew-resize rounded-lg shadow-lg"
        >
            {/* Imagem de fundo (antes - Excel) */}
            <img src={backImage} alt="Antes - Planilha Excel" className="w-full object-cover" />
            {/* Imagem do topo (depois - Power BI), com largura variável */}
            <img
                src={frontImage}
                alt="Depois - Dashboard Power BI"
                className="absolute top-0 left-0 object-cover h-full w-full"
                style={{ clipPath: `inset(0 ${100 - divider}% 0 0)` }}
            />
            {/* Linha divisória visual (opcional): */}
            <div
                className="absolute top-0"
                style={{ left: `${divider}%`, height: '100%', width: '3px', background: '#F3E8FF' }}
            ></div>
        </div>
    )
}