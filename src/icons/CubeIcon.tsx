import React from 'react'

interface ICubeIcon {
  height?: number
  color?: string
  className?: string
}

function CubeIcon({ height, color, className }: ICubeIcon) {
  return (
    <svg
      version='1.1'
      id='Layer_1'
      x='0px'
      y='0px'
      viewBox='0 0 376.516 376.516'
      enableBackground='new 0 0 376.516 376.516'
      height={height || 16}
      width={height || 16}
      className={className}
    >
      <g>
        <path
          fill={color || '#5D7EBE'}
          d='M188.258,81.253c1.597,0,3.193,0.477,4.565,1.431l66.675,46.333l57.216-39.763L188.258,0L59.801,89.254l57.216,39.763
		l66.675-46.333C185.065,81.73,186.661,81.253,188.258,81.253z'
        />
        <polygon
          fill={color || '#5D7EBE'}
          points='119.782,146.582 119.782,226.095 180.258,184.075 180.258,104.555 	'
        />
        <polygon
          fill={color || '#5D7EBE'}
          points='53.782,283.08 103.782,317.82 103.782,238.307 53.782,203.56 	'
        />
        <polygon
          fill={color || '#5D7EBE'}
          points='53.782,184.075 103.782,218.823 103.808,139.321 53.782,104.555 	'
        />
        <polygon
          fill={color || '#5D7EBE'}
          points='245.476,237.756 188.258,198 131.04,237.756 188.258,277.521 	'
        />
        <polygon
          fill={color || '#5D7EBE'}
          points='256.734,146.582 196.258,104.555 196.258,184.075 256.734,226.095 	'
        />
        <polygon
          fill={color || '#5D7EBE'}
          points='272.734,218.823 322.734,184.075 322.734,104.555 272.708,139.321 	'
        />
        <path
          fill={color || '#5D7EBE'}
          d='M263.971,244.387l-71.148,49.445c-1.373,0.954-2.969,1.431-4.565,1.431s-3.193-0.477-4.565-1.431l-63.911-44.415v79.521
		l68.476,47.578l134.476-93.436v-79.52l-58.673,40.775C264.032,244.354,264,244.368,263.971,244.387z'
        />
      </g>
    </svg>
  )
}

export default CubeIcon
