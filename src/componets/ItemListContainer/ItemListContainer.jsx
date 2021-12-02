import React, { useState, useEffect } from 'react'
 //import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../ProductData/ProductData'

const ItemListContainer = () => {

const [ products, setProducts] = useState([])

    useEffect(() => {
        const list = getProducts()
        list.then (list => {
            setProducts(list)
        })
        return () => {
            setProducts([])
        }
    }, [])

    return (
        <div>
            

           {/*} <ItemCount/> {*/}

            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer



