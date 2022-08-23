import React from 'react';
import NextHead from 'next/head';

interface Props {
  title: string;
}

const Head: React.FC<Props> = props => {
  const { title } = props;
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </NextHead>
  );
};

export default Head;
