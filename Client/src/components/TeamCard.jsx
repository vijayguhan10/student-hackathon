const TeamCard = ({ teamName }) => {
  return (
    <div className="w-32 h-36 bg-gray-200 rounded-2xl relative hover:bg-gray-300">
      <div className="rounded-full w-10 h-10 bg-gray-500 mt-2 ml-2">
        <img alt="logo"/>
      </div>
      <h2 className="mt-4 text-md text-black px-2">{teamName}</h2>
      <button className="text-blue-700 items-center absolute bottom-2 right-0 left-0">
        Join
      </button>
    </div>
  );
};

export default TeamCard;
