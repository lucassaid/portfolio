import { format } from 'date-fns'
import { useState } from 'react'
import { events } from './CompleteDemo'
import Agenda, { Day, Columns } from 'react-headless-agenda'

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

export default function BasicAgendaDemo() {

  const [startDate, setStartDate] = useState(new Date())
  const days = 7

  return (
    <Agenda
      startDate={startDate}
      onStartDateChange={setStartDate}
      events={events}
      days={days}
    >
      {() => (
        <>
          <div className="flex mb-10">
            <Columns>
              {({ date, key }) => (
                <div key={key} className="text-center flex-1">
                  {format(date, 'ccc d')}
                </div>
              )}
            </Columns>
          </div>
          <div
            className="flex gap-4"
            style={{ height: 700 }}
          >
            <Columns>
              {({ date, key }) => (
                <Day key={key} date={date} >
                  {({ containerRef, events }) => (
                    <div
                      ref={containerRef}
                      className="relative h-full flex-1"
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
        </>
      )}
    </Agenda>
  )
}