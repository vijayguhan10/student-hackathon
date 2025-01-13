const ReportCard = ({ title, description, attendees }) => (
  <div className="bg-white p-4 shadow rounded-xl">
    <img
      src="/path-to-thumbnail.png"
      alt="Event Thumbnail"
      className="w-full h-32 object-cover rounded-md"
    />
    <h3 className="text-lg font-bold mt-2">{title}</h3>
    <p className="text-gray-500 text-sm mt-1">{description}</p>
    <span className="block text-gray-500 text-sm mt-2">
      {attendees} attendees
    </span>
    <button className="bg-yellow-400 text-sm font-bold text-black w-full px-4 py-2 rounded-xl mt-2 hover:bg-yellow-500">
      View Detail
    </button>
  </div>
);

export default ReportCard;
