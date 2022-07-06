import { Link } from 'react-router-dom'
import { oldProjects } from '../../data/projects/projects'

export default function OldProjects() {
  return (
    <div className="justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
      {oldProjects.map(project => (
        <div
          key={project.id}
          className="flex gap-4"
        >
          {project.image ? (
            <img
              src={project.image}
              className="w-16 flex-shrink-0 h-16"
            />
          ) : null}
          {project.icon ? project.icon : null}
          <div>
            <h5>
              {project.name}
            </h5>
            {project.description}
            <div>
              <Link
                to={`/project/${project.slug}`}
                className="text-accent"
              >
                See more →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}