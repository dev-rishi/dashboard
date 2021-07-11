import React, { useState } from 'react'
import styled from 'styled-components'

interface IAccordionBody {
  isExpanded: boolean
}
const AccordionWrapper = styled.div`
  border: 1px solid #a5a5a5;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  transition: max-height 0.3s ease-in;
  flex-flow: column;
  margin-bottom: 1rem;
`
const AccordionHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const AccordionBody = styled.div<IAccordionBody>`
  height: auto;
  width: 100%;
  max-height: ${({ isExpanded }) => (isExpanded ? '700px' : '0px')};
  display: flex;
  justify-content: space-between;
  transition: max-height 0.2s ease-in-out;
  overflow: hidden;
`
const AccordionTitle = styled.p`
  text-transform: capitalize;
  color: #3b3b3c;
  font-size: 16px;
  font-weight: 600;
`
const AccordionBtn = styled.p`
  text-transform: capitalize;
  color: #3b3b3c;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`

const Accordion = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: any
  defaultOpen?: boolean
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultOpen)
  return (
    <AccordionWrapper>
      <AccordionHeader>
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionBtn onClick={() => setIsExpanded((d) => !d)}>
          {isExpanded ? 'Collapse' : 'Expand'}
        </AccordionBtn>
      </AccordionHeader>
      <AccordionBody isExpanded={isExpanded}>
        <div style={{ width: '100%', marginTop: '1rem' }}>{children}</div>
      </AccordionBody>
    </AccordionWrapper>
  )
}

export default Accordion
