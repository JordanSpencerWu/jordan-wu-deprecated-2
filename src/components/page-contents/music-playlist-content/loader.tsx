import React, { ReactElement, memo } from "react"
import { useSpring, animated } from "react-spring"

const LoaderSVG = require("../../../images/spotify-loader.svg")

type LoaderProps = {}

function Loader(props: LoaderProps): ReactElement {
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={spring} className="music-playlist-loader-container">
      <LoaderSVG />
    </animated.div>
  )
}

export default memo(Loader)
