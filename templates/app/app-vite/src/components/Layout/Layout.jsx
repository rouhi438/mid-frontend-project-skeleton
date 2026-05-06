import { Link, Outlet } from "react-router-dom";
import hyfLogo from "../../assets/hyf.svg";
import { useAuth } from "../../context/AuthContext.jsx";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext.jsx";
import "./Layout.css";

export default function Layout() {
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  console.log(cartItems);
  return (
    <div className="Layout">
      <header>
        <nav>
          <div className="cart-holder">
            <Link to="/cart">
              <FaShoppingCart className="cart-icon" />
              {totalQuantity > 0 && (
                <span className="cart-quantity">{totalQuantity}</span>
              )}
            </Link>
          </div>
          <div className="logo-holder">
            <a
              href="https://www.hackyourfuture.dk/"
              target="_blank"
              className="link"
            >
              <img
                src={hyfLogo}
                alt="HackYourFuture logo"
                className="logo"
                width={200}
                style={{ padding: "20px" }}
              />
            </a>
            {/* Navigation links go here — e.g. link to event list, cart, login */}
          </div>
          <div className="menu-bar">
            <div className="link-bar">
              <Link to="/events" className="link">
                Events
              </Link>

              {user && (
                <>
                  <span>{user.email}</span>
                  <button onClick={logout}>Sign out</button>
                </>
              )}

              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
            {location.pathname === "/events" && (
              <div className="search-holder">
                <label htmlFor="search">Find Events</label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
              </div>
            )}
          </div>
        </nav>
      </header>

      <main>
        <Outlet context={{ searchQuery }} />
      </main>

      <footer>
        <p>© 2026 HYF Events Startup App</p>
      </footer>
    </div>
  );
}
