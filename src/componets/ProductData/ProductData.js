const ProductData = [
    {
        id:1,
        productName: "Pantalon Lila",
        description: "Pantalón lila con cierre en la parte de abajo Tipo tela de avión, Talle S",
        price: 1000,
        currency: "$",
        img: "multimedia/1.jpeg",
        category: "pantalones",
    },
    {
        id:2,
        productName: "Camisa con rosas",
        description: "Camisa azul basica con bordado de rosas en el cuello, La tela se amolda al cuerpo, Talle S",
        price: 500,
        currency: "$",
        img: "multimedia/2.jpeg",
        category: "camisas",
    },
    {
        id:3,
        productName: "Remera red square",
        description: "Tela abrigada, Talle S",
        price: 400,
        currency: "$",
        img: "multimedia/3.jpeg",
        category: "remeras",
    },
    {
        id:4,
        productName: "Remeras flores cruzadas",
        description: "Remera manga larga con estampado de Basquiat,Talle S",
        price: 300,
        currency: "$",
        img: "multimedia/4.jpeg",
        category: "remeras",
    }

]

const categories = [
    {id:"remeras"},
    {id:"camisas"},
    {id:"pantalones"},
]

export  const getProducts =  (category) => {

    return new Promise ((resolve, reject)=> {

        setTimeout(() => {
           category ? resolve(ProductData.filter(product => product.category === category)) : resolve (ProductData)
        }, 1000)
    })
   
};

export  const getProductsById =  (id) => {

    return new Promise ((resolve, reject)=> {
        const product = ProductData.find (prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => {
            resolve (product);
        }, 1000)
    })
   
};

export  const getProductsByCategories =  () => {

    return new Promise ((resolve, reject)=> {
        setTimeout(() => {
            resolve (categories);
        }, 1000)
    })
   
};



export default ProductData;