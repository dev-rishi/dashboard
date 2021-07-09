import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import CaretIcon from '../../icons/CaretIcon'
import { LEFT_FRAME_WIDTH } from '../../utils/constants'

const DropdownOuter = styled.div`
  position: relative;
`
const DropdownBtn = styled.button`
  width: 100%;
  outline: none;
  background: none;
  border: none;
  padding: 0.7rem 1rem;
  color: #fff;
  font-size: 15px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover,
  &:focus,
  &:active {
    border-left: 4px solid #3ac5a6;
    background: #364050;
    transition: all 0.15s ease-out;
  }

  svg {
    transform: rotateZ(270deg);
  }
`
const DropdownItemContainer = styled.div`
  position: absolute;
  top: 0;
  left: ${LEFT_FRAME_WIDTH}px;
  background-color: #253041;
  width: 250px;
  display: flex;
  flex-flow: column;
  > a {
    color: #fff;
    padding: 0.7rem 1rem;
    text-decoration: none;
    font-size: 14px;
    &:hover,
    &.active {
      background: #364050;
      transition: all 0.15s ease-out;
    }
  }
`
interface IDropdownList {
  label: string
  id: string
}

interface IDropdown {
  title: string
  list: IDropdownList[]
}

const Dropdown = ({ title, list }: IDropdown) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropDownRef: any = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleClickOutside = (event: MouseEvent) => {
    event.stopPropagation()
    const targetDiv = event.target
    if (dropDownRef.current !== null && !dropDownRef.current.contains(targetDiv)) {
      setIsOpen(false)
    }
  }

  return (
    <DropdownOuter ref={dropDownRef}>
      <DropdownBtn onClick={() => setIsOpen(true)}>
        <p>{title}</p>
        <CaretIcon color='#fff' height={15} />
      </DropdownBtn>
      {isOpen && (
        <DropdownItemContainer>
          {list.map((item, idx) => {
            return (
              <NavLink
                activeClassName='active'
                to={item.id}
                key={idx}
                onClick={() => setIsOpen(false)}
                exact
              >
                {item.label}
              </NavLink>
            )
          })}
          {/* <p>Link 2</p> */}
        </DropdownItemContainer>
      )}
    </DropdownOuter>
  )
}

export default Dropdown
