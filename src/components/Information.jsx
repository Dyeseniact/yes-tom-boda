// src/components/Information.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// FAQ DATA
const faqs = [
  {
    question: "¿Hay estacionamiento?",
    answer: "Sí, el salón cuenta con estacionamiento para todos los invitados.",
  },
  {
    question: "Código de vestimenta",
    answer:
      "Ven como tú te sientas cómodo disfrutando el día siendo tú mismo. Solo pedimos reservar el color blanco exclusivamente para la novia en prendas principales como vestidos.",
  },
  {
    question: "¿Puedo llevar acompañantes?",
    answer:
      "No, únicamente podrán asistir las personas indicadas en la invitación. En caso de que tu invitación incluya a más integrantes de tu familia o pareja, solo esas personas podrán acompañarte. Si alguien de ellos no pudiera asistir, por favor avísanos.",
  },
  {
    question: "¿Cuánto tiempo tengo para confirmar asistencia?",
    answer:
      "Lo más pronto posible. Tu confirmación nos ayuda a organizar todos los detalles del gran día.",
  },
  {
    question: "¿Habrá menú especial para alérgicos o vegetarianos?",
    answer:
      "Sí, solo indícanos en tu confirmación si necesitas una opción vegetariana o tienes alguna restricción alimentaria.",
  },
  {
    question: "¿Cómo estará el clima?",
    answer:
      "Marzo suele ser templado durante el día (23°C–28°C), pero por las noches la temperatura baja a alrededor de 12°C–14°C. El salón es techado, así que no te preocupes por la lluvia. Te recomendamos llevar algo abrigador para la noche, ya que suele refrescar.",
  },
];

const variants = {
  open: { opacity: 1, height: "auto" },
  collapsed: { opacity: 0, height: 0 },
};

const Information = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 px-6 flex flex-col items-center bg-[#F3F7F3] rounded-[32px]">
      <motion.h2
        variants={fadeIn("up", "spring", 0.1, 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-[30px] md:text-[38px] font-light text-[#4d4d4d] mb-12 text-center"
      >
        Preguntas Frecuentes ✨
      </motion.h2>

      <div className="w-full max-w-3xl flex flex-col gap-5">
        {faqs.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", 0, 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              bg-[#FAFDFB]
              border border-[#C9DCC9]
              rounded-3xl
              shadow-[0_4px_14px_rgba(0,0,0,0.06)]
              hover:shadow-[0_8px_22px_rgba(0,0,0,0.10)]
              transition-all duration-500
              overflow-hidden
            "
          >
            {/* HEADER */}
            <button
              onClick={() => toggleFAQ(index)}
              className="
                w-full px-6 py-5
                flex justify-between items-center
                text-[#4d4d4d]
                font-medium text-[17px]
                text-left
              "
            >
              {item.question}

              <span
                className={`
                  transition-transform duration-300 
                  ${openIndex === index ? "rotate-180" : "rotate-0"}
                `}
              >
                ▼
              </span>
            </button>

            {/* BODY */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={variants}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="px-6 pb-5 text-[#6B7F6A] text-[15px] leading-relaxed"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


export default SectionWrapper(Information, "information");
