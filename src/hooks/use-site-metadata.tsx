import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = (): any => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            githubUrl
            linkedinUrl
            siteUrl
            title
          }
        }
      }
    `
  )

  return site.siteMetadata
}
