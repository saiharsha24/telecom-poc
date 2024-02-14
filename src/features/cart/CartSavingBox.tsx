import React from 'react';
import { NavLink } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const CartSavingBox = () => {
    return (
        <>
            <div className="cart-saving-box-area">
                <h1>Your Savings</h1>
                <NavLink to="/">Have a Promo code?</NavLink>
                <div className="inner-saving">
                    <div className="inner-saving-box">
                        <p>Today’s savings</p>
                        <span>- Rs0.00</span>
                    </div>
                    <div className="inner-saving-box1">
                        <p>Monthly savings</p>
                        <span>- Rs0.00</span>
                    </div>

                </div>
                <p>Future savings  <span>- Rs0.00</span></p>

                
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>See Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="saving-price">
                            <div className="saving-title">
                                Today's savings
                            </div>
                            <div className="saving-price">
                                <span>-Rs0.00</span>
                            </div>
                        </div>
                        <p>instant</p>

                    </AccordionDetails>
                    <AccordionDetails>
                        <div className="saving-price">
                            <div className="saving-title">
                            Monthly savings
                            </div>
                            <div className="saving-price">
                                <span>-Rs0.00</span>
                            </div>
                        </div>
                        <div className="saving-price">
                            <div className="saving-title">
                            <NavLink to="/">AutoPay discounts <ErrorOutlineIcon/></NavLink>
                            </div>
                            <div className="saving-price">
                                <span className='autopay-price'>-Rs0.00</span>
                            </div>
                        </div>

                    </AccordionDetails>
                    <AccordionDetails>
                        <div className="saving-price">
                            <div className="saving-title">
                            Future savings
                            </div>
                            <div className="saving-price">
                                <span>-Rs0.00</span>
                            </div>
                        </div>
                        <p className='sub-line'>* These are not included in your subtotals</p>

                    </AccordionDetails>
                </Accordion>

            </div>









        </>
    )
}

export default CartSavingBox;