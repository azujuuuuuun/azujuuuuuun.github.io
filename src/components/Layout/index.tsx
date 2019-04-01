import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './styles'

interface Props {
  isHome?: boolean;
  children: React.ReactNode
}

export default ({ isHome, children }: Props) => (
  <div style={styles.container}>
    <Header isHome={isHome} />
    {children}
    <Footer isHome={isHome} />
  </div>
)