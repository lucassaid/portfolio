import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'

history.scrollRestoration = 'manual'

export default function Layout() {

  const scrollPos = useRef<number | null>(null)
  const location = useLocation()

  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     if (typeof scrollPos.current === 'number') {
  //       window.scroll(0, scrollPos.current)
  //     }
  //   } else {
  //     console.log(window.pageYOffset)
  //     scrollPos.current = window.pageYOffset
  //   }
  // }, [location.pathname])

  return (
    <div className="text-lg text-slate-800">
      <Outlet />
      <div className="bg-slate-300 py-10">
        <Footer />
      </div>
    </div>
  )
}