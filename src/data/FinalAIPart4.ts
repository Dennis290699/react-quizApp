import { QuizCategory } from '../types/quiz';

export const FinalAIPart4: QuizCategory = {
    id: 'Final-AI-Part2',
    title: 'Final AI Quiz - Part 2',
    description: 'Primera parte del cuestionario final de Inteligencia Artificial',
    icon: 'BrainCircuit',
    color: 'indigo',
    questions: [
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
}
