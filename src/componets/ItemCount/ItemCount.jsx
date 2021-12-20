import {React, useState} from 'react'




const ItemCount = ({ stock, initial = 1, onAdd}) => {



    const [quantity, setQuantity] = useState(initial);

    
    
const addItem = () =>{

    if(quantity < stock) {
        setQuantity(quantity+1)
    }

}

const removeItem =() =>{

    if(quantity > 1) {
        setQuantity(quantity - 1)
    }  

}




    return (
        <div  >
            <div className="btn-group btn-group-lg"  role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary  text-light" onClick={()=>removeItem()}><strong>-</strong></button>
            <button type="button" className="btn btn-primary text-light">{quantity}</button>
            <button type="button" className="btn btn-primary text-light" onClick={()=>addItem()}><strong>+</strong></button>
            <button type="button" className="btn btn-primary text-light" onClick={()=>onAdd(quantity)}><strong>Agregar al carrito</strong></button>
            {}
             </div>
            
        </div>
    )
}

export default ItemCount
