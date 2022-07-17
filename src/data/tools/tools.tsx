import react from './img/react.svg'
import firebase from './img/firebase.svg'
import express from './img/express.svg'
import socketio from './img/socketio.svg'
import redux from './img/redux.svg'
import tailwind from './img/tailwind.svg'
import recoil from './img/recoil.svg'
import next from './img/next.svg'
import cra from './img/cra.svg'
import node from './img/node.svg'
import mongodb from './img/mongodb.svg'
import typescript from './img/typescript.svg'
import reactRouter from './img/react-router.svg'
import framerMotion from './img/framer-motion.png'
import storybook from './img/storybook.svg'
import swr from './img/swr.svg'

export const tools = [
  {
    id: 'react',
    title: 'React',
    icon: react,
    detail: (
      <>
        <p>
          I migrated from Lit Element to React, already knowing basic concepts like lifecycle and props.
        </p>
        <p>
          In these two and half years I worked on several apps and projects made with React:
        </p>
        <ul className="list-disc ml-4">
          <li>
            10 React apps started from scratch and currently in production
          </li>
          <li>
            3 React Apps in production maintained as a team member at SpaceDev, along with some other projects I pitch in to help
          </li>
          <li>
            5 personal or client projects that never got to production
          </li>
          <li>
            Starting some open source libraries (listed below)
          </li>
        </ul>
      </>
    )
  },
  {
    id: 'firebase',
    title: 'Firebase',
    icon: firebase,
    detail: (
      <p>
        I used most of the Firebase products along my career. I have the most experience with Firestore, Authentication, and Cloud Messaging.
      </p>
    )
  },
  {
    id: 'tailwind',
    title: 'TailwindCSS',
    icon: tailwind,
    detail: (
      <p>
        I wrote pure CSS for around 5 years, and a little of SCSS too. I couldn&apos;t go back to the traditional way, since Tailwind makes the styling a thousand times faster and fun.
      </p>
    )
  },
  {
    id: 'recoil',
    title: 'Recoil',
    icon: recoil,
    detail: (
      <p>
        I tend to set the state of the components in their closest common ancestor (<a href="https://reactjs.org/docs/lifting-state-up.html">as recommended</a>).
        But yes, we often need some state to be global, and Recoil is a great choice to get it. I have used Recoil in my last projects and it is really natural and easy to use.
      </p>
    )
  },
  {
    id: 'nextjs',
    title: 'Next.js',
    icon: next,
    detail: (
      <p>
        I started learning React with Next.js and made around 10 projects with it, 7 of them currently in production.
        Lately I&apos;m using CRA mostly because I really like React Router and SWR.
      </p>
    )
  },
  {
    id: 'cra',
    title: 'Create React App',
    icon: cra,
    detail: (
      <p>
        Main React framework I use lately. I worked on around 9 projects using it, 5 of them from scratch to production.
      </p>
    )
  },
  {
    id: 'swr',
    title: 'SWR',
    icon: swr,
    detail: (
      <p>
        It&apos;s surprising to see how the quality of the code improves using this library, I really think we don&apos;t need Redux anymore 🙅‍♀️.
        Actually, the <a href="https://github.com/vercel/swr/issues/315#issuecomment-606172104">Vercel team has been using SWR instead of Redux for more than two years now</a>.
      </p>
    )
  },
  {
    id: 'typescript',
    title: 'Typescript',
    icon: typescript,
    detail: (
      <p>
        Using Typescript for around one year now, for my last projects. I couldn&apos;t go back to write plain javascript after this, Typescript saves a lot of time, prevents errors,
        and it lets you write cleaner code with more confidence.
      </p>
    )
  },
  {
    id: 'framerMotion',
    title: 'Framer Motion',
    icon: framerMotion,
    iconClass: 'invert-[0.50]',
    detail: (
      <p>
        It&apos;s a great library to make complex animations for the web, my choice for all projects where I need some fancy things (like that weird prisma rotating above in this page)
      </p>
    )
  },
  {
    id: 'storybook',
    title: 'Storybook',
    icon: storybook,
    detail: (
      <p>
        I build my projects with this &quot;component-driven&quot; development method, so Storybook is a good ally for me.
      </p>
    )
  },
  {
    id: 'node',
    title: 'Node.js',
    icon: node,
  },
  {
    id: 'express',
    title: 'Express',
    icon: express,
  },
  {
    id: 'socketio',
    title: 'Socket.io',
    icon: socketio,
  },
  {
    id: 'redux',
    title: 'Redux',
    icon: redux,
  },
  {
    id: 'reactRouter',
    title: 'React Router',
    icon: reactRouter,
  },
  {
    id: 'mongodb',
    title: 'MongoDB',
    icon: mongodb,
  },
]