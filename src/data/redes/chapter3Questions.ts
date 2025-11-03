import { QuizCategory } from '../../types/quiz';

export const chapter3Questions: QuizCategory = {
  id: 'network-basics',
  title: 'Chapter 3',
  description: 'Evalúa tus conocimientos sobre los conceptos básicos de redes.',
  icon: 'Waypoints',
  color: 'indigo',
  questions: [
    {
      id: "netBas1",
      question: "¿Qué método pueden utilizar dos computadoras para garantizar que no se pierdan paquetes porque se envían demasiados datos demasiado rápido?",
      options: ["encapsulamiento", "control de flujo", "método de acceso", "tiempo de espera de respuesta"],
      correctAnswer: 1,
      explanation: "El control de flujo permite que la fuente y el destino establezcan el tiempo de transmisión y recepción de datos, garantizando que los datos no se envíen demasiado rápido.",
      type: "single"
    },
    {
      id: "netBas2",
      question: "¿Qué tipo de comunicación enviará un mensaje a todos los dispositivos en una red de área local?",
      options: ["transmisión", "multidifusión", "unidifusión", "Todo transmitido"],
      correctAnswer: 0,
      explanation: "La comunicación de difusión es una comunicación de uno a todos. Es diferente de unidifusión y multidifusión.",
      type: "single"
    },
    {
      id: "netBas3",
      question: "¿Qué proceso se utiliza para colocar un mensaje dentro de otro mensaje para transferirlo desde el origen al destino?",
      options: ["control de acceso", "descodificación", "encapsulamiento", "control de flujo"],
      correctAnswer: 2,
      explanation: "La encapsulación es el proceso de colocar un mensaje dentro de otro mensaje. Un ejemplo es cómo se coloca un paquete en un campo de datos cuando se encapsula en un marco.",
      type: "single"
    },
    {
      id: "netBas4",
      question: "Un cliente web envía una solicitud de una página web a un servidor web. Desde la perspectiva del cliente, ¿cuál es el orden correcto de la pila de protocolos que se utiliza para preparar la solicitud para su transmisión?",
      options: [
        "HTTP, IP, TCP, Ethernet",
        "HTTP, TCP, IP, Ethernet",
        "Ethernet, TCP, IP y HTTP",
        "Ethernet, IP, TCP, HTTP"
      ],
      correctAnswer: 1,
      explanation: "1. HTTP regula la forma en que interactúan un servidor web y un cliente. 2. TCP administra conversaciones individuales entre servidores web y clientes. 3. IP es responsable de la entrega a través de la mejor ruta hasta el destino. 4. Ethernet toma el paquete de IP y lo formatea para su transmisión.",
      type: "single"
    },
    {
      id: "netBas5",
      question: "¿Cuál afirmación es correcta acerca de los protocolos de red?",
      options: [
        "Los protocolos de red definen el tipo de hardware que se utiliza y cómo se monta en los racks.",
        "Definen cómo se intercambian los mensajes entre el origen y el destino.",
        "Todos ellos funcionan en la capa de acceso a la red de TCP/IP.",
        "Sólo son necesarios para el intercambio de mensajes entre dispositivos en redes remotas."
      ],
      correctAnswer: 1,
      explanation: "Los protocolos de red se implementan en hardware, software o ambos. Interactúan entre sí dentro de diferentes capas de una pila de protocolos. Los protocolos no tienen nada que ver con la instalación del equipo de red. Los protocolos de red son necesarios para intercambiar información entre dispositivos de origen y destino en redes locales y remotas.",
      type: "single"
    },
    {
      id: "netBas6",
      question: "¿Qué afirmación es verdadera acerca de los modelos TCP/IP y OSI?",
      options: [
        "La capa de transporte TCP/IP y la capa 4 de OSI proporcionan servicios y funciones similares.",
        "La capa de acceso a la red TCP/IP tiene funciones similares a la capa de red OSI.",
        "La capa 7 de OSI y la capa de aplicación TCP/IP proporcionan funciones idénticas.",
        "Las primeras tres capas OSI describen servicios generales que también proporciona la capa de Internet TCP/IP."
      ],
      correctAnswer: 0,
      explanation: "La capa de Internet TCP/IP proporciona la misma función que la capa de red OSI. La capa de transporte de los modelos TCP/IP y OSI proporciona la misma función. La capa de aplicación TCP/IP incluye las mismas funciones que las capas 5, 6 y 7 de OSI.",
      type: "single"
    },
    {
      id: "netBas7",
      question: "¿Cuál es la ventaja de utilizar estándares para desarrollar e implementar protocolos?",
      options: [
        "Un protocolo particular sólo puede ser implementado por un fabricante.",
        "Los productos de diferentes fabricantes pueden interoperar con éxito.",
        "Los distintos fabricantes tienen la libertad de aplicar distintos requisitos al implementar un protocolo.",
        "Los estándares brindan flexibilidad a los fabricantes para crear dispositivos que cumplan con requisitos únicos."
      ],
      correctAnswer: 1,
      explanation: "Los protocolos basados ​​en estándares permiten que los productos de distintos fabricantes puedan interoperar con éxito. Los protocolos basados ​​en estándares permiten que muchos fabricantes implementen ese protocolo. Si distintos fabricantes implementan distintos requisitos dentro del mismo protocolo, sus productos no serán interoperables.",
      type: "single"
    },
    {
      id: "netBas8",
      question: "¿Cuáles son los tres protocolos de capa de aplicación que forman parte del conjunto de protocolos TCP/IP? (Elija tres opciones).",
      options: [
        "ARP",
        "DHCP",
        "Sistema de nombres de dominio",
        "FTP",
        "NAT",
        "PPP"
      ],
      correctAnswer: [1, 2, 3],
      explanation: "DNS, DHCP y FTP son protocolos de capa de aplicación del conjunto de protocolos TCP/IP. ARP y PPP son protocolos de capa de acceso a la red, y NAT es un protocolo de capa de Internet del conjunto de protocolos TCP/IP.",
      type: "multiple"
    },
    {
      id: "netBas9",
      question: "¿Qué son los protocolos propietarios?",
      options: [
        "Protocolos desarrollados por organizaciones privadas para operar en hardware de cualquier proveedor.",
        "Protocolos que pueden ser utilizados libremente por cualquier organización o proveedor.",
        "Protocolos desarrollados por organizaciones que tienen control sobre su definición y funcionamiento.",
        "Una colección de protocolos conocida como el conjunto de protocolos TCP/IP."
      ],
      correctAnswer: 2,
      explanation: "Los protocolos propietarios tienen su definición y funcionamiento controlados por una empresa o un proveedor. Algunos de ellos pueden ser utilizados por diferentes organizaciones con el permiso del propietario. El conjunto de protocolos TCP/IP es un estándar abierto, no un protocolo propietario.",
      type: "single"
    },
    {
      id: "netBas10",
      question: "¿Cuál es una ventaja de que los dispositivos de red utilicen protocolos estándar abiertos?",
      options: [
        "Las comunicaciones de red se limitan a las transferencias de datos entre dispositivos del mismo proveedor.",
        "Un cliente host y un servidor que ejecutan sistemas operativos diferentes pueden intercambiar datos con éxito.",
        "El acceso a Internet puede ser controlado por un único ISP en cada mercado.",
        "La competencia y la innovación se limitan a tipos específicos de productos."
      ],
      correctAnswer: 1,
      explanation: "Una ventaja de los dispositivos de red que implementan protocolos de estándares abiertos, como los de la suite TCP/IP, es que los clientes y servidores que ejecutan diferentes sistemas operativos pueden comunicarse entre sí. Los protocolos de estándares abiertos facilitan la innovación y la competencia entre proveedores y en los mercados, y pueden reducir la aparición de monopolios en los mercados de redes.",
      type: "single"
    },
    {
      id: "netBas11",
      question: "Si el Host1 transfiriera un archivo al servidor, ¿qué capas del modelo TCP/IP se utilizarían?",
      options: [
        "Sólo capas de aplicación e Internet",
        "Sólo capas de acceso a Internet y red",
        "Sólo capas de aplicación, Internet y acceso a la red",
        "Capas de aplicación, transporte, Internet y acceso a la red",
        "Sólo capas de aplicación, transporte, red, enlace de datos y físicas.",
        "Aplicación, sesión, transporte, red, enlace de datos y capas físicas"
      ],
      correctAnswer: 3,
      explanation: "El modelo TCP/IP contiene las capas de aplicación, transporte, Internet y acceso a la red. Una transferencia de archivos utiliza el protocolo de capa de aplicación FTP. Los datos se moverían desde la capa de aplicación a través de todas las capas del modelo y a través de la red hasta el servidor de archivos.",
      image: "/images/Capitulo3/q11.png",
      type: "single"
    },
    {
      id: "netBas12",
      question: "¿Cuáles tres capas del modelo OSI son comparables en función a la capa de aplicación del modelo TCP/IP? (Elija tres opciones).",
      options: [
        "solicitud",
        "presentación",
        "sesión",
        "transporte",
        "enlace de datos",
        "físico",
        "red"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "El modelo TCP/IP consta de cuatro capas: aplicación, transporte, Internet y acceso a la red. El modelo OSI consta de siete capas: aplicación, presentación, sesión, transporte, red, enlace de datos y física. Las tres capas superiores del modelo OSI: aplicación, presentación y sesión corresponden a la capa de aplicación del modelo TCP/IP.",
      type: "multiple"
    },
    {
      id: "netBas13",
      question: "¿En qué capa del modelo OSI se encapsularía una dirección lógica?",
      options: [
        "capa física",
        "capa de enlace de datos",
        "capa de red",
        "capa de transporte"
      ],
      correctAnswer: 2,
      explanation: "Las direcciones lógicas, también conocidas como direcciones IP, se encapsulan en la capa de red. Las direcciones físicas se encapsulan en la capa de enlace de datos. Las direcciones de puerto se encapsulan en la capa de transporte. No hay direcciones encapsuladas en la capa física.",
      type: "single"
    },
    {
      id: "netBas14",
      question: "¿En qué capa del modelo OSI se agregaría una dirección lógica durante la encapsulación?",
      options: [
        "capa física",
        "capa de enlace de datos",
        "capa de red",
        "capa de transporte"
      ],
      correctAnswer: 2,
      explanation: "Las direcciones lógicas, también conocidas como direcciones IP, se encapsulan en la capa de red. Las direcciones físicas se encapsulan en la capa de enlace de datos. Las direcciones de puerto se encapsulan en la capa de transporte. No hay direcciones encapsuladas en la capa física.",
      type: "single"
    },
    {
      id: "netBas15",
      question: "¿Qué formato de PDU se utiliza cuando la NIC de un host recibe bits del medio de red?",
      options: [
        "archivo",
        "marco",
        "paquete",
        "segmento"
      ],
      correctAnswer: 1,
      explanation: "Cuando se reciben en la capa física de un host, los bits se formatean en una trama en la capa de enlace de datos. Un paquete es la PDU en la capa de red. Un segmento es la PDU en la capa de transporte. Un archivo es una estructura de datos que se puede utilizar en la capa de aplicación.",
      type: "single"
    },
    {
      id: "netBas16",
      question: "¿Qué PDU se procesa cuando una computadora host está desencapsulando un mensaje en la capa de transporte del modelo TCP/IP?",
      options: [
        "pedacitos",
        "marco",
        "paquete",
        "segmento"
      ],
      correctAnswer: 3,
      explanation: "En la capa de transporte, una computadora host desencapsulará un segmento para volver a ensamblar los datos en un formato aceptable mediante el protocolo de capa de aplicación del modelo TCP/IP.",
      type: "single"
    },
    {
      id: "netBas17",
      question: "El HostA está intentando comunicarse con el ServerB. ¿Cuáles dos afirmaciones describen correctamente el direccionamiento que el HostA generará en el proceso? (Elija dos opciones).",
      options: [
        "Un paquete con la dirección IP de destino del RouterB.",
        "Un marco con la dirección MAC de destino de SwitchA.",
        "Un paquete con la dirección IP de destino del RouterA.",
        "Un marco con la dirección MAC de destino del RouterA.",
        "Un paquete con la dirección IP de destino del ServidorB.",
        "Un marco con la dirección MAC de destino del ServidorB."
      ],
      correctAnswer: [3, 4],
      explanation: "Para enviar datos al ServidorB, el HostA generará un paquete que contiene la dirección IP del dispositivo de destino en la red remota y un marco que contiene la dirección MAC del dispositivo de puerta de enlace predeterminado en la red local.",
      image: "/images/Capitulo3/q17.png",
      type: "multiple"
    },
    {
      id: "netBas18",
      question: "¿Qué dirección utiliza una NIC al decidir si acepta una trama?",
      options: [
        "dirección IP de origen",
        "Dirección MAC de origen",
        "dirección IP de destino",
        "dirección MAC de destino"
      ],
      correctAnswer: 3,
      explanation: "La NIC utiliza la dirección MAC de destino para decidir si acepta o descarta una trama. Si la dirección MAC de destino coincide con su propia dirección MAC, acepta la trama; de lo contrario, la descarta.",
      type: "single"
    },
    {
      id: "netBas19",
      question: "¿Qué sucederá si la dirección de puerta de enlace predeterminada está configurada incorrectamente en un host?",
      options: [
        "El host no puede comunicarse con otros hosts en la red local.",
        "El conmutador no reenviará paquetes iniciados por el host.",
        "El host tendrá que utilizar ARP para determinar la dirección correcta de la puerta de enlace predeterminada.",
        "El host no puede comunicarse con hosts en otras redes.",
        "Un ping desde el host a 127.0.0.1 no sería exitoso."
      ],
      correctAnswer: 3,
      explanation: "Cuando un host necesita enviar un mensaje a otro host ubicado en la misma red, puede reenviar el mensaje directamente. Sin embargo, cuando un host necesita enviar un mensaje a una red remota, debe utilizar el enrutador, también conocido como puerta de enlace predeterminada. Esto se debe a que la dirección de la trama de enlace de datos del host de destino remoto no se puede utilizar directamente. En cambio, el paquete IP se debe enviar al enrutador (puerta de enlace predeterminada) y el enrutador reenviará el paquete hacia su destino. Por lo tanto, si la puerta de enlace predeterminada está configurada incorrectamente, el host puede comunicarse con otros hosts en la misma red, pero no con hosts en redes remotas.",
      type: "single"
    },
    {
      id: "netBas20",
      question: "¿Qué característica describe la puerta de enlace predeterminada de una computadora host?",
      options: [
        "la dirección lógica de la interfaz del enrutador en la misma red que la computadora host",
        "La dirección física de la interfaz del conmutador conectada a la computadora host.",
        "la dirección física de la interfaz del enrutador en la misma red que la computadora host",
        "La dirección lógica asignada a la interfaz del conmutador conectada al enrutador."
      ],
      correctAnswer: 0,
      explanation: "La puerta de enlace predeterminada es la dirección IP de una interfaz en el enrutador en la misma red que el host remitente.",
      type: "single"
    },
    {
      id: "netBas21",
      question: "Una computadora en una red determinada se comunica con un grupo específico de computadoras. ¿Qué tipo de comunicación es ésta?",
      options: [
        "transmisión",
        "multidifusión",
        "unidifusión",
        "ARP",
        "HTTP"
      ],
      correctAnswer: 1,
      explanation: "La multidifusión permite que un grupo específico de computadoras reciba mensajes de una sola fuente, a diferencia de la unidifusión, que es una comunicación uno a uno.",
      type: "single"
    },
    
    {
      id: "netBas22",
      question: "¿Qué protocolo es responsable de controlar el tamaño y la velocidad de los mensajes HTTP intercambiados entre el servidor y el cliente?",
      options: [
        "HTTP",
        "ARP",
        "Protocolo de control de tráfico",
        "DHCP"
      ],
      correctAnswer: 2,
      explanation: "El protocolo de control de tráfico se utiliza para gestionar el flujo de datos y evitar la congestión, lo que afecta el tamaño y la velocidad de los mensajes HTTP.",
      type: "single"
    },
    
    {
      id: "netBas23",
      question: "Un usuario está visualizando un documento HTML ubicado en un servidor web. ¿Qué protocolo segmenta los mensajes y administra los segmentos en la conversación individual entre el servidor web y el cliente web?",
      options: [
        "DHCP",
        "Protocolo de control de tráfico",
        "HTTP",
        "ARP"
      ],
      correctAnswer: 1,
      explanation: "HTTP es el protocolo que segmenta y gestiona los mensajes entre el servidor y el cliente para la comunicación de documentos HTML.",
      type: "single"
    },
    
    {
      id: "netBas24",
      question: "¿Qué estándar IEEE permite que una NIC inalámbrica se conecte a un AP inalámbrico fabricado por un fabricante diferente?",
      options: [
        "802.1",
        "802.11",
        "802.3",
        "802.2"
      ],
      correctAnswer: 1,
      explanation: "El estándar IEEE 802.11 define la comunicación inalámbrica y permite la interoperabilidad entre dispositivos de diferentes fabricantes.",
      type: "single"
    },
    
    {
      id: "netBas25",
      question: "¿Cuál es una función de la capa 4 del modelo OSI?",
      options: [
        "para especificar el tipo de paquete que se utilizará en las comunicaciones",
        "para aplicar información de encuadre al paquete, en función del medio adjunto",
        "Representar datos al usuario, incluida la codificación y el control del diálogo.",
        "Para describir la entrega ordenada y confiable de datos entre el origen y el destino."
      ],
      correctAnswer: 3,
      explanation: "La capa 4 (capa de transporte) se encarga de garantizar la entrega ordenada y confiable de los datos a través de la red.",
      type: "single"
    },
    
    {
      id: "netBas26",
      question: "¿Cuál es el beneficio de utilizar un modelo en capas para las comunicaciones de red?",
      options: [
        "Fomentar la competencia entre los proveedores de dispositivos y software al imponer la compatibilidad de sus productos",
        "Mejorar el rendimiento de la transmisión de la red definiendo objetivos para cada capa",
        "Evitar posibles problemas de incompatibilidad mediante el uso de un conjunto común de herramientas de desarrollo.",
        "Simplificar el desarrollo del protocolo al limitar cada capa a una función"
      ],
      correctAnswer: 0,
      explanation: "El uso de un modelo en capas simplifica el desarrollo de protocolos al dividir las funciones en capas distintas y manejables.",
      type: "single"
    },
    
    {
      id: "netBas27",
      question: "¿Cuál es el término general que se utiliza para describir un fragmento de datos en cualquier capa de un modelo de red?",
      options: [
        "marco",
        "paquete",
        "unidad de datos de protocolo",
        "segmento"
      ],
      correctAnswer: 2,
      explanation: "El término 'unidad de datos de protocolo' (PDU) se utiliza para describir datos en cualquier capa de un modelo de red.",
      type: "single"
    },
    
    {
      id: "netBas28",
      question: "¿Qué afirmación describe con precisión un proceso de encapsulación TCP/IP cuando una PC envía datos a la red?",
      options: [
        "Los datos se envían desde la capa de Internet a la capa de acceso a la red.",
        "Los paquetes se envían desde la capa de acceso a la red a la capa de transporte.",
        "Los segmentos se envían desde la capa de transporte a la capa de Internet.",
        "Los marcos se envían desde la capa de acceso a la red a la capa de Internet."
      ],
      correctAnswer: 2,
      explanation: "En el proceso de encapsulación, los segmentos se envían desde la capa de transporte a la capa de Internet, donde se convierten en paquetes.",
      type: "single"
    },
    
    {
      id: "netBas29",
      question: "¿Qué afirmación describe la función del Protocolo de resolución de direcciones?",
      options: [
        "ARP se utiliza para descubrir la dirección IP de cualquier host en una red diferente.",
        "ARP se utiliza para descubrir la dirección IP de cualquier host en la red local.",
        "ARP se utiliza para descubrir la dirección MAC de cualquier host en una red diferente.",
        "ARP se utiliza para descubrir la dirección MAC de cualquier host en la red local."
      ],
      correctAnswer: 3,
      explanation: "ARP es responsable de descubrir la dirección MAC de un host que pertenece a la misma red cuando se conocen las direcciones IP.",
      type: "single"
    },
    
    {
      id: "netBas30",
      question: "¿Qué dirección proporciona una dirección de host única para las comunicaciones de datos en la capa de Internet?",
      options: [
        "dirección de enlace de datos",
        "dirección lógica",
        "Dirección de capa 2",
        "dirección física"
      ],
      correctAnswer: 1,
      explanation: "La dirección lógica (dirección IP) proporciona una identificación única para un host en la capa de Internet.",
      type: "single"
    },
    
    {
      id: "netBas31",
      question: "¿Qué protocolo utiliza una computadora para encontrar la dirección MAC de la puerta de enlace predeterminada en una red Ethernet?",
      options: [
        "ARP",
        "Protocolo de control de tráfico",
        "Unión Popular de Palestina",
        "DHCP"
      ],
      correctAnswer: 0,
      explanation: "ARP se utiliza para descubrir la dirección MAC de cualquier dispositivo en la misma red, incluyendo la puerta de enlace predeterminada.",
      type: "single"
    },
    
    {
      id: "netBas32",
      question: "Si la puerta de enlace predeterminada está configurada incorrectamente en el host, ¿cuál es el impacto en las comunicaciones?",
      options: [
        "El host no puede comunicarse en la red local.",
        "El host puede comunicarse con otros hosts en la red local, pero no puede comunicarse con hosts en redes remotas.",
        "El host puede comunicarse con otros hosts en redes remotas, pero no puede comunicarse con hosts en la red local.",
        "No hay impacto en las comunicaciones."
      ],
      correctAnswer: 1,
      explanation: "Si la puerta de enlace predeterminada está configurada incorrectamente, el host puede comunicarse en la red local, pero no podrá acceder a redes remotas.",
      type: "single"
    },
    
    {
      id: "netBas33",
      question: "Abra la actividad PT. Realice las tareas que se indican en las instrucciones de la actividad y luego responda la pregunta. Según la red configurada, ¿qué dirección IP utilizarían PC1 y PC2 como puerta de enlace predeterminada?",
      options: [
        "192.168.1.2",
        "10.1.1.1",
        "172.16.1.1",
        "192.168.1.1",
        "192.168.1.10"
      ],
      correctAnswer: 3,
      explanation: "PC1 y PC2 deben usar la dirección IP de la puerta de enlace predeterminada configurada en la misma red.",
      type: "single"
    },
    
    {
      id: "netBas34",
      question: "Un usuario envía una solicitud HTTP a un servidor web en una red remota. Durante la encapsulación de esta solicitud, ¿qué información se agrega al campo de dirección de un marco para indicar el destino?",
      options: [
        "la dirección MAC de la puerta de enlace predeterminada",
        "la dirección IP del host de destino",
        "la dirección MAC del host de destino",
        "la dirección IP de la puerta de enlace predeterminada"
      ],
      correctAnswer: 0,
      explanation: "La trama incluye la dirección MAC del host de destino para dirigir correctamente el mensaje dentro de la red.",
      type: "single"
    },
    
    {
      id: "netBas35",
      question: "Consulte la ilustración. La PC-A y la PC-B están en la VLAN 60. La PC-A no puede comunicarse con la PC-B. ¿Cuál es el problema?",
      options: [
        "Se está eliminando la VLAN nativa del enlace.",
        "El enlace troncal se ha configurado con el comando switchport nonegotiate.",
        "La VLAN nativa debe ser VLAN 60.",
        "La VLAN que utiliza PC-A no está en la lista de VLAN permitidas en el enlace troncal."
      ],
      correctAnswer: 3,
      explanation: "Si la VLAN de PC-A no está permitida en el enlace troncal, no podrá comunicarse con PC-B.",
      image: "/images/Capitulo3/q35.png",
      type: "single"
    },
    
    {
      id: "netBas36",
      question: "¿Qué comando se utiliza para eliminar solo la VLAN 20 de un conmutador?",
      options: [
        "Sin acceso al puerto de conmutación VLAN 20",
        "Sin VLAN 20",
        "eliminar vlan.dat",
        "eliminar flash:vlan.dat"
      ],
      correctAnswer: 1,
      explanation: "El comando 'Sin acceso al puerto de conmutación VLAN 20' se utiliza para eliminar la VLAN 20 de la configuración del conmutador.",
      type: "single"
    },
    
    {
      id: "netBas37",
      question: "¿Qué característica de la electricidad se expresa en vatios?",
      options: [
        "la cantidad de trabajo necesaria para mover electrones a través de un circuito",
        "La resistencia al flujo de corriente en un circuito.",
        "la cantidad de electrones que fluyen a través de un circuito por segundo",
        "el trabajo necesario para mover electrones a través de un circuito multiplicado por la cantidad de electrones que fluyen a través de un circuito por segundo"
      ],
      correctAnswer: 3,
      explanation: "Watts es la unidad que se utiliza para medir la potencia eléctrica, que es el trabajo necesario para mover electrones multiplicado por la cantidad de electrones que fluyen por segundo.",
      type: "single"
    }                 
  ]
};