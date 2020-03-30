import React, { ReactElement, memo } from "react"

import "./style/index.less"

type HomeContentProps = {}

function HomeContent(props: HomeContentProps): ReactElement {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  return (
    <div className="home-content-container">
      ADD SOMETHING COOL WITH THREE.JS
    </div>
  )
}

export default memo(HomeContent)
