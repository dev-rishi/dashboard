import styled, { css } from 'styled-components'

export const transitionStyles = (properties: string[] | string) => {
  if (typeof properties === 'string')
    return css`
      transition: ${properties} 0.3s ease-out;
    `
  else
    return css`
      transition: ${properties.map((p) => `${p} 0.3s ease-out`).join(', ')};
    `
}

export const verticalScrollStyles = css`
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(25, 25, 25, 0.2);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(25, 25, 25, 0.3);
  }
`

export const horizontalScrollStyles = css`
  overflow-x: auto;
  ::-webkit-scrollbar {
    height: 3px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(25, 25, 25, 0.2);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(25, 25, 25, 0.3);
  }
`

export const Grid = styled.div`
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-template-columns: auto auto auto;
`

export const GridCol = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  padding: 1rem;
  overflow: hidden;
  border: 1px solid #a5a5a5;
  background-color: #efefef;
  cursor: pointer;
  &:hover {
    box-shadow: rgb(0 0 0 / 25%) 0px 2px 5px 1px;
    transition: all 0.2s ease-in;
  }
`

export const SubText = styled.p`
  color: #3b3b3c;
  margin-bottom: 0.5rem;
  font-size: 15px;
`
export const Title = styled.p`
  color: #316aae;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
`
export const Subtitle = styled.p`
  color: #3b3b3c;
  font-size: 13px;
`
