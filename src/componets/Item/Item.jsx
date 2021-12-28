import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {

 
  return (
    <div className="col ">
      <div className="card  " style={{ width: "18rem", marginBottom:"5rem"}}>
        <img src={`../../../${product.img}`} className="card-img-top" alt="imagen"/>
        <div className="card-body text-center">
          <h5 className="card-title" style={{ color: "black" }}>
            {product.name}
          </h5>
          <p className="card-text" style={{ color: "black" }}>
            {product.currency}
            {product.price}
          </p>
          <Link to={`/detail/${product.id}`} className="btn btn-primary text-light">
            Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};



export default Item;
 