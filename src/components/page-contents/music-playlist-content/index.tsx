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
        <p>
          Here is my music playlist! One habit I would love to keep, is to
          actively look for new songs every week. I've been doing this for over
          ten years now and it has always been a hobby of mine. Below is my
          current playlist that I thought I'll share on my website since music
          has always been important in my life.
        </p>
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
