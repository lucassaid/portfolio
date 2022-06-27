import Agenda, { HoursColumn, Day, Needle, Columns } from 'react-headless-agenda'
import { format, addDays, startOfWeek, startOfDay, addHours } from 'date-fns'
import { useState } from 'react'
import { CaretLeft, CaretRight } from 'phosphor-react'

const start = startOfWeek(new Date())
start.setHours(12, 0)

const end = new Date()
end.setHours(20, 0)

export const events = [
  {
    title: 'Work nonstop',
    start: start,
    end: addDays(end, 2),
    className: 'bg-amber-500',
  },
  {
    title: 'Study',
    start: addHours(startOfDay(addDays(start, 3)), 3),
    end: addHours(startOfDay(addDays(start, 3)), 10),
    className: 'bg-emerald-500',
  },
  {
    title: 'work but in blue',
    start: startOfDay(addDays(start, 4)),
    end: addHours(startOfDay(addDays(start, 4)), 5),
    className: 'bg-sky-500',
  },
  {
    title: 'Gym',
    start: addHours(startOfDay(addDays(start, 5)), 4),
    end: addHours(startOfDay(addDays(start, 5)), 6),
    className: 'bg-slate-300',
  },
  {
    title: 'Travel',
    start: addHours(startOfDay(addDays(start, 5)), 7),
    end: addHours(startOfDay(addDays(start, 5)), 15),
    className: 'bg-rose-400',
  },
]

const Event = ({ title, top, bottom, className }: { title: string, bottom: number, top: number, className: string }) => (
  <div
    className={`absolute w-full p-4 rounded-lg ${className}`}
    style={{
      position: 'absolute',
      top,
      bottom,
    }}
  >
    {title}
  </div>
)

export default function AgendaDemo() {

  const [startDate, setStartDate] = useState(new Date())
  const days = 7

  return (
    <Agenda
      startDate={startDate}
      onStartDateChange={setStartDate}
      events={events}
      days={days}
    >
      {({ prev, next, endDate }) => (
        <>
          <div className="flex justify-center gap-x-5 items-center mb-10">
            <div className="w-10 h-10 border rounded-full cursor-pointer flex items-center justify-center" onClick={prev}>
              <CaretLeft weight="bold" size={22} />
            </div>
            <h5>
              {format(startDate, 'd/M')}
              &nbsp; - &nbsp;
              {format(endDate, 'd/M')}
            </h5>
            <div className="w-10 h-10 border rounded-full cursor-pointer flex items-center justify-center" onClick={next}>
              <CaretRight weight="bold" size={22} />
            </div>
          </div>
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: `repeat(${days + 1}, 1fr)`
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
            <div className="text-center">
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
        </>
      )}
    </Agenda>
  )
}