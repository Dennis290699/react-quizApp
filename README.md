# React Quiz App

**React Quiz App** es un sitio web interactivo diseñado para realizar cuestionarios dinámicos y personalizados, ideal para estudiantes, profesionales y cualquier persona que desee aprender de forma divertida y estructurada. Este proyecto utiliza **React** y **TypeScript**, con un diseño moderno y funciones personalizables.

## 🚀 Características

- **Modos de Juego:**
  - **Práctica:** Responde preguntas sin límite de tiempo y mejora tus conocimientos.
  - **Examen:** Desafíate con preguntas aleatorias.

- **Gestión de Preguntas:**
  - Preguntas de opción múltiple y única.
  - Aleatorización de preguntas en cada intento.

- **Experiencia de Usuario:**
  - **Modo oscuro:** Personaliza la apariencia según tu preferencia.
  - **Revisión de Respuestas:** Revisa y analiza tus respuestas después de completar el cuestionario.
  - **Mensajes Motivacionales:** Feedback positivo basado en tu desempeño.

- **Interfaz Intuitiva:**
  - Diseño responsivo y estético.
  - Preloader animado para carga de preguntas.
  - Mensajes claros si una categoría no contiene preguntas disponibles.

## 📂 Estructura del Proyecto

```plaintext
react-quizApp
├── 📁src
│   ├── 📁components         # Componentes reutilizables del proyecto
│   ├── 📁data               # Archivo de preguntas y datos estáticos
│   ├── 📁pages              # Páginas principales de la aplicación
│   ├── 📁styles             # Estilos CSS para el diseño
│   ├── 📁store              # Gestión de estado global con Zustand
│   └── App.tsx             # Archivo principal de la aplicación
├── 📁public                # Archivos públicos y estáticos
├── 📄package.json           # Dependencias del proyecto
└── 📄README.md             # Documentación del proyecto
```

## ⚙️ Instalación

Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Dennis290699/react-quizApp.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd react-quizApp
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta la aplicación:
   ```bash
   npm run dev
   ```

La aplicación estará disponible en `http://localhost:5173`.

## 🛠️ Tecnologías Utilizadas

- **React** con **TypeScript**: Desarrollo de componentes interactivos.
- **Zustand**: Gestión del estado global.
- **Vite**: Herramienta de construcción rápida.
- **CSS**: Diseño moderno y responsivo.

---

## 📋 Contribución

Si deseas contribuir a este proyecto, sigue los pasos a continuación:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y realiza un commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Envía tus cambios al repositorio remoto:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Crea un Pull Request explicando tus cambios.
   
## 📝 Licencia

Este proyecto está licenciado bajo la **MIT License**. Consulta el archivo `LICENSE` para más detalles.

## 🌟 Créditos

Proyecto desarrollado por Dennis290699 como parte de una plataforma interactiva de aprendizaje.

¡Gracias por visitar este proyecto! Si te gusta, no olvides darle una estrella ⭐ en GitHub.