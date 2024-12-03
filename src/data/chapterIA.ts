import { QuizCategory } from '../types/quiz';

export const chapterIA: QuizCategory = {
    id: 'IA',
    title: 'Full Quiz',
    description: 'Test your knowledge of the basic concepts of artificial intelligence.',
    icon: 'brain-circuit',
    color: 'indigo',
    questions: [
        {
            id: "IA1",
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
            id: "IA2",
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
            id: "IA3",
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
            id: "IA4",
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
            id: "IA5",
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
            id: "IA6",
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
            id: "IA7",
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
            id: "IA8",
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
            id: "IA9",
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
            id: "IA10",
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
            id: "IA11",
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
            id: "IA12",
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
            id: "IA13",
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
            id: "IA14",
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
            id: "IA15",
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
            id: "IA16",
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
            id: "IA17",
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
            id: "IA18",
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
            id: "IA19",
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
            id: "IA20",
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
            id: "IA21",
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
            id: "IA22",
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
            id: "IA23",
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
            id: "IA24",
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
            id: "IA25",
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
        {
            id: "IA26",
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
            id: "IA27",
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
            id: "IA28",
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
            id: "IA29",
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
            id: "IA30",
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
            id: "IA31",
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
            id: "IA32",
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
            id: "IA33",
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
            id: "IA34",
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
            id: "IA35",
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
            id: "IA36",
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
            id: "IA37",
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
            id: "IA38",
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
            id: "IA39",
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
            id: "IA40",
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
            id: "IA41",
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
            id: "IA42",
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
            id: "IA43",
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
            id: "IA44",
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
            id: "IA45",
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
            id: "IA46",
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
            id: "IA47",
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
            id: "IA48",
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
            id: "IA49",
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
            id: "IA50",
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
        },
        {
            id: "IA51",
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
            id: "IA52",
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
            id: "IA53",
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
            id: "IA54",
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
            id: "IA55",
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
            id: "IA56",
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
            id: "IA57",
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
            id: "IA58",
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
            id: "IA59",
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
            id: "IA60",
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
            id: "IA61",
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
            id: "IA62",
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
            id: "IA63",
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
            id: "IA64",
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
            id: "IA65",
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
            id: "IA66",
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
            id: "IA67",
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
            id: "IA68",
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
            id: "IA69",
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
            id: "IA70",
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
            id: "IA71",
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
            id: "IA72",
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
            id: "IA73",
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
            id: "IA74",
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
            id: "IA75",
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
        },
        {
            id: "IA76",
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
            id: "IA77",
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
            id: "IA78",
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
            id: "IA79",
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
            id: "IA80",
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
            id: "IA81",
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
            id: "IA82",
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
            id: "IA83",
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
            id: "IA84",
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
            id: "IA85",
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
            id: "IA86",
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
            id: "IA87",
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
            id: "IA88",
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
            id: "IA89",
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
            id: "IA90",
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
            id: "IA91",
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
            id: "IA92",
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
            id: "IA93",
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
            id: "IA94",
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
            id: "IA95",
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
            id: "IA96",
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
            id: "IA97",
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
            id: "IA98",
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
            id: "IA99",
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
            id: "IA100",
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
};
