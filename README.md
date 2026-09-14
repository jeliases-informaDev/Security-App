# 📱 Security - Mobile App

Este repositorio contiene la aplicación móvil del ecosistema security, disponible para iOS y Android. Está construida con **React Native, Expo y TypeScript**, compartiendo la misma lógica de negocio (Features) con nuestro ecosistema web para un desarrollo paralelo ágil.

Esta aplicación se conecta al backend central (Kotlin/Spring Boot) para consumir las reglas de negocio, validaciones de seguridad y gestión de usuarios.

## 🏗️ Arquitectura del Proyecto

El proyecto sigue una arquitectura modular y escalable (Feature-Sliced Design adaptado), lo que permite que cada dominio de la aplicación sea independiente:

```text
security-app/
├── assets/                 # Imágenes, íconos y fuentes de la app
├── src/
│   ├── api/                # Cliente Axios y configuración de peticiones (apiClient.ts)
│   ├── components/         # Componentes visuales reutilizables (Botones, Inputs, Modales)
│   ├── features/           # Pantallas y lógica agrupadas por dominio de negocio
│   │   ├── auth/           
│   │   ├── cursos/         
│   │   ├── debida_diligencia/
│   │   ├── denuncias/      
│   │   ├── listas_negativas/
│   │   ├── matrices_riesgo/
│   │   ├── operaciones/    
│   │   └── scoring/        
│   ├── navigation/         # Configuración de rutas y menús (React Navigation)
│   ├── store/              # Manejadores de estado global
│   ├── theme/              # Paleta de colores, tipografías y estilos globales
│   ├── utils/              # Funciones auxiliares y formateadores
│   └── App.tsx             # Componente raíz de la aplicación
├── app.json                # Configuración nativa de Expo (Nombre, permisos, ícono)
├── index.ts                # Punto de entrada registrado de Expo
└── package.json            # Dependencias de Node.js

```

🛑 ALTO: Requisitos Previos (Instalaciones necesarias)
Para ejecutar esta aplicación móvil en tu computadora y celular, necesitas:

Node.js (v18 o superior): Descárgalo desde nodejs.org. Esto incluye el gestor de paquetes npm.

Visual Studio Code: El editor recomendado para trabajar.

Expo Go (En tu celular): Descarga la aplicación "Expo Go" desde la Play Store (Android) o App Store (iOS). Te servirá para probar la app en vivo desde tu propio teléfono sin necesidad de instalar emuladores pesados en tu PC.

🛠️ Paso a paso para levantar el proyecto localmente

Paso 1:

Clonar el proyecto
Abre tu terminal y descarga el código:

Bash
git clone <URL_DEL_REPO_AQUI>
cd security-app


Paso 2: 

Instalar las dependencias
Ejecuta el siguiente comando para descargar todas las librerías necesarias de React Native y Expo:

Bash
npm install

Paso 3: 

Configurar el enlace con el Backend (Opcional por ahora)
Crea un archivo llamado .env en la raíz del proyecto. Aquí colocaremos la IP de tu computadora para que el celular pueda conectarse a tu base de datos y backend local:

Fragmento de código
EXPO_PUBLIC_API_URL=http://<TU_DIRECCION_IP_LOCAL>:8081
(Nota importante: En Expo, para probar en un celular físico, localhost no funciona. Debes usar la dirección IP IPv4 de tu PC en la red Wi-Fi).

Paso 4: 

Levantar el servidor de Expo
Arranca el proyecto con este comando:

Bash
npx expo start
✅ ¿Cómo probar la aplicación?
Al ejecutar el comando, aparecerá un Código QR gigante en tu terminal.

Abre la app Expo Go en tu celular (o la cámara si usas iPhone).

Escanea el código QR.

La aplicación se construirá y aparecerá en tu pantalla. ¡Cualquier cambio que guardes en el código se reflejará instantáneamente en tu teléfono!

(Alternativa: Si presionas la tecla a en la terminal de tu PC, Expo intentará abrir la app en un emulador de Android Studio si lo tienes instalado y corriendo).

🤝 Flujo de Trabajo para el Equipo (Git Flow)
Al igual que en los demás repositorios, cuidaremos la rama principal:

Nunca trabajes directamente en la rama main.

Actualiza tu entorno local: git pull origin main.

Crea una rama para la feature que vas a programar: git checkout -b feature/pantalla-login.

Haz tus cambios y súbelos:

Bash
git add .
git commit -m "feat: agrega estructura visual del login"
git push origin feature/pantalla-login
