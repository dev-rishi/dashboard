import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div style={{ display: 'flex', flexFlow: 'column' }}>
      <Link to='/'>Home</Link>
      <Link to='/first'>First</Link>
    </div>
  )
}

export default SideNav
