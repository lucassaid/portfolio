import CreditCardDemo from '../../components/CreditCard/CreditCardDemo'
import profileImage from './profile.jpg'
import { motion } from 'framer-motion'

export default function Presentation() {

  return (
    <div className="relative">
      <div className="md:flex items-center md:space-x-10">
        <img
          className="w-36 aspect-square rounded-full"
          src={profileImage}
          alt="Lucas Said Portfolio"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="decoration-sky-500 decoration-wavy underline-offset-8">
            Lucas Said
          </h2>
          <p className="max-w-md mt-2">
            Web developer from Argentina (living in Uruguay), in the mission of writing code that looks good and runs fast.
          </p>
        </div>
      </div>
      <hr className="md:hidden mt-10" />
      <div className="h-10" />
      <div className="space-y-3 max-w-5xl">
        <p>
          I strive to think first, don&apos;t repeat myself and deliver great user experiences,
          approaching the development with passion and creativity.
        </p>
        <p>
          I&apos;ve worked as a full stack developer for seven years now, learning dozens of tools and lessons along the way.
          Providing new ideas, helping other developers, and designing clean interfaces are, besides coding, what I enjoy the most of my job.
        </p>
      </div>
      <motion.div
        className="absolute hidden lg:block -top-10 2xl:top-20 -right-2 2xl:-right-36 transform scale-90 2xl:scale-110"
        transition={{
          bounce: 0.5,
          type: 'spring',
          duration: 3,
        }}
        initial={{ opacity: 0, y: 50, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
      >
        <CreditCardDemo />
      </motion.div>
    </div >
  )
}