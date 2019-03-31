import React from 'react'
import { Helmet } from 'react-helmet'

export default props => {
  const { title } = props
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  )
}
