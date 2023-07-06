import { Envelope, GithubLogo, LinkedinLogo } from 'phosphor-react'

export default function Footer() {
  return (
    <div className="container gap-20">
      <div className="mb-4">
        <h3 className="mb-2">
          Lucas Said
        </h3>
        <p>
          Analytical and self-critical, lover of cats and coffee.
        </p>
      </div>
      <hr className="border-slate-300" />
      <div className="space-y-1 mt-4">
        <a
          className="flex items-center gap-2"
          href="mailto:lucas@lucassaid.me"
        >
          <Envelope size={24} />
          lucas@lucassaid.me
        </a>
        <a
          className="flex items-center gap-2"
          href="https://github.com/lucassaid"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo size={24} />
          github.com/lucassaid
        </a>
        <a
          className="flex items-center gap-2"
          href="https://linkedin.com/in/lucassaid"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo size={24} />
          linkedin.com/in/lucassaid
        </a>
      </div>
    </div>
  )
}