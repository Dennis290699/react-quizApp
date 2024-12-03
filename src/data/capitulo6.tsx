import { QuizCategory } from '../types/quiz';

export const capitulo6: QuizCategory = {
    id: 'Cap6',
    title: 'Capitulo 6',
    description: 'Test your knowledge of the basic concepts of artificial intelligence.',
    icon: 'brain-circuit',
    color: 'indigo',
    questions: [
        {
            id: "IAQ76",
            question: "¿Cuál es una característica clave de los entornos multiagente competitivos?",
            options: [
                "Los agentes cooperan para maximizar un beneficio común",
                "Las acciones de los agentes no afectan significativamente a los demás",
                "Los objetivos de los agentes están en conflicto",
                "Todos los agentes tienen información perfecta y simultánea"
            ],
            correctAnswer: 2,
            explanation: "En los entornos multiagente competitivos, los objetivos de los agentes están en conflicto, lo que implica que cada agente busca maximizar su propio beneficio, a menudo en detrimento de los demás.",
            type: "single"
        },
        {
            id: "IAQ77",
            question: "¿Cuál es una ventaja de estudiar juegos en el ámbito de la Inteligencia Artificial, según el texto?",
            options: [
                "Los juegos permiten modelar entornos con información imperfecta y reglas imprecisas",
                "La naturaleza abstracta de los juegos facilita su representación y análisis",
                "Los juegos físicos son más populares en la investigación que los juegos abstractos",
                "Los juegos no requieren técnicas avanzadas para optimizar el tiempo de decisión"
            ],
            correctAnswer: 1,
            explanation: "La naturaleza abstracta de los juegos facilita su representación y análisis, lo que permite abordar problemas complejos de manera más eficiente y clara.",
            type: "single"
        },
        {
            id: "IAQ78",
            question: "¿Qué técnica permite a los programas de ajedrez ignorar partes del árbol de búsqueda que no afectan la decisión final?",
            options: [
                "Evaluación heurística",
                "Poda",
                "Algoritmo de búsqueda A*",
                "Elementos de información imperfecta"
            ],
            correctAnswer: 1,
            explanation: "La poda permite a los programas de ajedrez ignorar ramas del árbol de búsqueda que no afectan la decisión final, optimizando así el tiempo de computación.",
            type: "single"
        },
        {
            id: "IAQ79",
            question: "¿Cuál es el propósito del cálculo del valor minimax en un árbol de juegos?",
            options: [
                "Determinar el movimiento más rápido para finalizar el juego",
                "Calcular el valor máximo de utilidad posible para MIN",
                "Encontrar la utilidad de un estado terminal suponiendo que ambos jugadores juegan óptimamente",
                "Dibujar el árbol de búsqueda completo para juegos complejos"
            ],
            correctAnswer: 2,
            explanation: "El valor minimax se utiliza para encontrar la utilidad de un estado terminal asumiendo que ambos jugadores juegan de manera óptima, buscando el mejor movimiento para maximizar la utilidad del jugador.",
            type: "single"
        },
        {
            id: "IAQ80",
            question: "En un juego de múltiples jugadores, ¿cómo se representa la utilidad de un estado terminal?",
            options: [
                "Como un único valor numérico compartido por todos los jugadores",
                "Como un vector de valores, donde cada componente representa la utilidad para cada jugador",
                "Como un árbol de decisiones simplificado",
                "Como un conjunto de alianzas formales entre los jugadores"
            ],
            correctAnswer: 1,
            explanation: "La utilidad de un estado terminal en un juego de múltiples jugadores se representa generalmente como un vector de valores, donde cada valor corresponde a la utilidad de cada jugador.",
            type: "single"
        },
        {
            id: "IAQ81",
            question: "¿Por qué pueden surgir alianzas en juegos multi-jugador según el texto?",
            options: [
                "Por la necesidad de cumplir reglas estrictas del juego",
                "Porque siempre es óptimo colaborar para obtener la máxima utilidad conjunta",
                "Porque las alianzas pueden ser estrategias óptimas cuando un jugador está en una posición más fuerte",
                "Para evitar el estigma social de no colaborar en los juegos de suma cero"
            ],
            correctAnswer: 2,
            explanation: "Las alianzas pueden surgir como una estrategia óptima cuando un jugador está en una posición más fuerte, buscando maximizar su propia utilidad mientras debilita a otros jugadores.",
            type: "single"
        },

        {
            id: "IAQ82",
            question: "¿Qué cambio propuso Shannon en 1950 para mejorar la toma de decisiones en programas de juegos?",
            options: [
                "Utilizar exclusivamente el algoritmo minimax en el árbol de búsqueda.",
                "Cortar la búsqueda antes y aplicar una función de evaluación heurística a los estados.",
                "Aumentar el espacio de búsqueda hasta encontrar la solución óptima.",
                "Basarse en el orden aleatorio de los sucesores para mejorar las decisiones."
            ],
            correctAnswer: 1,
            explanation: "Shannon propuso cortar la búsqueda antes de llegar a los nodos terminales y aplicar una función de evaluación heurística a los estados para mejorar la toma de decisiones en los programas de juegos.",
            type: "single"
        },

        {
            id: "IAQ83",
            question: "¿Cuál es uno de los principales objetivos de una función de evaluación en juegos?",
            options: [
                "Evitar la generación de árboles de búsqueda.",
                "Reducir la profundidad de búsqueda minimax.",
                "Ordenar estados terminales como lo hace la función de utilidad verdadera.",
                "Calcular directamente la utilidad exacta de los estados terminales."
            ],
            correctAnswer: 2,
            explanation: "Una de las principales funciones de evaluación en los juegos es ordenar los estados terminales de acuerdo con su utilidad, lo que ayuda a decidir el mejor movimiento sin llegar a los nodos terminales.",
            type: "single"
        },
        {
            id: "IAQ84",
            question: "¿Qué beneficio ofrece la tabla de transposición en los juegos de búsqueda?",
            options: [
                "Incrementar exponencialmente el coste de búsqueda.",
                "Evitar almacenar posiciones repetidas durante la búsqueda.",
                "Doblar la profundidad accesible en juegos como el ajedrez.",
                "Reducir el tiempo necesario para calcular los nodos terminales."
            ],
            correctAnswer: 2,
            explanation: "La tabla de transposición ayuda a evitar almacenar posiciones repetidas durante la búsqueda, lo que mejora la eficiencia de la búsqueda al reducir los cálculos redundantes.",
            type: "single"
        },
        {
            id: "IAQ85",
            question: "¿Qué criterio se utiliza en el test-límite para decidir cuándo aplicar la función de evaluación heurística?",
            options: [
                "La profundidad máxima alcanzada por el árbol.",
                "La cantidad de nodos generados en la búsqueda.",
                "La disponibilidad de tiempo para realizar la acción.",
                "El valor estimado de utilidad del estado actual."
            ],
            correctAnswer: 2,
            explanation: "El test-límite se utiliza para determinar cuándo aplicar la función de evaluación heurística, basándose en la disponibilidad de tiempo para tomar decisiones rápidas en juegos.",
            type: "single"
        },
        {
            id: "IAQ86",
            question: "¿Qué ventaja ofrece un algoritmo alfa-beta mejorado con técnicas de ordenamiento dinámico?",
            options: [
                "Elimina completamente el uso de funciones de evaluación.",
                "Disminuye significativamente el tiempo de computación necesario.",
                "Duplica el número de nodos generados por la búsqueda.",
                "Permite jugar juegos perfectos sin errores."
            ],
            correctAnswer: 1,
            explanation: "El ordenamiento dinámico en el algoritmo alfa-beta ayuda a reducir significativamente el tiempo de computación necesario, ya que prioriza los nodos que son más prometedores de explorar.",
            type: "single"
        },
        {
            id: "IAQ87",
            question: "¿Qué tipo de juegos estudia principalmente la inteligencia artificial según el libro?",
            options: [
                "Juegos de azar como póker",
                "Juegos físicos como hockey sobre hielo",
                "Juegos de suma cero, deterministas, y de información perfecta.",
                "Juegos cooperativos multi-jugador"
            ],
            correctAnswer: 2,
            explanation: "La inteligencia artificial se enfoca principalmente en los juegos de suma cero, deterministas, y de información perfecta, ya que estos son ideales para modelar el comportamiento competitivo y estratégico.",
            type: "single"
        },
        {
            id: "IAQ88",
            question: "¿Cuál es la principal técnica que utiliza el algoritmo minimax para elegir un movimiento?",
            options: [
                "Generar movimientos al azar",
                "Elegir el movimiento con el menor costo de computación",
                "Evaluar todos los posibles estados finales y elegir el óptimo.",
                "Basarse en la experiencia previa del jugador"
            ],
            correctAnswer: 2,
            explanation: "El algoritmo minimax evalúa todos los posibles estados finales y selecciona el movimiento que maximiza la utilidad del jugador, suponiendo que el adversario también juegue óptimamente.",
            type: "single"
        },
        {
            id: "IAQ89",
            question: "¿Qué propósito tiene la poda alfa-beta en la búsqueda de árboles de juegos?",
            options: [
                "Mejorar la calidad de las funciones de evaluación",
                "Reducir la cantidad de nodos que se deben explorar.",
                "Aumentar la profundidad del árbol de búsqueda",
                "Generar movimientos de manera aleatoria"
            ],
            correctAnswer: 1,
            explanation: "La poda alfa-beta reduce la cantidad de nodos que se deben explorar al eliminar ramas del árbol de búsqueda que no afectarán la decisión final.",
            type: "single"
        },
        {
            id: "IAQ90",
            question: "En un árbol de juegos, ¿cómo se evalúan los nodos de posibilidad en juegos con azar?",
            options: [
                "Tomando el valor mínimo de sus hijos",
                "Calculando el promedio ponderado de los valores de los hijos según sus probabilidades.",
                "Seleccionando el valor máximo de sus hijos",
                "Ignorando los nodos de posibilidad"
            ],
            correctAnswer: 1,
            explanation: "En juegos con azar, los nodos de posibilidad se evalúan calculando el promedio ponderado de los valores de sus nodos hijos, teniendo en cuenta las probabilidades de los diferentes resultados.",
            type: "single"
        },
        {
            id: "IAQ91",
            question: "¿Cuál es la principal ventaja de aplicar la técnica de búsqueda de estabilidad?",
            options: [
                "Permite evaluar nodos no terminales como si fueran terminales",
                "Ayuda a eliminar el efecto horizonte al evaluar nodos inestables.",
                "Aumenta la complejidad de la búsqueda exponencialmente",
                "Genera nodos de manera más rápida"
            ],
            correctAnswer: 1,
            explanation: "La búsqueda de estabilidad ayuda a eliminar el efecto horizonte al evaluar nodos inestables, lo que mejora la precisión de la evaluación en árboles de juegos.",
            type: "single"
        },
        {
            id: "IAQ92",
            question: "¿Qué característica diferencia a los juegos de información imperfecta como el bridge de los juegos de información perfecta?",
            options: [
                "Tienen nodos MAX y MIN adicionales",
                "Incluyen elementos de azar como dados",
                "No todos los estados o cartas son visibles para los jugadores.",
                "Utilizan estrategias de suma cero"
            ],
            correctAnswer: 2,
            explanation: "En los juegos de información imperfecta, como el bridge, no todos los estados o cartas son visibles para los jugadores, lo que introduce incertidumbre en el juego.",
            type: "single"
        },
        {
            id: "IAQ93",
            question: "¿Qué significa un 'movimiento nulo' en la búsqueda alfa-beta?",
            options: [
                "Un movimiento que omite la participación del adversario",
                "Una búsqueda rápida para estimar un límite inferior sobre el valor de una posición.",
                "Un movimiento que asegura una ventaja en cualquier situación",
                "Un movimiento que se descarta inmediatamente"
            ],
            correctAnswer: 1,
            explanation: "Un 'movimiento nulo' en la búsqueda alfa-beta se refiere a un movimiento que es descartado rápidamente porque no afecta al resultado de la búsqueda.",
            type: "single"
        },
        {
            id: "IAQ94",
            question: "¿Qué característica principal distingue a los juegos con un elemento de posibilidad de otros tipos de juegos?",
            options: [
                "Tienen reglas complejas e inmóviles.",
                "Incluyen nodos de decisión estrictamente determinados.",
                "Incorporan incertidumbre en los resultados debido a eventos aleatorios.",
                "Siempre requieren múltiples jugadores."
            ],
            correctAnswer: 2,
            explanation: "Los juegos con un elemento de posibilidad incorporan incertidumbre en los resultados debido a eventos aleatorios, como lanzar dados o barajar cartas.",
            type: "single"
        },
        {
            id: "IAQ95",
            question: "¿Cuál es el propósito principal de los nodos de posibilidad en un árbol de juego?",
            options: [
                "Permitir decisiones estratégicas más simples para los jugadores.",
                "Modelar eventos fuera del control de los jugadores, como lanzamientos de dados.",
                "Reducir la profundidad del árbol de búsqueda.",
                "Representar la evaluación heurística de una posición."
            ],
            correctAnswer: 1,
            explanation: "Los nodos de posibilidad se utilizan para modelar eventos fuera del control de los jugadores, como lanzamientos de dados o cualquier evento aleatorio que afecte el juego.",
            type: "single"
        },
        {
            id: "IAQ96",
            question: "¿Qué método se utiliza para evaluar un nodo de posibilidad en un juego?",
            options: [
                "Calcular el promedio ponderado de los valores de sus nodos hijos.",
                "Aplicar una función de utilidad constante a todos los nodos.",
                "Escoger el nodo hijo con el valor más alto.",
                "Ignorar los nodos de posibilidad durante la evaluación."
            ],
            correctAnswer: 0,
            explanation: "En los juegos con posibilidad, se utiliza el promedio ponderado de los valores de los nodos hijos para evaluar un nodo de posibilidad, teniendo en cuenta las probabilidades asociadas.",
            type: "single"
        },
        {
            id: "IAQ97",
            question: "En el contexto del minimax esperado, ¿qué considera el cálculo de utilidad en juegos con posibilidad?",
            options: [
                "Solo las acciones del jugador que toma decisiones.",
                "Solo el resultado final del juego.",
                "Las probabilidades de los diferentes resultados posibles y su utilidad asociada.",
                "Las heurísticas que maximizan la profundidad del árbol."
            ],
            correctAnswer: 2,
            explanation: "En el minimax esperado, el cálculo de utilidad tiene en cuenta las probabilidades de los resultados posibles y las utilidades asociadas con cada uno.",
            type: "single"
        },
        {
            id: "IAQ98",
            question: "¿Cuál es el principal desafío computacional del minimax esperado en juegos con posibilidad?",
            options: [
                "La necesidad de manejar múltiples jugadores simultáneamente.",
                "La complejidad de calcular valores heurísticos exactos para cada nodo.",
                "El crecimiento exponencial del árbol de búsqueda debido a nodos de posibilidad.",
                "La imposibilidad de definir reglas claras para cada movimiento."
            ],
            correctAnswer: 2,
            explanation: "El principal desafío computacional del minimax esperado es el crecimiento exponencial del árbol de búsqueda debido a los nodos de posibilidad, que añaden complejidad al proceso de evaluación.",
            type: "single"
        },
        {
            id: "IAQ99",
            question: "¿Qué caracteriza a los juegos que incluyen un elemento de posibilidad?",
            options: [
                "Son juegos donde las decisiones siempre tienen un resultado predecible.",
                "Introducen incertidumbre en los resultados a través de factores como dados o cartas.",
                "No pueden ser evaluados usando funciones heurísticas.",
                "Utilizan exclusivamente el algoritmo Minimax clásico para tomar decisiones."
            ],
            correctAnswer: 1,
            explanation: "Los juegos que incluyen un elemento de posibilidad introducen incertidumbre en los resultados debido a factores como dados o cartas, lo que hace que las decisiones no siempre tengan un resultado predecible.",
            type: "single"
        },
        {
            id: "IAQ100",
            question: "¿Cuál es el propósito de una función de evaluación en un juego con límite de tiempo real?",
            options: [
                "Explorar todas las ramas del árbol de decisiones antes de tomar una decisión.",
                "Evaluar nodos terminales únicamente.",
                "Aproximar el valor de un estado del juego sin llegar a los nodos terminales.",
                "Reducir la complejidad del algoritmo Minimax esperado."
            ],
            correctAnswer: 2,
            explanation: "En juegos con límite de tiempo real, una función de evaluación se utiliza para aproximar el valor de un estado del juego sin necesidad de explorar hasta los nodos terminales, lo que permite tomar decisiones dentro del tiempo limitado.",
            type: "single"
        }
    ]
}