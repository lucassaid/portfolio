import { Dispatch, SetStateAction } from 'react'

interface CheckboxesItems {
  background: boolean,
  arc: boolean,
  needle: boolean,
  progress: boolean,
  marks: boolean,
  indicator: boolean,
  danger: boolean
}

export const initialState: CheckboxesItems = {
  background: true,
  arc: true,
  needle: true,
  progress: true,
  marks: true,
  indicator: true,
  danger: false,
}

interface CheckboxesProps {
  items: CheckboxesItems,
  setItems: Dispatch<SetStateAction<CheckboxesItems>>
}

export default function Checkboxes({ items, setItems }: CheckboxesProps) {

  const handleChange = (name: string, value: boolean) => {
    setItems(currItems => ({
      ...currItems,
      [name]: value
    }))
  }

  return (
    <>
      {Object.keys(initialState).map((item) => (
        <div key={item} >
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={items[item as keyof CheckboxesItems]}
              onChange={e => handleChange(item, e.target.checked)}
              className="appearance-none bg-sky-900/30 p-2 rounded checked:bg-sky-500/70 indeterminate:bg-green-400"
            />
            <div className="first-letter:uppercase text-slate-400 hover:text-slate-200 ">
              &nbsp;&nbsp;{item}
            </div>
          </label>
        </div>
      ))}
    </>
  )
}