import CreditCardDemo from '../../components/CreditCard/CreditCardDemo'
import Point3dDemo from '../../components/Point3d/Point3dDemo'
import profileImage from './profile.jpg'

export default function Presentation() {

  return (
    <div className="relative">
      <div className="flex items-center space-x-10">
        <img
          className="w-36 aspect-square rounded-full"
          src={profileImage}
          alt="Lucas Said Portfolio"
        />
        <div>
          <h2 className="decoration-sky-500 decoration-wavy underline-offset-8">
            Lucas Said
          </h2>
          <p className="max-w-md mt-2">
            I&apos;m a web developer from Argentina, in the mission of writing code that looks good and runs fast.
          </p>
        </div>
      </div>
      <div className="h-10" />
      <div className="space-y-3 max-w-5xl">
        <p>
          I always try to think first, don&apos;t repeat myself and deliver good user experiences,
          facing the development with passion and creativity. I love to bring new ideas to the projects I work on.
        </p>
        <p>
          I work as a full stack developer, but lately I&apos;m focusing on <b>frontend development</b>, improving my skills
          and keep specializing in what I&apos;m good at: Draft quality, composable components,
          and building great user interfaces.
        </p>
      </div>
      <div className="absolute hidden lg:block -top-10 xl:top-20 -right-12 xl:-right-36 transform scale-110 -rotate-6">
        <CreditCardDemo />
      </div>
    </div>
  )
}