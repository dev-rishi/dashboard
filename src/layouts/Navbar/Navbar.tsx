import React from 'react'
import styled from 'styled-components'
import useLayout, { LAYOUT_FRAMES } from '../../hooks/useLayout'
import CrossIcon from '../../icons/CrossIcon'
import MenuIcon from '../../icons/MenuIcon'
import { NAVBAR_HEIGHT } from '../../utils/constants'

const NavbarMain = styled.div`
  height: ${NAVBAR_HEIGHT}px;
  background-color: #1d2732;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
`
const Logo = styled.p`
  font-size: 20px;
  margin-left: 1rem;
  color: #fff;
  letter-spacing: 0.1rem;
  font-weight: 500;
  user-select: none;
  > span {
    font-size: 18px;
    font-weight: 400;
  }
`

const Navbar = () => {
  const { openLeftFrame, closeLeftFrame, activeFrame } = useLayout()
  return (
    <NavbarMain>
      {activeFrame === LAYOUT_FRAMES.LEFT ? (
        <CrossIcon height={20} color='#fff' onClick={closeLeftFrame} />
      ) : (
        <MenuIcon height={20} color='#fff' onClick={openLeftFrame} />
      )}
      <Logo>
        ORACLE <span>Cloud</span>
      </Logo>
    </NavbarMain>
  )
}

export default Navbar
