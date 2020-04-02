import React, { ReactElement, memo, useRef } from "react"
import { Canvas } from "react-three-fiber"
import { Color, Uncharted2ToneMapping, Vector3 } from "three"

import Particles from "./particles"
import "./style/index.less"

type HomeContentProps = {}

function HomeContent(props: HomeContentProps): ReactElement {
  const mouse = useRef([0, 0])
  const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent)

  return (
    <div className="home-content-container">
      <Canvas
        pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
        camera={{ fov: 100, position: new Vector3(0, 0, 30) }}
        onCreated={({ gl }) => {
          gl.toneMapping = Uncharted2ToneMapping
          gl.setClearColor(new Color("#050505"))
        }}
      >
        <fog attach="fog" args={["white", 50, 190]} />
        <pointLight distance={100} intensity={4} color={new Color("white")} />
        <Particles count={isMobile ? 5000 : 10000} mouse={mouse} />
      </Canvas>
    </div>
  )
}

export default memo(HomeContent)
