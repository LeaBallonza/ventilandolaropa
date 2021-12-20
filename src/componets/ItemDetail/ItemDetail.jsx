import React from 'react'
//import { useState } from 'react/cjs/react.development'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ detail }) => {

  const onAdd = (quantity) => {

    
    console.log(`Agregado al carrito ${quantity}`)

  

 }



    return (
        <div className="d-flex justify-content-center ">
            <div className="card mb-3" style={{ marginTop: "10rem" }}>
                <img src={`../../../${detail?.img}`} className="card-img-top" alt="imagen" />
                <div className="card-body text-center">
                    <h5 className="card-title" style={{ color: "black" }}>{detail?.productName}</h5>
                    <p className="card-text" style={{ color: "black" }}> {detail?.description}</p>
                    <p className="card-text" style={{ color: "black" }}>{detail?.currency}
                        {detail?.price}</p>
                        <p className="card-text" style={{ color: "black" }}> {detail?.stock}</p>
                </div>
                <ItemCount stock={detail?.stock} initial={1} onAdd={onAdd}/>
               
           
            </div>
            
        </div>
    )
}

export default ItemDetail


/*<div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`../../../${detail.img}`} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{detail.productName}</h5>
        <p className="card-text">{detail.description}</p>
        <p className="card-text" >{detail.currency}
                        {detail.price}</p>
                        <ItemCount/>
      </div>
    </div>
  </div>
</div>*/