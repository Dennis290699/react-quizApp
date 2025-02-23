import { QuizCategory } from '../types/quiz';

export const odontoPart2: QuizCategory = {
    id: 'odontoPart2',
    title: 'Parte 2',
    description: 'Evalúa tus conocimientos sobre los conceptos básicos de metodología.',
    icon: 'PencilRuler',
    color: 'indigo',
    questions: [
        {
            id: "donto31",
            question: "¿Cuál de las siguientes afirmaciones es correcta sobre la variable independiente?",
            options: [
                "No se puede modificar durante un experimento",
                "Se le conoce también como variable de respuesta",
                "Es aquella que el investigador manipula para observar su efecto."
            ],
            correctAnswer: 2,
            explanation: "La variable independiente es manipulada por el investigador.",
            type: "single",
        },
        {
            id: "donto32",
            question: "La variable independiente también es conocida como variable de ________, ________ o ________, ya que es manipulada por el investigador.",
            options: [
                "respuesta, salida, dependiente",
                "estímulo, entrada, input.",
                "control, intermedia, confusión"
            ],
            correctAnswer: 1,
            explanation: "La variable independiente es de estímulo, entrada, o input.",
            type: "single",
        },
        {
            id: "donto33",
            question: "¿Qué establece la Declaración de Helsinki de la Asociación Médica Mundial (AMM)?",
            options: [
                "Normas éticas para la investigación médica en seres humanos, incluyendo material humano e información identificable.",
                "Regulaciones sobre la práctica clínica en hospitales y consultorios",
                "Directrices exclusivas para la experimentación con animales"
            ],
            correctAnswer: 0,
            explanation: "La Declaración de Helsinki establece normas éticas para la investigación médica en humanos.",
            type: "single",
        },
        {
            id: "donto34",
            question: "En la investigación médica, ¿cuál es el deber principal del médico respecto a los participantes?",
            options: [
                "Garantizar únicamente la validez científica del estudio",
                "Proteger la vida, la salud, la dignidad, la integridad y los derechos de los participantes.",
                "Asegurar que los resultados sean publicados sin importar el impacto en los sujetos de estudio"
            ],
            correctAnswer: 1,
            explanation: "El deber principal es proteger la vida, salud y derechos de los participantes.",
            type: "single",
        },
        {
            id: "donto35",
            question: "¿Cuándo puede un médico combinar la investigación médica con la atención médica?",
            options: [
                "Cuando la investigación tenga un valor potencial preventivo, diagnóstico o terapéutico y no afecte negativamente la salud del paciente.",
                "Siempre que el médico lo considere necesario sin justificación adicional",
                "Solo en casos de enfermedades incurables, sin importar los riesgos para el paciente"
            ],
            correctAnswer: 0,
            explanation: "Solo se combina cuando hay valor potencial y no afecta negativamente al paciente.",
            type: "single",
        },
        {
            id: "donto36",
            question: "¿En qué se caracteriza a los estudios ecológicos en epidemiología?",
            options: [
                "Analizan datos individuales de cada persona en una población",
                "Se enfocan en la relación entre exposiciones y resultados a nivel grupal.",
                "Son estudios experimentales con control y aleatorización"
            ],
            correctAnswer: 1,
            explanation: "Los estudios ecológicos se enfocan en relaciones a nivel grupal.",
            type: "single",
        },
        {
            id: "donto37",
            question: "¿Cuál de las siguientes es una desventaja de los estudios ecológicos?",
            options: [
                "Permiten analizar datos a gran escala",
                "Son rápidos y económicos",
                "No pueden establecer causalidad directa."
            ],
            correctAnswer: 2,
            explanation: "Los estudios ecológicos no establecen causalidad directa.",
            type: "single",
        },
        {
            id: "donto38",
            question: "¿Cómo pueden los estudios ecológicos ser útiles en salud pública?",
            options: [
                "Permiten identificar patrones y tendencias en grandes poblaciones.",
                "Son el único método para demostrar relaciones de causa y efecto",
                "Se utilizan exclusivamente para realizar experimentos en laboratorios"
            ],
            correctAnswer: 0,
            explanation: "Son útiles para identificar patrones en grandes poblaciones.",
            type: "single",
        },
        {
            id: "donto39",
            question: "¿Qué es la falacia ecológica?",
            options: [
                "Un error que ocurre cuando se aplican asociaciones grupales a individuos.",
                "Un tipo de estudio que analiza datos ambientales",
                "Un sesgo que afecta solo a los estudios experimentales"
            ],
            correctAnswer: 0,
            explanation: "La falacia ecológica es aplicar asociaciones grupales a individuos.",
            type: "single",
        },
        {
            id: "donto40",
            question: "¿Cuál es el principal objetivo del presente Convenio de Oviedo?",
            options: [
                "Promover el desarrollo de nuevas tecnologías médicas sin restricciones",
                "Proteger la dignidad, identidad e integridad del ser humano en relación con la biología y la medicina.",
                "Regular exclusivamente la investigación científica en laboratorios"
            ],
            correctAnswer: 1,
            explanation: "El Convenio de Oviedo protege la dignidad humana en relación con la biología y la medicina.",
            type: "single",
        },
        {
            id: "donto41",
            question: "¿Qué condición es necesaria para realizar una intervención en el ámbito de la sanidad según el texto?",
            options: [
                "Que el médico tome la decisión sin necesidad de consultar al paciente",
                "Que la persona afectada dé su libre e inequívoco consentimiento después de recibir información adecuada.",
                "Que la intervención sea aprobada únicamente por las autoridades sanitarias"
            ],
            correctAnswer: 1,
            explanation: "Se requiere el consentimiento libre e inequívoco del paciente.",
            type: "single",
        },
        {
            id: "donto42",
            question: "¿En qué condiciones se pueden realizar pruebas predictivas de enfermedades genéticas según el texto?",
            options: [
                "Solo con fines médicos o de investigación médica y con asesoramiento genético adecuado.",
                "Para cualquier propósito, siempre que el paciente lo solicite",
                "Exclusivamente en estudios científicos sin necesidad de asesoramiento genético"
            ],
            correctAnswer: 0,
            explanation: "Solo con fines médicos o de investigación y asesoramiento genético.",
            type: "single",
        },
        {
            id: "donto43",
            question: "Según Carlos Coronel-Carvajal, ¿cómo se definen las variables cuantitativas?",
            options: [
                "Son características que solo pueden describirse cualitativamente, sin medición numérica",
                "Son propiedades del individuo u objeto que pueden medirse numéricamente.",
                "Son propiedades que no pueden expresarse en números y solo se representan con categorías"
            ],
            correctAnswer: 1,
            explanation: "Las variables cuantitativas se miden numéricamente.",
            type: "single",
        },
        {
            id: "donto44",
            question: "¿Cuál es la principal diferencia entre las variables discretas y continuas?",
            options: [
                "Las variables discretas solo pueden tomar valores enteros y finitos, mientras que las continuas pueden tomar cualquier valor dentro de un rango, incluyendo decimales.",
                "Las variables continuas solo pueden tomar valores enteros, mientras que las discretas pueden tomar valores con decimales",
                "No existe diferencia, ambas pueden tomar cualquier tipo de valor sin restricciones"
            ],
            correctAnswer: 0,
            explanation: "Discretas: valores enteros; continuas: cualquier valor en un rango.",
            type: "single",
        },
        {
            id: "donto45",
            question: "¿Para qué se utilizan las variables cuantitativas en el análisis de datos?",
            options: [
                "Para crear modelos matemáticos que explican relaciones entre variables.",
                "Solo para clasificar objetos sin necesidad de medición numérica",
                "Para representar características subjetivas sin posibilidad de medición"
            ],
            correctAnswer: 0,
            explanation: "Se usan para crear modelos matemáticos y explicar relaciones.",
            type: "single",
        },
        {
            id: "donto46",
            question: "¿Cómo pueden representarse gráficamente las variables cuantitativas?",
            options: [
                "Solo mediante tablas de datos sin necesidad de gráficos",
                "A través de histogramas, diagramas de dispersión y gráficos de líneas, permitiendo visualizar la distribución de los datos y patrones.",
                "Únicamente mediante gráficos de sectores o diagramas de Venn"
            ],
            correctAnswer: 1,
            explanation: "Histogramas, diagramas de dispersión y gráficos de líneas.",
            type: "single",
        },
        {
            id: "donto47",
            question: "Según el artículo 6 del Convenio de Oviedo, ¿en qué caso se puede realizar una intervención médica a una persona que no tenga capacidad para expresar su consentimiento?",
            options: [
                "Solo si el procedimiento es beneficioso para la sociedad en general",
                "Únicamente si la intervención redunda en su beneficio directo.",
                "Siempre que un médico lo considere necesario sin importar la opinión del paciente"
            ],
            correctAnswer: 1,
            explanation: "Solo si beneficia directamente a la persona.",
            type: "single",
        },
        {
            id: "donto48",
            question: "Según el artículo 7 del Convenio de Oviedo, ¿en qué caso se puede someter a una persona con un trastorno mental grave a una intervención sin su consentimiento?",
            options: [
                "Cuando lo soliciten sus familiares, sin necesidad de supervisión legal",
                "Solo si la falta de tratamiento puede causar un grave perjuicio a su salud y bajo condiciones de protección establecidas por la ley.",
                "Siempre que un médico lo considere necesario"
            ],
            correctAnswer: 1,
            explanation: "Si la falta de tratamiento perjudica gravemente su salud y bajo protección legal.",
            type: "single",
        },
        {
            id: "donto49",
            question: "Según el artículo 8 del Convenio de Oviedo, ¿cuándo se puede realizar una intervención médica sin obtener el consentimiento adecuado?",
            options: [
                "En cualquier situación en la que el médico lo considere oportuno",
                "Solo en casos de urgencia cuando la intervención sea indispensable para la salud de la persona afectada.",
                "Siempre que un familiar autorice el procedimiento, incluso si no es una emergencia"
            ],
            correctAnswer: 1,
            explanation: "Solo en casos de urgencia indispensable para la salud.",
            type: "single",
        },
        {
            id: "donto50",
            question: "¿A qué tipo de estudio hace referencia el siguiente concepto?: “Es un estudio que recolecta datos en un solo momento, en un tiempo único”",
            options: [
                "Estudio Longitudinal",
                "Estudio transversal.",
                "Estudio retrospectivo"
            ],
            correctAnswer: 1,
            explanation: "Estudio transversal.",
            type: "single",
        },
        {
            id: "donto51",
            question: "Según Hernández: ¿qué utilidad tiene los estudios transversales?",
            options: [
                "Planificación sanitaria",
                "Investigación de comportamientos humanos.",
                "Describir distribución de enfermedades"
            ],
            correctAnswer: 1,
            explanation: "Describir distribución de enfermedades.",
            type: "single",
        },
        {
            id: "donto52",
            question: "Complete: Marty menciona que los estudios tranversales son los mas utilizado en las_________, tanto por su facilidad para diseñarlos como por su relativo_______.",
            options: [
                "ciencias de la salud, bajo costo.",
                "ingenierías, alto costo",
                "ciencias físicas, bajo costo"
            ],
            correctAnswer: 0,
            explanation: "ciencias de la salud, bajo costo.",
            type: "single",
        },
        {
            id: "donto53",
            question: "Complete: Según Ochoa, los estudios transversales son:",
            options: [
                "Observacionales, descriptivos, simultáneos.",
                "Experimentales, clínicos",
                "Experimentales, simultáneos, longitudinales"
            ],
            correctAnswer: 0,
            explanation: "Observacionales, descriptivos, simultáneos.",
            type: "single",
        },
        {
            id: "donto54",
            question: "¿Qué nivel de riesgo presentan los estudios de investigación que contengan recopilación de datos a través de procedimientos utilizados rutinariamente en la práctica clínica como: exámenes clínicos, psicológicos, exámenes de ultrasonido, ¿electrocardiograma?",
            options: [
                "Riesgo alto",
                "Ningún riesgo",
                "Riesgo mínimo."
            ],
            correctAnswer: 2,
            explanation: "Riesgo mínimo.",
            type: "single",
        },
        {
            id: "donto55",
            question: "Seleccione. ¿Cuál de los siguientes es un requisito ético?",
            options: [
                "Analizar los contratos celebrados entre el patrocinador del estudio y los investigadores",
                "Respeto a la persona y comunidades, y su autonomía que participan en el estudio.",
                "Coherencia del diseño estadístico con los objetivos y/o hipótesis para el correcto placebo"
            ],
            correctAnswer: 1,
            explanation: "Respeto a la persona y comunidades, y su autonomía.",
            type: "single",
        },
        {
            id: "donto56",
            question: "Seleccione: El CEISH-UCE previo a la evaluación de un estudio de investigación observacional considerara para el efecto los siguientes aspectos:",
            options: [
                "Nivel de riesgo, población vulnerable, origen de datos, si el estudio se relaciona con una muestra biológica.",
                "Revisión de la enmienda, aspectos éticos, metodológicos",
                "Muestra biológica, origen de datos, naturaleza, objeto"
            ],
            correctAnswer: 0,
            explanation: "Nivel de riesgo, población vulnerable, origen de datos, muestra biológica.",
            type: "single",
        },
        {
            id: "donto57",
            question: "Según Hernández, ¿qué es la investigación clínica?",
            options: [
                "La investigación clínica es una rama de las ciencias de la salud que determina la seguridad y efectividad.",
                "Asegurar la evaluación independiente del estudio de investigación propuesto",
                "Analizar los contratos entre el promotor del estudio y los investigadores"
            ],
            correctAnswer: 0,
            explanation: "Determina la seguridad y efectividad en ciencias de la salud.",
            type: "single",
        },
        {
            id: "donto58",
            question: "¿Cuál de las siguientes opciones es una utilidad de la investigación clínica?",
            options: [
                "Puede ser utilizado para prevención, tratamiento, diagnóstico o aliviar síntomas de una enfermedad.",
                "Determinar la cantidad de medicamentos disponibles en una farmacia",
                "Evaluar la estética de los hospitales y centros médicos"
            ],
            correctAnswer: 0,
            explanation: "Prevención, tratamiento, diagnóstico o alivio de síntomas.",
            type: "single",
        },
        {
            id: "donto59",
            question: "Escoja el autor de la siguiente afirmación: Se utiliza para evaluar la eficacia de los tratamientos médicos y odontológicos, mejorando la atención sanitaria y los resultados de los pacientes.",
            options: [
                "García",
                "Martínez",
                "Hernández."
            ],
            correctAnswer: 2,
            explanation: "Hernández.",
            type: "single",
        },
        {
            id: "donto60",
            question: "Torres se refiere a esta como “la investigación realizada con pacientes para obtener información sobre la efectividad de tratamientos y procedimientos en salud”.",
            options: [
                "Investigación contemporánea",
                "Investigación clínica.",
                "Desarrollo de medicamentos sin pruebas prácticas en pacientes"
            ],
            correctAnswer: 1,
            explanation: "Investigación clínica.",
            type: "single",
        }
    ]
};