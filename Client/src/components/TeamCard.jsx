const TeamCard = ({ teamName }) => {
  return (
    <div className="w-28 h-28 bg-gray-200 rounded-2xl relative hover:bg-gray-300">
      <h2 className="mt-4 px-2">{teamName}</h2>
      <button className="text-blue-500 items-center absolute bottom-2 right-0 left-0">
        Join
      </button>
    </div>
  );
};

export default TeamCard;
