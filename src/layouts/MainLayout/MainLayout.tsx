import React, { Fragment } from 'react'
import Pages from '../../pages'
import Navbar from '../Navbar/Navbar'
import SideNav from '../SideNav/SideNav'
import TwoFrames from '../TwoFrames/TwoFrames'

const MainLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <TwoFrames Left={SideNav} leftProps={{}} Middle={Pages} middleProps={{}} />
    </Fragment>
  )
}

export default MainLayout
