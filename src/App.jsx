import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/AuthContext";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Rent from "./pages/Rent";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Buy />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
          <Footer/>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
