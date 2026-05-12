import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useOrder } from "../../context/OrderContext";
import { useAuth } from "../../context/AuthContext";
import "./OrdersPage.css";

export function OrdersPage() {
  const { getUserOrders, loading, error } = useOrder();
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      setOrders(getUserOrders());
    }
  }, [user, getUserOrders]);

  if (!user) {
    return <div className="orders-container">Please login to view orders.</div>;
  }
  if (loading) return <div className="orders-container">Loading...</div>;

  if (error) return <div className="order-container error">{error}</div>;

  if (orders.length === 0) {
    return (
      <div className="orders-container empty">
        <h2>No order yet</h2>
        <Link to="/events">Start shopping</Link>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <h2>My orders</h2>
      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <div className="order-header">
            <span>Order #{order.id}</span>
            <span>{new Date(order.date).toLocaleString()}</span>
          </div>
          <div className="order-items-list">
            {order.items.map((item) => (
              <div key={item.id} className="order-item-line">
                <Link to={`/events/${item.id}`} className="event-link">
                  {item.name}
                </Link>
                <span>
                  {item.quantity} * €{item.price}
                </span>
              </div>
            ))}
          </div>
          <div className="order-footer">
            <strong> Total: 4{order.total.toFixed(2)}</strong>
            <span className="order-status">{order.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
