import axios from 'axios';
import { Platform } from 'react-native';
// import { useAuthStore } from '../store/authStore'; // Lo activaremos cuando creemos el store

// URL del backend. Se define con EXPO_PUBLIC_API_URL en el archivo .env.local (ver .env.example).
// Si no se define: el emulador de Android llega a tu PC por 10.0.2.2; iOS y web, por localhost.
// Un celular fisico en la misma red Wi-Fi necesita la IP de tu PC (ej. http://192.168.1.X:8081/api/).
const hostPorDefecto = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
const baseURL = process.env.EXPO_PUBLIC_API_URL || `http://${hostPorDefecto}:8081/api/`;

const apiClient = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para inyectar el Token en cada petición
apiClient.interceptors.request.use(
  async (config) => {
    // const token = useAuthStore.getState().token;
    const token = null; // Reemplazar temporalmente
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;