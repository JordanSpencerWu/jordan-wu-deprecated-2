import React, { ReactElement } from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default (): ReactElement => {
  return (
    <Layout>
      <SEO title="Music Playlist" description="My current music playlist.!" />
      <div>Add spotify playlist here.</div>
    </Layout>
  )
}
