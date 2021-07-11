import React from 'react'

interface ICloudIcon {
  height?: number
  color?: string
  className?: string
}

function CloudIcon({ height, color, className }: ICloudIcon) {
  return (
    <svg
      version='1.1'
      id='Layer_1'
      x='0px'
      y='0px'
      height={height || 16}
      width={height || 16}
      className={className}
      viewBox='0 0 436.127 436.127'
      enableBackground='new 0 0 436.127 436.127'
    >
      <path
        fill={color || '#5D7EBE'}
        d='M350.359,191.016c-7.814-66.133-64.062-117.431-132.296-117.431S93.581,124.883,85.768,191.016
C38.402,191.016,0,229.413,0,276.779c0,47.366,38.397,85.763,85.763,85.763h264.601c47.366,0,85.763-38.397,85.763-85.763
C436.127,229.413,397.725,191.016,350.359,191.016z'
      />
      <g></g>
    </svg>
  )
}

export default CloudIcon
