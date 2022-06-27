import Compass from './Compass'

export default function CompassDemo() {
  return (
    <div className="relative">
      <div
        className="gradient-orange absolute h-32 top-0 z-40"
        style={{
          mixBlendMode: 'plus-lighter',
          width: '100%',
          transform: 'rotate(20deg)',
          top: -48,
          right: -40,
          borderRadius: 20,
        }}
      />
      <Compass />
    </div>
  )
}