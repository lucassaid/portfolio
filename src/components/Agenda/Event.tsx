import { format } from 'date-fns'
import './styles.css'

interface EventProps {
  title: string
  bottom: number
  top: number
  className: string
  start: Date
  end: Date
}

export const Event = ({ title, top, bottom, className, start, end }: EventProps) => (
  <div
    className={`
      absolute w-full p-3 rounded-lg
      cursor-pointer hover:ring
      agenda-event
      ${className}
    `}
    style={{ top, bottom }}
  >
    {title}
    <br />
    <div className="event-time text-xs">
      {format(start, 'HH:mm')}
      &nbsp;→&nbsp;
      {format(end, 'HH:mm')}
    </div>
  </div>
)
