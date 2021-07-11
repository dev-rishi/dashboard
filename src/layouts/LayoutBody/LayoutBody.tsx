import React from 'react'
import styled from 'styled-components'
import { LAYOUT_HEADER_HEIGHT } from '../../utils/constants'
import { verticalScrollStyles } from '../../utils/utility.styles'

const LayoutBodyOuter = styled.div`
  height: calc(100% - ${LAYOUT_HEADER_HEIGHT}px);
  padding: 1rem;
  overflow: auto;
  ${verticalScrollStyles};
`

interface ILayoutBody {
  title?: string
  children?: any
}

const LayoutBody = ({ title, children }: ILayoutBody) => {
  return <LayoutBodyOuter>{children}</LayoutBodyOuter>
}

export default LayoutBody
