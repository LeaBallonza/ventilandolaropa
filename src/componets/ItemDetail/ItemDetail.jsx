import React from 'react'

const ItemDetail = ({detail}) => {


    return (
        <div>
            <div className="card mb-3">
  <img src={detail.img} className="card-img-top" alt="imagen"/>
  <div className="card-body">
    <h5 className="card-title" style={{ color: "black" }}>{detail.productName}</h5>
    <p className="card-text" style={{ color: "black" }}> {detail.description}</p>
    <p className="card-text" style={{ color: "black" }}><small className="text-muted">{detail.currency}
            {detail.price}</small></p>
  </div>
</div>
        </div>
    )
}

export default ItemDetail
