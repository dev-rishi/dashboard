import React from 'react'
import styled from 'styled-components'
import { LAYOUT_HEADER_HEIGHT } from '../../utils/constants'

const LayoutHeaderOuter = styled.div`
  height: ${LAYOUT_HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #a5a5a5;
`

interface ILayoutHeader {
  title?: string
}

const LayoutHeader = ({ title }: ILayoutHeader) => {
  return (
    <LayoutHeaderOuter>
      <div style={{ textTransform: 'capitalize', fontWeight: 'bold', color: '#0f274c' }}>
        {title && <p>{title}</p>}
      </div>
    </LayoutHeaderOuter>
  )
}

export default LayoutHeader
