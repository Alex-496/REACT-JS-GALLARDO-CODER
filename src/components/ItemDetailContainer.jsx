import React from 'react';
import products from './ItemListContainer/ItemListContainer';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ItemDetailContainer = () => {
  const { id } = useParams(); 

  const products = products.find(products => products.id === parseInt(id, 10));

  if (!products) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={products.imagen} alt={products.nombre} />
      </div>
      <div className="card-detail_detail">
        <h1>{products.nombre}</h1>
        <h2 className="priceTag">$ {products.precio}</h2>
        <p>{products.descripcion}</p>
      </div>
    </div>
  );
};

export default ItemDetailContainer;