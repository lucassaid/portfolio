import { Dispatch, SetStateAction, useMemo } from 'react'
import { SpeedometerProps } from 'react-speedometer/dist/Speedometer'

type ConfigProps = 'angle' | 'rotation' | 'value' | 'min' | 'max'
type MinAndMax = Pick<SpeedometerProps, 'min' | 'max'>
type Config = { key: ConfigProps, props: MinAndMax }[]

const getConfig = ({ min = 0, max = 180 }: SpeedometerProps): Config => [
  { key: 'angle', props: { min: 100, max: 360 } },
  { key: 'rotation', props: { min: -360, max: 0 } },
  { key: 'value', props: { min: Math.max(-50, min), max: Math.min(300, max) } },
  { key: 'min', props: { min: -50, max: 20 } },
  { key: 'max', props: { min: 50, max: 300 } },
]

interface ValuesSetterProps {
  values: SpeedometerProps
  setValues: Dispatch<SetStateAction<SpeedometerProps>>
}

export default function ValuesSetter({
  values,
  setValues,
}: ValuesSetterProps) {

  const config = useMemo(() => getConfig(values), [values])

  return (
    <>
      {config.map(configItem => (
        <div key={configItem.key} className="text-slate-400 hover:text-slate-200">
          <div className="first-letter:uppercase">
            {configItem.key}
          </div>
          <input
            type="range"
            {...configItem.props}
            value={values[configItem.key]}
            onChange={e => setValues(currValues => ({
              ...currValues,
              [configItem.key]: Number(e.target.value)
            }))}
          />
        </div>
      ))}
    </>
  )
}