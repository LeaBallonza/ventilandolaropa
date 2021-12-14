import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../ProductData/ProductData'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

const [ products, setProducts] = useState([])
const {categoryId} = useParams()


    useEffect(() => {
        getProducts(categoryId).then (list => {
            setProducts(list)
        })
        return () => {
            setProducts([])
        }
    }, [categoryId]);
   

    return (
        <div >
            


            <ItemList  products={products}/>
            
            
        </div>
    )
}

export default ItemListContainer



