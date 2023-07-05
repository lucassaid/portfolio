import CreditCardDemo from '../../components/CreditCard/CreditCardDemo'
import profileImage from './profile.jpg'

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
            Web developer from Argentina, in the mission of writing code that looks good and runs fast.
          </p>
        </div>
      </div>
      <hr className="md:hidden mt-10" />
      <div className="h-10" />
      <div className="space-y-3 max-w-5xl">
        <p>
          I strive to to think first, don&apos;t repeat myself and deliver great user experiences,
          approaching the development with passion and creativity.
        </p>
        <p>
          I&apos;ve worked as a full stack developer for seven years now, learning dozens of tools and lessons along the way.
          Provide new ideas, help other developers, and design clean interfaces are, besides coding, what I enjoy the most of my job.
        </p>
      </div>
      <div className="absolute hidden lg:block -top-10 xl:top-20 -right-12 xl:-right-36 transform scale-110 -rotate-6">
        <CreditCardDemo />
      </div>
    </div>
  )
}