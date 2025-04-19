import ProductTab from "./ProductTab";

export default function ProductTabs({
  products,
  activeIndex,
  setActiveIndex,
  variant = "",
}) {
  return (
    <div className={`tabs ${variant}`}>
      {products.map((product, index) => (
        <ProductTab
          key={index}
          i={index}
          product={product}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
}
