import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

export default ({ data }) => (
  <Layout isHome>
    <Helmet>
      <meta charSet="utf-8" />
      <title>azujuuuuuun.github.io</title>
    </Helmet>
    <p>Hello, world!</p>
    <ul>
      <li>
        <Link to="/about">自己紹介</Link>
      </li>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={node.fields.slug}>
            {node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___page, order: ASC }) {
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
