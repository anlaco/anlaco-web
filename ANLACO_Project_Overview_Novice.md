# Documentación del Proyecto ANLACO Web para Principiantes

## 1. Introducción al Proyecto ANLACO Web

*   **¿Qué es ANLACO Web?**
    ANLACO Web es el sitio web oficial de ANLACO. Su propósito principal es ser un recurso para la comunidad interesada en diseños "Hazlo Tú Mismo" (DIY, por sus siglas en inglés: *Do It Yourself*) y en la adquisición de componentes electrónicos y mecánicos de alta calidad. El proyecto promueve el crecimiento orgánico, el código abierto y la transparencia.

*   **¿Para quién es este documento?**
    Este documento está diseñado específicamente para nuevos miembros del equipo que no tienen experiencia previa en programación o desarrollo web. Si eres nuevo en estos temas, ¡no te preocupes! Esta guía te ayudará a entender de qué se trata este proyecto.

*   **Objetivo de este documento**
    El objetivo es que comprendas, a grandes rasgos, qué es el proyecto ANLACO Web, cómo está estructurado y qué tecnologías básicas utiliza, sin necesidad de entrar en detalles técnicos complejos.

## 2. ¿Qué es una Página Web y Cómo Funciona (Muy Básico)?

Imagina una página web como una revista digital interactiva o un libro muy avanzado.

*   **Frontend (Lo que ves):** Es la parte de la página web con la que interactúas directamente en tu navegador: los textos que lees, las imágenes que ves, los botones en los que haces clic. Es como la portada y las páginas de la revista. El proyecto ANLACO Web es principalmente un proyecto "frontend".
*   **Backend (El cerebro detrás):** Aunque no profundizaremos aquí, a menudo hay una parte "invisible" que se ejecuta en servidores lejanos. Esta parte maneja bases de datos, lógica compleja, etc. Para ANLACO Web, la mayor parte de lo que experimentarás es el frontend.
*   **Navegador Web:** Programas como Google Chrome, Mozilla Firefox, Safari o Microsoft Edge son tus "lectores" de estas páginas web. Toman el código de la página y lo muestran de forma visual y organizada.

## 3. Tecnologías Clave (Explicación Sencilla)

Estas son algunas de las herramientas y lenguajes que se usan para construir ANLACO Web:

*   **React:**
    *   **Qué es:** Imagina que estás construyendo con bloques de LEGO. React es una "biblioteca" (una colección de herramientas y código preescrito) que ayuda a los desarrolladores a construir las interfaces de usuario (lo que ves y con lo que interactúas) de forma eficiente. En lugar de construir toda una página de una vez, se construye con pequeñas piezas llamadas "componentes".
    *   **Componentes:** Son como esos bloques de LEGO. Pueden ser pequeños (un botón, un ícono) o grandes (un menú de navegación completo, el listado de productos). La ventaja es que estos componentes se pueden reutilizar en diferentes partes del sitio web.

*   **JavaScript (JS):**
    *   **Qué es:** Es el lenguaje de programación que hace que las páginas web sean interactivas. Si ves animaciones, menús desplegables, o cosas que cambian en la página sin recargarla, es muy probable que JavaScript esté trabajando detrás. Es el que le da "vida" a la página.

*   **HTML (HyperText Markup Language):**
    *   **Qué es:** Es el esqueleto o la estructura básica de una página web. Define los elementos como títulos, párrafos, imágenes, enlaces, etc. Es como el armazón de un edificio.

*   **CSS (Cascading Style Sheets):**
    *   **Qué es:** Es lo que da estilo y apariencia a la página web. Define los colores, las fuentes, el espaciado, la disposición de los elementos... En resumen, hace que la página se vea bonita y organizada. Si HTML es el esqueleto, CSS es la ropa y el maquillaje.

*   **React Router DOM:**
    *   **Qué es:** Es una herramienta específica para sitios hechos con React. Permite la navegación entre diferentes "secciones" o "páginas" dentro del sitio web (por ejemplo, ir de la página de "Inicio" a la de "Contacto") de manera fluida, a menudo sin necesidad de que toda la página se recargue por completo.

