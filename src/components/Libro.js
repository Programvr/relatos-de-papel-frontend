import React from 'react';
import { Link } from 'react-router-dom';
import './Libro.css';

const Libro = ({ libro }) => {
  return (
    <div className="libro">
      <img src={libro.imagen} alt={libro.titulo} className="libro__imagen" />
      <Link to={`/libro/${libro.id}`} className="libro__titulo">
        {libro.titulo}
      </Link>
      <p className="libro__precio">Precio: ${libro.precio}</p>
    </div>
  );
};

export default Libro;