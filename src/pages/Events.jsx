import React, { useState } from 'react';
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { MdEventAvailable, MdHistory, MdGroups, MdLocationOn } from 'react-icons/md';

import { Header } from '../components';

const eventData = [
  {
    Id: 1,
    Subject: 'Rooftop Community Night',
    Location: 'The Atlanta',
    StartTime: new Date(2026, 5, 8, 18, 0),
    EndTime: new Date(2026, 5, 8, 20, 0),
    CategoryColor: '#03C9D7',
  },
  {
    Id: 2,
    Subject: 'Yoga & Stretch Session',
    Location: 'The Monroe Retreat',
    StartTime: new Date(2026, 5, 10, 9, 0),
    EndTime: new Date(2026, 5, 10, 10, 0),
    CategoryColor: '#22C55E',
  },
  {
    Id: 3,
    Subject: 'Pickleball Mixer',
    Location: 'Match City',
    StartTime: new Date(2026, 5, 12, 17, 30),
    EndTime: new Date(2026, 5, 12, 19, 0),
    CategoryColor: '#F97316',
  },
  {
    Id: 4,
    Subject: 'Resident Coffee Hour',
    Location: 'The Monroe Lounge',
    StartTime: new Date(2026, 5, 15, 10, 0),
    EndTime: new Date(2026, 5, 15, 11, 0),
    CategoryColor: '#8B5CF6',
  },
  {
    Id: 5,
    Subject: 'Game Room Tournament',
    Location: 'Match City',
    StartTime: new Date(2026, 5, 18, 19, 0),
    EndTime: new Date(2026, 5, 18, 21, 0),
    CategoryColor: '#EF4444',
  },
  {
    Id: 6,
    Subject: 'Spring Social Mixer',
    Location: 'The Monroe Club',
    StartTime: new Date(2026, 4, 20, 18, 0),
    EndTime: new Date(2026, 4, 20, 20, 0),
    CategoryColor: '#64748B',
  },
  {
    Id: 7,
    Subject: 'Pool Opening Weekend',
    Location: 'The Atlanta',
    StartTime: new Date(2026, 4, 25, 12, 0),
    EndTime: new Date(2026, 4, 25, 16, 0),
    CategoryColor: '#64748B',
  },
];

const upcomingEvents = eventData.filter((event) => event.StartTime >= new Date());
const pastEvents = eventData.filter((event) => event.StartTime < new Date());

const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Events = () => {
  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    if (scheduleObj) {
      scheduleObj.selectedDate = args.value;
      scheduleObj.dataBind();
    }
  };

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  const eventTemplate = (props) => (
    <div className="text-white px-1">
      <p className="font-semibold text-xs">{props.Subject}</p>
      <p className="text-[10px]">{props.Location}</p>
    </div>
  );

  return (
    <div className="mx-2 md:mx-6 mt-2 p-4 md:p-6 bg-white rounded-3xl">
      <Header category="Resident Services" title="Events" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-cyan-50 rounded-2xl p-5 flex justify-between items-center">
          <div>
            <p className="text-3xl font-bold text-cyan-500">{upcomingEvents.length}</p>
            <p className="text-gray-500 mt-1">Upcoming Events</p>
          </div>
          <MdEventAvailable className="text-4xl text-cyan-500" />
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 flex justify-between items-center">
          <div>
            <p className="text-3xl font-bold text-purple-500">{pastEvents.length}</p>
            <p className="text-gray-500 mt-1">Past Events</p>
          </div>
          <MdHistory className="text-4xl text-purple-500" />
        </div>

        <div className="bg-green-50 rounded-2xl p-5 flex justify-between items-center">
          <div>
            <p className="text-3xl font-bold text-green-500">4</p>
            <p className="text-gray-500 mt-1">Community Spaces</p>
          </div>
          <MdGroups className="text-4xl text-green-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
            <div className="flex justify-between items-center mb-5">
              <div>
                <h2 className="text-xl font-semibold">Event Calendar</h2>
                <p className="text-sm text-gray-400 mt-1">
                  View, drag, and manage building events.
                </p>
              </div>

              <DatePickerComponent
                value={new Date(2026, 5, 8)}
                showClearButton={false}
                placeholder="Select Date"
                floatLabelType="Always"
                change={change}
              />
            </div>

            <ScheduleComponent
              height="650px"
              ref={(schedule) => setScheduleObj(schedule)}
              selectedDate={new Date(2026, 5, 8)}
              eventSettings={{
                dataSource: eventData,
                template: eventTemplate,
              }}
              dragStart={onDragStart}
              eventRendered={(args) => {
                args.element.style.backgroundColor = args.data.CategoryColor;
              }}
            >
              <ViewsDirective>
                {['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => (
                  <ViewDirective key={item} option={item} />
                ))}
              </ViewsDirective>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
            </ScheduleComponent>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-semibold mb-5">Upcoming Events</h2>

            {upcomingEvents.map((event) => (
              <div key={event.Id} className="bg-white rounded-xl p-4 border mb-3">
                <p className="font-semibold">{event.Subject}</p>

                <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                  <MdLocationOn />
                  <p>{event.Location}</p>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  {event.StartTime.toLocaleDateString()} •{' '}
                  {event.StartTime.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>

                <button
                  type="button"
                  className="mt-4 w-full bg-cyan-500 text-white py-2 rounded-xl font-semibold hover:drop-shadow-xl"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-semibold mb-5">Past Events</h2>

            {pastEvents.map((event) => (
              <div key={event.Id} className="bg-white rounded-xl p-4 border mb-3 opacity-80">
                <p className="font-semibold">{event.Subject}</p>

                <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                  <MdLocationOn />
                  <p>{event.Location}</p>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  {event.StartTime.toLocaleDateString()} • Completed
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PropertyPane>
        <div className="bg-cyan-50 rounded-2xl p-5 mt-6">
          <p className="font-semibold text-cyan-600">Event Management Note</p>
          <p className="text-sm text-gray-500 mt-1">
            Staff can use this page to track upcoming community events, review past events,
            and manage the building event calendar.
          </p>
        </div>
      </PropertyPane>
    </div>
  );
};

export default Events;