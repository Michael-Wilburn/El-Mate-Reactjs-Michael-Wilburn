  
const products = [
    
    {
        id: '0',
        title: "imperial Uruguayo",
        price: 4000,
        category: 'mates',
        img: require('./images/mates/imperial-calabaza-1.png'),
        stock: 10,
        description: 'Mate Imperial Uruguayo negro de calabaza con borde de alpaca'
    },
    {
        id: '1',
        title: "imperial Virola",
        price:6000,
        category: 'mates',
        img: require('./images/mates/imperial-virola-1.png'),
        stock: 10,
        description: 'Mate Imperial Virola negro de calabaza con borde de alpaca grabado'
    },
    {
        id: '2',
        title: "imperial Algarrobo",
        price: 6500,
        category: 'mates',
        img: require('./images/mates/imperial-algarrobo-1.png'),
        stock: 10,
        description: 'Mate Imperial Algarrobo marron de calabaza con borde de alpaca grabado'
    },
    {
        id: '3',
        title: "Un Re Mate de acero",
        price: 4900,
        category: 'mates',
        img: require('./images/mates/un-mate-1.png'),
        stock: 10,
        description: 'Un Mate de acero color negro con bombilla acero inoxidable'
    },
    {
        id: '4',
        title: "Un Re Mate de acero",
        price: 4900,
        category: 'mates',
        img: require('./images/mates/un-mate-2.png'),
        stock: 10,
        description: 'Un Mate de acero color amarillo con bombilla acero inoxidable'
    },
    {
        id: '5',
        title: "Mate Stanley 236ml",
        price: 7200,
        category: 'mates',
        img: require('./images/mates/stanley-1.jpeg'),
        stock: 10,
        description: 'Un Mate de acero inoxidable color verde'
    },
    {
        id: '6',
        title: "Gran Chaco",
        price: 7200,
        category: 'mates',
        img: require('./images/mates/chaco-1.png'),
        stock: 10,
        description: 'Un Mate de ceramica blanca y madera algarrobo de gran calidad'
    },
    {
        id: '7',
        title: "Mate De Madera Mijo Diseño Negro",
        price: 1700,
        category: 'mates',
        img: require('./images/mates/mijo-1.png'),
        stock: 10,
        description: 'Un Mate de madera de gran calidad color negro'
    },
    {
        id: '200',
        title: "Termo Stanley",
        price: 20000,
        category:'termos',
        img: require('./images/termos/termo-stanley-1.webp'),
        stock: 10,
        description: 'Termo blanco Adventure 739 ML con Tapón Cebador de acero inoxidable pola'
    },
    {
        id: '201',
        title: "Termo Acero Inoxidable Doble Capa Frio Calor 2 Litros",
        price: 8000,
        category:'termos',
        img: require('./images/termos/termo-stanley-3.webp'),
        stock: 10,
        description: "Termo Acero Inoxidable Doble Capa Frio Calor 2 Litros",
        
    },
    {
        id: '203',
        title:"Termo Coleman Acero Inoxidable Mate 700ML Rojo",
        price: 7600,
        category: "termos",
        img: require( './images/termos/termo-Coleman-4.webp'),
        stock: 10,
        description: "Termo Coleman Acero Inoxidable Mate 700ML Rojo", 
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}
