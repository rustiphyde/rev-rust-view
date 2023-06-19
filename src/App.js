import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from 'axios';
import './App.css';

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Components
import { Header, Footer } from "./components";

// Pages
import { Home, Account, Login, Join, Reset, Songs, Events, Merch, Contact, Orders, Cart, Checkout, Admin } from "./pages";

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
      <Route path="/login" element={<Login/>}/>
      <Route path="/join" element={<Join/>}/>
      <Route path="/reset" element={<Reset/>}/>
      <Route path="/account" element={<Account/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </>
   
  );
}

export default App;
