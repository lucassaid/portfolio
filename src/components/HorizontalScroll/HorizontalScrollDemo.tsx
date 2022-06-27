import HorizontalScroll from './HorizontalScroll'

function Square() {
  return (
    <div className="border-r border-sky-400/10 flex-1 h-full" />
  )
}

export default function HorizontalScrollDemo() {

  function handleZoomChange(zoom: number) {
    // console.log(zoom)
  }

  return (
    <div className="max-w-md mx-auto">
      <HorizontalScroll
        onZoomChange={handleZoomChange}
        initialZoom={300}
        maxZoom={1000}
      >
        {(provided, snapshot) => (
          <>
            <div className="bg-blue-600/10 relative rounded-t-lg">
              <div
                className={`
                  h-5 w-12 gradient-emerald rounded
                  ${snapshot.scrolling ? 'border border-yellow-500' : 'ring animate-pulse'}
                `}
                {...provided.scrollBarProps}
              />
            </div>
            {/* @ts-ignore */}
            <div
              className="h-32 overflow-y-auto rounded-b-lg bg-blue-400/20"
              {...provided.containerProps}
            >
              <div
                className="flex relative content-around h-full"
                {...provided.contentProps}
              >
                <div className="absolute py-2.5 gradient-orange top-5 left-[2%] w-[20%] rounded" />
                <div className="absolute py-2.5 gradient-orange top-5 left-[50%] w-[20%] rounded" />
                <div className="absolute py-2.5 gradient-rose top-14 left-[8%] w-[30%] rounded" />
                <div className="absolute py-2.5 gradient-rose top-14 left-[65%] w-[25%] rounded" />
                <div className="absolute py-2.5 gradient-light-gray top-[5.75rem] left-[30%] w-[30%] rounded" />
                {Array.from(new Array(40)).map((sq, i) => (
                  <Square key={i} />
                ))}
              </div>
            </div>
          </>
        )}
      </HorizontalScroll>
    </div>
  )
}