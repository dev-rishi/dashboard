import { css } from 'styled-components'

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
    background: ${(props) => props.theme.scrollBarTrackColor};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.scrollBarThumbColor};
  }
`

export const horizontalScrollStyles = css`
  overflow-x: auto;
  ::-webkit-scrollbar {
    height: 3px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.scrollBarTrackColor};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.scrollBarThumbColor};
  }
`
