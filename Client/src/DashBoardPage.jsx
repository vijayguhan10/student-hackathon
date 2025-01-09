import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import EventCard from "./components/EventCard";

const DashboardPage = () => (
  <div className="flex h-screen">
    <Sidebar />
    <main className="flex-grow bg-gray-100">
      <Header title="Events" />
      <div className="p-6">
        <button className="mb-4 text-blue-500 hover:underline">
          &larr; Back
        </button>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white p-6 shadow rounded-md">
            <img
              src="/path-to-main-event-thumbnail.png"
              alt="Event"
              className="w-full h-64 object-cover rounded-md"
            />
            <h1 className="text-2xl font-bold mt-4">
              Hackathon 2024: Innovate & Inspire
            </h1>
            <p className="text-gray-600 text-sm mt-2">
              Join us for a 48-hour innovation sprint where creativity meets
              technology.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-md">
            <h2 className="text-lg font-bold mb-4">Eligibility</h2>
            <p className="text-sm mb-2">
              Open to: All Year 3 and Year 4 students.
            </p>
            <p className="text-sm mb-2">Location: 2gthr</p>
            <p className="text-sm mb-2">Timings: Sat, 10 AM</p>
            <div className="my-4">
              <span className="text-sm font-bold">Mentorship:</span> Available
              upon request.
              <button className="block mt-2 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                Request
              </button>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <img
                src="/path-to-attendee-thumbnail.png"
                alt="Attendees"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm">+500</span>
            </div>
            <button className="bg-yellow-500 text-white w-full px-4 py-2 rounded mt-4 hover:bg-yellow-600">
              Join Now
            </button>
          </div>
        </div>
        <h1 className="text-2xl font-bold mt-8 mb-4">Upcoming Workshops</h1>
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

export default DashboardPage;