## 4. Estructura del Proyecto ANLACO Web

Entender cómo están organizados los archivos ayuda a comprender cómo funciona el sitio.

*   **Diagrama de Flujo Simplificado (Cómo se muestra una página):**
    1.  Un usuario abre su navegador web (ej. Chrome).
    2.  Escribe la dirección del sitio (ej. `www.anlaco.com`).
    3.  El navegador solicita la página. Inicialmente, se carga un archivo base llamado `index.html`.
    4.  Este `index.html` es muy básico, pero le dice al navegador que cargue la aplicación React.
    5.  Un archivo llamado `index.js` es el primero en ejecutarse de la aplicación React.
    6.  `index.js` carga el componente principal de la aplicación, llamado `App.js`.
    7.  `App.js` es como el director de orquesta:
        *   Muestra partes comunes como el encabezado (Header) y el pie de página (Footer).
        *   Utiliza `React Router DOM` para decidir qué contenido específico mostrar en el medio, basándose en la dirección URL que el usuario visitó (ej. `/about`, `/contact`).

*   **Carpetas Importantes (Dónde se guardan los archivos):**
    El código del proyecto se organiza en carpetas para mantener todo ordenado. Las más relevantes para entender la estructura son:

    *   `public/`: Contiene archivos que son accesibles directamente por el público (y el navegador).
        *   `index.html`: Es el archivo HTML principal que carga la aplicación React. Es como el "marco" donde se pinta todo lo demás.
        *   Imágenes, logos, íconos (como `favicon.ico`, `logo192.png`): Recursos gráficos del sitio.

    *   `src/`: ("Source" o fuente) Esta es la carpeta más importante, ya que contiene el "corazón" del código de la aplicación React.
        *   `index.js`: Es el punto de entrada de la aplicación React. Le dice al navegador que renderice (dibuje) el componente `App` dentro del `index.html`.
        *   `App.js`: Es el componente principal de la aplicación. Organiza la estructura general del sitio (encabezado, contenido principal, pie de página) y configura el sistema de "rutas" (qué mostrar para cada URL).
        *   `components/`: Contiene los "bloques de LEGO" reutilizables de la interfaz.
            *   `layout/`: Subcarpeta dentro de `components/` que generalmente guarda componentes estructurales como `Header.js` (el encabezado del sitio) y `Footer.js` (el pie de página).
        *   `pages/`: Contiene los componentes que representan las diferentes "páginas" o secciones principales del sitio web. Por ejemplo:
            *   `Home.js` (la página de inicio)
            *   `About.js` (la página "Sobre Nosotros")
            *   `Contact.js` (la página de contacto)
            *   `Designs.js` (la página de Diseños DIY)
            *   `Shop.js` (la página de la Tienda)
        *   `assets/`: Contiene archivos de soporte como hojas de estilo (CSS) o imágenes que se usan internamente en los componentes.
            *   `styles/main.css`: Un archivo CSS que contiene los estilos globales para todo el sitio web (colores base, fuentes, etc.).

*   **Archivos Clave (Resumen de su Función):**
    *   `package.json`: Es como la "lista de ingredientes" y "libro de recetas" del proyecto.
        *   Lista las "dependencias": otras herramientas y bibliotecas de código que el proyecto necesita para funcionar (como React mismo, React Router DOM, etc.).
        *   Define "scripts": comandos útiles para los desarrolladores, como iniciar el entorno de desarrollo local (`npm start`) o preparar el sitio para producción (`npm build`).
    *   `README.md`: Un archivo de texto que proporciona una descripción general del proyecto, instrucciones sobre cómo configurarlo, tecnologías utilizadas, etc. Es la primera documentación que se suele leer.

## 5. Componentes Principales y su Función

Recordemos que los componentes son como piezas de LEGO que, juntas, forman el sitio web.

*   **Header (`src/components/layout/Header.js`):**
    *   **Qué muestra:** Generalmente, el logo o nombre del sitio ("ANLACO") y el menú de navegación principal (enlaces a "Home", "Diseños DIY", "Tienda", "Sobre Nosotros", "Contacto").
    *   **Para qué sirve:** Permite a los usuarios navegar fácilmente entre las diferentes secciones principales del sitio web.

