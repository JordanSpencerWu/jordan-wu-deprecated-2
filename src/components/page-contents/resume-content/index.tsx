import React, { ReactElement, memo } from "react"

import "./style/index.less"

type ResumeContentProps = {}

function ResumeContent(props: ResumeContentProps): ReactElement {
  return (
    <div className="resume-content-container">
      <div className="resume-content-resume-container">
        <h1>TODO ADD UPDATED RESUME HERE</h1>
      </div>
    </div>
  )
}

export default memo(ResumeContent)
