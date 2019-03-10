import React from 'react'

import Links from '../components/Links'
import styles from './FooterStyles'

export default props => {
  const { isHome } = props
  return (
    <footer>
      {!isHome && (
        <Links listStyle={styles.linksList} itemStyle={styles.linksItem} />
      )}
      <small>©Copyright jun. All rights reserved.</small>
    </footer>
  )
}
