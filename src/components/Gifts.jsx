import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";
import { SectionWrapper } from "../hoc";
import Logo from "../assets/logo.svg"; // ← tu SVG aquí

const Gifts = () => {
  const qrRef = useRef(null);

  useEffect(() => {
    if (!qrRef.current) return;

    QRCode.toCanvas(
      qrRef.current,
      "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51849857",
      {
        width: 230,
        margin: 2,
        color: {
          dark: "#2e4230",
          light: "#FAFDFB",
        },
      },
      (error) => {
        if (error) console.error("Error generando QR:", error);
      }
    );
  }, []);

  return (
    <section className="w-full py-24 px-6 flex flex-col items-center ">
      <h2 className="text-[30px] md:text-[38px] font-light text-[#4d4d4d] text-center">
        Mesa de Regalos ✨
      </h2>

      <p className="mt-4 text-[16px] md:text-[18px] text-[#6B7F6A] text-center max-w-2xl leading-relaxed">
        El mejor regalo es compartir este día con nosotros.
        <br />
        Pero si deseas obsequiarnos algo, aquí encontrarás nuestra mesa de regalos.
      </p>

      <div
        className="
          mt-12 bg-[#FAFDFB] border border-[#C9DCC9] rounded-3xl
          shadow-[0_4px_14px_rgba(0,0,0,0.06)]
          hover:shadow-[0_8px_22px_rgba(0,0,0,0.10)]
          p-10 flex flex-col items-center max-w-md text-center
          transition-all duration-300
        "
      >
        <h3 className="text-[22px] text-[#6B7F6A] font-semibold mb-4">
          Gracias por su cariño ✨
        </h3>

        <p className="text-[#6f6f6f] text-[15px] leading-relaxed">
          Cada detalle, grande o pequeño, significa mucho para nosotros.
          Gracias por acompañarnos en esta nueva etapa de nuestras vidas.
        </p>

        {/* CONTENEDOR DEL QR + LOGO */}
        <div className="relative mt-8 w-48 h-48 flex items-center justify-center">
          {/* QR generado dinámicamente */}
          <canvas
            ref={qrRef}
            className="w-48 h-48 rounded-xl shadow-md bg-white p-2"
          />

          {/* LOGO SVG centrado */}
          <img
            src={Logo}
            alt="Logo"
            className="
              absolute 
              w-14 h-14 
              bg-white 
              rounded-lg 
              p-1 
              shadow-md 
              opacity-95
            "
          />
        </div>

        <a
          href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51849857"
          target="_blank"
          className="mt-8 bg-[#6B7F6A] text-white px-8 py-3 rounded-xl 
                     font-medium tracking-wide shadow-sm
                     hover:bg-[#587458] transition-all duration-300"
        >
          Ver Mesa de Regalos
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Gifts, "gifts");