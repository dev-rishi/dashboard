import React from 'react'
import useLayout, { LAYOUT_FRAMES } from '../../hooks/useLayout'
import { LEFT_FRAME_WIDTH } from '../../utils/constants'
import { AppContainer, LeftFrameContainer, MiddleFrameContainer } from '../layout.styles'

interface ITwoFrames {
  Left: any
  leftProps: object
  Middle: any
  middleProps: object
}

const TwoFrames = (props: ITwoFrames) => {
  const { activeFrame } = useLayout()
  const { Left, Middle, leftProps, middleProps } = props

  return (
    <AppContainer>
      <LeftFrame activeFrame={activeFrame} Component={Left} componentProps={leftProps} />
      <MiddleFrame
        isLeftFrameExpanded={activeFrame === LAYOUT_FRAMES.LEFT}
        Component={Middle}
        componentProps={middleProps}
      />
    </AppContainer>
  )
}

export default TwoFrames

function LeftFrame({
  Component,
  componentProps,
  activeFrame,
}: {
  Component: any
  componentProps: object
  activeFrame: LAYOUT_FRAMES
}) {
  return (
    <LeftFrameContainer isActive={activeFrame === LAYOUT_FRAMES.LEFT} width={LEFT_FRAME_WIDTH}>
      <Component {...componentProps} />
    </LeftFrameContainer>
  )
}

function MiddleFrame({
  Component,
  componentProps,
  isLeftFrameExpanded,
}: {
  Component: any
  componentProps: object
  isLeftFrameExpanded: boolean
}) {
  return (
    <MiddleFrameContainer>
      <Component {...componentProps} isLeftFrameExpanded={isLeftFrameExpanded} />
    </MiddleFrameContainer>
  )
}
