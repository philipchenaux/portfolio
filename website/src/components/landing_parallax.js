import React from 'react'
import { useSpring, animated } from 'react-spring'
import '../App.css'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10 - 10}px,${y / 10 - 15}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 20}px,${y / 8 + 15}px,0)`
const trans3 = (x, y) => `translate3d(${x / 5 - 220}px,${y / 5 + 230}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3 - 190}px,${y / 3 + 200}px,0)`

function Card() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 20, tension: 200, friction: 250 } }))
  return (
    <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
    </div>
  )
}

export default Card;