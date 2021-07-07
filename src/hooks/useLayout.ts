import { useCallback } from 'react'
import { atom, useRecoilState } from 'recoil'

export enum LAYOUT_FRAMES {
  LEFT = 'left',
  RIGHT = 'right',
  MIDDLE = 'middle',
}

const activeFrameState = atom<LAYOUT_FRAMES>({
  key: 'activeFrameState',
  default: LAYOUT_FRAMES.MIDDLE,
})

const useLayout = () => {
  const [activeFrame, setActiveFrame] = useRecoilState(activeFrameState)

  const openLeftFrame = useCallback(() => {
    setActiveFrame(LAYOUT_FRAMES.LEFT)
  }, [setActiveFrame])

  const closeLeftFrame = useCallback(() => {
    setActiveFrame(LAYOUT_FRAMES.MIDDLE)
  }, [setActiveFrame])

  return {
    activeFrame,
    openLeftFrame,
    closeLeftFrame,
  }
}

export default useLayout
