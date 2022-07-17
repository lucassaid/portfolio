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
  } = useMentionHandler([
    { username: 'Lucas' },
    { username: 'John' },
    { username: 'Chris' },
    { username: 'Sarah' },
    { username: 'Demi' },
    { username: 'Bret' },
    { username: 'Maynard' },
    { username: 'Marianne' },
    { username: 'Laila' },
    { username: 'Wesley' },
    { username: 'Jett' },
    { username: 'Hailie' },
    { username: 'Toby' },
    { username: 'Simon' },
    { username: 'Christopher' },
    { username: 'Lindsey' },
    { username: 'Joyce' },
    { username: 'Ruby' },
    { username: 'Nelson' },
    { username: 'Regina' },
    { username: 'Milo' },
    { username: 'Richard' },
    { username: 'Luke' },
    { username: 'Yancy' },
    { username: 'Mack' },
    { username: 'Abel' },
    { username: 'Nichole' },
    { username: 'Peace' },
    { username: 'Kiley' },
  ])

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
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
          {mentioning && mentionSelector}
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