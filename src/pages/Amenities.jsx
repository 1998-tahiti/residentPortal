import React from 'react';
import {
  MdPool,
  MdFitnessCenter,
  MdOutlineEventSeat,
  MdSportsTennis,
  MdSelfImprovement,
  MdSpa,
  MdWhatshot,
  MdWeekend,
  MdSportsEsports,
  MdGroups,
  MdCasino,
  MdLandscape,
  MdPhotoCamera,
  MdMusicNote,
} from 'react-icons/md';
import { BsCalendarCheck, BsPeople, BsClock, BsStars } from 'react-icons/bs';
import { Header } from '../components';
import controlroom from '../data/controlroom.png';
import pickleball from '../data/pickleball.png';
import bar from '../data/bar.png';
import gym from '../data/gym.png';
import pool from '../data/pool.png';
import lounge from '../data/lounge.png';
import gameroom from '../data/gameroom.png';

const amenityData = [
  {
    id: 1,
    name: 'The Atlanta',
    category: 'Pool Deck',
    desc: 'A serene pool deck with lounge chairs, seating areas, and wide downtown views.',
    image: pool,
    status: 'Available Today',
    icon: <MdPool />,
  },
  {
    id: 2,
    name: 'Power House',
    category: 'Fitness',
    desc: 'A two-floor fitness center with cardio, strength, and performance training.',
    image: gym,
    status: 'Open',
    icon: <MdFitnessCenter />,
  },
  {
    id: 3,
    name: 'Match City',
    category: 'Sports',
    desc: 'A pickleball court designed for competitive play and casual matches alike.',
    image: pickleball,
    status: '2 Slots Left',
    icon: <MdSportsTennis />,
  },
  {
    id: 4,
    name: 'The Monroe Lounge',
    category: 'Lounge',
    desc: 'An elegant indoor lounge with refined bar seating and year-round skyline views.',
    image: lounge,
    status: 'Available',
    icon: <MdOutlineEventSeat />,
  },
  {
    id: 5,
    name: 'The Monroe Podcasts',
    category: 'Creative',
    desc: 'A private suite for recording podcasts, interviews, and digital content.',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=80',
    status: 'Reserve Required',
    icon: <BsStars />,
  },
  {
    id: 6,
    name: 'The Monroe Study',
    category: 'Coworking',
    desc: 'Dedicated coworking seating with high-speed connectivity.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80',
    status: 'Open Seating',
    icon: <BsPeople />,
  },
  {
    id: 7,
    name: 'The Monroe Retreat',
    category: 'Wellness',
    desc: 'A meditation and colored-LED-light chromotherapy room designed for reflection and relaxation.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80',
    status: 'Available',
    icon: <MdSpa />,
  },
  {
    id: 8,
    name: 'The Monroe Spa',
    category: 'Wellness',
    desc: 'A Himalayan pink salt room with a calming, mineral-rich environment for wellness.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=700&q=80',
    status: 'Available',
    icon: <MdSpa />,
  },
  {
    id: 9,
    name: 'The Monroe Sauna',
    category: 'Recovery',
    desc: 'Traditional and infrared saunas provide soothing heat to ease tension and restore energy.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=700&q=80',
    status: '2 Slots Left',
    icon: <MdWhatshot />,
  },
  {
    id: 10,
    name: 'The Monroe Club',
    category: 'Social',
    desc: 'A social space with sports bar seating, billiards, board games, and poker tables.',
    image: bar,
    status: 'Available',
    icon: <MdGroups />,
  },
];

const myReservations = [
  {
    id: 1,
    amenity: 'Matchbox',
    date: 'June 4',
    time: '6:00 PM - 7:00 PM',
    status: 'Confirmed',
  },
  {
    id: 2,
    amenity: 'Podcast Suite',
    date: 'June 7',
    time: '2:00 PM - 3:30 PM',
    status: 'Pending',
  },
];

