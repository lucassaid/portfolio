import { tools } from '../../data/tools/tools'

export default function Tools() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-10">
      {tools.map(tool => (
        <div key={tool.id} className="text-center">
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
      ))}
    </div>
  )
}