import React from "react";
import Link from "next/link";

import locales from "../locales";

interface Props {
  isHome?: boolean;
}

const Header: React.FC<Props> = (props) => {
  const { isHome } = props;
  return (
    <header>
      {isHome ? (
        <h1>
          <Link href="/">{locales.siteName}</Link>
        </h1>
      ) : (
        <Link href="/">{locales.siteName}</Link>
      )}
    </header>
  );
};

export default Header;
