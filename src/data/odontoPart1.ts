import { QuizCategory } from '../types/quiz';

export const odontoPart1: QuizCategory = {
    id: 'odontoPart1',
    title: 'Parte 1',
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
        }
    ]
};