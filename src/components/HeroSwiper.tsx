import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-cards';

const HeroSwiper = () => {
  const cards = [
    {
      title: "Desarrollo Full Stack",
      description: "Especializado en crear soluciones completas y escalables",
      icon: "🎯"
    },
    {
      title: "Experto en Java",
      description: "Dominio avanzado en desarrollo backend con Spring Boot",
      icon: "☕"
    },
    {
      title: "React Enthusiast",
      description: "Creación de interfaces modernas y responsivas",
      icon: "⚛️"
    },
    {
      title: "Game Master",
      description: "Aplicando estrategias de juegos en el desarrollo",
      icon: "🎲"
    }
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-full"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="text-center">
              <span className="text-4xl mb-4 block">{card.icon}</span>
              <h3 className="text-xl font-bold mb-2 text-purple-400">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 transform animate-bounce-x">
        <ChevronRight className="w-8 h-8 text-purple-400" />
      </div>
      <div className="md:hidden flex justify-center mt-4">
        <ChevronRight className="w-8 h-8 text-purple-400 animate-bounce-y" />
      </div>
    </div>
  );
};

export default HeroSwiper;