import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../cart/Cart.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SavingBox from "./CartSavingBox";
import CartItem from "./CartItem";
import CartProduct from "./CartProduct";
import OrderSummary from "./OrderSummary";
import CardFixedFooter from './CardFixedFooter';
import { useAppSelector } from '../../app/hooks';
import { selectSelectedPlan } from '../../app/appslice';


const Cart = () => {
  const selectedPlan = useAppSelector(selectSelectedPlan)
  console.log(selectedPlan)
  
  return (
    <>
      <section className="cart-page-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cart-header-top">
                <h1>Your Cart</h1>
                <p>Review your order, then continue to checkout.</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="main-cart-area">
                <div className="add-device-area">
                  <p><FontAwesomeIcon icon={faTriangleExclamation} /> Before you check out, you’ll need to:</p>
                  <NavLink to="/">Add a device to each line. <FontAwesomeIcon icon={faAngleRight} /></NavLink>
                </div>
                <CartItem />
                <CartProduct />
              </div>
            </div>
            <div className="col-md-4">
              <div className="right-cart-area">
                <SavingBox />
              </div>
              <div className="order-summary">
                <OrderSummary />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="card-fixed-footer">
        <CardFixedFooter />
      </div>
    </>
  );
}

export default Cart;
