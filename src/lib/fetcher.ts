import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import { parseFrontMatter, ProjectInfo } from './front-matter'

export const fetcher = (url: string) => fetch(url).then(r => r.json())

interface ProjectData {
  info: ProjectInfo
  htmlContent: string
}

export const articleFetcher = async (url: string): Promise<ProjectData> => {
  const r = await fetch(url).then(r => r.blob())
  const text = await r.text()

  const { data, rest } = parseFrontMatter(text)

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml, { sanitize: false })
    .process(rest)
  const htmlContent = processedContent.toString()
  return { info: data, htmlContent }
}
