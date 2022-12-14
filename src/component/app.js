import "./App.css";
import React, { useState } from "react";
import Task from "./component/task";
import Cart from "./component/cart";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/footer";
import Content from "./component/content";
import Out from "./component/out";

function App() {
  const productItem = [
    {
      id: "1",
      name: "midi sundress with shiring details",
      price: "$29.9",
      img: "./images/image1.png",
    },
    {
      id: "2",
      name: "midi sundress with ruched front",
      price: "$29.9",
      img: "./images/image2.png",
    },
    {
      id: "3",
      name: "midi dress in the pink floral",
      price: "$29.9",
      img: "./images/image3.png",
    },
    {
      id: "4",
      name: "midi sundress with shiring details",
      price: "$29.9",
      img: "./images/image4.png",
    },
  ];

  const [cart, setCart] = useState([]);

  const onAdd = (item) => {
    const productExist = cart.find((data) => data.id === item.id);
    if (productExist) {
      setCart(
        cart.map((data) =>
          data.id === item.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : data
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    console.log("Cart Items", cart);
  };
  return (
    <div className="App">
      <Task />

      <Routes>
        <Route path="/" element={<Content />} />
        <Route
          path="/cart"
          element={<Cart productItem={productItem} onAdd={onAdd} />}
        />
        <Route path="/out" element={<Out cart={cart} />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
