import EventCard from "./components/EventCard";
import { Link } from "react-router-dom";

const EventsPage = () => (
  <div className="flex h-screen">
    <main className="flex-grow bg-gray-100">
      <div className="px-10 py-8">
        <div className="flex space-x-4 mb-8">
          <Link to="/events/addevent">
            <button className="bg-white font-bold text-gray-500 border solid border-gray-500 py-3 px-8 rounded-xl hover:bg-gray-200">
              + Event
            </button>
          </Link>
          <button className="bg-white font-bold text-gray-500 border solid border-gray-500 py-3 px-8 rounded-xl hover:bg-gray-200">
            + Hackathon
          </button>
          <button className="bg-white font-bold text-gray-500 border solid border-gray-500 py-3 px-8 rounded-xl hover:bg-gray-200">
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
              location={`2gthr`}
              fee={`Free`}
            />
          ))}
        </div>
      </div>
    </main>
  </div>
);

export default EventsPage;
