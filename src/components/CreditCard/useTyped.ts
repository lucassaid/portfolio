import { useCallback, useRef, useState } from 'react'

export default function useTyped(completeText: string, time?: number) {

  const intervalRef = useRef<NodeJS.Timer>()
  const [text, setText] = useState('')

  const play = useCallback(() => {
    intervalRef.current = setInterval(() => {
      if (text === completeText) return
      setText(curr => completeText.slice(0, curr.length + 1))
    }, time || 200)
  }, [text, setText, completeText, time])

  const pause = () => clearInterval(intervalRef.current)

  const reset = () => {
    pause()
    setText('')
  }

  const isFinished = text === completeText

  const isPlaying = () => Boolean(intervalRef.current)

  return { text, play, pause, reset, isFinished, isPlaying }
}