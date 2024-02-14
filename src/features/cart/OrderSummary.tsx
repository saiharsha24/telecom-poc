import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const OrderSummary = () => {
    return (
        <>
            <div className="main-summary">
                <div className="main-heading">
                    <h2>Order summary</h2>
                    <hr></hr>
                </div>
                <div className="inner-first">
                    <p>One-time Charge</p>
                </div>
                <div className="inner-pera">
                    <p>Device Connection Charge <ErrorOutlineIcon/></p>
                    <span>Rs0.00</span>
                </div>
                <div className="inner-pera2">
                    <p>Shipping</p>
                    <span>FREE</span>
                </div>
                <div className="inner-pera3">
                    <p>Estimated ship date</p>
                    <p>Or get it faster with <span>store pickup!</span></p>
                </div>

                <div className="inner-pera4">
                    <p>Estimated taxes</p>
                    <span>-</span>
                </div>
                <div className="inner-pera5">
                    <p>Calculated in checkout</p>
                </div>

                <hr></hr>
                <div className="inner-pera6">
                    <p>Total savings</p>
                    <span>- Rs0.00</span>
                </div>
                <div className="inner-pera7">
                    <p>Today's savings</p>
                    <p>- Rs0.00</p>
                </div>
                <div className="inner-pera7">
                    <p>Monthly savings</p>
                    <p>- Rs5.00</p>
                </div>
                <div className="inner-pera7">
                    <p>Future savings</p>
                    <p>- Rs0.00</p>
                </div>

                <div className="last-pera">
                    <div className="last-pera1">
                        <p>Subtotal</p>
                    </div>
                    <div className="last-pera2">
                        <p><span>Total </span>due today</p>
                        <span className='last-sapn'>Rs0.00</span>
                        <p>down + tax</p>
                    </div>
                    <div className="last-pera3">
                        <p><span>Total </span> monthly</p>
                        <span className='last-sapn'>Rs799.00</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderSummary;
