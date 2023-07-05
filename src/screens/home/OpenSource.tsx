import { openSourceProjects } from '../../data/open-soruce/openSourceData'

export default function OpenSourceProjects() {

  return (
    <>
      <div className="container text-center mb-20 space-y-6">
        <h2>
          Open source projects
        </h2>
        <p className="max-w-3xl mx-auto">
          Some components and libraries I abstracted from the projects I worked on, and I wanted to share with the community.
          The motivation for all of these was that I couldn&apos;t find similar open-source solutions, so I think they have something new to offer.
        </p>
        <p>
          Try them out! All examples are interactive.
        </p>
      </div>
      <div className="container space-y-28">
        {openSourceProjects.map((projectInfo, i) => (
          <div
            key={projectInfo.id}
            className={`
              lg:flex gap-10 space-y-6 lg:space-y-0
              ${i % 2 !== 0 ? 'flex-row-reverse' : ''}
              ${projectInfo.rowClass || 'items-center'}
            `}
          >
            <div className="lg:w-6/12">
              {projectInfo.example}
            </div>
            <div className="lg:w-6/12">
              <img
                src={projectInfo.icon}
                className="w-24 mb-2"
              />
              <h3 className="mb-2">
                {projectInfo.title}
              </h3>
              <div className="space-y-2">
                {projectInfo.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}