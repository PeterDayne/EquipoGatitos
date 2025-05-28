import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from './About';
import ContactUs from './ContactUs';
import TeamSection from './TeamSection';
import NotFound from './NotFound';
import { useState, useEffect } from "react";
import Card from './Card';
// ...
import Nav from './Nav';
import Home from './Home';
import ProductGrid from './ProductGrid';
import ProductPage from './ProductPage';
import ProductCRUD from './ProductCRUD';
import Checkout from './Checkout';
import Login from './Login';
import Registro from './Registro';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  // Cada vez que cambie, lo guarda en localStorage
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <>
      <BrowserRouter>
      {/* Solo muestra el nav si el usuario está autenticado */}
      {isAuthenticated && <Nav onLogout={handleLogout}/>} {/* si tienes uno */}

      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <ProductGrid /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Login onLogin={() => setIsAuthenticated(true)} />
            )
          }
        />
        {/* otras rutas */}
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Team" element={<TeamSection />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/CRUD" element={<ProductCRUD />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/ProductGrid" element={<ProductGrid/>}/>
        <Route path="/Registro" element={<Registro/>}/>

      </Routes>
    </BrowserRouter>

    

    </>
  )
}

export default App