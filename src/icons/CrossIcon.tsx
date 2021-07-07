import React from 'react'

interface ICrossIcon {
  color?: string
  height?: number
  onClick?: () => void
  className?: string
}

function CrossIcon(props: ICrossIcon) {
  return (
    <svg
      version='1.1'
      x='0px'
      y='0px'
      height={props.height || 12}
      viewBox='0 0 47.971 47.971'
      enableBackground='new 0 0 47.971 47.971'
      preserveAspectRatio='none'
      onClick={props.onClick}
      style={{ cursor: props.onClick ? 'pointer' : '' }}
      color={props.color}
      className={props.className}
    >
      <path
        d='M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z'
        fill={props.color || '#5D7EBE'}
      />
    </svg>
  )
}

export default CrossIcon