import styled from 'styled-components'
import { NAVBAR_HEIGHT } from '../utils/constants'
import { horizontalScrollStyles, transitionStyles } from '../utils/utility.styles'

const SLIDE_IN_DURATION = '0.3s'

export const LayoutRoot = styled.div<{ showBanner: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-rows: ${NAVBAR_HEIGHT}px 1fr;
  ${horizontalScrollStyles};
`

export const AppMain = styled.main`
  background-color: ${(props: any) => props.theme.primaryBg};
  z-index: 1;
  width: 100vw;
  height: calc(100vh - ${NAVBAR_HEIGHT}px);
  ${transitionStyles('background-color')};
`

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  ${horizontalScrollStyles};
`

export const LeftFrameContainer = styled.div<{
  isActive: boolean
  width: number
}>`
  z-index: 10;
  height: calc(100vh - ${NAVBAR_HEIGHT}px);
  position: relative;
  left: ${(props) => (props.isActive ? '0px' : `-${props.width}px`)};
  width: ${(props) => (props.isActive ? `${props.width}px` : '0px')};
  min-width: ${(props) => (props.isActive ? `${props.width}px` : '0px')};
  transition: all ${SLIDE_IN_DURATION} ease-out;
`

export const MiddleFrameContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.secondaryBg};
  overflow: hidden;
  position: relative;
  transition: all ${SLIDE_IN_DURATION} ease-out;
`
