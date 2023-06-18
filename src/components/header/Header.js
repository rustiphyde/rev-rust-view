import React from 'react';
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Logo from '../../assets/rev-rust-logo-text-two.png';

const Header = () => {
  return (
    <header>
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={Logo} alt="Logo" width={200}/>
                </Link>
            </div>  
        </div>
    </header>
  )
}

export default Header