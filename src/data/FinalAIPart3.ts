import { QuizCategory } from '../types/quiz';

export const FinalAIPart3: QuizCategory = {
    id: 'Final-AI-Part2',
    title: 'Final AI Quiz - Part 2',
    description: 'Primera parte del cuestionario final de Inteligencia Artificial',
    icon: 'BrainCircuit',
    color: 'indigo',
    questions: [
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
        }
    ]
}