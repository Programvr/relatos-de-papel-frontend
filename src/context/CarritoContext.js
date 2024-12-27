import React, { createContext, useState, useContext } from 'react';

// Crea el contexto del carrito
const CarritoContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCarrito = () => {
  return useContext(CarritoContext);
};

// Proveedor del contexto del carrito
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un libro al carrito
  const agregarAlCarrito = (libro, cantidad) => {
    setCarrito((prevCarrito) => {
      const libroExistente = prevCarrito.find((item) => item.id === libro.id);
      if (libroExistente) {
        return prevCarrito.map((item) =>
          item.id === libro.id ? { ...item, cantidad: item.cantidad + cantidad } : item
        );
      } else {
        return [...prevCarrito, { ...libro, cantidad }];
      }
    });
  };

  // Función para eliminar un libro del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
  };

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};