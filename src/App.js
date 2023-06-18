import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from 'axios';
import './App.css';

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserDetails } from './redux/actions/userActions';

// Util imports
import themeFile from "./util/theme";
import AuthRoute from "./util/AuthRoute";

// MUI Components
import { createTheme } from '@mui/material/styles';

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import user from "./pages/user";
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import reset from './pages/reset';
import about from './pages/about';

axios.defaults.baseURL = "https://us-central1-rev-rust.cloudfunctions.net/api";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Content coming soon. Stay tuned
        </p>
      </header>
    </div>
  );
}

export default App;
