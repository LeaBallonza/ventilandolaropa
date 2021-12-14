import React, { useEffect, useState} from 'react'
import { getProductsById } from '../ProductData/ProductData'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([])
    const {paramId} = useParams()

    

    useEffect(() => {
        getProductsById(paramId).then(item => {
            setDetail(item)
        }).catch(err => {
            console.log(err)
        })
       
        return(() =>{
            setDetail()
            
        })
    }, [paramId])

    

    return (
        <div>
            <ItemDetail detail={detail}/>
        </div>
    )
}

export default ItemDetailContainer
