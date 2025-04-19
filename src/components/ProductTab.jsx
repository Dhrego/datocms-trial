export default function ProductTab({
  i,
  product,
  activeIndex,
  setActiveIndex,
}) {
  return (
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
  );
}
