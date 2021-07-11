import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { IRouteParams } from '..'
import { rootData } from '../../data'
import LayoutBody from '../../layouts/LayoutBody/LayoutBody'
import LayoutHeader from '../../layouts/LayoutHeader/LayoutHeader'
import { Title } from '../../utils/utility.styles'

const DashboardDetails = () => {
  const { dashBoardHome, dashboardName, dashboardCategory } = useParams<IRouteParams>()
  const { goBack } = useHistory()
  const data =
    dashboardName && dashboardCategory
      ? rootData[dashBoardHome][dashboardCategory][dashboardName]
      : {}
  const { Icon, label, Chart, desc } = data

  return (
    <div>
      <LayoutHeader title={dashboardName} backAction={goBack} />
      <LayoutBody>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <div style={{ marginRight: '1rem' }}>{Icon && <Icon color='#7BA65C' height={25} />}</div>
          <Title style={{ marginBottom: 0 }}>{label}</Title>
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <div
            style={{
              backgroundColor: '#181e27',
              borderRadius: 5,
              display: 'flex',
              alignItems: 'center',
              marginRight: '1rem',
              boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 10px 2px',
            }}
          >
            {Chart && <Chart />}
          </div>
          <div style={{ flex: 1, color: '#1d2732' }}>{desc}</div>
        </div>
      </LayoutBody>
    </div>
  )
}

export default DashboardDetails
