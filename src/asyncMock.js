const products = [
    {
        id: '1',
        name: 'Cuarzo Rosa',
        price: 1500,
        category: 'cristales',
        img: '/products/CuarzoRosa.jpg',
        stock: 25,
        description: 'Piedra del amor incondicional y la paz infinita.'
    },
    {
        id: '2',
        name: 'Mazo Rider Waite',
        price: 12000,
        category: 'tarot',
        img: '/products/MazoRiderWaite.jpg',
        stock: 10,
        description: 'El mazo de tarot más clásico y reconocido mundialmente.'
    },
    {
        id: '3',
        name: 'Vela 7 Colores',
        price: 800,
        category: 'velas',
        img: '/products/Vela7Colores.jpg',
        stock: 50,
        description: 'Vela para abrir caminos y armonizar los chakras.'
    },
    {
        id: '4',
        name: 'Amuleto Ojo Turco',
        price: 2500,
        category: 'amuletos',
        img: '/products/AmuletoOjoTurco.jpg',
        stock: 15,
        description: 'Protección contra el mal de ojo y energías negativas.'
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 500);
    });
};