import React from 'react';
import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css';

function Header() {
  const { carrito } = useCarrito();
  const totalCantidad = carrito.reduce((acc, libro) => acc + libro.cantidad, 0);

  return (
    <header className="header">
      <h1>Relatos de Papel</h1>
      <nav>
        <ul>
          <li>
            <Link to="/pagina-principal">Inicio</Link>
          </li>
          <li>
            <Link to="/carrito" className="header__carrito">
              <FaShoppingCart />
              {totalCantidad > 0 && <span className="header__carrito-cantidad">{totalCantidad}</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;