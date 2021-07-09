import React from 'react'
import styled from 'styled-components'

const LayoutBodyOuter = styled.div`
  padding: 1rem;
`

interface ILayoutBody {
  title?: string
  children?: any
}

const LayoutBody = ({ title, children }: ILayoutBody) => {
  return <LayoutBodyOuter>{children}</LayoutBodyOuter>
}

export default LayoutBody
