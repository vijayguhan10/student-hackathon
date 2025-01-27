import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";

const Header = () => (
  <header className="bg-white text-gray p-4 flex justify-between items-center">
    <div className="relative w-1/2">
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-10 top-1/2 transform -translate-y-1/2" />
      <input
        type="text"
        placeholder="Search anything here..."
        className="bg-white text-gray ml-6 px-4 py-2 rounded-2xl w-full border border-gray-400 pl-10"
      />
    </div>
    <div className="flex items-center gap-32">
      <button className="border text-sm font-bold border-blue-700 rounded-full px-2  py-1">
        Host
      </button>
      <div className="flex items-center gap-12">
        <button>
          <BellIcon className="w-5 h-5 text-black" />
        </button>
        <img alt="User Avatar" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  </header>
);

export default Header;
