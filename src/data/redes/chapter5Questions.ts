import { QuizCategory } from '../../types/quiz';

export const chapter5Questions: QuizCategory = {
    id: 'ethernet',
    title: 'Chapter 5',
    description: 'Evalúa tus conocimientos sobre los conceptos básicos de redes.',
    icon: 'Radio',
    color: 'indigo',
    questions: [
        {
            id: "ethernet1",
            question: "¿Qué sucede con los marcos runt recibidos por un switch Ethernet de Cisco?",
            options: [
                "El marco se ha caido.",
                "El marco se devuelve al dispositivo de red de origen.",
                "La trama se transmite a todos los demás dispositivos en la misma red.",
                "El marco se envía a la puerta de enlace predeterminada."
            ],
            correctAnswer: 0,
            explanation: "Para conservar ancho de banda y no reenviar tramas inútiles, los dispositivos Ethernet descartan tramas considerados runt (menos de 64 bytes) o jumbo (más de 1500 bytes).",
            type: "single"
        },
        {
            id: "ethernet2",
            question: "¿Cuáles son los dos tamaños (mínimo y máximo) de un cuadro Ethernet? (Elige dos)",
            options: [
                "56 bytes",
                "64 bytes",
                "128 bytes",
                "1024 bytes",
                "1518 bytes"
            ],
            correctAnswer: [1, 4],
            explanation: "El cuadro Ethernet mínimo es de 64 bytes. El cuadro Ethernet máximo es de 1518 bytes. Un técnico de red debe conocer estos tamaños para identificar cuadros runt y jumbo.",
            type: "multiple"
        },
        {
            id: "ethernet3",
            question: "¿Qué afirmación describe Ethernet?",
            options: [
                "Define el tipo de LAN más común en el mundo.",
                "Es el estándar requerido de las capas 1 y 2 para la comunicación en Internet.",
                "Define un modelo estándar utilizado para describir cómo funciona el networking.",
                "Conecta múltiples sitios como routers ubicados en diferentes países."
            ],
            correctAnswer: 0,
            explanation: "Ethernet es el protocolo LAN más común en el mundo. Opera en las capas 1 y 2, pero no es un requisito para la comunicación en Internet. El modelo OSI describe cómo operan las redes, mientras que una WAN conecta múltiples sitios en diferentes países.",
            type: "single"
        },
        {
            id: "ethernet4",
            question: "¿Qué dos afirmaciones describen características o funciones de la subcapa de control de enlace lógico (LLC) en los estándares Ethernet? (Elige dos)",
            options: [
                "El control de enlace lógico se implementa en software.",
                "El control de enlace lógico está especificado en el estándar IEEE 802.3.",
                "La subcapa LLC agrega un encabezado y un tráiler a los datos.",
                "La capa de enlace de datos usa LLC para comunicarse con las capas superiores del conjunto de protocolos.",
                "La subcapa LLC es responsable de la colocación y recuperación de cuadros en el medio."
            ],
            correctAnswer: [0, 3],
            explanation: "El control de enlace lógico (LLC) se implementa en software y permite que la capa de enlace de datos se comunique con las capas superiores del conjunto de protocolos. Está especificado en el estándar IEEE 802.2, mientras que el estándar IEEE 802.3 define los tipos de Ethernet.",
            type: "multiple"
        },
        {
            id: "ethernet5",
            question: "¿Qué afirmación describe una característica de las direcciones MAC?",
            options: [
                "Deben ser únicos a nivel mundial.",
                "Solo son direccionables dentro de la red privada.",
                "Se agregan como parte de una PDU de capa 3.",
                "Tienen un valor binario de 32 bits."
            ],
            correctAnswer: 0,
            explanation: "Cada proveedor de dispositivos Ethernet debe registrarse con el IEEE para garantizar que se le asigne un código único de 24 bits, el cual forma los primeros 24 bits de la dirección MAC. Los últimos 24 bits se generan para cada dispositivo de hardware, asegurando que las direcciones sean globalmente únicas.",
            type: "single"
        },
        {
            id: "ethernet6",
            question: "¿Qué afirmación es verdadera sobre las direcciones MAC?",
            options: [
                "Las direcciones MAC se implementan mediante software.",
                "Una NIC solo necesita una dirección MAC si está conectada a una WAN.",
                "Los primeros tres bytes se utilizan para el OUI asignado al proveedor.",
                "La ISO es responsable de regular las direcciones MAC."
            ],
            correctAnswer: 2,
            explanation: "Una dirección MAC consta de 6 bytes. Los primeros 3 bytes identifican al proveedor (OUI), mientras que los últimos 3 bytes son valores únicos asignados dentro del mismo OUI. Las direcciones MAC se implementan en hardware y son necesarias para la comunicación en la LAN. El IEEE regula las direcciones MAC.",
            type: "single"
        },
        {
            id: "ethernet7",
            question: "¿Qué dirección de destino se utiliza en un marco de solicitud ARP?",
            options: [
                "0.0.0.0",
                "255.255.255.255",
                "FFFF.FFFF.FFFF",
                "127.0.0.1",
                "01-00-5E-00-AA-23"
            ],
            correctAnswer: 2,
            explanation: "El propósito de una solicitud ARP es encontrar la dirección MAC del host de destino en una LAN Ethernet. La solicitud ARP envía una transmisión de capa 2 a todos los dispositivos en la LAN Ethernet usando la dirección de difusión FFFF.FFFF.FFFF.",
            type: "single"
        },
        {
            id: "ethernet8",
            question: "¿Qué información de direccionamiento registra un switch para construir su tabla de direcciones MAC?",
            options: [
                "La dirección de capa 3 de destino de los paquetes entrantes.",
                "La dirección de capa 2 de destino de los marcos salientes.",
                "La dirección de capa 3 de origen de los paquetes salientes.",
                "La dirección de capa 2 de origen de los marcos entrantes."
            ],
            correctAnswer: 3,
            explanation: "Un switch construye su tabla de direcciones MAC inspeccionando los marcos de capa 2 entrantes y registrando la dirección MAC de origen encontrada en el encabezado del marco.",
            type: "single"
        },
        {
            id: "ethernet9",
            question: " Consulte la ilustración. La ilustración muestra una pequeña red conmutada y el contenido de la tabla de direcciones MAC del conmutador. La PC1 ha enviado una trama dirigida a la PC3. ¿Qué hará el conmutador con la trama?",
            options: [
                "El interruptor descartará el marco.",
                "El conmutador reenviará la trama únicamente al puerto 2.",
                "El conmutador reenviará la trama a todos los puertos excepto al puerto 4.",
                "El conmutador reenviará la trama a todos los puertos.",
                "El conmutador reenviará la trama solo a los puertos 1 y 3."
            ],
            correctAnswer: 2,
            explanation: "Una dirección MAC consta de 6 bytes. Los primeros 3 bytes identifican al proveedor (OUI), mientras que los últimos 3 bytes son valores únicos asignados dentro del mismo OUI. Las direcciones MAC se implementan en hardware y son necesarias para la comunicación en la LAN. El IEEE regula las direcciones MAC.",
            image: "/images/Capitulo5/q9.png",
            type: "single"
        },
        {
            id: "ethernet10",
            question: "¿Qué método de conmutación utiliza el valor CRC en un cuadro?",
            options: [
                "Corte a través (cut-through)",
                "Avance rápido (fast-forward)",
                "Sin fragmentos (fragment-free)",
                "Almacenar y reenviar (store-and-forward)"
            ],
            correctAnswer: 3,
            explanation: "Cuando se utiliza el método de conmutación store-and-forward, el switch recibe el cuadro completo antes de reenviarlo al destino. El valor de verificación de redundancia cíclica (CRC) en el tráiler se utiliza para determinar si el cuadro fue modificado durante el tránsito.",
            type: "single"
        },
        {
            id: "ethernet11",
            question: "¿Qué es auto-MDIX?",
            options: [
                "Un tipo de switch Cisco.",
                "Un tipo de conector Ethernet.",
                "Un tipo de puerto en un switch Cisco.",
                "Una función que detecta el tipo de cable Ethernet."
            ],
            correctAnswer: 3,
            explanation: "Auto-MDIX es una función habilitada en los switches Cisco más recientes que permite al switch detectar y usar cualquier tipo de cable conectado a un puerto específico.",
            type: "single"
        },
        {
            id: "ethernet12",
            question: "Consulte la ilustración. La PC1 emite una solicitud ARP porque necesita enviar un paquete a PC2. En este caso, ¿qué sucederá a continuación?",
            options: [
                "PC2 enviará una respuesta ARP con su dirección MAC.",
                "RT1 enviará una respuesta ARP con la dirección MAC de su interfaz Fa0/0.",
                "RT1 enviará una respuesta ARP con la dirección MAC de PC2.",
                "SW1 enviará una respuesta ARP con la dirección MAC de PC2.",
                "SW1 enviará una respuesta ARP con la dirección MAC de su interfaz Fa0/1."
            ],
            correctAnswer: 0,
            explanation: "Cuando un dispositivo en la red desea comunicarse con otro en la misma red, emite una solicitud ARP por transmisión. En este caso, el destino (PC2) responderá con su dirección MAC.",
            image: "/images/Capitulo5/q12.png",
            type: "single"
        },
        {
            id: "ethernet13",
            question: "¿Cuál es el objetivo de un ataque de suplantación ARP?",
            options: [
                "Asociar direcciones IP con la dirección MAC incorrecta.",
                "Abrumar a los hosts de la red con solicitudes ARP.",
                "Inundar la red con transmisiones de respuestas ARP.",
                "Llenar las tablas de direcciones MAC de los switches con direcciones falsas."
            ],
            correctAnswer: 0,
            explanation: "En un ataque de suplantación ARP, un host malicioso intercepta las solicitudes ARP y responde para que los hosts de la red asignen una dirección IP a la dirección MAC del atacante.",
            type: "single"
        },
        {
            id: "ethernet14",
            question: "¿Qué característica tiene el almacenamiento en búfer basado en puertos?",
            options: [
                "Los cuadros en el búfer de memoria están vinculados dinámicamente a los puertos de destino.",
                "Todos los cuadros se almacenan en un búfer de memoria común.",
                "Los marcos se almacenan en colas vinculadas a puertos específicos.",
                "Todos los puertos de un switch comparten un solo búfer de memoria."
            ],
            correctAnswer: 2,
            explanation: "En el almacenamiento en búfer basado en puertos, los cuadros se almacenan en colas vinculadas a puertos específicos de entrada y salida, lo que permite gestionar los cuadros según el puerto.",
            type: "single"
        },
        {
            id: "ethernet15",
            question: "¿Cuál es el tamaño mínimo de un cuadro Ethernet que no será descartado por el receptor como un cuadro demasiado pequeño?",
            options: [
                "64 bytes",
                "512 bytes",
                "1024 bytes",
                "1500 bytes"
            ],
            correctAnswer: 0,
            explanation: "El tamaño mínimo de un cuadro Ethernet válido es de 64 bytes. Cuadros más pequeños se consideran 'runt frames' y se descartan.",
            type: "single"
        },
        {
            id: "ethernet16",
            question: "¿Cuáles son dos posibles problemas de red que pueden resultar de la operación ARP? (Elige dos)",
            options: [
                "Configurar manualmente asociaciones ARP estáticas podría facilitar ataques de suplantación ARP.",
                "En redes grandes con bajo ancho de banda, múltiples transmisiones ARP podrían causar retrasos en la comunicación de datos.",
                "Los atacantes de red podrían manipular las asociaciones de direcciones MAC e IP en los mensajes ARP con la intención de interceptar el tráfico de red.",
                "Un gran número de solicitudes ARP podría hacer que la tabla MAC de los hosts se desborde, impidiendo la comunicación de los mismos.",
                "Respuestas ARP múltiples hacen que la tabla MAC de los switches contenga entradas coincidentes con las direcciones MAC de los hosts conectados."
            ],
            correctAnswer: [1, 2],
            explanation: "Un gran número de transmisiones ARP puede causar retrasos en las comunicaciones. Los atacantes también pueden manipular asociaciones ARP para interceptar tráfico de red. Configuraciones ARP estáticas evitan, no facilitan, ataques de suplantación.",
            type: "multiple"
        },
        {
            id: "ethernet17",
            question: "Completa el espacio en blanco: Un fragmento de colisión, también conocido como un trama ______, es un cuadro con menos de 64 bytes de longitud.",
            options: ["RUNT"],
            correctAnswer: 0,
            explanation: "Un cuadro RUNT es un cuadro de menos de 64 bytes, generalmente generado por una colisión o un fallo en la interfaz de red.",
            type: "single"
        },
        {
            id: "ethernet18",
            question: "Completa el espacio en blanco: En un switch Cisco, el almacenamiento en búfer __________ se utiliza para almacenar cuadros en colas vinculadas a puertos específicos de entrada y salida.",
            options: ["basado en puertos"],
            correctAnswer: 0,
            explanation: "El almacenamiento en búfer basado en puertos organiza los cuadros en colas específicas para manejar mejor el tráfico entrante y saliente.",
            type: "single"
        },
        {
            id: "ethernet19",
            question: "Completa el espacio en blanco: _____________ ARP es una técnica que se utiliza para enviar mensajes ARP falsos a otros hosts en la LAN. El objetivo es asociar direcciones IP con direcciones MAC incorrectas.",
            options: ["La suplantación"],
            correctAnswer: 0,
            explanation: "La suplantación ARP o envenenamiento ARP es una técnica utilizada por un atacante para responder a solicitudes ARP con información falsa para redirigir el tráfico de red.",
            type: "single"
        },
        {
            id: "ethernet20",
            question: "¿Qué afirma correctamente el tratamiento de las solicitudes ARP en el enlace local?",
            options: [
                "Deben ser reenviadas por todos los routers en la red local.",
                "Son recibidas y procesadas por todos los dispositivos en la red local.",
                "Son descartadas por todos los switches en la red local.",
                "Son recibidas y procesadas solo por el dispositivo objetivo."
            ],
            correctAnswer: 1,
            explanation: "Las solicitudes ARP son mensajes de broadcast en la red local, por lo que son recibidas y procesadas por todos los dispositivos de la red local.",
            type: "single"
        },
        {
            id: "ethernet21",
            question: "Consulte la ilustración. Los conmutadores están en su configuración predeterminada. El host A necesita comunicarse con el host D, pero el host A no tiene la dirección MAC para su puerta de enlace predeterminada. ¿Qué hosts de red recibirán la solicitud ARP enviada por el host A?",
            options: [
                "Solo host D",
                "Solo router R1",
                "Solo hosts A, B y C",
                "Solo hosts A, B, C y D",
                "Solo hosts B y C",
                "Solo hosts B, C y router R1"
            ],
            correctAnswer: 5,
            explanation: "Cuando host A envía una solicitud ARP, esta se transmite como broadcast. Los dispositivos en la misma red local, incluyendo hosts B, C y el router R1, reciben esta solicitud, pero el router no la reenvía.",
            image: "/images/Capitulo5/q21.png",
            type: "single"
        },
        {
            id: "ethernet22",
            question: "Consulte la ilustración. Un conmutador con una configuración predeterminada conecta cuatro hosts. Se muestra la tabla ARP para el host A. ¿Qué sucede cuando el host A desea enviar un paquete IP al host D?",
            options: [
                "Host A envía una solicitud ARP a la dirección MAC de host D.",
                "Host D envía una solicitud ARP a host A.",
                "Host A envía el paquete al switch, y este lo reenvía solo a host D, que responde.",
                "Host A envía un broadcast de FF:FF:FF:FF:FF:FF. Todos los dispositivos conectados al switch reciben el broadcast, y host D responde con su dirección MAC."
            ],
            correctAnswer: 3,
            explanation: "Cuando la dirección MAC de destino no está en la tabla ARP del host de origen, este envía un broadcast a todos los dispositivos en la red local. Host D responderá con su dirección MAC.",
            image: "/images/Capitulo5/q22.png",
            type: "single"
        },
        {
            id: "ethernet23",
            question: "Verdadero o Falso: Cuando un dispositivo envía datos a otro dispositivo en una red remota, la trama Ethernet se envía a la dirección MAC de la puerta de enlace predeterminado.",
            options: ["Verdadero", "Falso"],
            correctAnswer: 0,
            explanation: "Una dirección MAC es útil solo en la red Ethernet local. Para datos destinados a una red remota, se envían al gateway predeterminado, que enruta el tráfico hacia su destino final.",
            type: "single"
        },
        {
            id: "ethernet24",
            question: "La tabla ARP en un switch mapea qué dos tipos de direcciones juntas:",
            options: [
                "Dirección de Capa 3 a una dirección de Capa 2",
                "Dirección de Capa 3 a una dirección de Capa 4",
                "Dirección de Capa 4 a una dirección de Capa 2",
                "Dirección de Capa 2 a una dirección de Capa 4"
            ],
            correctAnswer: 0,
            explanation: "La tabla ARP de un switch asocia direcciones MAC de Capa 2 con direcciones IP de Capa 3. Esto permite que el switch gestione la transmisión de paquetes en la red local.",
            type: "single"
        },
        {
            id: "ethernet25",
            question: "¿Cuál es una característica de un método de acceso basado en contención?",
            options: [
                "Procesa más overhead que los métodos de acceso controlados.",
                "Tiene mecanismos para rastrear los turnos de acceso al medio.",
                "Es un método no determinista.",
                "Escala muy bien bajo uso intensivo del medio."
            ],
            correctAnswer: 2,
            explanation: "Los métodos de acceso por contención, como CSMA/CD, son no deterministas porque los dispositivos compiten por el acceso al medio y no se garantiza el orden.",
            type: "single"
        },
        {
            id: "ethernet26",
            question: "¿Cuál es el propósito del preámbulo en un cuadro Ethernet?",
            options: [
                "Se utiliza como relleno de datos.",
                "Se utiliza para la sincronización de tiempo.",
                "Se utiliza para identificar la dirección de origen.",
                "Se utiliza para identificar la dirección de destino."
            ],
            correctAnswer: 1,
            explanation: "El preámbulo permite a los dispositivos sincronizarse para recibir correctamente el cuadro Ethernet.",
            type: "single"
        },
        {
            id: "ethernet27",
            question: "¿Cuál es la dirección MAC multicast de Capa 2 que corresponde a la dirección IPv4 multicast 224.139.34.56?",
            options: [
                "00-00-00-0B-22-38",
                "01-00-5E-0B-22-38",
                "01-5E-00-0B-22-38",
                "FE-80-00-0B-22-38",
                "FF-FF-FF-0B-22-38"
            ],
            correctAnswer: 1,
            explanation: "Las direcciones IPv4 multicast se asignan a direcciones MAC multicast en el rango 01-00-5E, con los 23 bits menos significativos tomados de la dirección IPv4.",
            type: "single"
        },
        {
            id: "ethernet28",
            question: "¿Cuáles dos afirmaciones son correctas sobre las direcciones MAC e IP durante la transmisión de datos si no se utiliza NAT? (Elija dos).",
            options: [
                "Un paquete que ha cruzado cuatro routers ha cambiado la dirección IP de destino cuatro veces.",
                "Las direcciones MAC de destino nunca cambian en un cuadro que cruza siete routers.",
                "Las direcciones MAC de destino y origen tienen importancia local y cambian cada vez que un cuadro pasa de una LAN a otra.",
                "Las direcciones IP de destino en un encabezado de paquete permanecen constantes a lo largo de todo el camino hasta el host de destino.",
                "Cada vez que un cuadro se encapsula con una nueva dirección MAC de destino, se necesita una nueva dirección IP de destino."
            ],
            correctAnswer: [2, 3],
            explanation: "Las direcciones MAC cambian en cada salto, ya que son específicas de la red local, mientras que las direcciones IP permanecen constantes.",
            type: "multiple"
        },
        {
            id: "ethernet29",
            question: "¿Cuáles son dos características de ARP? (Elija dos).",
            options: [
                "Si un host está listo para enviar un paquete a un dispositivo local y tiene la dirección IP pero no la dirección MAC de destino, genera un broadcast ARP.",
                "Una solicitud ARP se envía a todos los dispositivos en la LAN Ethernet e incluye la dirección IP del host de destino y su dirección MAC multicast.",
                "Cuando un host encapsula un paquete en un cuadro, consulta la tabla de direcciones MAC para determinar la asignación de direcciones IP a MAC.",
                "Si ningún dispositivo responde a la solicitud ARP, el nodo de origen transmite el paquete de datos a todos los dispositivos en el segmento de red.",
                "Si un dispositivo que recibe una solicitud ARP tiene la dirección IPv4 de destino, responde con una respuesta ARP."
            ],
            correctAnswer: [0, 4],
            explanation: "ARP permite que los dispositivos descubran las direcciones MAC asociadas a las direcciones IP. Si un dispositivo tiene la dirección solicitada, responde con una ARP Reply.",
            type: "multiple"
        },
        {
            id: "ethernet30",
            question: "Un host intenta enviar un paquete a un dispositivo en un segmento de LAN remoto, pero actualmente no hay asignaciones en su caché ARP. ¿Cómo obtendrá el dispositivo una dirección MAC de destino?",
            options: [
                "Enviará una solicitud ARP para la dirección MAC del dispositivo de destino.",
                "Enviará una solicitud ARP para la dirección MAC del gateway predeterminado.",
                "Enviará el cuadro utilizando su propia dirección MAC como destino.",
                "Enviará el cuadro con una dirección MAC de broadcast.",
                "Enviará una solicitud al servidor DNS para la dirección MAC de destino."
            ],
            correctAnswer: 1,
            explanation: "Cuando un dispositivo necesita enviar datos a un destino remoto, utiliza ARP para obtener la dirección MAC de su gateway predeterminado.",
            type: "single"
        },
        {
            id: "ethernet31",
            question: "Un administrador de red conecta dos switches modernos utilizando un cable recto. Los switches son nuevos y nunca se han configurado. ¿Cuáles tres afirmaciones son correctas sobre el resultado final de la conexión? (Elija tres).",
            options: [
                "El enlace entre los switches funcionará a la velocidad más rápida compatible con ambos switches.",
                "El enlace entre los switches funcionará como full-dúplex.",
                "Si ambos switches soportan diferentes velocidades, trabajarán a su velocidad más rápida.",
                "La función auto-MDIX configurará las interfaces eliminando la necesidad de un cable cruzado.",
                "La conexión no será posible a menos que el administrador cambie el cable por uno cruzado.",
                "La capacidad de dúplex debe configurarse manualmente porque no puede negociarse."
            ],
            correctAnswer: [0, 1, 3],
            explanation: "La función auto-MDIX elimina la necesidad de cables cruzados. Los switches modernos negocian automáticamente las configuraciones de velocidad y dúplex.",
            type: "multiple"
        },
        {
            id: "ethernet32",
            question: "Un switch de Capa 2 se utiliza para conmutar cuadros entrantes de un puerto 1000BASE-T a un puerto conectado a una red 100Base-T. ¿Qué método de almacenamiento en memoria funcionaría mejor para esta tarea?",
            options: [
                "Almacenamiento en búfer basado en puerto.",
                "Almacenamiento en caché de nivel 1.",
                "Almacenamiento en búfer de memoria compartida.",
                "Almacenamiento con configuración fija."
            ],
            correctAnswer: 2,
            explanation: "El almacenamiento en memoria compartida es más eficiente cuando se manejan puertos de diferentes velocidades, ya que permite una mayor flexibilidad.",
            type: "single"
        },
        {
            id: "ethernet33",
            question: "¿Cuándo registraría un switch varias entradas para un único puerto de switch en su tabla de direcciones MAC?",
            options: [
                "Cuando un router está conectado al puerto del switch.",
                "Cuando se han reenviado múltiples broadcasts ARP.",
                "Cuando otro switch está conectado al puerto del switch.",
                "Cuando el switch está configurado para conmutación de Capa 3."
            ],
            correctAnswer: 2,
            explanation: "Si otro switch o un hub está conectado a un puerto del switch, los cuadros provenientes de múltiples dispositivos conectados a ese switch o hub pueden hacer que se registren varias direcciones MAC en la tabla de direcciones MAC del switch.",
            type: "single"
        },
        {
            id: "ethernet34",
            question: "¿Cuáles dos afirmaciones describen un switch Ethernet de configuración fija? (Elija dos).",
            options: [
                "El switch no se puede configurar con múltiples VLANs.",
                "No se puede configurar un SVI en el switch.",
                "Un switch de configuración fija puede apilarse.",
                "El número de puertos en el switch no se puede aumentar.",
                "La densidad de puertos del switch está determinada por el Cisco IOS."
            ],
            correctAnswer: [2, 3],
            explanation: "Un switch de configuración fija tiene un número determinado de puertos que no puede ser ampliado, pero puede permitir apilamiento con otros switches para aumentar la capacidad.",
            type: "multiple"
        },
        {
            id: "ethernet35",
            question: "¿Cómo afecta la adición de una tarjeta de línea Ethernet al factor de forma de un switch?",
            options: [
                "Aumentando la velocidad de conmutación del plano de fondo.",
                "Expandiendo la densidad de puertos.",
                "Haciendo que el switch sea apilable.",
                "Expandiendo la capacidad de NVRAM."
            ],
            correctAnswer: 1,
            explanation: "La adición de una tarjeta de línea Ethernet permite agregar más puertos, lo que incrementa la densidad de puertos del switch.",
            type: "single"
        },
        {
            id: "ethernet36",
            question: "¿Qué dirección o combinación de direcciones usa un switch de Capa 3 para tomar decisiones de conmutación?",
            options: [
                "Solo dirección IP.",
                "Solo dirección de puerto.",
                "Solo dirección MAC.",
                "Dirección MAC y dirección de puerto.",
                "Dirección MAC y dirección IP."
            ],
            correctAnswer: 4,
            explanation: "Un switch de Capa 3 utiliza tanto direcciones MAC como IP para tomar decisiones de encaminamiento y conmutación.",
            type: "single"
        },
        {
            id: "ethernet37",
            question: "¿Qué declaración ilustra una desventaja del método de acceso CSMA/CD?",
            options: [
                "Los protocolos deterministas de acceso al medio ralentizan el rendimiento de la red.",
                "Es más complejo que los protocolos no deterministas.",
                "Las colisiones pueden disminuir el rendimiento de la red.",
                "Las tecnologías LAN CSMA/CD solo están disponibles a velocidades más lentas que otras tecnologías LAN."
            ],
            correctAnswer: 2,
            explanation: "Las colisiones en redes CSMA/CD pueden reducir la eficiencia y el rendimiento debido a la necesidad de retransmitir paquetes.",
            type: "single"
        },
        {
            id: "ethernet38",
            question: "Abre la actividad PT. Realiza las tareas en la instrucción de la actividad y luego responde la pregunta. ¿Qué dirección de destino incluirá PC1 en el campo de dirección de destino del cuadro Ethernet que envíe a PC2?",
            options: [
                "192.168.0.17",
                "192.168.0.34",
                "0030.a3e5.0401",
                "00e0.b0be.8014",
                "0007.ec35.a5c6"
            ],
            correctAnswer: 2,
            explanation: "En un contexto de conmutación de red, PC1 enviará la dirección MAC de destino de PC2, que es la dirección MAC del dispositivo de destino.",
            type: "single"
        },
        {
            id: "ethernet39",
            question: "¿Qué dirección o combinación de direcciones usa un switch de Capa 3 para tomar decisiones de conmutación?",
            options: [
                "Dirección MAC e IP.",
                "Solo dirección MAC.",
                "Dirección MAC y dirección de puerto.",
                "Solo dirección de puerto.",
                "Solo dirección IP."
            ],
            correctAnswer: 0,
            explanation: "Un switch de Capa 3 utiliza tanto direcciones MAC como IP para tomar decisiones de encaminamiento y conmutación.",
            type: "single"
        },
        {
            id: "ethernet40",
            question: "Lanza PT. Oculta y guarda PT. Abre la actividad PT. Realiza las tareas en la instrucción de la actividad y luego responde la pregunta. ¿Qué dirección de destino incluirá PC1 en el campo de dirección de destino del cuadro Ethernet que envíe a PC2?",
            options: [
                "00e0.b0be.8014",
                "0030.a3e5.0401",
                "192.168.0.34",
                "192.168.0.17",
                "0007.ec35.a5c6"
            ],
            correctAnswer: 1,
            explanation: "El cuadro Ethernet enviado de PC1 a PC2 incluirá la dirección MAC de destino del dispositivo de destino en el campo de dirección MAC.",
            image: "/images/Capitulo5/q40.png",
            type: "single"
        },
        {
            id: "ethernet41",
            question: "¿Cómo afecta la adición de una tarjeta de línea Ethernet al factor de forma de un switch?",
            options: [
                "Aumentando la velocidad de conmutación del plano de fondo.",
                "Expandiendo la densidad de puertos.",
                "Expandiendo la capacidad de NVRAM.",
                "Haciendo que el switch sea apilable."
            ],
            correctAnswer: 1,
            explanation: "La adición de una tarjeta de línea Ethernet incrementa la densidad de puertos del switch, lo que le permite conectar más dispositivos.",
            type: "single"
        },
        {
            id: "ethernet42",
            question: "¿Qué declaración ilustra una desventaja del método de acceso CSMA/CD?",
            options: [
                "Las colisiones pueden disminuir el rendimiento de la red.",
                "Los protocolos deterministas de acceso al medio ralentizan el rendimiento de la red.",
                "Las tecnologías LAN CSMA/CD solo están disponibles a velocidades más lentas que otras tecnologías LAN.",
                "Es más complejo que los protocolos no deterministas."
            ],
            correctAnswer: 0,
            explanation: "Las colisiones en CSMA/CD pueden reducir el rendimiento de la red debido a la necesidad de retransmitir los paquetes después de una colisión.",
            type: "single"
        },
        {
            id: "ethernet43",
            question: "Un administrador de red emite los siguientes comandos en un switch de Capa 3:",
            options: [
                "Una instancia de Cisco Express Forwarding.",
                "Un puerto enrutado.",
                "Una interfaz de trunk.",
                "Una interfaz virtual conmutada."
            ],
            correctAnswer: 1,
            explanation: "Los comandos configuran un puerto enrutado, lo que permite la comunicación de Capa 3 en lugar de un puerto conmutado.",
            image: "/images/Capitulo5/q43.png",
            type: "single"
        }
    ]
};