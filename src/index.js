import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa los estilos globales
import App from './App'; // Importa el componente principal de la aplicación
import reportWebVitals from './reportWebVitals'; // Importa la configuración para medir el rendimiento
import { CarritoProvider } from './context/CarritoContext'; // Importa el proveedor del contexto del carrito
import './styles/global.css'; // Importa estilos globales adicionales
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos de react-toastify
import { ToastContainer } from 'react-toastify'; // Importa el contenedor de notificaciones de react-toastify

const root = ReactDOM.createRoot(document.getElementById('root')); // Crea el punto de entrada de la aplicación
root.render(
  <React.StrictMode>
    <CarritoProvider>
      <App />
      <ToastContainer /> {/* Contenedor para mostrar notificaciones */}
    </CarritoProvider>
  </React.StrictMode>
);

// Configuración para medir el rendimiento de la aplicación
reportWebVitals();