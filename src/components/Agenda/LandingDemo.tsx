import Agenda, { HoursColumn, Day, Needle, Columns } from 'react-headless-agenda'
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
    className: 'bg-emerald-500',
  },
  {
    title: 'work',
    start: startOfDay(addDays(start, 1)),
    end: addHours(startOfDay(addDays(start, 1)), 5),
    className: 'bg-sky-500',
  },
  {
    title: 'Gym',
    start: addHours(startOfDay(addDays(start, 2)), 4),
    end: addHours(startOfDay(addDays(start, 2)), 6),
    className: 'bg-slate-300',
  },
  {
    title: 'Travel',
    start: addHours(startOfDay(addDays(start, 2)), 7),
    end: addHours(startOfDay(addDays(start, 2)), 15),
    className: 'bg-rose-400',
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
        <div className="relative group md:px-10">
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
            className="grid gap-4 mb-5"
            style={{
              gridTemplateColumns: `50px repeat(3, 1fr)`
            }}
          >
            <div />
            <Columns>
              {({ date, key }) => (
                <div key={key} className="text-center">
                  {format(date, 'ccc d')}
                </div>
              )}
            </Columns>
          </div>
          <div
            className="grid gap-4 max-h-96 overflow-y-hidden"
            style={{ gridTemplateColumns: `50px repeat(3, 1fr)` }}
          >
            <div className="text-center transition-opacity opacity-0 group-hover:opacity-100">
              <HoursColumn>
                {({ hour }) => (
                  <div key={hour} className="opacity-30 py-1">
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
                      <Needle>
                        {({ top }) => (
                          <div
                            className="absolute h-1 bg-red-400 z-40 w-full"
                            style={{ top }}
                          />
                        )}
                      </Needle>
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