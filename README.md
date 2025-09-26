# PokéApp - Sistema de Gestión Pokémon

Una aplicación web completa desarrollada en Vue.js que integra con PokeAPI para proporcionar una experiencia completa de exploración Pokémon.

## 🚀 Características

- **Vue Router**: Navegación con 6+ páginas
- **Sistema de Autenticación**: Registro e inicio de sesión completo
- **Explorador Pokémon**: Integración completa con PokeAPI
- **Página de Contacto**: Con mapa interactivo usando Leaflet
- **Sistema de Correos**: Envío de emails a usuarios registrados
- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Interfaz Moderna**: Usando TailwindCSS con tema personalizado

## 📋 Páginas Incluidas

1. **Inicio** (`/`) - Página principal con información del proyecto
2. **Registro** (`/register`) - Formulario de registro de usuarios
3. **Inicio de Sesión** (`/login`) - Formulario de autenticación
4. **Explorador Pokémon** (`/pokemon`) - Lista y búsqueda de Pokémon
5. **Detalle Pokémon** (`/pokemon/:id`) - Información detallada de cada Pokémon
6. **Contacto** (`/contact`) - Formulario de contacto con mapa
7. **Envío de Correos** (`/email`) - Sistema de mensajería (requiere autenticación)

## 🛠️ Tecnologías Utilizadas

- **Vue.js 3** - Framework principal
- **Vue Router 4** - Enrutamiento
- **TypeScript** - Tipado estático
- **TailwindCSS** - Estilos y diseño
- **Axios** - Cliente HTTP para API
- **Leaflet** - Mapas interactivos
- **Lucide Vue** - Iconografía
- **Vite** - Herramienta de construcción

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
\`\`\`bash
git clone <repository-url>
cd pokemon-vue-app
\`\`\`

2. **Instalar dependencias**
\`\`\`bash
npm install
\`\`\`

3. **Ejecutar en modo desarrollo**
\`\`\`bash
npm run dev
\`\`\`

4. **Construir para producción**
\`\`\`bash
npm run build
\`\`\`

5. **Vista previa de producción**
\`\`\`bash
npm run preview
\`\`\`

## 🎨 Características de Diseño

- **Paleta de Colores**: Verde esmeralda como color principal
- **Tipografía**: DM Sans para una apariencia moderna
- **Componentes**: Cards, botones y formularios consistentes
- **Responsive**: Diseño adaptable desde móvil hasta desktop
- **Animaciones**: Transiciones suaves y efectos hover

## 🔧 Funcionalidades Técnicas

### Sistema de Autenticación
- Registro de usuarios con validación
- Inicio de sesión persistente
- Protección de rutas sensibles
- Gestión de estado de usuario

### Integración PokeAPI
- Listado paginado de Pokémon
- Búsqueda por nombre o ID
- Información detallada con estadísticas
- Cache de datos para mejor rendimiento

### Sistema de Correos
- Envío a todos los usuarios o específicos
- Plantillas predefinidas
- Programación de envíos
- Vista previa de mensajes

### Mapa Interactivo
- Integración con OpenStreetMap
- Marcadores personalizados
- Información de ubicación
- Responsive en todos los dispositivos

## 📱 Compatibilidad

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [PokeAPI](https://pokeapi.co/) por proporcionar los datos de Pokémon
- [OpenStreetMap](https://www.openstreetmap.org/) por los mapas
- [Lucide](https://lucide.dev/) por los iconos
- [TailwindCSS](https://tailwindcss.com/) por el framework de estilos

---

Desarrollado con ❤️ usando Vue.js y PokeAPI
