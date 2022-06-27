import JulietaAmeliaLogo from './img/julieta-amelie.png'
import OkNubeLogo from './img/oknube.svg'
import FlashMeetLogo from './img/flash-meet.svg'
import RitmoLogo from './img/ritmo.svg'
import SpaceLogo from './img/space.svg'

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
    id: 'amelieJulieta',
    slug: 'amelie-julieta',
    name: 'Amelie Julieta',
    description: 'Courses platform for a client. Her students will buy and watch her courses here.',
    image: JulietaAmeliaLogo,
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
  }
]