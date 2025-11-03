import { QuizCategory } from '../../types/quiz';

export const chapter4Questions: QuizCategory = {
  id: 'network-rigor',
  title: 'Chapter 4',
  description: 'Evalúa tus conocimientos sobre los conceptos básicos de redes.',
  icon: 'Orbit',
  color: 'indigo',
  questions: [
    {
      id: "netRi1",
      question: "¿Cuáles son dos razones para que los protocolos de capa física utilicen técnicas de codificación de tramas? (Elige dos)",
      options: [
        "reducir la cantidad de colisiones en el medio",
        "distinguir bits de datos de bits de control",
        "proporcionar una mejor corrección de errores en el medio",
        "identificar dónde comienza y termina la trama",
        "aumentar el rendimiento del medio",
        "distinguir datos de información de control"
      ],
      correctAnswer: [1, 3],
      explanation: "Una técnica de codificación convierte un flujo de bits de datos en un código predefinido que puede ser reconocido tanto por el transmisor como por el receptor. Usar patrones predefinidos ayuda a diferenciar bits de datos de bits de control y proporciona una mejor detección de errores en el medio.",
      type: "multiple"
    },
    {
      id: "netRi2",
      question: "¿Qué indica el término 'throughput'?",
      options: [
        "la tasa de transferencia de datos garantizada ofrecida por un ISP",
        "la capacidad de un medio específico para transportar datos",
        "la medida de los datos utilizables transferidos a través del medio",
        "la medida de los bits transferidos a través del medio en un período de tiempo",
        "el tiempo que tarda un mensaje en llegar del remitente al receptor"
      ],
      correctAnswer: 3,
      explanation: "El throughput es la medida de la transferencia de bits a través del medio en un período de tiempo. Está influenciado por factores como EMI y latencia, por lo que rara vez coincide con el ancho de banda especificado para un medio de red. La medida de los datos utilizables transferidos se conoce como 'goodput'.",
      type: "single"
    },
    {
      id: "netRi3",
      question: "Un administrador de red nota que algunos cables Ethernet recién instalados están transmitiendo señales de datos corruptas y distorsionadas. Los nuevos cables se instalaron en el techo cerca de luces fluorescentes y equipos eléctricos. ¿Cuáles son dos factores que podrían interferir con los cables de cobre y causar distorsión y corrupción de señales? (Elige dos)",
      options: [
        "EMI",
        "diafonía (crosstalk)",
        "Solicitud de la información (RFI)",
        "atenuación de la señal",
        "longitud extendida del cableado"
      ],
      correctAnswer: [0, 2],
      explanation: "Las señales EMI y RFI pueden distorsionar y corromper señales de datos transportadas por medios de cobre. Estas distorsiones suelen provenir de ondas de radio y dispositivos electromagnéticos como motores y luces fluorescentes.",
      type: "multiple"
    },
    {
      id: "netRi4",
      question: "¿Qué característica describe la diafonía (crosstalk)?",
      options: [
        "la distorsión de la señal de red por luces fluorescentes",
        "la distorsión de los mensajes transmitidos por señales transportadas en cables adyacentes",
        "la debilitación de la señal de red por largos tramos de cable",
        "la pérdida de señal inalámbrica debido a una distancia excesiva del punto de acceso"
      ],
      correctAnswer: 1,
      explanation: "La diafonía es la perturbación causada por los campos eléctricos o magnéticos de la señal transportada en un cable adyacente dentro del mismo cableado. EMI y RFI pueden distorsionar señales de red debido a interferencias de luces fluorescentes o motores eléctricos. La atenuación ocurre cuando la señal se deteriora al viajar a través de un cable de cobre. Las señales inalámbricas pueden experimentar pérdida debido a distancias excesivas desde un punto de acceso, pero esto no es crosstalk.",
      type: "single"
    },
    {
      id: "netRi5",
      question: "¿Qué técnica se utiliza con el cable UTP para ayudar a proteger contra la interferencia de la diafonía (crosstalk)?",
      options: [
        "torcer los cables juntos en pares",
        "envolver un escudo de aluminio alrededor de los pares de cables",
        "encerrar los cables en una cubierta plástica flexible",
        "terminar el cable con conectores especiales a tierra"
      ],
      correctAnswer: 0,
      explanation: "Para prevenir los efectos de la diafonía, los cables UTP están torcidos juntos en pares. Al torcer los cables, los campos magnéticos de cada cable se cancelan entre sí.",
      type: "single"
    },
    {
      id: "netRi6",
      question: "Consulta el diagrama. La PC está conectada al puerto de consola del switch. Todas las demás conexiones se realizan a través de enlaces FastEthernet. ¿Qué tipos de cables UTP pueden usarse para conectar los dispositivos?",
      options: [
        "1 - rollover, 2 - crossover, 3 - straight-through",
        "1 - rollover, 2 - straight-through, 3 - crossover",
        "1 - crossover, 2 - straight-through, 3 - rollover",
        "1 - crossover, 2 - rollover, 3 - straight-through"
      ],
      correctAnswer: 1,
      explanation: "Un cable de conexión directa (straight-through) se utiliza comúnmente para conectar un host a un switch y un switch a un router. Un cable cruzado (crossover) se utiliza para interconectar dispositivos similares como switch a switch, host a host o router a router. Un cable rollover se utiliza para conectar a un puerto de consola de un router o switch.",
      image: "/images/Capitulo4/q6.png",
      type: "single"
    },
    {
      id: "netRi7",
      question: "Consulta el diagrama. ¿Qué está mal con la terminación mostrada?",
      options: [
        "El trenzado de cobre no debería haberse eliminado.",
        "Se está utilizando el tipo incorrecto de conector.",
        "La longitud de los cables desenrollados es demasiado larga.",
        "Los cables son demasiado gruesos para el conector que se está utilizando."
      ],
      correctAnswer: 2,
      explanation: "Cuando se termina un cable con un conector RJ-45, es importante asegurarse de que los cables desenrollados no sean demasiado largos y que la cubierta plástica flexible que rodea los cables esté correctamente crimpada, no los cables desnudos. Ninguno de los cables de colores debería ser visible desde la parte inferior del conector.",
      image: "/images/Capitulo4/q7.png",
      type: "single"
    },
    {
      id: "netRi8",
      question: "¿Qué tipo de conector utiliza una tarjeta de interfaz de red?",
      options: [
        "DIN",
        "PS-2",
        "RJ-11",
        "RJ-45"
      ],
      correctAnswer: 3,
      explanation: "El conector RJ-45 es el estándar utilizado para conectar una tarjeta de interfaz de red a un cable Ethernet.",
      type: "single"
    },
    {
      id: "netRi9",
      question: "¿Cuál es una ventaja de utilizar cableado de fibra óptica en lugar de cableado de cobre?",
      options: [
        "Generalmente es más barato que el cableado de cobre.",
        "Puede instalarse alrededor de curvas pronunciadas.",
        "Es más fácil de terminar e instalar que el cableado de cobre.",
        "Puede transportar señales mucho más lejos que el cableado de cobre."
      ],
      correctAnswer: 3,
      explanation: "Aunque el cable de cobre suele ser más barato y fácil de instalar, los cables de fibra óptica tienen un rango de señal mucho mayor que los cables de cobre.",
      type: "single"
    },
    {
      id: "netRi10",
      question: "¿Por qué se utilizan dos hilos de fibra para una sola conexión de fibra óptica?",
      options: [
        "Los dos hilos permiten que los datos viajen distancias más largas sin degradarse.",
        "Previenen que la diafonía cause interferencia en la conexión.",
        "Aumentan la velocidad a la que pueden viajar los datos.",
        "Permiten conectividad full-dúplex."
      ],
      correctAnswer: 3,
      explanation: "La luz solo puede viajar en una dirección en un solo hilo de fibra. Para permitir la comunicación full-dúplex, deben conectarse dos hilos de fibra entre cada dispositivo.",
      type: "single"
    },
    {
      id: "netRi11",
      question: "Un administrador de red está diseñando el diseño de una nueva red inalámbrica. ¿Qué tres áreas de preocupación deben tenerse en cuenta al construir una red inalámbrica? (Elige tres)",
      options: [
        "opciones de movilidad",
        "seguridad",
        "interferencia",
        "área de cobertura",
        "cableado extenso",
        "colisión de paquetes"
      ],
      correctAnswer: [1, 2, 3],
      explanation: "Las tres áreas de preocupación para las redes inalámbricas se centran en el tamaño del área de cobertura, la posible interferencia cercana y la provisión de seguridad en la red. El cableado extenso no es una preocupación para redes inalámbricas, ya que requieren cableado mínimo para proporcionar acceso inalámbrico. Las opciones de movilidad no forman parte de las preocupaciones principales.",
      type: "multiple"
    },
    {
      id: "netRi12",
      question: "¿Qué capa del modelo OSI es responsable de especificar el método de encapsulación utilizado para tipos específicos de medios?",
      options: [
        "aplicación",
        "transporte",
        "enlace de datos",
        "física"
      ],
      correctAnswer: 2,
      explanation: "La encapsulación es una función de la capa de enlace de datos. Los diferentes tipos de medios requieren diferentes métodos de encapsulación en esta capa.",
      type: "single"
    },
    {
      id: "netRi13",
      question: "¿Cuáles son dos servicios realizados por la capa de enlace de datos del modelo OSI? (Elige dos)",
      options: [
        "Cifra los paquetes de datos.",
        "Determina la ruta para reenviar los paquetes.",
        "Acepta paquetes de la Capa 3 y los encapsula en tramas.",
        "Proporciona control de acceso al medio y realiza la detección de errores.",
        "Supervisa la comunicación de la Capa 2 mediante la construcción de una tabla de direcciones MAC."
      ],
      correctAnswer: [2, 3],
      explanation: "La capa de enlace de datos intercambia tramas entre nodos a través de medios físicos. Específicamente, acepta paquetes de la Capa 3 y los encapsula en tramas, y proporciona control de acceso al medio y realiza la detección de errores.",
      type: "multiple"
    },
    {
      id: "netRi14",
      question: "¿Qué es cierto con respecto a las topologías físicas y lógicas?",
      options: [
        "La topología lógica siempre es la misma que la topología física.",
        "Las topologías físicas se ocupan de cómo una red transfiere tramas.",
        "Las topologías físicas muestran el esquema de direccionamiento IP de cada red.",
        "Las topologías lógicas se refieren a cómo una red transfiere datos entre dispositivos."
      ],
      correctAnswer: 3,
      explanation: "Las topologías físicas muestran la interconexión física de los dispositivos. Las topologías lógicas muestran cómo los datos se transfieren entre nodos conectados.",
      type: "single"
    },
    {
      id: "netRi15",
      question: "¿Qué método de transferencia de datos permite que la información se envíe y reciba al mismo tiempo?",
      options: [
        "full duplex",
        "half duplex",
        "multiplex",
        "simplex"
      ],
      correctAnswer: 0,
      explanation: "El método full duplex permite que los datos sean enviados y recibidos simultáneamente.",
      type: "single"
    },
    {
      id: "netRi16",
      question: "¿Qué describe una topología de estrella extendida?",
      options: [
        "Los dispositivos finales se conectan a un dispositivo intermedio central, que a su vez se conecta a otros dispositivos intermedios centrales.",
        "Los dispositivos finales están conectados entre sí por un bus y cada bus se conecta a un dispositivo intermedio central.",
        "Cada sistema final está conectado a su vecino a través de un dispositivo intermedio.",
        "Todos los dispositivos finales e intermedios están conectados en cadena entre sí."
      ],
      correctAnswer: 0,
      explanation: "En una topología de estrella extendida, los dispositivos intermedios centrales conectan otras topologías en estrella.",
      type: "single"
    },
    {
      id: "netRi17",
      question: "Consulta el esquema. ¿Qué métodos de control de acceso al medio se utilizan en las redes del esquema?",
      options: [
        "Las tres redes utilizan CSMA/CA.",
        "Ninguna de las redes requiere control de acceso al medio.",
        "La Red 1 utiliza CSMA/CD y la Red 3 utiliza CSMA/CA.",
        "La Red 1 utiliza CSMA/CA y la Red 2 utiliza CSMA/CD.",
        "La Red 2 utiliza CSMA/CA y la Red 3 utiliza CSMA/CD."
      ],
      correctAnswer: 2,
      explanation: "La Red 1 (LAN Ethernet) utiliza CSMA/CD. La Red 2 (conexión WAN punto a punto) no requiere control de acceso al medio. La Red 3 (WLAN) utiliza CSMA/CA.",
      image: "/images/Capitulo4/q17.png",
      type: "single"
    },
    {
      id: "netRi18",
      question: "¿Qué contiene el tráiler de una trama de enlace de datos?",
      options: [
        "dirección lógica",
        "dirección física",
        "datos",
        "detección de errores"
      ],
      correctAnswer: 3,
      explanation: "El tráiler de una trama de enlace de datos contiene información de detección de errores pertinente a la trama incluida en el campo FCS.",
      type: "single"
    },
    {
      id: "netRi19",
      question: "Mientras los datos viajan en el medio como una secuencia de 1s y 0s, ¿cómo identifica un nodo receptor el inicio y fin de una trama?",
      options: [
        "El nodo transmisor inserta bits de inicio y parada en la trama.",
        "El nodo transmisor envía una señal para notificar que se adjunta una trama de datos.",
        "El nodo receptor identifica el inicio de una trama viendo una dirección física.",
        "El nodo transmisor envía una señal fuera de banda al receptor sobre el inicio de la trama."
      ],
      correctAnswer: 0,
      explanation: "El proceso de tramas inserta indicadores de inicio y parada en la trama para que el receptor pueda detectar el comienzo y fin de la trama.",
      type: "single"
    },
    {
      id: "netRi20",
      question: "¿Cuál es el papel de la subcapa Logical Link Control (LLC)?",
      options: [
        "Proporcionar direccionamiento de la capa de enlace de datos.",
        "Proporcionar acceso a varias tecnologías de red de la Capa 1.",
        "Definir los procesos de acceso al medio realizados por el hardware de red.",
        "Marcar tramas para identificar el protocolo de capa 3 que se transporta."
      ],
      correctAnswer: 3,
      explanation: "Existen dos subcapas en la capa de enlace de datos: MAC y LLC. La subcapa LLC es responsable de comunicarse con la capa de red y de etiquetar las tramas para identificar qué protocolo de capa 3 está encapsulado.",
      type: "single"
    },
    {
      id: "netRi21",
      question: "¿Cuál es la definición de ancho de banda?",
      options: [
        "La medida de datos utilizables transferidos durante un período de tiempo dado.",
        "La velocidad a la que viajan los bits en la red.",
        "La medida de la transferencia de bits a través del medio durante un período de tiempo dado.",
        "La cantidad de datos que puede fluir de un lugar a otro en un período de tiempo determinado."
      ],
      correctAnswer: 3,
      explanation: "El ancho de banda es la medida de la capacidad de un medio de red para transportar datos. Es la cantidad de datos que puede moverse entre dos puntos en la red durante un período de tiempo específico, generalmente un segundo.",
      type: "single"
    },
    {
      id: "netRi22",
      question: "¿Cuál es la función del valor CRC que se encuentra en el campo FCS de una trama?",
      options: [
        "Verificar la integridad de la trama recibida.",
        "Verificar la dirección física en la trama.",
        "Verificar la dirección lógica en la trama.",
        "Calcular el encabezado de suma de comprobación para el campo de datos en la trama."
      ],
      correctAnswer: 0,
      explanation: "El valor CRC en el campo FCS de una trama recibida se compara con el valor CRC calculado de esa trama para verificar su integridad. Si los dos valores no coinciden, la trama se descarta.",
      type: "single"
    },
    {
      id: "netRi23",
      question: "El término______indica la capacidad de un medio para transportar datos y normalmente se mide en kilobits por segundo (kb/s) o megabits por segundo (Mb/s).",
      options: ["ancho de banda"],
      correctAnswer: 0,
      explanation: "El ancho de banda es la capacidad de un medio para transportar datos en un período de tiempo dado. Normalmente se mide en kilobits por segundo (kb/s) o megabits por segundo (Mb/s).",
      type: "single"
    },
    {
      id: "netRi24",
      question: "¿Qué acrónimo se usa para referirse a la subcapa de enlace de datos que identifica el protocolo de la capa de red encapsulado en la trama?",
      options: ["LLC"],
      correctAnswer: 0,
      explanation: "Logical Link Control (LLC) es la subcapa de enlace de datos que define los procesos de software para proporcionar servicios a los protocolos de la capa de red.",
      type: "single"
    },
    {
      id: "netRi26",
      question: "Una topología física que es una variación o combinación de una topología punto a punto, hub-and-spoke o de malla se conoce comúnmente como topología ________.",
      options: ["híbrida"],
      correctAnswer: 0,
      explanation: "Una topología híbrida es una variación o combinación de una topología punto a punto, hub-and-spoke, o de malla.",
      type: "single"
    },
    {
      id: "netRi27",
      question: "¿Cuáles son dos ejemplos de topologías híbridas? (Elija dos.)",
      options: [
        "punto a punto",
        "malla parcial",
        "estrella extendida",
        "hub-and-spoke",
        "malla completa"
      ],
      correctAnswer: [1, 2],
      explanation: "Una topología híbrida es aquella que combina otras topologías. Tanto 'malla parcial' como 'estrella extendida' son ejemplos de topologías híbridas.",
      type: "multiple"
    },
    {
      id: "netRi28",
      question: "¿Qué enunciado describe la señalización en la capa física?",
      options: [
        "Enviar las señales de manera asincrónica significa que se transmiten sin una señal de reloj.",
        "En la señalización, un 1 siempre representa voltaje y un 0 siempre representa ausencia de voltaje.",
        "La codificación inalámbrica incluye enviar una serie de clics para delimitar los tramas.",
        "La señalización es un método para convertir un flujo de datos en un código predefinido."
      ],
      correctAnswer: 0,
      explanation: "La señalización es un método de convertir un flujo de datos en un código predefinido para la transmisión en la capa física.",
      type: "single"
    },
    {
      id: "netRi29",
      question: "El throughput de una red FastEthernet es de 80 Mb/s. El overhead de tráfico es de 15 Mb/s. ¿Cuál es el goodput de esta red?",
      options: [
        "15 Mb/s",
        "95 Mb/s",
        "55 Mb/s",
        "65 Mb/s",
        "80 Mb/s"
      ],
      correctAnswer: 3,
      explanation: "El goodput es el throughput menos el overhead, lo que da 65 Mb/s (80 Mb/s - 15 Mb/s).",
      type: "single"
    },
    {
      id: "netRi30",
      question: "¿Cómo se mejora el efecto de cancelación del campo magnético en los cables UTP?",
      options: [
        "aumentando el grosor de la cubierta de PVC que encierra todos los cables",
        "aumentando y variando el número de torsiones en cada par de cables",
        "aumentando el grosor de los cables de cobre",
        "disminuyendo el número de cables que se usan para transmitir datos"
      ],
      correctAnswer: 1,
      explanation: "El efecto de cancelación del campo magnético se mejora aumentando y variando el número de torsiones en cada par de cables.",
      type: "single"
    },
    {
      id: "netRi31",
      question: "¿Qué enunciado es correcto sobre la fibra multimodo?",
      options: [
        "Los cables de fibra multimodo transportan señales de múltiples dispositivos emisores conectados.",
        "La fibra multimodo comúnmente usa un láser como fuente de luz.",
        "Los cables patch SC-SC se usan con fibras multimodo.",
        "La fibra multimodo tiene un núcleo más delgado que la fibra monomodo."
      ],
      correctAnswer: 2,
      explanation: "Los cables de fibra multimodo suelen usar conectores SC-SC y una fuente de luz LED, no láser.",
      type: "single"
    },
    {
      id: "netRi32",
      question: "Para proporcionar tasas de datos de hasta 1.3 Gb/s y ser compatible con dispositivos más antiguos, ¿qué estándar inalámbrico debe implementarse?",
      options: [
        "802.11n",
        "802.11ac",
        "802.11g",
        "802.11b"
      ],
      correctAnswer: 1,
      explanation: "El estándar 802.11ac permite velocidades de hasta 1.3 Gb/s y es compatible con dispositivos más antiguos.",
      type: "single"
    },
    {
      id: "netRi33",
      question: "¿Cuál es una característica principal de la capa de enlace de datos?",
      options: [
        "Genera las señales eléctricas u ópticas que representan los 1 y 0 en el medio.",
        "Convierte un flujo de bits de datos en un código predefinido.",
        "Aísla el protocolo de la capa superior del conocimiento del medio físico que se utilizará en la comunicación.",
        "Acepta paquetes de la Capa 3 y decide la ruta para enviar una trama a un host en una red remota."
      ],
      correctAnswer: 2,
      explanation: "La capa de enlace de datos actúa como una capa de abstracción entre el protocolo de capa superior y el medio físico.",
      type: "single"
    },
    {
      id: "netRi34",
      question: "¿Cuáles son dos características de las redes inalámbricas 802.11? (Elija dos.)",
      options: [
        "Usan tecnología CSMA/CA.",
        "Usan tecnología CSMA/CD.",
        "Son redes libres de colisiones.",
        "Las estaciones pueden transmitir en cualquier momento.",
        "Pueden ocurrir colisiones en las redes."
      ],
      correctAnswer: [0, 4],
      explanation: "Las redes inalámbricas 802.11 usan CSMA/CA y pueden tener colisiones debido al acceso compartido al medio.",
      type: "multiple"
    },
    {
      id: "netRi35",
      question: "¿Cuál es el propósito del campo FCS en una trama?",
      options: [
        "Obtener la dirección MAC del nodo emisor.",
        "Verificar la dirección lógica del nodo emisor.",
        "Calcular el encabezado CRC para el campo de datos.",
        "Determinar si ocurrieron errores en la transmisión y recepción."
      ],
      correctAnswer: 3,
      explanation: "El campo FCS sirve para determinar si ocurrieron errores en la transmisión y recepción de una trama.",
      type: "single"
    },
    {
      id: "netRi36",
      question: "Complete el espacio en blanco con un número. 10,000,000,000 b/s también se puede escribir como ________.",
      options: ["10 Gb/s"],
      correctAnswer: 0,
      explanation: "10,000,000,000 b/s es equivalente a 10 Gb/s.",
      type: "single"
    },    
    {
      id: "netRi37",
      question: "¿Que declaracion describe los metodos de control de acceso a los medios que utilizan las redes en la exposición?",
      options: [
        "las tres redes utilizan CSMA/CA",
        "Ninguna de las redes requiere control de acceso a los medios",
        "La red 1 utiliza CSMA/CD y la red 3 utiliza CSMA/CA",
        "La red 1 utiliza CSMA/CA y la red 2 utiliza CSMA/CD",
        "La red 2 utiliza CSMA/CA y la red 3 utiliza CSMA/CD"
      ],
      correctAnswer: 2,
      explanation: "CSMA/CD (Carrier Sense Multiple Access with Collision Detection) se utiliza principalmente en redes cableadas Ethernet para detectar colisiones y retransmitir datos. CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) se utiliza en redes inalámbricas para evitar colisiones mediante la coordinación del acceso al medio antes de transmitir. Por lo tanto, es correcto que la red 1 utiliza CSMA/CD y la red 3 utiliza CSMA/CA, ya que esta combinación describe el uso típico en redes cableadas e inalámbricas.",
      image: "/images/Capitulo4/q37.png",
      type: "single"
    }
  ]
};