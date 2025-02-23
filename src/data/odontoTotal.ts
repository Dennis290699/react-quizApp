import { QuizCategory } from '../types/quiz';

export const odontoTotal: QuizCategory = {
    id: 'odontoTotal',
    title: 'Odonto Total',
    description: 'Evalúa tus conocimientos sobre los conceptos básicos de metodología.',
    icon: 'PencilRuler',
    color: 'indigo',
    questions: [
        {
            id: "donto1",
            question: "¿Cuál es el papel del guía en los estudios guiados?",
            options: [
                "Ofrecer instrucciones claras",
                "Establecer metas y objetivos",
                "Todas las anteriores."
            ],
            correctAnswer: 2,
            explanation: "El guía proporciona instrucciones claras y establece metas y objetivos para los estudios guiados.",
            type: "single",
        },
        {
            id: "donto2",
            question: "¿Qué significa la autonomía en el contexto de los estudios guiados?",
            options: [
                "El guía proporciona dirección y apoyo",
                "Los estudiantes son responsables de gestionar su propio aprendizaje.",
                "El guía aborda el material de estudio"
            ],
            correctAnswer: 1,
            explanation: "La autonomía en los estudios guiados significa que los estudiantes son responsables de gestionar su propio aprendizaje.",
            type: "single",
        },
        {
            id: "donto3",
            question: "¿Cómo se personalizan los estudios guiados?",
            options: [
                "Adaptando el proceso de enseñanza a las necesidades y características individuales",
                "Proporcionando recursos y estrategias específicas que faciliten el aprendizaje",
                "Todas las anteriores."
            ],
            correctAnswer: 2,
            explanation: "Los estudios guiados se personalizan adaptando el proceso de enseñanza y proporcionando recursos específicos.",
            type: "single",
        },
        {
            id: "donto4",
            question: "¿Qué beneficio ofrece la metodología de estudios guiados?",
            options: [
                "Intercambio de ideas",
                "Aprendizaje activo con desarrollo de habilidades colaborativas.",
                "Proporcionar dirección y orientación"
            ],
            correctAnswer: 1,
            explanation: "La metodología de estudios guiados ofrece aprendizaje activo y desarrollo de habilidades colaborativas.",
            type: "single",
        },
        {
            id: "donto5",
            question: "El paciente tiene derecho a rechazar el tratamiento en la medida que lo permita la ley y a ser informado:",
            options: [
                "De las consecuencias médicas de su acción.",
                "De los riesgos médicos de su acción",
                "De los beneficios médicos de su acción"
            ],
            correctAnswer: 0,
            explanation: "El paciente debe ser informado de las consecuencias médicas de su acción al rechazar un tratamiento.",
            type: "single",
        },
        {
            id: "donto6",
            question: "El paciente tiene derecho a conocer las normas y reglamentos hospitalarios:",
            options: [
                "Aplicables a su conducta como paciente.",
                "Aplicables a su comportamiento como paciente",
                "Aplicables a su hábito como paciente"
            ],
            correctAnswer: 0,
            explanation: "El paciente tiene derecho a conocer las normas aplicables a su conducta como paciente.",
            type: "single",
        },
        {
            id: "donto7",
            question: "El paciente tiene derecho a que todas las comunicaciones y registros relativos a su atención sean tratados de manera:",
            options: [
                "Confidencial.",
                "Particular",
                "Privada"
            ],
            correctAnswer: 0,
            explanation: "Las comunicaciones y registros del paciente deben ser tratados de manera confidencial.",
            type: "single",
        },
        {
            id: "donto8",
            question: "¿Cuál es la definición correcta de los estudios prospectivos?",
            options: [
                "Son aquellos que buscan anticipar o predecir fenómenos futuros mediante el análisis de tendencias actuales.",
                "Son aquellos que buscan anticipar o predecir fenómenos futuros mediante el análisis de tendencias pasadas",
                "Se realiza a partir de registros del pasado y es seguido a partir de aquel momento hasta el presente"
            ],
            correctAnswer: 0,
            explanation: "Los estudios prospectivos buscan anticipar fenómenos futuros con tendencias actuales.",
            type: "single",
        },
        {
            id: "donto9",
            question: "Complete: Kerlinger describe a los estudios prospectivos como un enfoque metodológico que se utiliza para identificar posibles desarrollos __________ de ciertos fenómenos mediante el análisis de datos _____________ ",
            options: [
                "Pasados, transversales",
                "Futuros, longitudinales.",
                "Pasados, longitudinales"
            ],
            correctAnswer: 1,
            explanation: "Kerlinger describe los estudios prospectivos con desarrollos futuros y datos longitudinales.",
            type: "single",
        },
        {
            id: "donto10",
            question: "¿A qué tipo de definición hace referencia la siguiente definición?: Son investigaciones que permiten prever el comportamiento de una situación en el futuro basándose en datos históricos y actuales.",
            options: [
                "Estudios prospectivos.",
                "Estudios retrospectivos",
                "Estudios transversales"
            ],
            correctAnswer: 0,
            explanation: "La definición describe a los estudios prospectivos.",
            type: "single",
        },
        {
            id: "donto11",
            question: "Según Selltiz: ¿cuál es la definición de los estudios prospectivos?",
            options: [
                "Aquellos que buscan realizar predicciones basadas en información empírica obtenidas con datos del pasado",
                "Aquellos que buscan realizar predicciones basadas en información empírica obtenida a lo largo del tiempo.",
                "Se realiza a partir de registros del pasado y es seguido a partir de aquel momento hasta el presente"
            ],
            correctAnswer: 1,
            explanation: "Selltiz define los estudios prospectivos como predicciones basadas en información empírica a lo largo del tiempo.",
            type: "single",
        },
        {
            id: "donto12",
            question: "¿Cuáles son los principios éticos básicos del informe de Belmont?",
            options: [
                "Respeto a las personas, beneficencia y justicia.",
                "Compromiso, tolerancia y responsabilidad",
                "Respeto a las personas, compromiso y equidad"
            ],
            correctAnswer: 0,
            explanation: "Los principios del informe Belmont son respeto a las personas, beneficencia y justicia.",
            type: "single",
        },
        {
            id: "donto13",
            question: "La aplicación de los principios generales de la conducta que se debe seguir en la investigación nos lleva a la consideración de los siguientes requerimientos:",
            options: [
                "Consentimiento informado, valoración de beneficios y riesgos, selección de los sujetos de investigación.",
                "Consentimiento informado, comprensión, selección de los sujetos de investigación",
                "Valoración de beneficios y riesgos, selección de los sujetos de investigación, respeto a las personas"
            ],
            correctAnswer: 0,
            explanation: "Los requerimientos son consentimiento informado, valoración de riesgos y selección de sujetos.",
            type: "single",
        },
        {
            id: "donto14",
            question: "A qué se refiere el término beneficio",
            options: [
                "En el contexto de la investigación, significa algo con un valor negativo para la salud o para el bienestar",
                "En el contexto de la investigación, significa algo con un valor positivo para la enfermedad",
                "En el contexto de la investigación, significa algo con un valor positivo para la salud o para el bienestar"
            ],
            correctAnswer: 2,
            explanation: "Beneficio en investigación es algo positivo para la salud o bienestar.",
            type: "single",
        },
        {
            id: "donto15",
            question: "¿Cuál de las siguientes opciones describe mejor el pensamiento científico?",
            options: [
                "Es un proceso basado en creencias y opiniones personales",
                "Se basa en la observación, la experimentación y el análisis lógico.",
                "Depende exclusivamente de la intuición para obtener conocimientos"
            ],
            correctAnswer: 1,
            explanation: "El pensamiento científico se basa en observación, experimentación y análisis lógico.",
            type: "single",
        },
        {
            id: "donto16",
            question: "¿Cuál de las siguientes características es propia del pensamiento común?",
            options: [
                "Se basa en la observación rigurosa y la experimentación controlada",
                "Utiliza el método científico para llegar a conclusiones verificables",
                "Se fundamenta en experiencias personales, creencias y sentido común."
            ],
            correctAnswer: 2,
            explanation: "El pensamiento común se fundamenta en experiencias, creencias y sentido común.",
            type: "single",
        },
        {
            id: "donto17",
            question: "¿Cuál de las siguientes definiciones de pensamiento común son de Kuhn?",
            options: [
                "Es la forma en que las personas piensan y razonan en su vida cotidiana.",
                "Proceso cognitivo que se basa en la experiencia personal, la intuición y la creencia",
                "Proceso cognitivo que se basa en la experiencia cotidiana, la tradición y la opinión pública."
            ],
            correctAnswer: 0,
            explanation: "Proceso cognitivo que se basa en la experiencia cotidiana, la tradición y la opinión pública.",
            type: "single",
        },
        {
            id: "donto18",
            question: "¿Cuál de las siguientes definiciones de pensamiento científico de Cohen y Nagel?",
            options: [
                "Es la forma en que las personas piensan y razonan en su vida cotidiana",
                "Capacidad de cuestionar las creencias y los supuestos, y de revisar y modificar las teorías en función de la evidencia empírica",
                "Proceso sistemático y objetivo de observación, formulación de hipótesis y prueba de teorías."
            ],
            correctAnswer: 2,
            explanation: "Proceso sistemático y objetivo de observación, formulación de hipótesis y prueba de teorías.",
            type: "single",
        },
        {
            id: "donto19",
            question: "¿Cuál de las siguientes opciones describe mejor la relación entre la diversidad cultural y los derechos humanos según la Declaración Universal sobre Bioética y Derechos Humanos?",
            options: [
                "La diversidad cultural siempre debe primar sobre los derechos humanos, ya que refleja las tradiciones y valores únicos de cada sociedad",
                "Los derechos humanos y las libertades fundamentales deben prevalecer, y la diversidad cultural no debe invocarse para atentar contra ellos.",
                "La diversidad cultural y los derechos humanos son conceptos independientes que no tienen relación entre sí."
            ],
            correctAnswer: 1,
            explanation: "Según la Declaración, los derechos humanos prevalecen sobre la diversidad cultural.",
            type: "single",
        },
        {
            id: "donto20",
            question: "Según la Declaración Universal sobre Bioética y Derechos Humanos, ¿cuál es un cometido esencial de los gobiernos en relación con la salud y el bienestar de sus pueblos?",
            options: [
                "Limitar el acceso a la atención médica para controlar los costos",
                "Promover la salud y el desarrollo social, fomentando el acceso a una atención médica de calidad y medicamentos esenciales.",
                "Dejar que el mercado determine quién tiene acceso a la atención médica"
            ],
            correctAnswer: 1,
            explanation: "Los gobiernos deben promover la salud y el bienestar, facilitando el acceso a la atención médica.",
            type: "single",
        },
        {
            id: "donto21",
            question: "¿Cuál de las siguientes NO es una forma en que los países desarrollados pueden apoyar a los países en desarrollo en el ámbito de la ciencia y la tecnología, según la Declaración?",
            options: [
                "Restringir la difusión de información científica para proteger su ventaja competitiva.",
                "Promover la cooperación científica y cultural",
                "Llegar a acuerdos bilaterales y multilaterales para crear capacidades"
            ],
            correctAnswer: 0,
            explanation: "Restringir la información científica no es una forma de apoyo según la Declaración.",
            type: "single",
        },
        {
            id: "donto22",
            question: "Un estudio ex vivo es definido como:",
            options: [
                "experimento realizado en sobre tejidos biológicos de un organismo en un ambiente artificial fuera del organismo con las alteraciones máximas de las condiciones naturales",
                "experimento realizado en o sobre tejidos biológicos de un organismo en un ambiente artificial fuera del organismo con las alteraciones mínimas de las condiciones naturales.",
                "experimento o medida realizada en o sobre tejidos biológicos de un organismo en un ambiente artificial dentro organismo sin alteraciones"
            ],
            correctAnswer: 1,
            explanation: "Un estudio ex vivo se realiza en tejidos fuera del organismo con mínimas alteraciones.",
            type: "single",
        },
        {
            id: "donto23",
            question: "Para que sea considerado un estudio ex vivo en que tiempo debe llevarse a cabo dicho estudio:",
            options: [
                "24 horas.",
                "76 horas",
                "72 horas"
            ],
            correctAnswer: 0,
            explanation: "Un estudio ex vivo debe llevarse a cabo dentro de las 72 horas.",
            type: "single",
        },
        {
            id: "donto24",
            question: "Complete: Según Barrientos los estudios exvivos son aquellos métodos que usan órganos, tejidos, células o fluidos corporales de................... o de sistemas organizados que contienen en su interior células y se colocan en un ambiente artificial lo ...... parecido a las condiciones naturales.",
            options: [
                "Sujetos muertos - menos",
                "Sujetos vivos – más.",
                "Sujetos vivos - menos"
            ],
            correctAnswer: 1,
            explanation: "Los estudios ex vivo usan tejidos de sujetos vivos y simulan las condiciones naturales.",
            type: "single",
        },
        {
            id: "donto25",
            question: "Complete: Según Barrientos el estudio ex vivo es útil para evaluar de forma....................... y en............ plazo el fenómeno",
            options: [
                "Lenta - largo",
                "Casi inmediata - Largo",
                "Casi inmediata – corto."
            ],
            correctAnswer: 2,
            explanation: "El estudio ex vivo evalúa fenómenos de forma casi inmediata y a corto plazo.",
            type: "single",
        },
        {
            id: "donto26",
            question: "Según la investigación biomédica no terapéutica: El investigador o el equipo investigador debe suspender la investigación cuando:",
            options: [
                "Se estima que la continuación puede ser dañina para las personas.",
                "Se estima que la continuación no puede ser dañina para las personas",
                "Se estima que la continuación no puede causar alteraciones nocivas para las personas"
            ],
            correctAnswer: 0,
            explanation: "La investigación debe suspenderse si puede ser dañina.",
            type: "single",
        },
        {
            id: "donto27",
            question: "Complete: La investigación biomédica que implica a ............... debe ser realizada únicamente por personas científicamente cualificadas y ........... la supervisión de un facultativo clínicamente competente.",
            options: [
                "Seres vivos - sin",
                "seres invivos - bajo",
                "Seres vivos – bajo."
            ],
            correctAnswer: 2,
            explanation: "La investigación con seres vivos requiere personal cualificado y supervisión.",
            type: "single",
        },
        {
            id: "donto28",
            question: "Complete: Dentro de los principios básicos de la declaración de Helsinki. La investigación biomédica implica a ............. debe concordar con los principios científicos aceptados universalmente y debe basarse en una experimentación .......... y de ............ suficiente y en un conocimiento minucioso de la literatura científica.",
            options: [
                "Personas-animal-laboratorio.",
                "Animales - animal-laboratorio",
                "animales -personal – laboratorio"
            ],
            correctAnswer: 0,
            explanation: "La investigación con personas debe basarse en principios científicos y experimentación suficiente.",
            type: "single",
        },
        {
            id: "donto29",
            question: "¿Cómo se le conoce también a la variable independiente?",
            options: [
                "Dependiente, de respuesta o resultado",
                "De estímulo, de entrada, o input.",
                "De control, intermedia o de confusión"
            ],
            correctAnswer: 1,
            explanation: "La variable independiente se conoce como de estímulo o entrada.",
            type: "single",
        },
        {
            id: "donto30",
            question: "¿Por qué se le llama a la variable independiente 'causal o experimental'?",
            options: [
                "Porque su valor depende de otra variable",
                "Porque es manipulada por el investigador.",
                "Porque solo se mide sin intervención"
            ],
            correctAnswer: 1,
            explanation: "La variable independiente es manipulada por el investigador.",
            type: "single",
        },
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
        },
        {
            id: "donto61",
            question: "¿Cuál es un aspecto jurídico del artículo 6 del CEISH-UCE?",
            options: [
                "Valorar el riesgo - beneficio del estudio para la persona, comunidad y para el país",
                "Asegurar la evaluación independiente del estudio de investigación propuesto",
                "Analizar los contratos entre el promotor del estudio y los investigadores."
            ],
            correctAnswer: 2,
            explanation: "Analizar los contratos entre el promotor del estudio y los investigadores.",
            type: "single",
        },
        {
            id: "donto62",
            question: "Verdadero o falso. Los integrantes del CEISH-UCE antes de iniciar sus funciones suscribirán una declaración escrita en la que conste que aceptan participar y en caso de presentarse, estos deberán ausentarse de las sesiones en las que pudiese anticipar un conflicto de interés.",
            options: [
                "Verdadero",
            ],
            correctAnswer: 0,
            explanation: "Verdadero.",
            type: "single",
        },
        {
            id: "donto63",
            question: "¿Sobre qué nos habla el artículo 13 del CEISH-UCE",
            options: [
                "El artículo 13 establece las formas en que un comité debe premiar a los investigadores por su desempeño en los estudios",
                "El artículo 13 establece las situaciones en las que un integrante de un comité podría tener un conflicto de interés al estar vinculado con el estudio o sus investigadores, afectando su imparcialidad.",
                "El artículo 13 regula cómo los investigadores deben manejar sus relaciones familiares con los miembros del comité de evaluación"
            ],
            correctAnswer: 1,
            explanation: "Conflictos de interés.",
            type: "single",
        },
        {
            id: "donto64",
            question: "Según Sanctis y Vicenzo los estudios retrospectivos sirven para:",
            options: [
                "Evaluación de intervenciones médicas.",
                "Corregir estudios políticos",
                "Evaluar el desempeño de marcadores de diagnóstico"
            ],
            correctAnswer: 0,
            explanation: "Evaluación de intervenciones médicas.",
            type: "single",
        },
        {
            id: "donto65",
            question: "Conforme al autor Hernández Sampieri un estudio retrospectivo es:",
            options: [
                "Una revisión puramente observacional y/o una reevaluación de registros de bases de datos para analizar eventos de interés que ya sucedieron",
                "Un estudio investigativo, donde se analiza y se recopila datos antiguos.",
                "Obra de cierta extensión en que se expone y analiza una cuestión determinada"
            ],
            correctAnswer: 1,
            explanation: "Revisión de registros para analizar eventos pasados.",
            type: "single",
        },
        {
            id: "donto66",
            question: "De acuerdo con la siguiente definición, señale cual fue el autor de esta: “Según el tiempo de ocurrencia de los hechos y el registro de la información, se indaga sobre hechos que ya han ocurrido para prevenir los mismos”",
            options: [
                "Artiles Visbal L, Otero y Barrios.",
                "National Cancer Institute",
                "Hernández Sampieri"
            ],
            correctAnswer: 0,
            explanation: "Artiles Visbal L, Otero y Barrios.",
            type: "single",
        },
        {
            id: "donto67",
            question: "Complete el siguiente enunciado: Según la Real Academia Española retrospectivo se define como: “en su desarrollo .........”",
            options: [
                "Posterior",
                "Anterior.",
                "Continuo"
            ],
            correctAnswer: 1,
            explanation: "Anterior.",
            type: "single",
        },
        {
            id: "donto68",
            question: "Señale lo incorrecto: El Art. 62 del archivo digital menciona que se mantendrá la base de datos digitales que incluya:",
            options: [
                "Nombre del protocolo de investigación",
                "Número de código del protocolo corregido y aprobado",
                "Nombres de familiares directos del investigado."
            ],
            correctAnswer: 2,
            explanation: "Nombres de familiares directos del investigado.",
            type: "single",
        },
        {
            id: "donto69",
            question: "Complete: El archivo físico del estudio permanecerá en las oficinas del CEISH-UCE durante ........ años. Luego pasarán a un archivo de la institución de acuerdo con el riesgo del estudio",
            options: [
                "4 años",
                "15 años",
                "7 años."
            ],
            correctAnswer: 2,
            explanation: "7 años.",
            type: "single",
        },
        {
            id: "donto70",
            question: "Según el artículo 58 que recursos facilitará la UCE para la operación de la investigación:",
            options: [
                "Recursos económicos, materiales y administrativos para la operación del mismo.",
                "Recursos psicológicos, morales y económicos",
                "Recursos económicos únicamente"
            ],
            correctAnswer: 0,
            explanation: "Recursos económicos, materiales y administrativos.",
            type: "single",
        },
        {
            id: "donto71",
            question: "Seleccione a que corresponde el siguiente enunciado “se define como todo estudio de investigación que asigna prospectivamente participantes humanos o grupos de humano a una o más intervenciones relacionadas con la salud para evaluar los efectos en los resultados de salud.",
            options: [
                "Estudios controlados",
                "Estudios no controlados",
                "Ensayos clínicos."
            ],
            correctAnswer: 2,
            explanation: "Ensayos clínicos.",
            type: "single",
        },
        {
            id: "donto72",
            question: "Según la OMS los ensayos clínicos sirven para:",
            options: [
                "El desarrollo de nuevos medicamentos.",
                "Validación de tratamientos",
                "Probar terapias innovadoras"
            ],
            correctAnswer: 0,
            explanation: "Validación de tratamientos.",
            type: "single",
        },
        {
            id: "donto73",
            question: "Según Durán, los ensayos clínicos se definen como toda investigación efectuada en:",
            options: [
                "Animales",
                "Muestras biológicas",
                "Seres humanos."
            ],
            correctAnswer: 2,
            explanation: "Seres humanos.",
            type: "single",
        },
        {
            id: "donto74",
            question: "Cornejero denomina ensayo clínico a los estudios:",
            options: [
                "Transversales y longitudinales",
                "Prospectivos y experimentales.",
                "Controlados y aleatorizados"
            ],
            correctAnswer: 1,
            explanation: "Prospectivos y experimentales.",
            type: "single",
        },
        {
            id: "donto75",
            question: "¿Cuál es la finalidad del código de ética de la Universidad Central del Ecuador?",
            options: [
                "Promover relaciones de convivencia armónica, garantizar la integridad personal y el respeto de los principios y derechos humanos.",
                "Establecer un conjunto de normas y principios éticos que deben ser conocidos por todos los miembros de la comunidad universitaria",
                "Garantizar que los comportamientos y decisiones sean coherentes con los valores fundamentales de la organización o profesión, promoviendo así un ambiente ético y profesional"
            ],
            correctAnswer: 0,
            explanation: "Promover relaciones de convivencia armónica, garantizar la integridad personal y el respeto de los principios y derechos humanos.",
            type: "single",
        },
        {
            id: "donto76",
            question: "¿Cuál de los siguientes no es un valor del código de ética?",
            options: [
                "Honestidad",
                "Cooperación",
                "Integridad."
            ],
            correctAnswer: 2,
            explanation: "Cooperación.",
            type: "single",
        },
        {
            id: "donto77",
            question: "¿Cuál de los siguientes es un compromiso específico de las autoridades?",
            options: [
                "Cumplir sus obligaciones académicas con honestidad, puntualidad, criterios de innovación, calidad, respetando los derechos intelectuales y la dignidad de los estudiantes",
                "Promover y garantizar la socialización del Código de Ética en todos los elementos universitarios.",
                "Optimizar los recursos asignados para el desarrollo de las actividades mediante la utilización racional de los mismos, velando por el principio de gratuidad y de justicia"
            ],
            correctAnswer: 1,
            explanation: "Promover y garantizar la socialización del Código de Ética en todos los elementos universitarios.",
            type: "single",
        },
        {
            id: "donto78",
            question: "Son compromisos específicos de los estudiantes, excepto:",
            options: [
                "Desarrollar las actividades de apoyo que le sean asignadas en cada unidad administrativa o académica con prontitud, diligencia y cordialidad.",
                "Cumplir sus obligaciones académicas con honestidad, puntualidad, calidad y respetando los derechos intelectuales",
                "Generar actitudes de convivencia armónica promoviendo prácticas inclusivas y respeto a la dignidad entre sus pares"
            ],
            correctAnswer: 0,
            explanation: "Desarrollar las actividades de apoyo que le sean asignadas en cada unidad administrativa o académica con prontitud, diligencia y cordialidad.",
            type: "single",
        },
        {
            id: "donto79",
            question: "Deaton A. define como un estudio en el que no existe comparación con un grupo de control, lo que imposibilita sacar conclusiones firmes sobre la relación causal entre la intervención y el resultado",
            options: [
                "Estudios controlados",
                "Estudios no controlados.",
                "Estudios cuantitativos"
            ],
            correctAnswer: 1,
            explanation: "Estudios no controlados.",
            type: "single",
        },
        {
            id: "donto80",
            question: "¿Qué papel juegan los resultados preliminares obtenidos en estudios no controlados en el diseño de investigaciones más rigurosas, como los ensayos clínicos aleatorizados y controlados?",
            options: [
                "Ayudan a generar hipótesis para estudios más rigurosos.",
                "Son concluyentes y no necesitan más investigación",
                "No tienen relevancia en los estudios controlados"
            ],
            correctAnswer: 0,
            explanation: "Ayudan a generar hipótesis para estudios más rigurosos.",
            type: "single",
        },
        {
            id: "donto81",
            question: "¿Qué ventaja tienen los estudios no controlados durante emergencias, como una epidemia, en comparación con los ensayos clínicos tradicionales?",
            options: [
                "Ofrecen resultados rápidos sobre la eficacia de tratamientos disponibles.",
                "Proporcionan conclusiones definitivas sin necesidad de grupo control",
                "Siempre son más precisos que los estudios controlados"
            ],
            correctAnswer: 0,
            explanation: "Resultados rápidos sobre eficacia de tratamientos.",
            type: "single",
        },
        {
            id: "donto82",
            question: "¿Qué ventaja tienen los estudios no controlados en la evaluación de la seguridad de un tratamiento?",
            options: [
                "Proporcionan pruebas definitivas sobre la eficacia del tratamiento",
                "Garantizan la seguridad sin necesidad de observación a largo plazo",
                "Permiten monitorear efectos adversos en una población más grande."
            ],
            correctAnswer: 2,
            explanation: "Monitorear efectos adversos en una población más grande.",
            type: "single",
        },
        {
            id: "donto83",
            question: "Seleccione a que principio corresponde este concepto: es la capacidad de distinguir las propias conductas indebidas y la predisposición para corregirlas.",
            options: [
                "Interculturalidad",
                "Auto criticidad.",
                "Responsabilidad social y ambiental"
            ],
            correctAnswer: 1,
            explanation: "Auto criticidad.",
            type: "single",
        },
        {
            id: "donto84",
            question: "¿Qué son las conductas indebidas?",
            options: [
                "Todo acto y/o actitud que atente a los principios, valores y compromisos establecidos en este Código.",
                "Violentar las medidas de seguridad físicas o electrónicas establecidas sobre la información generada en la Facultad",
                "Actuar en contra de las personas que piensen o se manifiesten de forma diferente"
            ],
            correctAnswer: 0,
            explanation: "Acto que atente a los principios, valores y compromisos.",
            type: "single",
        },
        {
            id: "donto85",
            question: "Es un compromiso del personal administrativo y de servicios universitarios:",
            options: [
                "Mantener una actitud proactiva con todos los integrantes de la comunidad universitaria, con el objetivo de cumplir los procesos con agilidad, calidad, transparencia y buen trato.",
                "Cumplir sus obligaciones con honestidad, puntualidad, calidad y respetando los derechos intelectuales",
                "Generar actitudes de convivencia armónica, promoviendo prácticas inclusivas y respeto a la dignidad entre sus pares"
            ],
            correctAnswer: 0,
            explanation: "Mantener actitud proactiva, cumplir procesos con agilidad, calidad, transparencia y buen trato.",
            type: "single",
        },
        {
            id: "donto86",
            question: "¿Cuál es el objetivo del CEISH?",
            options: [
                "Cumplir obligaciones con honestidad, calidad, puntualidad, respetando derechos intelectuales",
                "Actuar en contra de las personas que piensen o se manifiesten de forma diferente",
                "Proteger la dignidad, los derechos, el bienestar y la seguridad de los seres humanos participantes de estudios, dentro del contexto de un protocolo de investigación."
            ],
            correctAnswer: 2,
            explanation: "Proteger dignidad, derechos, bienestar y seguridad de participantes.",
            type: "single",
        },
        {
            id: "donto87",
            question: "¿Qué organismo da la aprobación al CEISH?",
            options: [
                "Ministerio de Salud Pública del Ecuador.",
                "Dirección Nacional de Inteligencia de Salud",
                "Agencia Nacional de Regulación, Control y Vigilancia Sanitaria (ARCSA)"
            ],
            correctAnswer: 0,
            explanation: "Ministerio de Salud Pública del Ecuador.",
            type: "single",
        },
        {
            id: "donto88",
            question: "¿Cuál de las siguientes opciones no corresponde a un miembro que conforma el CEAS?",
            options: [
                "Médico",
                "Miembro lego representante de la comunidad",
                "Docentes de Universidad."
            ],
            correctAnswer: 2,
            explanation: "Docentes de Universidad.",
            type: "single",
        },
        {
            id: "donto89",
            question: "De acuerdo con Shanon la investigación en vitro:",
            options: [
                "Son experimentos que involucran células, tejidos, microorganismos o moléculas biológicamente activas llevadas a cabo fuera del entorno biológico.",
                "In vitro es latín para “en vivo”",
                "Son experimentos que se realizan en tejidos o órganos que se han extraído de un organismo vivo"
            ],
            correctAnswer: 0,
            explanation: "Experimentos fuera del entorno biológico.",
            type: "single",
        },
        {
            id: "donto90",
            question: "De acuerdo con Guillarte un uso en odontología de los estudios in vitro es:",
            options: [
                "Usados para determinar la sensibilidad de los antibióticos frente a microorganismos.",
                "Usados para demostrar citotoxicidad genética",
                "Usados para ver el potencial de daño cromosómico de una sustancia"
            ],
            correctAnswer: 0,
            explanation: "Determinar la sensibilidad de antibióticos frente a microorganismos.",
            type: "single",
        },
        {
            id: "donto91",
            question: "Seleccione un ejemplo de investigación in vitro en odontología",
            options: [
                "Fecundación in vitro de Louise Brown",
                "Investigación in vitro: Regeneración celular: uso de células madre para el tratamiento de la artritis",
                "Investigación in vitro: Regeneración del tejido periodontal con células madre de la pulpa dental de los terceros molares."
            ],
            correctAnswer: 2,
            explanation: "Regeneración del tejido periodontal con células madre.",
            type: "single",
        },
        {
            id: "donto92",
            question: "De acuerdo con Emory Winship Cancer Institute: los estudios in vitro:",
            options: [
                "In vitro es latín para “en vidrio” lo cual significa que son hechos en placas Petri o tubos de ensayo.",
                "Son pruebas en las que se estudian interacciones químicas",
                "Demuestran la capacidad de un compuesto macromolecular"
            ],
            correctAnswer: 0,
            explanation: "Hechos en placas Petri o tubos de ensayo.",
            type: "single",
        },
        {
            id: "donto93",
            question: "¿Cuáles no son las funciones del CEISH?",
            options: [
                "Conocer recursos económicos.",
                "Evaluar aspectos metodológicos",
                "Evaluar aspectos éticos"
            ],
            correctAnswer: 0,
            explanation: "Conocer recursos económicos.",
            type: "single",
        },
        {
            id: "donto94",
            question: "¿Qué perfil no corresponde para conformar un CEISH?",
            options: [
                "Profesional de la salud con experiencia en metodología de la investigación",
                "profesional de la salud con conocimientos en bioética",
                "Profesional en seguridad."
            ],
            correctAnswer: 2,
            explanation: "Profesional en seguridad.",
            type: "single",
        },
        {
            id: "donto95",
            question: "¿Qué definición corresponde a muestra biológica?",
            options: [
                "Estudios de procesos fisiológicos, bioquímicos o patológicos",
                "Cualquier material biológico de origen humano susceptible de conservación.",
                "Decisión de participar en una investigación adoptada libre y voluntariamente por una persona"
            ],
            correctAnswer: 1,
            explanation: "Cualquier material biológico de origen humano susceptible de conservación.",
            type: "single",
        },
        {
            id: "donto96",
            question: "¿Cuál de las siguientes características define a las variables de razón?",
            options: [
                "No tienen un cero absoluto",
                "Tienen un cero absoluto, lo que significa que no pueden tener valores negativos.",
                "Son variables cualitativas"
            ],
            correctAnswer: 1,
            explanation: "Tienen un cero absoluto, no pueden tener valores negativos.",
            type: "single",
        },
        {
            id: "donto97",
            question: "Las variables de razón permiten realizar el siguiente tipo de operaciones:",
            options: [
                "Solo sumas y restas",
                "Sumas, restas, multiplicaciones y divisiones.",
                "Solo multiplicaciones y divisiones"
            ],
            correctAnswer: 1,
            explanation: "Sumas, restas, multiplicaciones y divisiones.",
            type: "single",
        },
        {
            id: "donto98",
            question: "¿Qué tipo de escala se utiliza para medir variables de razón?",
            options: [
                "Escala nominal",
                "Escala ordinal",
                "Escala de razón."
            ],
            correctAnswer: 2,
            explanation: "Escala de razón.",
            type: "single",
        },
        {
            id: "donto99",
            question: "¿Cuál de los siguientes es un ejemplo de variable de razón?",
            options: [
                "Ingreso anual de una persona.",
                "Clasificación de una película (1-5 estrellas)",
                "Colores de una camiseta"
            ],
            correctAnswer: 0,
            explanation: "Ingreso anual de una persona.",
            type: "single",
        },
        {
            id: "donto100",
            question: "El informe de pertinencia de los programas y/o proyectos de investigación y desarrollo tecnológico deberá contener lo siguiente:",
            options: [
                "Evaluación científico-técnica, financiera, jurídica.",
                "Evaluación metodológica",
                "Evaluación académica, financiera"
            ],
            correctAnswer: 0,
            explanation: "Evaluación científico-técnica, financiera, jurídica.",
            type: "single",
        },
        {
            id: "donto101",
            question: "Obligaciones de las instituciones beneficiarias",
            options: [
                "Remitir información anual",
                "Remitir información de forma semestral",
                "Mantener información técnica y ordenada cronológicamente."
            ],
            correctAnswer: 2,
            explanation: "Mantener información técnica y ordenada cronológicamente.",
            type: "single",
        },
        {
            id: "donto102",
            question: "Las normas del reglamento del CEISH se regirán bajo principios de:",
            options: [
                "Transparencia, concurrencia, eficacia, eficiencia, competencia, reciprocidad, corresponsabilidad, equidad y ética.",
                "Principios de autonomía",
                "Principios de confidencialidad"
            ],
            correctAnswer: 0,
            explanation: "Transparencia, concurrencia, eficacia, eficiencia, competencia, reciprocidad, corresponsabilidad, equidad y ética.",
            type: "single",
        },
        {
            id: "donto103",
            question: "En un estudio controlado, ¿Qué es el grupo de control?",
            options: [
                "El grupo que recibe el tratamiento experimental",
                "El grupo que recibe un placebo.",
                "El grupo de investigadores"
            ],
            correctAnswer: 1,
            explanation: "El grupo que recibe un placebo.",
            type: "single",
        },
        {
            id: "donto104",
            question: "En un estudio clínico controlado, un placebo se usa principalmente para:",
            options: [
                "Medir la efectividad del tratamiento sin la influencia de las expectativas de los participantes.",
                "Aumentar la duración del estudio",
                "Garantizar la seguridad del tratamiento"
            ],
            correctAnswer: 0,
            explanation: "Medir la efectividad del tratamiento sin la influencia de las expectativas de los participantes.",
            type: "single",
        },
        {
            id: "donto105",
            question: "El estudio controlado es:",
            options: [
                "Un estudio prospectivo que compara el valor de una intervención frente a un control en el hombre.",
                "Estudio clínico que carece de un grupo de comparación",
                "Estudio clínico retrospectivo"
            ],
            correctAnswer: 0,
            explanation: "Un estudio prospectivo que compara el valor de una intervención frente a un control en el hombre.",
            type: "single",
        },
        {
            id: "donto106",
            question: "Los resultados que ofrecen los estudios controlados son:",
            options: [
                "Más fiables y precisos.",
                "Sesgados en su mayoría",
                "Menos válidos en comparación a otros estudios"
            ],
            correctAnswer: 0,
            explanation: "Más fiables y precisos.",
            type: "single",
        },
        {
            id: "donto107",
            question: "Es aquella variable que describe el efecto, consecuencia, enfermedad, o respuesta de una investigación.",
            options: [
                "Variable dependiente.",
                "Variable independiente",
                "Variable cuantitativa"
            ],
            correctAnswer: 0,
            explanation: "Variable dependiente.",
            type: "single",
        },
        {
            id: "donto108",
            question: "Según Sampiere: ¿Qué es la variable dependiente?",
            options: [
                "Es la variable principal de un ensayo",
                "Es el factor que se intenta predecir o explicar y es el efecto, respuesta o resultado de las variables independientes.",
                "Es la variable que sirve para determinar el éxito o fracaso de un tratamiento"
            ],
            correctAnswer: 1,
            explanation: "Es el efecto, respuesta o resultado de las variables independientes.",
            type: "single",
        },
        {
            id: "donto109",
            question: "Según Kerlinger: ¿Qué hace el investigador para determinar el efecto o impacto que tienen una o más variables independientes?",
            options: [
                "Indagar",
                "Comparar",
                "Medir"
            ],
            correctAnswer: 2,
            explanation: "Medir.",
            type: "single",
        },
        {
            id: "donto110",
            question: "Para Namakforoosh: la variable dependiente es la variable que el investigador desea:",
            options: [
                "Estudiar",
                "Explicar.",
                "Experimentar"
            ],
            correctAnswer: 1,
            explanation: "Explicar.",
            type: "single",
        },
        {
            id: "donto111",
            question: "¿En qué tiempo la Subsecretaría de Investigación Científica deberá realizar las evaluaciones técnicas financieras finales?",
            options: [
                "30 días.",
                "28 días",
                "15 días"
            ],
            correctAnswer: 0,
            explanation: "30 días.",
            type: "single",
        },
        {
            id: "donto112",
            question: "La ejecución de las garantías se efectuará sin perjuicio de las acciones ...............o............a las que hubiera lugar contra la institución beneficiaria.",
            options: [
                "Judiciales-civiles",
                "Civiles-penales.",
                "Penales-legítimas"
            ],
            correctAnswer: 1,
            explanation: "Civiles-penales.",
            type: "single",
        },
        {
            id: "donto113",
            question: "El contrato o convenio deberá ser suscrito dentro del término de......contados a partir de la fecha de notificación de adjudicación.",
            options: [
                "10 días",
                "12 días",
                "15 días."
            ],
            correctAnswer: 2,
            explanation: "15 días.",
            type: "single",
        },
        {
            id: "donto114",
            question: "El tema de un poster debe tener:",
            options: [
                "Exactamente 20 palabras",
                "No más de 15 palabras.",
                "Las que sean necesarias"
            ],
            correctAnswer: 1,
            explanation: "No más de 15 palabras.",
            type: "single",
        },
        {
            id: "donto115",
            question: "Señale cuáles son tipos de poster:",
            options: [
                "De Investigación, Revisión Bibliográfica, Estudios de casos.",
                "Narrativos, Informativos, Educativos",
                "Literarios, de Productos, Narrativos"
            ],
            correctAnswer: 0,
            explanation: "De Investigación, Revisión Bibliográfica, Estudios de casos.",
            type: "single",
        },
        {
            id: "donto116",
            question: "Características principales de un poster",
            options: [
                "Imágenes originales, claro y conciso, ser atractivo, tener simplicidad, expresar el mensaje con la menor cantidad de elementos.",
                "Tener efectos como materiales brillantes o colores llamativos",
                "Tener demasiados textos e información irrelevante"
            ],
            correctAnswer: 0,
            explanation: "Imágenes originales, claro y conciso, ser atractivo, tener simplicidad, expresar el mensaje con la menor cantidad de elementos.",
            type: "single",
        },
        {
            id: "donto117",
            question: "¿Cómo se estructura un póster de Investigación?",
            options: [
                "Introducción, Desarrollo y conclusión",
                "Título del trabajo de investigación, autor/autores, introducción, metodología, resultados, discusión o conclusiones y bibliografía.",
                "Título, objetivos, metodología, conclusiones y bibliografía"
            ],
            correctAnswer: 1,
            explanation: "Título del trabajo de investigación, autor/autores, introducción, metodología, resultados, discusión o conclusiones y bibliografía.",
            type: "single",
        },
        {
            id: "donto118",
            question: "¿Dentro de que tiempo la secretaría de la Comisión notifica a las entidades si han sido beneficiarias de la adjudicación de los programas y/o proyectos de investigación científica y desarrollo tecnológico?",
            options: [
                "Dentro de 30 días",
                "15 días",
                "48 horas."
            ],
            correctAnswer: 2,
            explanation: "48 horas.",
            type: "single",
        },
        {
            id: "donto119",
            question: "Características que NO corresponden a un PROGRAMA:",
            options: [
                "Responde a un mismo objetivo general",
                "Busca cumplir con objetivos específicos de investigación y desarrollo tecnológico.",
                "En un periodo de tiempo previamente definido"
            ],
            correctAnswer: 1,
            explanation: "Busca cumplir con objetivos específicos de investigación y desarrollo tecnológico.",
            type: "single",
        },
        {
            id: "donto120",
            question: "¿En los programas y/o proyectos de investigación científica y desarrollo tecnológico que involucre la participación de material genético, humano o animal o animales de experimentación que se debe incluir?",
            options: [
                "Informe positivo de un Comité de Bioética.",
                "Autorización por parte del MSP",
                "Aprobación por parte del CEISH"
            ],
            correctAnswer: 0,
            explanation: "Informe positivo de un Comité de Bioética.",
            type: "single",
        },
    ]
};