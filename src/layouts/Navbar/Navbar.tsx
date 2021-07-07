import React from 'react'
import styled from 'styled-components'
import useLayout, { LAYOUT_FRAMES } from '../../hooks/useLayout'
import CrossIcon from '../../icons/CrossIcon'
import MenuIcon from '../../icons/MenuIcon'
import { NAVBAR_HEIGHT } from '../../utils/constants'

const NavbarMain = styled.div`
  height: ${NAVBAR_HEIGHT}px;
  background-color: #171717;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
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
    </NavbarMain>
  )
}

export default Navbar
