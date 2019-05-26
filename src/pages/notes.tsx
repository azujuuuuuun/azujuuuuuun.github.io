import React from 'react';
import { Link, graphql } from "gatsby";

import Layout from '../layouts/DefaultLayout';
import Head from '../components/Head';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string
          frontmatter: {
            title: string
            published: string
          }
          fields: {
            slug: string
          }
        }
      }[]
    }
  }
}

export default ({ data }: Props): JSX.Element => (
  <Layout>
    <Head title="メモ | azujuuuuuun.github.io" />
    <h1>メモ</h1>
    {data.allMarkdownRemark.edges.map(({ node }): JSX.Element => (
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <h3>
            {node.frontmatter.title}{' '}
            <span>
              - {node.frontmatter.published}
            </span>
          </h3>
        </Link>
      </div>
    ))}
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___id], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            published
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
