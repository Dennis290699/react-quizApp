import { QuizCategory } from "../../types/quiz";

export const GenerationEvolution: QuizCategory = {
    id: "GenerationEvolution",
    title: "Evolución de las Generaciones de Móvil",
    description: "Evalúa tus conocimientos sobre la evolución de las generaciones de móvil.",
    icon: "Phone",
    color: "indigo",
    questions: [
        {
            id: "generation1",
            question: "La tecnología 2G introdujo por primera vez la transmisión digital, pero no ofrecía ninguna ventaja de seguridad en comparación con las llamadas analógicas de la 1G.",
            options: ["Verdadero", "Falso"],
            correctAnswer: 1,
            explanation: "Falso. La transmisión digital de la 2G sí introdujo una ventaja clave de seguridad: el cifrado de llamadas, lo que hizo mucho más difícil interceptar conversaciones en comparación con las señales analógicas abiertas de la 1G.",
            type: "single"
        },
        {
            id: "generation2",
            question: "¿Cuál fue el principal avance de la generación 3G que sirvió como catalizador para el éxito de los primeros smartphones y sus tiendas de aplicaciones?",
            options: [
                "La introducción de los mensajes de texto (SMS).",
                "La capacidad de enviar mensajes multimedia (MMS).",
                "El aumento significativo del ancho de banda, permitiendo un acceso a Internet móvil usable (navegación web, descarga de apps).",
                "El inicio de la tecnología 4G/LTE."
            ],
            correctAnswer: 2,
            explanation: "La 3G proporcionó la velocidad de Internet necesaria para que la App Store y el Android Market tuvieran sentido.",
            type: "single"
        },
        {
            id: "generation3",
            question: "La tecnología 5G se define por tres pilares fundamentales. ¿Cuáles son? (Selecciona 3)",
            options: [
                "Banda ancha móvil mejorada (eMBB) para velocidades gigabit.",
                "Comunicación ultra confiable de baja latencia (URLLC) para tiempo real.",
                "El estándar de compresión de voz GSM.",
                "Conectividad masiva (mMTC) para el Internet de las Cosas (IoT).",
                "El primer navegador WAP."
            ],
            correctAnswer: [0, 1, 3],
            explanation: "Los tres pilares de la 5G son: alta velocidad (eMBB), baja latencia (URLLC) y conectividad masiva (mMTC).",
            type: "multiple"
        },
        {
            id: "generation4",
            question: "Relaciona el hito de software o plataforma con el dispositivo o era que lo representa.",
            options: [
                "1. El primer navegador WAP",
                "2. La primera App Store nativa centralizada",
                "3. Popularización del juego 'Snake'",
                "4. Fotografía computacional (IA en la cámara)",
                "5. Ecosistema de apps Java ME (.jar)",
                "A. Google Pixel (Era 4G)",
                "B. Nokia 3310 (Era 2G)",
                "C. Nokia 7110 (Era 2.5G)",
                "D. iPhone 3G (2008)",
                "E. Sony Ericsson K800i (Era 3G)"
            ],
            correctAnswer: {
                1: "C",
                2: "D",
                3: "B",
                4: "A",
                5: "E"
            },
            explanation: "1-c (Nokia 7110 fue famoso por su navegador WAP). 2-d (iPhone 3G y su App Store definieron este modelo). 3-b (Nokia 3310 es el ícono del juego Snake). 4-a (Google Pixel revolucionó la fotografía con IA). 5-e (Sony Ericsson K800i fue un exponente de Java ME).",
            type: "matching"
        },
        {
            id: "generation5",
            question: "El concepto de red que mide el tiempo de respuesta o 'retraso' de la conexión, y que la 5G busca reducir a casi 1ms, se conoce como:",
            options: [
                "Velocidad",
                "Latencia",
                "Ancho de banda",
                "Cobertura"
            ],
            correctAnswer: 1,
            explanation: "El término correcto es 'latencia', que mide el tiempo de respuesta entre el envío y la recepción de datos.",
            type: "single"
        }
    ]
};
