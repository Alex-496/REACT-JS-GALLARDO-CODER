import React from "react";
import { useContext } from "react";
import cartContext from "../context/CartContext";
import Button from "../Button/index";
import CheckoutCart from "./CheckoutCart";
import "./styles.css";

function CartContainer() {
  const { cart, removeItemFromCart, getPriceInCart } = useContext(cartContext);

  return (
    <>
      <h1 className="titl-cart">Tu Carrito</h1>

      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((products) => {
            return (
              <tr key={products.id} className="cartList_row">
                <td className="img-final-border">
                  <img className="img-final" src={products.imagen} alt={products.nombre} />
                </td>
                <td>{products.nombre}</td>
                <td>$ {products.precio}</td>
                <td>{products.count}</td>                
                <td>
                <Button color="#c63224" onTouchButton={() => removeItemFromCart(products.id)}>X</Button>
                </td>
                <th>$ {products.precio * products.count}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
        
      <div style={{color: "#212529"}} className="cartList_detail">
        <h4>El total de su compra es de ${getPriceInCart()}</h4>
      </div>

      <CheckoutCart total={getPriceInCart()} cart={cart}/>
    </>
  );
}

export default CartContainer;