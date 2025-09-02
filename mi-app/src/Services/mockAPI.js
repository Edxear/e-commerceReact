// Importaciones de imagenes en progreso.

//Remeras
import product1 from '../assets/images/product1R.jpg';
import product2 from '../assets/images/product2R.jpg';
import product3 from '../assets/images/product3R.jpg';
//Buzos
import product4 from '../assets/images/product4B.jpg';
import product5 from '../assets/images/product5B.jpg';
import product6 from '../assets/images/product6B.jpg';


const mockProducts = [
  {
    id: 1,
    title: "Remera La 25",
    price: 18.800,
    image: product1,
    category: "Remeras",
    description: "Remera La 25 - Brilla en la oscuridad"
  },
  {
    id: 2,
    title: "Remera Almafuerte",
    price: 18.800,
    image: product2,
    category: "Remeras",
    description: "Remera Almafuerte - Brilla en la oscuridad"
  },
  {
    id: 3,
    title: "Remera Calavera Flama",
    price: "18.800",
    image: product3,
    category: "Remeras",
    description: "Remera Calavera Flama - Glow in the Dark edición limitada. Fuego urbano que brilla en la oscuridad"
  },
  {
    id: 4,
    title: "Buzo Rick and Morty",
    price: 50.000,
    image: product4,
    category: "Buzos",
    description: "Estampado Glow in the Dark - Edición Limitada"
  },
  {
    id: 5,
    title: "Buzo Rick and Morty Rick Portal",
    price: 50.000,
    image: product5,
    category: "Buzos",
    description: "Estampado Glow in the Dark - Edición Limitada"
  },
  {
    id: 6,
    title: "Buzo Los Simpson - Sr. Burns",
    price: 50.000,
    image: product6,
    category: "Buzos",
    description: "Estampado Glow in the Dark - Edición Limitada"
  },
];

export const mockApi = {
  getProducts: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 2000);
    });
  },
  getProductsByCategory: (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts.filter(product => product.category === categoryId));
      }, 2000);
    });
  },
  getProductById: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = mockProducts.find(product => product.id === parseInt(id));
        if (product) {
          resolve(product);
        } else {
          reject(new Error('Producto no encontrado'));
        }
      }, 2000);
    });
  }
};