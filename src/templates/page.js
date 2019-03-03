import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Header from '../components/Header'

export default ({ data }) => {
  const { markdownRemark } = data
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${markdownRemark.frontmatter.title} | azujuuuuuun.github.io`}</title>
      </Helmet>
      <Header />
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
