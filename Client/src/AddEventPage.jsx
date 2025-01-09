import Header from "./components/Header";

const AddEventPage = () => (
  <div className="flex h-screen">
    <main className="flex-grow bg-gray-100">
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Add Event Details</h1>
        <div className="grid grid-cols-3 gap-6">
          <form className="col-span-2 bg-white p-6 shadow rounded-md">
            <input
              type="text"
              placeholder="Event Name"
              className="w-full bg-gray-100 p-2 rounded mb-4 border"
              required
            />
            <textarea
              placeholder="Event Description"
              className="w-full bg-gray-100 p-2 rounded mb-4 border"
              required
            ></textarea>
            <input
              type="datetime-local"
              className="w-full bg-gray-100 p-2 rounded mb-4 border"
              required
            />
            <div className="mb-4">
              <label className="block mb-1">Membership</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="membership"
                    value="yes"
                    className="mr-2"
                  />{" "}
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="membership"
                    value="no"
                    className="mr-2"
                  />{" "}
                  No
                </label>
              </div>
            </div>
            <input
              type="text"
              placeholder="Location"
              className="w-full bg-gray-100 p-2 rounded mb-4 border"
              required
            />
            <input
              type="number"
              placeholder="Event Fee"
              className="w-full bg-gray-100 p-2 rounded mb-4 border"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Post
            </button>
          </form>
          <div className="bg-white p-6 shadow rounded-md">
            <div className="mb-6">
              <label className="block mb-2 font-bold">Upload Image</label>
              <input type="file" className="w-full" />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-bold">Attendees Limit</label>
              <input type="range" min="0" max="10000" className="w-full" />
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">Teams</h2>
              {["Dev-kings", "Code-masters", "Tech-wizards"].map(
                (team, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded"
                  >
                    <span>{team}</span>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                      Join
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default AddEventPage;
