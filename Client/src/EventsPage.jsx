import Header from "./components/Header";
import EventCard from "./components/EventCard";
import { Link } from "react-router-dom";

const EventsPage = () => (
  <div className="flex h-screen">
    <main className="flex-grow bg-gray-100">
      <Header title="Events" />
      <div className="p-6">
        <div className="flex space-x-4 mb-4">
          <Link to="/events/addevent">
            <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
              + Event
            </button>
          </Link>
          <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
            + Hackathon
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
            + Internship
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-4">Upcoming Workshops</h1>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((_, idx) => (
            <EventCard
              key={idx}
              title={`Hackathon 2024: Innovate & Inspire`}
              description={`Join us for a 48-hour innovation sprint where creativity meets technology.`}
              date={`2gthr`}
              fee={`Free`}
            />
          ))}
        </div>
      </div>
    </main>
  </div>
);

export default EventsPage;
