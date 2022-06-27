
import { useMemo } from 'react'
import './styles.css'
import visaLogo from './visa-logo.png'
import { motion } from 'framer-motion'

const numbersArr = new Array(16).fill('')
const coreArr = new Array(3).fill('')

interface CreditCardProps {
  name: string
  number: string
  code: string
  vDate: string
  flipped?: boolean
}

export default function CreditCard({
  name,
  number,
  code,
  vDate,
  flipped = false,
}: CreditCardProps) {

  const active = useMemo(() => number.length > 6, [number.length])

  return (
    <div
      className={`
        flip-card
        ${flipped ? 'flipped' : ''}
        ${active ? '' : ''}
      `}
    >
      <div className="flip-card-inner">
        <div
          className={`
            flip-card-front p-4 ring-2 ring-sky-400 transition-colors
            ${active ? 'text-black' : 'text-black/70'}
          `}
        >
          <div className="flex flex-col h-full justify-end">
            {active && (
              <motion.img
                className="w-16 ml-auto mb-auto z-50 relative opacity-80"
                src={visaLogo}
                initial={{ y: -20 }}
                animate={{ y: 0 }}
              />
            )}
            <div className="flex justify-center mb-1.5 relative z-20 " >
              {numbersArr.map((_n, i) => {
                const n = number.charAt(i)
                return (
                  <div
                    key={i}
                    className={`number-item w-3 ${n ? '' : 'relative bottom-0.5'}`}
                  >
                    {n || <>&bull;</>}
                  </div>
                )
              })}
            </div>
            <div className="flex justify-between uppercase relative z-20">
              <div placeholder="NOMBRE Y APELLIDO">
                {name}
              </div>
              <div placeholder="MM/AA">
                {vDate}
              </div>
            </div>
          </div>
          <div className={`ripple bg-white z-30 mix-blend-difference ${active ? 'active' : ''}`} />
          <div className={`ripple bg-gradient-to-tr from-yellow-600 to-rose-700 z-10 ${active ? 'active' : ''}`} />
        </div>

        <div className="flip-card-back ring-2 ring-sky-400">
          <div className="h-9 bg-black/50 relative z-40 mt-4 mb-3" />
          <div className="relative z-20 h-full">
            <div className="flex pl-10 px-5">
              <div className="lines-band rounded-l overflow-hidden">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="bg-white/40 flex px-1 rounded-r">
                {coreArr.map((_n, i) => (
                  <div key={i} className="w-[10px]">
                    {code.charAt(i) || <>&bull;</>}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`ripple bg-white z-30 mix-blend-difference ${active ? 'active' : ''}`} />
          <div className={`ripple bg-gradient-to-tr from-yellow-600 to-rose-700 z-10 ${active ? 'active' : ''}`} />
        </div>
      </div >
    </div >
  )
}