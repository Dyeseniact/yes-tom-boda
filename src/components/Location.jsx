// src/components/Location.jsx
import React from "react";
import iglesiaFoto from "../assets/iglesia.jpg";
import salonFoto from "../assets/salon1.jpeg";
import { SectionWrapper } from "../hoc";

const Location = () => {
  const locations = [
    {
      title: "Ceremonia",
      subtitle: "Basílica de Nuestra Señora de los Remedios",
      address: "Naucalpan, Estado de México",
      time: "2:00 PM",
      img: iglesiaFoto,
      maps: "https://www.google.com/maps/place/Bas%C3%ADlica+de+Nuestra+Se%C3%B1ora+de+los+Remedios/@19.4721687,-99.2519057,18.5z/data=!4m6!3m5!1s0x85d203a0a496a8f3:0xc7c30bbd509c0f4f!8m2!3d19.4722201!4d-99.2512734!16s%2Fg%2F11fd6dgpkj?entry=ttu&g_ep=EgoyMDI1MTExMS4wIKXMDSoASAFQAw%3D%3D",
      waze: "https://waze.com/ul?ll=19.4722201,-99.2512734&navigate=yes",
    },
    {
      title: "Recepción",
      subtitle: (
        <>
          Jardín <br /> Quinta Corregidor
        </>
      ),
      address: "Naucalpan, Estado de México",
      time: "3:30 PM",
      img: salonFoto,
      maps: "https://www.google.com/maps/place/Jardin+Quinta+Corregidor/data=!4m2!3m1!1s0x0:0x409f84a48380d802?sa=X&ved=1t:2428&ictx=111",
      waze: "https://waze.com/ul/h9g3qv3etf&navigate=yes",
    },
  ];

  return (
    <section className="w-full py-24 px-6 flex flex-col items-center bg-[#F3F7F3] rounded-[32px]">

      <h2 className="text-[30px] md:text-[38px] font-light text-[#4d4d4d] mb-14 text-center">
        Ubicaciones del Gran Día ✨
      </h2>

      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-10">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="
              w-[340px] sm:w-[320px] md:w-[360px]
              bg-[#FAFDFB]
              border border-[#C9DCC9]
              rounded-3xl
              shadow-[0_4px_14px_rgba(0,0,0,0.06)]
              hover:shadow-[0_8px_22px_rgba(0,0,0,0.10)]
              transition-all duration-300
              overflow-hidden
            "
          >
            <div className="overflow-hidden">
              <img
                src={loc.img}
                alt={loc.title}
                className="w-full h-56 object-cover"
              />
            </div>

            <div className="p-7 text-center">
              <h3 className="text-[24px] font-light text-[#6B7F6A]">
                {loc.title}
              </h3>

              <p className="text-[15px] text-[#7b7b7b] mt-2 leading-tight">
                {loc.subtitle}
              </p>

              <p className="text-[14px] text-[#9a9a9a] mt-1">
                {loc.address}
              </p>

              <p className="text-[15px] text-[#6B7F6A] mt-2 font-semibold">
                {loc.time}
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={loc.maps}
                  target="_blank"
                  className="
                    w-full bg-[#6B7F6A] text-white py-2 rounded-xl font-medium 
                    hover:bg-[#587458] transition
                  "
                >
                  Ver en Google Maps
                </a>

                <a
                  href={loc.waze}
                  target="_blank"
                  className="
                    w-full border border-[#6B7F6A] text-[#6B7F6A]
                    py-2 rounded-xl font-medium 
                    hover:bg-[#f4f7f4] transition
                  "
                >
                  Ver en Waze
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default SectionWrapper(Location, "location");
