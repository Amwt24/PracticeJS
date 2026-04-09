# Proyecto: Práctica Web - Rick and Morty App

Este proyecto es una aplicación web interactiva desarrollada con **JavaScript Vanilla**, HTML5 y CSS3. La aplicación permite a los usuarios iniciar sesión, explorar personajes de la serie "Rick and Morty" a través de una API pública, realizar búsquedas y ver detalles específicos de cada personaje en una interfaz totalmente responsiva.

## Características

- **Login de Usuario:** Validación simple en el cliente.
- **Dashboard Responsivo:** 
  - 5 columnas en pantallas grandes.
  - 3 columnas en pantallas medianas.
  - 1 columna en dispositivos móviles.
- **Integración con API:** Consumo de datos e imágenes desde [The Rick and Morty API](https://rickandmortyapi.com/).
- **Búsqueda Dinámica:** Filtra personajes por nombre mediante la barra de búsqueda.
- **Vista de Detalles:** Página dedicada para ver información extendida del personaje seleccionado.
- **Navegación Fluida:** Botones de retroceso y redirección lógica.

## Tecnologías Utilizadas

- **HTML5:** Estructura semántica.
- **CSS3:** Diseño responsivo con CSS Grid y Flexbox.
- **JavaScript (ES6+):** Lógica de negocio, manejo del DOM y peticiones asíncronas (`fetch`/`async-await`).
- **Git:** Control de versiones.

## Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/progra-web-practicas.git
   ```
2. **Navegar al directorio:**
   ```bash
   cd "Progra web practicas"
   ```
3. **Ejecutar la aplicación:**
   Simplemente abre el archivo `index.html` en tu navegador preferido o usa una extensión como "Live Server" en VS Code.

## Credenciales de Acceso

- **Usuario:** `admin`
- **Contraseña:** `password`

## Estructura del Proyecto

```text
├── index.html       # Página de Login
├── login.js         # Lógica de validación de acceso
├── dashboard.html   # Galería de personajes
├── dashboard.js     # Consumo de API y renderizado de cartas
├── detail.html      # Detalle de personaje
├── detail.js        # Lógica de carga de detalles individuales
├── style.css        # Estilos globales y responsividad
└── README.md        # Documentación del proyecto
```
