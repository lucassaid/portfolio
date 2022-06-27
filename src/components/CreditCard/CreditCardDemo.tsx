import { useEffect, useState } from 'react'
import CreditCard from './CreditCard'
import useTyped from './useTyped'

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms))

const completeNumber = '4555123123327645'
const completeCode = '123'

export default function CreditCardDemo() {

  const [flipped, setFlipped] = useState(false)
  const { text: number, play, reset, isFinished } = useTyped(completeNumber, 120)
  const { text: code, play: playCode, reset: resetCode, isFinished: finishedCode } = useTyped(completeCode)

  useEffect(() => {
    const flip = async () => {
      await sleep(500)
      setFlipped(true)
      await sleep(500)
      playCode()
    }
    if (isFinished) {
      flip()
    }
  }, [isFinished])

  useEffect(() => {
    const backToStart = async () => {
      await sleep(1000)
      setFlipped(false)
      reset()
      await sleep(800)
      resetCode()
      play()
    }
    if (finishedCode) {
      backToStart()
    }
  }, [finishedCode, play])

  return (
    <div>
      <CreditCard
        number={number}
        flipped={flipped}
        name="Lucas Said"
        vDate="06/30"
        code={code}
      />
      <button onClick={play}>
        p
      </button>
    </div>
  )
}