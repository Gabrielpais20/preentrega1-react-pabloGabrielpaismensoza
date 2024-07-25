import React from "react";
import './ItemListContainer.css'

const ItemListContainer= (props) => {
    return (
        <div className="contenedor">
        <h2 className="saludos">{props.greeting}</h2>
        </div>
    );
  };
  
  export default ItemListContainer;
