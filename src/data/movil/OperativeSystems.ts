import { QuizCategory } from '../../types/quiz';

export const OperativeSystems: QuizCategory = {
    id: 'OperativeSystems',
    title: 'Sistemas Operativos y Lenguajes de Programación',
    description: 'Evalua tus conocimientos sobre los sistemas operativos y lenguajes de programación.',
    icon: 'Terminal',
    color: 'indigo',
    questions: [
        {
            id: "system1",
            question: "Existen otros sistemas operativos alternativos como HarmonyOS, KaiOS o Ubuntu Touch, aunque su cuota de mercado es reducida",
            options: [
                "Verdadero",
                "Falso",
            ],
            correctAnswer: 0,
            explanation: "Los sistemas operativos alternativos son menos populares que los sistemas operativos principales y tienen una menor cuota de mercado.",
            type: "single"
        },
        {
            id: "system2",
            question: "¿Cuál de los siguientes sistemas operativos móviles fue descontinuado por Microsoft?",
            options: [
                "BlackBerry OS",
                "Windows Phone",
                "Symbian",
                "Fire OS",
            ],
            correctAnswer: 1,
            explanation: "Windows Phone fue descontinuado por Microsoft en 2017.",
            type: "single"
        },
        {
            id: "system3",
            question: "Cuál de los siguientes enunciados son verdaderos según el artículo sobre Android y su negocio/mercado?",
            options: [
                "Android sostiene aproximadamente el 71 % de los dispositivos móviles en todo el mundo.",
                "Android fue adquirido por Google antes de que se lanzara el primer teléfono con Android.",
                "La tradición de nombres de postres para versiones de Android se mantuvo más allá de Android 10.",
                "Android 1.0 introdujo la “Market” que luego se convertiría en la Play Store.",
            ],
            correctAnswer: [0, 1, 3],
            explanation: "Los enunciados 1, 2 y 4 son verdaderos.",
            type: "multiple"
        },
        {
            id: "system4",
            question: "Las tecnologías web usadas por frameworks como Cordova o PhoneGap son ",
            options: [
                "HTML, CSS y JavaScript",
                "XML",
                "JSON",
                "SQL",
            ],
            correctAnswer: 0,
            explanation: "Las tecnologías web usadas por frameworks como Cordova o PhoneGap son HTML, CSS y JavaScript.",
            type: "single"
        },
        {
            id: "system5",
            question: "Relaciona correctamente La historia de iOS",
            options: [
                "1. iPhone OS (la primera versión de iOS)",
                "2. Versión iOS 2",
                "3. Versión iOS 3",
                "4. Periodo iOS 10 a iOS 18",
                "A. Introducción de la AppStore, permitiendo apps de terceros.",
                "B. Cambios de diseño, nuevas tecnologías y modernización del sistema.",
                "C. Interfaz multitáctil, buzón visual (VisualVoicemail) y redefinición del “smartphone”.",
                "D. Funciones como cortar/copiar/pegar texto y SpotlightSearch.",
            ],
            correctAnswer: {
                1: "C",
                2: "A",
                3: "D",
                4: "B"
            },
            explanation: "La evolución de iOS muestra hitos claros: iPhone OS introdujo la interfaz multitáctil (A), iOS 2 la App Store (B), iOS 3 agregó cortar/copiar/pegar (C) y las versiones modernas desde iOS 10 modernizaron el diseño (D).",
            type: "matching",
        }

    ],
};