*   **Footer (`src/components/layout/Footer.js`):**
    *   **Qué muestra:** Información que suele ir al final de todas las páginas, como el aviso de copyright (© ANLACO) y el año actual. A veces también enlaces secundarios o información de contacto.
    *   **Para qué sirve:** Proporciona información legal, de atribución y a veces enlaces útiles de cierre.

*   **Páginas (archivos dentro de `src/pages/`):**
    Cada archivo `.js` en la carpeta `src/pages/` define el contenido específico de una sección principal del sitio.
    *   `Home.js`: Muestra el contenido de la página de inicio, que es lo primero que ven los visitantes. En ANLACO Web, incluye un mensaje de bienvenida, una breve descripción y enlaces a secciones destacadas como "Proyectos DIY" y "Componentes de Calidad".
    *   `Designs.js`: Está destinada a mostrar los diseños DIY, guías y proyectos.
    *   `Shop.js`: Es la sección donde se listarán los componentes y productos para la venta.
    *   `About.js`: Contiene información sobre la empresa o el proyecto ANLACO: su misión, visión, equipo, etc.
    *   `Contact.js`: Proporciona formas para que los usuarios se pongan en contacto, ya sea un formulario, direcciones de correo electrónico, etc.

## 6. ¿Cómo se Muestra una Página Específica? (Flujo Simplificado)

Veamos un ejemplo: ¿Qué pasa cuando un usuario visita la dirección `www.anlaco.com/about`?

1.  El usuario escribe `www.anlaco.com/about` en su navegador y presiona Enter.
2.  El navegador solicita esta dirección al servidor donde está alojado el sitio web.
3.  La configuración del servidor (y de la aplicación React) está preparada para manejar estas "rutas".
4.  El componente `App.js` (que está siempre activo) utiliza `React Router DOM` para analizar la parte de la URL que viene después del dominio (es decir, `/about`).
5.  `React Router DOM` tiene una lista de rutas configuradas. Encuentra que `/about` está asociado con el componente `About.js` (que está en `src/pages/About.js`).
6.  Entonces, React "renderiza" (dibuja) la página:
    *   Primero, muestra el componente `Header.js`.
    *   Luego, en el área de contenido principal, muestra el contenido del componente `About.js`.
    *   Finalmente, muestra el componente `Footer.js`.

Todo esto sucede muy rápido, dando la sensación de que se ha cargado una "página" nueva, aunque a menudo solo cambia el contenido central.

## 7. Glosario de Términos (Muy Básico)

*   **Frontend:** La parte visible e interactiva de un sitio web.
*   **Componente:** Una pieza de código reutilizable que cumple una función específica en la interfaz (ej. un botón, un menú).
*   **Ruta (URL):** La dirección web que identifica una página o sección específica de un sitio (ej. `/about`, `/contact`).
*   **Navegación:** El acto de moverse entre diferentes rutas o páginas dentro de un sitio web.
*   **Repositorio:** Un lugar (a menudo en plataformas como GitHub) donde se almacena y gestiona todo el código fuente del proyecto.

## 8. Próximos Pasos para Ti

*   **Navega por el sitio web de ANLACO:** Visita cada una de las secciones mencionadas (Home, Diseños, Tienda, Sobre Nosotros, Contacto). Intenta identificar el Header, el Footer y el contenido específico de cada página.
*   **Relaciona lo que ves con este documento:** Piensa en cómo los archivos y carpetas que hemos descrito aquí se traducen en lo que estás viendo en tu pantalla.
*   **¡Pregunta!:** Este documento es una introducción. Si algo no queda claro o tienes más curiosidad sobre algún aspecto, no dudes en preguntar a tus compañeros de equipo. ¡La mejor forma de aprender es preguntar!

Esperamos que esta guía te sea de utilidad para familiarizarte con el proyecto ANLACO Web. ¡Bienvenido/a al equipo!
