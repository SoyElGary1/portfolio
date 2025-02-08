import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
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
    <div className="w-full max-w-sm">
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
    </div>
  );
};

export default HeroSwiper;