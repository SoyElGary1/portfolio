import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import { ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Code2, BookOpen, Gamepad2, Dog } from 'lucide-react';

const AboutSwiper = () => {
  const slides = [
    {
      title: "Stack Tecnológico",
      description: "Especialista en Java, Spring Boot y React con un enfoque estratégico para resolver problemas",
      Icon: Code2
    },
    {
      title: "Aprendizaje Continuo",
      description: "Expandiendo constantemente mi repertorio tecnológico como coleccionar expansiones de juegos",
      Icon: BookOpen
    },
    {
      title: "Gaming Enthusiast",
      description: "Entusiasta de los juegos de mesa, aplicando pensamiento estratégico tanto en juegos como en código",
      Icon: Gamepad2
    },
    {
      title: "Compañero Fiel",
      description: "Orgulloso dueño de un perro salchicha, trayendo alegría a las sesiones de programación",
      Icon: Dog
    }
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="text-center">
              <slide.Icon className="h-12 w-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2 text-purple-400">{slide.title}</h3>
              <p className="text-gray-300">{slide.description}</p>
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

export default AboutSwiper;