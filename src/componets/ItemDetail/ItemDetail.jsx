import React from 'react'
//import { useState } from 'react/cjs/react.development'
import ItemCount from '../ItemCount/ItemCount'

 



const ItemDetail = ({ detail }) => {

  

    

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
                <ItemCount stock={detail?.stock} initial={1}/> 
               
           
            </div>
            
        </div>
    )
}

export default ItemDetail
