import { format } from 'date-fns'
import { events } from './CompleteDemo'
import Agenda, { HoursColumn, Day, Columns } from 'react-headless-agenda'

const Event = ({ title, top, bottom, className, start, end }: { title: string, bottom: number, top: number, className: string, start: Date, end: Date }) => (
  <div
    className={`absolute w-full p-4 rounded-lg ${className}`}
    style={{
      position: 'absolute',
      top,
      bottom,
    }}
  >
    {title}
    <br />
    {format(start, 'HH:mm')}
    &nbsp;-&nbsp;
    {format(end, 'HH:mm')}
  </div>
)

export default function VerticalAgendaDemo() {

  return (
    <Agenda events={events} >
      {() => (
        <Columns>
          {({ date, key }) => (
            <Day key={key} date={date} >
              {({ containerRef, events }) => (
                <div>
                  <h4 className="mt-6 py-4">
                    {format(date, 'EEEE d')}
                  </h4>
                  <div
                    ref={containerRef}
                    className="flex gap-x-3"
                  >
                    <div>
                      <HoursColumn>
                        {({ hour }) => (
                          <div key={hour} className="opacity-30 py-1">
                            {hour} hs
                          </div>
                        )}
                      </HoursColumn>
                    </div>
                    <div className="flex-1 relative">
                      {events.map(({ event, top, bottom }) => (
                        // @ts-ignore
                        <Event key={event.id} {...event} top={top} bottom={bottom} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Day>
          )}
        </Columns>
      )}
    </Agenda>
  )
}