import React, { ReactElement, memo, useState, useEffect } from "react"

import Loader from "./loader"
import "./style/index.less"

type MusicPlaylistContentProps = {}

const LOADER_TIME = 3

function MusicPlaylistContent(props: MusicPlaylistContentProps): ReactElement {
  const [spotifyLoading, setSpotifyLoading] = useState(true)
  const [loadTimer, setLoadTimer] = useState(0)
  const [timerDone, setTimerDone] = useState(false)

  let timeout
  useEffect(() => {
    timeout = setTimeout(() => {
      if (loadTimer < LOADER_TIME) {
        setLoadTimer(loadTimer + 1)
      } else {
        setTimerDone(true)
        clearTimeout(timeout)
      }

      return () => clearTimeout(timeout)
    }, 1000)
  }, [loadTimer])

  const onLoad = () => {
    setSpotifyLoading(false)
  }

  const showLoader =
    spotifyLoading === false && timerDone === true ? false : true

  return (
    <div className="music-playlist-container">
      <div className="music-playlist-content-container">
        <div className="music-playlist-spotify-container">
          {showLoader && <Loader />}
          <iframe
            className={!showLoader ? "active" : ""}
            src="https://open.spotify.com/embed/playlist/2e2pAMDwIsYVg2zKErmXfd"
            allow="encrypted-media"
            onLoad={onLoad}
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default memo(MusicPlaylistContent)
