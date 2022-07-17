import { Dispatch, SetStateAction, useState } from 'react'
import { usePopper } from 'react-popper'
import { Transition } from '@headlessui/react'

interface ChildrenProps {
  setReferenceElement: Dispatch<SetStateAction<HTMLDivElement | null>>
}

interface HoverPopoverProps {
  children: (props: ChildrenProps) => JSX.Element
  panel: JSX.Element
  disabled?: boolean
}

export default function HoverPopover({ children, panel, disabled = false }: HoverPopoverProps) {
  const [hovering, setHovering] = useState(false)
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement)

  return (
    <div
      onMouseEnter={() => !disabled && setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {children({ setReferenceElement })}

      <Transition
        show={hovering}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 -translate-y-4"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 -translate-y-1"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div ref={setPopperElement} style={styles.popper} {...attributes.popper} className="px-4">
          <div className="h-1" />
          {panel}
        </div>
      </Transition>
    </div>
  )
}
