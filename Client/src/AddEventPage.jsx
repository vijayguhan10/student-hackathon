import React, { useState } from "react";
import TeamCard from "./components/TeamCard";
import {
  ArrowUpTrayIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const AddEventPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [attendeesLimit, setAttendeesLimit] = useState(0);
  const [dateTime, setDateTime] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleRangeChange = (e) => {
    setAttendeesLimit(e.target.value);
  };

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  return (
    <div className="flex h-screen">
      <main className="flex-grow bg-gray-100">
        <div className="px-10 py-5">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 shadow rounded-3xl">
              <form>
                <div className="flex justify-between">
                  <h1 className="text-2xl font-bold mb-4">Add Event Details</h1>
                  <div className="flex gap-4">
                    <div className="rounded-full bg-gray-100 w-10 h-10 flex justify-center items-center">
                      <PencilIcon className="w-5 h-5" />
                    </div>

                    <div className="rounded-full bg-gray-100 w-10 h-10 flex justify-center items-center">
                      <TrashIcon className="w-5 h-5 text-red-500" />
                    </div>
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Event Name"
                  className="w-full bg-gray-50 text-gray-500 p-2 rounded-xl mt-4 mb-4 border border-solid border-gray-500 placeholder:text-gray-500 placeholder:pl-4"
                  required
                />
                <textarea
                  placeholder="Event Description"
                  className="w-full h-32 bg-gray-50 text-gray-500 p-2 rounded-xl mb-4 border border-solid border-gray-500 placeholder:text-gray-500 placeholder:pl-4"
                  required
                ></textarea>
                <div className="relative mb-4">
                  <input
                    type="datetime-local"
                    id="event-date-time"
                    onChange={handleDateTimeChange}
                    className={`w-full p-2 bg-gray-50 text-gray-500 rounded-xl border border-solid border-gray-500 ${
                      !dateTime ? "appearance-none text-transparent" : ""
                    }`}
                    required
                  />
                  {!dateTime && (
                    <label
                      htmlFor="event-date-time"
                      className="absolute left-2 top-2 text-gray-500 pointer-events-none ml-4"
                    >
                      Date & Time
                    </label>
                  )}
                </div>
                <div className="mb-4 flex justify-between w-full bg-gray-50 p-2 rounded-xl border border-solid border-gray-500">
                  <label className="mb-1 text-gray-500 ml-4">Mentorship</label>
                  <div className="flex h-7 bg-gray-200 rounded-md p-0.5 w-fit items-center">
                    <label className="cursor-pointer flex items-center">
                      <input
                        type="radio"
                        name="membership"
                        value="yes"
                        className="hidden peer"
                      />
                      <div className="peer-checked:bg-white w-20 h-5 ml-1 bg-gray-200 text-gray-500 rounded-md px-4 py-1 flex justify-center items-center">
                        Yes
                      </div>
                    </label>
                    <label className="cursor-pointer flex items-center">
                      <input
                        type="radio"
                        name="membership"
                        value="no"
                        className="hidden peer"
                      />
                      <div className="peer-checked:bg-white w-20 h-5 mr-1 bg-gray-200 text-gray-500 rounded-md px-4 py-1 flex justify-center items-center">
                        No
                      </div>
                    </label>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full text-gray-500 bg-gray-50 p-2 rounded-xl mb-4 border border-solid border-gray-500 placeholder:text-gray-500 placeholder:pl-4"
                  required
                />
                <input
                  type="number"
                  placeholder="Event Fee"
                  className="w-full bg-gray-50 text-gray-500 p-2 rounded-xl mb-4 border border-solid border-gray-500 placeholder:text-gray-500 placeholder:pl-4"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-400 text-sm font-bold text-black w-full p-2 rounded-xl mt-7 hover:bg-yellow-500"
                >
                  Post
                </button>
              </form>
            </div>

            <div className="bg-white p-6 shadow rounded-3xl">
              <div className="mb-6">
                <label
                  htmlFor="upload-image"
                  className="flex items-center justify-center w-full h-48 border-2 bg-gray-200 border-gray-200 rounded-2xl cursor-pointer hover:border-yellow-500"
                >
                  {selectedFile ? (
                    <span className="text-gray-600">{selectedFile.name}</span>
                  ) : (
                    <span className="text-gray-500 flex items-center justify-center">
                      <ArrowUpTrayIcon className="w-5 h-5 mr-2" />
                      Upload image
                    </span>
                  )}
                </label>
                <input
                  id="upload-image"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-bold">Attendees Limit</label>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={attendeesLimit}
                  className="w-full h-0.5 border-none appearance-none accent-yellow-300 outline-none"
                  style={{
                    background: `linear-gradient(to right, #facc15 ${
                      (attendeesLimit / 10000) * 100
                    }%, #e5e7eb ${(attendeesLimit / 10000) * 100}%)`,
                  }}
                  onChange={handleRangeChange}
                />
                <p className="text-center flex justify-between">
                  <div>0</div>
                  <div className="font-bold">{attendeesLimit}</div>
                  <div>10000</div>
                </p>
              </div>
              <div className="mb-0">
                <h2 className="font-bold mb-1">Join Team</h2>
                <div className="py-4 pr-4 w-full flex gap-4">
                  {["Dev-kings", "Code-masters", "Design-heroes"].map(
                    (team) => (
                      <TeamCard teamName={team} />
                    )
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="bg-yellow-400 text-sm font-bold text-black w-full p-2 rounded-xl mt-3 hover:bg-yellow-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddEventPage;
