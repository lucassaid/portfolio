import { motion } from 'framer-motion'
import { useState } from 'react'
import Point3d from './Point3d'

export default function Point3dDemo() {

  const [rotation, setRotation] = useState(20)
  const [storageOpened, setStorageOpened] = useState(false)
  const [aidKitOutside, setAidKitOutside] = useState(false)

  return (
    <div
      onMouseEnter={() => setRotation(160)}
      onMouseLeave={() => setRotation(-40)}
    >
      <motion.div
        className="relative"
        onViewportEnter={() => setRotation(-40)}
        onViewportLeave={() => setRotation(20)}
        viewport={{ amount: 'all' }}
      >
        <div
          className="gradient-green absolute w-[300px] h-[300px] left-0 top-40 z-40 rounded-3xl"
          style={{
            mixBlendMode: 'plus-lighter',
            transform: 'rotate(328deg) scale(2)',
          }}
        />
        <Point3d
          rotateY={rotation}
          backDoorOpened={storageOpened}
          storageVisible={aidKitOutside}
        />
        <button
          className={`
            absolute z-50 whitespace-nowrap -left-36 bottom-2 bg-white/20 text-white border-none transition-opacity
            ${rotation > 130 ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={() => {
            if (!storageOpened) {
              setStorageOpened(true)
              setTimeout(() => {
                setAidKitOutside(true)
              }, 150)
            } else {
              setAidKitOutside(false)
              setTimeout(() => {
                setStorageOpened(false)
              }, 200)
            }
          }}
        >
          {storageOpened ? 'Close storage' : 'Open storage'}
        </button>
      </motion.div>
    </div>
  )
}