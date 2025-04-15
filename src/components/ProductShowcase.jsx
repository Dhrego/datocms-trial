import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

import "./ProductShowcase.css";

export default function ProductShowcase({ products }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  return (
    <div
      className="product-showcase"
      style={{
        backgroundImage: `url(${activeProduct.imageUrl})`,
      }}
    >
      <div className="overlay">
        <div className="contain">
          <div className="info left">
            <h1>{activeProduct.name}</h1>
            <p>{activeProduct.description}</p>
            <button>
              <a href="">Richiedi un preventivo</a>
            </button>
          </div>
          <div className="info right">
            <div className="specs">
              <p>Capacità di pulizia</p>
              <h2>
                {new Intl.NumberFormat("it-IT").format(
                  activeProduct.cleaningCapacity
                )}{" "}
                m²/h
              </h2>
            </div>
            <div className="specs">
              <p>Larghezza di pulizia max</p>
              <h2>
                {new Intl.NumberFormat("it-IT").format(activeProduct.width)} mm
              </h2>
            </div>
            <div className="specs">
              <p>Autonomia</p>
              <h2>
                {activeProduct.autonomy === "illimitata"
                  ? activeProduct.autonomy
                  : `${activeProduct.autonomy} ore`}
              </h2>
            </div>
            <a className="pdf" href="#" target="_blank">
              Scarica la scheda tecnica
            </a>
          </div>
          <div className="tabs">
            {products.map((product, i) => (
              <div
                key={i}
                className={`tab ${i === activeIndex ? "active" : ""}`}
                onClick={() => {
                  console.log("clicked tab", i);
                  setActiveIndex(i);
                }}
              >
                <img src={product.tabImageUrl} alt={product.name} />

                <div className="description">
                  <p>{product.name}</p>
                  <span>{product.cleaningCapacity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tabs mobile">
          {products.map((product, i) => (
            <div
              key={i}
              className={`tab ${i === activeIndex ? "active" : ""}`}
              onClick={() => {
                console.log("clicked tab", i);
                setActiveIndex(i);
              }}
            >
              <img src={product.tabImageUrl} alt={product.name} />

              <div className="description">
                <p>{product.name}</p>
                <span>{product.cleaningCapacity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
