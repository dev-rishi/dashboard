import React from 'react'

interface ILaptopIcon {
  height?: number
  color?: string
  className?: string
}

function LaptopIcon({ height, color, className }: ILaptopIcon) {
  return (
    <svg
      version='1.1'
      x='0px'
      y='0px'
      viewBox='0 0 491.52 491.52'
      enableBackground='new 0 0 491.52 491.52'
      height={height || 16}
      width={height || 16}
      className={className}
    >
      <g>
        <g>
          <path
            fill={color || '#5D7EBE'}
            d='M471.04,348.16V40.96H20.48v307.2H0v55.44l46.96,46.96h397.6l46.96-46.96v-55.44H471.04z M40.96,61.44h409.6v286.72H40.96
			V61.44z M471.04,395.12l-34.96,34.96H55.44l-34.96-34.96v-26.48h450.56V395.12z'
          />
        </g>
      </g>
      <g>
        <g>
          <rect fill={color || '#5D7EBE'} x='276.48' y='389.12' width='20.48' height='20.48' />
        </g>
      </g>
      <g>
        <g>
          <rect fill={color || '#5D7EBE'} x='194.56' y='389.12' width='20.48' height='20.48' />
        </g>
      </g>
      <g>
        <g>
          <rect fill={color || '#5D7EBE'} x='235.52' y='389.12' width='20.48' height='20.48' />
        </g>
      </g>
      <g>
        <g>
          <path
            fill={color || '#5D7EBE'}
            d='M389.12,122.88V92.16h-20.48v30.72h-20.48v61.44h20.48v133.12h20.48V184.32h20.48v-61.44H389.12z M389.12,163.84h-20.48
			v-20.48h20.48V163.84z'
          />
        </g>
      </g>
      <g>
        <g>
          <path
            fill={color || '#5D7EBE'}
            d='M296.96,215.04V92.16h-20.48v122.88H256v61.44h20.48v40.96h20.48v-40.96h20.48v-61.44H296.96z M296.96,256h-20.48v-20.48
			h20.48V256z'
          />
        </g>
      </g>
      <g>
        <g>
          <path
            fill={color || '#5D7EBE'}
            d='M204.8,143.36v-51.2h-20.48v51.2h-20.48v61.44h20.48v112.64h20.48V204.8h20.48v-61.44H204.8z M204.8,184.32h-20.48v-20.48
			h20.48V184.32z'
          />
        </g>
      </g>
      <g>
        <g>
          <path
            fill={color || '#5D7EBE'}
            d='M112.64,184.32V92.16H92.16v92.16H71.68v61.44h20.48v71.68h20.48v-71.68h20.48v-61.44H112.64z M112.64,225.28H92.16V204.8
			h20.48V225.28z'
          />
        </g>
      </g>
    </svg>
  )
}

export default LaptopIcon
