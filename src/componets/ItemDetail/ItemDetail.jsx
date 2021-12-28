import React, { useContext } from 'react'
import { useState } from 'react/cjs/react.development'
import CartContext from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom";

 
const ItemDetail = ({ detail }) => {

    const {  addItemContext  } = useContext(CartContext)

    const [quantity, setQuantity] = useState(0);

    const onAdd = (count) => {

        setQuantity(count)
    }

    const InputToCart = () => {

        return (
            <button type="button" className="btn-lg btn btn-primary text-light" onClick={() =>addItemContext (detail,quantity)}> Finalizar Compra </button>
        )
    }
 
      return (
        <div className="d-flex justify-content-center ">
            <div className="card mb-3" style={{ marginTop: "10rem" }}>
                <img src={`../../../${detail?.img}`} className="card-img-top" alt="imagen" />
                <div className="card-body text-center">
                    <h5 className="card-title" style={{ color: "black" }}>{detail?.name}</h5>
                    <p className="card-text" style={{ color: "black" }}> Descripcion: {detail?.description}</p>
                    <p className="card-text" style={{ color: "black" }}>Precio: {detail?.currency}
                        {detail?.price}</p>
                        <p className="card-text" style={{ color: "black" }}><strong> Stock:  {detail?.stock} </strong></p>   
                        {quantity === 0 ?
                        <ItemCount stock={detail?.stock} initial={0} onAdd={onAdd}/> 
                        :
                         <InputToCart/>
                        }
                </div>  
                        
            </div>
        </div>
    )
}

export default ItemDetail


 /*
*/

/* const InputAddToCat = () => {

        return (
            )
    }
*/