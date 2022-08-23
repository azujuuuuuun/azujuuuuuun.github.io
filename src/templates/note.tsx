import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/DefaultLayout';
import Head from '../components/Head';

interface Props {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const NoteTemplate: React.VFC<Props> = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Head title={`${post.frontmatter.title} | azujuuuuuun.github.io`} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default NoteTemplate;
