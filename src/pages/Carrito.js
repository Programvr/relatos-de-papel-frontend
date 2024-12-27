import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import './Carrito.css';

function Carrito() {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarrito();
  const navigate = useNavigate();

  const total = carrito.reduce((acc, libro) => acc + libro.precio * libro.cantidad, 0);

  return (
    <div className="carrito">
      <h1>Carrito de Compras</h1>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {carrito.map((libro) => (
            <div key={libro.id} className="carrito__libro">
              <p>{libro.titulo}</p>
              <p>Precio: ${libro.precio}</p>
              <p>Cantidad: {libro.cantidad}</p>
              <p>Total: ${libro.precio * libro.cantidad}</p>
              <button onClick={() => eliminarDelCarrito(libro.id)}>Eliminar</button>
            </div>
          ))}
          <div className="carrito__total">
            <p>Total: ${total}</p>
          </div>
          <button onClick={vaciarCarrito} className="carrito__vaciar">Vaciar Carrito</button>
          <button onClick={() => navigate('/checkout')} className="carrito__checkout">Ir al Checkout</button>
          <button onClick={() => navigate('/pagina-principal')} className="carrito__volver">Seguir Agregando Libros</button>
        </div>
      )}
    </div>
  );
}

export default Carrito;