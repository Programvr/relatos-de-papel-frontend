import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import libros from '../data';
import { useCarrito } from '../context/CarritoContext';
import { toast } from 'react-toastify';
import './DetallesLibro.css';

function DetallesLibro() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCarrito();
  const libro = libros.find((libro) => libro.id === parseInt(id));
  const [cantidad, setCantidad] = useState(1);

  if (!libro) {
    return <p>Libro no encontrado</p>;
  }

  const handleCantidadChange = (e) => {
    const value = parseInt(e.target.value);
    setCantidad(isNaN(value) ? 1 : value);
  };

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(libro, cantidad);
    toast.success(`${cantidad} ${libro.titulo} agregado(s) al carrito`);
  };

  return (
    <div className="detalles-libro">
      <img src={libro.imagen} alt={libro.titulo} className="detalles-libro__imagen" />
      <div className="detalles-libro__info">
        <h1>{libro.titulo}</h1>
        <p>{libro.descripcion}</p>
        <p>Precio: ${libro.precio}</p>
        <label>
          Cantidad:
          <input
            type="number"
            value={cantidad}
            onChange={handleCantidadChange}
            min="1"
            className="detalles-libro__cantidad"
          />
        </label>
        <button onClick={handleAgregarAlCarrito}>Agregar al Carrito</button>
        <button onClick={() => navigate('/pagina-principal')} className="detalles-libro__volver">Volver a la Página Principal</button>
      </div>
    </div>
  );
}

export default DetallesLibro;