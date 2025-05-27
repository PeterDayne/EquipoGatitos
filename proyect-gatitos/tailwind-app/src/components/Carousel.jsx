import React from 'react';
import slide1 from './images/10.Atr_vete_a_incluir_estas_8_piezas_de_ropa_de_hombre_en_tu_armario.jpg';
import slide2 from './images/Estilos-de-ropa-para-hombre.jpg'
import slide3 from './images/istockphoto-1131409615-612x612.jpg'

function Carousel() {
  const images = [
    slide1, slide2, slide3
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll-x">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`slide-${index}`} className="w-full object-cover h-[300px]" />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
