import React, { memo, ReactElement } from "react"
import Helmet from "react-helmet"

import { useSiteMetadata } from "../../hooks/use-site-metadata"

type MetaProps = JSX.IntrinsicElements["meta"]

type SEOProps = {
  description?: string
  lang?: `en`
  meta?: Array<MetaProps>
  title: string
}

function SEO(props: SEOProps): ReactElement {
  const siteMetadata = useSiteMetadata()
  const { description, lang, meta, title } = props

  const metaDescription = description || siteMetadata.description

  const scripts = [
    {
      type: "text/x-mathjax-config",
      innerHTML: `
      window.MathJax.Hub.Config({
      extensions: ["tex2jax.js"],
      jax: ["input/TeX", "output/HTML-CSS"],
      tex2jax: {
        inlineMath: [ ['$','$'], ["\\(","\\)"] ],
        displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
        processEscapes: true,
        tex2jax: {preview: "none"}
      },
      "HTML-CSS": { availableFonts: ["TeX"] },
      messageStyle: "none"
    });`,
    },
    {
      type: `text/javascript`,
      src: `https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS-MML_HTMLorMML`,
    },
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title === `Home` ? title : `${title} | Jordan Wu`}
      script={scripts}
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
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        ...meta,
      ]}
    ></Helmet>
  )
}

SEO.defaultProps = {
  description: ``,
  lang: `en`,
  meta: [],
} as Partial<SEOProps>

export default memo(SEO)
