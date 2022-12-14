import React from "react";

function Out({ cart }) {
  return (
    // <div>
    //   <div className="cart-item">
    //     <div className="card-border">
    //       <div className="cart-empty">
    //         {cart.length === 0 && (
    //           <div className="cart-empty"> There is no it in your cart</div>
    //         )}
    //       </div>
    //       <div className="clear-button">
    //         {cart.length >= 1 && (
    //           <button className="clear-cart"> Clear Cart</button>
    //         )}
    //       </div>

    <div className="card ">
      {cart.map((it) => (
        <div key={it.id} className="cart-list d-flex">
          <img className="product-image w-25" src={it.img} alt="" />

          <div className="cart-name "> {it.name} </div>
          <div className="cart-name"> {it.price} </div>

          {/* <div className="cart-function">
            <button className="cart-add">+</button>
            <button className="cart-remove">-</button>
          </div> */}
        </div>
      ))}
    </div>
  );
}
export default Out;
