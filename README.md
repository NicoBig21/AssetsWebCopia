# Proyecto React: Tareas y Commits

---

## Tarea 1: Configurar Main

### Subtarea 1.1: JournalApp y Styles.css 
- **Descripción:** Configuración del componente principal `JournalApp` y enlace al archivo `styles.css` para aplicar estilos globales.
- **Commit:** `feat: configure JournalApp with styles.css`

### Subtarea 1.2: Crear el JournalApp
- **Descripción:** Configuración del componente `JournalApp` para manejar las rutas del proyecto y actuar como el punto de entrada de la aplicación.
- **Commit:** `feat: setup JournalApp to handle project routes`

### Subtarea 1.3: Browser Router
- **Descripción:** Instalación y configuración de las dependencias de `react-router-dom`, específicamente `BrowserRouter` para manejar el enrutado del proyecto.
- **Commit:** `chore: install BrowserRouter dependencies`

---

## Tarea 2: Configurar Router

### Subtarea 2.1: Crear AppRouter
- **Descripción:** Configuración del `AppRouter` para manejar el enrutado de `Login` y `JournalRoutes`, estableciendo las bases para la navegación en la aplicación.
- **Commit:** `feat: configure AppRouter to handle Login and JournalRoutes`

### Subtarea 2.2: Crear PrivateRoutes
- **Descripción:** Configuración del `AppRouter` para proteger las rutas de `JournalRoutes`, asegurando que solo los usuarios autenticados puedan acceder a ellas.
- **Commit:** `feat: setup PrivateRoutes for JournalRoutes`

---

## Tarea 3: Crear Auth

### Subtarea 3.1: Crear Carpetas 
- **Descripción:** Creación de las carpetas necesarias para organizar el módulo de autenticación dentro de la estructura del proyecto.
- **Commit:** `chore: create folder structure for Auth module`

### Subtarea 3.2: Crear AuthRoutes 
- **Descripción:** Configuración de `AuthRoutes` para manejar las rutas relacionadas con la autenticación, como el login.
- **Commit:** `feat: setup AuthRoutes for login handling`

### Subtarea 3.3: Crear IniciarSesion
- **Descripción:** Desarrollo del componente `IniciarSesion` para gestionar la interfaz de inicio de sesión de la aplicación.
- **Commit:** `feat: create IniciarSesion component for login`

### Subtarea 3.4: Configurar Context
- **Descripción:** Configuración de `AuthContext`, `AuthProvider`, `authReducer` e `index` para gestionar el estado de autenticación en toda la aplicación.
- **Commit:** `feat: setup AuthContext and AuthProvider with authReducer`

### Subtarea 3.5: Configurar Types
- **Descripción:** Definición y configuración de los `types` para las acciones de autenticación, proporcionando constantes que representen los diferentes tipos de acciones.
- **Commit:** `chore: define types for auth actions`

---

## Tarea 4: Crear Home

### Subtarea 4.1: Crear Carpetas 
- **Descripción:** Creación de la estructura de carpetas para organizar los componentes relacionados con la página principal (`Home`).
- **Commit:** `chore: create folder structure for Home components`

### Subtarea 4.2: Crear JournalRoutes
- **Descripción:** Configuración de `JournalRoutes` para manejar todas las rutas de la sección principal del diario, integrando los componentes necesarios.
- **Commit:** `feat: setup JournalRoutes with all main routes`

### Subtarea 4.3: Crear HomeLayout
- **Descripción:** Desarrollo del componente `HomeLayout` para definir la estructura básica de la página principal, incluyendo la organización de elementos como la `Sidebar` y el `Navbar`.
- **Commit:** `feat: create HomeLayout component`

### Subtarea 4.4: Crear Sidebar
- **Descripción:** Desarrollo del componente `Sidebar` para proporcionar una navegación lateral en la aplicación, permitiendo acceso rápido a las diferentes secciones.
- **Commit:** `feat: create Sidebar component for navigation`

### Subtarea 4.5: Crear Navbar
- **Descripción:** Desarrollo del componente `Navbar` para la barra de navegación superior, con enlaces a las principales secciones de la aplicación.
- **Commit:** `feat: create Navbar component`

### Subtarea 4.6: Crear Pages
- **Descripción:** Configuración de las diferentes páginas de la aplicación, asegurando que cada `Page` esté correctamente ubicada y vinculada en la vista principal.
- **Commit:** `feat: setup pages for proper view alignment`


## Conclusión

Este README proporciona una estructura clara para seguir el progreso del proyecto, desde la configuración inicial hasta las pruebas finales. Cada tarea y subtarea está claramente definida, junto con sus respectivos commits, lo que facilita la revisión del historial de desarrollo.

# Estructura

```
│
├── src/ # Código fuente de la aplicación
│ ├── config/ # Configuración de la aplicación 
│ │ ├── theme/ # Tema de la aplicación
│ │ ├── router/ # Configuración de las rutas
│ │ | ├── AppRouter.tsx
│ │ | ├── PrivateRoutes.tsx
│ │ | ├── JournalRoutes.tsx
│ │ | ├── RouteWrapper.tsx
│ │ ├── layout/ # Layout de la aplicación
│ ├── services/ # Servicios para interactuar con APIs 
│ ├── app/ # Componentes principales de la aplicación 
│ │ ├── common/ # Recursos comunes
│ │ | ├── component/ # Componentes comunes
│ │ | | ├── table/ # Tablas comunes
│ │ | | ├── button/ # Botones comunes
│ │ | | ├── ...
│ │ ├── modules/ # Módulos de la aplicación
│ │ | ├── auth
│ │ | | ├── ...
│ │ | ├── home
│ │ | | ├── ...
│ │ | ├── order
│ │ | | ├── ...
│ │ | ├── claim
│ │ | | ├── ...
│ │ | ├── company
│ │ | | ├── Company.view.tsx
│ │ | | ├── component/ # Componentes de la vista
│ │ | ├── treatment
│ │ | | ├── ...
│ │ | ├── professional
│ │ | | ├── ...
│ │ | ├── patient
│ │ | | ├── ...
│ │ | ├── liquidation
│ │ | | ├── ...
│ │ | ├── summary
│ │ | | ├── ...
│ │ | ├── email
│ │ | | ├── ...
│ │ | ├── chat
│ │ | | ├── ...
│ ...
└── package.json # Dependencias y scripts del proyecto
```