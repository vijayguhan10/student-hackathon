const EventCard = ({ title, description, date, fee }) => (
  <div className="bg-white p-4 shadow rounded-md">
    <img
      src="/path-to-thumbnail.png"
      alt="Event Thumbnail"
      className="w-full h-32 object-cover rounded-md"
    />
    <h3 className="text-lg font-bold mt-2">{title}</h3>
    <p className="text-gray-600 text-sm mt-1">{description}</p>
    <div className="flex justify-between mt-2">
      <span className="text-gray-500 text-sm">{date}</span>
      <span className="text-gray-500 text-sm">{fee}</span>
    </div>
    <button className="bg-yellow-500 text-white px-4 py-2 rounded mt-2 hover:bg-yellow-600">
      Register
    </button>
  </div>
);

export default EventCard;
