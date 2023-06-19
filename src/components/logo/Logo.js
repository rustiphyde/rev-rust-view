import React from 'react';
import { Link } from "react-router-dom";
import LogoImage from '../../assets/rev-rust-logo-text-two.png';

const Logo = () => {
  return (
        <Link to="/">
            <img src={LogoImage} alt="Logo" width={200}/>
        </Link>
  )
}

export default Logo