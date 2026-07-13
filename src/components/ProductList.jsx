import ProductCard from "./ProductCard";

function ProductList({ products, addToCart }) {
  return (
    <div className="product-grid">

      {products.length === 0 ? (
        <h2>No Products Found</h2>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}

    </div>
  );
}

export default ProductList;
