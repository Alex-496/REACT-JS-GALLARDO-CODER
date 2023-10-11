import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../products/products";
import { useCart } from "../context/CartContext";

function ItemDetailContainer() {
  const { id } = useParams();
  const selectedProduct = products.find(
    (product) => product.id === parseInt(id, 10)
  );

  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart(); // Obtén la función addItem del contexto

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Llama a la función addItem para agregar el producto al carrito
    addItem(selectedProduct, quantity);
    // Opcional: Mostrar un mensaje de confirmación o redirigir a la página del carrito
  };

  if (!selectedProduct) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <img
              src={`${process.env.PUBLIC_URL}/${selectedProduct.imagen}`}
              alt={selectedProduct.nombre}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{selectedProduct.nombre}</h5>
              <p className="card-text">
                Precio: $ {selectedProduct.precio}
              </p>
              <p className="card-text">
                Descripción: {selectedProduct.descripcion}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="quantity-controls">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <span className="mx-2">{quantity}</span>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={handleAddToCart}
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col text-center">
          <Link to="/" className="btn btn-secondary">
            Volver a la lista de productos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;