import CompassDemo from '../../components/Compass/CompassDemo'
import OpenSourceProjects from './OpenSource'
import Presentation from './Presentation'
import OldProjects from './OldProjects'
import CurrentProjects from './CurrentProjects'
import { strings } from '../../data/strings'
import Point3dDemo from '../../components/Point3d/Point3dDemo'
import CreditCardDemo from '../../components/CreditCard/CreditCardDemo'

export default function HomeScreen() {

  return (
    <div>
      <div className="h-20" />
      <div className="h-20" />
      <div className="container bg-gradient-to-tr from-amber-600 bg-pink-700">
        <div className="h-20" />
        <div className="h-20" />
        <div className="h-20" />
        <div className="h-20" />
      </div>
      <div className="h-20" />
      <div className="h-20" />
      <div className="h-20" />
      <div className="h-20" />

      <div className="container flex justify-around">
        <Presentation />
      </div>
      <div className="h-20" />
      <div className="h-20" />
      <div className="h-20" />
      <div className="container flex justify-around">
        {/* <div className="p-20 bg-slate-900 rounded-lg inline-flex"> */}
        <Point3dDemo />
        <CompassDemo />
        <CreditCardDemo />
        {/* </div> */}
      </div>
      <div className="h-20" />
      <div className="h-20" />
      <div className="container">
        <h2 className="mb-10">
          What I&apos;m working on
        </h2>
        <CurrentProjects />
        <div className="h-20" />
        <h2 className="mb-10">
          Previous projects
        </h2>
        <OldProjects />
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
            <h2>
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