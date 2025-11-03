import { QuizCategory } from '../../types/quiz';

export const chapter6Questions: QuizCategory = {
    id: 'Capi6-Red',
    title: 'Chapter 6',
    description: 'Evalúa tus conocimientos sobre los conceptos básicos de redes.',
    icon: 'Usb',
    color: 'indigo',
    questions: [
        {
            id: "CapiRed1",
            question: "¿Qué característica de la capa de red en el modelo OSI permite transportar paquetes para múltiples tipos de comunicaciones entre muchos hosts?",
            options: [
                "La desencapsulación de los encabezados de las capas inferiores.",
                "la selección de rutas y direcciones de los paquetes hacia el destino.",
                "La capacidad de operar sin tener en cuenta los datos que se transportan en cada paquete.",
                "La capacidad de gestionar el transporte de datos entre procesos que se ejecutan en hosts."
            ],
            correctAnswer: 2,
            explanation: "La función de los protocolos de la capa de red especifica la estructura y el procesamiento de los paquetes que se utilizan para transportar los datos de un host a otro. Los datos de comunicación reales se encapsulan en la PDU de la capa de red. La característica de su funcionamiento sin tener en cuenta los datos transportados en cada paquete permite que la capa de red transporte paquetes para múltiples tipos de comunicaciones.",
            type: "single"
        },
        {
            id: "CapiRed2",
            question: "¿Cuáles son dos características de la propiedad intelectual? (Elija dos opciones).",
            options: [
                "No requiere una conexión dedicada de extremo a extremo.",
                "Funciona independientemente de los medios de red.",
                "Retransmite paquetes si ocurren errores.",
                "Reensambla los paquetes desordenados en el orden correcto en el extremo receptor.",
                "Garantiza la entrega de paquetes."
            ],
            correctAnswer: [0, 1],
            explanation: "El Protocolo de Internet (IP) es un protocolo sin conexión y de máximo esfuerzo. Esto significa que IP no requiere una conexión de extremo a extremo ni garantiza la entrega de paquetes. IP también es independiente del medio, lo que significa que funciona independientemente del medio de red que transporta los paquetes.",
            type: "multiple"
        },
        {
            id: "CapiRed3",
            question: "Cuando se utiliza un protocolo sin conexión en una capa inferior del modelo OSI, ¿cómo se detectan y retransmiten los datos perdidos si es necesario?",
            options: [
                "Se utilizan reconocimientos sin conexión para solicitar la retransmisión.",
                "Los protocolos orientados a la conexión de las capas superiores realizan un seguimiento de los datos recibidos y pueden solicitar la retransmisión desde los protocolos de las capas superiores en el host emisor.",
                "Los protocolos IP de la capa de red gestionan las sesiones de comunicación si no están disponibles los servicios de transporte orientados a la conexión.",
                "El proceso de entrega de mejor esfuerzo garantiza que todos los paquetes enviados sean recibidos."
            ],
            correctAnswer: 1,
            explanation: "Cuando se utilizan protocolos sin conexión en una capa inferior del modelo OSI, los protocolos de capas superiores pueden necesitar trabajar en conjunto en los hosts emisores y receptores para contabilizar y retransmitir los datos perdidos. En algunos casos, esto no es necesario, porque para algunas aplicaciones es tolerable una cierta pérdida de datos.",
            type: "single"
        },
        {
            id: "CapiRed4",
            question: "¿Qué campo en el encabezado de IPv4 se utiliza para evitar que un paquete recorra una red indefinidamente?",
            options: [
                "Tiempo de vida (Time-to-Live)",
                "Número de secuencia",
                "Número de reconocimiento",
                "Servicios diferenciados"
            ],
            correctAnswer: 0,
            explanation: "El valor del campo Tiempo de Vida (TTL) en el encabezado IPv4 se utiliza para limitar la vida útil de un paquete. El host emisor establece el valor inicial de TTL, que se reduce en uno cada vez que el paquete es procesado por un router. Si el campo TTL disminuye a cero, el router descarta el paquete y envía un mensaje ICMP de tiempo excedido a la dirección IP de origen. El campo Servicios Diferenciados (DS) se utiliza para determinar la prioridad de cada paquete. Los campos Número de Secuencia y Número de Reconocimiento pertenecen al encabezado TCP.",
            type: "single"
        },
        {
            id: "CapiRed5",
            question: "¿Qué campo del encabezado IPv4 identifica el protocolo de la capa superior transportado en el paquete?",
            options: [
                "Protocolo",
                "Identificación",
                "Versión",
                "Servicios diferenciados"
            ],
            correctAnswer: 0,
            explanation: "Es el campo Protocolo en el encabezado IP el que identifica el protocolo de la capa superior que transporta el paquete. El campo Versión identifica la versión de IP. El campo Servicios Diferenciados se utiliza para establecer la prioridad del paquete. El campo Identificación se usa para reordenar los paquetes fragmentados.",
            type: "single"
        },
        {
            id: "CapiRed6",
            question: "¿Cuál es una ventaja que ofrece el encabezado simplificado de IPv6 sobre IPv4?",
            options: [
                "Encabezado de menor tamaño",
                "Poca necesidad de procesar sumas de verificación",
                "Direcciones IP de origen y destino de menor tamaño",
                "Manejo eficiente de paquetes"
            ],
            correctAnswer: 3,
            explanation: "El encabezado simplificado de IPv6 ofrece varias ventajas sobre IPv4:\n· Mejor eficiencia de enrutamiento y manejo eficiente de paquetes para el rendimiento y la escalabilidad de la tasa de reenvío.\n· No se requiere procesar sumas de verificación.\n· Mecanismos de encabezado de extensión simplificados y más eficientes (a diferencia del campo Opciones de IPv4).\n· Un campo de Etiqueta de Flujo (Flow Label) para el procesamiento por flujo sin necesidad de abrir el paquete de transporte interno para identificar los diferentes flujos de tráfico.",
            type: "single"
        },
        {
            id: "CapiRed7",
            question: "Consulta la tabla de enrutamiento de PC1. ¿Qué ruta se utilizará para llegar a PC2?",
            options: [
                "Destino de red: 192.168.10.0; Máscara: 255.255.255.0; Gateway: Enlace local; Interfaz: 192.168.10.10; Métrica: 281.",
                "Destino de red: 192.168.10.10; Máscara: 255.255.255.255; Gateway: Enlace local; Interfaz: 192.168.10.10; Métrica: 281.",
                "Destino de red: 127.0.0.1; Máscara: 255.255.255.255; Gateway: Enlace local; Interfaz: 127.0.0.1; Métrica: 306.",
                "Destino de red: 0.0.0.0; Máscara: 0.0.0.0; Gateway: 192.168.10.1; Interfaz: 192.168.10.10; Métrica: 25."
            ],
            correctAnswer: 0,
            explanation: "PC1 y PC2 están en la misma red (192.168.10.0 con máscara 255.255.255.0), por lo que no es necesario acceder al gateway predeterminado (entrada 0.0.0.0 0.0.0.0). La entrada 127.0.0.1 255.255.255.255 es la interfaz de loopback y la entrada 192.168.10.10 255.255.255.255 identifica la dirección de la interfaz de PC1.",
            image: "/images/Capitulo6/q7.png",
            type: "single"
        },
        {
            id: "CapiRed8",
            question: "Consulta el diagrama. R1 recibe un paquete destinado a la dirección IP 192.168.2.10. ¿Por qué interfaz reenviará el paquete?",
            options: [
                "FastEthernet0/0",
                "FastEthernet0/1",
                "Serial0/0/0",
                "Serial0/0/1"
            ],
            correctAnswer: 3,
            explanation: "Si una ruta en la tabla de enrutamiento apunta a una dirección de próximo salto, el router realizará una segunda búsqueda para determinar por qué interfaz se encuentra el próximo salto.",
            image: "/images/Capitulo6/q8.png",
            type: "single"
        },
        {
            id: "CapiRed9",
            question: "¿Qué tipo de ruta está indicada por el código C en una tabla de enrutamiento IPv4 en un router Cisco?",
            options: [
                "Ruta estática",
                "Ruta predeterminada",
                "Ruta conectada directamente",
                "Ruta dinámica aprendida a través de EIGRP"
            ],
            correctAnswer: 2,
            explanation: "Algunos códigos de la tabla de enrutamiento IPv4 son los siguientes:\nC – Ruta conectada directamente\nS – Ruta estática\nD – EIGRP\n* – Ruta predeterminada candidata",
            type: "single"
        },
        {
            id: "CapiRed10",
            question: "¿Qué entrada de la tabla de enrutamiento tiene una dirección de próximo salto asociada con una red de destino?",
            options: [
                "Rutas conectadas directamente",
                "Rutas locales",
                "Rutas remotas",
                "Rutas de origen C y L"
            ],
            correctAnswer: 2,
            explanation: "Las entradas de la tabla de enrutamiento para rutas remotas tendrán una dirección IP de próximo salto. La dirección IP del próximo salto es la dirección de la interfaz del router del siguiente dispositivo que se usará para alcanzar la red de destino. Las rutas conectadas directamente y locales no tienen un próximo salto, ya que no requieren pasar por otro router para ser alcanzadas.",
            type: "single"
        },
        {
            id: "CapiRed11",
            question: "¿Qué afirmación describe una característica de hardware de un router Cisco 1941 con la configuración de hardware predeterminada?",
            options: [
                "No tiene un puerto AUX.",
                "Tiene tres interfaces FastEthernet para acceso LAN.",
                "Tiene dos tipos de puertos que se pueden usar para acceder a la consola.",
                "No requiere una CPU porque depende de la Compact Flash para ejecutar el IOS."
            ],
            correctAnswer: 2,
            explanation: "Las conexiones en un router Cisco 1941 incluyen dos tipos de puertos utilizados para la configuración inicial y el acceso a la línea de comandos. Los dos puertos son el puerto RJ-45 estándar y un nuevo conector USB Tipo-B (mini-B USB). Además, el router tiene un puerto AUX para acceso remoto y dos interfaces Gigabit Ethernet para acceso LAN. La Compact Flash se puede usar para aumentar el almacenamiento del dispositivo, pero no realiza las funciones de la CPU, que es necesaria para el funcionamiento del dispositivo.",
            type: "single"
        },
        {
            id: "CapiRed12",
            question: "Siguiendo la configuración predeterminada, ¿cuál es el siguiente paso en la secuencia de arranque de un router después de que el IOS se carga desde la memoria flash?",
            options: [
                "Realizar la rutina POST.",
                "Localizar y cargar el archivo de configuración inicial desde NVRAM.",
                "Cargar el programa bootstrap desde ROM.",
                "Cargar el archivo de configuración en ejecución desde RAM."
            ],
            correctAnswer: 1,
            explanation: "Hay tres pasos principales en la secuencia de arranque de un router:\n1. Realizar la rutina Power-On-Self-Test (POST).\n2. Cargar el IOS desde Flash o un servidor TFTP.\n3. Cargar el archivo de configuración inicial desde NVRAM.",
            type: "single"
        },
        {
            id: "CapiRed13",
            question: "¿Cuáles son dos tipos de interfaces de router? (Elige dos).",
            options: [
                "SVI",
                "LAN",
                "DHCP",
                "Telnet",
                "WAN"
            ],
            correctAnswer: [1, 4],
            explanation: "Las interfaces de router se pueden agrupar en dos categorías:\n· Interfaces LAN – Usadas para conectar cables que terminan en dispositivos LAN, como computadoras y switches. Esta interfaz también se puede usar para conectar routers entre sí.\n· Interfaces WAN – Usadas para conectar routers a redes externas, generalmente a través de distancias geográficas más grandes.",
            type: "multiple"
        },
        {
            id: "CapiRed14",
            question: "¿Qué dos tipos de información están en la RAM de un router Cisco durante su operación normal? (Elige dos).",
            options: [
                "Cisco IOS",
                "Archivo de respaldo del IOS",
                "Tabla de enrutamiento IP",
                "Software de diagnóstico básico",
                "Archivo de configuración inicial"
            ],
            correctAnswer: [0, 2],
            explanation: "El archivo Cisco IOS se almacena en la memoria flash y se copia en la RAM durante el arranque. La tabla de enrutamiento IP también se almacena en la RAM. El software de diagnóstico básico se almacena en ROM y el archivo de configuración inicial se almacena en NVRAM.",
            type: "multiple"
        },     
        {
            id: "CapiRed15",
            question: "Un router arranca y entra en el modo de configuración. ¿Cuál es la razón de esto?",
            options: [
                "La imagen IOS está corrupta.",
                "El Cisco IOS falta en la memoria flash.",
                "El archivo de configuración falta en la NVRAM.",
                "El proceso POST ha detectado un fallo de hardware."
            ],
            correctAnswer: 2,
            explanation: "Si un router no puede localizar el archivo startup-config en la NVRAM, entrará en el modo de configuración para permitir que la configuración se ingrese desde el dispositivo de consola.",
            type: "single"
        },
        {
            id: "CapiRed16",
            question: "¿Cuál es el propósito del archivo de configuración de inicio en un router Cisco?",
            options: [
                "Facilitar la operación básica de los componentes de hardware de un dispositivo.",
                "Contener los comandos que se usan para configurar inicialmente un router al arrancar.",
                "Contener los comandos de configuración que el IOS del router está utilizando actualmente.",
                "Proveer una versión de respaldo limitada del IOS, por si el router no puede cargar el IOS completo."
            ],
            correctAnswer: 1,
            explanation: "El archivo de configuración de inicio se almacena en la NVRAM y contiene los comandos necesarios para configurar inicialmente un router. También crea el archivo de configuración en ejecución que se guarda en la RAM.",
            type: "single"
        },
        {
            id: "CapiRed17",
            question: "¿Cuáles tres comandos se utilizan para configurar un acceso seguro a un router a través de la conexión a la interfaz de consola? (Elija tres.)",
            options: [
                "interface fastethernet 0/0",
                "line vty 0 4",
                "line console 0",
                "enable secret cisco",
                "login",
                "password cisco"
            ],
            correctAnswer: [2, 5, 4],
            explanation: "Los tres comandos necesarios para proteger con contraseña el puerto de consola son los siguientes: line console 0, password cisco, login. El comando interface fastethernet 0/0 se utiliza comúnmente para acceder al modo de configuración para aplicar parámetros específicos como la dirección IP al puerto Fa0/0. El comando line vty 0 4 se utiliza para acceder al modo de configuración para Telnet. Los parámetros 0 y 4 especifican los puertos 0 a 4, o un máximo de cinco conexiones simultáneas de Telnet. El comando enable secret se usa para aplicar una contraseña utilizada en el router para acceder al modo privilegiado.",
            type: "multiple"
        },
        {
            id: "CapiRed18",
            question: "¿Qué característica describe una mejora de IPv6 sobre IPv4?",
            options: [
                "Las direcciones IPv6 se basan en un direccionamiento plano de 128 bits, mientras que IPv4 se basa en un direccionamiento jerárquico de 32 bits.",
                "El encabezado de IPv6 es más simple que el encabezado de IPv4, lo que mejora el manejo de los paquetes.",
                "Tanto IPv4 como IPv6 soportan autenticación, pero solo IPv6 soporta capacidades de privacidad.",
                "El espacio de direcciones de IPv6 es cuatro veces más grande que el espacio de direcciones de IPv4."
            ],
            correctAnswer: 1,
            explanation: "Las direcciones IPv6 se basan en un direccionamiento jerárquico de 128 bits, y el encabezado de IPv6 ha sido simplificado con menos campos, mejorando el manejo de los paquetes. IPv6 soporta nativamente la autenticación y capacidades de privacidad, a diferencia de IPv4 que necesita características adicionales para soportarlas. El espacio de direcciones de IPv6 es mucho más grande que el espacio de direcciones de IPv4.",
            type: "single"
        },
        {
            id: "CapiRed19",
            question: "Abre la actividad de PT. La contraseña enable en todos los dispositivos es cisco. Realiza las tareas en las instrucciones de la actividad y luego responde la pregunta. ¿Por qué está ocurriendo el fallo?",
            options: [
                "PC1 tiene configurada una puerta de enlace predeterminada incorrecta.",
                "SW1 no tiene configurada una puerta de enlace predeterminada.",
                "La dirección IP de SW1 está configurada en una subred incorrecta.",
                "PC2 tiene configurada una puerta de enlace predeterminada incorrecta."
            ],
            correctAnswer: 1,
            explanation: "Falta el comando ip default-gateway en la configuración de SW1. Los paquetes de PC2 pueden llegar con éxito a SW1, pero SW1 no puede reenviar los paquetes de respuesta más allá de la red local sin que se emita el comando ip default-gateway.",
            type: "single"
        },
        {
            id: "CapiRed20",
            question: "Cuando se implementan protocolos sin conexión en las capas inferiores del modelo OSI, ¿qué se utiliza generalmente para confirmar la recepción de datos y solicitar la retransmisión de datos faltantes?",
            options: [
                "Reconocimientos sin conexión",
                "Protocolos orientados a la conexión en capas superiores",
                "Protocolos de la capa de red IP",
                "Protocolos de la capa de transporte UDP"
            ],
            correctAnswer: 1,
            explanation: "Los protocolos orientados a la conexión en capas superiores suelen ser los encargados de reconocer la recepción de los datos y solicitar la retransmisión de los datos faltantes en caso de que no se haya recibido alguna parte del paquete.",
            type: "single"
        },
        {
            id: "CapiRed21",
            question: "¿Qué campo del encabezado IPv4 es responsable de definir la prioridad del paquete?",
            options: [
                "etiqueta de flujo",
                "banderas",
                "servicios diferenciados",
                "clase de tráfico"
            ],
            correctAnswer: 2,
            explanation: "Los servicios diferenciados (DiffServ) es un campo del encabezado IPv4 utilizado para definir la prioridad de cada paquete. Los primeros 6 bits identifican el valor usado por el mecanismo QoS, y los últimos 2 bits indican el valor utilizado para evitar la pérdida de paquetes durante la congestión de red.",
            type: "single"
        },
        {
            id: "CapiRed22",
            question: "¿Por qué no es necesario el NAT en IPv6?",
            options: [
                "Porque IPv6 tiene seguridad integrada, no es necesario ocultar las direcciones IPv6 de las redes internas.",
                "Cualquier host o usuario puede obtener una dirección de red pública IPv6 porque el número de direcciones IPv6 disponibles es extremadamente grande.",
                "Los problemas inducidos por aplicaciones NAT se resuelven porque el encabezado IPv6 mejora el manejo de los paquetes por los routers intermedios.",
                "Los problemas de conectividad de extremo a extremo causados por NAT se resuelven porque el número de rutas aumenta con el número de nodos conectados a Internet."
            ],
            correctAnswer: 1,
            explanation: "El gran número de direcciones IPv6 públicas elimina la necesidad de NAT. Desde grandes empresas hasta hogares pueden obtener direcciones de red públicas IPv6. Esto evita algunos de los problemas inducidos por NAT que experimentan aplicaciones que requieren conectividad de extremo a extremo.",
            type: "single"
        },
        {
            id: "CapiRed23",
            question: "¿Qué servicio proporciona el campo de Etiqueta de Flujo en el encabezado IPv6?",
            options: [
                "Limita la vida útil de un paquete.",
                "Identifica la longitud total del paquete IPv6.",
                "Clasifica los paquetes para el control de congestión del tráfico.",
                "Informa a los dispositivos de red para mantener el mismo camino para los paquetes de aplicaciones en tiempo real."
            ],
            correctAnswer: 3,
            explanation: "El campo de Etiqueta de Flujo en el encabezado IPv6 se utiliza para informar a los dispositivos de red que deben mantener el mismo camino para los paquetes de aplicaciones en tiempo real, evitando el reordenamiento de paquetes en el flujo.",
            type: "single"
        },
        {
            id: "CapiRed24",
            question: "¿Cómo se aseguran los hosts de que sus paquetes sean dirigidos al destino de red correcto?",
            options: [
                "Mantienen su propia tabla de enrutamiento local que contiene una ruta hacia la interfaz de loopback, una ruta de red local y una ruta predeterminada remota.",
                "Siempre dirigen sus paquetes hacia la puerta de enlace predeterminada, que se encargará de entregar los paquetes.",
                "Buscan en su propia tabla de enrutamiento local una ruta hacia la dirección de destino de la red y pasan esta información a la puerta de enlace predeterminada.",
                "Envían un paquete de consulta a la puerta de enlace predeterminada solicitando la mejor ruta."
            ],
            correctAnswer: 0,
            explanation: "Los hosts deben mantener su propia tabla de enrutamiento local para asegurarse de que los paquetes de la capa de red sean dirigidos a la red de destino correcta. Esta tabla local generalmente contiene una ruta hacia la interfaz de loopback, una ruta hacia la red a la que está conectado el host, y una ruta predeterminada local, que representa la ruta que los paquetes deben seguir para llegar a todas las direcciones de red remotas.",
            type: "single"
        },
        {
            id: "CapiRed25",
            question: "¿Qué dos comandos se pueden usar en un host Windows para mostrar la tabla de enrutamiento? (Elija dos.)",
            options: [
                "netstat -s",
                "route print",
                "show ip route",
                "netstat -r",
                "tracert"
            ],
            correctAnswer: [1, 3],
            explanation: "En un sistema Windows, los comandos 'route print' y 'netstat -r' se usan para mostrar la tabla de enrutamiento. El primero muestra la tabla de enrutamiento de IP, mientras que el segundo muestra información relacionada con las rutas de red.",
            type: "multiple"
        },
        {
            id: "CapiRed26",
            question: "Durante el proceso de reenvío de tráfico, ¿qué hará el router inmediatamente después de coincidir la dirección IP de destino con una red en una entrada de la tabla de enrutamiento directamente conectada?",
            options: [
                "Descartar el tráfico después de consultar la tabla de rutas",
                "Buscar la dirección del siguiente salto para el paquete",
                "Conmutar el paquete a la interfaz directamente conectada",
                "Analizar la dirección IP de destino"
            ],
            correctAnswer: 2,
            explanation: "Un router recibe un paquete en una interfaz y observa la dirección IP de destino. Luego consulta su tabla de enrutamiento y encuentra que debe enviar el paquete a la dirección del siguiente salto o a una interfaz directamente conectada. Cuando la dirección de destino está en una interfaz directamente conectada, el paquete se conmutará a esa interfaz.",
            type: "single"
        },
        {
            id: "CapiRed27",
            question: "Un técnico está configurando un router que está funcionando activamente en la red. De repente, se pierde la alimentación del router. Si el técnico no ha guardado la configuración, ¿qué dos tipos de información se perderán? (Elija dos.)",
            options: [
                "Archivo de imagen Cisco IOS",
                "Tabla de enrutamiento",
                "Archivo de arranque",
                "Caché ARP",
                "Configuración de inicio"
            ],
            correctAnswer: [1, 3],
            explanation: "Si el técnico no guarda la configuración antes de que se apague el router, la tabla de enrutamiento y la caché ARP se perderán. Estos datos se almacenan en la memoria volátil (RAM) y no en la memoria no volátil.",
            type: "multiple"
        },
        {
            id: "CapiRed28",
            question: "¿Qué dos interfaces permiten el acceso a través de las líneas VTY para configurar el router? (Elija dos.)",
            options: [
                "Interfaces aux",
                "Interfaces LAN",
                "Interfaces WAN",
                "Interfaces de consola",
                "Interfaces USB"
            ],
            correctAnswer: [1, 2],
            explanation: "Las interfaces de consola y las interfaces auxiliares permiten el acceso a través de las líneas VTY para la configuración del router.",
            type: "multiple"
        },
        {
            id: "CapiRed29",
            question: "¿Qué dos archivos, si se encuentran, se copian a la RAM cuando un router con la configuración de registro de inicio predeterminada arranca? (Elija dos.)",
            options: [
                "Configuración en ejecución",
                "Archivo de imagen IOS",
                "Configuración de inicio",
                "Diagnósticos POST"
            ],
            correctAnswer: [1, 2],
            explanation: "Los dos archivos principales necesarios para el arranque son el archivo de imagen IOS y la configuración de inicio, los cuales se copian a la RAM para maximizar el rendimiento. Si el registro de configuración del router está configurado en 0x2102, el router intentará cargar el archivo de imagen IOS desde la memoria flash y el archivo de configuración de inicio desde NVRAM.",
            type: "multiple"
        },
        {
            id: "CapiRed30",
            question: "¿Cuándo se usaría la imagen Cisco IOS almacenada en ROM para arrancar el router?",
            options: [
                "Durante una operación de transferencia de archivos",
                "Durante un proceso de arranque normal",
                "Cuando no se pueda encontrar el IOS completo",
                "Cuando la configuración en ejecución indique que el router debe hacer esto"
            ],
            correctAnswer: 2,
            explanation: "La imagen IOS en ROM se utilizaría para arrancar el router cuando no se pueda encontrar la imagen IOS completa en la memoria flash. Esto sucede normalmente en caso de que haya un fallo en la memoria o no haya una imagen IOS disponible.",
            type: "single"
        },
        {
            id: "CapiRed31",
            question: "Después de solucionar problemas en un router, el administrador de red desea guardar la configuración del router para que se use automáticamente la próxima vez que el router se reinicie. ¿Qué comando debe emitir?",
            options: [
                "copy running-config flash",
                "copy startup-config flash",
                "copy running-config startup-config",
                "reload",
                "copy startup-config running-config"
            ],
            correctAnswer: 2,
            explanation: "El comando 'copy running-config startup-config' guarda la configuración en ejecución del router en el archivo de configuración de inicio, lo que asegura que se cargue automáticamente la próxima vez que el router se reinicie.",
            type: "single"
        },
        {
            id: "CapiRed32",
            question: "¿Qué tres comandos se utilizan para configurar una contraseña para una persona que conecta un cable a un nuevo router para que se pueda realizar una configuración inicial? (Elija tres.)",
            options: [
                "interface fastethernet 0/0",
                "line vty 0 4",
                "line console 0",
                "enable secret cisco",
                "login",
                "password cisco"
            ],
            correctAnswer: [2, 4, 5],
            explanation: "Para configurar una contraseña para acceder a un nuevo router, se utilizan los comandos 'line console 0', 'password cisco' y 'login'.",
            type: "multiple"
        },
        {
            id: "CapiRed33",
            question: "¿Cuál de las siguientes afirmaciones sobre las interfaces de router es verdadera?",
            options: [
                "Las interfaces LAN del router no están activadas por defecto, pero las interfaces WAN sí lo están.",
                "Una vez que se emite el comando no shutdown, una interfaz de router está activa y operativa.",
                "Los comandos que aplican una dirección IP y una máscara de subred a una interfaz se ingresan en el modo de configuración global.",
                "Una interfaz de router configurada y activada debe estar conectada a otro dispositivo para funcionar."
            ],
            correctAnswer: 1,
            explanation: "Cuando se emite el comando 'no shutdown', la interfaz del router se activa y se pone en funcionamiento.",
            type: "single"
        },
        {
            id: "CapiRed34",
            question: "¿Qué comando muestra un resumen de todas las interfaces del router, sus direcciones IP y su estado operativo actual?",
            options: [
                "show ip route",
                "show version",
                "show interfaces",
                "show ip interface brief"
            ],
            correctAnswer: 3,
            explanation: "El comando 'show ip interface brief' muestra un resumen de las interfaces del router, sus direcciones IP y su estado operativo.",
            type: "single"
        },
        {
            id: "CapiRed35",
            question: "Un técnico está configurando manualmente una computadora con los parámetros IP necesarios para comunicarse en la red corporativa. La computadora ya tiene una dirección IP, una máscara de subred y un servidor DNS. ¿Qué más debe configurarse para el acceso a Internet?",
            options: [
                "La dirección del servidor WINS",
                "La dirección de la puerta de enlace predeterminada",
                "La dirección MAC",
                "El nombre de dominio de la organización"
            ],
            correctAnswer: 1,
            explanation: "Para el acceso a Internet, es necesario configurar la dirección de la puerta de enlace predeterminada en la computadora.",
            type: "single"
        },
        {
            id: "CapiRed36",
            question: "Una computadora tiene que enviar un paquete a un host de destino en la misma LAN. ¿Cómo se enviará el paquete?",
            options: [
                "El paquete se enviará primero a la puerta de enlace predeterminada y luego, dependiendo de la respuesta de la puerta de enlace, puede ser enviado al host de destino.",
                "El paquete se enviará directamente al host de destino.",
                "El paquete se enviará primero a la puerta de enlace predeterminada y luego, desde la puerta de enlace predeterminada, será enviado al host de destino.",
                "El paquete será fragmentado y reensamblado antes de ser entregado al host de destino."
            ],
            correctAnswer: 1,
            explanation: "Cuando un paquete debe enviarse a un host de destino dentro de la misma LAN, la computadora lo enviará directamente a la puerta de enlace predeterminada, que se encargará del reenvío del paquete al host de destino.",
            type: "single"
        },
        {
            id: "CapiRed37",
            question: "Consulte la ilustración. Complete el espacio en blanco. Un paquete que sale de la PC-1 debe atravesar _______ saltos para llegar a la PC-4.",
            options: [
                "1",
                "2",
                "3",
                "4"
            ],
            correctAnswer: 2,
            explanation: "El paquete sale de PC-1 y tiene que atravesar 3 saltos, es decir, pasar por 3 dispositivos de red antes de llegar a PC-4.",
            image: "/images/Capitulo6/q37.png",
            type: "single"
        },
        {
            id: "CapiRed38",
            question: "Complete el espacio en blanco. En un enrutador, _______ es la memoria no volátil donde se almacenan el software de diagnóstico, las instrucciones de arranque y un IOS limitado.",
            options: [
                "ROM",
                "RAM",
                "NVRAM",
                "Flash"
            ],
            correctAnswer: 0,
            explanation: "ROM es la memoria no volátil donde se almacenan el software de diagnóstico, las instrucciones de arranque y un IOS limitado en los routers.",
            type: "single"
        },        
        {
            id: "CapiRed39",
            question: "Abre la actividad de PT. Realiza las tareas según las instrucciones de la actividad y luego responde la pregunta o completa la tarea. ¿El router tiene suficiente RAM y memoria flash para soportar la nueva versión de IOS?",
            options: [
                "El router tiene suficiente RAM y memoria flash para la actualización de IOS.",
                "El router tiene suficiente RAM, pero necesita más memoria flash para la actualización de IOS.",
                "El router tiene suficiente memoria flash, pero necesita más RAM para la actualización de IOS.",
                "El router necesita más RAM y más memoria flash para la actualización de IOS."
            ],
            correctAnswer: 0,
            explanation: "El router tiene suficiente RAM y memoria flash para la actualización de IOS, lo cual es necesario para ejecutar el nuevo sistema operativo con eficiencia.",
            type: "single"
        },
        {
            id: "CapiRed40",
            question: "¿Qué tipo de ruta estática configurada en un router utiliza solo la interfaz de salida?",
            options: [
                "Ruta estática completamente especificada",
                "Ruta estática por defecto",
                "Ruta estática directamente conectada",
                "Ruta estática recursiva"
            ],
            correctAnswer: 2,
            explanation: "Una ruta estática directamente conectada utiliza solo la interfaz de salida para dirigir el tráfico a la red de destino. No requiere información adicional sobre la dirección de la siguiente salto.",
            type: "single"
        }                        
    ]
};