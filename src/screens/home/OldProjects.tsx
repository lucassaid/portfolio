import { Link } from 'react-router-dom'
import { oldProjects } from '../../data/projects/projects'

export default function OldProjects() {
  return (
    <div className="lg:flex justify-between gap-16 space-y-10 lg:space-y-0">
      {oldProjects.map(project => (
        <div
          key={project.id}
          className="flex gap-4"
        >
          <img
            src={project.image}
            className="w-16 flex-shrink-0 h-16"
          />
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