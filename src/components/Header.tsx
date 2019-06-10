import React from 'react';
import { Link } from 'gatsby';

import locales from '../locales';

interface Props {
  isHome?: boolean;
}

export default (props: Props): JSX.Element => {
  const { isHome } = props;
  return (
    <header>
      {isHome ? (
        <h1>
          <Link to="/">{locales.siteName}</Link>
        </h1>
      ) : (
        <Link to="/">{locales.siteName}</Link>
      )}
    </header>
  );
};
