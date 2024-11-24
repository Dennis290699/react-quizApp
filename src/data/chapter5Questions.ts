import { QuizCategory } from '../types/quiz';

export const chapter5Questions: QuizCategory = {
    id: 'ethernet',
    title: 'Chapter 5',
    description: 'Evalúa tus conocimientos sobre los conceptos básicos de redes.',
    icon: 'Radio',
    color: 'indigo',
    questions: [
        {
            id: "ethernet43",
            question: "Un administrador de red emite los siguientes comandos en un switch de Capa 3:",
            options: [
                "Una instancia de Cisco Express Forwarding.",
                "Un puerto enrutado.",
                "Una interfaz de trunk.",
                "Una interfaz virtual conmutada."
            ],
            correctAnswer: 1,
            explanation: "Los comandos configuran un puerto enrutado, lo que permite la comunicación de Capa 3 en lugar de un puerto conmutado.",
            image: "/images/Capitulo5/q43.png",
            type: "single"
        }
    ]
};