import AgendaLogo from './img/agenda-logo.svg'
import MentionHookLogo from './img/mention-hook-logo.svg'
import SpeedometerLogo from './img/speedometer-logo.svg'
import HScrollLogo from './img/h-scroll-logo.svg'
import SpeedometerDemo from '../../components/SpeedometerDemo'
import MentionDemo from '../../components/MentionDemo'
import HorizontalScrollDemo from '../../components/HorizontalScroll/HorizontalScrollDemo'
import { Link } from 'react-router-dom'
import CodeLinks from './CodeLinks'
import LandingDemo from '../../components/Agenda/LandingDemo'

export const openSourceProjects = [
  {
    id: 'agenda',
    icon: AgendaLogo,
    title: 'Headless agenda',
    description: (
      <>
        <p>First-in-class agenda component for React. It provides all the functionality, leaving markup and styles up to you 😎</p>
        <p>Currently being used in production at <Link to="/project/ritmo">Ritmo</Link>, and I recently published it on NPM. Check out more:</p>
        <CodeLinks
          github="https://github.com/lucassaid/react-headless-agenda"
          npm="https://npmjs.com/react-headless-agenda"
        />
      </>
    ),
    example: <LandingDemo />,
  },
  {
    id: 'mention',
    icon: MentionHookLogo,
    title: 'useMention',
    description: (
      <>
        <p>
          Small React hook that handles the events of an input to understand whether you are trying to mention someone.
          You can write the name of a user to filter the list, and use the arrow keys to change the selection.
        </p>
        <p>
          All markup and styles up to you (because I am sure headless components are the future).
        </p>
        <p>
          Currently being used in production in a chat app. I will release this soon as one of my open source projects.
        </p>
      </>
    ),
    example: <MentionDemo />,
  },
  {
    id: 'speedometer',
    icon: SpeedometerLogo,
    title: 'Speedometer',
    rowClass: 'items-stretch',
    description: (
      <>
        <p>Finally a cool speedometer for React 😎. This is a largely customizable set of components to create your own speedometer.</p>
        <p>
          Performant, made out of SVG, supports negative numbers, and overall cool. You can use render props to render your own needle, marks, and more (because I&apos;m an addict to render props I can&apos;t help it).
        </p>
        <p>
          I have a
          <a href="https://www.npmjs.com/package/react-native-cool-speedometer" target="_blank" rel="noreferrer">
            &nbsp;React Native&nbsp;
          </a>
          version with some downloads already, (and some
          <a href="https://github.com/lucassaid/react-native-cool-speedometer/issues/11#issue-1212963751" target="_blank" rel="noreferrer">
            &nbsp;good feedback&nbsp;
          </a>
          which makes me really happy),
          and also a
          <a href="https://www.npmjs.com/package/react-speedometer" target="_blank" rel="noreferrer">
            &nbsp;React version.&nbsp;
          </a>
          I have plans for unifying these since the code (except some JSX) is actually the same 🧐.
        </p>
        <CodeLinks
          github="https://github.com/lucassaid/react-native-cool-speedometer"
          npm="https://npmjs.com/react-native-cool-speedometer"
        />
      </>
    ),
    example: (
      <SpeedometerDemo />
    ),
  },
  {
    id: 'hScroll',
    icon: HScrollLogo,
    title: 'Horizontal Scroll',
    description: (
      <>
        <p>A headless component that allows the user to zoom in-out while scrolling. You can drag your mouse up and down to zoom in and out, while scrolling horizontally.</p>
        <p>Could be used for interfaces with large horizontal containers, such as video edition apps or gantt charts. This library is under development and will be released soon.</p>
        <p>Try it out! the example is interactive</p>
      </>
    ),
    example: <HorizontalScrollDemo />,
  }
] 
