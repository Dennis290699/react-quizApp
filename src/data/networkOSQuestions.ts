import { QuizCategory } from '../types/quiz';

export const networkOSQuestions: QuizCategory = {
  id: 'network-os',
  title: 'Configuración de un Sistema Operativo de Red',
  description: 'Evalúa tus conocimientos sobre la configuración y gestión de sistemas operativos de red.',
  icon: 'Network',
  color: 'blue',
  questions: [
    {
      id: "q1",
      question: "¿Cuál es el protocolo de red más común?",
      options: ["TCP/IP", "UDP", "HTTP", "FTP"],
      correctAnswer: 0,
      explanation: "TCP/IP es el protocolo estándar para la mayoría de redes.",
      image: "/public/images/Capitulo2/Imagen1.png",
      type: "single" // Esta es de opción única
    },
    {
      id: "q2",
      question: "¿Cuáles son protocolos de capa de aplicación?",
      options: ["HTTP", "HTTPS", "FTP", "TCP"],
      correctAnswer: [0, 1, 2], // Respuestas correctas en caso de ser opción múltiple
      explanation: "HTTP, HTTPS, y FTP son protocolos de capa de aplicación.",
      type: "multiple" // Esta es de opción múltiple
    }
  ]
};
