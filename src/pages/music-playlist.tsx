import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default (props: PageProps) => {
  const {
    location: { pathname: currentPath },
  } = props

  return (
    <Layout currentPath={currentPath}>
      <SEO title="Music Playlist" description="My current music playlist.!" />
      <div>Add spotify playlist here.</div>
    </Layout>
  )
}
