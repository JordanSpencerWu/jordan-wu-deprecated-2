import React from "react"
import Helmet from "react-helmet"

import { useSiteMetadata } from "../../hooks/use-site-metadata"

type MetaProps = JSX.IntrinsicElements['meta'];

type SEOProps = {
  description?: string,
  lang?: `en`,
  meta?: Array<MetaProps>,
  title: string,
}

function SEO(props: SEOProps) {
  const site = useSiteMetadata()
  const {
    description,
    lang,
    meta,
    title
  } = props

  const metaDescription = description || site.description

  console.log(props)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        ...meta
      ]}
    />
  )
}

SEO.defaultProps = {
  description: ``,
  lang: `en`,
  meta: [],
} as Partial<SEOProps>

export default SEO