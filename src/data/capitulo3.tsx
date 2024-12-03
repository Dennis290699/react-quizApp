import { QuizCategory } from '../types/quiz';

export const capitulo3: QuizCategory = {
    id: 'Cap3',
    title: 'Capitulo 3',
    description: 'Test your knowledge of the basic concepts of artificial intelligence.',
    icon: 'brain-circuit',
    color: 'indigo',
    questions: [
        {
            id: "IAA26",
            question: "¿Qué característica define a la búsqueda primero en anchura?",
            options: [
                "Siempre encuentra el camino más corto basado en el costo.",
                "Expande primero los nodos más superficiales en el árbol de búsqueda.",
                "Utiliza una estrategia basada en heurísticas para guiar la búsqueda.",
                "Es más eficiente en términos de memoria que el resto de las búsquedas."
            ],
            correctAnswer: 1,
            explanation: "La búsqueda primero en anchura expande primero los nodos más superficiales antes de explorar los más profundos.",
            type: "single"
        },
        {
            id: "IAA27",
            question: "¿Qué tipo de estructura utiliza la búsqueda primero en anchura para almacenar los nodos generados?",
            options: [
                "Pila (LIFO).",
                "Cola (FIFO).",
                "Lista prioritaria.",
                "Árbol balanceado."
            ],
            correctAnswer: 1,
            explanation: "La búsqueda primero en anchura utiliza una cola FIFO para almacenar y procesar los nodos en el orden en que son generados.",
            type: "single"
        },
        {
            id: "IAA28",
            question: "¿Qué limitación principal tiene la búsqueda primero en anchura?",
            options: [
                "Puede quedar atrapada en ciclos infinitos.",
                "No es completa en problemas con un factor de ramificación finito.",
                "Requiere grandes cantidades de memoria para problemas profundos.",
                "Siempre encuentra soluciones subóptimas."
            ],
            correctAnswer: 2,
            explanation: "La búsqueda primero en anchura consume mucha memoria cuando explora árboles con una gran profundidad, ya que necesita almacenar todos los nodos en cada nivel.",
            type: "single"
        },
        {
            id: "IAA29",
            question: "¿Cuándo es óptima la búsqueda primero en anchura?",
            options: [
                "Cuando el costo de las acciones es uniforme.",
                "Cuando se utiliza una heurística adecuada.",
                "Cuando se reduce la profundidad del árbol.",
                "Cuando la complejidad es lineal en lugar de exponencial."
            ],
            correctAnswer: 0,
            explanation: "La búsqueda primero en anchura es óptima cuando todas las acciones tienen el mismo costo, ya que encuentra el camino más corto.",
            type: "single"
        },
        {
            id: "IAA30",
            question: "¿Cómo se diferencia la búsqueda de costo uniforme de la búsqueda primero en anchura?",
            options: [
                "Considera el costo total del camino, no solo la profundidad.",
                "Utiliza heurísticas para seleccionar el siguiente nodo.",
                "Garantiza la solución más rápida en términos de tiempo de ejecución.",
                "Siempre expande nodos más profundos antes que los superficiales."
            ],
            correctAnswer: 0,
            explanation: "La búsqueda de costo uniforme selecciona el nodo con el menor costo acumulado, no solo el más superficial.",
            type: "single"
        },
        {
            id: "IAA31",
            question: "En el ajedrez, el entorno es principalmente:",
            options: [
                "Dinámico y continuo.",
                "Secuencial y estratégico.",
                "Estático y episódico.",
                "Estocástico y multiagente."
            ],
            correctAnswer: 1,
            explanation: "El ajedrez es secuencial y estratégico porque cada movimiento tiene consecuencias a largo plazo y requiere planificación.",
            type: "single"
        },
        {
            id: "IAA32",
            question: "El ajedrez es un entorno secuencial porque:",
            options: [
                "Las acciones presentes no afectan las futuras.",
                "Se juega contra un único agente.",
                "Los episodios son completamente independientes entre sí.",
                "Cada decisión tiene consecuencias a largo plazo."
            ],
            correctAnswer: 3,
            explanation: "En el ajedrez, cada decisión tomada afecta el desarrollo del juego, lo que lo hace un entorno secuencial.",
            type: "single"
        },
        {
            id: "IAA33",
            question: "¿Qué propiedad hace que un entorno sea considerado estocástico?",
            options: [
                "Las acciones tienen un resultado impredecible.",
                "Las acciones tienen un resultado fijo y determinista.",
                "Los episodios son independientes entre sí.",
                "Solo puede incluir agentes individuales."
            ],
            correctAnswer: 0,
            explanation: "Un entorno estocástico se caracteriza por resultados impredecibles, introduciendo incertidumbre en la toma de decisiones.",
            type: "single"
        },
        {
            id: "IAA34",
            question: "La diferencia clave entre un agente dirigido mediante tabla y un programa más eficiente es que:",
            options: [
                "Los agentes dirigidos mediante tabla son más rápidos en entornos dinámicos.",
                "Los programas eficientes no pueden procesar entradas en tiempo real.",
                "El agente dirigido mediante tabla almacena todas las posibles percepciones y acciones.",
                "Los programas eficientes requieren grandes tablas de datos para operar."
            ],
            correctAnswer: 2,
            explanation: "Un agente dirigido mediante tabla utiliza una tabla que relaciona todas las posibles percepciones con las acciones correspondientes, lo que puede ser ineficiente en entornos complejos.",
            type: "single"
        },
        {
            id: "IAA35",
            question: "¿Qué tipo de entorno permite al agente ignorar el contexto histórico de percepciones para tomar una decisión?",
            options: [
                "Secuencial.",
                "Dinámico.",
                "Episódico.",
                "Estocástico."
            ],
            correctAnswer: 2,
            explanation: "En un entorno episódico, las decisiones pueden tomarse sin considerar las percepciones pasadas, ya que cada episodio es independiente.",
            type: "single"
        },
        {
            id: "IAA36",
            question: "¿Qué característica define a la búsqueda primero en profundidad?",
            options: [
                "Expande los nodos más superficiales en el árbol de búsqueda.",
                "Siempre encuentra la solución más corta posible.",
                "Expande primero el nodo más profundo en la frontera del árbol de búsqueda.",
                "Requiere almacenar todos los nodos del árbol de búsqueda en memoria."
            ],
            correctAnswer: 2,
            explanation: "La búsqueda primero en profundidad expande los nodos más profundos antes de retroceder a niveles superiores.",
            type: "single"
        },
        {
            id: "IAA37",
            question: "¿Qué problema resuelve la búsqueda de profundidad limitada?",
            options: [
                "La falta de optimalidad en árboles finitos.",
                "El problema de caminos infinitos en árboles ilimitados.",
                "La complejidad exponencial en tiempo de la búsqueda primero en profundidad.",
                "La necesidad de conocer el diámetro del espacio de estados."
            ],
            correctAnswer: 1,
            explanation: "La búsqueda de profundidad limitada evita explorar caminos infinitos al imponer un límite en la profundidad de búsqueda.",
            type: "single"
        },
        {
            id: "IAA38",
            question: "¿Qué ventaja principal tiene la búsqueda de profundidad iterativa sobre la búsqueda primero en anchura?",
            options: [
                "Reduce la complejidad en tiempo a O(b).",
                "Genera menos nodos en el nivel más profundo del árbol.",
                "Utiliza menos memoria mientras conserva completitud y optimalidad en ciertos casos.",
                "Es más rápida al evitar la generación repetida de nodos en niveles superiores."
            ],
            correctAnswer: 2,
            explanation: "La búsqueda de profundidad iterativa combina las ventajas de la búsqueda en anchura y profundidad, utilizando menos memoria y siendo completa.",
            type: "single"
        },
        {
            id: "IAA39",
            question: "¿Qué estructura de datos se utiliza comúnmente para implementar la búsqueda primero en profundidad?",
            options: [
                "Cola FIFO",
                "Pila LIFO",
                "Lista enlazada",
                "Árbol binario"
            ],
            correctAnswer: 1,
            explanation: "La búsqueda primero en profundidad utiliza una pila LIFO para procesar los nodos en orden inverso al que fueron generados.",
            type: "single"
        },
        {
            id: "IAA40",
            question: "¿Qué ventaja tiene la búsqueda de profundidad iterativa respecto a la búsqueda primero en profundidad?",
            options: [
                "Requiere menos memoria y evita caminos infinitos.",
                "Es más rápida en términos de tiempo de ejecución.",
                "Genera todos los nodos posibles en el árbol.",
                "Siempre encuentra la solución más corta en menos pasos."
            ],
            correctAnswer: 0,
            explanation: "La búsqueda de profundidad iterativa evita caer en bucles infinitos y utiliza menos memoria en comparación con la búsqueda primero en profundidad.",
            type: "single"
        },
        {
            id: "IAA41",
            question: "¿Qué representa el test objetivo en la formulación del problema?",
            options: [
                "La acción inicial",
                "El conjunto de estados deseables",
                "La secuencia de acciones",
                "La función sucesor"
            ],
            correctAnswer: 1,
            explanation: "El test objetivo identifica si un estado es uno de los estados deseables o metas en el problema.",
            type: "single"
        },
        {
            id: "IAA42",
            question: "¿Qué representa un estado inicial en un problema bien definido?",
            options: [
                "Un conjunto de posibles soluciones",
                "Un punto de partida para el agente",
                "Un camino en el espacio de estados",
                "Un estado objetivo"
            ],
            correctAnswer: 1,
            explanation: "El estado inicial es el punto de partida desde el cual el agente comienza la búsqueda de una solución.",
            type: "single"
        },
        {
            id: "IAA43",
            question: "¿Qué devuelve la función sucesor en un problema de búsqueda?",
            options: [
                "El estado inicial",
                "Un conjunto de pares ordenados de acción y sucesor",
                "La secuencia de acciones óptimas",
                "Un grafo del espacio de estados"
            ],
            correctAnswer: 1,
            explanation: "La función sucesor devuelve las acciones posibles y los estados resultantes, ayudando al agente a explorar el espacio de estados.",
            type: "single"
        },
        {
            id: "IAA44",
            question: "¿Cómo se llaman los algoritmos que no dan información adicional sobre el problema?",
            options: [
                "Informados",
                "Basados en objetivos",
                "No informados",
                "Deterministas"
            ],
            correctAnswer: 2,
            explanation: "Los algoritmos no informados no utilizan ninguna información heurística y se basan únicamente en el espacio de estados.",
            type: "single"
        },
        {
            id: "IAA45",
            question: "¿Qué significa que un agente actúe en un sistema de lazo abierto?",
            options: [
                "Ignora las percepciones durante la ejecución de la solución",
                "Adapta sus acciones en tiempo real",
                "Maximiza su medida de rendimiento",
                "Depende del entorno dinámico"
            ],
            correctAnswer: 0,
            explanation: "Un agente en un sistema de lazo abierto ejecuta acciones sin retroalimentación del entorno.",
            type: "single"
        },
        {
            id: "IAA46",
            question: "¿Cuál es una de las complicaciones importantes al proceso de búsqueda en espacios de estados?",
            options: [
                "La posibilidad de expandir estados ya visitados.",
                "La falta de memoria suficiente.",
                "La ausencia de soluciones óptimas.",
                "La eliminación de nodos repetidos."
            ],
            correctAnswer: 0,
            explanation: "Expandir estados ya visitados puede hacer que el algoritmo repita búsquedas innecesarias y aumente el tiempo de ejecución.",
            type: "single"
        },
        {
            id: "IAA47",
            question: "¿Qué ocurre si un algoritmo no detecta estados repetidos?",
            options: [
                "Se resuelve el problema de manera óptima.",
                "Puede provocar que un problema resoluble sea irresoluble.",
                "Reduce exponencialmente el coste de búsqueda.",
                "Genera árboles de búsqueda finitos."
            ],
            correctAnswer: 1,
            explanation: "La falta de detección de estados repetidos puede llevar a ciclos infinitos y hacer que el problema no sea resoluble.",
            type: "single"
        },
        {
            id: "IA4A8",
            question: "¿Cómo se llama la estructura que almacena nodos ya expandidos en la búsqueda de grafos?",
            options: [
                "Lista de frontera.",
                "Lista abierta.",
                "Lista cerrada.",
                "Nodo actual."
            ],
            correctAnswer: 2,
            explanation: "La lista cerrada almacena nodos que ya han sido expandidos, evitando su re-expansión.",
            type: "single"
        },
        {
            id: "IAA49",
            question: "¿Qué tipo de problemas surgen cuando un agente no tiene sensores?",
            options: [
                "Problemas conformados.",
                "Problemas de exploración.",
                "Problemas de contingencia.",
                "Problemas deterministas."
            ],
            correctAnswer: 0,
            explanation: "Los problemas conformados ocurren cuando un agente debe actuar sin información sensorial del entorno.",
            type: "single"
        },
        {
            id: "IAA50",
            question: "¿Qué estrategia de búsqueda utiliza listas cerradas para evitar ciclos?",
            options: [
                "Búsqueda de coste uniforme.",
                "Búsqueda primero en profundidad.",
                "Búsqueda de profundidad iterativa.",
                "Búsqueda-grafos."
            ],
            correctAnswer: 3,
            explanation: "La búsqueda-grafos utiliza listas cerradas para evitar la expansión de nodos previamente visitados, previniendo ciclos.",
            type: "single"
        }
    ]
};
