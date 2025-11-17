// src/components/About.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import Slider from "react-slick";


import img1 from "../assets/iglesia.jpg";
import img2 from "../assets/iglesia.jpg";
import img3 from "../assets/iglesia.jpg";
import img4 from "../assets/iglesia.jpg";
import img5 from "../assets/iglesia.jpg";

const photos = [img1, img2, img3, img4, img5];

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,   // sin flechas
  autoplay: true,  // 👈 debe estar así
  autoplaySpeed: 2000, // cada 4 segundos
  pauseOnHover: false, // 👈 evita que se detenga por hover
};




// =============================
//   COUNTDOWN SIN ANIMACIONES
// =============================
const Countdown = () => {
  const eventDate = new Date("2026-03-21T14:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full  flex justify-center items-center gap-6 sm:gap-10">
      {[
        ["DÍAS", timeLeft.days],
        ["HORAS", timeLeft.hours],
        ["MINUTOS", timeLeft.minutes],
        ["SEGUNDOS", timeLeft.seconds],
      ].map(([label, value], i) => (
        <div key={i} className="flex flex-col justify-center items-center min-w-[45px]">
          <p className="text-[22px] sm:text-[26px] font-light text-[#6B7F6A] leading-none">
            {value}
          </p>
          <p className="text-[9px] tracking-[2px] text-[#8AA58F] mt-1 uppercase">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};


// =============================
//   ABOUT SECTION (SIN ANIMACIONES EN LAS CARDS)
// =============================
const About = () => {
  return (
    <section className="w-full py-20 px-6 flex flex-col items-center bg-[#F3F7F3] rounded-[32px]">

      {/* CONTENEDOR */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-12">

        {/* FOTO (con animación suave al pasar el mouse únicamente) */}
        <motion.div className="w-full md:w-1/2 flex justify-center about-carousel">
          <div className="w-full md:w-[90%]">
            <Slider {...carouselSettings}>
              {photos.map((src, index) => (
                <div key={index}>
                  <img
                    src={src}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>


        {/* TEXTO */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-[12px] tracking-[5px] text-[#7E8F7E] uppercase mb-2">
            Nuestra historia
          </p>

          <h2 className="text-[30px] md:text-[42px] font-light text-[#4d4d4d] leading-tight">
            Un día que cambió todo ✨
          </h2>

          <p className="mt-6 text-[16px] md:text-[17px] leading-[28px] text-[#636363]">
            Hace 6 años nos conocimos en un aeropuerto sin imaginar que ese
            instante sería el inicio de la mejor historia de nuestras vidas.
            <br /><br />
            Ustedes han sido parte de nuestros recuerdos y momentos más
            importantes, por eso queremos que compartan con nosotros este día tan especial.
            <br /><br />
            <span className="font-medium text-[#6B7F6A]">
              21 de marzo de 2026 • 2:00 PM
            </span>
          </p>
        </div>
      </div>

      {/* CARDS SIN ANIMACIONES */}
      <div className="w-full max-w-5xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* CARD FECHA (sin motion.div) */}
        <div
          className="
            bg-[#FAFDFB]
            backdrop-blur-xl
            border border-[#C9DCC9]
            shadow-[0_4px_14px_rgba(0,0,0,0.06)]
            hover:shadow-[0_8px_22px_rgba(0,0,0,0.10)]
            transition-all duration-500
            rounded-3xl p-8
          "
        >
          <h3 className="text-[20px] text-[#6B7F6A] font-semibold mb-1">
            Fecha del evento
          </h3>

          <p className="text-[#6f6f6f] text-[16px] leading-tight">
            21 de marzo de 2026
            <br />
            <span className="text-[#8AA58F] text-[14px]">2:00 PM</span>
          </p>
        </div>

        {/* CARD COUNTDOWN (sin motion.div) */}
        <div
          className="
            bg-[#FAFDFB]
            backdrop-blur-xl
            border border-[#C9DCC9]
            shadow-[0_4px_14px_rgba(0,0,0,0.06)]
            hover:shadow-[0_8px_22px_rgba(0,0,0,0.10)]
            transition-all duration-500
            rounded-3xl p-8 flex flex-col items-center
          "
        >
          <h3 className="text-[20px] text-[#6B7F6A] font-semibold mb-4">
            Falta muy poco…
          </h3>

          <Countdown />
        </div>

      </div>

    </section>
  );
};

export default SectionWrapper(About, "about");
