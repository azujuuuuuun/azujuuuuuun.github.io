import React from 'react';
import Link from 'next/link';

import locales from '../locales';

interface Props {
  listStyle?: object;
  isFooter?: boolean;
  itemStyle?: object;
  linkStyle?: object;
}

const Links: React.FC<Props> = props => {
  const { listStyle, isFooter, itemStyle, linkStyle } = props;
  return (
    <ul style={listStyle}>
      {isFooter && (
        <li style={itemStyle}>
          <Link href="/" style={linkStyle}>
            {locales.home}
          </Link>
        </li>
      )}
      <li style={itemStyle}>
        <Link href="/about" style={linkStyle}>
          {locales.selfIntroduction}
        </Link>
      </li>
      <li style={itemStyle}>
        <Link href="/favorites" style={linkStyle}>
          {locales.favorite}
        </Link>
      </li>
      <li style={itemStyle}>
        <Link href="/links" style={linkStyle}>
          {locales.link}
        </Link>
      </li>
    </ul>
  );
};

export default Links;
