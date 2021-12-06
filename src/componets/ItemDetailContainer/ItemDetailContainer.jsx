import React, { useEffect, useState } from 'react'
import { getItem } from '../ProductData/ProductData'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([])

        useEffect(() => {
            const item = getItem()
            item.then (item => {
                setDetail(item)
            })
            return () => {
                setDetail([])
            }
        }, [])

        console.log(detail)

      

    return (
        <div>
            <ItemDetail detail={detail}/>
        </div>
    )
}

export default ItemDetailContainer
