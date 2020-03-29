import React, { ReactElement, memo, useState } from "react"

import Loader from "./loader"
import "./style/index.less"

type MusicPlaylistContentProps = {}

function MusicPlaylistContent(props: MusicPlaylistContentProps): ReactElement {
  const [loading, setLoading] = useState(true)

  const onLoad = () => {
    setLoading(false)
  }

  return (
    <div className="music-playlist-container">
      <div className="music-playlist-content-container">
        <div className="music-playlist-spotify-container">
          {loading && <Loader />}
          <iframe
            src="https://open.spotify.com/embed/playlist/5Kuayyzz6WVOacD4ZDORvB"
            width="300"
            height="380"
            allow="encrypted-media"
            onLoad={onLoad}
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default memo(MusicPlaylistContent)
