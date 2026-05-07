import { useCart } from "../../context/CartContext";
import "./CartPage.css";
import { FaTrash } from "react-icons/fa";
import paymentImg from "../../assets/payment.png";
export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  if (cartItems.length === 0) {
    return <p>Your cart is empty!</p>;
  }
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <div className="cart-page">
      <div className="cart-items">
        <h2>Shopping Cart</h2>

        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h3 className="item-name">{item.name}</h3>
            <div className="item-left">
              <div className="price-delete-wrapper">
                <p className="item-price">€{item.price}</p>
                <button
                  className="delete-icon-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >
                  <FaTrash />
                </button>
              </div>

              <div className="item-actions">
                <div className="button-holder">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="item-quantity">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div>
          <h5>Order Summary</h5>
          <div className="order-info">
            <p>Your Order</p>
            {cartItems.map((item) => (
              <p key={item.id}>
                {item.quantity} × €{item.price}
              </p>
            ))}
          </div>
        </div>
        <div className="total">
          <p>Total :</p>
          <h3>€{total.toFixed(2)}</h3>
        </div>
        <div className="discount">
          <p>Apply Discount Coupon</p>
          <input className="coupon" type="text" placeholder="XR4352T" />
        </div>
        <div className="checkout">
          <p>Continue to checkout</p>
          <button className="checkout-btn">→</button>
        </div>
        <div className="pay-cards">
          <img className="pay-image" src={paymentImg} alt="" />
        </div>
      </div>
    </div>
  );
}
