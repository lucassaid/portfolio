import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="text-lg text-slate-800">
      <Outlet />
      <div className="bg-slate-300 py-10">
        <Footer />
      </div>
    </div>
  )
}