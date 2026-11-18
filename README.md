# Portfolio Web Personal — Manu (devManuD)

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://mdpozo.github.io/)
[![HTML5](https://img.shields.io/badge/HTML5-Semántico-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Variables_%26_Grid-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![UI/UX](https://img.shields.io/badge/UI%2FUX-Editorial_Tech_Dark-10B981?style=for-the-badge&logo=figma&logoColor=white)](https://figma.com)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%25_Performance-4CAF50?style=for-the-badge&logo=googlechrome&logoColor=white)](https://developers.google.com/web/tools/lighthouse)

---

## Propósito y Perfil a Proyectar

Este repositorio contiene el código fuente de mi **sitio web portfolio personal**, diseñado y programado desde cero para ser publicado en **GitHub Pages** (`https://mdpozo.github.io/`).

Está concebido específicamente como carta de presentación ante agencias de marketing digital, estudios de diseño de interfaces y consultoras tecnológicas (con foco especial en Cáceres y Extremadura, así como en equipos remotos) para mi incorporación a las **prácticas de FCT de 2º de Desarrollo de Aplicaciones Multiplataforma (DAM)**.

### Propuesta de Valor Híbrida:
* **Titulado en Imagen y Diseño Gráfico:** Criterio tipográfico, equilibrio visual, diseño centrado en la conversión, branding coherente y maquetación al píxel.
* **Estudiante de 2º de DAM:** Arquitectura de software limpia, patrones de diseño (MVC, MVVM, DAO), componentes modulares y versatilidad multiplataforma (TypeScript, Kotlin Compose, JavaFX, Python Odoo).

---

## Decisiones de Diseño UI/UX & Dirección de Arte

La interfaz sigue una estética **"Editorial Studio / Agency"** con un sistema dual de temas (Modo Claro predeterminado + Modo Oscuro opcional mediante selector en el navbar):

### 1. Paleta Cromática y Tokens de Diseño
- **Modo Claro (Predeterminado "Editorial Studio"):**
  - **Fondo Base (`#F8FAFC`):** Blanco roto perla de alta gama que no deslumbra, con halos radiales suaves.
  - **Tarjetas y Superficies (`#FFFFFF`):** Blanco puro con bordes sutiles en `#E2E8F0` y sombras difusas multicapa.
  - **Tipografía en Contraste:** Carbón profundo (`#0F172A`) y pizarra (`#475569`) para máxima legibilidad según estándares WCAG AAA.
  - **Acentos:** Azul Royal (`#2563EB`) y Verde Esmeralda fresco (`#059669`).
- **Modo Oscuro (Opcional "Editorial Tech"):**
  - **Fondo Base (`#0B0D10`):** Negro grafito profundo para pantallas OLED.
  - **Tarjetas:** `#13171F` con bordes finos en `rgba(255, 255, 255, 0.08)`.
  - **Acentos:** Azul eléctrico (`#3B82F6`) y esmeralda técnico (`#10B981`).
- **Selector de Tema en Navbar:** Botón interactivo con icono SVG dinámico (sol/luna) que alterna entre temas al instante y recuerda la preferencia en `localStorage`.

### 2. Jerarquía Tipográfica
Se importan tres familias tipográficas de Google Fonts con propósitos complementarios:
- **Plus Jakarta Sans:** Titulares principales con tracking cerrado (`-0.035em`) para un impacto visual directo y contemporáneo.
- **Inter:** Cuerpo de texto y párrafos descriptivos, optimizada para máxima legibilidad en pantallas de cualquier densidad.
- **JetBrains Mono:** Metadatos, etiquetas de tecnologías, líneas de código y estados de disponibilidad.

### 3. Componentes y Microinteracciones Clave
- **Navbar Sticky con Glassmorphism & Theme Toggle:** Menú adaptable con selector de luz/oscuridad, navegación suave y botón CTA directo.
- **Sección Bento Grid ("El Puente"):** Comparativa visual en 2 columnas que evidencia el valor añadido del perfil híbrido frente a perfiles tradicionales no comunicados.
- **Filtro Reactivo de Proyectos:** Filtrado dinámico por categoría (*Todos*, *Frontend & UI*, *Multiplataforma*) con transiciones suaves sin frameworks externos.
- **Modal Accesible (WAI-ARIA):** Diálogo interactivo con detalles técnicos, capturas vectoriales y enlaces directos a GitHub, con soporte para teclado (`Esc`, foco atrapado).
- **Copia de Email al Portapapeles:** Botón directo con retroalimentación visual inmediata mediante *Toast Notification* flotante.

---

## Rendimiento & SEO Técnico (WPO)

La web ha sido programada con **cero dependencias externas pesadas**:
- **Cero frameworks CSS/JS:** Ni Bootstrap, ni Tailwind CDN, ni bibliotecas de animaciones innecesarias. Carga inicial ultrarrápida (&lt; 200 ms).
- **Metadatos Open Graph & Twitter Cards:** Previsualizaciones atractivas y profesionales al compartir el enlace en LinkedIn, WhatsApp, Telegram o Slack.
- **Assets Vectoriales (SVG):** Todas las ilustraciones y mockups de los proyectos están construidos en formato SVG escalable, garantizando resolución infinita sin penalizar el peso en kilobytes.
- **Favicon SVG:** Isotipo geométrico con las iniciales `MD` y punto de acento esmeralda.

---

## Estructura del Proyecto

```plaintext
PortfolioWeb/
├── assets/
│   ├── cv/                          # Directorio para el currículum PDF
│   │   ├── CV_Manuel_Pozo_DAM.pdf   # Archivo PDF descargable
│   │   └── README.md                # Indicaciones para el archivo
│   └── img/                         # Recursos gráficos vectoriales
│       ├── favicon.svg              # Isotipo / Icono de pestaña
│       ├── og-preview.svg           # Tarjeta para compartir en redes sociales
│       ├── proyecto-questfit.svg    # Mockup vectorial de QuestFit (Fitness RPG)
│       ├── proyecto-todolist.svg    # Mockup vectorial de A Punto ToDoList (Flutter)
│       ├── proyecto-patinetes.svg   # Mockup vectorial de EcoScoot (JavaFX)
│       └── proyecto-mercatoweb.svg  # Mockup vectorial de MercatoWeb
├── css/
│   └── styles.css                   # Sistema de diseño, tokens y media queries
├── js/
│   └── main.js                      # Control del menú, modal, filtros y clipboard
├── .gitignore                       # Exclusión de temporales e IDEs
├── index.html                       # Documento HTML5 semántico
└── README.md                        # Documentación técnica del proyecto
```

---

## Despliegue en GitHub Pages (mdpozo.github.io)

Para que la web esté activa públicamente en tu dominio gratuito de GitHub Pages:

### 1. Inicialización local y commit (ya configurados)
```bash
git init
git branch -M main
git add .
git commit -m "feat: portfolio personal con diseno editorial tech, seo y proyectos"
```

### 2. Conectar con el repositorio remoto
```bash
git remote add origin https://github.com/mdpozo/mdpozo.github.io.git
```

### 3. Crear el repositorio en GitHub
1. Entra en tu cuenta de GitHub y crea un nuevo repositorio llamado exactamente:  
   **`mdpozo.github.io`**  
   *(Marca la opción **Public** y no agregues README ni .gitignore al crearlo).*

### 4. Subir los archivos a la rama main
```bash
git push -u origin main
```

### 5. Verificación de GitHub Pages
GitHub detecta automáticamente los repositorios nombrados `<usuario>.github.io` y activa el despliegue en la raíz de la rama `main`. En menos de 2 minutos tu web estará disponible en:  
**`https://mdpozo.github.io/`**

---

<div align="center">
  <sub>Diseñado y programado por <b>Manuel Pozo (devManuD)</b> · Cáceres, España.</sub>
</div>
