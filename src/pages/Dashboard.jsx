import React, { useEffect, useState  } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { FiPackage } from 'react-icons/fi';
import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import logo from '../data/logo.png';
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import { useNavigate } from 'react-router-dom';
import controlroom from '../data/controlroom.png';
import pickleball from '../data/pickleball.png';
import bar from '../data/bar.png';
import gym from '../data/gym.png';
import pool from '../data/pool.png';
import lounge from '../data/lounge.png';
import gameroom from '../data/gameroom.png';
import building1 from '../data/building1.png';
import building2 from '../data/building2.png';
import building3 from '../data/building3.png';
import building4 from '../data/building4.png';
import building5 from '../data/building5.png';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: 'Time', value: 'Id' }}
      style={{ border: 'none', color: currentMode === 'Dark' && 'white' }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Dashboard = () => {
  const { currentColor, currentMode } = useStateContext();
  const navigate = useNavigate();
  const [activeAnnouncement, setActiveAnnouncement] = useState(0);
  const [activeCommunity, setActiveCommunity] = useState(0);
  const [activeAmenity, setActiveAmenity] = useState(0);
  const [activeBuilding, setActiveBuilding] = useState(0);

  const buildingSlides = [
    building1,
    building2,
    building3,
    building4,
    building5,
  ];


  const amenitySlides = [
    {
      title: 'Rooftop Pool',
      desc: 'Relax, recharge, and enjoy resort-style living without leaving The Monroe.',
      image: pool,
    },
    {
      title: 'Fitness Center',
      desc: 'Use our gym and training spaces for cardio, strength, and daily wellness.',
      image: gym,
    },
    {
      title: 'Pickleball Court',
      desc: 'Book the court for friendly matches, competitive play, or weekend fun.',
      image: pickleball,
    },
    {
      title: 'Resident Lounge',
      desc: 'Meet neighbors, host guests, or unwind in comfortable shared spaces.',
      image: lounge,
    },
    {
      title: 'Game Room',
      desc: 'Enjoy gaming, simulators, and entertainment spaces designed for residents.',
      image: gameroom,
    },
    {
      title: 'Control Room',
      desc: 'A dedicated digital gaming room with seating for players and spectators.',
      image: controlroom,
    },
    {
      title: 'The Club',
      desc: 'Enjoy sports bar seating, billiards, board games, and social nights.',
      image: bar,
    },
  ];

  const communitySlides = [
    {
      title: 'Resident Social Nights',
      desc: 'Meet neighbors, make connections, and enjoy a vibrant community atmosphere.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Rooftop Gatherings',
      desc: 'Take in skyline views while enjoying seasonal events and celebrations.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Community Fitness',
      desc: 'Stay active through group workouts, wellness challenges, and healthy living.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Movie & Game Nights',
      desc: 'Enjoy entertainment events designed to bring residents together.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Holiday Celebrations',
      desc: 'Celebrate special occasions with themed community events throughout the year.',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const announcements = [
    {
      title: 'Water Shut Off',
      desc: 'Water service will be temporarily shut off on Wednesday from 10am to 2pm.',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Lobby Cleaning',
      desc: 'The main lobby will be cleaned tonight after 9pm.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Package Room Update',
      desc: 'Please pick up packages within 3 days of delivery.',
      image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Community BBQ Night',
      desc: 'Join neighbors on the rooftop for food, drinks, and live music this Saturday.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Garage Cleaning',
      desc: 'The parking garage will be cleaned on Friday. Please move vehicles before 8 AM.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAnnouncement((prev) =>
        prev >= announcements.length - 2 ? 0 : prev + 2
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [announcements.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAmenity((prev) =>
        prev >= amenitySlides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [amenitySlides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCommunity((prev) =>
        prev >= communitySlides.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [communitySlides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBuilding((prev) =>
        prev >= buildingSlides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [buildingSlides.length]);

  return (
    <div className="mt-6 w-full px-2">
      <div className="mt-6 w-full px-2">
        <div className="m-3 rounded-[2rem] overflow-hidden shadow-sm relative h-[170px]">

          {/* Building Background */}
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
            alt="Building"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-end px-10 pb-8">
            <div>
              <div className="flex items-center gap-4">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-14 h-14 object-contain"
                />

                <h1
                  className="text-5xl text-white tracking-wide"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    textShadow: `
                      0 2px 4px rgba(0,0,0,0.9),
                      0 4px 12px rgba(0,0,0,0.7),
                      0 0 18px rgba(200,255,255,0.55),
                      0 0 30px rgba(180,245,255,0.35)
                    `,
                  }}
                >
                  The Monroe Ledger
                </h1>
              </div>

              <p
                className="text-white/90 text-sm mt-3 ml-[72px]"
                style={{
                  textShadow: `
                    0 1px 3px rgba(0,0,0,0.9),
                    0 0 10px rgba(200,255,255,0.35)
                  `,
                }}
              >
                Manage rent, packages, reservations, maintenance requests,
                events and community updates.
              </p>
            </div>
          </div>
        </div>
</div>

      <div className="flex flex-wrap lg:flex-nowrap justify-start w-full">
        <div className="flex flex-1 m-3 flex-wrap justify-start gap-4 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg flex-1 min-w-[180px] p-3 pt-5 rounded-2xl"
            >
              <button
                type="button"
                onClick={() => navigate(item.link)}
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-3 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>

              <p className="mt-3 text-2xl font-bold">
                {item.amount}
              </p>

              <p className="text-sm text-gray-400 mt-1">
                {item.title}
              </p>

              {item.ongoing && (
                <div className="mt-2">
                  <p className="text-xs text-gray-400">
                    {item.ongoing}
                  </p>

                  <p className="text-xs text-gray-400">
                    {item.scheduled}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl m-3 mt-3 p-6">
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📢</span>
                <p className="text-xl font-semibold">Announcements</p>
              </div>

              <button
                type="button"
                onClick={() => navigate('/announcements')}
                style={{ color: currentColor }}
                className="font-semibold text-sm"
              >
                View all
              </button>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(calc(-${activeAnnouncement * 50}% - ${activeAnnouncement * 8}px))`,
                }}
              >
                {announcements.map((item) => (
                  <div
                    key={item.title}
                    className="min-w-[280px] sm:min-w-[320px] md:min-w-[48%] bg-gray-50 rounded-2xl p-3 flex gap-3 shadow-sm border border-gray-100"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-28 sm:w-40 h-28 rounded-xl object-cover flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-lg">{item.title}</p>
                      <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl m-3 mt-7 p-6">
  <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div
          className="rounded-3xl p-6 border"
          style={{ backgroundColor: '#EEF2F6', borderColor: '#DCE3EA' }}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase">
                Resident Account
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                Rent Status
              </h2>

              <p className="text-gray-500 mt-1">
                June payment is currently overdue
              </p>
            </div>

            <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
              Past Due
            </div>
          </div>

          <div className="mt-6 bg-white rounded-2xl p-5 border border-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Amount Due</p>
                <p className="text-4xl font-bold text-gray-800">$3,420</p>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500">Due Date</p>
                <p className="font-semibold text-gray-800">June 1, 2026</p>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Payment Progress</span>
                <span className="font-semibold text-red-500">0%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-red-400 h-2.5 rounded-full w-0"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <p className="text-xs text-gray-500">Unit</p>
              <p className="font-semibold text-lg">15B</p>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <p className="text-xs text-gray-500">Lease Ends</p>
              <p className="font-semibold text-lg">May 2027</p>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <p className="text-xs text-gray-500">Occupants</p>
              <p className="font-semibold text-lg">2</p>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <p className="text-xs text-gray-500">Parking</p>
              <p className="font-semibold text-lg">Assigned</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/rent')}
            style={{ backgroundColor: currentColor }}
            className="mt-5 px-6 py-2 rounded-xl text-white font-semibold hover:drop-shadow-xl"
          >
            Pay Now
          </button>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl p-6 min-h-[360px] shadow-sm border border-gray-100">
          <p className="text-sm font-semibold text-gray-400 uppercase">Daily Overview</p>
          <h2 className="text-2xl font-bold mt-2">Today's Building Status</h2>
          <p className="text-gray-400 mt-1">Live updates from around The Monroe.</p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-cyan-50 rounded-2xl p-4 border border-cyan-100">
              <p className="text-2xl">✓</p>
              <p className="font-semibold mt-2">Concierge</p>
              <p className="text-sm text-gray-400">Available</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
              <p className="text-2xl font-bold">5</p>
              <p className="font-semibold mt-2">Packages</p>
              <p className="text-sm text-gray-400">Ready</p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100">
              <p className="text-2xl font-bold">1</p>
              <p className="font-semibold mt-2">Event</p>
              <p className="text-sm text-gray-400">Tonight</p>
            </div>

            <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
              <p className="text-2xl">✓</p>
              <p className="font-semibold mt-2">Creator Suite</p>
              <p className="text-sm text-gray-400">Available</p>
            </div>
          </div>

          <div className="mt-4 bg-gray-50 rounded-2xl p-4 flex justify-between items-center">
            <div>
              <p className="font-semibold">Gym Open</p>
              <p className="text-sm text-gray-400">Open until 11:00 PM</p>
            </div>

            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl p-6 min-h-[360px] shadow-sm border border-gray-100">
          <p className="font-semibold text-xl">Renters Insurance</p>

          <div className="flex items-center justify-between mt-6">
            <div>
              <p className="text-4xl font-bold">86%</p>
              <p className="text-gray-400">Covered Residents</p>

              <p className="text-3xl font-bold mt-6">14</p>
              <p className="text-gray-400">Missing Proof</p>
            </div>

            <div className="relative w-32 h-32 rounded-full bg-[conic-gradient(#06b6d4_0%_60%,#22c55e_60%_85%,#f97316_85%_100%)] flex items-center justify-center">
              <div className="w-20 h-20 bg-white dark:bg-secondary-dark-bg rounded-full flex items-center justify-center">
                <p className="text-xl font-bold">100%</p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Personal Property</p>
              <p className="font-semibold">60%</p>
            </div>

            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Liability</p>
              <p className="font-semibold">25%</p>
            </div>

            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Additional Living</p>
              <p className="font-semibold">15%</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/renters-insurance')}
            style={{ backgroundColor: currentColor }}
            className="mt-6 text-white px-5 py-2 rounded-xl font-semibold hover:drop-shadow-xl"
          >
            Review Policies
          </button>
        </div>
      </div>
      </div>
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl m-3 mt-10 p-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-center">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeAmenity * 100}%)` }}
            >
              {amenitySlides.map((item) => (
                <div key={item.title} className="min-w-full relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[450px] object-cover rounded-2xl"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl">
                    <p className="text-white text-2xl font-semibold">{item.title}</p>
                    <p className="text-gray-200 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 xl:p-8">
            <p className="text-sm font-semibold text-gray-400 uppercase">
              The Monroe Amenities
            </p>

            <h2 className="text-3xl font-bold mt-3">
              Make the most of your building
            </h2>

            <p className="text-gray-500 mt-4 leading-7">
              Explore premium spaces made for wellness, entertainment, work, and relaxation.
              Reserve amenities like the pool, gym, pickleball court, gaming room, lounge,
              and club spaces directly from your resident dashboard.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-50 dark:bg-main-dark-bg rounded-xl p-4">
                <p className="text-2xl font-bold">22</p>
                <p className="text-sm text-gray-400">Amenities</p>
              </div>

              <div className="bg-gray-50 dark:bg-main-dark-bg rounded-xl p-4">
                <p className="text-2xl font-bold">14</p>
                <p className="text-sm text-gray-400">Available Today</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate('/amenities')}
              style={{ backgroundColor: currentColor }}
              className="mt-6 text-white px-6 py-3 rounded-xl font-semibold hover:drop-shadow-xl"
            >
              View Amenities
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl m-3 mt-8 p-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-center">

          <div className="p-4 xl:p-8 order-2 xl:order-1">
            <p className="text-sm font-semibold text-gray-400 uppercase">
              Community Life
            </p>

            <h2 className="text-3xl font-bold mt-3">
              Life at The Monroe
            </h2>

            <p className="text-gray-500 mt-4 leading-7">
              The Monroe is more than a place to live. From rooftop gatherings and
              fitness challenges to gaming tournaments and resident socials, there is
              always something happening that brings the community together.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-50 dark:bg-main-dark-bg rounded-xl p-4">
                <p className="text-2xl font-bold">5+</p>
                <p className="text-sm text-gray-400">Monthly Events</p>
              </div>

              <div className="bg-gray-50 dark:bg-main-dark-bg rounded-xl p-4">
                <p className="text-2xl font-bold">100+</p>
                <p className="text-sm text-gray-400">Resident Participants</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate('/events')}
              style={{ backgroundColor: currentColor }}
              className="mt-6 text-white px-6 py-3 rounded-xl font-semibold hover:drop-shadow-xl"
            >
              Explore Events
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl h-full order-1 xl:order-2">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeCommunity * 100}%)` }}
            >
              {communitySlides.map((item) => (
                <div key={item.title} className="min-w-full relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[500px] object-cover rounded-2xl"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl">
                    <p className="text-white text-2xl font-semibold">
                      {item.title}
                    </p>

                    <p className="text-gray-200 text-sm mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>


      {/* <div className="flex gap-6 m-3 flex-wrap justify-start w-full">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl flex-1 min-w-[360px]">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            <DropDown currentMode={currentMode} />
          </div>

          <div className="mt-10">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>

                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>

                <p className={`text-${item.pcColor}`}>{item.amount}</p>

                {item.ongoing && (
                  <div className="mt-2">
                    <p className="text-xs text-gray-500">
                      {item.ongoing}
                    </p>

                    <p className="text-xs text-gray-400">
                      {item.scheduled}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button color="white" bgColor={currentColor} text="Add" borderRadius="10px" />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl flex-[2] min-w-[650px]">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Sales Overview</p>
            <DropDown currentMode={currentMode} />
          </div>

          <div className="w-full overflow-auto">
            <LineChart />
          </div>
        </div>
      </div> */}

      {/* <div className="flex flex-wrap justify-start w-full">
        <div className="flex-1 min-w-[360px] bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Weekly Stats</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>

          <div className="mt-10">
            {weeklyStats.map((item) => (
              <div key={item.title} className="flex justify-between mt-4 w-full">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>

                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>

                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}

            <div className="mt-4">
              <SparkLine
                currentColor={currentColor}
                id="area-sparkLine"
                height="160px"
                type="Area"
                data={SparklineAreaData}
                width="320"
                color="rgb(242, 252, 253)"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-[360px] bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">MedicalPro Branding</p>
            <button type="button" className="text-xl font-semibold text-gray-400">
              <IoIosMore />
            </button>
          </div>

          <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
            16 APR, 2021
          </p>

          <div className="flex gap-4 border-b-1 border-color mt-6">
            {medicalproBranding.data.map((item) => (
              <div key={item.title} className="border-r-1 border-color pr-4 pb-2">
                <p className="text-xs text-gray-400">{item.title}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="border-b-1 border-color pb-4 mt-2">
            <p className="text-md font-semibold mb-2">Teams</p>

            <div className="flex gap-4">
              {medicalproBranding.teams.map((item) => (
                <p
                  key={item.name}
                  style={{ background: item.color }}
                  className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-2">
            <p className="text-md font-semibold mb-2">Leaders</p>

            <div className="flex gap-4">
              {medicalproBranding.leaders.map((item, index) => (
                <img key={index} className="rounded-full w-8 h-8" src={item.image} alt="" />
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button color="white" bgColor={currentColor} text="Add" borderRadius="10px" />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>

        <div className="flex-1 min-w-[360px] bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Daily Activities</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>

          <div className="mt-10">
            <img className="w-full h-50 object-cover" src={product9} alt="" />

            <div className="mt-8">
              <p className="font-semibold text-lg">React 18 coming soon!</p>
              <p className="text-gray-400">By Johnathan Doe</p>
              <p className="mt-8 text-sm text-gray-400">
                This will be the small description for the news you have shown here. There could be some great info.
              </p>

              <div className="mt-3">
                <Button color="white" bgColor={currentColor} text="Read More" borderRadius="10px" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;