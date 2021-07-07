import React, { Fragment } from 'react'
import Navbar from '../Navbar/Navbar'
import TwoFrames from '../TwoFrames/TwoFrames'

const MainLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <TwoFrames
        Left={() => <p>Left</p>}
        leftProps={{}}
        Middle={() => (
          <div>
            <p>Middle</p>
          </div>
        )}
        middleProps={{}}
      />
    </Fragment>
  )
}

export default MainLayout
