import React from "react"
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../components/Header'

export default ({ data }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>azujuuuuuun.github.io</title>
    </Helmet>
    <Header />
    <div>Hello world!</div>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={node.fields.slug}>
            {node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
