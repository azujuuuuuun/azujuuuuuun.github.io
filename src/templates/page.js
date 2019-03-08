import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import Header from '../components/Header'

export default ({ data }) => {
  const { markdownRemark } = data
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${markdownRemark.frontmatter.title} | azujuuuuuun.github.io`}</title>
      </Helmet>
      <Header />
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
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
