import React from 'react';
import { useCarrito } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Checkout.css';

function Checkout() {
  const { carrito, vaciarCarrito } = useCarrito();
  const navigate = useNavigate();

  const total = carrito.reduce((acc, libro) => acc + libro.precio * libro.cantidad, 0);

  const handlePago = () => {
    toast.success('Pedido realizado con éxito');
    vaciarCarrito();
    navigate('/pagina-principal');
  };

  return (
    <div className="checkout">
      <h1>Resumen de Compra</h1>
      {carrito.length === 0 ? (
        <p>No hay libros en el carrito</p>
      ) : (
        <div>
          {carrito.map((libro) => (
            <div key={libro.id} className="checkout__libro">
              <p>{libro.titulo}</p>
              <p>Precio: ${libro.precio}</p>
              <p>Cantidad: {libro.cantidad}</p>
              <p>Total: ${libro.precio * libro.cantidad}</p>
            </div>
          ))}
          <div className="checkout__total">
            <p>Total: ${total}</p>
          </div>
          <button onClick={handlePago} className="checkout__pago">Proceder al Pago</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;