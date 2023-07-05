import CompassDemo from '../../components/Compass/CompassDemo'
import OpenSourceProjects from './OpenSource'
import Presentation from './Presentation'
import OldProjects from './OldProjects'
import CurrentProjects from './CurrentProjects'
import { strings } from '../../data/strings'
import Point3dDemo from '../../components/Point3d/Point3dDemo'
import Tools from './Tools'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const leftForm = (
  <motion.div
    className={`
      gradient-orange absolute h-20 w-20 -left-10 top-[500px] -z-40 rounded-lg
      hidden 2xl:block
    `}
    style={{
      scale: 3,
    }}
    animate={{
      rotate: [30, 120, 30],
    }}
    transition={{
      repeat: Infinity,
      duration: 30
    }}
  />
)

export default function HomeScreen() {

  const scrollTrack = useRef(0)

  useEffect(() => {
    if (scrollTrack.current) {
      window.scroll(0, scrollTrack.current)
    }
    const handleScroll = () => {
      scrollTrack.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div className="h-20" />
      <div className="container">
        <Presentation />
      </div>
      <div className="h-20" />
      {leftForm}
      <div className="container relative">
        <h2 className="mb-10">
          What I&apos;m working on
        </h2>
        <CurrentProjects />
        <div className="h-20" />
        <h2 className="mb-10">
          Previous projects
        </h2>
        <OldProjects />
        <div className="h-20" />
        <div className="space-y-3">
          <h2 className="">
            Tech I&apos;m used to
          </h2>
          <p>
            Hover or tap on each one to see more details.
          </p>
          <div className="h-3" />
          <Tools />
        </div>
        <div className="absolute top-[32rem] right-10 hidden lg:block xl:right-0 2xl:-right-36 group">
          <Point3dDemo />
          <div className="opacity-0 group-hover:opacity-100 absolute bottom-20 -left-48 w-64 transition-opacity text-sm z-50">
            <Link
              to="/project/cisem"
              target=""
              className="text-accent underline"
            >
              More about this project →
            </Link>
          </div>
        </div>
      </div>
      <div className="h-20" />
      <div className="h-10" />
      <div className="bg-gradient-to-bl from-sky-900 to-slate-900  py-20 text-white">
        <div className="h-10" />
        <OpenSourceProjects />
        <div className="h-10" />
      </div>
      <div className="h-20" />
      <div className="h-10" />
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-5/12 flex justify-center">
            <CompassDemo />
          </div>
          <div className="md:w-7/12">
            <h2 className="mb-4">
              About me
            </h2>
            {strings.aboutMe}
          </div>
        </div>
      </div>
      <div className="h-20" />
      <div className="h-10" />
    </div>
  )
}