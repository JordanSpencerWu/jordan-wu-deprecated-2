import React, { ReactElement, memo } from "react"

const LoaderSVG = require("../../../images/spotify-loader.svg")

type LoaderProps = {}

function Loader(props: LoaderProps): ReactElement {
  return (
    <div className="music-playlist-loader-container fadeIn">
      <LoaderSVG />
    </div>
  )
}

export default memo(Loader)
