import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Dropdown from '../../components/Dropdown/Dropdown'
import { rootData } from '../../data'
import ChipIcon from '../../icons/ChipIcon'

const SideNavOuterContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  background-color: #253041;
`

const SideNavItemHeader = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;

  > p {
    font-size: 14px;
  }

  > svg {
    margin-right: 0.5rem;
  }
`

const SideNav = () => {
  const { push } = useHistory()

  return (
    <SideNavOuterContainer>
      <div>
        {Object.keys(rootData).map((rootKey: any, idx) => {
          return (
            <Fragment key={idx}>
              <SideNavItemHeader onClick={() => push(`/${rootKey}`)}>
                <ChipIcon color='#7BA65C' height={20} />
                <p>{rootKey}</p>
              </SideNavItemHeader>
              {Object.keys(rootData[rootKey]).map((catKey, keyIdx) => {
                const dropdownList = Object.keys(rootData[rootKey][catKey]).map((key) => ({
                  label: key,
                  id: `/${rootKey}/${catKey}/${key}`,
                }))
                return <Dropdown key={keyIdx} title={catKey} list={dropdownList} />
              })}
            </Fragment>
          )
        })}
      </div>
    </SideNavOuterContainer>
  )
}

export default SideNav
