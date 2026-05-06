// TODO: display at least date, time, venue, city, and description for one event
// TODO: use useParams() to get the event id from the URL
// TODO: fetch the event from GET /events/:id instead of using mock data
import { Link } from "react-router-dom";
import "./EventDetail.css";
import { useState } from "react";
export default function EventDetail() {
  const event = {
    name: "React Copenhagen Conference 2026",
    date: "2026-04-15",
    time: "09:00",
    venue: "Copenhagen Concert Hall",
    city: "Copenhagen",
    description:
      "The largest React conference in Scandinavia. Two tracks covering the latest in React 19, Server Components, and the evolving frontend ecosystem. Keynotes from core React team members and community leaders.",
    price: 149,
    ticketsAvailable: 0,
    totalTickets: 800,
    category: "Conference",
  };
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="event-detail-container">
      <div className="detail-header">
        <Link to="/events" className="back-btn">
          ← Back to events
        </Link>
        <div className="quantity-holder">
          <button
            className="minus"
            type="button"
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <span className="ticket-quantity-">{quantity}</span>
          <button
            className="plus"
            type="button"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
          <button
            onClick={() => {
              for (let i = 0; i < quantity; i++) {
                addToCart(event);
              }
            }}
            disabled={event.ticketsAvailable === 0}
            style={{ fontSize: "13px" }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <h1>{event.name}</h1>

      {/* two columns */}
      <div className="event-detail-top">
        <div className="event-detail-left">
          <p>
            <strong>Date:</strong> {event.date}
          </p>
          <p>
            <strong>Time:</strong> {event.time}
          </p>
          <p>
            <strong>Venue:</strong> {event.venue}
          </p>
          <p>
            <strong>City:</strong> {event.city}
          </p>
        </div>

        <div className="event-detail-right">
          <p>
            <strong>Category:</strong> {event.category}
          </p>
          <p>
            <strong>Price:</strong> €{event.price}
          </p>
          <p>
            <strong>Tickets:</strong>{" "}
            {event.ticketsAvailable === 0
              ? "Sold out"
              : `${event.ticketsAvailable} tickets left`}
          </p>
          <p>
            <strong>Total seats:</strong> {event.totalTickets}
          </p>
        </div>
      </div>

      {/* description bottom */}
      <div className="event-detail-description">
        <h3>Description</h3>
        <p>{event.description}</p>
      </div>
    </div>
  );
}
