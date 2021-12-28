
import './CartWidget.css';
import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'



export default function CartWidget() {

    const {  productContext  } = useContext(CartContext)

    const CartQuantity = () =>{

        return(
            <h3 className="text-light"><strong>{productContext.quantityTotal}</strong></h3>
            
        )
    }
   
    return (
        <div className="d-flex">
            <i className="bi bi-cart2" ></i>             
            {productContext.quantityTotal !== 0 && <CartQuantity/>}
        </div>
    )
}
