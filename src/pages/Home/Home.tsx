import React from 'react'
import styled from 'styled-components'
import LayoutBody from '../../layouts/LayoutBody/LayoutBody'
import LayoutHeader from '../../layouts/LayoutHeader/LayoutHeader'

const Grid = styled.div`
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-template-columns: auto auto auto;
`

const GridCol = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  padding: 1rem;
  overflow: hidden;
  border: 1px solid #a5a5a5;
  background-color: #efefef;
  &:hover {
    box-shadow: rgb(0 0 0 / 25%) 0px 2px 5px 1px;
    transition: all 0.2s ease-in;
  }
`

const Home = () => {
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
