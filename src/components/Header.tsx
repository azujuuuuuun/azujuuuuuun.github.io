import React from 'react'
import { Link } from 'gatsby'

export default props => {
  const { isHome } = props
  return (
    <header>
      {isHome ? (
        <h1>
          <Link to="/">azujuuuuuun.github.io</Link>
        </h1>
      ) : (
        <Link to="/">azujuuuuuun.github.io</Link>
      )}
    </header>
  )
}
