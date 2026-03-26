# 🖼️ Gifs App

Aplicación en **React 19.1.0** que utiliza **Axios 1.7.9** y la api de **Giphy** para buscar y visualizar GIFs animados de manera rápida y eficiente.

Los usuarios pueden realizar búsquedas, ver los resultados en una cuadrícula moderna y acceder a un historial de sus búsquedas recientes.

La aplicación implementa un sistema de caché mediante `useRef` para optimizar el rendimiento y evitar llamadas innecesarias a la API cuando se repiten búsquedas.

## 📸 Demo

🔗 **Visita la demo en línea:** [Gifs App en Netlify](https://famous-buttercream-ab2746.netlify.app/)

- **Buscador Principal**
  ![Gifs App Screenshot](https://raw.githubusercontent.com/david99cartagena/gifs-app-react/refs/heads/main/media/Screenshot-1.png)
- **Resultados de Búsqueda**
  ![Gifs App Screenshot](https://raw.githubusercontent.com/david99cartagena/gifs-app-react/refs/heads/main/media/Screenshot-2.png)
- **Historial de Búsquedas**
  ![Gifs App Screenshot](https://raw.githubusercontent.com/david99cartagena/gifs-app-react/refs/heads/main/media/Screenshot-3.png)
- **Caché de Búsquedas**  
  Se usa `useRef` como caché para evitar peticiones repetidas a la API en búsquedas ya realizadas.
  ![Gifs App Screenshot](https://raw.githubusercontent.com/david99cartagena/gifs-app-react/refs/heads/main/media/Screenshot-4.png)
- **Cobertura de tests**  
  Visualización de cobertura generada por **Vitest** en el proyecto React.  
  ![Cobertura de tests](https://raw.githubusercontent.com/david99cartagena/gifs-app-react/refs/heads/main/media/Screenshot-5.png)

## 🚀 Tecnologías Utilizadas

- **React** - v19.1.0
- **Vite** - v6.3.5
- **Axios** - v1.7.9
- **TypeScript** - v5.8.3
- **Vitest - (Testing)** - v3.2.4
- **HTML5 / CSS3**

## 📁 Estructura del Proyecto

```
src/
├── gifs/
│   ├── actions/
│   │   └── get-gifs-by-query.action.ts   # Acción para llamar a la API
│   ├── api/
│   │   └── gifs.api.ts                   # Configuración de Axios
│   ├── components/
│   │   ├── GifList.tsx                   # Lista de GIFs
│   │   └── PreviousSearches.tsx          # Historial de búsquedas
│   ├── hooks/
│   │   └── useGifs.tsx                   # Hook personalizado para lógica
│   └── interfaces/
│       └── gif.interface.ts              # Definición de tipos
├── shared/
│   └── components/
│       ├── CustomHeader.tsx              # Cabecera de la app
│       └── SearchBar.tsx                 # Barra de búsqueda
├── GifsApp.tsx                           # Componente principal
└── main.tsx                              # Punto de entrada
```

## 🔑 Funcionalidades

✅ Búsqueda interactiva de GIFs por término  
✅ Visualización de resultados en grid responsivo  
✅ Historial de búsquedas recientes (últimas 8)  
✅ Sistema de caché local `useRef` para búsquedas frecuentes  
✅ Tipado estricto con **TypeScript**  
✅ Testing unitario con **Vitest**  
✅ UI limpia y moderna con **CSS Vanilla**

## 📦 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/david99cartagena/gifs-app-react.git
```

```bash
cd 03-gifs-app
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor local:

```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:5173/`

## ⚙️ Configuración de API

Asegúrate de tener una clave de **Giphy Developers API**.

- Obtén tu clave desde el [Dashboard de Giphy Developers](https://developers.giphy.com/dashboard/)

- Crea un archivo `.env` en la raíz del proyecto y agrega tu **API Key**.

```env
VITE_GIPHY_API_KEY=TU_API_KEY_AQUI
```

## 🧪 Pruebas Realizadas

Se han implementado pruebas unitarias e integración para asegurar la robustez de la aplicación utilizando **Vitest** y **React Testing Library**.

### 🔍 Resumen de Cobertura

- **Custom Hooks (`useGifs`)**:
  - Verificación de estado inicial.
  - Funcionamiento de la búsqueda y actualización de GIFs.
  - Límite de historial de búsquedas (máximo 8 términos).
  - Funcionamiento de la caché local mediante `useRef`.
- **Componentes (`Shared` & `Gifs`)**:
  - Renderizado correcto de `CustomHeader`, `SearchBar` y `GifList`.
  - Interacción del usuario en la barra de búsqueda.
  - Snapshot testing para asegurar la integridad de la UI en `GifsApp`.
- **Acciones y API**:
  - Pruebas de integración para las llamadas con **Axios**.

### 🛠️ Ejecución de Pruebas

Para correr la suite de pruebas, utiliza cualquiera de estos comandos:

```bash
# Modo interactivo (Watch mode)
npm run test

# Ejecutar todas las pruebas una vez
npm run test:only

# Ver los tests de manera visual (Vitest UI)
npm run test:ui

# Ver la cobertura del proyecto
npm run coverage
```

> [!TIP]
> **Vitest UI:** Al ejecutar `npm run test:ui`, se abrirá una interfaz en el navegador que permite visualizar el progreso de las pruebas, los tiempos de ejecución y los archivos de manera interactiva.
>
> **Cobertura:** Al ejecutar `npm run coverage`, se generará una carpeta `coverage/` en la raíz del proyecto. Puedes abrir el archivo `coverage/index.html` en tu navegador para ver un reporte detallado de qué líneas de código están cubiertas por los tests.
