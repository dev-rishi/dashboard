import React, { Fragment } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { IRouteParams } from '..'
import { rootData } from '../../data'
import LayoutBody from '../../layouts/LayoutBody/LayoutBody'
import LayoutHeader from '../../layouts/LayoutHeader/LayoutHeader'
import { Grid, GridCol, SubText, Subtitle, Title } from '../../utils/utility.styles'

const Home = () => {
  const { dashBoardHome } = useParams<IRouteParams>()
  const { push } = useHistory()
  const data = rootData[dashBoardHome]

  return (
    <div>
      <LayoutHeader />
      <LayoutBody>
        {Object.keys(data).map((rootKey: any, idx: number) => (
          <Fragment key={idx}>
            <p>{rootKey}</p>
            <Grid>
              {Object.keys(data[rootKey]).map((dKey: any, dIdx: number) => {
                const { Icon, label } = data[rootKey][dKey]
                return (
                  <GridCol key={dIdx} onClick={() => push(`/${dashBoardHome}/${rootKey}/${dKey}`)}>
                    <div>
                      <SubText>{label}</SubText>
                      <Title>{dKey}</Title>
                      <Subtitle>3-5 min</Subtitle>
                    </div>
                    <div>{Icon && <Icon color='#7BA65C' height={25} />}</div>
                  </GridCol>
                )
              })}
            </Grid>
          </Fragment>
        ))}
      </LayoutBody>
    </div>
  )
}

export default Home
