export enum infoKeys {
  TITLE = 'title',
  DATE = 'date',
}

export interface ProjectInfo {
  title: string
  date: string
  logo: string
}

export const parseFrontMatter = (str: string) => {
  const [, frontMatter, rest] = str.split('---')
  let arr = frontMatter.split('\n')
  arr.pop()
  arr.shift()
  const data = arr.reduce((acc: ProjectInfo, str: string) => {
    const [key, ...rest] = str.split(': ')
    const value = rest.join(': ')
    acc[key as keyof ProjectInfo] = value.substring(1, value.length - 1)
    return acc
  }, {} as ProjectInfo)

  return { data, rest }
}