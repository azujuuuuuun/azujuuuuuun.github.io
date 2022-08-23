import React from 'react';

import Links from '../../components/Links';
import styles from './styles';

interface Props {
  isHome?: boolean;
}

const Footer: React.FC<Props> = props => {
  const { isHome } = props;
  return (
    <footer style={styles.container}>
      {!isHome && (
        <Links
          listStyle={styles.linksList}
          isFooter
          itemStyle={styles.linksItem}
        />
      )}
      <small>©Copyright jun. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
