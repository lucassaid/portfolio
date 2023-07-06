import { Link } from 'react-router-dom'
import { mapSlugBackground, projects } from '../../data/projects/projects'
import { ArrowSquareOut } from 'phosphor-react'

export default function CurrentProjects() {
  return (
    <div className="md:flex gap-x-14 gap-y-10 space-y-14 md:space-y-0 flex-wrap" >
      {projects.map(project => (
        <div
          className="space-y-2 md:w-5/12"
          key={project.id}
        >
          <div className={`
            p-4 rounded-xl inline-flex mb-2
            ${mapSlugBackground[project.slug as keyof typeof mapSlugBackground]}
          `}
          >
            <img
              src={project.image}
              className="w-24 h-24"
            />
          </div>
          <h4>
            {project.name}
          </h4>
          <p>
            {project.description}
          </p>
          <div>
            {project.url ? (
              <a
                target="_blank"
                href={project.url}
                rel="noreferrer"
                className="flex items-center gap-x-1"
              >
                See website
                <ArrowSquareOut />
              </a>
            ) : (
              <Link
                to={`/project/${project.slug}`}
                className="text-accent"
              >
                Read article →
              </Link>
            )}
          </div>
        </div>
      ))}
      <div className="hidden lg:block w-36" />
    </div>
  )
}