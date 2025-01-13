import { MapPinIcon } from "@heroicons/react/24/outline";

const EventCard = ({ title, description, location, fee }) => (
  <div className="bg-white p-4 shadow rounded-2xl">
    <img
      src="/path-to-thumbnail.png"
      alt="Event Thumbnail"
      className="w-full h-32 object-cover rounded-md"
    />
    <h3 className="text-lg font-bold mt-2">{title}</h3>
    <p className="text-gray-500 text-sm mt-1">{description}</p>
    <div className="flex justify-start items-center gap-2 mt-2">
      <div className="flex items-center gap-0.5">
        <MapPinIcon className="w-4 h-4 text-blue-500" />
        <div className="text-blue-500 text-sm">{location}</div>
      </div>
      <div className="font-bold text-lg">&#183;</div>
      <div className="text-gray-500 text-sm">{fee}</div>
    </div>
    <button className="bg-yellow-400 text-sm font-bold text-black px-4 py-2 w-full rounded-xl mt-2 hover:bg-yellow-500">
      Register
    </button>
  </div>
);

export default EventCard;
