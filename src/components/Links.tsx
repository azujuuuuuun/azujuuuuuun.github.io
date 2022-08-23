import React from 'react';
import { Link } from 'gatsby';

import locales from '../locales';

interface Props {
  listStyle?: object;
  isFooter?: boolean;
  itemStyle?: object;
  linkStyle?: object;
}

const Links: React.VFC<Props> = props => {
  const { listStyle, isFooter, itemStyle, linkStyle } = props;
  return (
    <ul style={listStyle}>
      {isFooter && (
        <li style={itemStyle}>
          <Link to="/" style={linkStyle}>
            {locales.home}
          </Link>
        </li>
      )}
      <li style={itemStyle}>
        <Link to="/about" style={linkStyle}>
          {locales.selfIntroduction}
        </Link>
      </li>
      <li style={itemStyle}>
        <Link to="/favorites" style={linkStyle}>
          {locales.favorite}
        </Link>
      </li>
      <li style={itemStyle}>
        <Link to="/links" style={linkStyle}>
          {locales.link}
        </Link>
      </li>
    </ul>
  );
};

export default Links;
