import React from "react"
import { graphql } from "gatsby"

import Header from '../components/Header'

export default ({ data }) => {
  const { markdownRemark } = data
  return (
    <div>
      <Header />
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`
