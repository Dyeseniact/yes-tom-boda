import React from "react";
import { SectionWrapper } from "../hoc";

const Gifts = () => {
  return (
    <section className="w-full py-24 px-6 flex flex-col items-center ">

      {/* Título */}
      <h2 className="text-[30px] md:text-[38px] font-light text-[#4d4d4d] text-center">
        Mesa de Regalos ✨
      </h2>

      {/* Frase */}
      <p className="mt-4 text-[16px] md:text-[18px] text-[#6B7F6A] text-center max-w-2xl leading-relaxed">
        El mejor regalo es compartir este día con nosotros.
        <br />
        Pero si deseas obsequiarnos algo, aquí encontrarás nuestra mesa de regalos.
      </p>

      {/* Tarjeta */}
      <div
        className="
          mt-12
          bg-[#FAFDFB]
          border border-[#C9DCC9]
          rounded-3xl
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

        {/* QR */}
        <img
          src="https://nuvoriastoragesandbox.blob.core.windows.net/fotos/nuvoria-wedding-yes-tom/QR.jpeg?sp=r&st=2025-11-17T08:23:10Z&se=2026-04-15T16:38:10Z&spr=https&sv=2024-11-04&sr=b&sig=6Fb3nV2InOlCsDbi4RgDfMC0%2F8EGxJPzwmnHMgk%2F%2Bsc%3D"
          alt="QR Mesa de Regalos"
          className="w-48 h-48 mt-8 rounded-xl shadow-md"
        />

        {/* Botón */}
        <a
          href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51849857"
          target="_blank"
          className="
            mt-8 bg-[#6B7F6A] text-white px-8 py-3 rounded-xl 
            font-medium tracking-wide shadow-sm
            hover:bg-[#587458] transition-all duration-300
          "
        >
          Ver Mesa de Regalos
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Gifts, "gifts");
