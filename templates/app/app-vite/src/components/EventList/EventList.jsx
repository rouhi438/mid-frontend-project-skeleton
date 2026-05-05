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

  const [page, setPage] = useState(1);
  const [limit] = useState(20);

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(
      `http://localhost:3001/events?q=${searchQuery}&_page=${page}&_limit=${limit}`,
    )
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
  }, [searchQuery, page]);
  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="page-change">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>

        <span>Page {page}</span>

        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
      <ul className="event-list">
        {events.length > 0 ? (
          events.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p>No events found</p>
        )}
      </ul>
    </>
  );
}
