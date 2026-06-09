import React from 'react';
import { MdOutlinePlumbing, MdElectricalServices, MdOutlineCleaningServices } from 'react-icons/md';
import { FaTools } from 'react-icons/fa';

import { maintenanceData } from '../data/dummy';
import { Header } from '../components';

const statusColors = {
  Submitted: 'bg-orange-100 text-orange-600',
  Scheduled: 'bg-blue-100 text-blue-600',
  'In Progress': 'bg-purple-100 text-purple-600',
  Completed: 'bg-green-100 text-green-600',
};

const iconMap = {
  Plumbing: <MdOutlinePlumbing />,
  Electrical: <MdElectricalServices />,
  Cleaning: <MdOutlineCleaningServices />,
  Appliance: <FaTools />,
};

const MaintenanceBoard = () => {
  return (
    <div className="mx-2 md:mx-6 mt-2 p-4 md:p-6 bg-white rounded-3xl">
      <Header category="Resident Services" title="Maintenance Board" />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {maintenanceData.map((item) => (
              <div key={item.Id} className="bg-gray-50 rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex gap-4">
                  <img
                    src={item.Image}
                    alt={item.Title}
                    className="w-28 h-24 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-semibold text-lg">{item.Title}</h3>
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${statusColors[item.Status]}`}>
                        {item.Status}
                      </span>
                    </div>

                    <p className="text-sm text-gray-400 mt-1">
                      {item.Unit} • {item.Date}
                    </p>

                    <p className="text-sm text-gray-600 mt-2">
                      {item.Summary}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2 text-gray-500">
                        <span className="text-xl">{iconMap[item.Category]}</span>
                        <span className="text-sm">{item.Category}</span>
                      </div>

                      <p className="text-sm font-semibold text-gray-500">
                        {item.Time}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-5">Submit Maintenance Request</h2>

          <form className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-gray-500">Issue Title</label>
              <input
                type="text"
                placeholder="Ex: AC not cooling"
                className="w-full mt-1 p-3 rounded-xl border outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Category</label>
              <select className="w-full mt-1 p-3 rounded-xl border outline-none">
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Appliance</option>
                <option>Cleaning</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-500">Preferred Time</label>
              <input
                type="text"
                placeholder="Ex: Tomorrow 2pm-4pm"
                className="w-full mt-1 p-3 rounded-xl border outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Description</label>
              <textarea
                rows="5"
                placeholder="Describe the issue..."
                className="w-full mt-1 p-3 rounded-xl border outline-none resize-none"
              />
            </div>

            <button
              type="button"
              className="bg-cyan-500 text-white py-3 rounded-xl font-semibold hover:drop-shadow-xl"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceBoard;