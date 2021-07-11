import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 500px;
  height: 25px;
  margin-left: 4rem;
  border-radius: 5px;
  outline: none;
  padding: 0.3rem;
`

const GlobalSearch = ({ handleChange }: { handleChange: (val: string) => void }) => {
  return (
    <StyledInput
      type='text'
      onChange={(e) => {
        const text = e.currentTarget.value
        handleChange(text)
      }}
    />
  )
}

export default GlobalSearch
