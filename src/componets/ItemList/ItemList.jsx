import React from "react";
import Item from "../Item/Item";



const ItemList = ({ products }) => {
    return (
        <div className="container" style={{ marginTop: "10rem" }}>
            <div className="row">
                {products.map((product) => (
                    <Item key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};


export default ItemList;
