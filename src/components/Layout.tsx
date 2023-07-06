import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {

  const homeScroll = useRef(0)
  const location = useLocation()

  useEffect(() => {
    if (homeScroll.current && location.pathname === '/') {
      window.scroll(0, homeScroll.current)
    }
    const handleScroll = () => {
      if (location.pathname === '/') {
        homeScroll.current = window.scrollY
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location.pathname])

  return (
    <div className="text-lg text-slate-800">
      <Outlet />
      <div className="bg-slate-100 py-10">
        <Footer />
      </div>
    </div>
  )
}