const Amenities = () => {
  return (
    <div className="mx-2 md:mx-6 mt-2 p-4 md:p-6 bg-white rounded-3xl">
      <Header category="Resident Services" title="Amenities" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
        <div className="bg-cyan-50 rounded-2xl p-5">
          <p className="text-3xl font-bold text-cyan-500">22</p>
          <p className="text-gray-500 mt-1">Amenities</p>
        </div>

        <div className="bg-green-50 rounded-2xl p-5">
          <p className="text-3xl font-bold text-green-500">14</p>
          <p className="text-gray-500 mt-1">Available Today</p>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5">
          <p className="text-3xl font-bold text-orange-500">2</p>
          <p className="text-gray-500 mt-1">My Reservations</p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5">
          <p className="text-3xl font-bold text-purple-500">1</p>
          <p className="text-gray-500 mt-1">Waitlist</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold">Explore Amenities</h2>

            <select className="border rounded-xl px-4 py-2 outline-none text-gray-500">
              <option>All Amenities</option>
              <option>Wellness</option>
              <option>Fitness</option>
              <option>Sports</option>
              <option>Recovery</option>
              <option>Social</option>
              <option>Creative</option>
              <option>Outdoor</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {amenityData.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-44 object-cover"
                />

                <div className="p-5">
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-400 mt-1">{item.category}</p>
                    </div>

                    <div className="text-2xl text-cyan-500 bg-cyan-100 p-3 rounded-full">
                      {item.icon}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-4">{item.desc}</p>

                  <div className="flex justify-between items-center mt-5">
                    <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600 font-semibold">
                      {item.status}
                    </span>

                    <button
                      type="button"
                      className="bg-cyan-500 text-white px-5 py-2 rounded-xl font-semibold hover:drop-shadow-xl"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="text-3xl text-cyan-500 bg-cyan-100 p-3 rounded-full">
                <BsCalendarCheck />
              </div>

              <div>
                <h2 className="text-xl font-semibold">Reserve Amenity</h2>
                <p className="text-sm text-gray-400">Book a space for your visit</p>
              </div>
            </div>

            <form className="flex flex-col gap-4">
              <div>
                <label className="text-sm text-gray-500">Amenity</label>
                <select className="w-full mt-1 p-3 rounded-xl border outline-none">
                  {amenityData.map((item) => (
                    <option key={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-500">Date</label>
                <input
                  type="date"
                  className="w-full mt-1 p-3 rounded-xl border outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Time Slot</label>
                <select className="w-full mt-1 p-3 rounded-xl border outline-none">
                  <option>9:00 AM - 10:00 AM</option>
                  <option>12:00 PM - 1:00 PM</option>
                  <option>3:00 PM - 4:00 PM</option>
                  <option>6:00 PM - 7:00 PM</option>
                  <option>8:00 PM - 9:00 PM</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-500">Guests</label>
                <input
                  type="number"
                  placeholder="Ex: 2"
                  className="w-full mt-1 p-3 rounded-xl border outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Notes</label>
                <textarea
                  rows="4"
                  placeholder="Any special request?"
                  className="w-full mt-1 p-3 rounded-xl border outline-none resize-none"
                />
              </div>

              <button
                type="button"
                className="bg-cyan-500 text-white py-3 rounded-xl font-semibold hover:drop-shadow-xl"
              >
                Confirm Reservation
              </button>
            </form>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-semibold mb-5">My Reservations</h2>

            {myReservations.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-4 border mb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{item.amenity}</p>
                    <p className="text-sm text-gray-400 mt-1">
                      {item.date} • {item.time}
                    </p>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600 font-semibold">
                    {item.status}
                  </span>
                </div>

                <div className="mt-4 flex gap-3">
                  <button
                    type="button"
                    className="flex-1 border border-cyan-500 text-cyan-500 py-2 rounded-xl font-semibold hover:bg-cyan-50"
                  >
                    Modify
                  </button>

                  <button
                    type="button"
                    className="flex-1 border border-red-400 text-red-400 py-2 rounded-xl font-semibold hover:bg-red-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-4 bg-cyan-50 rounded-xl p-4 flex gap-3">
              <BsClock className="text-2xl text-cyan-500" />
              <p className="text-sm text-gray-500">
                Some amenities require approval before the reservation is confirmed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;