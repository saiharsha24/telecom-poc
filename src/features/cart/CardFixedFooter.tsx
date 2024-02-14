import jsPDF from 'jspdf';
import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';



const CardFixedFooter = () => {
    const navigate = useNavigate();
    const location =useLocation();
    const redirectToCustom = () => {
        const {state} = location;
        navigate('/customer-details',{state:state});
      };
    

    
    return (
        <>
            <div className="main-cart-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="last-pera2">
                                        <p><span>Total </span>Due Today</p>
                                        <span className='last-sapn'>Rs0.00</span>
                                        <p>down + tax</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="last-pera3">
                                        <p><span>Total </span> Monthly</p>
                                        <span className='last-sapn'>Rs0.00</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card-button">
                                        <button className='last-button' onClick={() => redirectToCustom()}>Proceed</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardFixedFooter;