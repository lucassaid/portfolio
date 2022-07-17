import { useState, useEffect, useMemo, useCallback, useRef, MouseEventHandler } from 'react'

export interface User {
  username: string,
}


function findCurrentWord(input: HTMLInputElement) {
  let count = 0
  if (!input.selectionEnd) return ''
  const words = input.value.split(' ')
  for (const word of words) {
    count += word.length + 1
    if (count == input.selectionEnd) return ''
    if (count > input.selectionEnd) return word
  }
  return ''
}

export default function useMentionHandler(users: User[]) {

  const [highlightIndex, setHighlightIndex] = useState(0)
  const [mentioning, setMentioning] = useState(false)
  const [filterText, setFilterText] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setHighlightIndex(0)
  }, [filterText])

  const usersToMention = useMemo(() => {
    return users
      .filter(({ username }) => username.toLocaleLowerCase().startsWith(filterText.toLocaleLowerCase()))
      .sort((a, b) => a.username.localeCompare(b.username))
      .map((user, index) => ({ ...user, highlighted: highlightIndex == index }))
  }, [users, filterText, highlightIndex])

  const addMention = useCallback((username: string) => {
    if (!inputRef.current) return
    setMentioning(false)
    const word = findCurrentWord(inputRef.current)
    const restOfUserName = username.slice(word.length - 1) + ' '
    inputRef.current.setRangeText(
      restOfUserName,
      inputRef.current.selectionStart || 0,
      inputRef.current.selectionEnd || 0,
      'end'
    )
    inputRef.current.focus()
  }, [])

  const handleInputKeyDown = useCallback((e: KeyboardEvent) => {
    if (!mentioning) return
    e.stopPropagation()
    switch (e.code) {
      case 'ArrowUp':
        e.preventDefault()
        const isFirst = highlightIndex == 0
        setHighlightIndex(isFirst ? usersToMention.length - 1 : highlightIndex - 1)
        break
      case 'ArrowDown':
        e.preventDefault()
        const isLast = highlightIndex == usersToMention.length - 1
        setHighlightIndex(isLast ? 0 : highlightIndex + 1)
        break
      case 'Enter':
        e.preventDefault()
        const selectedUser = usersToMention[highlightIndex]
        selectedUser && addMention(selectedUser.username)
        break
    }
  }, [addMention, highlightIndex, mentioning, usersToMention])

  const checkIfMentioning = useCallback((_e: KeyboardEvent | MouseEventHandler) => {
    if (!inputRef.current) return
    const word = findCurrentWord(inputRef.current)
    const startsWithAt = word.startsWith('@')
    setMentioning(startsWithAt)
    startsWithAt && setFilterText(word.slice(1))
  }, [])

  const inputProps = {
    onKeyDown: handleInputKeyDown,
    onKeyUp: checkIfMentioning,
    onClick: checkIfMentioning,
    ref: inputRef
  }

  return {
    mentioning,
    addMention,
    usersToMention,
    inputProps,
    inputRef,
  }
}