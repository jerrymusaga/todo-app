import React from 'react'

export const Header = ({title}) => {
  return (
    <header style={{
        'backgroundColor': 'mediumblue',
        'color': '#fff'
    }}>
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}
