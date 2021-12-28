import React, { useState } from "react";


const Context  = React.createContext();

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
   
    const [quantityTotal, setQuantityTotal] = useState(0)
    //const [productArrya, setproductArrya] = useState([])

   
    const addItemContext = (item, quantity) => {
       // console.log(`cantidad recibida ${quantity}`)
        
        const flag = isInCart(item)
       
       console.log(flag)

       if(flag){
        let addedItem = cart.find(i => i.item === item)
          addedItem.quantity += quantity
          let cartFiltered = cart.filter(i => i.item !== item)
        setCart([...cartFiltered, addedItem])

       
       } 
       else{

        setCart([...cart, {item: item, quantity: quantity}])
       }
           
        //Envio por props el valor de quantity recibido del item detal y ejecuto la funcion para aumentar el acumulador
        addQuantity(quantity);
    }
    //recibe por props quanitity como valor inicial y a ese valor le suma lo que la cart.quantity tiene almacenado
    const addQuantity = (quantity) => {

        let accumulator =+ quantityTotal

        if(accumulator === 0){
            accumulator += quantity
            
        }else{
            cart.forEach(i =>  accumulator +=  i.quantity)
        }
        
        
        setQuantityTotal(accumulator)
      //  console.log(`acumulador ${quantity}`)
        
    }
    

    //valida si mi array de productos tiene un item
    const isInCart = (item) =>{
        return cart.some(product => product.item === item)
    }
    
   const clear = () => {

    setCart("")
    setQuantityTotal(0)

   }
   //removeItem(itemId)


   console.log(cart)

   console.log(quantityTotal)
   
    return(
        
        <Context.Provider value={{
            productContext: {
                cart,
                quantityTotal
            },
            addItemContext, clear
        }}>
            {children}
        </Context.Provider>
    )
}
export default Context