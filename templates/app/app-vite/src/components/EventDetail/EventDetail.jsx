// TODO: display at least date, time, venue, city, and description for one event
// TODO: use useParams() to get the event id from the URL
// TODO: fetch the event from GET /events/:id instead of using mock data
import { Link } from "react-router-dom";
import "./EventDetail.css";
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

  return (
    <div className="event-detail-container">
      <Link to="/events" className="back-btn">
        ← Back to events
      </Link>
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
