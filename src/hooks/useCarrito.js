import { useState } from 'react';

const useCarrito = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (libro, cantidad) => {
    console.log("Agregando al carrito:", libro, cantidad);
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

  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return {
    carrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    vaciarCarrito,
  };
};

export default useCarrito;