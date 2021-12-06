

const ProductData = [
    {
        id:1,
        productName: "Pantalon Lila",
        description: "Pantalón lila con cierre en la parte de abajo Tipo tela de avión, Talle S",
        price: 1000,
        currency: "$",
        img: "multimedia/1.jpeg",

    },
    {
        id:2,
        productName: "Camisa con rosas",
        description: "Camisa azul basica con bordado de rosas en el cuello, La tela se amolda al cuerpo, Talle S",
        price: 500,
        currency: "$",
        img: "multimedia/2.jpeg"

    },
    {
        id:3,
        productName: "Remera red square",
        description: "Tela abrigada, Talle S",
        price: 400,
        currency: "$",
        img: "multimedia/3.jpeg"

    },
    {
        id:4,
        productName: "Remeras flores cruzadas",
        description: "Remera manga larga con estampado de Basquiat,Talle S",
        price: 300,
        currency: "$",
        img: "multimedia/4.jpeg"

    }

]
export  const getProducts =  (() => {

    return new Promise ((resolve, reject)=> {

        setTimeout(() => {
            resolve (ProductData);
        }, 3000)
    })
   
});

export  const getItem =  (() => {

    return new Promise ((resolve, reject)=> {

        setTimeout(() => {
            resolve (ProductData[0]);
        }, 3000)
    })
   
});

export default ProductData;