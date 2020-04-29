import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const postLayout = () => {
  return (
    <Layout>
      <h1>Post Layout</h1>
    </Layout>
  )
}

export default postLayout

export const query = graphql`
  query PostQuery {
    markdownRemark(frontmatter: { slug: { eq: "/first-post" } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
