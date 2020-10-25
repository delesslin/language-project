import React from 'react'

const Emoji = ({ children, label }) => {
  return (
    <span role='img' aria-label={label}>
      {children}
    </span>
  )
}

export default Emoji
