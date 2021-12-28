import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'

const Cart = () => {

    const {  productContext , clear } = useContext(CartContext)

    

    const CartView = () => {

        return (
            <div className="card mb-3" style={{maxwidth: "540"}}>
            <div className="row g-0">
                <div className="col-md-4" >
                  <img  src={`../../../${productContext.cart.img}`} style={{ width: "20rem"}} alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{productContext.cart.name}</h5>
                    <p className="card-text">Descripcion: {productContext.cart.description}</p>
                    <p className="card-text">Precio: {productContext?.cart.currency} {productContext.cart.price *productContext.quantityTotal }</p>
                    <p className="card-text"><small className="text-muted">Cantidad: {productContext.quantityTotal}</small></p>
                </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary text-light" onClick={() => clear()}><strong>Limpiar cart</strong></button>
           
            </div>
       )
    }

    return (
        <div>
             { productContext.quantityTotal !== 0 && <CartView/> }
             
       </div>
    )
}

export default Cart


