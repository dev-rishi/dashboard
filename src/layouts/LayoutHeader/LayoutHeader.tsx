import React from 'react'
import styled from 'styled-components'
import BackButtonIcon from '../../icons/BackButtonIcon'
import { LAYOUT_HEADER_HEIGHT } from '../../utils/constants'

const LayoutHeaderOuter = styled.div`
  height: ${LAYOUT_HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #a5a5a5;

  > span {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 0.5rem;
  }
`

interface ILayoutHeader {
  title?: string
  backAction?: () => void
}

const LayoutHeader = ({ title, backAction }: ILayoutHeader) => (
  <LayoutHeaderOuter>
    {backAction && (
      <span className='backBtn' onClick={backAction}>
        <BackButtonIcon height={22} color='#0f274c' />
      </span>
    )}
    <div style={{ textTransform: 'capitalize', fontWeight: 'bold', color: '#0f274c' }}>
      {title && <p>{title}</p>}
    </div>
  </LayoutHeaderOuter>
)

export default LayoutHeader
