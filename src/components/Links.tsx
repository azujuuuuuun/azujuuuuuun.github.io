import React from 'react';
import { Link } from 'gatsby';

interface Props {
  listStyle?: object;
  isFooter?: boolean;
  itemStyle?: object;
  linkStyle?: object;
}

export default (props: Props) => {
  const { listStyle, isFooter, itemStyle, linkStyle } = props;
  return (
    <ul style={listStyle}>
      {isFooter && (
        <li style={itemStyle}>
          <Link to="/" style={linkStyle}>
            ホーム
          </Link>
        </li>
      )}
      <li style={itemStyle}>
        <Link to="/about" style={linkStyle}>
          自己紹介
        </Link>
      </li>
      <li style={itemStyle}>
        <Link to="/skills" style={linkStyle}>
          スキル
        </Link>
      </li>
      <li style={itemStyle}>
        <Link to="/favorites" style={linkStyle}>
          好きなもの
        </Link>
      </li>
      <li style={itemStyle}>
        <Link to="/links" style={linkStyle}>
          リンク
        </Link>
      </li>
    </ul>
  );
};
