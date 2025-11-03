import { QuizCategory } from '../../types/quiz';

export const chapter1Questions: QuizCategory = {
    id: 'network-perform',
    title: 'Chapter 1',
    description: 'Evalúa tus conocimientos sobre los conceptos básicos de redes.',
    icon: 'Workflow',
    color: 'indigo',
    questions: [
        {
            id: "netPer1",
            question: "Una empresa está considerando si utilizar una red cliente/servidor o una red peer-to-peer. ¿Cuáles son las tres características de una red peer-to-peer? (Elija tres opciones).",
            options: [
                "Mejor seguridad",
                "Fácil de crear",
                "Mejor rendimiento del dispositivo cuando actúa como cliente y servidor",
                "carece de administración centralizada",
                "Menos costo de implementación",
                "escalable"
            ],
            correctAnswer: [1, 3, 4], // Las tres opciones correctas
            explanation: "Debido a que no se requieren dispositivos de red ni servidores dedicados, las redes peer to peer son fáciles de crear, menos complejas y tienen costos más bajos. Las redes peer to peer tampoco tienen una administración centralizada. Son menos seguras, no escalables y los dispositivos que actúan como cliente y servidor pueden funcionar más lento.",
            type: "multiple"
        },
        {
            id: "netPer2",
            question: "¿Qué dispositivo realiza la función de determinar la ruta que deben tomar los mensajes a través de las interredes?",
            options: [
                "Un enrutador",
                "Un cortafuegos",
                "un servidor web",
                "un módem DSL"
            ],
            correctAnswer: 0,
            explanation: "Se utiliza un enrutador para determinar la ruta que deben seguir los mensajes a través de la red. Se utiliza un cortafuegos para filtrar el tráfico entrante y saliente. Se utiliza un módem DSL para proporcionar conexión a Internet a un hogar o una organización.",
            type: "single"
        },
        {
            id: "netPer3",
            question: "¿Cuáles son los dos criterios que se utilizan para seleccionar un medio de red entre varios medios de red? (Elija dos).",
            options: [
                "Los tipos de datos que deben priorizarse",
                "el coste de los dispositivos finales utilizados en la red",
                "La distancia que el medio seleccionado puede transportar con éxito una señal.",
                "el número de dispositivos intermediarios instalados en la red",
                "El entorno donde se instalará el medio seleccionado"
            ],
            correctAnswer: [2, 4], // Las dos opciones correctas
            explanation: "Los criterios para elegir un medio de red son la distancia que el medio seleccionado puede transportar con éxito una señal, el entorno en el que se instalará el medio seleccionado, la cantidad de datos y la velocidad a la que se deben transmitir los datos, y el costo del medio y su instalación.",
            type: "multiple"
        },
        {
            id: "netPer4",
            question: "¿Cuáles dos afirmaciones describen los dispositivos intermediarios? (Elija dos opciones).",
            options: [
                "Los dispositivos intermediarios generan contenido de datos.",
                "Los dispositivos intermediarios alteran el contenido de los datos.",
                "Los dispositivos intermediarios dirigen la ruta de los datos.",
                "Los dispositivos intermediarios conectan hosts individuales a la red.",
                "Los dispositivos intermediarios inician el proceso de encapsulación."
            ],
            correctAnswer: [2, 3], // Las dos opciones correctas
            explanation: "Las aplicaciones en los dispositivos finales generan datos, modifican el contenido de los datos y son responsables de iniciar el proceso de encapsulación.",
            type: "multiple"
        },
        {
            id: "netPer5",
            question: "¿Cuáles son dos funciones de los dispositivos finales en una red? (Elija dos opciones).",
            options: [
                "Originan los datos que fluyen a través de la red.",
                "Dirigen los datos a través de rutas alternativas en caso de fallas en el enlace.",
                "Filtran el flujo de datos para mejorar la seguridad.",
                "Son la interfaz entre los humanos y la red de comunicación.",
                "Proporcionan el canal a través del cual viaja el mensaje de la red."
            ],
            correctAnswer: [0, 3], // Las dos opciones correctas
            explanation: "Los dispositivos finales originan los datos que fluyen a través de la red. Los dispositivos intermediarios dirigen los datos por rutas alternativas en caso de fallas de enlace y filtran el flujo de datos para mejorar la seguridad. Los medios de red proporcionan el canal a través del cual viajan los mensajes de red.",
            type: "multiple"
        },
        {
            id: "netPer6",
            question: "¿Qué área de la red es más probable que el personal de TI de una universidad tenga que rediseñar como resultado directo de que muchos estudiantes traigan sus propias tabletas y teléfonos inteligentes a la escuela para acceder a los recursos escolares?",
            options: [
                "extranet",
                "intranet",
                "LAN cableada",
                "LAN inalámbrica",
                "WAN inalámbrica"
            ],
            correctAnswer: 3,
            explanation: "Una extranet es un área de red donde las personas o socios corporativos externos a la empresa acceden a los datos. Una intranet simplemente describe el área de red a la que normalmente solo accede el personal interno. La LAN cableada se ve afectada por los BYOD (traiga sus propios dispositivos) cuando los dispositivos se conectan a la red cableada. Es más probable que una LAN inalámbrica universitaria sea utilizada por tabletas y teléfonos inteligentes. Es más probable que una WAN inalámbrica sea utilizada por estudiantes universitarios para acceder a la red de su proveedor de telefonía celular.",
            type: "single"
        },
        {
            id: "netPer7",
            question: "Un empleado de una sucursal está creando una cotización para un cliente. Para ello, el empleado necesita acceder a información confidencial sobre precios de los servidores internos de la oficina central. ¿A qué tipo de red accedería el empleado?",
            options: [
                "una intranet",
                "La Internet",
                "una extranet",
                "una red de área local"
            ],
            correctAnswer: 0,
            explanation: "Intranet es un término que se utiliza para referirse a una conexión privada de redes LAN y WAN que pertenece a una organización. Una intranet está diseñada para que solo puedan acceder a ella los miembros, empleados u otras personas autorizadas de la organización.",
            type: "single"
        },
        {
            id: "netPer8",
            question: "¿Cuáles dos opciones de conexión proporcionan una conexión a Internet de alto ancho de banda y permanentemente activa a las computadoras de una oficina en el hogar? (Elija dos opciones).",
            options: [
                "celular",
                "DSL",
                "satélite",
                "cable",
                "teléfono de acceso telefónico"
            ],
            correctAnswer: [1, 3], // Las dos opciones correctas
            explanation: "Tanto el cable como el DSL proporcionan un gran ancho de banda, una conexión siempre activa y una conexión Ethernet a una computadora host o LAN.",
            type: "multiple"
        },
        {
            id: "netPer9",
            question: "¿Cuáles dos opciones de conexión a Internet no requieren que se instalen cables físicos hasta el edificio? (Elija dos opciones).",
            options: [
                "DSL",
                "celular",
                "satélite",
                "acceso telefónico",
                "línea arrendada dedicada"
            ],
            correctAnswer: [1, 2], // Las dos opciones correctas
            explanation: "La conectividad celular requiere el uso de la red de telefonía celular. La conectividad satelital se utiliza a menudo cuando no hay cableado físico disponible fuera del hogar o la empresa.",
            type: "multiple"
        },
        {
            id: "netPer10",
            question: "¿Qué término describe el estado de una red cuando la demanda de recursos de la red excede la capacidad disponible?",
            options: [
                "convergencia",
                "congestión",
                "mejoramiento",
                "sincronización"
            ],
            correctAnswer: 1,
            explanation: "Cuando la demanda de recursos de la red supera la capacidad disponible, la red se congestiona. Una red convergente está diseñada para ofrecer múltiples tipos de comunicación, como servicios de datos, video y voz, utilizando la misma infraestructura de red.",
            type: "single"
        },
        {
            id: "netPer11",
            question: "¿Qué expresión define con precisión el término ancho de banda?",
            options: [
                "un método para limitar el impacto de una falla de hardware o software en la red",
                "una medida de la capacidad de transporte de datos del medio",
                "un estado en el que la demanda de recursos de la red excede la capacidad disponible",
                "un conjunto de técnicas para gestionar la utilización de los recursos de la red"
            ],
            correctAnswer: 1,
            explanation: "Un método para limitar el impacto de una falla de hardware o software es la tolerancia a fallas. Una medida de la capacidad de transporte de datos es el ancho de banda. Un conjunto de técnicas para administrar la utilización de los recursos de la red es la calidad de servicio. Un estado en el que la demanda de recursos de la red supera la capacidad disponible es congestión.",
            type: "single"
        },
        {
            id: "netPer12",
            question: "¿Qué tendencia de redes implica el uso de herramientas y dispositivos personales para acceder a recursos en una red empresarial o de campus?",
            options: [
                "videoconferencia",
                "Computación en la nube",
                "Trae tu propio dispositivo", // Opción correcta
                "Redes de líneas eléctricas"
            ],
            correctAnswer: 2,
            explanation: "BYOD, o trae tu propio dispositivo, es una tendencia en redes donde se permite a los usuarios usar dispositivos y herramientas personales en redes empresariales y de campus.",
            type: "single"
        },
        {
            id: "netPer13",
            question: "¿Cuál es una característica de una red convergente?",
            options: [
                "Proporciona solo una ruta entre el origen y el destino de un mensaje.",
                "Limita el impacto de una falla al minimizar el número de dispositivos afectados.",
                "Entrega datos, voz y video a través de la misma infraestructura de red.", // Opción correcta
                "Una red convergente requiere una infraestructura de red separada para cada tipo de tecnología de comunicación."
            ],
            correctAnswer: 2,
            explanation: "Una red convergente es aquella en la que múltiples tecnologías, como datos, teléfono y vídeo, se distribuyen en la misma infraestructura de red.",
            type: "single"
        },
        {
            id: "netPer14",
            question: "¿Qué afirmación describe una característica de la computación en la nube?",
            options: [
                "Una empresa puede conectarse directamente a Internet sin necesidad de utilizar un ISP.",
                "Los usuarios individuales o las empresas pueden acceder a las aplicaciones a través de Internet mediante cualquier dispositivo y en cualquier parte del mundo.", // Opción correcta
                "Los dispositivos pueden conectarse a Internet a través del cableado eléctrico existente.",
                "Para acceder a la nube es necesario invertir en nueva infraestructura."
            ],
            correctAnswer: 1,
            explanation: "La computación en la nube permite a los usuarios acceder a aplicaciones, realizar copias de seguridad y almacenar archivos, y realizar tareas sin necesidad de software o servidores adicionales. Los usuarios de la nube acceden a los recursos a través de servicios basados ​​en suscripción o de pago por uso, en tiempo real, utilizando únicamente un navegador web.",
            type: "single"
        },
        {
            id: "netPer15",
            question: "¿Qué afirmación describe el uso de la tecnología de redes eléctricas?",
            options: [
                "Se utiliza un nuevo cableado eléctrico “inteligente” para ampliar una red LAN doméstica existente.",
                "Una red LAN doméstica se instala sin el uso de cableado físico.",
                "Un dispositivo se conecta a una red LAN doméstica existente mediante un adaptador y una toma de corriente eléctrica existente.", // Opción correcta
                "Los puntos de acceso inalámbricos utilizan adaptadores de línea eléctrica para distribuir datos a través de la LAN doméstica."
            ],
            correctAnswer: 2,
            explanation: "Las redes de línea eléctrica agregan la capacidad de conectar un dispositivo a la red mediante un adaptador en cualquier lugar donde haya una toma de corriente. La red utiliza el cableado eléctrico existente para enviar datos. No reemplaza el cableado físico, pero puede agregar funcionalidad en lugares donde no se pueden usar puntos de acceso inalámbricos o donde no se puede llegar a los dispositivos.",
            type: "single"
        },
        {
            id: "netPer16",
            question: "¿Qué violación de seguridad causaría la mayor cantidad de daño a la vida de un usuario doméstico?",
            options: [
                "Denegación de servicio a su servidor de correo electrónico",
                "Replicación de gusanos y virus en su computadora",
                "Captura de datos personales que conducen al robo de identidad", // Opción correcta
                "software espía que genera correos electrónicos no deseados"
            ],
            correctAnswer: 2,
            explanation: "En una PC personal, la denegación de servicio a servidores, los gusanos y virus, y el software espía que genera correos electrónicos no deseados pueden ser molestos, invasivos y frustrantes. Sin embargo, el robo de identidad puede ser devastador y cambiar la vida. Se deben implementar soluciones de seguridad en todos los dispositivos personales para protegerse contra este tipo de amenaza.",
            type: "single"
        },
        {
            id: "netPer17",
            question: "Un usuario está implementando seguridad en una red de una oficina pequeña. ¿Cuáles dos acciones proporcionarían los requisitos mínimos de seguridad para esta red? (Elija dos opciones).",
            options: [
                "Implementando un firewall", // Opción correcta
                "Instalación de una red inalámbrica",
                "Instalación de software antivirus", // Opción correcta
                "Implementación de un sistema de detección de intrusiones",
                "Agregar un dispositivo de prevención de intrusiones dedicado"
            ],
            correctAnswer: [0, 2],
            explanation: "Las medidas de seguridad técnicamente complejas, como la prevención de intrusiones y los sistemas de prevención de intrusiones, suelen asociarse a redes empresariales más que a redes domésticas. La instalación de software antivirus y antimalware y la implementación de un cortafuegos suelen ser los requisitos mínimos para las redes domésticas. La instalación de una red inalámbrica doméstica no mejorará la seguridad de la red y requerirá la adopción de medidas de seguridad adicionales.",
            type: "multiple"
        },
        {
            id: "netPer18",
            question: "Complete el espacio en blanco. Una red convergente es capaz de transmitir ______ a través de los mismos canales de comunicación.",
            options: [
                "voz, video, texto y gráficos", // Opción correcta
            ],
            correctAnswer: 0,
            explanation: "Cuando una red se utiliza para todo tipo de comunicación, como voz, vídeo, texto y gráficos, la red se denomina red convergente.",
            type: "single"
        },
        {
            id: "netPer19",
            question: "Llene el espacio en blanco. El acrónimo BYOD se refiere a la política que permite a los empleados utilizar sus ______ en la oficina comercial para acceder a la red y otros recursos.",
            options: [
                "dispositivos personales", // Opción correcta
            ],
            correctAnswer: 0,
            explanation: "BYOD, o 'Bring Your Own Device', permite a los empleados utilizar sus dispositivos personales en el trabajo, facilitando el acceso a la red y otros recursos.",
            type: "single"
        },
        {
            id: "netPer20",
            question: "¿Cuáles son dos funciones de los dispositivos intermediarios en una red? (Elija dos opciones).",
            options: [
                "Son la fuente principal y proveedores de información y servicios a los dispositivos finales.",
                "Ejecutan aplicaciones que apoyan la colaboración empresarial.",
                "Forman la interfaz entre la red humana y la red de comunicación subyacente.", // Opción correcta
                "Dirigen los datos a lo largo de vías alternativas cuando hay una falla en el enlace.", // Opción correcta
                "Filtran el flujo de datos según configuraciones de seguridad."
            ],
            correctAnswer: [2, 3],
            explanation: "Los dispositivos intermediarios desempeñan un papel crucial en la gestión del tráfico de red, asegurando que los datos lleguen a su destino incluso en caso de fallos y filtrando datos según configuraciones de seguridad.",
            type: "multiple"
        },
        {
            id: "netPer21",
            question: "¿Qué es Internet?",
            options: [
                "Es una red basada en tecnología Ethernet.",
                "Proporciona acceso a la red para dispositivos móviles.",
                "Proporciona conexiones a través de redes globales interconectadas.", // Opción correcta
                "Es una red privada para una organización con conexiones LAN y WAN."
            ],
            correctAnswer: [2],
            explanation: "Internet proporciona conexiones globales que permiten que los dispositivos en red se comuniquen.",
            type: "multiple"
        },
        {
            id: "netPer22",
            question: "¿A qué tipo de red debe acceder un usuario doméstico para poder realizar compras en línea?",
            options: [
                "una intranet",
                "La Internet", // Opción correcta
                "una extranet",
                "una red de área local"
            ],
            correctAnswer: [1],
            explanation: "Los usuarios domésticos acceden a la Internet para realizar compras en línea.",
            type: "multiple"
        },
        {
            id: "netPer23",
            question: "¿Qué tipo de tráfico de red requiere QoS?",
            options: [
                "correo electrónico",
                "Compra en línea",
                "videoconferencia", // Opción correcta
                "wiki"
            ],
            correctAnswer: [2],
            explanation: "La videoconferencia requiere calidad de servicio (QoS) para garantizar un rendimiento adecuado.",
            type: "multiple"
        },
        {
            id: "netPer24",
            question: "Un administrador de red está implementando una política que exige contraseñas seguras y complejas. ¿Qué objetivo de protección de datos respalda esta política?",
            options: [
                "integridad de los datos",
                "calidad de datos",
                "confidencialidad de los datos", // Opción correcta
                "redundancia de datos"
            ],
            correctAnswer: [2],
            explanation: "Las contraseñas seguras ayudan a garantizar la confidencialidad de los datos.",
            type: "multiple"
        },
        {
            id: "netPer25",
            question: "¿Cuáles son dos características de una red escalable? (Elija dos opciones).",
            options: [
                "Se sobrecarga fácilmente con el aumento del tráfico.",
                "crece en tamaño sin afectar a los usuarios existentes", // Opción correcta
                "No es tan confiable como una red pequeña.",
                "Adecuado para dispositivos modulares que permiten la expansión.", // Opción correcta
                "ofrece un número limitado de aplicaciones"
            ],
            correctAnswer: [1, 3],
            explanation: "Las redes escalables pueden crecer sin interrumpir el servicio a los usuarios existentes y son adecuadas para dispositivos modulares.",
            type: "multiple"
        },
        {
            id: "netPer26",
            question: "¿Qué conjunto de dispositivos contiene solo dispositivos intermediarios?",
            options: [
                "A, B, D, G",
                "A, B, E, F",
                "C, D, G, yo",
                "Sol, H, Yo, J" // Opción correcta
            ],
            correctAnswer: 0,
            explanation: "El conjunto Sol, H, Yo, J incluye únicamente dispositivos intermediarios.",
            image: "/images/Capitulo1/q26.png",
            type: "single"
        },
        {
            id: "netPer27",
            question: "¿Cuáles dos afirmaciones sobre la relación entre las redes LAN y las redes WAN son verdaderas? (Elija dos).",
            options: [
                "Tanto las redes LAN como las WAN conectan dispositivos finales.", // Opción correcta
                "Las WAN conectan LAN a un ancho de banda de velocidad más lento que el que las LAN conectan sus dispositivos finales internos.",
                "Las LAN conectan múltiples WAN entre sí.",
                "Las WAN deben ser de propiedad pública, pero las LAN pueden ser propiedad de entidades públicas o privadas.",
                "Las WAN suelen ser operadas por múltiples ISP, pero las LAN suelen ser operadas por organizaciones o individuos individuales." // Opción correcta
            ],
            correctAnswer: [1, 4],
            explanation: "Las LAN y las WAN conectan dispositivos finales, y las WAN suelen ser operadas por múltiples ISP.",
            type: "multiple"
        },
        {
            id: "netPer28",
            question: "¿Cuáles dos soluciones de Internet proporcionan una conexión de banda ancha de alto rendimiento y siempre activa a las computadoras en una LAN? (Elija dos).",
            options: [
                "celular",
                "DSL", // Opción correcta
                "satélite",
                "cable", // Opción correcta
                "teléfono de acceso telefónico"
            ],
            correctAnswer: [1, 3],
            explanation: "DSL y cable son soluciones de Internet que ofrecen conexiones de banda ancha de alto rendimiento.",
            type: "multiple"
        },
        {
            id: "netPer29",
            question: "¿Qué descripción define correctamente una red convergente?",
            options: [
                "Un único canal de red capaz de ofrecer múltiples formas de comunicación.", // Opción correcta
                "una red que permite a los usuarios interactuar directamente entre sí a través de múltiples canales",
                "una red dedicada con canales separados para servicios de video y voz",
                "una red que se limita a intercambiar información basada en caracteres"
            ],
            correctAnswer: [0],
            explanation: "Una red convergente utiliza un único canal para ofrecer múltiples formas de comunicación.",
            type: "multiple"
        },
        {
            id: "netPer30",
            question: "¿Qué afirmación describe una red que admite QoS?",
            options: [
                "El menor número posible de dispositivos se ven afectados por un fallo.",
                "La red debería poder expandirse para satisfacer la demanda de los usuarios.",
                "La red proporciona niveles predecibles de servicio para diferentes tipos de tráfico.", // Opción correcta
                "Los datos enviados a través de la red no se alteran durante la transmisión."
            ],
            correctAnswer: [2],
            explanation: "Una red que admite QoS puede proporcionar niveles de servicio predecibles para diferentes tipos de tráfico.",
            type: "multiple"
        },
        {
            id: "netPer31",
            question: "¿Cuál es una característica de las redes conmutadas por circuitos?",
            options: [
                "Si todos los circuitos están ocupados, no se puede realizar una nueva llamada.", // Opción correcta
                "Si falla un circuito, la llamada se reenviará a una nueva ruta.",
                "Las redes conmutadas por circuitos pueden aprender y utilizar dinámicamente circuitos redundantes.",
                "Un solo mensaje se puede dividir en varios bloques de mensajes que se transmiten a través de múltiples circuitos simultáneamente."
            ],
            correctAnswer: [0],
            explanation: "En las redes conmutadas por circuitos, si todos los circuitos están ocupados, no se puede realizar una nueva llamada.",
            type: "multiple"
        },
        {
            id: "netPer32",
            question: "¿Qué herramienta proporciona comunicación de audio y vídeo en tiempo real a través de Internet para que las empresas puedan realizar reuniones corporativas con participantes de varias ubicaciones remotas?",
            options: [
                "wiki",
                "blog",
                "Telepresencia", // Opción correcta
                "mensajería instantánea"
            ],
            correctAnswer: [2],
            explanation: "La telepresencia permite la comunicación en tiempo real a través de audio y video para reuniones corporativas.",
            type: "multiple"
        },
        {
            id: "netPer33",
            question: "¿Qué expresión define con precisión el término congestión?",
            options: [
                "un método para limitar el impacto de una falla de hardware o software en la red",
                "una medida de la capacidad de transporte de datos de la red",
                "un estado en el que la demanda de recursos de la red excede la capacidad disponible", // Opción correcta
                "un conjunto de técnicas para gestionar la utilización de los recursos de la red"
            ],
            correctAnswer: [2],
            explanation: "La congestión se produce cuando la demanda de recursos de la red excede su capacidad.",
            type: "multiple"
        },
        {
            id: "netPer34",
            question: "Exigir contraseñas seguras y complejas es una práctica que respalda qué objetivo de seguridad de red?",
            options: [
                "Mantener la integridad de la comunicación",
                "garantizar la fiabilidad del acceso",
                "garantizar la confidencialidad de los datos", // Opción correcta
                "garantizar redundancia"
            ],
            correctAnswer: [2],
            explanation: "Las contraseñas seguras ayudan a garantizar la confidencialidad de los datos.",
            type: "multiple"
        },
        {
            id: "netPer35",
            question: "¿Cuáles son las tres herramientas de red que proporcionan la protección de seguridad mínima requerida para los usuarios domésticos? (Elija tres opciones).",
            options: [
                "un sistema de prevención de intrusiones",
                "software antivirus", // Opción correcta
                "software antispyware", // Opción correcta
                "listas de control de acceso",
                "Un cortafuegos", // Opción correcta
                "Redes de líneas eléctricas"
            ],
            correctAnswer: [1, 2, 4],
            explanation: "Las herramientas esenciales de seguridad para usuarios domésticos incluyen software antivirus, antispyware y cortafuegos.",
            type: "multiple"
        },
        {
            id: "netPer36",
            question: "¿Cuáles son los dos criterios que se utilizan para seleccionar los medios de comunicación en red? (Elija dos).",
            options: [
                "La distancia que los medios pueden transportar con éxito una señal.", // Opción correcta
                "El entorno donde se instalarán los medios", // Opción correcta
                "el coste de los dispositivos finales utilizados en la red",
                "el número de dispositivos intermediarios instalados en la red",
                "Los tipos de datos que deben priorizarse"
            ],
            correctAnswer: [0, 1],
            explanation: "Los criterios para seleccionar medios de comunicación incluyen la distancia de transmisión y el entorno de instalación.",
            type: "multiple"
        },
        {
            id: "netPer37",
            question: "Llene el espacio en blanco.",
            options: [
                "El acrónimo BYOD se refiere a la tendencia de los usuarios finales a poder utilizar sus dispositivos personales para acceder a la red y los recursos de la empresa."
            ],
            correctAnswer: [0],
            explanation: "BYOD significa 'Bring Your Own Device' y permite a los usuarios acceder a recursos de la empresa desde sus propios dispositivos.",
            type: "single"
        },
        {
            id: "netPer38",
            question: "Una universidad está construyendo un nuevo dormitorio en su campus. Los trabajadores están cavando en el suelo para instalar una nueva tubería de agua para el dormitorio. Un trabajador daña accidentalmente un cable de fibra óptica que conecta dos de los dormitorios existentes con el centro de datos del campus. Aunque el cable ha sido cortado, los estudiantes en los dormitorios solo experimentan una interrupción muy breve de los servicios de red. ¿Qué característica de la red se muestra aquí?",
            options: [
                "calidad de servicio (QoS)",
                "escalabilidad",
                "seguridad",
                "tolerancia a fallos",
                "integridad"
            ],
            correctAnswer: [3],
            explanation: "La tolerancia a fallos permite que la red continúe funcionando a pesar de fallos en el hardware.",
            type: "multiple"
        }
    ]
};
