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
          className="gradient-green absolute h-full left-0 top-0 z-40"
          style={{
            mixBlendMode: 'plus-lighter',
            width: 176,
            transform: 'rotate(328deg)',
            left: -78,
            borderRadius: 20,
          }}
        />
        <Point3d
          rotateY={rotation}
          backDoorOpened={storageOpened}
          storageVisible={aidKitOutside}
        />
        {rotation > 130 && (
          <button
            className="absolute z-50 whitespace-nowrap -left-36 bottom-2 border-slate-900"
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
        )}
      </motion.div>
    </div>
  )
}