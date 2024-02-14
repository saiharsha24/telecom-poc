import React from 'react';
import styles from './Header.module.css'
import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import {NavLink, useNavigate} from "react-router-dom";
import Otsilogo from './Otsilogo.png'

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.leading}>
        <img src={Otsilogo} className={styles.logo} onClick={() => navigate('')} />
        <ul className={styles.items}>
          <li>
            <NavLink to={'plans'}>Service & Product Catalog</NavLink>
          </li>
          <li> 
            <NavLink to={'Provisioning'}>Service Provisioning</NavLink>
            </li>
          <li>
          <NavLink to={'Assurance'}>Service Assurance</NavLink>
            </li>
          <li>
          <NavLink to={'Coverage'}>Coverage</NavLink>
            </li>
        </ul>
      </div>
      <div className={styles.trailing}>
        <NavLink to={'cart'} className={styles.cart}>
          <ShoppingCartIcon className={styles.cartIcon} />
          <span>Cart</span>
        </NavLink>
        <button className ={styles.myAccount} onClick={() => navigate('/management')}>
          Customer Management   
        </button>
      
      </div>
    </header>
  );
};

export default Header;
