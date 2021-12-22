import { React, useState } from 'react'
import { Link } from "react-router-dom";




const ItemCount = ({ stock, initial }) => {

    const [count, setCount] = useState(0);

    const onAdd = (quantity) => {

        setCount(quantity)
    }

    const InputToCart = () => {

        return (
            <Link to={`/Cart`} type="button" className="btn-lg btn btn-primary text-light"> Finalizar Compra </Link>
        )
    }

    const InputAddToCat = () => {

        return (
            <button type="button" className=" btn-lg btn btn-primary text-light" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        )
    }


    const [quantity, setQuantity] = useState(initial);

    const addItem = () => {

        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const removeItem = () => {

        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (

        <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary  text-light" onClick={() => removeItem()}><strong>-</strong></button>
            <button type="button" className="btn btn-primary text-light">{quantity}</button>
            <button type="button" className="btn btn-primary text-light" onClick={() => addItem()}><strong>+</strong></button>
            {quantity === count ? <InputToCart /> : <InputAddToCat />}
        </div>
    )
}

export default ItemCount
