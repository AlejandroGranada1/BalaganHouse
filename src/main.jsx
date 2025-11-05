import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// 👇 Agregamos este componente raíz con configuración del favicon
function Root() {
  useEffect(() => {
    // 🔹 Cambiar título de la pestaña
    document.title = "Balagan House ✨";

    // 🔹 Agregar o actualizar el favicon desde la nube
    const faviconUrl = "https://imgur.com/4XXg4mH.jpg"; // ← reemplaza con tu URL real
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
