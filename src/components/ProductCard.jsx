function ProductCard({ product, addToCart }) {
  return (
    <div className="card">

      <img
        src={product.image}
        alt={product.name}
      />

      <div className="card-body">

        <h3>{product.name}</h3>

        <p className="category">
          {product.category}
        </p>

        <p className="rating">
          ⭐ {product.rating}
        </p>

        <h2>₹{product.price}</h2>

        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;