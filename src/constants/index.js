import {
  calendar,
  location,
  rsvp,
  IglesiaIcon,
  CoctelIcon,
  FiestaIcon,
  BaileIcon,
  ComidaIcon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca de",
  },
  {
    id: "schedule",
    title: "Itinerario",
  },
  {
    id: "location",
    title: "Ubicación",
  },
  { id: "gifts", title: "Mesa de regalos" },
  { id: "information", title: "Preguntas frecuentes" },
  {
    id: "confirmation",
    title: "Confirmación",
  },
];

const information = [
  {
    title: "Fecha",
    description: "21 de Marzo, 2026",
    icon: calendar,
  },
  {
    title: "Ubicación",
    description: "Jardín Quinta Corregidor",
    icon: location,
  },
  {
    title: "Confirmación",
    description: "Confirma tu asistencia antes del 27 Julio, 2024",
    icon: rsvp,
  },
];

const schedule = [
  {
    title: "Ceremonia Religiosa",
    icon: IglesiaIcon,
    hour: "14:00 – 15:00",
  },
  {
    title: "Cóctel de Bienvenida",
    icon: CoctelIcon,
    hour: "15:30 – 16:30",
  },
  {
    title: "Banquete",
    icon: ComidaIcon,
    hour: "16:30 – 17:30",
  },
  {
    title: "Baile de los Novios",
    icon: BaileIcon,
    hour: "17:40",
  },
  {
    title: "Let’s Dance",
    icon: FiestaIcon,
    hour: "18:00",
  },
];

export { information, schedule };
