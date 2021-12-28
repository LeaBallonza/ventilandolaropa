import { React, useState } from 'react'
//import { Link } from "react-router-dom";




const ItemCount = ({ stock, initial, onAdd }) => {

  

    const [quantity, setQuantity] = useState(initial);

    const addItem = () => {

        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const removeItem = () => {

        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }
    

    return (

        <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary  text-light" onClick={() => removeItem()}><strong>-</strong></button>
            <button type="button" className="btn btn-primary text-light">{quantity}</button>
            <button type="button" className="btn btn-primary text-light" onClick={() => addItem()}><strong>+</strong></button>
          {quantity > 0 &&  <button type="button" className=" btn-lg btn btn-primary text-light" onClick={() => onAdd(quantity)}>Agregar al carrito</button>}
        
        </div>
    )
}

export default ItemCount
