import { Link, useParams } from 'react-router-dom'
import useSWR from 'swr'
import { articleFetcher } from '../../lib/fetcher'


export default function ProjectScreen() {

  const { slug } = useParams()

  const { data, error } = useSWR(`/projects/${slug}.md`, articleFetcher)

  if (!data) return null

  const date = new Date(data.info.date).toDateString()

  return (
    <>
      <div className="bg-slate-900 text-white">
        <div className="bg-gradient-to-tr from-purple-600/40 to-sky-600/40">
          <div className="h-10" />
          <div className="container-small">
            <div className="text-lg">
              <Link to="../" className="text-white">
                ← &nbsp;Back to home
              </Link>
            </div>
            <div className="h-10" />
            <div className="h-10" />
            <div className="h-10" />
            <h2>
              {data.info.title}
            </h2>
            <div className="mt-5">
              {date}
            </div>
          </div>
          <div className="h-10" />
          <div className="h-10" />
        </div>
      </div>
      <div className="h-10" />
      <div className="container-small">
        <div
          className="space-y-3"
          dangerouslySetInnerHTML={{ __html: data.htmlContent }}
        />
        <div className="h-20" />
        <Link to="../">
          ← Back to home
        </Link>
      </div>
      <div className="h-20" />
    </>
  )
}