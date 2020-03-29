import React, { ReactElement, memo } from "react"

import "./style/index.less"

type HomeContentProps = {}

function HomeContent(props: HomeContentProps): ReactElement {
  return (
    <div className="home-content-container">
      <div className="home-content-center-container">
        <h1>TODO ADD SOMETHING COOL HERE</h1>
      </div>
    </div>
  )
}

export default memo(HomeContent)
