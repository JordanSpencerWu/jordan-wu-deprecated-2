import React, { ReactElement } from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import MusicPlaylistContent from "../components/page-contents/music-playlist-content"

export default (): ReactElement => {
  return (
    <Layout>
      <SEO title="My Music Playlist" description="My current music playlist." />
      <MusicPlaylistContent />
    </Layout>
  )
}
