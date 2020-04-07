import React, { ReactElement } from "react"

import Layout from "../components/layout"
import MusicPlaylistContent from "../components/page-contents/music-playlist-content"
import SEO from "../components/seo"

export default (): ReactElement => {
  return (
    <Layout>
      <SEO title="My Music Playlist" description="My current music playlist." />
      <MusicPlaylistContent />
    </Layout>
  )
}
