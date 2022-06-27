import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import MentionSelector from './MentionSelector'
import useMentionHandler from './useMentionHandler'

export default function MentionDemo() {

  const initialOpen = useRef(true)
  const { ref, inView } = useInView({ threshold: 0 })

  const {
    mentioning,
    usersToMention,
    addMention,
    inputProps,
    inputRef,
  } = useMentionHandler([{ username: 'lucas' }, { username: 'toshi' }, { username: 'chiki' }])

  useEffect(() => {
    if (inView) {
      inputRef.current?.click()
      inputRef.current?.focus()
    }
  }, [inView, inputRef])

  useEffect(() => {
    initialOpen.current = false
  }, [])

  const mentionSelector = (
    <motion.div
      key="mention"
      transition={{ type: 'tween' }}
      exit={{ y: -100, opacity: 0 }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: -120, opacity: 1 }}
    >
      <MentionSelector
        users={usersToMention}
        onUserClicked={addMention}
      />
    </motion.div>
  )

  return (
    <div className="flex justify-center" >
      <div className="relative top-10" ref={ref}>
        <AnimatePresence>
          {(mentioning) && mentionSelector}
        </AnimatePresence>
        {/* @ts-ignore */}
        <input
          defaultValue="Hello @"
          className="bg-transparent relative z-10 text-xl px-3 py-1 rounded-lg bg-gradient-to-tr from-sky-400 to-emerald-400 focus:ring focus:outline-none"
          {...inputProps}
        />
      </div>
    </div>
  )
}