// import JulietaAmeliaLogo from './img/julieta-amelie.png'
import OkNubeLogo from './img/oknube.svg'
import FlashMeetLogo from './img/flash-meet.svg'
import RitmoLogo from './img/ritmo.svg'
import SpaceLogo from './img/space.svg'
import CisemLogo from './img/cisem.svg'
// import Todo10Logo from './img/todo10.svg'
import AldiaLogo from './img/aldia.svg'
import AgendaLogo from './img/agenda.svg'
import StemLogo from './img/stem.svg'
import { Student } from 'phosphor-react'

export const mapSlugBackground = {
  stem: 'gradient-emerald',
  ritmo: 'gradient-rose',
  agenda: 'bg-slate-100',
}

export const projects = [
  {
    id: 'stem',
    slug: 'stem',
    name: 'Stem',
    description: 'My current and loved company, it is a global Leader in AI-driven Clean Energy Solutions and Services. I work as a frontend engineer, side by side with the BE team.',
    image: StemLogo,
    url: 'https://www.stem.com/',
  },
  {
    id: 'ritmo',
    slug: 'ritmo',
    name: 'Ritmo',
    description: 'Sound branding startup operating in Argentina, Uruguay and US. This is my side project, currently as a tech lead and associate of the company.',
    image: RitmoLogo,
  },
  {
    id: 'agenda',
    slug: 'agenda',
    name: 'Headless Agenda',
    description: 'My most recent open source project. Headless components for React that allow you to build your own Agenda. It has some cool features such dragging and resizing events!',
    image: AgendaLogo,
    url: 'https://www.npmjs.com/package/react-headless-agenda',
  },
]

export const oldProjects = [
  {
    id: 'space',
    slug: 'spacedev',
    name: 'SpaceDev',
    description: "Software development company I've worked as a fullstack developer and a frontend referent.",
    image: SpaceLogo,
    imageClassName: 'bg-[#7157bc] p-1 rounded-lg',
  },
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
    description: "Startup I worked on for three years. It's a platform where you can make an online store in minutes.",
    image: OkNubeLogo,
  },
  {
    id: 'flashMeet',
    slug: 'flash-meet',
    name: 'Flash Meet',
    description: "Personal project. It's an app to make video conferences without leaving the browser.",
    image: FlashMeetLogo,
  },
  // {
  //   id: 'todo10',
  //   name: 'Todo10',
  //   url: 'https://todo10.com/en',
  //   description: 'Website for a hosting company. It has nice animations and recursive logic also. (article coming soon)',
  //   image: Todo10Logo,
  // },
  {
    id: 'aldia',
    name: 'Al Día',
    url: 'http://aldia.com.ar/',
    description: 'Platform to make it easy to check your debts and pay them in installments. (Article coming soon)',
    image: AldiaLogo,
  },
  {
    id: 'coursesPlatform',
    slug: 'courses-platform',
    name: 'Courses platform',
    description: 'Courses platform for a client. I created the homepage and a clean interface to manage courses and lessons.',
    icon: (
      <div className="w-16 flex-shrink-0 h-16 gradient-rose rounded-xl flex items-center justify-center text-white transform rotate-6">
        <Student size={90} weight="thin" className="relative -bottom-2 -right-2 transform -rotate-6" />
      </div>
    ),
  },
]