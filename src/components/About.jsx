import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import Slider from "react-slick";

// ====================================
//   IMÁGENES DESDE AZURE BLOB STORAGE
// ====================================
// Reemplaza estos links por los tuyos
const photos = [
  "https://nuvoriastoragesandbox.blob.core.windows.net/fotos/1039.jpg?sp=r&st=2025-11-17T08:02:55Z&se=2026-04-15T16:17:55Z&spr=https&sv=2024-11-04&sr=b&sig=dpEOq1xGlmwBJl%2BqLOY27TSuvDYZF%2B9LvYzPnoNBoag%3D",
  "https://nuvoriastoragesandbox.blob.core.windows.net/fotos/1015.jpg?sp=r&st=2025-11-17T08:01:57Z&se=2026-04-15T16:16:57Z&spr=https&sv=2024-11-04&sr=b&sig=urRz4FgMTOGlE%2FmWH%2FZ%2FtvdDHlQXb4LwX5ZqqbBDL2U%3D",
  "https://nuvoriastoragesandbox.blob.core.windows.net/fotos/1023.jpg?sp=r&st=2025-11-17T08:02:28Z&se=2026-04-15T16:17:28Z&spr=https&sv=2024-11-04&sr=b&sig=mOzapA1hoGQV0oNm0MFWj40ahj2S7zxvkFYUfO1WgwQ%3D",
  "https://nuvoriastoragesandbox.blob.core.windows.net/fotos/1082.jpg?sp=r&st=2025-11-17T08:03:28Z&se=2026-04-15T16:18:28Z&spr=https&sv=2024-11-04&sr=b&sig=ipwkBZAYX4J5blyOKRRL11PjH9EPvMmJojlu0IoTQuc%3D",
  "https://nuvoriastoragesandbox.blob.core.windows.net/fotos/1085.jpg?sp=r&st=2025-11-17T08:03:49Z&se=2026-04-15T16:18:49Z&spr=https&sv=2024-11-04&sr=b&sig=L5LjSwaPC59fWdwcpKRTx4e595SZTv%2Bgtfu9NK5jYBU%3D",
];

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
};

// =============================
//   COUNTDOWN
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
    <div className="w-full flex justify-center items-center gap-6 sm:gap-10">
      {[
        ["DÍAS", timeLeft.days],
        ["HORAS", timeLeft.hours],
        ["MINUTOS", timeLeft.minutes],
        ["SEGUNDOS", timeLeft.seconds],
      ].map(([label, value], i) => (
        <div key={i} className="flex flex-col justify-center items-center min-w-[45px]">
          <p className="text-[22px] sm:text-[26px] font-light text-[#6B7F6A] leading-none">{value}</p>
          <p className="text-[9px] tracking-[2px] text-[#8AA58F] mt-1 uppercase">{label}</p>
        </div>
      ))}
    </div>
  );
};

// =============================
//   ABOUT SECTION
// =============================
const About = () => {
  return (
    <section className="w-full py-20 px-6 flex flex-col items-center bg-[#F3F7F3] rounded-[32px]">

      {/* CONTENEDOR */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-12">

        {/* CAROUSEL */}
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
          <p className="text-[12px] tracking-[5px] text-[#7E8F7E] uppercase mb-2">Nuestra historia</p>
          <h2 className="text-[30px] md:text-[42px] font-light text-[#4d4d4d] leading-tight">
            Un día que cambió todo ✨
          </h2>

          <p className="mt-6 text-[16px] md:text-[17px] leading-[28px] text-[#636363]">
            Hace 6 años nos conocimos en un aeropuerto sin imaginar que ese instante sería el inicio de la mejor historia de nuestras vidas.
            <br /><br />
            Ustedes han sido parte de nuestros recuerdos, aventuras y momentos más importantes, por eso queremos que compartan con nosotros este día tan especial donde dejamos oficialmente de ser pecadores.
            <br /><br />
            <span className="font-medium text-[#6B7F6A]">
              21 de marzo de 2026 • 2:00 PM
            </span>
          </p>
        </div>
      </div>

      {/* CARDS */}
      <div className="w-full max-w-5xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="bg-[#FAFDFB] border border-[#C9DCC9] shadow-lg rounded-3xl p-8">
          <h3 className="text-[20px] text-[#6B7F6A] font-semibold mb-1">Fecha del evento</h3>
          <p className="text-[#6f6f6f] text-[16px]">
            21 de marzo de 2026 <br />
            <span className="text-[#8AA58F] text-[14px]">2:00 PM</span>
          </p>
        </div>

        <div className="bg-[#FAFDFB] border border-[#C9DCC9] shadow-lg rounded-3xl p-8 flex flex-col items-center">
          <h3 className="text-[20px] text-[#6B7F6A] font-semibold mb-4">Falta muy poco…</h3>
          <Countdown />
        </div>

      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
