import HoverPopover from '../../components/HoverPopover'
import { tools } from '../../data/tools/tools'

export default function Tools() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-5">
      {tools.map(tool => (
        <HoverPopover
          disabled={!tool.detail}
          key={tool.id}
          panel={(
            <div className="p-6 rounded-lg bg-slate-900 text-white w-[800px] max-w-[90vw] z-50">
              <h5 className="mb-3">{tool.title}</h5>
              <div className="space-y-4 text-base">
                {tool.detail}
              </div>
            </div>
          )}
        >
          {({ setReferenceElement }) => (
            <div
              className="text-center transition cursor-pointer py-5 relative -z-10"
              ref={setReferenceElement}
            >
              <img
                src={tool.icon}
                className={`
                  w-10 h-10 mx-auto ${tool.iconClass || ''}
                `}
              />
              <div className="opacity-70 text-sm mt-2">
                {tool.title}
              </div>
            </div>
          )}
        </HoverPopover>
      ))}
    </div>
  )
}