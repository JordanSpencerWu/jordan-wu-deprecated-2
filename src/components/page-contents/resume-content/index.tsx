import React, { ReactElement, memo } from "react"

import "./style/index.less"

type ResumeContentProps = {}

function ResumeContent(props: ResumeContentProps): ReactElement {
  return (
    <div className="resume-content-container">
      <div className="resume-content-resume-container">
        <h3>Coming soon</h3>
      </div>
    </div>
  )
}

export default memo(ResumeContent)
