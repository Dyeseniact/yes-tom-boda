import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

const VIDEO_URL_BLOB =
  "https://nuvoriastoragesandbox.blob.core.windows.net/videos/savaTheDate.mp4?sp=r&st=2025-11-17T07:55:48Z&se=2026-04-15T16:10:48Z&spr=https&sv=2024-11-04&sr=b&sig=UYL%2FWPm5l8SWjxlRZIq4ZYvV0dZSIFLPCEzF6UFrMMA%3D";

const FINAL_IMAGE_URL_BLOB =
  "https://nuvoriastoragesandbox.blob.core.windows.net/fotos/1059.jpg?sp=r&st=2025-11-17T08:07:33Z&se=2026-04-15T16:22:33Z&spr=https&sv=2024-11-04&sr=b&sig=QwythFWeKkalIKMZMDIHjCbrfuC0Lhrv9zJbMLi3vqU%3D";

const Home = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  // 🔥 Detener el video exactamente a los 2:25 (145 s)
  useEffect(() => {
    const stopTimer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.pause();
        setVideoEnded(true);
      }
    }, 145000);

    return () => clearTimeout(stopTimer);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* VIDEO O IMAGEN FINAL */}
      <div className="absolute inset-0 w-full h-full">

        {/* ▶ VIDEO DESDE BLOB STORAGE */}
        {!videoEnded && (
          <video
            ref={videoRef}
            src={VIDEO_URL_BLOB}
            autoPlay
            muted
            playsInline
            onEnded={() => setVideoEnded(true)}
            className="
              absolute inset-0 
              w-full h-full 
              object-cover 
            "
          />
        )}

        {/* 🖼 IMAGEN FINAL DESDE BLOB STORAGE */}
        {videoEnded && (
          <img
            src={FINAL_IMAGE_URL_BLOB}
            alt="Final"
            className="
              absolute inset-0
              w-full h-full 
              object-cover
            "
          />
        )}
      </div>

      {/* CAPA OSCURA */}
      <div className="absolute inset-0 bg-black/30" />

      {/* TEXTO SIEMPRE VISIBLE */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">

        <h3 className="
          text-white 
          tracking-[0.4em]
          text-xs sm:text-sm md:text-base 
          font-[Cinzel]
          mb-4 opacity-90
        ">
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

      </div>

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
