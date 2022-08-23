import React from 'react';
import { Link } from 'gatsby';

import locales from '../locales';

interface Props {
  isHome?: boolean;
}

const Header: React.VFC<Props> = props => {
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

export default Header;
