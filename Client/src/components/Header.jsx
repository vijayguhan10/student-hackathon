const Header = () => (
  <header className="bg-zinc-50 text-gray p-4 flex justify-between items-center">
    <input
      type="text"
      placeholder="Search anything here..."
      className="bg-white text-gray px-4 py-2 rounded w-1/2 border border-gray-200  focus:outline-gray"
    />
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
