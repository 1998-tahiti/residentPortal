import React from 'react';
import { HiOutlineIdentification } from 'react-icons/hi';
import { BsPersonPlus, BsShieldCheck, BsCalendarCheck } from 'react-icons/bs';
import { MdAccessTime } from 'react-icons/md';
import { Header } from '../components';

const expectedArrivals = [
  {
    id: 1,
    name: 'Sarah Khan',
    type: 'Guest',
    date: 'June 3, 2026',
    time: '2:00 PM - 5:00 PM',
    status: 'Approved',
  },
  {
    id: 2,
    name: 'Delivery Access',
    type: 'Service',
    date: 'June 4, 2026',
    time: '10:00 AM - 12:00 PM',
    status: 'Pending',
  },
  {
    id: 3,
    name: 'Daniel Lee',
    type: 'Visitor',
    date: 'June 5, 2026',
    time: '6:00 PM - 9:00 PM',
    status: 'Approved',
  },
];

const statusColors = {
  Approved: 'bg-green-100 text-green-600',
  Pending: 'bg-yellow-100 text-yellow-600',
};

const ResidentAccess = () => {
  return (
    <div className="mx-2 md:mx-6 mt-2 p-4 md:p-6 bg-white rounded-3xl">
      <Header category="Resident Services" title="Resident Access" />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 xl:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="text-3xl text-cyan-500 bg-cyan-100 p-3 rounded-full">
              <HiOutlineIdentification />
            </div>

            <div>
              <h2 className="text-xl font-semibold">Resident Access Pass</h2>
              <p className="text-sm text-gray-400">Digital building access credential</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 flex flex-col items-center border">
            <div className="w-56 h-56 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center">
              <HiOutlineIdentification className="text-[170px] text-cyan-500" />
            </div>

            <p className="mt-5 font-semibold text-lg">Resident Access</p>
            <p className="text-sm text-gray-400">Michael • Unit 24F</p>

            <div className="mt-5 w-full bg-green-50 text-green-600 rounded-xl p-3 flex items-center gap-2 justify-center">
              <BsShieldCheck />
              <span className="font-semibold">Active Pass</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="bg-white rounded-xl p-4 border">
              <p className="text-gray-400 text-sm">Access Type</p>
              <p className="font-semibold mt-1">Resident</p>
            </div>

            <div className="bg-white rounded-xl p-4 border">
              <p className="text-gray-400 text-sm">Valid Until</p>
              <p className="font-semibold mt-1">Dec 31</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="text-3xl text-cyan-500 bg-cyan-100 p-3 rounded-full">
                <BsPersonPlus />
              </div>

              <div>
                <h2 className="text-xl font-semibold">Guest Registration</h2>
                <p className="text-sm text-gray-400">Register visitors and service providers</p>
              </div>
            </div>

            <form className="flex flex-col gap-4">
              <div>
                <label className="text-sm text-gray-500">Guest Name</label>
                <input
                  type="text"
                  placeholder="Ex: Sarah Khan"
                  className="w-full mt-1 p-3 rounded-xl border outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Guest Type</label>
                <select className="w-full mt-1 p-3 rounded-xl border outline-none">
                  <option>Guest</option>
                  <option>Family</option>
                  <option>Delivery</option>
                  <option>Service Provider</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-gray-500">Arrival Date</label>
                  <input
                    type="date"
                    className="w-full mt-1 p-3 rounded-xl border outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500">Arrival Time</label>
                  <input
                    type="time"
                    className="w-full mt-1 p-3 rounded-xl border outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-500">Notes</label>
                <textarea
                  rows="4"
                  placeholder="Ex: Allow access through front desk"
                  className="w-full mt-1 p-3 rounded-xl border outline-none resize-none"
                />
              </div>

              <button
                type="button"
                className="bg-cyan-500 text-white py-3 rounded-xl font-semibold hover:drop-shadow-xl"
              >
                Create Access Pass
              </button>
            </form>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="text-3xl text-cyan-500 bg-cyan-100 p-3 rounded-full">
                <HiOutlineIdentification />
              </div>

              <div>
                <h2 className="text-xl font-semibold">Guest Access Pass</h2>
                <p className="text-sm text-gray-400">Temporary visitor access</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border flex flex-col items-center">
              <div className="w-44 h-44 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center">
                <HiOutlineIdentification className="text-[130px] text-cyan-500" />
              </div>

              <p className="mt-4 font-semibold">Guest Access Pass</p>
              <p className="text-sm text-gray-400">Valid today until 8:00 PM</p>

              <button
                type="button"
                className="mt-5 bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:drop-shadow-xl"
              >
                Send Access Pass
              </button>
            </div>

            <div className="mt-5 bg-white rounded-2xl p-4 border">
              <div className="flex items-center gap-3">
                <MdAccessTime className="text-2xl text-cyan-500" />
                <div>
                  <p className="font-semibold">Pass Rules</p>
                  <p className="text-sm text-gray-400">
                    Each visitor pass can be used once and expires automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="text-3xl text-cyan-500 bg-cyan-100 p-3 rounded-full">
                <BsCalendarCheck />
              </div>

              <div>
                <h2 className="text-xl font-semibold">Expected Arrivals</h2>
                <p className="text-sm text-gray-400">
                  Expected guests, deliveries, and service providers
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {expectedArrivals.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-4 border">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-400 mt-1">{item.type}</p>
                    </div>

                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${statusColors[item.status]}`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-gray-500">{item.date}</p>
                    <p className="text-sm text-gray-400">{item.time}</p>
                  </div>

                  <button
                    type="button"
                    className="mt-4 w-full border border-cyan-500 text-cyan-500 py-2 rounded-xl font-semibold hover:bg-cyan-50"
                  >
                    View Pass
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentAccess;