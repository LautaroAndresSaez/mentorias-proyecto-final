import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  const sendToServer = () => {
    fetch("http://localhost:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Hola",
        password: "123456789",
      }),
    });
  };

  return (
    <>
      <h1>{JSON.stringify(products)}</h1>
      <button onClick={sendToServer}>Enviar</button>
    </>
  );
}

export default App;
