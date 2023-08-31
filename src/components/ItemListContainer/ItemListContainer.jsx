import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import products from 'data/products.json';

export const products= [
  {
    "nombre": "Bastión de Sombras",
    "precio": 949.00,
    "imagen": "img/Bastión de Sombras.jpg",
    "categoria": "DLC",
    "descripcion": "información del producto",
    "id": 1
  },
  {
    "nombre": "Colección Arsenal (paquete del 30 aniversario y paquete de Los Renegados)",
    "precio": 1099.00,
    "imagen": "img/Colección Arsenal (paquete del 30 aniversario y paquete de Los Renegados).jpg",
    "categoria": "Colección",
    "descripcion": "información del producto",
    "id": 2
  },
  {
    "nombre": "Colección Clásica (2023)",
    "precio": 2249.00,
    "imagen": "img/Colección Clásica (2023).jpg",
    "categoria": "Colección",
    "descripcion": "información del producto",
    "id": 3
  },
  {
    "nombre": "Eclipse + Pase anual",
    "precio": 4999.00,
    "imagen": "img/Eclipse + Pase anual.jpg",
    "categoria": "DLC",
    "descripcion": "información del producto",
    "id": 4
  },
  {
    "nombre": "La Reina Bruja",
    "precio": 1099.00,
    "imagen": "img/La Reina Bruja.jpg",
    "categoria": "DLC",
    "descripcion": "información del producto",
    "id": 5
  },
  {
    "nombre": "Más allá de la Luz",
    "precio": 1099.00,
    "imagen": "img/Más allá de la Luz.jpg",
    "categoria": "DLC",
    "descripcion": "información del producto",
    "id": 6
  },
  {
    "nombre": "Paquete de los Renegados",
    "precio": 279.99,
    "imagen": "img/Paquete de los Renegados.jpg",
    "categoria": "Paquete",
    "descripcion": "información del producto",
    "id": 7
  },
  {
    "nombre": "Paquete de plata de la Temporada de las Profundidades",
    "precio": 499.00,
    "imagen": "img/Paquete de plata de la Temporada de las Profundidades.jpg",
    "categoria": "Paquete",
    "descripcion": "información del producto",
    "id": 8
  },
  {
    "nombre": "Paquete de plata Triunfante",
    "precio": 499.00,
    "imagen": "img/Paquete de plata Triunfante.jpg",
    "categoria": "Paquete",
    "descripcion": "información del producto",
    "id": 9
  },
  {
    "nombre": "Paquete del 30 aniv. de Bungie",
    "precio": 949.00,
    "imagen": "img/Paquete del 30 aniv. de Bungie.jpg",
    "categoria": "Paquete",
    "descripcion": "información del producto",
    "id": 10
  },
  {
    "nombre": "Paquete del gesto Trono de Atheon",
    "precio": 499.00,
    "imagen": "./img/Paquete del gesto Trono de Atheon.jpg",
    "categoria": "Paquete",
    "descripcion": "información del producto",
    "id": 11
  }
]

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      
      const fetchedProducts = await new Promise(resolve =>
        setTimeout(() => resolve(products), 1000)
      );

      const filteredProducts = id
        ? fetchedProducts.filter(product => product.categoria === id)
        : fetchedProducts;

      setItems(filteredProducts);
    };

    getProducts();
  }, [id]);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">Bienvenidos Tienda-Destiny</h2>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row">
          {items.map(products => (
            <div key={products.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={products.imagen} className="card-img-top" alt={products.nombre} />
                <div className="card-body">
                  <h3 className="card-title">{products.nombre}</h3>
                  <p className="card-text">Precio: ${products.precio}</p>
                  <p className="card-text">{products.descripcion}</p>
                  <a href="/item/:id" className="btn btn-primary">Ver detalle del Producto</a>
                  <button className="btn btn-success">Agregar al Carrito</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
