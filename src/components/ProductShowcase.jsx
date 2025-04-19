import { useState, useEffect, act } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./ProductShowcase.css";
// import ProductTab from "./ProductTab";
import ProductTabs from "./ProductTabs";

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
              initial={{ opacity: 0, y: isMobile ? 0 : -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: isMobile ? 0 : -30 }}
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
              initial={{ opacity: 0, y: isMobile ? 0 : -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: isMobile ? 0 : -30 }}
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
          <ProductTabs
            products={products}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
        <ProductTabs
          products={products}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          variant="mobile"
        />
      </div>
    </div>
  );
}
