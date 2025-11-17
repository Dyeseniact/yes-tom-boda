import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [showText, setShowText] = useState(true);

  // Ocultar texto después de 30 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 30000); // 30,000 ms = 30 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* VIDEO FULLSCREEN */}
      <div className="absolute inset-0 w-full h-full">
        <div className="w-full h-full bg-black" />

        {/* <video
          src={saveTheDateVideo}
          autoPlay
          muted
          loop
          playsInline
          className="
            absolute inset-0 
            w-full h-full 
            object-cover 
            object-center
          "
        /> */}
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* CONTENIDO (solo si showText = true) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: showText ? 1 : 0, y: showText ? 0 : -20 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
      >
        <h3
          className="
            text-white 
            tracking-[0.4em]
            text-xs sm:text-sm md:text-base 
            font-[Cinzel]
            mb-4 opacity-90
          "
        >
          NUESTRA BODA
        </h3>

        <h1
          className="
            text-white
            font-[Cormorant Garamond]
            font-light
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            leading-tight
            tracking-wide
            drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)]
          "
        >
          Yesenia & Tomas
        </h1>

        <p
          className="
            text-white 
            font-[Cinzel]
            text-sm sm:text-base md:text-lg
            tracking-[0.3em]
            mt-6 opacity-90
          "
        >
          21 · 03 · 2026
        </p>
      </motion.div>

      {/* SCROLL DOWN */}
      <div className="absolute z-10 xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Home;
