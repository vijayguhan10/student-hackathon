import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Header = () => (
  <header className="bg-white text-gray p-4 flex justify-between items-center">
    <div className="relative w-1/2">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search anything here..."
        className="bg-white text-gray px-4 py-2 rounded-2xl w-full border border-gray-200 focus:outline-gray pl-10"
      />
    </div>
    <div className="flex items-center space-x-4">
      <span>Host</span>
      <img
        src="/path-to-user-avatar.png"
        alt="User Avatar"
        className="w-8 h-8 rounded-full"
      />
    </div>
  </header>
);

export default Header;
