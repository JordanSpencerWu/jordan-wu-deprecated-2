import React, { ReactElement, memo } from "react"
import { Canvas } from "react-three-fiber"
import { Uncharted2ToneMapping, Color } from "three"

import "./style/index.less"
import Stars from "./stars"

const fov = 75
const near = 0.01
const far = 1000

type HomeContentProps = {}

function HomeContent(props: HomeContentProps): ReactElement {
  const isMobile =
    typeof window !== `undefined` &&
    /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent)

  return (
    <div className="home-content-container">
      <Canvas
        pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
        camera={{
          fov,
          near,
          far,
        }}
        onCreated={({ gl }) => {
          gl.toneMapping = Uncharted2ToneMapping
        }}
      >
        <pointLight
          distance={1000}
          intensity={4}
          color={new Color("lightblue")}
        />
        <Stars count={isMobile ? 5000 : 10000} />
      </Canvas>
    </div>
  )
}

export default memo(HomeContent)
