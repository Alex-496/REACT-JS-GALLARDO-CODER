import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../products/products.js';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const { addItem } = useCart(); 

  useEffect(() => {
    const getProducts = async () => {
      const filteredProducts = id
        ? products.filter((product) => product.categoria === id)
        : products;

      setItems(filteredProducts);
    };

    getProducts();
  }, [id]);

  const handleAddToCart = (product) => {
    addItem({ ...product, id: product.id }, 1);
  };

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
                  <Link to={`/detail/${products.id}`} className="btn btn-primary">Ver detalle del Producto</Link>
                  <button onClick={() => handleAddToCart(products)} className="btn btn-success">Agregar al Carrito</button>
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
