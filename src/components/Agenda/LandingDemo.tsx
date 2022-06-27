import Agenda, { HoursColumn, Day, Columns } from 'react-headless-agenda'
import { format, addDays, startOfDay, addHours } from 'date-fns'
import { useState } from 'react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { Event } from './Event'

const start = new Date()
start.setHours(12, 0)

const end = new Date()
end.setHours(20, 0)

export const events = [
  {
    title: 'Study',
    start: addHours(startOfDay(addDays(start, 0)), 3),
    end: addHours(startOfDay(addDays(start, 0)), 10),
    className: 'gradient-emerald',
  },
  {
    title: 'work',
    start: startOfDay(addDays(start, 1)),
    end: addHours(startOfDay(addDays(start, 1)), 5),
    className: 'gradient-blue',
  },
  {
    title: 'Gym',
    start: addHours(startOfDay(addDays(start, 2)), 4),
    end: addHours(startOfDay(addDays(start, 2)), 6),
    className: 'gradient-light-gray',
  },
  {
    title: 'Travel',
    start: addHours(startOfDay(addDays(start, 2)), 7),
    end: addHours(startOfDay(addDays(start, 2)), 15),
    className: 'gradient-rose',
  },
]

export default function LandingDemo() {

  const [startDate, setStartDate] = useState(new Date())
  const days = 3

  return (
    <Agenda
      startDate={startDate}
      onStartDateChange={setStartDate}
      events={events}
      days={days}
    >
      {({ prev, next, endDate }) => (
        <div className="relative group md:max-w-md mx-auto">
          <div className="absolute w-full -top-12 flex justify-center gap-x-5 items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 bg-slate-900/30 rounded-full cursor-pointer flex items-center justify-center" onClick={prev}>
              <CaretLeft weight="bold" size={22} />
            </div>
            <div className="text-xl">
              {format(startDate, 'd MMMM')}
              &nbsp; - &nbsp;
              {format(endDate, 'd MMMM')}
            </div>
            <div className="w-8 h-8 bg-slate-900/30 rounded-full cursor-pointer flex items-center justify-center" onClick={next}>
              <CaretRight weight="bold" size={22} />
            </div>
          </div>
          <div
            className="grid gap-4 overflow-y-hidden"
            style={{
              gridTemplateColumns: `50px repeat(3, 1fr)`,
              maxHeight: 365,
            }}
          >
            <div />
            <Columns>
              {({ date, key }) => (
                <div key={key} className="text-center transition-opacity opacity-40 group-hover:opacity-60">
                  {format(date, 'ccc d')}
                </div>
              )}
            </Columns>
            <div className="text-center transition-opacity opacity-0 group-hover:opacity-100">
              <HoursColumn>
                {({ hour }) => (
                  <div key={hour} className="opacity-30 py-1 text-base">
                    {hour} hs
                  </div>
                )}
              </HoursColumn>
            </div>
            <Columns>
              {({ date, key }) => (
                <Day key={key} date={date} >
                  {({ containerRef, events }) => (
                    <div
                      ref={containerRef}
                      className="relative h-full"
                    >
                      {events.map(({ event, top, bottom }) => (
                        // @ts-ignore
                        <Event key={event.title} {...event} top={top} bottom={bottom} />
                      ))}
                    </div>
                  )}
                </Day>
              )}
            </Columns>
          </div>
        </div>
      )}
    </Agenda>
  )
}