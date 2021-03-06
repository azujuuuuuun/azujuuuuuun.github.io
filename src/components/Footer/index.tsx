import React from 'react';

import Links from '../../components/Links';
import styles from './styles';

interface Props {
  isHome?: boolean;
}

export default (props: Props): JSX.Element => {
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
