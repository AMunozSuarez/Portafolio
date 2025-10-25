# Portafolio Personal - Desarrollador Full Stack

Un portafolio moderno y responsivo desarrollado con React, Vite y Tailwind CSS para mostrar proyectos, experiencia y habilidades como desarrollador Full Stack.

## 🎯 Características

- ✨ Diseño moderno y minimalista
- 📱 Completamente responsivo
- 🎨 Animaciones suaves con Framer Motion
- 🎯 Navegación por scroll suave
- 🎪 Componentes modulares y reutilizables
- 🚀 Optimizado para rendimiento
- 🔍 SEO optimizado

## 🛠 Stack Tecnológico

- **Frontend:** React 18, Vite
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Navegación:** React Scroll
- **Iconos:** React Icons, Simple Icons
- **Lenguaje:** JavaScript (ES6+)

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx      # Barra de navegación fija
│   ├── Hero.jsx        # Sección de presentación
│   ├── Projects.jsx    # Proyectos destacados
│   ├── Experience.jsx  # Experiencia laboral
│   ├── Skills.jsx      # Habilidades técnicas
│   └── Contact.jsx     # Formulario de contacto
├── App.jsx             # Componente principal
├── main.jsx           # Punto de entrada
└── index.css          # Estilos globales y Tailwind
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ (recomendado 20.19+)
- npm o yarn

### Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

3. **Construir para producción:**
   ```bash
   npm run build
   ```

## 📝 Personalización

### 1. Información Personal
Edita los siguientes archivos para personalizar tu información:

**`src/components/Hero.jsx`**
- Actualiza el texto de presentación
- Cambia enlaces de contacto

**`src/components/Contact.jsx`**
- Actualiza información de contacto
- Configura enlaces a redes sociales

### 2. Proyectos
En `src/components/Projects.jsx`:
- Modifica el array `projects` con tus proyectos
- Actualiza tecnologías, descripciones y enlaces

### 3. Experiencia
En `src/components/Experience.jsx`:
- Actualiza el array `experiences` con tu experiencia
- Modifica información de educación

### 4. Habilidades
En `src/components/Skills.jsx`:
- Personaliza las categorías de habilidades
- Ajusta niveles de competencia (0-100%)

## 🎨 Paleta de Colores

```css
/* Colores principales */
Primary: #0ea5e9 (azul claro)
Primary Dark: #0284c7

/* Neutros */
Neutral 50: #fafafa (fondo claro)
Neutral 900: #171717 (texto oscuro)
```

## 📱 Secciones Incluidas

1. **Navbar:** Navegación fija con scroll suave
2. **Hero:** Presentación personal y llamada a la acción
3. **Proyectos:** Tres proyectos destacados con detalles técnicos
4. **Experiencia:** Timeline de experiencia laboral y educación
5. **Habilidades:** Categorías de tecnologías con barras de progreso
6. **Contacto:** Formulario funcional e información de contacto

## 🔧 Configuración del Formulario de Contacto

El formulario está preparado para integrarse con servicios como:
- EmailJS
- Netlify Forms
- Formspree
- Backend personalizado

## 📈 Optimizaciones de Rendimiento

- ⚡ Lazy loading de componentes
- 🖼 Optimización de imágenes
- 📦 Code splitting automático con Vite
- 🗜 Minificación de CSS y JS
- 🚀 Precarga de fuentes críticas

## 📋 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Previsualizar build

---

**¡Construido con ❤️ y mucho ☕ en Chile!**

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
