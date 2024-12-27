import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Acceso.css';

function Acceso() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/pagina-principal');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="acceso">
      <h1>Bienvenido a Relatos de Papel</h1>
      <p>Serás redirigido a la página principal en 5 segundos...</p>
    </div>
  );
}

export default Acceso;