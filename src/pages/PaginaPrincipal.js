import React, { useState } from 'react';
import libros from '../data';
import ListaLibros from '../components/ListaLibros';
import Banner from '../components/Banner';
import './PaginaPrincipal.css';

function PaginaPrincipal() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLibros = libros.filter((libro) =>
    libro.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pagina-principal">
      <Banner />
      <h1>Libros disponibles</h1>
      <input
        type="text"
        placeholder="Buscar por título"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pagina-principal__busqueda"
      />
      {filteredLibros.length > 0 ? (
        <ListaLibros libros={filteredLibros} />
      ) : (
        <p className="pagina-principal__mensaje">No se encontraron libros</p>
      )}
    </div>
  );
}

export default PaginaPrincipal;