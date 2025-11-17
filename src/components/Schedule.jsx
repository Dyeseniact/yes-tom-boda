import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { schedule } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


// =========================
//   ESTILOS MOBILE ELEGANTES
// =========================
const mobileFixStyles = `
  @media (max-width: 640px) {

    /* Ícono más pequeño */
    .vertical-timeline-element-icon {
      width: 40px !important;
      height: 40px !important;
      box-shadow: 0 3px 8px rgba(0,0,0,0.12) !important;
    }

    /* Línea más fina */
    .vertical-timeline::before {
      width: 2px !important;
      background: #8AA58F !important;
      left: 20px !important;
    }

    /* Tarjeta más compacta */
    .vertical-timeline-element-content {
      margin-left: 60px !important;
      padding: 16px 18px !important;
      border-radius: 18px !important;
    }

    /* Títulos más elegantes */
    .vertical-timeline-element-title {
      font-size: 18px !important;
      line-height: 22px !important;
    }

    /* Hora */
    .vertical-timeline-element-date {
      font-size: 13px !important;
      opacity: 0.75;
    }

    /* Más espacio entre elementos */
    .vertical-timeline-element {
      margin: 38px 0 !important;
    }
  }
`;

// =========================
//   CARD DEL TIMELINE
// =========================
const ScheduleCard = ({ activity }) => {
  const Icon = activity.icon;

  return (
    <VerticalTimelineElement
      date={activity.hour}
      dateClassName="text-[#6B7F6A] font-semibold text-[15px]"
      contentStyle={{
        background: "#ffffff",
        borderRadius: "22px",
        padding: "22px 26px",
        border: "1px solid #AFC8A9",
        boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
      iconStyle={{
        background: "#6B7F6A",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 0 0 5px #ffffff, 0 4px 10px rgba(0,0,0,0.15)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Icon className="w-[55%] h-[55%] text-white fill-white stroke-white" />
        </div>
      }
    >
      <h3 className="vertical-timeline-element-title text-[#4d4d4d] text-[20px] font-semibold tracking-wide">
        {activity.title}
      </h3>
    </VerticalTimelineElement>
  );
};


// =========================
//   COMPONENTE PRINCIPAL
// =========================
const Schedule = () => {
  return (
    <>
      {/* Inyectamos los estilos mobile elegantes */}
      <style>{mobileFixStyles}</style>

      <motion.div variants={textVariant()}>
    
        <h2 className="text-[28px] md:text-[34px] font-light text-[#4d4d4d] mt-2 text-center">
          Programa ✨
        </h2>
      </motion.div>

      <div className="mt-14 flex flex-col">
        <VerticalTimeline lineColor="#AFC8A9">
          {schedule.map((activity, index) => (
            <ScheduleCard key={index} activity={activity} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Schedule, "schedule");
