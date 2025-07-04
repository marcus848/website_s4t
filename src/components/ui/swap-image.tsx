import React, { useState, useRef } from 'react';

type Props = {
    afterImage: string;
    beforeImage: string;
};

export default function SwapImage({ afterImage, beforeImage }: Props) {
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
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        const offsetX = touch.clientX - rect.left;
        const percent = (offsetX / rect.width) * 100;
        setDivider(Math.max(0, Math.min(100, percent)));
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative overflow-hidden cursor-ew-resize rounded-lg shadow-lg"
        >
            {/* Imagem de fundo (antes - Excel) */}
            <img src={beforeImage} alt="Antes - Planilha Excel" className="w-full object-cover" />
            {/* Imagem do topo (depois - Power BI), com largura variável */}
            <img
                src={afterImage}
                alt="Depois - Dashboard Power BI"
                className="absolute top-0 left-0 object-cover h-full w-full"
                style={{ clipPath: `inset(0 ${100 - divider}% 0 0)` }}
            />
            {/* Linha divisória visual (opcional): */}
            <div
                className="absolute top-0"
                style={{ left: `${divider}%`, height: '100%', width: '3px', background: '#6B21A8' }}
            ></div>
        </div>
    )
}