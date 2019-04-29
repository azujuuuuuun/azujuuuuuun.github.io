import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
}

export default (props: Props) => {
  const { title } = props;
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  );
};
