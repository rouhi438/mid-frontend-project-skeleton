import "./EventCard.css";
import { Link } from "react-router-dom";
export default function EventCard({ event }) {
  return (
    <li className="list-item">
      <h2 className="event-title">{event.name}</h2>

      <p>
        <strong>Date & Time :</strong>
        {event.date} at {event.time}
      </p>

      <p>
        <strong>Location :</strong>
        {event.venue}, {event.city}
      </p>

      <p>
        <strong>Category :</strong>
        {event.category}
      </p>

      <p>
        <strong>Price :</strong>{" "}
        {event.price === 0 ? "Free" : `€${event.price}`}
      </p>

      <p>
        {" "}
        <strong>Tickets :</strong>
        {event.ticketsAvailable === 0
          ? "Sold out"
          : `${event.ticketsAvailable} tickets left`}
      </p>
      <div className="btns">
        <button type="button">Buy Ticket</button>
        <Link to={`/events/${event.id}`} className="details-btn">
          Event Details
        </Link>
      </div>
    </li>
  );
}
