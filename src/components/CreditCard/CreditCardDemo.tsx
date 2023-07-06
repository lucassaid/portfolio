import { useEffect, useRef, useState } from 'react'
import CreditCard from './CreditCard'
import useTyped from './useTyped'
import { motion } from 'framer-motion'

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms))

const completeNumber = '4555123123327645'
const completeCode = '123'

export default function CreditCardDemo() {

  const [flipped, setFlipped] = useState(false)
  const { text: number, play, reset, isFinished } = useTyped(completeNumber, 120)
  const { text: code, play: playCode, reset: resetCode, isFinished: finishedCode } = useTyped(completeCode)
  const mounted = useRef(false)

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

  useEffect(() => {
    if (mounted.current) return
    mounted.current = true
    play()
  }, [play])

  return (
    <motion.div
      transition={{
        bounce: 0.5,
        type: 'spring',
        duration: 2,
      }}
      animate={{
        rotate: flipped ? 6 : -6,
      }}
    >
      <CreditCard
        number={number}
        flipped={flipped}
        name="Lucas Said"
        vDate="06/30"
        code={code}
      />
    </motion.div>
  )
}