import React from 'react'
import { useParams } from 'react-router-dom'
import { IRouteParams } from '..'
import LayoutBody from '../../layouts/LayoutBody/LayoutBody'
import LayoutHeader from '../../layouts/LayoutHeader/LayoutHeader'
import { Grid, GridCol } from '../../utils/utility.styles'

const DashboardDetails = () => {
  const { dashboardName } = useParams<IRouteParams>()

  return (
    <div>
      <LayoutHeader title={dashboardName} />
      <LayoutBody>
        <Grid>
          <GridCol>
            <p>Autonomous Data</p>
            <p>1</p>
          </GridCol>
        </Grid>
      </LayoutBody>
    </div>
  )
}

export default DashboardDetails
