import React from 'react'
import styled from 'styled-components'
import Dropdown from '../../components/Dropdown/Dropdown'
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

  > p {
    font-size: 14px;
  }

  > svg {
    margin-right: 0.5rem;
  }
`

const SideNav = () => {
  return (
    <SideNavOuterContainer>
      <div>
        <SideNavItemHeader>
          <ChipIcon color='#7BA65C' height={20} />
          <p>Core Infrastructure</p>
        </SideNavItemHeader>
        <Dropdown
          title='Compute'
          list={[
            { label: 'Home', id: '/' },
            { label: 'First', id: '/first' },
          ]}
        />
        <Dropdown
          title='Block Storage'
          list={[
            { label: 'Home', id: '/' },
            { label: 'First', id: '/first' },
          ]}
        />
      </div>
    </SideNavOuterContainer>
  )
}

export default SideNav
