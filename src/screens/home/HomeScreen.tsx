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
import Section from '../../components/Section'

const leftForm = (
  <motion.div
    className={`
      gradient-orange absolute h-20 w-20 -left-10 top-[500px] -z-40 rounded-lg
      hidden 2xl:block
    `}
    style={{
      scale: 3,
      mixBlendMode: 'difference',
    }}
    animate={{
      rotate: [30, 120, 30],
    }}
    transition={{
      repeat: Infinity,
      duration: 20
    }}
  />
)

const point3dDemo = (
  <motion.div
    className="absolute top-[28rem] hidden lg:block right-10 xl:right-20 2xl:-right-20 group"
    transition={{
      bounce: 0.5,
      type: 'spring',
      duration: 3,
    }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
  >
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
  </motion.div>
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
        {point3dDemo}
      </div>
      <div className="h-20" />
      <div className="bg-slate-100 py-20 z-50 relative">
        <Section className="container relative">
          <h2 className="mb-10">
            Previous projects
          </h2>
          <OldProjects />
        </Section>
      </div>
      <div className="h-20" />
      <Section className="container relative">
        <h2>
          Tech I&apos;m used to
        </h2>
        <div className="h-3" />
        <p>
          Hover or tap on each one to see more details.
        </p>
        <div className="h-6" />
        <Tools />
      </Section>
      <div className="h-20" />
      <div className="h-10" />
      <Section className="bg-gradient-to-bl from-sky-900 to-slate-900  py-20 text-white">
        <div className="h-10" />
        <OpenSourceProjects />
        <div className="h-10" />
      </Section>
      <div className="h-20" />
      <div className="h-10" />
      <Section className="container">
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
      </Section>
      <div className="h-20" />
      <div className="h-10" />
    </div>
  )
}