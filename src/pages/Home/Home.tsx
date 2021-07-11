import React, { Fragment, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { IRouteParams } from '..'
import Accordion from '../../components/Accordion/Accordion'
import GlobalSearchContext from '../../context/GlobalSearchContext'
import { rootData } from '../../data'
import LayoutBody from '../../layouts/LayoutBody/LayoutBody'
import LayoutHeader from '../../layouts/LayoutHeader/LayoutHeader'
import { NAVBAR_HEIGHT } from '../../utils/constants'
import { Grid, GridCol, SubText, Subtitle, Title } from '../../utils/utility.styles'

const Home = () => {
  const { dashBoardHome } = useParams<IRouteParams>()
  const { push } = useHistory()
  const data = rootData[dashBoardHome]
  const { searchText } = useContext(GlobalSearchContext).state

  return (
    <div style={{ height: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}>
      <LayoutHeader />
      <LayoutBody>
        <Fragment>
          {Object.keys(data).map((subRootKey: any, subRootIdx: number) => (
            <Accordion title={subRootKey} key={subRootIdx} defaultOpen>
              <Grid>
                {Object.keys(data[subRootKey])
                  .filter((fKey) => {
                    if (searchText) {
                      return fKey.toLowerCase().includes(searchText.toLowerCase?.())
                    }
                    return true
                  })
                  .map((dKey: any, dIdx: number) => {
                    const { Icon, label } = data[subRootKey][dKey]
                    return (
                      <GridCol
                        key={dIdx}
                        onClick={() => push(`/${dashBoardHome}/${subRootKey}/${dKey}`)}
                      >
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
            </Accordion>
          ))}
        </Fragment>
      </LayoutBody>
    </div>
  )
}

export default Home
