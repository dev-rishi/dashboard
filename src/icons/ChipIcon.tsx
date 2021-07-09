import React from 'react'

interface IChipIcon {
  color?: string
  height?: number
  onClick?: () => void
  className?: string
}

function ChipIcon(props: IChipIcon) {
  return (
    <svg
      height={props.height || 12}
      width={props.height || 12}
      onClick={props.onClick}
      style={{ cursor: props.onClick ? 'pointer' : '' }}
      color={props.color}
      className={props.className}
      version='1.1'
      id='Layer_1'
      x='0px'
      y='0px'
      viewBox='0 0 502 502'
      enableBackground='new 0 0 502 502'
      fill={props.color || '#5D7EBE'}
    >
      <g>
        <g>
          <g>
            <path
              d='M121.596,131.596v238.809c0,5.522,4.478,10,10,10h238.809c5.522,0,10-4.478,10-10V131.596
				c-0.001-5.523-4.478-10-10.001-10H131.596C126.074,121.596,121.596,126.074,121.596,131.596z M141.596,141.596h218.809v218.808
				h-0.001H141.596V141.596z'
              fill={props.color || '#5D7EBE'}
            />
            <path
              d='M492,261c5.522,0,10-4.478,10-10c0-5.522-4.478-10-10-10h-55.18v-63.255H492c5.522,0,10-4.478,10-10
				c0-5.522-4.478-10-10-10h-55.18V75.18c0-5.522-4.478-10-10-10h-82.565V10c0-5.522-4.478-10-10-10c-5.522,0-10,4.478-10,10v55.18
				H261V10c0-5.522-4.478-10-10-10c-5.522,0-10,4.478-10,10v55.18h-63.255V10c0-5.522-4.478-10-10-10c-5.522,0-10,4.478-10,10v55.18
				H75.18c-5.522,0-10,4.478-10,10v82.565H10c-5.522,0-10,4.478-10,10c0,5.522,4.478,10,10,10h55.18V241H10c-5.522,0-10,4.478-10,10
				c0,5.522,4.478,10,10,10h55.18v63.255H10c-5.522,0-10,4.478-10,10c0,5.522,4.478,10,10,10h55.18v82.565c0,5.522,4.478,10,10,10
				h82.565V492c0,5.522,4.478,10,10,10c5.522,0,10-4.478,10-10v-55.18H241V492c0,5.522,4.478,10,10,10c5.522,0,10-4.478,10-10
				v-55.18h63.255V492c0,5.522,4.478,10,10,10c5.522,0,10-4.478,10-10v-55.18h82.565c5.522,0,10-4.478,10-10v-82.565H492
				c5.522,0,10-4.478,10-10c0-5.522-4.478-10-10-10h-55.18V261H492z M416.82,157.745h-11.361c-5.522,0-10,4.478-10,10
				c0,5.522,4.478,10,10,10h11.361V241h-11.361c-5.522,0-10,4.478-10,10c0,5.522,4.478,10,10,10h11.361v63.255h-11.361
				c-5.522,0-10,4.478-10,10c0,5.522,4.478,10,10,10h11.361v72.565h-72.565v-11.361c0-5.522-4.478-10-10-10c-5.522,0-10,4.478-10,10
				v11.361H261v-11.361c0-5.522-4.478-10-10-10c-5.522,0-10,4.478-10,10v11.361h-63.255v-11.361c0-5.522-4.478-10-10-10
				c-5.522,0-10,4.478-10,10v11.361H85.18v-72.565h11.361c5.522,0,10-4.478,10-10c0-5.522-4.478-10-10-10H85.18V261h11.361
				c5.522,0,10-4.478,10-10c0-5.522-4.478-10-10-10H85.18v-63.255h11.361c5.522,0,10-4.478,10-10c0-5.522-4.478-10-10-10H85.18
				V85.18h72.565v11.361c0,5.522,4.478,10,10,10c5.522,0,10-4.478,10-10V85.18H241v11.361c0,5.522,4.478,10,10,10
				c5.522,0,10-4.478,10-10V85.18h63.255v11.361c0,5.522,4.478,10,10,10c5.522,0,10-4.478,10-10V85.18h72.565V157.745z'
            />
            <path
              d='M329.873,159.937H311.25c-5.522,0-10,4.478-10,10c0,5.522,4.478,10,10,10h18.623c5.522,0,10-4.478,10-10
				C339.873,164.415,335.395,159.937,329.873,159.937z'
              fill={props.color || '#5D7EBE'}
            />
            <path
              d='M270.718,159.937H169.937c-5.522,0-10,4.478-10,10c0,5.522,4.477,10,10,10h100.781c5.522,0,10-4.478,10-10
				C280.718,164.415,276.24,159.937,270.718,159.937z'
              fill={props.color || '#5D7EBE'}
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default ChipIcon
