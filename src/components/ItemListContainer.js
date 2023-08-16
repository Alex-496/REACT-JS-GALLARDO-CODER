import React from 'react';
import './ItemListContainer.css'; // Asegúrate de tener el archivo de estilos

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <p className="greeting">{greeting}</p>
    </div>
  );
};

export default ItemListContainer;