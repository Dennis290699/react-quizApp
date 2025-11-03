import { QuizCategory } from '../../types/quiz';

export const chapter2Questions: QuizCategory = {
  id: 'network-os',
  title: 'Chapter 2',
  description: 'Test your knowledge of configuring and managing network operating systems.',
  icon: 'Network',
  color: 'indigo',
  questions: [
    {
      id: 'netos1',
      question: '¿Cuál es la función del núcleo de un software de sistema operativo?',
      options: [
        'Proporciona una interfaz de usuario que permite a los usuarios solicitar una tarea específica.',
        'El núcleo vincula los controladores de hardware con la electrónica subyacente de una computadora.',
        'Es una aplicación que permite la configuración inicial de un dispositivo Cisco.',
        'El núcleo asigna recursos de hardware para satisfacer los requisitos del software.'
      ],
      correctAnswer: 3,
      explanation: 'Los sistemas operativos funcionan con una shell, un núcleo y el hardware. La shell interactúa con los usuarios, permitiéndoles solicitar tareas específicas del dispositivo. El núcleo asigna recursos del hardware para satisfacer los requisitos del software. El hardware funciona mediante controladores y su electrónica subyacente, representando los componentes físicos del dispositivo.',
      type: "single"
    },
    {
      id: 'netos2',
      question: 'Un administrador de red necesita mantener el ID de usuario, la contraseña y el contenido de la sesión privados al establecer conectividad remota por CLI con un switch para gestionarlo. ¿Qué método de acceso debería elegirse?',
      options: [
        'Telnet',
        'Consola',
        'AUX',
        'SSH'
      ],
      correctAnswer: 3,
      explanation: 'Para ser verdaderamente privado, un técnico usaría una conexión de consola; sin embargo, si se requiere gestión remota, SSH proporciona un método seguro.',
      type: "single"
    },
    {
      id: 'netos3',
      question: '¿Qué procedimiento se utiliza para acceder a un switch Cisco 2960 al realizar una configuración inicial en un entorno seguro?',
      options: [
        'Usar Telnet para acceder remotamente al switch a través de la red.',
        'Usar el puerto de consola para acceder localmente al switch desde una interfaz serial o USB del PC.',
        'Usar Secure Shell para acceder remotamente al switch a través de la red.',
        'Usar el puerto AUX para acceder localmente al switch desde una interfaz serial o USB del PC.'
      ],
      correctAnswer: 1,
      explanation: 'Telnet y SSH requieren que los servicios de red estén activos y configurados en un dispositivo Cisco antes de que sean funcionales. Los switches Cisco no contienen puertos AUX.', 
      type: "single"
    },
    {
      id: 'netos4',
      question: '¿Qué comando o combinación de teclas permite a un usuario regresar al nivel anterior en la jerarquía de comandos?',
      options: [
        'end',
        'exit',
        'Ctrl-Z',
        'Ctrl-C'
      ],
      correctAnswer: 1,
      explanation: 'El comando end y CTRL-Z devuelven al usuario al modo EXEC privilegiado. Ctrl-C termina un comando en proceso. El comando exit devuelve al usuario al nivel anterior.', 
      type: "single"
    },
    {
      id: 'netos5',
      question: 'Un router tiene un sistema operativo válido y un archivo de configuración almacenado en NVRAM. El archivo de configuración contiene una contraseña secreta de habilitación pero no una contraseña de consola. ¿Qué modo se mostrará al arrancar el router?',
      options: [
        'modo de configuración global',
        'modo de configuración inicial',
        'modo EXEC privilegiado',
        'modo EXEC de usuario'
      ],
      correctAnswer: 3,
      explanation: 'Si un dispositivo Cisco IOS tiene un IOS válido y un archivo de configuración válido, arrancará en modo EXEC de usuario. Se requerirá una contraseña para ingresar al modo EXEC privilegiado.', 
      type: "single"
    },
    {
      id: 'netos6',
      question: '¿Qué dos funciones se proporcionan a los usuarios mediante la función de ayuda contextual en la CLI de Cisco IOS? (Elija dos.)',
      options: [
        'proporcionar un mensaje de error cuando se envía un comando incorrecto',
        'mostrar una lista de todos los comandos disponibles dentro del modo actual',
        'permitir al usuario completar el resto de un comando abreviado con la tecla TAB',
        'determinar qué opción, palabra clave o argumento está disponible para el comando ingresado',
        'seleccionar el mejor comando para llevar a cabo una tarea'
      ],
      correctAnswer: [1, 3],
      explanation: 'La ayuda contextual proporciona al usuario una lista de comandos y los argumentos asociados con esos comandos dentro del modo actual de un dispositivo de red. Un verificador de sintaxis proporciona verificaciones de errores en los comandos enviados y se puede usar la tecla TAB para completar comandos si se ingresa un comando parcial.', 
      type: "multiple"
    },
    {
      id: 'netos7',
      question: '¿Qué información muestra el comando show startup-config?',
      options: [
        'la imagen IOS copiada en RAM',
        'el programa bootstrap en la ROM',
        'el contenido del archivo de configuración en ejecución actual en la RAM',
        'el contenido del archivo de configuración guardado en la NVRAM'
      ],
      correctAnswer: 3,
      explanation: 'El comando show startup-config muestra la configuración guardada ubicada en NVRAM. El comando show running-config muestra el contenido del archivo de configuración actualmente en ejecución ubicado en RAM.', 
      type: "single"
    },
    {
      id: 'netos8',
      question: '¿Por qué es importante configurar un nombre de host en un dispositivo?',
      options: [
        'Un router o switch Cisco solo comienza a operar cuando se establece su nombre de host.',
        'Se debe configurar un nombre de host antes de cualquier otro parámetro.',
        'Para identificar el dispositivo durante el acceso remoto (SSH o Telnet).',
        'Para permitir el acceso local al dispositivo a través del puerto de consola.'
      ],
      correctAnswer: 2,
      explanation: 'Es importante configurar un nombre de host porque varios procesos de autenticación utilizan el nombre de host del dispositivo. Los nombres de host son útiles para la documentación y permiten identificar el dispositivo durante el acceso remoto.', 
      type: "single"
    },
    {
      id: 'netos9',
      question: '¿Qué dos nombres de host siguen las pautas para convenciones de nombres en dispositivos Cisco IOS? (Elija dos.)',
      options: [
        'Branch2!',
        'RM-3-Switch-2A4',
        'Floor(15)',
        'HO Floor 17',
        'SwBranch799'
      ],
      correctAnswer: [1, 4],
      explanation: 'Algunas pautas para las convenciones de nombres son que los nombres deben: comenzar con una letra, no contener espacios, terminar con una letra o dígito, usar solo letras, dígitos y guiones, y ser menos de 64 caracteres de longitud.', 
      type: "multiple"
    },
    {
      id: 'netos10',
      question: '¿Cómo mejora el comando service password-encryption la seguridad de las contraseñas en routers y switches Cisco?',
      options: [
        'Cifra las contraseñas a medida que se envían a través de la red.',
        'Cifra las contraseñas que se almacenan en los archivos de configuración del router o switch.',
        'Requiere que un usuario escriba contraseñas cifradas para obtener acceso a la consola de un router o switch.',
        'Requiere que se usen contraseñas cifradas al conectarse de forma remota a un router o switch con Telnet.'
      ],
      correctAnswer: 1,
      explanation: 'El comando service password-encryption cifra las contraseñas en texto plano en el archivo de configuración para que no puedan ser vistas por usuarios no autorizados.', 
      type: "single"
    },
    {
      id: 'netos11',
      question: 'En tu opinión (esto no afecta tu calificación), por favor indica cuán entusiasta eres sobre el contenido de este curso y las cosas que estás aprendiendo (o has aprendido):',
      options: [
        'Nada entusiasta',
        'Ligeramente entusiasta',
        'Entusiasta',
        'Muy entusiasta',
        'Completamente entusiasta'
      ],
      correctAnswer: 2,
      explanation: 'Esta pregunta es una autoevaluación sobre tu entusiasmo y percepción del curso.', 
      type: "single"
    },
    {
      id: 'netos12',
      question: 'En tu opinión (esto no afecta tu calificación), por favor indica tu interés en este curso:',
      options: [
        'Nada interesado',
        'Ligeramente interesado',
        'Interesado',
        'Muy interesado',
        'Completamente interesado'
      ],
      correctAnswer: 2,
      explanation: 'Esta pregunta es una autoevaluación sobre tu interés en el curso.', 
      type: "single"
    },
    {
      id: 'netos13',
      question: 'Consulta la ilustración. Un administrador de red está configurando el MOTD en el switch SW1. ¿Cuál es el propósito de este comando?',
      options: [
        'Mostrar un mensaje cuando un usuario accede al switch.',
        'Configurar el switch SW1 para que solo los usuarios en el grupo Admin puedan telnetear a SW1.',
        'Forzar a los usuarios del grupo Admin a ingresar una contraseña para la autenticación.',
        'Configurar el switch SW1 para que el mensaje se muestre cuando un usuario ingrese el comando enable.'
      ],
      correctAnswer: 0,
      explanation: 'Un mensaje de banner puede ser una parte importante del proceso legal en caso de que alguien sea procesado por intentar acceder a un dispositivo sin autorización. Un mensaje de banner debe dejar claro que solo el personal autorizado debe intentar acceder al dispositivo. Sin embargo, el comando de banner no previene el acceso no autorizado.', 
      image: "/images/Capitulo2/q13.png",
      type: "single"
    },
    {
      id: 'netos14',
      question: 'Mientras intenta resolver un problema de red, un técnico realizó múltiples cambios en el archivo de configuración actual del router. Los cambios no resolvieron el problema y no fueron guardados. ¿Qué acción puede tomar el técnico para descartar los cambios y trabajar con el archivo en NVRAM?',
      options: [
        'Emitir el comando reload sin guardar la configuración en ejecución.',
        'Eliminar el archivo vlan.dat y reiniciar el dispositivo.',
        'Cerrar y volver a abrir el software de emulación de terminal.',
        'Emitir el comando copy startup-config running-config.'
      ],
      correctAnswer: 0,
      explanation: 'El técnico no quiere cometer errores tratando de eliminar todos los cambios que se hicieron al archivo de configuración en ejecución. La solución es reiniciar el router sin guardar la configuración en ejecución. El comando copy startup-config running-config no sobrescribe el archivo de configuración en ejecución con el archivo de configuración almacenado en NVRAM, sino que tiene un efecto aditivo.', 
      type: "single"
    },
    {
      id: 'netos15',
      question: '¿Cuál es la función del kernel de un sistema operativo?',
      options: [
        'Proporciona una interfaz de usuario que permite a los usuarios solicitar una tarea específica.',
        'El kernel vincula los controladores de hardware con la electrónica subyacente de una computadora.',
        'Es una aplicación que permite la configuración inicial de un dispositivo Cisco.',
        'El kernel provisiona recursos de hardware para satisfacer los requisitos de software.'
      ],
      correctAnswer: 3,
      explanation: 'Los sistemas operativos funcionan con un shell, un kernel y el hardware. El shell se comunica con los usuarios, permitiéndoles solicitar tareas específicas del dispositivo. El kernel provisiona recursos del hardware para satisfacer los requisitos de software. El hardware funciona mediante el uso de controladores y su electrónica subyacente, representando los componentes físicos del dispositivo.', 
      type: "single"
    },
    {
      id: 'netos16',
      question: 'Un router con un sistema operativo válido contiene un archivo de configuración almacenado en NVRAM. El archivo de configuración tiene una contraseña secreta de habilitación pero no tiene contraseña de consola. Cuando el router arranca, ¿qué modo se mostrará?',
      options: [
        'modo EXEC privilegiado',
        'modo de configuración inicial',
        'modo EXEC de usuario',
        'modo de configuración global'
      ],
      correctAnswer: 2,
      explanation: 'Si un dispositivo Cisco IOS tiene un IOS válido y un archivo de configuración válido, arrancará en modo EXEC de usuario. Se requerirá una contraseña para ingresar al modo EXEC privilegiado.', 
      type: "single"
    },
    {
      id: 'netos17',
      question: 'En tu opinión (esto no afecta tu calificación), por favor evalúa tu motivación para tener éxito en este curso:',
      options: [
        'Nada motivado',
        'Ligeramente motivado',
        'Motivado',
        'Muy motivado',
        'Completamente motivado'
      ],
      correctAnswer: 2,
      explanation: 'Esta pregunta es una autoevaluación sobre tu motivación para tener éxito en el curso.', 
      type: "single"
    },
    {
      id: 'netos18',
      question: '¿Cuál es la afirmación verdadera sobre el archivo de configuración en ejecución en un dispositivo Cisco IOS?',
      options: [
        'Afecta inmediatamente la operación del dispositivo cuando se modifica.',
        'Está almacenado en NVRAM.',
        'Debe ser eliminado usando el comando erase running-config.',
        'Se guarda automáticamente cuando el router se reinicia.'
      ],
      correctAnswer: 0,
      explanation: 'Tan pronto como se ingresan comandos de configuración en un router, modifican inmediatamente el dispositivo. Los archivos de configuración en ejecución no pueden ser eliminados ni se guardan automáticamente.', 
      type: "single"
    },
    {
      id: 'netos19',
      question: '¿Cuáles son dos características de la RAM en un dispositivo Cisco? (Elige dos.)',
      options: [
        'La RAM proporciona almacenamiento no volátil.',
        'La configuración que está en funcionamiento en el dispositivo se almacena en la RAM.',
        'El contenido de la RAM se pierde durante un ciclo de energía.',
        'La RAM es un componente en los switches Cisco pero no en los routers Cisco.',
        'La RAM puede almacenar múltiples versiones de IOS y archivos de configuración.'
      ],
      correctAnswer: [1, 2],
      explanation: 'La RAM almacena datos que son utilizados por el dispositivo para soportar operaciones de red. La configuración en ejecución se almacena en RAM. Este tipo de memoria se considera memoria volátil porque los datos se pierden durante un ciclo de energía. La memoria flash almacena el IOS y entrega una copia del IOS a la RAM cuando un dispositivo se enciende. La memoria flash es no volátil ya que retiene el contenido almacenado durante una pérdida de energía.', 
      type: "multiple"
    },
    {
      id: 'netos20',
      question: '¿Qué interfaz permite la gestión remota de un switch de Capa 2?',
      options: [
        'la interfaz AUX',
        'la interfaz del puerto de consola',
        'la interfaz virtual del switch',
        'la primera interfaz Ethernet'
      ],
      correctAnswer: 2,
      explanation: 'En un switch de Capa 2, hay una interfaz virtual de switch (SVI) que proporciona un medio para gestionar remotamente el dispositivo.', 
      type: "single"
    },
    {
      id: 'netos21',
      question: '¿Cuál es la SVI predeterminada en un switch Cisco?',
      options: [
        'FastEthernet 0/1',
        'GigabitEthernet 0/1',
        'VLAN 1',
        'VLAN 99'
      ],
      correctAnswer: 2,
      explanation: 'Una SVI es una interfaz virtual y la VLAN 1 está habilitada por defecto en los switches Cisco. La VLAN 99 debe ser configurada para ser utilizada. FastEthernet 0/1 y GigabitEthernet 0/1 son interfaces físicas.', 
      type: "single"
    },
    {
      id: 'netos22',
      question: '¿Por qué necesitaría un switch de Capa 2 una dirección IP?',
      options: [
        'para permitir que el switch envíe tramas de difusión a las PC conectadas',
        'para permitir que el switch funcione como puerta de enlace predeterminada',
        'para permitir que el switch sea gestionado remotamente',
        'para permitir que el switch reciba tramas de las PC conectadas'
      ],
      correctAnswer: 2,
      explanation: 'Un switch, como un dispositivo de Capa 2, no necesita una dirección IP para transmitir tramas a los dispositivos conectados. Sin embargo, cuando se accede a un switch de forma remota a través de la red, debe tener una dirección de Capa 3. La dirección IP debe aplicarse a una interfaz virtual en lugar de a una interfaz física. Los routers, no los switches, funcionan como puertas de enlace predeterminadas.', 
      type: "single"
    },
    {
      id: 'netos23',
      question: '¿Qué comando se puede utilizar en una PC con Windows para ver la configuración IP de esa computadora?',
      options: [
        'ping',
        'ipconfig',
        'show interfaces',
        'show ip interface brief'
      ],
      correctAnswer: 1,
      explanation: 'En una PC con Windows, el comando ipconfig puede ser utilizado para verificar la configuración IP actual. El comando ping puede ser utilizado para verificar la conectividad con otros dispositivos de la red. Los comandos show interfaces y show ip interface brief son comandos de Cisco IOS que se utilizan para ver el estado de las interfaces de router y switch.', 
      type: "single"
    },
    {
      id: 'netos24',
      question: 'Un técnico está agregando una nueva PC a una LAN. Después de desempaquetar los componentes y hacer todas las conexiones, el técnico enciende la PC. Después de que se carga el sistema operativo, el técnico abre un navegador y verifica que la PC puede alcanzar Internet. ¿Por qué pudo la PC conectarse a la red sin configuración adicional?',
      options: [
        'La PC no requiere información adicional para funcionar en la red.',
        'La PC vino preconfigurada con información de direccionamiento IP de fábrica.',
        'La PC fue preconfigurada para usar DHCP.',
        'La PC utilizó DNS para recibir automáticamente información de direccionamiento IP de un servidor.',
        'La interfaz virtual de la PC es compatible con cualquier red.'
      ],
      correctAnswer: 2,
      explanation: 'La nueva PC fue preconfigurada para usar DHCP. Cuando la PC se conecta a una red que utiliza DHCP, obtiene la configuración de dirección IP del servidor DHCP que le permitirá funcionar en la red. Todos los dispositivos requieren al menos una dirección IP y una máscara de subred para funcionar en una LAN. DNS no configura automáticamente direcciones en los hosts. Las interfaces virtuales de PC no son universalmente compatibles con las LANs y no proporcionan necesariamente una dirección IP a un host. En este punto del curso, las interfaces virtuales se utilizan en switches de red.', 
      type: "single"
    },
    {
      id: 'netos25',
      question: '¿Qué intenta determinar un usuario al emitir un comando ping 10.1.1.1 en una PC?',
      options: [
        'si la pila TCP/IP está funcionando en la PC sin poner tráfico en la red',
        'si hay conectividad con el dispositivo de destino',
        'el camino que tomará el tráfico para alcanzar el destino',
        'qué tipo de dispositivo está en el destino'
      ],
      correctAnswer: 1,
      explanation: 'El comando ping destino puede ser utilizado para probar la conectividad.', 
      type: "single"
    },
    {
      id: 'netos26',
      question: 'Referencia al anexo. Un técnico de red está probando la conectividad en una nueva red. Según los resultados de la prueba mostrados en el anexo, ¿con qué dispositivo tiene conectividad el técnico y con cuál no tiene conectividad? (Elige dos.)',
      options: [
        'conectividad: switch 2',
        'conectividad: PC-D',
        'conectividad: PC-B',
        'sin conectividad: switch 1',
        'sin conectividad: switch 2',
        'sin conectividad: PC-C'
      ],
      correctAnswer: [0, 5],
      explanation: 'El anexo muestra pruebas de ping a dos dispositivos. Un dispositivo tiene la dirección IP de 192.168.1.2, que es el switch 2. La otra prueba es a la dirección IP de 192.168.1.21, que es el host PC-C. Para la primera prueba, al switch 2, los resultados son exitosos, con cuatro mensajes de respuesta recibidos. Esto significa que existe conectividad con el switch 2. Para la segunda prueba, todos los mensajes se agotaron. Esto indica que no hay conectividad con PC-C.', 
      image: "/images/Capitulo2/q26.png",
      type: "multiple"
    },
    {
      id: 'netos27',
      question: 'Referencia al anexo. ¿Qué tres hechos se pueden determinar a partir de la salida visible del comando show ip interface brief? (Elige tres.)',
      options: [
        'Dos interfaces físicas han sido configuradas.',
        'El switch puede ser gestionado de forma remota.',
        'Un dispositivo está conectado a una interfaz física.',
        'Se han configurado contraseñas en el switch.',
        'Dos dispositivos están conectados al switch.',
        'La SVI predeterminada ha sido configurada.'
      ],
      correctAnswer: [1, 2, 5],
      explanation: 'Vlan1 es la SVI predeterminada. Como se ha configurado una SVI, el switch puede ser configurado y gestionado de forma remota. FastEthernet0/0 está mostrando "up" y "up", por lo que un dispositivo está conectado.',
      image: "/images/Capitulo2/q27.png",
      type: "multiple"
    },
    {
      id: 'netos28',
      question: 'Un administrador de red está planeando una actualización de IOS en varios de los routers y switches de la oficina central. ¿Cuáles son las tres preguntas que deben ser respondidas antes de continuar con la selección y actualización del IOS? (Elige tres.)',
      options: [
        '¿Están los dispositivos en la misma LAN?',
        '¿Tienen los dispositivos suficiente NVRAM para almacenar la imagen del IOS?',
        '¿Qué modelos de routers y switches requieren actualizaciones?',
        '¿Qué puertos están instalados en los routers y switches?',
        '¿Tienen los routers y switches suficiente RAM y memoria flash para las versiones de IOS propuestas?',
        '¿Qué características son requeridas para los dispositivos?'
      ],
      correctAnswer: [2, 4, 5],
      explanation: 'Antes de seleccionar y actualizar IOS, es crucial asegurarse de que los dispositivos tienen suficiente NVRAM, RAM y flash para soportar el nuevo IOS y que las características necesarias están disponibles en los dispositivos.',
      type: "multiple"
    },
    {
      id: 'netos29',
      question: 'Un enrutador tiene un sistema operativo válido y una configuración almacenada en NVRAM. Cuando se inicia el enrutador, ¿qué modo se mostrará?',
      options: [
        'modo de configuración global',
        'modo de configuración',
        'Modo de monitorización de ROM',
        'modo EXEC de usuario'
      ],
      correctAnswer: 3,
      explanation: 'Cuando se inicia un enrutador con un sistema operativo válido y configuración en NVRAM, se muestra el modo EXEC de usuario.',
      type: "single"
    },
    {
      id: 'netos30',
      question: '¿Cuáles son los dos caracteres permitidos como parte del nombre de host de un dispositivo Cisco? (Elige dos opciones).',
      options: [
        'números',
        'signo de interrogación',
        'espacio',
        'pestaña',
        'estrella (*)'
      ],
      correctAnswer: [0, 4],
      explanation: 'Los nombres de host de Cisco permiten letras, números y algunos caracteres especiales, pero no incluyen espacios ni tabulaciones.'
      ,type: "multiple"
    },
    {
      id: 'netos31',
      question: '¿Cuál es el resultado de utilizar el comando service password-encryption en un dispositivo de red Cisco?',
      options: [
        'El comando encripta el mensaje del banner.',
        'El comando cifra la contraseña del modo habilitado.',
        'No todas las contraseñas de la configuración se muestran en texto claro al visualizar la configuración.',
        'A un administrador de red que posteriormente inicie sesión en el dispositivo se le solicitará que ingrese una contraseña de administrador para poder acceder al dispositivo Cisco.'
      ],
      correctAnswer: 2,
      explanation: 'El comando service password-encryption encripta todas las contraseñas para que no se muestren en texto claro en la configuración.'
      ,type: "single"
    },
    {
      id: 'netos32',
      question: 'Se le ha pedido a un nuevo administrador de red que ingrese un mensaje de banner en un dispositivo Cisco. ¿Cuál es la forma más rápida en que un administrador de red puede probar si el mensaje de banner está configurado correctamente?',
      options: [
        'Reinicie el dispositivo.',
        'Ingrese CTRL-Z en el indicador de modo privilegiado.',
        'Salir del modo de configuración global.',
        'Salga del modo EXEC privilegiado y presione Entrar.'
      ],
      correctAnswer: 3,
      explanation: 'Al salir del modo EXEC privilegiado y presionar Enter, el administrador puede ver el mensaje de banner.'
      ,type: "single"
    },
    {
      id: 'netos33',
      question: 'Las contraseñas se pueden utilizar para restringir el acceso a todo el sistema operativo Cisco IOS o a partes de él. Seleccione los modos y las interfaces que se pueden proteger con contraseñas. (Elige tres opciones).',
      options: [
        'Interfaz VTY',
        'Interfaz de consola',
        'Interfaz Ethernet',
        'Arranque en modo IOS',
        'modo EXEC privilegiado',
        'modo de configuración del enrutador'
      ],
      correctAnswer: [0, 1, 4],
      explanation: 'Las contraseñas se pueden aplicar en las interfaces VTY, la interfaz de consola y el modo EXEC privilegiado.'
      ,type: "multiple"
    },
    {
      id: 'netos34',
      question: '¿Qué beneficio proporciona DHCP a una red?',
      options: [
        'Los hosts siempre tienen la misma dirección IP y, por lo tanto, siempre son accesibles.',
        'DHCP permite a los usuarios referirse a ubicaciones por un nombre en lugar de una dirección IP.',
        'Los hosts pueden conectarse a la red y obtener una dirección IP sin configuración manual.',
        'No pueden producirse direcciones duplicadas en una red que emite direcciones dinámicas mediante DHCP y tiene asignaciones estáticas.'
      ],
      correctAnswer: 2,
      explanation: 'DHCP permite la configuración automática de direcciones IP para que los hosts puedan conectarse sin configuraciones manuales.'
      ,type: "single"
    },
    {
      id: 'netos35',
      question: '¿Qué criterio se debe seguir en el diseño de un esquema de direccionamiento IPv4 para dispositivos finales?',
      options: [
        'Cada dirección IP debe coincidir con la dirección que el DNS asigna al host.',
        'Cada dirección IP debe ser única dentro de la red local.',
        'Cada dirección IP debe ser compatible con la dirección MAC.',
        'A cada host local se le debe asignar una dirección IP con un componente de red único.'
      ],
      correctAnswer: 1,
      explanation: 'Cada dirección IP asignada a un dispositivo final debe ser única dentro de la red local.'
      ,type: "single"
    },
    {
      id: 'netos36',
      question: 'Consulte la ilustración. Se configuró un conmutador como se muestra. Se emitió un ping a la puerta de enlace predeterminada, pero no tuvo éxito. Otros conmutadores de la misma red pueden hacer ping a esta puerta de enlace. ¿Cuál es una posible razón para esto?',
      options: [
        'La dirección IP de la VLAN y la dirección IP de la puerta de enlace predeterminada no están en la misma red.',
        'El servidor DNS local no está funcionando correctamente.',
        'No se emitió el comando de no apagado para VLAN 1.',
        'El comando ip default-gateway debe emitirse en el modo de configuración de la interfaz VLAN.'
      ],
      correctAnswer: 0,
      explanation: 'Si la IP de la VLAN y la puerta de enlace predeterminada no están en la misma red, el conmutador no podrá comunicarse con la puerta de enlace.',
      image: "/images/Capitulo2/q36.png",
      type: "single"
    },
    {
      id: 'netos37',
      question: 'Un empleado de una gran empresa inicia sesión de forma remota en la empresa utilizando el nombre de usuario y la contraseña adecuados. El empleado está asistiendo a una importante videoconferencia con un cliente sobre una gran venta. Es importante que la calidad del vídeo sea excelente durante la reunión. El empleado no sabe que, tras iniciar sesión correctamente, la conexión con el proveedor de servicios de Internet de la empresa ha fallado. Sin embargo, la conexión secundaria se ha activado en cuestión de segundos. El empleado y los demás empleados no se han dado cuenta de la interrupción. ¿Cuáles tres características de red se describen en este escenario? (Elija tres).',
      options: [
        'seguridad',
        'calidad del servicio',
        'escalabilidad',
        'Redes de líneas eléctricas',
        'integridad',
        'tolerancia a fallos'
      ],
      correctAnswer: [0, 1, 5],
      explanation: 'La seguridad, QoS y la tolerancia a fallos son evidentes en este escenario. Los nombres de usuario y contraseñas representan seguridad, la calidad del video es gestionada por QoS y la tolerancia a fallos se evidencia en la conexión secundaria que se activa.'
      ,type: "multiple"
    },
    {
      id: 'netos38',
      question: '¿Cuál es la consecuencia de configurar un enrutador con el comando de configuración global ipv6 unicast-routing?',
      options: [
        'Todas las interfaces del enrutador se activarán automáticamente.',
        'Las interfaces del enrutador habilitadas para IPv6 comienzan a enviar mensajes de anuncio de enrutador ICMPv6.',
        'Cada interfaz del enrutador generará una dirección de enlace local IPv6.',
        'Crea estáticamente una dirección de unidifusión global en este enrutador.'
      ],
      correctAnswer: 1,
      explanation: 'El comando ipv6 unicast-routing permite que las interfaces habilitadas para IPv6 envíen mensajes de anuncio de enrutador ICMPv6.'
      ,type: "single"
    },
    {
      id: 'netos39',
      question: '¿Cuáles son dos mensajes ICMPv6 que no están presentes en ICMP para IPv4? (Elige dos opciones).',
      options: [
        'Solicitud de vecinos',
        'Destino inalcanzable',
        'Confirmación del anfitrión',
        'Tiempo excedido',
        'Anuncio de enrutador'
      ],
      correctAnswer: [0, 4],
      explanation: 'ICMPv6 introduce nuevos mensajes: Anuncio de enrutador y Solicitud de vecinos, que no están presentes en ICMP para IPv4.'
      ,type: "multiple"
    },
    {
      id: 'netos40',
      question: '¿Qué dos piezas de información se muestran en la salida del comando show ip interface brief? (Elige dos opciones).',
      options: [
        'Direcciones IP',
        'descripciones de interfaz',
        'Direcciones MAC',
        'direcciones del siguiente salto',
        'Estados de la capa 1'
      ],
      correctAnswer: [0, 4],
      explanation: 'El comando show ip interface brief muestra la dirección IP de cada interfaz y el estado operativo de las interfaces en la capa 1.'
      ,type: "multiple"
    },
    {
      id: 'netos41',
      question: 'Un servidor recibe un paquete de cliente. El paquete tiene como número de puerto de destino 80. ¿Qué servicio solicita el cliente?',
      options: [
        'DHCP',
        'SMTP',
        'Sistema de nombres de dominio',
        'HTTP'
      ],
      correctAnswer: 3,
      explanation: 'El puerto 80 está asociado con HTTP, lo cual indica que el cliente solicita este servicio.'
      ,type: "single"
    }
  ]
};
