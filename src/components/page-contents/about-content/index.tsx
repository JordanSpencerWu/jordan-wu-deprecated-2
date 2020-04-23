import React, { ReactElement, memo } from "react"

import "./style/index.less"

type ResumeContentProps = {}

function ResumeContent(props: ResumeContentProps): ReactElement {
  return (
    <div className="about-content-container">
      <div className="about-content-context-container">
        <h2 className="about-content-heading">About</h2>
        <p>I'm a software engineer in Salt Lake City, Utah. Passionate about music production, sound design, and building full stack applications.</p>
        <p>My focus has been on learning about how things works and how things can be improved. I realized early on that we are standing on the shoulders of giants and I want to contribute. </p>
        <p>I created this website to get better at teaching and to share knowledge that I learned. The goal is to write about what I'm learning in music production and in software engineering.</p>
      </div>
    </div>
  )
}

export default memo(ResumeContent)
