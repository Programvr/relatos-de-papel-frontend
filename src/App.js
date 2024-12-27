import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Acceso from './pages/Acceso';
import PaginaPrincipal from './pages/PaginaPrincipal';
import DetallesLibro from './pages/DetallesLibro';
import Carrito from './pages/Carrito';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Acceso />} />
            <Route path="/pagina-principal" element={<PaginaPrincipal />} />
            <Route path="/libro/:id" element={<DetallesLibro />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;