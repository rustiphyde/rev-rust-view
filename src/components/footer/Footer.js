import React from 'react';
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const date = new Date();

let years = ""

if(date.getFullYear() > 2023){
  years = `2023 - ${date.getFullYear()}`;
} else {
  years = "2023";
}

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>&copy; {years} Rusty Hoppins - All Rights Reserved</div>
      <div>
        <Link to="/contact">
          Contact Rev. Rust
        </Link>
      </div>
    </div>
  )
}

export default Footer