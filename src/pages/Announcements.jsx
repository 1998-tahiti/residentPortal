import React from 'react';
import { MdCampaign, MdWaterDrop, MdCleaningServices, MdLocalShipping, MdEvent } from 'react-icons/md';
import { Header } from '../components';

const announcementsData = [
  {
    id: 1,
    title: 'Water Shut Off',
    category: 'Maintenance',
    date: 'May 31, 2026',
    time: '10:00 AM - 2:00 PM',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80',
    icon: <MdWaterDrop />,
    iconBg: '#E0F7FA',
    iconColor: '#06B6D4',
    tag: 'Important',
    tagBg: 'bg-red-100 text-red-600',
    desc: 'Water service will be temporarily shut off on Wednesday for scheduled maintenance. Please store water in advance if needed.',
  },
  {
    id: 2,
    title: 'Lobby Cleaning',
    category: 'Building Service',
    date: 'June 1, 2026',
    time: 'After 9:00 PM',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
    icon: <MdCleaningServices />,
    iconBg: '#ECFDF5',
    iconColor: '#10B981',
    tag: 'Scheduled',
    tagBg: 'bg-green-100 text-green-600',
    desc: 'The main lobby will be cleaned tonight after 9 PM. Please use the side entrance during cleaning hours.',
  },
  {
    id: 3,
    title: 'Package Room Update',
    category: 'Deliveries',
    date: 'June 2, 2026',
    time: 'All Day',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80',
    icon: <MdLocalShipping />,
    iconBg: '#FEF3C7',
    iconColor: '#F59E0B',
    tag: 'Reminder',
    tagBg: 'bg-yellow-100 text-yellow-600',
    desc: 'Please pick up packages within 72 hours of delivery to keep the package room clear for all residents.',
  },
  {
    id: 4,
    title: 'Community BBQ Night',
    category: 'Event',
    date: 'June 8, 2026',
    time: '6:00 PM - 8:00 PM',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    icon: <MdEvent />,
    iconBg: '#FCE7F3',
    iconColor: '#EC4899',
    tag: 'Upcoming',
    tagBg: 'bg-purple-100 text-purple-600',
    desc: 'Join neighbors for a community BBQ night on the rooftop. Food, drinks, and music will be available.',
  },
];

const Announcements = () => {
  return (
    <div className="mx-2 md:mx-6 mt-2 p-4 md:p-6 bg-white rounded-3xl">
      <Header category="Resident Services" title="Announcements" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {announcementsData.map((item) => (
          <div
            key={item.id}
            className="bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition"
          >
            <div className="flex gap-5">
              <img
                src={item.image}
                alt={item.title}
                className="w-40 h-36 rounded-2xl object-cover"
              />

              <div className="flex-1">
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-400 mt-1">{item.category}</p>
                  </div>

                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${item.tagBg}`}>
                    {item.tag}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-4">
                  {item.desc}
                </p>

                <div className="flex justify-between items-end mt-5">
                  <div className="flex items-center gap-3">
                    <div
                      style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                      className="text-2xl p-3 rounded-full"
                    >
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-600">{item.date}</p>
                      <p className="text-sm text-gray-400">{item.time}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="px-5 py-2 rounded-xl bg-cyan-500 text-white font-semibold hover:drop-shadow-xl"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;