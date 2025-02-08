import { QuizCategory } from '../types/quiz';

export const FinalAIPart1: QuizCategory = {
    id: 'Final-AI-Part1',
    title: 'Final AI Quiz - Part 1',
    description: 'Primera parte del cuestionario final de Inteligencia Artificial',
    icon: 'BrainCircuit',
    color: 'indigo',
    questions: [
        {
            id: 'Lote1',
            question: '¿Qué ocurre cuando se aumenta la cantidad de capas ocultas en una red neuronal?',
            options: [
                'Se reduce la capacidad de aprendizaje.',
                'Se incrementa la complejidad de las asignaciones no lineales.',
                'La red neuronal se vuelve menos profunda.',
                'Disminuye la cantidad de parámetros a entrenar.',
            ],
            correctAnswer: 1,
            explanation: `Cuando se añaden más capas ocultas en una red neuronal, la red se hace más profunda. Esto le permite modelar relaciones más complejas y no lineales entre las características de los datos. Cada capa oculta adicional ayuda a transformar la información de manera más detallada y permite que la red aprenda representaciones más abstractas y complejas. Esto aumenta la capacidad de la red para aprender funciones no lineales más complejas y adaptar el modelo a problemas más difíciles.`,
            type: 'single'
        },
        {
            id: 'Lote2',
            question: '¿Cuál de los siguientes es un ejemplo de hiperparámetro en una red neuronal?',
            options: [
                'Pesos de las conexiones neuronales',
                'Valores de salida de las neuronas',
                'Tasa de aprendizaje',
                'Etiquetas de los datos de entrenamiento',
            ],
            correctAnswer: 2,
            explanation: `La tasa de aprendizaje es un **hiperparámetro** en una red neuronal porque no se aprende durante el proceso de entrenamiento, sino que se establece antes del entrenamiento. Controla el ritmo con el cual los pesos de la red son ajustados en cada iteración. Los otros elementos como los pesos de las conexiones y los valores de salida son parte del **modelo** que se ajusta durante el entrenamiento.`
            ,
            type: 'single'
        },
        {
            id: 'Lote3',
            question: '¿Por qué una red neuronal profunda tiene mayor capacidad de aprendizaje?',
            options: [
                'Porque tiene más neuronas en la capa de salida',
                'Porque permite más combinaciones de subestructuras en sus capas',
                'Porque evita completamente el sobreajuste',
                'Porque reduce el número de capas de anidación',
            ],
            correctAnswer: 1,
            explanation: `Una red neuronal profunda tiene mayor capacidad de aprendizaje porque, al tener más capas, permite una mayor **complejidad en las combinaciones de subestructuras**. Esto le permite aprender representaciones más abstractas y resolver problemas más complejos. La profundidad de la red hace que pueda captar relaciones no lineales más complicadas entre los datos.`
            ,
            type: 'single'
        },
        {
            id: 'Lote4',
            question: '¿Cómo optimiza el aprendizaje automático la función objetivo?',
            options: [
                'A través del entrenamiento de datos',
                'Eliminando la necesidad de modelos estadísticos',
                'Reduciendo la jerarquía de abstracción en los datos',
                'Utilizando únicamente conocimiento experto sin datos de entrenamiento',
            ],
            correctAnswer: 0,
            explanation: `El aprendizaje automático optimiza la función objetivo mediante el **entrenamiento de datos**. Durante el entrenamiento, el modelo ajusta sus parámetros (como los pesos de una red neuronal) para minimizar la función objetivo, que mide el error del modelo en relación con los datos.`
            ,
            type: 'single'
        },
        {
            id: 'Lote5',
            question: '¿Por qué el aprendizaje profundo es especialmente útil en la era de los macrodatos?',
            options: [
                'Porque depende de la experiencia de los expertos en diseño de características',
                'Porque aprende características complejas sin necesidad de ingeniería de características manual',
                'Porque reduce la capacidad de abstracción de los datos',
                'Porque simplifica el procesamiento de datos eliminando la jerarquía anidada',
            ],
            correctAnswer: 1,
            explanation: `El aprendizaje profundo es útil en la era de los **macrodatos** porque puede **aprender características complejas** directamente desde los datos sin necesidad de ingeniería de características manual, lo cual es particularmente valioso cuando se manejan grandes cantidades de datos.`
            ,
            type: 'single'
        },
        {
            id: 'Lote6',
            question: '¿Cuál es la función principal de la capa de Pooling en una red neuronal?',
            options: [
                'Aumentar la cantidad de parámetros en el modelo',
                'Reducir el número de parámetros eliminando muestras no importantes',
                'Agregar más conexiones entre neuronas',
                'Aumentar la profundidad del mapa de características',
            ],
            correctAnswer: 1,
            explanation: `La función principal de la capa de **Pooling** es **reducir el número de parámetros** al eliminar muestras no importantes, lo que reduce la dimensionalidad de los mapas de características y mejora la eficiencia computacional.`
            ,
            type: 'single'
        },
        {
            id: 'Lote7',
            question: 'En una red convolucional profunda, ¿cómo afecta la degeneración de la matriz de pesos a la capacidad de aprendizaje?',
            options: [
                'Reduce los grados de libertad efectivos del modelo y ralentiza el aprendizaje.',
                'No tiene impacto en el modelo, ya que los pesos son ajustados dinámicamente.',
                'Provoca un aumento en la dimensionalidad efectiva del modelo, mejorando el rendimiento.',
                'Se soluciona completamente al agregar más capas a la red.',
            ],
            correctAnswer: 0,
            explanation: `La **degeneración** de la matriz de pesos reduce los grados de libertad efectivos del modelo, lo que limita su capacidad para aprender patrones complejos y ralentiza el proceso de aprendizaje.`
            ,
            type: 'single'
        },
        {
            id: 'Lote8',
            question: '¿Cómo impacta la estructura de la red en la capacidad de generalización de un modelo de aprendizaje profundo?',
            options: [
                'Una red demasiado profunda puede sobreajustarse a los datos de entrenamiento.',
                'Agregar más neuronas en cada capa siempre mejora la capacidad de generalización.',
                'Las redes profundas siempre generalizan mejor que las redes poco profundas.',
                'La generalización depende únicamente del tamaño del conjunto de datos y no de la arquitectura.',
            ],
            correctAnswer: 0,
            explanation: `Una red **demasiado profunda** puede sobreajustarse a los datos de entrenamiento, lo que significa que se adapta demasiado bien a los datos específicos y pierde capacidad para generalizar en datos nuevos.`
            ,
            type: 'single'
        },
        {
            id: 'Lote9',
            question: 'En una red neuronal convolucional, ¿cuál es el propósito de la agrupación (pooling)?',
            options: [
                'Reducir la dimensionalidad de los mapas de características y mejorar la eficiencia computacional.',
                'Incrementar el número de parámetros entrenables para mejorar el aprendizaje.',
                'Eliminar información irrelevante de manera selectiva sin afectar la representación espacial.',
                'Reemplazar por completo las capas convolucionales para disminuir el tiempo de entrenamiento.',
            ],
            correctAnswer: 0,
            explanation: `El propósito del **pooling** es reducir la dimensionalidad de los mapas de características, lo que mejora la eficiencia computacional y ayuda a prevenir el sobreajuste al eliminar detalles innecesarios.`
            ,
            type: 'single'
        },
        {
            id: 'Lote10',
            question: 'Según el texto, ¿cuál es un criterio importante para elegir una plataforma de aprendizaje profundo?',
            options: [
                'La facilidad de integración con plataformas y habilidades existentes',
                'La cantidad de datos que puede manejar',
                'La popularidad entre los investigadores de IA',
                'La compatibilidad con software de ofimática',
            ],
            correctAnswer: 0,
            explanation: `Un criterio importante para elegir una plataforma de aprendizaje profundo es la **facilidad de integración con plataformas y habilidades existentes**. Esto garantiza que los equipos puedan utilizar las herramientas y tecnologías que ya dominan.`
            ,
            type: 'single'
        },
        {
            id: 'Lote11',
            question: '¿Por qué es necesaria una función de activación en una red neuronal?',
            options: [
                'Para reducir el número de parámetros en la red',
                'Para garantizar que la salida sea siempre positiva',
                'Para permitir el aprendizaje de relaciones no lineales en los datos',
                'Para hacer que la red sea completamente lineal',
            ],
            correctAnswer: 2,
            explanation: `La **función de activación** es necesaria en una red neuronal para permitir que el modelo aprenda relaciones no lineales entre los datos, lo que mejora su capacidad para resolver tareas complejas.`
            ,
            type: 'single'
        },
        {
            id: 'Lote12',
            question: '¿Qué factor puede influir en la elección de una plataforma de aprendizaje profundo en relación con el hardware?',
            options: [
                'La facilidad de instalación en cualquier computadora',
                'La compatibilidad con computación distribuida y GPU',
                'La capacidad de ejecutar código en cualquier navegador web',
                'La cantidad de usuarios activos en la comunidad',
            ],
            correctAnswer: 1,
            explanation: `La compatibilidad con **computación distribuida y GPU** es fundamental para las plataformas de aprendizaje profundo, ya que la capacidad de utilizar múltiples GPUs o infraestructura distribuida mejora la eficiencia de los modelos durante el entrenamiento. Esto es crucial cuando se manejan grandes volúmenes de datos o redes neuronales profundas.`
            ,
            type: 'single'
        },
        {
            id: 'Lote13',
            question: '¿Cuál de las siguientes afirmaciones describe mejor el perceptrón?',
            options: [
                'Es un modelo de red neuronal que solo incluye capas ocultas.',
                'Se basa en una votación ponderada de las entradas para decidir su salida.',
                'Es la primera parte de una red neuronal profunda y no puede realizar clasificación binaria.',
                'No utiliza pesos para las entradas en su función de activación.',
            ],
            correctAnswer: 1,
            explanation: `El **perceptrón** es un modelo simple de red neuronal que toma las entradas y las pondera utilizando **pesos**, luego aplica una función de activación (como una función escalón) para determinar la salida. Esto lo convierte en un clasificador lineal binario.`
            ,
            type: 'single'
        },
        {
            id: 'Lote14',
            question: '¿Cuál es una característica distintiva del perceptrón multicapa?',
            options: [
                'Solo tiene una capa de salida.',
                'Está compuesto de neuronas que no están conectadas entre sí.',
                'Puede tener múltiples capas ocultas y neuronas en la capa de salida.',
                'Funciona exclusivamente con entradas binarias.',
            ],
            correctAnswer: 2,
            explanation: `El **perceptrón multicapa (MLP)** es una red neuronal que consta de **múltiples capas ocultas**, lo que le permite aprender representaciones no lineales de los datos. Este tipo de red es capaz de realizar tareas complejas, como clasificación multiclase.`
            ,
            type: 'single'
        },
        {
            id: 'Lote15',
            question: '¿Qué describe mejor la propagación hacia adelante en una red neuronal?',
            options: [
                'Es el proceso de calcular el error al final de la red.',
                'Consiste en actualizar los pesos de la red utilizando el gradiente.',
                'Implica calcular la salida de cada nodo capa por capa utilizando entradas y pesos.',
                'Se basa únicamente en la activación de la capa de salida.',
            ],
            correctAnswer: 2,
            explanation: `La **propagación hacia adelante** es el proceso de pasar los datos de entrada a través de la red neuronal, capa por capa, hasta obtener la salida final. Durante este proceso, cada capa calcula una representación de los datos utilizando pesos y funciones de activación.`
            ,
            type: 'single'
        },
        {
            id: 'Lote16',
            question: 'Durante el proceso de retropropagación, ¿cuál es el objetivo principal?',
            options: [
                'Proporcionar la suma ponderada de las salidas a la capa anterior.',
                'Calcular el gradiente para cada nodo y actualizar los parámetros de la red.',
                'Determinar la salida final de la red neuronal.',
                'Ajustar únicamente las funciones de activación de la red.',
            ],
            correctAnswer: 1,
            explanation: `La **retropropagación** es el proceso de calcular el gradiente del error con respecto a cada peso en la red neuronal y luego actualizar esos pesos para minimizar el error. Este proceso es esencial para el entrenamiento de redes neuronales.`
            ,
            type: 'single'
        },
        {
            id: 'Lote17',
            question: '¿Qué red neuronal se caracteriza por tener capas de convolución o agrupamiento (pooling)?',
            options: [
                'Deep Convolutional Network (DCN).',
                'Long/Short Term Memory (LSTM).',
                'Variational Autoencoder (VAE).',
                'Neural Turing Machine (NTM).',
            ],
            correctAnswer: 0,
            explanation: `Las **Deep Convolutional Networks (DCN)** son redes neuronales profundas que incluyen **capas de convolución** y **pooling**. Estas redes son especialmente útiles en tareas de visión por computadora, como el reconocimiento de imágenes.`
            ,
            type: 'single'
        },
        {
            id: 'Lote18',
            question: '¿Cuál es el primer paso en el proceso general de búsqueda de hiperparámetros?',
            options: [
                'Optimizar los parámetros del modelo en el conjunto de validación.',
                'Dividir el conjunto de datos en conjuntos de entrenamiento, validación y prueba.',
                'Buscar los hiperparámetros del modelo en el conjunto de validación.',
                'Aplicar búsqueda bayesiana para encontrar hiperparámetros óptimos.',
            ],
            correctAnswer: 1,
            explanation: `El primer paso en la búsqueda de **hiperparámetros** es dividir los datos en **conjuntos de entrenamiento, validación y prueba**. Esto permite ajustar los hiperparámetros utilizando el conjunto de validación sin sobreajustar el modelo a los datos de entrenamiento.`
            ,
            type: 'single'
        },
        {
            id: 'Lote19',
            question: '¿Qué técnica de búsqueda NO se menciona como parte del proceso de búsqueda de hiperparámetros?',
            options: [
                'Búsqueda en cuadrícula.',
                'Búsqueda aleatoria.',
                'Algoritmo genético.',
                'Búsqueda bayesiana.',
            ],
            correctAnswer: 2,
            explanation: `El **algoritmo genético** no se menciona como parte de las técnicas tradicionales para la búsqueda de hiperparámetros. Las técnicas más comunes son la **búsqueda en cuadrícula**, la **búsqueda aleatoria** y la **búsqueda bayesiana**.`
            ,
            type: 'single'
        },
        {
            id: 'Lote20',
            question: '¿Cuál es la relación correcta para calcular el tamaño del mapa de características después de una convolución?',
            options: [
                'W2 = W1 - F + 2P + S',
                'W2 = (W1 + F - 2P) / S',
                'W2 = (W1 - F + 2P) / S + 1',
                'W2 = (W1 - F + P) / S',
            ],
            correctAnswer: 2,
            explanation: `La fórmula correcta para calcular el tamaño del **mapa de características** después de una convolución es **W2 = (W1 - F + 2P) / S + 1**, donde W1 es el tamaño de entrada, F es el tamaño del filtro, P es el padding, y S es el stride (paso).`
            ,
            type: 'single'
        },
        {
            id: 'Lote21',
            question: '¿Cuál es el propósito de la retropropagación en una red neuronal?',
            options: [
                'Ajustar los pesos de la red para minimizar el error entre la salida esperada y la obtenida.',
                'Calcular la salida de la red a partir de las entradas y los pesos actuales.',
                'Aumentar el número de neuronas en la capa oculta para mejorar la precisión.',
                'Determinar la función de activación más adecuada para la red neuronal.',
            ],
            correctAnswer: 0,
            explanation: `El propósito de la **retropropagación** es ajustar los pesos de la red neuronal para minimizar el **error** entre la salida esperada y la salida obtenida, lo que mejora la precisión del modelo durante el entrenamiento.`
            ,
            type: 'single'
        },
        {
            id: 'Lote22',
            question: '¿Cuál es la relación entre el error total y los pesos de la red en el proceso de aprendizaje?',
            options: [
                'El error total se calcula a partir de la diferencia entre la salida real y la esperada, y se usa para ajustar los pesos mediante derivadas parciales.',
                'Los pesos de la red no afectan el error total, ya que solo dependen de la cantidad de neuronas en cada capa.',
                'El error total se mantiene constante en cada iteración para asegurar estabilidad en el aprendizaje.',
                'La relación entre los pesos y el error total se ajusta de manera aleatoria en cada iteración.',
            ],
            correctAnswer: 0,
            explanation: `La relación entre el **error total** y los **pesos** de la red es que el error se calcula a partir de la diferencia entre la salida real y la esperada, y luego se usa para ajustar los pesos mediante derivadas parciales, lo que mejora el aprendizaje.`
            ,
            type: 'single'
        },
        {
            id: 'Lote23',
            question: '¿Cuál de los siguientes métodos para ajustar hiperparámetros ha demostrado ser mejor que la búsqueda aleatoria y no requiere parámetros adicionales?',
            options: [
                'Búsqueda en cuadrícula',
                'Optimización bayesiana',
                'Método MITIE',
                'LIPO',
            ],
            correctAnswer: 3,
            explanation: `El **método LIPO** ha demostrado ser mejor que la búsqueda aleatoria en cuanto a la optimización de hiperparámetros y no requiere parámetros adicionales, lo que lo hace más eficiente en ciertos escenarios.`
            ,
            type: 'single'
        },
        {
            id: 'Lote24',
            question: '¿Cuál de los siguientes métodos para ajustar hiperparámetros se basa en la experiencia o intuición para seleccionar valores iniciales?',
            options: [
                'Búsqueda en cuadrícula',
                'Adivinar y comprobar',
                'Optimización bayesiana',
                'Método MITIE',
            ],
            correctAnswer: 1,
            explanation: `El enfoque de **adivinar y comprobar** se basa en la experiencia o intuición para seleccionar valores iniciales de los hiperparámetros. Es un método menos sistemático en comparación con otros, pero aún se utiliza en algunos casos.`
            ,
            type: 'single'
        },
        {
            id: 'Lote25',
            question: '¿Qué tipo de características aprenden las neuronas superficiales en una red neuronal profunda?',
            options: [
                'Características semánticas profundas',
                'Características avanzadas',
                'Características simples de bajo nivel, como bordes y texturas',
                'Características aleatorias',
            ],
            correctAnswer: 2,
            explanation: `Las **neuronas superficiales** en una red neuronal profunda aprenden **características simples de bajo nivel**, como bordes y texturas. A medida que la red se profundiza, las neuronas en capas más profundas combinan estas características simples para aprender representaciones más complejas.`
            ,
            type: 'single'
        }
    ]
};
