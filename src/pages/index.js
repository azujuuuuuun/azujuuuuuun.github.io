import React from "react"
import { Link, graphql } from 'gatsby'

import Header from '../components/Header'

export default ({ data }) => (
  <div>
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
