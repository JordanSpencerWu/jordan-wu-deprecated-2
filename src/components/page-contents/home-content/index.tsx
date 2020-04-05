import React, { ReactElement, memo, useRef, Suspense } from "react"
import { Canvas } from "react-three-fiber"
import { Color, Uncharted2ToneMapping, Vector3 } from "three"

import "./style/index.less"

type HomeContentProps = {}

function HomeContent(props: HomeContentProps): ReactElement {
  const isMobile =
    typeof window !== `undefined` &&
    /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent)

  return (
    <div className="home-content-container">
      <Canvas
        pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
        camera={{ fov: 100, position: new Vector3(0, 0, 10) }}
        onCreated={({ gl }) => {
          gl.toneMapping = Uncharted2ToneMapping
        }}
      >
        <pointLight distance={100} intensity={4} color={new Color("white")} />
      </Canvas>
    </div>
  )
}

export default memo(HomeContent)
