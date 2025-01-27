import EventCard from "./components/EventCard";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const DashboardPage = () => (
  <div className="rounded-l-3xl">
    <main className=" rounded-l-3xl">
      <div className="py-6 rounded-l-3xl px">
        
        <div className="grid grid-cols-2  gap-6">
          <div className="col-span-1 bg-white p-6 shadow rounded-3xl">
            <img
              src="/assets/thumb1.jpg"
              alt="Event"
              className="w-full h-64 object-cover rounded-md"
            />
            <h1 className="text-2xl font-bold mt-4">
              Hackathon 2024: Innovate & Inspire
            </h1>
            <p className="text-gray-500 text-md mt-2">
              Join us for a 48-hour innovation sprint where creativity meets
              technology.
            </p>
          </div>
          <div className="bg-white  p-6 shadow rounded-3xl">
            <h2 className="text-lg font-bold mb-2">Eligibility</h2>
            <p className="text-sm mb-2 text-gray-500">
              Open to: All Year 3 and Year 4 students.
            </p>
            <div className="flex justify-start gap-8">
              <div>
                <h2 className="text-lg font-bold mb-2">Location</h2>
                <p className="text-sm mb-2 text-gray-500">2gthr</p>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-2">Timings</h2>
                <p className="text-sm mb-2 text-gray-500">Sat, 10 AM</p>
              </div>
            </div>
            <div className="my-4">
              <h2 className="text-lg font-bold ">Mentorship</h2>
              <div className="flex items-end gap-4">
                <p className="text-sm mb-2 text-gray-500">
                  Available upon request.
                </p>
                <button className="block mt-2 bg-gray-200 px-4 py-2 text-sm rounded-lg hover:bg-gray-300">
                  Request
                </button>
              </div>
            </div>
            <div className="my-4">
              <h2 className="text-lg font-bold ">Attendees</h2>
              <div className="flex items-center gap-4">
                <img
                  src="/path-to-attendee-thumbnail.png"
                  alt="Attendees"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm">+500</span>
              </div>
            </div>
            <button className="bg-yellow-400 text-sm font-bold text-black w-full px-4 py-2 rounded-xl mt-8 hover:bg-yellow-500">
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
