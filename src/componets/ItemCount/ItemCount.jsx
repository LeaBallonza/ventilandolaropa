import {React, useState} from 'react'


const ItemCount = ({stock = 10, initial, onAdd}) => {

    const [state, setState] = useState({
        stock:stock,
        initial:1,
    });
    
const addItem = () =>{

    if(state.stock > state.initial) setState({...state,initial: state.initial+1})
}

const removeItem =() =>{

    if(state.initial !== 0) setState({...state,initial: state.initial-1})

  

}
    return (
        <div  >
            <div className="btn-group btn-group-lg"  role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary  text-light" onClick={()=>removeItem()}><strong>-</strong></button>
            <button type="button" className="btn btn-primary text-light">{state.initial}</button>
            <button type="button" className="btn btn-primary text-light" onClick={()=>addItem()}><strong>+</strong></button>
            </div>
        </div>
    )
}

export default ItemCount
