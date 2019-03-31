import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

interface Props {
  isHome?: boolean
  children: React.ReactNode
}

export default ({ isHome, children }: Props) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <Header isHome={isHome} />
    {children}
    <Footer isHome={isHome} />
  </div>
)
