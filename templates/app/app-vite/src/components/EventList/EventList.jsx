//import events from "../../data/events.js";
import EventCard from "../EventCard/EventCard.jsx";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import "./EventList.css";

// TODO: split each event below into its own EventCard component
// TODO: add a "Buy ticket" button to each event card
// TODO: replace the mock data import with a fetch call to GET /events

export default function EventList() {
  const { searchQuery } = useOutletContext();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/events")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setEvents(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredEvents = events?.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <ul className="event-list">
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))
      ) : (
        <p>No events found</p>
      )}
    </ul>
  );
}
