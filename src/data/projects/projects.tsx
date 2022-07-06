import JulietaAmeliaLogo from './img/julieta-amelie.png'
import OkNubeLogo from './img/oknube.svg'
import FlashMeetLogo from './img/flash-meet.svg'
import RitmoLogo from './img/ritmo.svg'
import SpaceLogo from './img/space.svg'
import CisemLogo from './img/cisem.svg'
import Todo10Logo from './img/todo10.svg'
import AldiaLogo from './img/aldia.svg'
import { Student } from 'phosphor-react'

export const mapSlugBackground = {
  spacedev: 'gradient-rose',
  ritmo: 'gradient-emerald'
}

export const projects = [
  {
    id: 'space',
    slug: 'spacedev',
    name: 'SpaceDev',
    description: "Fresh and powerful software development company I'm currently working on. I work as a fullstack developer and a frontend referent.",
    image: SpaceLogo,
  },
  {
    id: 'ritmo',
    slug: 'ritmo',
    name: 'Ritmo',
    description: 'Sound branding startup running in Argentina, Uruguay and US. This is my side project, currently as a tech lead and associate of the company.',
    image: RitmoLogo,
  },
]

export const oldProjects = [
  {
    id: 'cisem',
    slug: 'cisem',
    name: 'S.O.S. App',
    description: 'Project for the government of San Juan, Argentina. Currently being used at 150 points in the city',
    image: CisemLogo,
  },
  {
    id: 'oknube',
    slug: 'ok-nube',
    name: 'OkNube',
    description: "Startup I'm working in. It's a platform where you can make an online store in minutes.",
    image: OkNubeLogo,
  },
  {
    id: 'flashMeet',
    slug: 'flash-meet',
    name: 'Flash Meet',
    description: "Personal project. It's an app to make video conferences without leaving the browser.",
    image: FlashMeetLogo,
  },
  {
    id: 'todo10',
    slug: 'todo10',
    name: 'Todo10',
    description: 'Website for a hosting company. Required not only nice animations but recursive logic also.',
    image: Todo10Logo,
  },
  {
    id: 'aldia',
    slug: 'aldia',
    name: 'Al Día',
    description: 'Platform to make it easy to check your debts and pay them in installments.',
    image: AldiaLogo,
  },
  {
    id: 'coursesPlatform',
    slug: 'courses-platform',
    name: 'Courses platform',
    description: 'Courses platform for a client.',
    icon: (
      <div className="w-16 flex-shrink-0 h-16 gradient-rose rounded-xl flex items-center justify-center text-white transform rotate-6">
        <Student size={90} weight="thin" className="relative -bottom-2 -right-2 transform -rotate-6" />
      </div>
    ),
  },
]