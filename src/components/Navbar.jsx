function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">
        🛒 ShopEasy
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>

      <div className="cart-count">
        🛍️ Cart ({cartCount})
      </div>
    </nav>
  );
}

export default Navbar;