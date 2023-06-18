import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from 'axios';
import './App.css';

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Pages
import { Home, Songs, Events, Merch } from "./pages";
import Contact from "./pages/contact/Contact";
import Orders from "./pages/orders/Orders";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";

axios.defaults.baseURL = "https://us-central1-rev-rust.cloudfunctions.net/api";

function App() {
  return (
  <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/songs" element={<Songs/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="merch" element={<Merch/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </>
   
  );
}

export default App;
