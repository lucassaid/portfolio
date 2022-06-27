import { GithubLogo } from 'phosphor-react'
import NPMLogo from '../img/n.svg'

interface CodeLinksProps {
  github: string
  npm: string
}

export default function CodeLinks({ github, npm }: CodeLinksProps) {
  return (
    <div className="flex space-x-2 pt-2">
      <a href={github} target="_blank" rel="noreferrer">
        <GithubLogo size={30} className="w-8 h-8 rounded bg-slate-900/50 text-white p-1" />
      </a>
      <a href={npm} target="_blank" rel="noreferrer">
        <img src={NPMLogo} className="w-8 rounded" />
      </a>
    </div>
  )
}