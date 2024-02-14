import React from 'react';
import { NavLink } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
const CartProduct = () => {
    return (
        <>
            <div className="cart-product-area">
                <div className="cart-product-header">
                    <div className='cart-product-title'>New Product Add</div>
                    <div className="delete-icon">
                        <DeleteIcon />
                    </div>
                </div>
                <div className="cart-product-body">
                    <h1>Basic</h1>
                    <p>You have selected a Basic plan</p>

                </div>
                <div className="product-btn">
                    <div className="btn-1">
                        <NavLink to="/">Shop Plan</NavLink>
                    </div>
                    <div className="btn-2">
                        <NavLink to="/">Another Plan</NavLink>
                    </div>
                </div>
            </div>
      </>
    )
}

export default CartProduct;