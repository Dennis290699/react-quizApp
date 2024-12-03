import { QuizCategory } from '../types/quiz';

export const capitulo2: QuizCategory = {
    id: 'Cap2',
    title: 'Capitulo 2',
    description: 'Test your knowledge of the basic concepts of artificial intelligence.',
    icon: 'brain-circuit',
    color: 'indigo',
    questions: [
        {
            id: "I1",
            question: "¿Qué significa el acrónimo REAS en el diseño de entornos de trabajo?",
            options: [
                "Racionalidad, Entorno, Acciones, Sensores",
                "Rendimiento, Entorno, Actuadores, Sensores",
                "Reacciones, Entorno, Agentes, Sensores",
                "Recursos, Entorno, Análisis, Sistemas"
            ],
            correctAnswer: 1,
            explanation: "La respuesta correcta es 'Rendimiento, Entorno, Actuadores, Sensores'. El acrónimo REAS se refiere a los componentes esenciales en el diseño de entornos para agentes inteligentes: rendimiento (objetivo del agente), entorno (medio en el que opera), actuadores (dispositivos que ejecutan acciones) y sensores (dispositivos que perciben el entorno).",
            type: "single"
        },
        {
            id: "I2",
            question: "¿Por qué se considera al entorno del taxi automatizado como estocástico?",
            options: [
                "Porque siempre opera en condiciones controladas",
                "Porque los sensores del taxi son perfectos",
                "Porque las condiciones del tráfico son impredecibles",
                "Porque su objetivo principal es minimizar el tiempo de viaje"
            ],
            correctAnswer: 2,
            explanation: "El entorno es estocástico porque las condiciones del tráfico no pueden predecirse completamente. Esto implica que el agente debe tomar decisiones considerando la incertidumbre y adaptarse a cambios inesperados.",
            type: "single"
        },
        {
            id: "I3",
            question: "Según las propiedades del entorno, ¿cuál de estas características NO corresponde al entorno del taxi automatizado?",
            options: [
                "Continuo",
                "Totalmente observable",
                "Multiagente",
                "Dinámico"
            ],
            correctAnswer: 1,
            explanation: "El entorno del taxi automatizado es parcialmente observable debido a limitaciones de percepción. No puede acceder a toda la información relevante en todo momento, como el estado de otros vehículos fuera de su alcance visual o sensorial.",
            type: "single"
        },
        {
            id: "I4",
            question: "¿Qué determina si un agente es racional en un momento dado?",
            options: [
                "Su capacidad para limpiar cualquier cuadrícula de forma inmediata.",
                "Su habilidad para aspirar todas las cuadrículas en un solo movimiento.",
                "La acción que maximiza su medida de rendimiento según las evidencias y conocimientos disponibles.",
                "Su velocidad para recorrer todo el entorno."
            ],
            correctAnswer: 2,
            explanation: "La racionalidad de un agente se mide por su capacidad para tomar decisiones que maximizan su rendimiento según la información disponible. No se trata solo de velocidad o cobertura, sino de la calidad y relevancia de las acciones tomadas.",
            type: "single"
        },
        {
            id: "I5",
            question: "¿Bajo qué medida de rendimiento puede considerarse racional esta agente aspiradora en las condiciones planteadas?",
            options: [
                "Aspirar todas las cuadrículas sin detenerse.",
                "Mantener limpias las cuadrículas con la menor cantidad de movimientos innecesarios.",
                "Aspirar siempre la misma cuadrícula, aunque esté limpia.",
                "Explorar el entorno constantemente sin limpiar."
            ],
            correctAnswer: 1,
            explanation: "El agente es racional si logra mantener el entorno limpio con el menor número de movimientos, evitando esfuerzos innecesarios que penalizan el rendimiento.",
            type: "single"
        },
        {
            id: "I6",
            question: "¿Qué acción sería irracional para la agente aspiradora si todas las cuadrículas están limpias y se penaliza el movimiento innecesario?",
            options: [
                "Permanecer en la misma posición hasta detectar suciedad.",
                "Revisar ocasionalmente las cuadrículas para identificar si hay suciedad.",
                "Oscilar entre cuadrículas limpias sin necesidad.",
                "Aspirar una cuadrícula únicamente cuando está sucia."
            ],
            correctAnswer: 2,
            explanation: "Oscilar entre cuadrículas limpias es irracional porque genera movimientos innecesarios y penaliza el rendimiento del agente.",
            type: "single"
        },
        {
            id: "I7",
            question: "¿Qué se necesita para medir el éxito de un agente racional?",
            options: [
                "Una descripción del entorno, sensores y actuadores.",
                "Solo los actuadores del agente.",
                "La capacidad de predecir el futuro del entorno.",
                "La habilidad de realizar acciones complejas."
            ],
            correctAnswer: 0,
            explanation: "El éxito de un agente racional se mide mediante una descripción detallada del entorno, los sensores y actuadores, y una métrica de rendimiento.",
            type: "single"
        },
        {
            id: "I8",
            question: "¿Qué implica hacer 'lo correcto' para un agente racional?",
            options: [
                "Ejecutar cualquier acción disponible.",
                "Evitar siempre tomar decisiones erróneas.",
                "Obtener un resultado mejor según su función objetivo.",
                "Minimizar el uso de sensores y actuadores."
            ],
            correctAnswer: 2,
            explanation: "Hacer 'lo correcto' significa tomar decisiones que maximicen el rendimiento según una función objetivo, basándose en el conocimiento y la percepción del agente.",
            type: "single"
        },
        {
            id: "I9",
            question: "¿Qué elementos son esenciales para especificar la tarea de un agente racional?",
            options: [
                "Una tabla completa de funciones del agente y una lista de entornos posibles.",
                "Sensores, actuadores, descripción del entorno y una métrica de éxito.",
                "La capacidad de imitar el comportamiento humano.",
                "Un sistema de inteligencia artificial basado en aprendizaje automático."
            ],
            correctAnswer: 1,
            explanation: "Es fundamental definir los sensores, actuadores, entorno y la métrica de éxito para diseñar y evaluar el comportamiento de un agente racional.",
            type: "single"
        },
        {
            id: "I10",
            question: "¿Por qué no es posible diseñar un agente omnisciente?",
            options: [
                "Porque no es posible recopilar información del entorno en tiempo real.",
                "Porque los agentes nunca pueden alcanzar un rendimiento esperado óptimo.",
                "Porque no existen herramientas como bolas de cristal o máquinas del tiempo.",
                "Porque los diseñadores no pueden programar agentes con suficiente inteligencia."
            ],
            correctAnswer: 2,
            explanation: "Un agente omnisciente no es posible porque no se puede predecir el futuro con certeza, ya que la información completa y perfecta es inalcanzable.",
            type: "single"
        },
        {
            id: "I11",
            question: "¿Qué sucede cuando un agente tiene un conocimiento completo del entorno a priori?",
            options: [
                "No necesita percibir ni aprender del entorno.",
                "Es incapaz de realizar tareas básicas sin recopilar información.",
                "Se vuelve completamente autónomo desde el inicio.",
                "Mejora su capacidad de adaptación ante entornos cambiantes."
            ],
            correctAnswer: 0,
            explanation: "Con conocimiento completo a priori, el agente no necesita percibir el entorno porque ya conoce toda la información relevante.",
            type: "single"
        },
        {
            id: "I12",
            question: "¿Qué limita al escarabajo estercolero en el ejemplo del texto?",
            options: [
                "La falta de experiencia en nuevas situaciones.",
                "La incapacidad de modificar su conducta ante cambios en el entorno.",
                "La dependencia excesiva de sus percepciones iniciales.",
                "La falta de recolección de información."
            ],
            correctAnswer: 1,
            explanation: "El escarabajo está limitado porque no puede adaptar su conducta cuando el entorno cambia, mostrando comportamiento rígido.",
            type: "single"
        },
        {
            id: "I13",
            question: "¿Qué se utiliza como base para los sistemas que piensan racionalmente en el enfoque de las 'leyes del pensamiento'?",
            options: [
                "La biología neuronal.",
                "La lógica formal.",
                "Los algoritmos heurísticos.",
                "La inteligencia emocional."
            ],
            correctAnswer: 1,
            explanation: "El enfoque de las 'leyes del pensamiento' se basa en la lógica formal para estructurar el razonamiento y la toma de decisiones.",
            type: "single"
        },
        {
            id: "I14",
            question: "¿Cuál fue el evento que marcó el nacimiento formal de la inteligencia artificial como campo de estudio en 1956?",
            options: [
                "La publicación del libro 'Perceptrons'.",
                "La creación del sistema ELIZA.",
                "El Taller de Dartmouth.",
                "El desarrollo del algoritmo A*."
            ],
            correctAnswer: 2,
            explanation: "El Taller de Dartmouth en 1956 es considerado el evento que dio inicio formal a la investigación en inteligencia artificial.",
            type: "single"
        },
        {
            id: "I15",
            question: "¿Qué dificultad principal enfrenta la formalización del conocimiento en sistemas basados en lógica?",
            options: [
                "La falta de datos disponibles.",
                "El salto entre la teoría y la práctica.",
                "La imposibilidad de representar conocimiento linealmente.",
                "La incapacidad de usar redes neuronales."
            ],
            correctAnswer: 1,
            explanation: "El reto principal es el salto entre la teoría y la práctica, ya que el conocimiento lógico puede ser difícil de aplicar en situaciones reales.",
            type: "single"
        },
        {
            id: "I16",
            question: "¿Qué tipo de entorno permite al agente observar completamente el estado del medio en todo momento?",
            options: [
                "Parcialmente observable.",
                "Dinámico.",
                "Totalmente observable.",
                "Continuo."
            ],
            correctAnswer: 2,
            explanation: "Un entorno totalmente observable es aquel donde el agente tiene acceso completo a toda la información relevante en cada momento.",
            type: "single"
        },
        {
            id: "I17",
            question: "En un entorno estocástico, el estado futuro está influenciado por:",
            options: [
                "Las acciones del agente únicamente.",
                "Factores externos impredecibles.",
                "Una secuencia fija de acciones.",
                "Un número finito de variables."
            ],
            correctAnswer: 1,
            explanation: "Un entorno estocástico es aquel donde el estado futuro depende de factores externos impredecibles, lo que introduce incertidumbre en el agente.",
            type: "single"
        },
        {
            id: "I18",
            question: "¿Cuál de los siguientes entornos se caracteriza por la independencia entre las acciones actuales y las futuras?",
            options: [
                "Secuencial.",
                "Episódico.",
                "Multiagente.",
                "Estático."
            ],
            correctAnswer: 1,
            explanation: "En un entorno episódico, las acciones actuales no afectan directamente a las futuras, permitiendo que cada decisión se tome de forma independiente.",
            type: "single"
        },
        {
            id: "I19",
            question: "¿Qué característica define un entorno continuo en IA?",
            options: [
                "Variables discretas y limitadas.",
                "Estados definidos y numerables.",
                "Cambios suaves y constantes.",
                "Acciones completamente deterministas."
            ],
            correctAnswer: 2,
            explanation: "Un entorno continuo se caracteriza por cambios suaves y constantes, en contraste con los entornos discretos, donde los estados son finitos y claramente diferenciados.",
            type: "single"
        },
        {
            id: "I20",
            question: "¿Cómo pueden mejorar todos los agentes su eficacia según el texto?",
            options: [
                "Mediante una programación más compleja.",
                "A través de la ayuda de mecanismos de aprendizaje.",
                "Con mayor capacidad de almacenamiento.",
                "Incrementando sus percepciones."
            ],
            correctAnswer: 1,
            explanation: "La eficacia de un agente mejora mediante mecanismos de aprendizaje, que le permiten adaptarse y tomar decisiones basadas en experiencias previas.",
            type: "single"
        },
        {
            id: "I21",
            question: "¿Cuál es la diferencia principal entre un agente reactivo simple y un agente reactivo basado en modelos?",
            options: [
                "El agente reactivo simple no toma decisiones.",
                "El agente reactivo basado en modelos tiene un estado interno que le permite seguir el rastro de aspectos del mundo no evidentes.",
                "El agente reactivo simple siempre toma decisiones basadas en modelos.",
                "El agente reactivo basado en modelos no responde a las percepciones."
            ],
            correctAnswer: 1,
            explanation: "Un agente reactivo basado en modelos utiliza un estado interno para seguir aspectos del entorno no directamente observables, lo que le permite tomar decisiones más informadas.",
            type: "single"
        },
        {
            id: "I22",
            question: "¿Qué implica que un entorno sea estocástico para el agente que opera en él?",
            options: [
                "Que el agente puede predecir exactamente qué sucederá en el siguiente estado.",
                "Que el agente no necesita preocuparse por la incertidumbre en el entorno.",
                "Que el agente debe manejar la incertidumbre debido a que no puede predecir todos los aspectos del entorno con certeza.",
                "Que el agente tiene un control total sobre las circunstancias."
            ],
            correctAnswer: 2,
            explanation: "En un entorno estocástico, el agente debe lidiar con la incertidumbre ya que no puede predecir todos los aspectos del entorno con exactitud.",
            type: "single"
        },
        {
            id: "I23",
            question: "¿Qué agente utiliza una matriz de píxeles de colores como sensor principal?",
            options: [
                "Robot para la selección de componentes.",
                "Sistema de análisis de imágenes de satélites.",
                "Tutor de inglés interactivo.",
                "Controlador de una refinería."
            ],
            correctAnswer: 1,
            explanation: "Un sistema de análisis de imágenes de satélites utiliza una matriz de píxeles de colores para procesar y analizar datos visuales.",
            type: "single"
        },
        {
            id: "I24",
            question: "¿Qué combinación de actuadores y sensores sería adecuada para un robot que selecciona componentes clasificados?",
            options: [
                "Brazo y mano articulados con cámara y sensor angular.",
                "Válvulas y bombas con temperatura y presión.",
                "Pantalla visualizadora con GPS y acelerómetro.",
                "Teclado con matriz de píxeles de colores."
            ],
            correctAnswer: 0,
            explanation: "Un robot que selecciona componentes clasificados necesita actuadores como brazos articulados y sensores como cámaras para identificar y manipular objetos.",
            type: "single"
        },
        {
            id: "I25",
            question: "¿Qué sensores debe incluir un controlador de refinería para garantizar su rendimiento óptimo?",
            options: [
                "Cámara, sensor angular y GPS.",
                "Temperatura, presión y sensores químicos.",
                "Teclado para entrada de datos y micrófonos.",
                "Sensores de pacientes y matriz de píxeles de colores."
            ],
            correctAnswer: 1,
            explanation: "Un controlador de refinería necesita sensores de temperatura, presión y químicos para monitorear y controlar los procesos industriales de manera eficiente.",
            type: "single"
        },
    ]
};
