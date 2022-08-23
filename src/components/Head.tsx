import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
}

const Head: React.VFC<Props> = props => {
  const { title } = props;
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  );
};

export default Head;
