import { QuizCategory } from '../types/quiz';

export const capitulo4: QuizCategory = {
    id: 'Cap4',
    title: 'Capitulo 4',
    description: 'Test your knowledge of the basic concepts of artificial intelligence.',
    icon: 'brain-circuit',
    color: 'indigo',
    questions: [
        {
            id: "IAS51",
            question: "¿Qué representa la 'frontera' en un árbol de búsqueda?",
            options: [
                "Los nodos que han sido completamente explorados.",
                "La colección de nodos que se han generado pero no expandido.",
                "Los estados finales del espacio de búsqueda.",
                "El conjunto de todas las soluciones posibles."
            ],
            correctAnswer: 1,
            explanation: "La 'frontera' se refiere a la colección de nodos que se han generado pero que aún no han sido expandidos.",
            type: "single"
        },
        {
            id: "IAS52",
            question: "¿Qué estrategia utiliza una cola FIFO para ordenar la expansión de nodos?",
            options: [
                "Búsqueda primero en profundidad.",
                "Búsqueda primero en anchura.",
                "Búsqueda de costo uniforme.",
                "Búsqueda con profundidad iterativa."
            ],
            correctAnswer: 1,
            explanation: "La búsqueda primero en anchura (BFS) utiliza una cola FIFO para expandir nodos por niveles.",
            type: "single"
        },
        {
            id: "IAS53",
            question: "¿Cuándo se garantiza que la búsqueda primero en anchura es óptima?",
            options: [
                "Cuando el árbol es finito.",
                "Cuando el factor de ramificación es constante.",
                "Cuando los costos de las acciones son iguales.",
                "Cuando la profundidad del árbol no supera un límite fijo."
            ],
            correctAnswer: 2,
            explanation: "La búsqueda primero en anchura es óptima cuando los costos de las acciones son iguales, ya que siempre encuentra el camino más corto.",
            type: "single"
        },
        {
            id: "IAS54",
            question: "¿Qué sucede con la búsqueda primero en profundidad si el árbol de búsqueda es infinito?",
            options: [
                "Encuentra todas las soluciones posibles.",
                "Nunca termina.",
                "Devuelve la solución óptima.",
                "Genera un error de complejidad en tiempo."
            ],
            correctAnswer: 1,
            explanation: "Si el árbol es infinito, la búsqueda primero en profundidad nunca termina porque sigue explorando nodos infinitamente.",
            type: "single"
        },
        {
            id: "IAS55",
            question: "¿Cuál de las siguientes estrategias tiene menor requerimiento de memoria?",
            options: [
                "Búsqueda primero en anchura.",
                "Búsqueda de costo uniforme.",
                "Búsqueda primero en profundidad.",
                "Búsqueda bidireccional."
            ],
            correctAnswer: 2,
            explanation: "La búsqueda primero en profundidad tiene un menor requerimiento de memoria porque solo almacena el camino actual.",
            type: "single"
        },
        {
            id: "IAS56",
            question: "¿Qué garantiza la completitud de la búsqueda de costo uniforme?",
            options: [
                "Que el costo del camino sea mayor o igual a una constante positiva.",
                "Que el árbol sea finito y equilibrado.",
                "Que el factor de ramificación sea uniforme.",
                "Que el objetivo esté en el primer nivel del árbol."
            ],
            correctAnswer: 0,
            explanation: "La completitud de la búsqueda de costo uniforme se garantiza si el costo del camino es mayor o igual a una constante positiva, lo que evita ciclos infinitos.",
            type: "single"
        },
        {
            id: "IAS57",
            question: "¿Qué técnica de búsqueda combina la estrategia de búsqueda primero en profundidad y primero en anchura?",
            options: [
                "Búsqueda con profundidad limitada.",
                "Búsqueda bidireccional.",
                "Búsqueda con profundidad iterativa.",
                "Búsqueda heurística."
            ],
            correctAnswer: 2,
            explanation: "La búsqueda con profundidad iterativa combina la profundidad limitada y la anchura, ampliando la profundidad de forma iterativa.",
            type: "single"
        },
        {
            id: "IAS58",
            question: "¿Qué tipo de problema enfrenta un agente sin sensores en un entorno determinista?",
            options: [
                "Problema de exploración.",
                "Problema de contingencia.",
                "Problema sin información.",
                "Problema de espacio de estados finito."
            ],
            correctAnswer: 2,
            explanation: "Un agente sin sensores en un entorno determinista enfrenta un problema sin información, ya que no puede percibir el estado del mundo.",
            type: "single"
        },
        {
            id: "IAS59",
            question: "¿Qué ventaja tiene la búsqueda con profundidad iterativa frente a la búsqueda primero en profundidad?",
            options: [
                "Requiere menos espacio.",
                "Es completa y óptima para costos unidad.",
                "Expande menos nodos.",
                "Reduce la complejidad en tiempo."
            ],
            correctAnswer: 1,
            explanation: "La búsqueda con profundidad iterativa es completa y óptima cuando los costos son unitarios, a diferencia de la búsqueda primero en profundidad.",
            type: "single"
        },
        {
            id: "IAS60",
            question: "¿Qué criterio se utiliza para seleccionar nodos en la búsqueda de costo uniforme?",
            options: [
                "La profundidad del nodo.",
                "El estado que aparece primero en la cola FIFO.",
                "El costo acumulado del camino.",
                "El orden de llegada a la frontera."
            ],
            correctAnswer: 2,
            explanation: "En la búsqueda de costo uniforme, se seleccionan los nodos con el menor costo acumulado del camino.",
            type: "single"
        },
        {
            id: "IAS61",
            question: "¿Cuál es la principal diferencia entre la búsqueda voraz primero el mejor y la búsqueda A*?",
            options: [
                "La búsqueda voraz considera el costo acumulado y el costo estimado al objetivo.",
                "La búsqueda voraz expande el nodo más cercano al objetivo según la heurística, mientras que A* usa la suma del costo del camino y la heurística.",
                "La búsqueda voraz es completa y óptima; A* no lo es.",
                "No existe diferencia; ambas usan el mismo criterio."
            ],
            correctAnswer: 1,
            explanation: "La búsqueda voraz expande el nodo más cercano al objetivo según la heurística, mientras que A* usa la suma del costo acumulado y la heurística para tomar decisiones.",
            type: "single"
        },
        {
            id: "IAS62",
            question: "¿Qué condición debe cumplir una heurística para garantizar la optimalidad de A*?",
            options: [
                "Debe ser consistente o cumplir la desigualdad triangular.",
                "Debe sobrestimar el costo real al objetivo.",
                "Debe evitar expandir nodos ya visitados.",
                "Debe usar una función h(n) igual a cero para todos los nodos."
            ],
            correctAnswer: 0,
            explanation: "Para garantizar la optimalidad de A*, la heurística debe ser consistente, es decir, debe cumplir la desigualdad triangular.",
            type: "single"
        },
        {
            id: "IAS63",
            question: "¿Cuál es el objetivo principal del 8-puzle?",
            options: [
                "Deslizar las fichas horizontal o verticalmente hasta alcanzar la configuración objetivo.",
                "Reducir el número de movimientos posibles a dos.",
                "Colocar todas las fichas en el borde del tablero.",
                "Mover las fichas diagonalmente hasta el espacio vacío."
            ],
            correctAnswer: 0,
            explanation: "El objetivo principal del 8-puzle es deslizar las fichas horizontal o verticalmente hasta alcanzar la configuración objetivo.",
            type: "single"
        },
        {
            id: "IAS64",
            question: "¿Cuál es una característica de la heurística h2 para el 8-puzle?",
            options: [
                "Cuenta el número de piezas mal colocadas.",
                "Calcula la suma de las distancias horizontales y verticales de las piezas a sus posiciones objetivo.",
                "Permite movimientos diagonales para calcular las distancias.",
                "Sobrestima el costo de la solución para encontrar respuestas más rápidas."
            ],
            correctAnswer: 1,
            explanation: "La heurística h2 para el 8-puzle calcula la suma de las distancias horizontales y verticales de las piezas a sus posiciones objetivo.",
            type: "single"
        },
        {
            id: "IAS65",
            question: "¿Por qué es importante que una función heurística no sobrestime el número de pasos al objetivo en el algoritmo A*?",
            options: [
                "Para evitar que el algoritmo explore todos los estados posibles.",
                "Porque garantiza encontrar soluciones más rápidas aunque no sean óptimas.",
                "Para asegurar que las soluciones encontradas sean las más cortas posibles.",
                "Porque permite movimientos en diagonal."
            ],
            correctAnswer: 2,
            explanation: "Es importante que una función heurística no sobrestime el número de pasos al objetivo en el algoritmo A* porque garantiza que las soluciones encontradas sean las más cortas posibles.",
            type: "single"
        },
        {
            id: "IAS66",
            question: "¿Qué es una heurística admisible en el contexto de la resolución de problemas como el 8-puzle?",
            options: [
                "Una heurística que sobreestima consistentemente el costo real del camino restante.",
                "Una heurística que subestima o calcula exactamente el costo real del camino restante.",
                "Una heurística que utiliza siempre búsqueda en profundidad para resolver problemas.",
                "Una heurística que genera automáticamente problemas relajados para resolver un estado."
            ],
            correctAnswer: 1,
            explanation: "Una heurística admisible es una que subestima o calcula exactamente el costo real del camino restante.",
            type: "single"
        },
        {
            id: "IAS67",
            question: "¿Cuál de las siguientes características es clave para que un problema relajado sea útil en la generación de heurísticas?",
            options: [
                "Que el problema relajado sea más complejo que el original.",
                "Que el problema relajado permita resolver subproblemas de manera independiente y sin necesidad de búsqueda exhaustiva.",
                "Que el problema relajado contenga tantas restricciones como sea posible para mantener la precisión.",
                "Que el problema relajado use bases de datos disjuntas exclusivamente."
            ],
            correctAnswer: 1,
            explanation: "Una característica clave para que un problema relajado sea útil en la generación de heurísticas es que permita resolver subproblemas de manera independiente y sin necesidad de búsqueda exhaustiva.",
            type: "single"
        },
        {
            id: "IAS68",
            question: "¿Por qué no es posible sumar directamente los costos de dos subproblemas en el modelo de bases de datos disjuntas?",
            options: [
                "Porque los subproblemas están completamente desconectados entre sí.",
                "Porque las soluciones de los subproblemas comparten probablemente algunos movimientos, lo que podría contar costos duplicados.",
                "Porque el modelo de bases de datos disjuntas solo funciona para problemas sin restricciones.",
                "Porque los subproblemas no generan heurísticas admisibles de manera individual."
            ],
            correctAnswer: 1,
            explanation: "No es posible sumar directamente los costos de dos subproblemas en el modelo de bases de datos disjuntas porque las soluciones de los subproblemas comparten probablemente algunos movimientos, lo que podría contar costos duplicados.",
            type: "single"
        },
        {
            id: "IAS69",
            question: "¿Qué implica que una heurística domine a otra en términos de rendimiento?",
            options: [
                "Que expande más nodos que la otra.",
                "Que tiene menor costo computacional que la otra.",
                "Que expande siempre igual o menos nodos que la otra en cualquier problema.",
                "Que puede sobrestimar el costo en ciertos casos."
            ],
            correctAnswer: 2,
            explanation: "Una heurística domina a otra en términos de rendimiento si expande siempre igual o menos nodos que la otra en cualquier problema.",
            type: "single"
        },
        {
            id: "IAS70",
            question: "¿Qué significa el factor de ramificación eficaz (b*) en el contexto de las heurísticas?",
            options: [
                "Es la tasa de nodos que se generan en cada nivel del árbol.",
                "Es el número total de nodos que se generan durante la búsqueda.",
                "Es el factor de ramificación necesario para que un árbol uniforme contenga el mismo número de nodos generados por A*.",
                "Es la profundidad máxima alcanzada durante la búsqueda."
            ],
            correctAnswer: 2,
            explanation: "El factor de ramificación eficaz (b*) en el contexto de las heurísticas es el factor de ramificación necesario para que un árbol uniforme contenga el mismo número de nodos generados por A*.",
            type: "single"
        },
        {
            id: "IAS71",
            question: "¿Por qué es mejor utilizar una heurística con valores más altos en la búsqueda?",
            options: [
                "Porque garantiza soluciones más rápidas sin importar el tiempo computacional.",
                "Porque permite expandir menos nodos, siempre que no sobrestime ni sea demasiado costosa computacionalmente.",
                "Porque asegura que el número total de nodos generados sea constante.",
                "Porque reduce automáticamente el costo de cálculo de la heurística."
            ],
            correctAnswer: 1,
            explanation: "Es mejor utilizar una heurística con valores más altos porque permite expandir menos nodos, siempre que no sobrestime ni sea demasiado costosa computacionalmente.",
            type: "single"
        },
        {
            id: "IAS72",
            question: "¿Qué representa la función heurística h(n) en el contexto del aprendizaje desde la experiencia?",
            options: [
                "La solución óptima del problema desde un nodo inicial.",
                "Una estimación del costo de la solución desde un estado en el nodo n.",
                "El costo total de todos los nodos visitados en la búsqueda.",
                "La diferencia entre el costo real y el estimado de una solución."
            ],
            correctAnswer: 1,
            explanation: "La función heurística h(n) representa una estimación del costo de la solución desde un estado en el nodo n.",
            type: "single"
        },
        {
            id: "IAS73",
            question: "¿Qué característica de un estado podría ser útil para predecir el valor de h(n) en el 8-puzle?",
            options: [
                "El número de movimientos realizados desde el inicio.",
                "El número de fichas mal colocadas en relación al estado objetivo.",
                "La cantidad de nodos expandidos durante la búsqueda.",
                "La profundidad máxima alcanzada en el árbol de búsqueda."
            ],
            correctAnswer: 1,
            explanation: "Una característica útil para predecir el valor de h(n) en el 8-puzle es el número de fichas mal colocadas en relación al estado objetivo.",
            type: "single"
        },
        {
            id: "IAS74",
            question: "¿Cuál es una aproximación común para combinar múltiples características x1(n) y x2(n) al construir h(n)?",
            options: [
                "Usar un árbol de decisión con las características como nodos.",
                "Aplicar una suma ponderada lineal de las características.",
                "Optimizar la búsqueda sin utilizar características adicionales.",
                "Aplicar directamente el costo real a h(n)."
            ],
            correctAnswer: 1,
            explanation: "Una aproximación común para combinar múltiples características x1(n) y x2(n) al construir h(n) es aplicar una suma ponderada lineal de las características.",
            type: "single"
        },
        {
            id: "IAS75",
            question: "¿Qué rol juegan las constantes c1 y c2 en la combinación lineal de características para h(n)?",
            options: [
                "Representan directamente los costos reales de solución para cada estado.",
                "Se ajustan para proporcionar el mejor ajuste a los datos reales sobre costos de solución.",
                "Determinan la cantidad de nodos expandidos durante la búsqueda.",
                "Aseguran que h(n) siempre sobrestime el costo real."
            ],
            correctAnswer: 1,
            explanation: "Las constantes c1 y c2 en la combinación lineal de características para h(n) se ajustan para proporcionar el mejor ajuste a los datos reales sobre costos de solución.",
            type: "single"
        }
    ]
};