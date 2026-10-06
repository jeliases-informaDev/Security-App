# 📱 Security - App móvil

App móvil del ecosistema Security. **Expo (SDK 57), React Native y TypeScript.** Consume la API del backend (Kotlin).

> Esta versión de Expo cambió respecto a versiones anteriores: ante cualquier duda consulta la documentación de https://docs.expo.dev/versions/v57.0.0/

```text
src/
├── api/          # Cliente HTTP (apiClient.ts)
├── features/     # Un módulo por dominio (auth, cursos, denuncias, listas_negativas, matrices_riesgo, scoring…)
├── navigation/   # Navegación
├── components/   # Componentes compartidos
├── store/        # Estado global (Zustand)
├── theme/ utils/
└── App.tsx
```

---

## 🛠️ Levantarla

**Necesitas:** Node.js 20 o superior (https://nodejs.org). Para ver la app: la app **Expo Go** en tu celular, o un emulador (Android Studio / Xcode), o el navegador.

```bash
npm install
npx expo start
```

En la terminal elige: `a` (emulador Android), `i` (simulador iOS), `w` (navegador) o escanea el QR con Expo Go.

### Conexión con el backend

La app necesita el backend corriendo en el puerto `8081`. Levántalo desde el repositorio **Security-Backend** (`docker compose up -d --build`; ahí está la guía) o apunta a un backend que ya tenga tu equipo.

| Dónde corre la app | Cómo llega al backend en tu PC |
|---|---|
| Emulador de Android | `http://10.0.2.2:8081/api/` (es el valor por defecto) |
| Simulador de iOS / navegador | `http://localhost:8081/api/` (por defecto) |
| **Celular físico** (Expo Go) | `http://<IP de tu PC>:8081/api/`: tu PC y el celular deben estar en la misma Wi-Fi |

Para el celular físico (o cualquier otra URL):

```bash
copy .env.example .env.local        # Mac/Linux: cp
# edita .env.local y descomenta EXPO_PUBLIC_API_URL con la IP de tu PC (ipconfig)
npx expo start -c
```

> Con el celular físico puede que Windows te pregunte por el firewall al abrir el puerto 8081: permítelo para redes privadas.
> El backend solo permite CORS desde `http://localhost:3000` (esto afecta únicamente a la versión web de la app).

## 🤝 Flujo de trabajo del equipo (Git Flow)

1. Nunca programes ni hagas commits en `main`.
2. Antes de empezar: `git pull origin main`.
3. Crea una rama por tarea: `git checkout -b feature/pantalla-login`.
4. Sube tus cambios: `git add . && git commit -m "feat: ..." && git push origin feature/pantalla-login`.
5. Abre un Pull Request en GitHub para revisión.
