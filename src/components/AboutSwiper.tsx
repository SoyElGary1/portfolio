import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
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
    <div className="w-full max-w-sm">
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
    </div>
  );
};

export default AboutSwiper;