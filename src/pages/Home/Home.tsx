import React from 'react'
import { useParams } from 'react-router-dom'
import { IRouteParams } from '..'
import LayoutBody from '../../layouts/LayoutBody/LayoutBody'
import LayoutHeader from '../../layouts/LayoutHeader/LayoutHeader'
import { Grid, GridCol } from '../../utils/utility.styles'

const Home = () => {
  const { dashBoardHome } = useParams<IRouteParams>()

  return (
    <div>
      <LayoutHeader />
      <LayoutBody>
        <Grid>
          <GridCol>
            <p>Autonomous Data</p>
            <p>1</p>
          </GridCol>
          <GridCol>
            <p>Autonomous Data Warehouse</p>
            <p>1</p>
          </GridCol>
          <GridCol>
            <p>Autonomous Data Warehouse</p>
            <p>1</p>
          </GridCol>
          <GridCol>
            <p>Autonomous Data </p>
            <p>1</p>
          </GridCol>
        </Grid>
      </LayoutBody>
    </div>
  )
}

export default Home
