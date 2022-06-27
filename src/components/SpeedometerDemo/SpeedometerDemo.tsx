import { useState } from 'react'
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
  DangerPath,
} from 'react-speedometer'
import { SpeedometerProps } from 'react-speedometer/dist/Speedometer'
import ValuesSetter from './ValuesSetter'
import '../../input-range.css'
import Checkboxes, { initialState } from './Checkboxes'

const smallScreen = screen.width < 768

export default function SpeedometerDemo() {

  const [items, setItems] = useState(initialState)
  const [values, setValues] = useState<SpeedometerProps>({
    value: 128,
    width: smallScreen ? 200 : 250,
    angle: 250,
    rotation: -125,
    min: 0,
    max: 180,
    accentColor: '#00e0ff',
  })

  const [backgroundAngle, setBackgroundAngle] = useState(360)
  const [marksStep, setMarksStep] = useState(10)

  const sliders = (
    <div className="relative w-16 text-sm space-y-1 transition-all duration-300 opacity-0 group-hover:opacity-100">
      <ValuesSetter
        values={values}
        setValues={setValues}
      />
      <div className="text-slate-400 hover:text-slate-200">
        <div>
          Background
        </div>
        <input
          type="range"
          value={backgroundAngle}
          onChange={e => setBackgroundAngle(Number(e.target.value))}
          min={180}
          max={360}
        />
      </div>
      <div className="text-slate-400 hover:text-slate-200">
        <div>
          Step
        </div>
        <input
          type="range"
          value={marksStep}
          onChange={e => setMarksStep(Number(e.target.value))}
          min={5}
          max={20}
          step={5}
        />
      </div>
    </div>
  )

  const checkboxes = (
    <div className="hidden sm:block space-y-2 text-slate-400 right-8 opacity-0 transition-all duration-300 group-hover:opacity-100">
      <Checkboxes
        items={items}
        setItems={setItems}
      />
    </div>
  )

  return (
    <div className="h-full flex items-center justify-between sm:justify-between group p-2">
      {sliders}
      <div className="">
        <Speedometer {...values}>
          {items.background && (
            <Background
              angle={backgroundAngle}
              opacity={0.2}
            />
          )}
          {items.arc && (
            <Arc opacity={0.7} />
          )}
          {items.needle && (
            <Needle />
          )}
          {items.progress && (
            <Progress />
          )}
          {items.marks && (
            <Marks
              step={marksStep}
              numbersRadius={smallScreen ? 18 : 20}
              fontSize={smallScreen ? 14 : 18}
            />
          )}
          {items.indicator && (
            <Indicator fontSize={smallScreen ? 35 : 45} />
          )}
          {items.danger && (
            <DangerPath />
          )}
        </Speedometer>
      </div>
      {checkboxes}
    </div>
  )
}