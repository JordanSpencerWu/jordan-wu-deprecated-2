import React, { memo, ReactElement } from "react"

import "./style/index.less"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const LinkedInIcon = require("../../images/linkedin-square.svg")
const GithubIcon = require("../../images/github-square.svg")

type FooterProps = {}

function Footer(props: FooterProps): ReactElement {
  const now = Date.now()
  const today = new Date(now)
  const thisYear = today.getFullYear()
  const { githubUrl, linkedinUrl } = useSiteMetadata()

  return (
    <div className="footer-container hide-on-screen-sm">
      <p>{`Copyright © ${thisYear} Jordan Wu. All Rights Reserved`}</p>
      <div className="footer-social-media-container">
        <a href={githubUrl} target="_blank">
          <GithubIcon />
        </a>
        <a href={linkedinUrl} target="_blank">
          <LinkedInIcon />
        </a>
      </div>
      <p>{`powered by Gatsby`}</p>
    </div>
  )
}

export default memo(Footer)
