import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './CartWidget.css';

const CartWidget = ()=>{
    return (
        <div className="d-flex align-items-center">
      <i className="bi bi-cart"></i> 
      <span className="ms-2 text-white">3</span>
    </div>
    )
}

export default CartWidget;