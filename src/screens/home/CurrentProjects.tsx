import { Link } from 'react-router-dom'
import { mapSlugBackground, projects } from '../../data/projects/projects'

export default function CurrentProjects() {
  return (
    <div className="md:flex justify-between gap-16 space-y-10 md:space-y-0">
      {projects.map(project => (
        <div
          className="flex-1 space-y-2"
          key={project.id}
        >
          <div className={`
            p-4 rounded-xl inline-flex
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
            <Link
              to={`/project/${project.slug}`}
              className="text-accent"
            >
              See more →
            </Link>
          </div>
        </div>
      ))}
      <div className="hidden lg:block w-36" />
    </div>
  )
}