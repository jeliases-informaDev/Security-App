import axios from 'axios';
// import { useAuthStore } from '../store/authStore'; // Lo activaremos cuando creemos el store

const apiClient = axios.create({
  // Para emuladores Android, usa 10.0.2.2 en lugar de localhost
  // Para dispositivos físicos en la misma red Wi-Fi, usa tu IP local (ej. 192.168.1.X)
  baseURL: 'http://10.0.2.2:8081/api/',
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