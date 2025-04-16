import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProductShowcase.css";

export default function ProductShowcase({ products }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 720);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className="product-showcase">
      {/* Animated background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct.imageUrl}
          className="background-image"
          style={{ backgroundImage: `url(${activeProduct.imageUrl})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      </AnimatePresence>

      <div className="overlay">
        <div className="contain">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.name + "-info"}
              className="info left"
              initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isMobile ? 0 : -30 }}
              transition={{ duration: 0.4 }}
            >
              <span>{activeProduct.name}</span>
              <p>{activeProduct.description}</p>
              <button>
                <a href="">Richiedi un preventivo</a>
              </button>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.name + "-right"}
              className="info right"
              initial={{ opacity: 0, x: isMobile ? 0 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isMobile ? 0 : 30 }}
              transition={{ duration: 0.4 }}
            >
              <div className="specs">
                <p>Capacità di pulizia</p>
                <span>
                  {new Intl.NumberFormat("it-IT").format(
                    activeProduct.cleaningCapacity
                  )}{" "}
                  m²/h
                </span>
              </div>
              <div className="specs">
                <p>Larghezza di pulizia max</p>
                <span>
                  {new Intl.NumberFormat("it-IT").format(activeProduct.width)}{" "}
                  mm
                </span>
              </div>
              <div className="specs">
                <p>Autonomia</p>
                <span>
                  {activeProduct.autonomy === "illimitata"
                    ? activeProduct.autonomy
                    : `${activeProduct.autonomy} ore`}
                </span>
              </div>
              <a className="pdf" href="#" target="_blank">
                Scarica la scheda tecnica
              </a>
            </motion.div>
          </AnimatePresence>

          <div className="tabs">
            {products.map((product, i) => (
              <div
                key={i}
                className={`tab ${i === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
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
              onClick={() => setActiveIndex(i)}
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
