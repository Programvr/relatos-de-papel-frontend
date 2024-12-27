import React from 'react';
import Libro from './Libro';
import './ListaLibros.css';

const ListaLibros = ({ libros }) => {
  return (
    <div className="lista-libros">
      {libros.map((libro) => (
        <Libro key={libro.id} libro={libro} />
      ))}
    </div>
  );
};

export default ListaLibros;