import React from "react";
//import ProductData from "../ProductData/ProductData";
//import ItemCount from "../ItemCount/ItemCount";

const Item = ({ product }) => {
  return (
    <div className="container ">
      <div className="card " style={{ width: "18rem" }}>
        <img src={product.img} className="card-img-top" alt="imagen"/>
        <div className="card-body">
          <h5 className="card-title" style={{ color: "black" }}>
            {product.productName}
          </h5>
          <p className="card-text" style={{ color: "black" }}>
            {product.currency}
            {product.price}
          </p>
          <a href="/#" className="btn btn-primary">
            Detalles
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
