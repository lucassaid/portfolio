import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'

const getPercentage = (a: number, b: number) => (a * 100) / b

interface Snapshot {
  scrollBarProps: {
    onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    ref: MutableRefObject<HTMLDivElement | null>
  },
  containerProps: {
    onTouchStart: (e: TouchEvent) => void
    onTouchMove: (e: TouchEvent) => void
    ref: MutableRefObject<HTMLDivElement | null>
  },
  contentProps: {
    ref: MutableRefObject<HTMLDivElement | null>
  }
}

interface Provided {
  scrolling: boolean
}

interface HorizontalScroll {
  initialPlacement?: 'left' | 'right' | 'center'
  initialZoom?: number
  maxZoom?: number
  children: (snapshot: Snapshot, provided: Provided) => JSX.Element
  onZoomChange: (currentZoom: number) => void,
}

export default function HorizontalScroll({
  initialPlacement = 'left',
  initialZoom = 170,
  maxZoom = 700,
  children,
  onZoomChange,
}: HorizontalScroll) {

  const zoomRef = useRef(initialZoom)
  const [scrolling, setScrolling] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollBarRef = useRef<HTMLDivElement>(null)
  const lastScrollWidth = useRef(0)

  // touch handle
  const touchX = useRef(0)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!contentRef.current || !containerRef.current) return
    if (document.pointerLockElement != scrollBarRef.current) return
    setScrolling(true)
    const container = containerRef.current

    // content width
    if (e.movementY > 360) return
    zoomRef.current = Math.max(Math.min(zoomRef.current - e.movementY, maxZoom), 100)
    contentRef.current.style.width = `${zoomRef.current}%`
    const contentGrow = container.scrollWidth - lastScrollWidth.current
    onZoomChange && contentGrow && onZoomChange(zoomRef.current)
    lastScrollWidth.current = container.scrollWidth

    // scroll
    const scrollPercentage = getPercentage(e.movementX, container.clientWidth)
    const scrollX = (scrollPercentage * container.scrollWidth) / 100
    const pos = getPercentage(container.scrollLeft + container.clientWidth / 2, container.scrollWidth)
    const growCompensation = (contentGrow * pos) / 100
    container.scrollBy(scrollX + growCompensation, 0)

    setScrollBar()
  }, [maxZoom, onZoomChange])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove])

  useEffect(() => {
    if (!containerRef.current || !contentRef.current || !scrollBarRef.current) return
    const container = containerRef.current

    scrollBarRef.current.style.position = 'relative'
    scrollBarRef.current.style.width = `${getPercentage(100, initialZoom)}%`
    containerRef.current.style.overflowX = 'hidden'
    contentRef.current.style.width = `${initialZoom}%`
    lastScrollWidth.current = containerRef.current.scrollWidth

    if (initialPlacement == 'right') {
      container.scrollBy(container.scrollWidth - container.clientWidth, 0)
    } else if (initialPlacement == 'center') {
      container.scrollBy((container.scrollWidth - container.clientWidth) / 2, 0)
    }
    setScrollBar()
  }, [initialPlacement, initialZoom])

  const setScrollBar = () => {
    if (!contentRef.current || !scrollBarRef.current || !containerRef.current) return
    const contentWidth = contentRef.current.scrollWidth
    scrollBarRef.current.style.width = getPercentage(containerRef.current.clientWidth, contentWidth) + '%'
    const scrollPercentage = getPercentage(containerRef.current.scrollLeft, contentWidth)
    const scrollBarLeft = (scrollPercentage * containerRef.current.offsetWidth) / 100
    scrollBarRef.current.style.left = `${scrollBarLeft}px`
  }

  const handleMouseUp = () => {
    setScrolling(false)
    document.exitPointerLock()
  }

  const handleTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!containerRef.current) return
    const movementX = touchX.current - e.touches[0].clientX
    touchX.current = e.touches[0].clientX
    containerRef.current.scrollBy(movementX, 0)
    setScrollBar()
  }

  const provided = {
    scrollBarProps: {
      ref: scrollBarRef,
      onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.currentTarget.requestPointerLock(),
    },
    containerProps: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      ref: containerRef
    },
    contentProps: {
      ref: contentRef
    }
  }

  const snapshot = {
    scrolling
  }

  return (
    <>
      {children(provided, snapshot)}
    </>
  )
}