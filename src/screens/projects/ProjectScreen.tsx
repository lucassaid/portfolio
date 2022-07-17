import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useSWR from 'swr'
import { articleFetcher } from '../../lib/fetcher'

export const mapSlugBackground = {
  spacedev: 'gradient-space',
  ritmo: 'gradient-blue'
}

export default function ProjectScreen() {

  const { slug } = useParams()

  const { data } = useSWR(`/projects/${slug}.md`, articleFetcher)

  // useEffect(() => {
  //   console.log('EFFECT')
  //   setTimeout(() => {
  //     window.scroll(0, 0)
  //   }, 100)
  // }, [slug])

  if (!data || !slug) return null

  const date = new Date(data.info.date).toDateString()

  const className = mapSlugBackground[slug as keyof typeof mapSlugBackground]
    || 'bg-gradient-to-tr from-purple-600/40 to-sky-600/40'

  return (
    <>
      <div className="bg-slate-900 text-white">
        <div className={className}>
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
          className="space-y-3 article"
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