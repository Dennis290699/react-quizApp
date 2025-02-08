import { QuizCategory } from '../types/quiz';

export const FinalAIPart2: QuizCategory = {
    id: 'Final-AI-Part2',
    title: 'Final AI Quiz - Part 2',
    description: 'Primera parte del cuestionario final de Inteligencia Artificial',
    icon: 'BrainCircuit',
    color: 'indigo',
    questions: [
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
        }
    ]
}