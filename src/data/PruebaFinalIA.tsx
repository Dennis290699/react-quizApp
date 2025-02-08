import { QuizCategory } from '../types/quiz';

export const PruebaFinalIA: QuizCategory = {
    id: 'Final-IA',
    title: 'Full Quiz',
    description: 'Primera parte del cuestionario fianl IA',
    icon: 'BookCheck',
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
        },
        {
            id: 'Lote26',
            question: '¿Cuál es el rango de valores de la función sigmoide?',
            options: [
                'Entre (-1,1)',
                'Entre (0;1)',
                'Entre (-∞,∞)',
                'Entre [0,+∞)',
            ],
            correctAnswer: 1,
            explanation: `La función sigmoide tiene un rango de valores entre **(0;1)**, es decir, los resultados siempre están dentro de ese intervalo.`
            ,
            type: 'single'
        },
        {
            id: 'Lote27',
            question: '¿Cuál es la diferencia principal entre la función sigmoide y tanh?',
            options: [
                'Sigmoide es más estable que tanh',
                'Sigmoide converge más rápido que tanh',
                'Tanh tiene un rango de (-1,1), mientras que sigmoide tiene (0,1)',
                'Tanh no se usa en redes neuronales',
            ],
            correctAnswer: 2,
            explanation: `La principal diferencia es que **tanh** tiene un rango de **(-1,1)**, mientras que **sigmoide** tiene un rango de **(0,1)**.`
            ,
            type: 'single'
        },
        {
            id: 'Lote28',
            question: '¿Cuál es la principal ventaja de la función de activación ReLU?',
            options: [
                'No permite valores negativos',
                'Tiene una salida completamente binaria',
                'Es más compleja de calcular',
                'Evita el problema de desaparición del gradiente, en valores positivos',
            ],
            correctAnswer: 3,
            explanation: `La principal ventaja de **ReLU** es que **evita el problema de desaparición del gradiente** en los valores positivos, lo que mejora el aprendizaje en redes profundas.`
            ,
            type: 'single'
        },
        {
            id: 'Lote29',
            question: '¿Qué problema puede tener la función ReLU?',
            options: [
                'Puede causar que algunas neuronas "mueran", y dejen de actualizarse',
                'No se usa en redes profundas',
                'Es completamente lineal',
                'Tiene una convergencia muy lenta',
            ],
            correctAnswer: 0,
            explanation: `Uno de los problemas de **ReLU** es que puede causar que algunas neuronas "mueran" y dejen de actualizarse, especialmente si los valores de entrada son muy negativos.`
            ,
            type: 'single'
        },
        {
            id: 'Lote30',
            question: '¿Cómo soluciona Leaky ReLU el problema de neuronas muertas?',
            options: [
                'Agregando más capas a la red',
                'Ajustando automáticamente la tasa de aprendizaje',
                'Permitendo valores negativos, con una pequeña pendiente',
                'Eliminando la parte negativa de la función',
            ],
            correctAnswer: 2,
            explanation: `**Leaky ReLU** permite valores negativos con una pequeña pendiente para solucionar el problema de las neuronas muertas en **ReLU**.`
            ,
            type: 'single'
        },
        {
            id: 'Lote31',
            question: '¿Cuál es el comportamiento de la función Softplus?',
            options: [
                'Solo se usa en redes convolucionales',
                'No se usa en redes neuronales profundas',
                'Es una versión suavizada, de ReLU',
                'Es una función completamente lineal',
            ],
            correctAnswer: 2,
            explanation: `La función **Softplus** es una versión suavizada de **ReLU**, lo que significa que es continua y no tiene el "corte" abrupto de ReLU.`
            ,
            type: 'single'
        },
        {
            id: 'Lote32',
            question: '¿Para qué se usa la función Softmax?',
            options: [
                'Para la clasificación binaria',
                'Para reducir el tamaño de los datos de entrada',
                'Para mejorar el entrenamiento de ReLU',
                'Para la clasificación, multiclase',
            ],
            correctAnswer: 3,
            explanation: `La función **Softmax** se usa principalmente para **clasificación multiclase**, ya que convierte las salidas de la red en probabilidades para cada clase.`
            ,
            type: 'single'
        },
        {
            id: 'Lote33',
            question: '¿Cuál es la principal característica de Softmax?',
            options: [
                'Aumenta la cantidad de parámetros en la red',
                'Convierte los valores de salida en probabilidades, entre 0 y 1',
                'Solo funciona en redes con una sola capa',
                'Hace que la red sea completamente lineal',
            ],
            correctAnswer: 1,
            explanation: `La función **Softmax** convierte las salidas de la red neuronal en probabilidades, asegurando que la suma de todas las salidas sea 1, lo que facilita la clasificación.`
            ,
            type: 'single'
        },
        {
            id: 'Lote34',
            question: '¿Por qué la diferenciabilidad es importante en una función de activación?',
            options: [
                'Reduce la cantidad de neuronas necesarias',
                'Hace que la red sea más fácil de interpretar',
                'Permite calcular gradientes, para la optimización',
                'Elimina la necesidad de normalización',
            ],
            correctAnswer: 2,
            explanation: `La diferenciabilidad es importante porque permite calcular gradientes, lo que es crucial para el **entrenamiento** de la red neuronal mediante técnicas de optimización como el descenso de gradiente.`
            ,
            type: 'single'
        },
        {
            id: 'Lote35',
            question: '¿Cómo afecta la monotonía de una función de activación al entrenamiento?',
            options: [
                'Hace que el entrenamiento sea más lento',
                'Aumenta la cantidad de datos necesarios',
                'Permite garantizar una función convexa, en redes de una sola capa',
                'Hace que la red neuronal sea más lineal',
            ],
            correctAnswer: 2,
            explanation: `La **monotonía** de una función de activación ayuda a garantizar una **función convexa** en redes de una sola capa, lo que facilita la optimización.`
            ,
            type: 'single'
        },
        {
            id: 'Lote36',
            question: '¿Cuál es la función de activación más recomendada para la capa oculta en redes profundas?',
            options: [
                'Softmax',
                'Sigmoide',
                'ReLU',
                'Softplus',
            ],
            correctAnswer: 2,
            explanation: `La función **ReLU** es la más recomendada para las capas ocultas de redes profundas debido a su eficiencia y capacidad para evitar el problema de la desaparición del gradiente.`
            ,
            type: 'single'
        },
        {
            id: 'Lote37',
            question: '¿Cuándo es recomendable usar la función sigmoide?',
            options: [
                'En redes profundas con muchas capas ocultas',
                'En clasificación multiclase',
                'En problemas de clasificación binaria, en la capa de salida',
                'En tareas de procesamiento de imágenes',
            ],
            correctAnswer: 2,
            explanation: `La **sigmoide** es especialmente útil en la capa de salida para **clasificación binaria**, ya que produce valores entre 0 y 1, lo que la hace adecuada para modelar probabilidades.`
            ,
            type: 'single'
        },
        {
            id: 'Lote38',
            question: '¿Cuál es una ventaja de tanh sobre la función sigmoide?',
            options: [
                'Tanh es más fácil de calcular',
                'Tanh tiene un rango centrado en 0, lo que puede mejorar la convergencia',
                'Tanh siempre mejora la precisión del modelo',
                'Tanh no sufre de desaparición del gradiente',
            ],
            correctAnswer: 1,
            explanation: `La principal ventaja de **tanh** es que tiene un **rango centrado en 0**, lo que puede mejorar la convergencia del modelo en comparación con la sigmoide.`
            ,
            type: 'single'
        },
        {
            id: 'Lote39',
            question: '¿Qué significa que una función de activación tenga un "rango de valores de salida finito"?',
            options: [
                'Que es una función completamente lineal',
                'Que siempre produce valores positivos',
                'Que sus valores de salida están acotados, dentro de un intervalo específico',
                'Que se puede aplicar solo a capas ocultas',
            ],
            correctAnswer: 2,
            explanation: `Cuando se dice que una función tiene un **rango de valores de salida finito**, significa que los valores de salida están limitados a un intervalo específico, como **(0,1)** o **(-1,1)**.`
            ,
            type: 'single'
        },
        {
            id: 'Lote40',
            question: '¿Cuál es la función de activación más usada cuando hay riesgo de neuronas muertas?',
            options: [
                'Sigmoide',
                'Softmax',
                'Tanh',
                'Leaky, ReLU',
            ],
            correctAnswer: 3,
            explanation: `**Leaky ReLU** es la función de activación más recomendada cuando hay riesgo de **neuronas muertas**, ya que permite valores negativos pequeños y evita que algunas neuronas dejen de actualizarse.`
            ,
            type: 'single'
        },
        {
            id: 'Lote41',
            question: '¿En qué capa de una red neuronal se suele usar una función de activación lineal?',
            options: [
                'En todas las capas',
                'En la capa, de salida',
                'En la primera capa oculta',
                'En ninguna siempre se usan funciones no lineales',
            ],
            correctAnswer: 1,
            explanation: `Las funciones de activación **lineales** se suelen usar en la **capa de salida**, especialmente en problemas de regresión.`
            ,
            type: 'single'
        },
        {
            id: 'Lote42',
            question: '¿Por qué ReLU es una función no lineal si x<0 se convierte en 0?',
            options: [
                'Porque es completamente simétrica',
                'Porque sus valores de salida son continuos',
                'Porque cambia la forma de los datos de entrada, de manera no lineal',
                'Porque su derivada es siempre positiva',
            ],
            correctAnswer: 2,
            explanation: `**ReLU** es una función no lineal porque cambia la forma de los datos de entrada **de manera no lineal**, ya que para valores negativos la salida es 0 y para valores positivos es proporcional a la entrada.`
            ,
            type: 'single'
        },
        {
            id: 'Lote43',
            question: '¿Qué sucede si se incrementa excesivamente el tamaño del lote (Batch_Size)?',
            options: [
                'Se evitarán problemas de sobreajuste',
                'Se reducirá el error del modelo automáticamente',
                'La memoria puede no ser suficiente, para procesarlo',
                'El entrenamiento siempre será más rápido',
            ],
            correctAnswer: 2,
            explanation: `Si el tamaño del lote es demasiado grande, **la memoria** puede no ser suficiente para procesarlo, lo que puede generar problemas en la ejecución del modelo.`
            ,
            type: 'single'
        },
        {
            id: 'Lote44',
            question: '¿Cuál es el principal beneficio de normalizar los datos de entrada en una red neuronal?',
            options: [
                'Reduce el número de neuronas necesarias',
                'Hace que el modelo sea más fácil de interpretar',
                'Acelera el entrenamiento, y mejora la estabilidad del modelo',
                'Elimina la necesidad de funciones de activación',
            ],
            correctAnswer: 2,
            explanation: `La **normalización** de los datos de entrada **acelera el entrenamiento** y mejora la estabilidad del modelo, evitando que los gradientes se disparen o disminuyan demasiado rápido.`
            ,
            type: 'single'
        },
        {
            id: 'Lote45',
            question: '¿Qué efecto tiene la normalización en la convergencia del entrenamiento?',
            options: [
                'Reduce la cantidad de capas necesarias',
                'Aumenta la velocidad de convergencia y evita valores, extremos en los pesos',
                'Hace que los datos sean completamente lineales',
                'Elimina la necesidad de funciones de activación',
            ],
            correctAnswer: 1,
            explanation: `La **normalización** mejora la convergencia al **aumentar la velocidad** y evitar **valores extremos en los pesos**, lo que hace que el modelo converja de manera más eficiente.`
            ,
            type: 'single'
        },
        {
            id: 'Lote46',
            question: '¿Por qué es importante la normalización de datos en Machine Learning?',
            options: [
                'Para reducir el número de neuronas en la red neuronal.',
                'Para evitar problemas numéricos y mejorar la convergencia.',
                'Porque todos los modelos requieren normalización obligatoriamente.',
                'Para eliminar valores atípicos de la base de datos.',
            ],
            correctAnswer: 1,
            explanation: `La **normalización** es importante para evitar problemas numéricos, mejorar la **convergencia** y asegurar que las características con diferentes escalas no afecten el rendimiento del modelo.`
            ,
            type: 'single'
        },
        {
            id: 'Lote47',
            question: '¿Cuál de las siguientes es una razón para normalizar los datos?',
            options: [
                'Evitar la saturación de neuronas.',
                'Reducir la cantidad de memoria RAM utilizada.',
                'Mejorar la interpretabilidad de los modelos.',
                'Aumentar la cantidad de datos en el conjunto de entrenamiento.',
            ],
            correctAnswer: 0,
            explanation: `La **normalización** ayuda a **evitar la saturación de neuronas**, asegurando que los valores de entrada estén en un rango adecuado para las funciones de activación.`
            ,
            type: 'single'
        },
        {
            id: 'Lote48',
            question: '¿Cómo afecta la normalización a la velocidad de convergencia de un modelo?',
            options: [
                'No afecta en nada.',
                'Puede hacer que el modelo nunca converja.',
                'Acelera la convergencia reduciendo el zigzag del descenso de gradiente.',
                'Hace que el modelo se vuelva más complejo.',
            ],
            correctAnswer: 2,
            explanation: `La **normalización** ayuda a **acelerar la convergencia** al reducir el **zigzag** en el descenso de gradiente y mejorar la estabilidad del proceso de optimización.`
            ,
            type: 'single'
        },
        {
            id: 'Lote49',
            question: '¿Qué sucede si los datos no se normalizan antes del entrenamiento?',
            options: [
                'El modelo será incapaz de aprender.',
                'Se puede generar un sesgo en la optimización.',
                'El modelo mejorará su capacidad de generalización.',
                'No hay impacto en el rendimiento del modelo.',
            ],
            correctAnswer: 1,
            explanation: `Si los datos **no se normalizan**, se pueden generar **sesgos** en la optimización, lo que puede afectar el rendimiento del modelo y su capacidad para aprender correctamente.`
            ,
            type: 'single'
        },
        {
            id: 'Lote50',
            question: '¿Cuál de los siguientes métodos es un tipo de normalización?',
            options: [
                'Regularización L1.',
                'Normalización por puntuación z (z-score).',
                'Descenso de gradiente estocástico.',
                'Algoritmo de agrupamiento K-means.',
            ],
            correctAnswer: 1,
            explanation: `La **normalización por puntuación z (z-score)** es un tipo de normalización que transforma los datos para que tengan media 0 y desviación estándar 1.`
            ,
            type: 'single'
        },
        {
            id: 'Lote51',
            question: '¿Qué significa la normalización por desviación estándar?',
            options: [
                'Ajustar los valores para que tengan media 0 y desviación estándar 1.',
                'Ajustar los valores a un rango entre 0 y 1.',
                'Aplicar una transformación logarítmica.',
                'Asegurar que los datos sean unimodales.',
            ],
            correctAnswer: 0,
            explanation: `La **normalización por desviación estándar** ajusta los datos para que tengan una **media de 0** y una **desviación estándar de 1**, lo que facilita el entrenamiento de modelos.`
            ,
            type: 'single'
        },
        {
            id: 'Lote52',
            question: '¿Cuándo es especialmente necesaria la normalización?',
            options: [
                'Cuando las características tienen escalas muy diferentes.',
                'Solo en redes neuronales profundas.',
                'Cuando se usa regresión lineal.',
                'Cuando se trabaja con datos categóricos.',
            ],
            correctAnswer: 0,
            explanation: `La **normalización** es especialmente necesaria cuando las **características tienen escalas muy diferentes**, ya que puede afectar el rendimiento del modelo.`
            ,
            type: 'single'
        },
        {
            id: 'Lote53',
            question: '¿Qué es la Normalización de Respuesta Local (Local Response Normalization, LRN)?',
            options: [
                'Una técnica para mejorar la interpretabilidad del modelo.',
                'Un mecanismo que ayuda a la competencia entre neuronas locales.',
                'Un algoritmo de agrupamiento.',
                'Un tipo de regularización para redes recurrentes.',
            ],
            correctAnswer: 1,
            explanation: `La **LRN** es un mecanismo que ayuda a la **competencia entre neuronas locales**, y es útil en redes neuronales convolucionales.`
            ,
            type: 'single'
        },
        {
            id: 'Lote54',
            question: '¿Cuál es la ventaja principal de la Normalización por Lotes (Batch Normalization)?',
            options: [
                'Reduce la desaparición del gradiente y mejora la convergencia.',
                'Reduce el número de parámetros en el modelo.',
                'Convierte cualquier modelo en un modelo supervisado.',
                'Elimina la necesidad de normalizar los datos de entrada.',
            ],
            correctAnswer: 0,
            explanation: `La principal ventaja de **Batch Normalization** es que **reduce la desaparición del gradiente** y mejora la **convergencia** durante el entrenamiento.`
            ,
            type: 'single'
        },
        {
            id: 'Lote55',
            question: '¿Cuál es el principal problema que la Normalización por Lotes (Batch Normalization) soluciona?',
            options: [
                'Evita el sobreajuste en modelos pequeños.',
                'Mejora la interpretabilidad del modelo.',
                'Reduce la dependencia en la inicialización de parámetros.',
                'Aumenta la capacidad de la memoria de la GPU.',
            ],
            correctAnswer: 2,
            explanation: `La **Batch Normalization** ayuda a **reducir la dependencia** en la inicialización de parámetros, lo que facilita la convergencia y estabilidad del entrenamiento.`
            ,
            type: 'single'
        },
        {
            id: 'Lote56',
            question: '¿Cuál de las siguientes afirmaciones sobre la Normalización por Grupo (Group Normalization) es cierta?',
            options: [
                'Se aplica solo a redes convolucionales.',
                'No depende del tamaño del lote (batch).',
                'Es un tipo de regularización L1.',
                'Solo funciona en redes con capas recurrentes.',
            ],
            correctAnswer: 1,
            explanation: `A diferencia de **Batch Normalization**, **Group Normalization** no depende del tamaño del lote, lo que la hace útil en redes con tamaños de lote pequeños.`
            ,
            type: 'single'
        },
        {
            id: 'Lote57',
            question: '¿Cuál es la principal diferencia entre la Normalización de Pesos (Weight Normalization) y la Normalización por Lotes (Batch Normalization)?',
            options: [
                'BN normaliza las entradas, mientras que WN normaliza los pesos.',
                'BN es más rápida que WN.',
                'WN introduce menos ruido que BN.',
                'No hay diferencia, son el mismo concepto.',
            ],
            correctAnswer: 0,
            explanation: `La diferencia principal es que **Batch Normalization** normaliza las entradas, mientras que **Weight Normalization** normaliza los **pesos** del modelo.`
            ,
            type: 'single'
        },
        {
            id: 'Lote58',
            question: '¿Cuándo es preferible usar la Normalización de Pesos (Weight Normalization) sobre la Normalización por Lotes (Batch Normalization)?',
            options: [
                'En modelos con redes recurrentes.',
                'Cuando se usan grandes conjuntos de datos.',
                'Solo en modelos de clasificación de texto.',
                'No hay preferencia, ambos son equivalentes.',
            ],
            correctAnswer: 0,
            explanation: `**Weight Normalization** se prefiere en **redes recurrentes**, mientras que **Batch Normalization** es más adecuada para redes convolucionales.`
            ,
            type: 'single'
        },
        {
            id: 'Lote59',
            question: '¿Qué ventaja aporta el preentrenamiento en redes profundas?',
            options: [
                'Mejora la inicialización de parámetros.',
                'Evita la necesidad de normalización.',
                'Reduce el tamaño de los datos de entrada.',
                'Permite trabajar solo con datos categóricos.',
            ],
            correctAnswer: 0,
            explanation: `El **preentrenamiento** mejora la **inicialización de parámetros**, lo que permite que el modelo aprenda más rápido y con mayor precisión.`
            ,
            type: 'single'
        },
        {
            id: 'Lote60',
            question: '¿Cuál de los siguientes describe mejor el Ajuste Fino (Fine Tuning)?',
            options: [
                'Ajustar los parámetros de un modelo preentrenado a un nuevo conjunto de datos.',
                'Aplicar regularización L1 y L2 en la misma red.',
                'Reducir la cantidad de datos en el entrenamiento.',
                'Convertir datos no estructurados en estructurados.',
            ],
            correctAnswer: 0,
            explanation: `El **ajuste fino (Fine Tuning)** consiste en **ajustar los parámetros de un modelo preentrenado** para que funcione mejor en un conjunto de datos específico.`
            ,
            type: 'single'
        },
        {
            id: 'Lote61',
            question: '¿Cuál es la principal desventaja de la Normalización por Lotes (Batch Normalization)?',
            options: [
                'Introduce un costo computacional adicional.',
                'Solo funciona en redes recurrentes.',
                'No mejora la convergencia del modelo.',
                'No se puede aplicar en redes convolucionales.',
            ],
            correctAnswer: 0,
            explanation: `Una desventaja de **Batch Normalization** es que introduce un **costo computacional adicional**, lo que puede ser un inconveniente en ciertos casos.`
            ,
            type: 'single'
        },
        {
            id: 'Lote62',
            question: '¿Qué problema busca resolver la normalización en modelos de aprendizaje profundo?',
            options: [
                'La inestabilidad en la actualización de los pesos.',
                'La necesidad de aumentar el tamaño del conjunto de datos.',
                'La imposibilidad de entrenar redes con más de una capa oculta.',
                'La eliminación de ruido en los datos de entrada.',
            ],
            correctAnswer: 0,
            explanation: `La **normalización** ayuda a resolver el problema de la **inestabilidad en la actualización de los pesos**, lo que permite entrenar redes profundas de manera más efectiva.`
            ,
            type: 'single'
        },
        {
            id: 'Lote63',
            question: '¿Qué sucede si la normalización no se realiza correctamente en datos de entrada?',
            options: [
                'Puede afectar negativamente la capacidad del modelo para aprender patrones.',
                'Hace que el modelo se vuelva inmune al sobreajuste.',
                'No tiene ningún efecto en el modelo.',
                'El modelo se vuelve más rápido sin perder precisión.',
            ],
            correctAnswer: 0,
            explanation: `Si la **normalización** no se realiza correctamente, puede **afectar negativamente** la capacidad del modelo para aprender y generalizar patrones.`
            ,
            type: 'single'
        },
        {
            id: 'Lote64',
            question: '¿Qué hace la Normalización por Lotes (Batch Normalization) en cada mini-lote de datos?',
            options: [
                'Calcula la media y desviación estándar para normalizar los datos.',
                'Reduce automáticamente la cantidad de datos en el conjunto de entrenamiento.',
                'Convierte todas las características en datos categóricos.',
                'Evita la necesidad de optimización de hiperparámetros.',
            ],
            correctAnswer: 0,
            explanation: `La **Batch Normalization** calcula la **media y desviación estándar** de cada mini-lote de datos para normalizarlos antes de pasar a la siguiente capa.`
            ,
            type: 'single'
        },
        {
            id: 'Lote65',
            question: '¿Qué método de normalización es más efectivo para redes profundas con tamaños de lote muy pequeños?',
            options: [
                'Normalización por Capa (Layer Normalization).',
                'Normalización por Lotes (Batch Normalization).',
                'Escalado Min-Max (Min-Max Scaling).',
                'Normalización por puntuación z (Z-score Normalization).',
            ],
            correctAnswer: 0,
            explanation: `**Layer Normalization** es más efectiva para redes profundas con **tamaños de lote pequeños** porque no depende de la cantidad de datos en cada mini-lote.`
            ,
            type: 'single'
        },
        {
            id: 'Lote66',
            question: '¿Por qué la Normalización por Capa (Layer Normalization) es útil en modelos de aprendizaje profundo?',
            options: [
                'Porque normaliza las activaciones en cada capa de manera independiente.',
                'Porque reduce el tamaño del modelo.',
                'Porque elimina la necesidad de aprendizaje supervisado.',
                'Porque solo funciona en modelos de visión por computadora.',
            ],
            correctAnswer: 0,
            explanation: `La **Layer Normalization** es útil porque **normaliza las activaciones** dentro de cada capa de manera independiente, ayudando a la estabilidad y rendimiento en redes profundas.`
            ,
            type: 'single'
        },
        {
            id: 'Lote67',
            question: '¿Cuál de los siguientes métodos de normalización es más adecuado para Redes Generativas Adversarias (GANs)?',
            options: [
                'Normalización por Instancia (Instance Normalization).',
                'Normalización por Lotes (Batch Normalization).',
                'Escalado Min-Max (Min-Max Scaling).',
                'Normalización por puntuación z (Z-score Normalization).',
            ],
            correctAnswer: 0,
            explanation: `La **Normalización por Instancia (Instance Normalization)** es más adecuada para **Redes Generativas Adversarias (GANs)**, especialmente en tareas de estilo o transferencia de imagen.`
            ,
            type: 'single'
        },
        {
            id: 'Lote68',
            question: '¿Qué técnica de normalización ayuda a reducir el cambio de covariables (covariate shift) en redes neuronales?',
            options: [
                'Normalización por Lotes (Batch Normalization).',
                'Dropout.',
                'Aumento de Datos (Data Augmentation).',
                'Recorte de Gradiente (Gradient Clipping).',
            ],
            correctAnswer: 0,
            explanation: `La **Batch Normalization** ayuda a reducir el **cambio de covariables (covariate shift)** al normalizar las activaciones durante el entrenamiento.`
            ,
            type: 'single'
        },
        {
            id: 'Lote69',
            question: '¿Cómo afecta la normalización a los datos de entrada en modelos de aprendizaje profundo?',
            options: [
                'Evita que algunas características dominen el entrenamiento.',
                'Hace que la red neuronal requiera más capas.',
                'Solo impacta en la velocidad de inferencia, no en el entrenamiento.',
                'Hace que los modelos sean más propensos al sobreajuste.',
            ],
            correctAnswer: 0,
            explanation: `La normalización de los **datos de entrada** evita que algunas características dominen el entrenamiento y ayuda a que el modelo aprenda patrones de manera más equilibrada.`
            ,
            type: 'single'
        },
        {
            id: 'Lote70',
            question: '¿Qué hace la normalización por capa en una red neuronal?',
            options: [
                'Normaliza los valores de activación dentro de cada capa, en lugar de en el lote (batch).',
                'Reduce la cantidad de datos de entrada.',
                'Hace que el modelo sea más lento en inferencia.',
                'Solo se usa en modelos convolucionales.',
            ],
            correctAnswer: 0,
            explanation: `La **normalización por capa** normaliza las **activaciones dentro de cada capa**, lo que mejora la estabilidad en redes profundas.`
            ,
            type: 'single'
        },
        {
            id: 'Lote71',
            question: '¿Qué es la trampa de inicialización de desviación en redes neuronales?',
            options: [
                'Un método para optimizar el aprendizaje',
                'Un problema causado por inicializar todos los pesos en cero',
                'Una técnica para mejorar la simetría de la red',
                'Un procedimiento para aumentar la velocidad de entrenamiento',
            ],
            correctAnswer: 1,
            explanation: `La **trampa de inicialización de desviación** ocurre cuando **todos los pesos se inicializan en cero**, lo que impide que la red aprenda adecuadamente.`
            ,
            type: 'single'
        },
        {
            id: 'Lote72',
            question: '¿Por qué la inicialización con un mismo valor en todas las neuronas no es recomendable?',
            options: [
                'Porque causa una alta varianza en los pesos',
                'Porque impide la simetría de la red',
                'Porque todas las neuronas calcularán salidas idénticas',
                'Porque acelera demasiado el aprendizaje',
            ],
            correctAnswer: 2,
            explanation: `Inicializar todos los pesos con el mismo valor hace que todas las neuronas generen las mismas salidas, **impidiendo la diversidad de aprendizaje**.`
            ,
            type: 'single'
        },
        {
            id: 'Lote73',
            question: '¿Cómo afecta la simetría en la actualización de pesos en una red neuronal?',
            options: [
                'Hace que los pesos evolucionen de manera idéntica en todas las neuronas',
                'Mejora la capacidad de aprendizaje de la red',
                'Facilita la convergencia rápida',
                'No tiene ningún efecto en la red neuronal',
            ],
            correctAnswer: 0,
            explanation: `La **simetría** en la inicialización de pesos puede hacer que los **pesos evolucionen de manera idéntica** en todas las neuronas, lo que impide el aprendizaje adecuado.`
            ,
            type: 'single'
        },
        {
            id: 'Lote74',
            question: '¿Cuál es una solución común para evitar la simetría en la inicialización de pesos?',
            options: [
                'Inicializar los pesos con valores negativos',
                'Usar pesos aleatorios pequeños',
                'Asignar pesos basados en la función de activación',
                'Utilizar solo valores enteros',
            ],
            correctAnswer: 1,
            explanation: `Para evitar la **simetría**, se suelen usar **pesos aleatorios pequeños**, lo que asegura que las neuronas aprendan patrones diferentes.`
            ,
            type: 'single'
        },
        {
            id: 'Lote75',
            question: '¿Por qué no se recomienda inicializar los pesos con valores demasiado pequeños?',
            options: [
                'Puede causar el problema de la desaparición del gradiente',
                'Hace que la red neuronal aprenda más rápido',
                'Aumenta la estabilidad del entrenamiento',
                'Facilita la retropropagación',
            ],
            correctAnswer: 0,
            explanation: `Inicializar los pesos con valores demasiado pequeños puede **causar la desaparición del gradiente**, lo que ralentiza o impide el aprendizaje.`
            ,
            type: 'single'
        },
        {
            id: 'Lote76',
            question: '¿Cuál es el propósito de escalar los pesos de las neuronas?',
            options: [
                'Evitar la explosión de gradientes.',
                'Garantizar que la distribución de salida tenga una varianza constante.',
                'Reducir la cantidad de cálculos necesarios en la propagación hacia adelante.',
                'Asegurar que los pesos iniciales sean siempre positivos.',
            ],
            correctAnswer: 1,
            explanation: `El propósito de **escalar los pesos** es **garantizar que la distribución de salida tenga una varianza constante**, lo que mejora el entrenamiento.`
            ,
            type: 'single'
        },
        {
            id: 'Lote77',
            question: '¿En qué consiste la inicialización dispersa (Sparse Initialization)?',
            options: [
                'Asignar valores aleatorios pequeños a todos los pesos de la red.',
                'Inicializar todos los pesos en cero y conectar aleatoriamente cada neurona a un subconjunto de neuronas en la capa anterior.',
                'Usar la distribución uniforme en lugar de la normal para inicializar los pesos.',
                'Aplicar una transformación no lineal a los pesos después de la inicialización.',
            ],
            correctAnswer: 1,
            explanation: `La **inicialización dispersa** implica inicializar los **pesos en cero** y conectar aleatoriamente cada neurona a un subconjunto de neuronas en la capa anterior.`
            ,
            type: 'single'
        },
        {
            id: 'Lote78',
            question: '¿Cuál es una posible ventaja de inicializar el sesgo (bias) con un pequeño valor constante en redes con ReLU?',
            options: [
                'Evitar la saturación de los valores de activación.',
                'Asegurar que todas las unidades ReLU se activen inicialmente y propaguen gradientes.',
                'Reducir el tiempo de entrenamiento en redes profundas.',
                'Mantener la simetría en la inicialización de los pesos.',
            ],
            correctAnswer: 1,
            explanation: `Inicializar el **sesgo con un valor constante pequeño** ayuda a **activar todas las unidades ReLU** desde el principio, asegurando que los gradientes se propaguen adecuadamente.`
            ,
            type: 'single'
        },
        {
            id: 'Lote79',
            question: '¿Cuál es un posible problema de inicializar todos los pesos en cero?',
            options: [
                'Los gradientes se vuelven inestables.',
                'No se rompe la simetría y todas las neuronas aprenderán lo mismo.',
                'Se reduce la capacidad de generalización de la red.',
                'Se incrementa el tiempo de convergencia de los pesos.',
            ],
            correctAnswer: 1,
            explanation: `Inicializar todos los pesos en cero **no rompe la simetría**, lo que hace que todas las neuronas aprendan lo mismo y no contribuyan de manera significativa al aprendizaje.`
            ,
            type: 'single'
        },
        {
            id: 'Lote80',
            question: '¿Por qué la inicialización de los pesos es crucial en redes neuronales profundas?',
            options: [
                'Para evitar problemas de gradientes explosivos o gradientes que desaparecen.',
                'Para reducir el número de parámetros entrenables en la red.',
                'Para hacer la implementación más eficiente en términos de memoria.',
                'Para garantizar que los pesos permanezcan constantes durante el entrenamiento.',
            ],
            correctAnswer: 0,
            explanation: `La **inicialización adecuada de los pesos** es crucial para evitar problemas como los **gradientes explosivos o que desaparecen**, que afectan negativamente el entrenamiento.`
            ,
            type: 'single'
        },
        {
            id: 'Lote81',
            question: '¿Cuál es el propósito principal de la función Softmax en problemas de clasificación?',
            options: [
                'Convertir las entradas en valores binarios (0 o 1).',
                'Normalizar las salidas para que sumen 1 y representen una distribución de probabilidad.',
                'Minimizar el error cuadrático medio en problemas de regresión.',
                'Aumentar la complejidad del modelo para mejorar el ajuste.',
            ],
            correctAnswer: 1,
            explanation: `La función **Softmax** **normaliza las salidas** para que sumen 1, permitiendo que representen una **distribución de probabilidad** en problemas de clasificación.`
            ,
            type: 'single'
        },
        {
            id: 'Lote82',
            question: '¿Cuál es el propósito principal de la codificación One-Hot (One Hot Encoding) en el aprendizaje automático?',
            options: [
                'Convertir valores categóricos en valores continuos para mejorar la precisión del modelo.',
                'Representar características categóricas como vectores binarios para que el clasificador pueda procesarlas correctamente.',
                'Reducir la dimensionalidad de los datos para optimizar el tiempo de entrenamiento.',
                'Ordenar las características categóricas de manera jerárquica para facilitar su interpretación.',
            ],
            correctAnswer: 1,
            explanation: `La **codificación One-Hot** convierte **valores categóricos** en vectores **binarios**, donde solo un bit está activo, facilitando que el clasificador los procese correctamente.`
            ,
            type: 'single'
        },
        {
            id: 'Lote83',
            question: '¿Cuál de los siguientes optimizadores es ampliamente utilizado en el entrenamiento de modelos de aprendizaje automático?',
            options: [
                'tf.train.GradientDescentOptimizer',
                'tf.train.AdadeltaOptimizer',
                'tf.train.AdamOptimizer',
                'Todas las anteriores',
            ],
            correctAnswer: 3,
            explanation: `Optimización de **GradientDescent**, **Adadelta** y **Adam** son métodos comunes ampliamente utilizados en el entrenamiento de modelos.`
            ,
            type: 'single'
        },
        {
            id: 'Lote84',
            question: '¿Cuál es el propósito principal de derivar la función Softmax en el contexto de redes neuronales?',
            options: [
                'Calcular la probabilidad de cada clase en un problema de clasificación multiclase.',
                'Minimizar la función de pérdida mediante el cálculo del gradiente.',
                'Convertir las salidas de la red en valores binarios (0 o 1).',
                'Normalizar los datos de entrada para que tengan media cero y desviación estándar uno.',
            ],
            correctAnswer: 1,
            explanation: `Derivar **Softmax** en redes neuronales se utiliza para **calcular el gradiente** y minimizar la función de pérdida durante el entrenamiento.`
            ,
            type: 'single'
        },
        {
            id: 'Lote85',
            question: '¿Cuál de las siguientes afirmaciones es verdadera sobre la codificación One-Hot (One Hot Encoding)?',
            options: [
                'La codificación One-Hot asigna valores numéricos continuos a las categorías para mejorar la eficiencia del modelo.',
                'La codificación One-Hot convierte cada categoría en un vector binario donde solo un bit está activo (1) y los demás están inactivos (0).',
                'La codificación One-Hot reduce la dimensionalidad de los datos al eliminar características redundantes.',
                'La codificación One-Hot permite que los clasificadores interpreten las categorías como valores ordinales.',
            ],
            correctAnswer: 1,
            explanation: `La **codificación One-Hot** convierte cada categoría en un **vector binario**, con un solo bit activo, lo que facilita su uso en modelos de clasificación.`
            ,
            type: 'single'
        },
        {
            id: 'Lote86',
            question: '¿Cuál es una de las principales razones para utilizar la regularización en el aprendizaje profundo?',
            options: [
                'Aumentar la complejidad del modelo',
                'Reducir el costo de entrenamiento',
                'Evitar el sobreajuste (alta varianza)',
                'Eliminar la necesidad de datos de entrenamiento',
            ],
            correctAnswer: 2,
            explanation: `La **regularización** se utiliza principalmente para **evitar el sobreajuste**, lo cual mejora la capacidad de generalización del modelo.`
            ,
            type: 'single'
        },
        {
            id: 'Lote87',
            question: '¿Qué técnica de regularización elimina aleatoriamente unidades neuronales durante el entrenamiento?',
            options: [
                'Regularización L1',
                'Regularización L2',
                'Dropout (abandono)',
                'Normalización por lotes',
            ],
            correctAnswer: 2,
            explanation: `La técnica de **Dropout** elimina aleatoriamente **unidades neuronales** durante el entrenamiento, lo que ayuda a evitar el sobreajuste.`
            ,
            type: 'single'
        },
        {
            id: 'Lote88',
            question: '¿Qué efecto tiene el dropout en los pesos de la red neuronal?',
            options: [
                'Los pesos aumentan exponencialmente',
                'Los pesos se comprimen y distribuyen',
                'Los pesos se eliminan permanentemente',
                'Los pesos se vuelven aleatorios',
            ],
            correctAnswer: 1,
            explanation: `Durante el **dropout**, los **pesos se comprimen y distribuyen** de manera diferente, lo que ayuda a reducir el sobreajuste.`
            ,
            type: 'single'
        },
        {
            id: 'Lote89',
            question: '¿Cuál es una desventaja principal del uso del dropout?',
            options: [
                'Aumenta el tiempo de entrenamiento',
                'La función de costo J ya no está bien definida',
                'Reduce la precisión del modelo',
                'Requiere más datos de entrenamiento',
            ],
            correctAnswer: 1,
            explanation: `Una desventaja del **dropout** es que **la función de costo J** se vuelve más difícil de definir debido a las unidades eliminadas.`
            ,
            type: 'single'
        },
        {
            id: 'Lote90',
            question: '¿Qué técnica se recomienda combinar con el dropout para mejorar su efectividad?',
            options: [
                'Regularización L1',
                'Normalización máxima',
                'Aumento de la tasa de aprendizaje',
                'Reducción del número de capas',
            ],
            correctAnswer: 1,
            explanation: `Combinar el **dropout** con **normalización máxima** puede mejorar la efectividad al reducir la dependencia entre las unidades.`
            ,
            type: 'single'
        },
        {
            id: 'Lote91',
            question: '¿A qué se refiere el término “Cambio de covariable interno” (ICS) en redes neuronales profundas?',
            options: [
                'A la transformación de la imagen a diferentes escalas',
                'A la implementación de técnicas de recorte aleatorio para evitar el sobreajuste',
                'A la aplicación de ruido gaussiano en cada capa para mejorar la robustez',
                'A la variación en la distribución de datos de entrada de cada capa provocada por la actualización de los parámetros de capas anteriores',
            ],
            correctAnswer: 3,
            explanation: `El **Cambio de Covariable Interno (ICS)** hace referencia a la **variación en la distribución de los datos de entrada** a medida que se actualizan los parámetros de capas anteriores.`
            ,
            type: 'single'
        },
        {
            id: 'Lote92',
            question: '¿Qué problema principal causa el Cambio de Covariable Interno (ICS) en redes neuronales profundas?',
            options: [
                'Provoca que la distribución de entrada de las capas superiores cambie drásticamente, llevando a regiones de saturación.',
                'Aumenta la velocidad de aprendizaje de las capas superiores.',
                'Mejora la consistencia en la distribución de datos entre capas.',
                'Reduce la necesidad de ajustar la tasa de aprendizaje.',
            ],
            correctAnswer: 0,
            explanation: `El **ICS** provoca que la **distribución de entrada de las capas superiores cambie drásticamente**, lo que puede llevar a regiones de saturación y dificultar el aprendizaje.`
            ,
            type: 'single'
        },
        {
            id: 'Lote93',
            question: '¿En qué se diferencia el Cambio de Covariable Interno (ICS) del cambio de covariable clásico en aprendizaje automático?',
            options: [
                'El ICS ocurre entre dominios, mientras que el cambio clásico ocurre entre capas de la red.',
                'El ICS solo afecta a redes neuronales superficiales.',
                'El ICS se refiere a cambios en la distribución de entrada entre capas de la red, mientras que el cambio clásico implica diferencias entre dominios.',
                'El cambio clásico se resuelve con técnicas de ampliación de datos.',
            ],
            correctAnswer: 2,
            explanation: `El **ICS** se refiere a **cambios en la distribución de entrada** entre capas de la red, mientras que el cambio clásico implica diferencias en los dominios de los datos.`
            ,
            type: 'single'
        },
        {
            id: 'Lote94',
            question: '¿Qué define al Cambio de Covariable Interno (ICS)?',
            options: [
                'Inconsistencia en la distribución de datos entre el dominio de origen y el de destino.',
                'Cambio en la distribución de entrada de una capa debido a actualizaciones de parámetros en capas inferiores.',
                'Fallos en la inicialización de los pesos de la red.',
                'Ruido introducido por técnicas de ampliación de datos.',
            ],
            correctAnswer: 1,
            explanation: `El **ICS** se refiere al **cambio en la distribución de entrada** de una capa debido a las **actualizaciones de los parámetros en capas inferiores**.`
            ,
            type: 'single'
        },
        {
            id: 'Lote95',
            question: '¿Cuál es una de las razones principales por las que es difícil entrenar modelos de redes neuronales profundas?',
            options: [
                'La alta demanda computacional en la etapa de inferencia',
                'La falta de técnicas efectivas de data argumentation',
                'La presencia del fenómeno conocido como cambio de covariable interno',
                'La sobreabundancia de datos etiquetados',
            ],
            correctAnswer: 2,
            explanation: `Una de las principales razones para que sea difícil entrenar redes neuronales profundas es la **presencia del cambio de covariable interno (ICS)**, que afecta la propagación del gradiente.`
            ,
            type: 'single'
        },
        {
            id: 'Lote96',
            question: '¿Qué es el "dropout" en redes neuronales?',
            options: [
                'Una técnica para eliminar funciones de activación innecesarias',
                'Un método para reducir el tamaño de la red neuronal',
                'Una técnica de regularización que, desactiva aleatoriamente neuronas durante el entrenamiento',
                'Un algoritmo de optimización para redes neuronales',
            ],
            correctAnswer: 2,
            explanation: `El **dropout** es una **técnica de regularización** que **desactiva aleatoriamente neuronas** durante el entrenamiento para prevenir el sobreajuste.`
            ,
            type: 'single'
        },
        {
            id: 'Lote97',
            question: '¿Cuál es el propósito de la función de pérdida (loss function) en el entrenamiento de redes neuronales?',
            options: [
                'Mejorar la velocidad de la red',
                'Calcular la precisión de la red neuronal',
                'Medir la diferencia entre, la predicción del modelo y el valor real',
                'Ajustar automáticamente la arquitectura de la red',
            ],
            correctAnswer: 2,
            explanation: `La **función de pérdida** mide la **diferencia entre la predicción** del modelo y el valor real, permitiendo la optimización durante el entrenamiento.`
            ,
            type: 'single'
        },
        {
            id: 'Lote98',
            question: '¿Qué es el "overfitting" en el contexto de redes neuronales?',
            options: [
                'Cuando la red tiene demasiados datos de entrenamiento',
                'Cuando la red aprende patrones específicos del conjunto de datos, pero falla en generalizar',
                'Cuando la red no tiene suficientes neuronas para aprender correctamente',
                'Cuando el modelo converge demasiado rápido',
            ],
            correctAnswer: 1,
            explanation: `El **overfitting** ocurre cuando el modelo **aprende patrones específicos** del conjunto de datos, pero **no generaliza** bien a nuevos datos.`
            ,
            type: 'single'
        },
        {
            id: 'Lote99',
            question: '¿Cuál de los siguientes optimizadores se usa comúnmente en redes neuronales profundas?',
            options: [
                'Gradient Boosting',
                'Adam',
                'K-Nearest Neighbors',
                'Decision Tree',
            ],
            correctAnswer: 1,
            explanation: `El **optimizador Adam** es ampliamente utilizado en el entrenamiento de redes neuronales profundas debido a su eficiencia y convergencia rápida.`
            ,
            type: 'single'
        },
        {
            id: 'Lote100',
            question: '¿Qué ventaja tiene el uso de redes neuronales convolucionales (CNN) en el procesamiento de imágenes?',
            options: [
                'Requieren menos datos de entrenamiento que otros modelos',
                'Son más rápidas para datos tabulares',
                'Capturan patrones espaciales, y características locales de las imágenes',
                'Solo funcionan con imágenes en blanco y negro',
            ],
            correctAnswer: 2,
            explanation: `Las **redes neuronales convolucionales (CNN)** son especialmente efectivas para **capturar patrones espaciales** y características locales en imágenes.`
            ,
            type: 'single'
        }                          
    ]
};