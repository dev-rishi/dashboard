import React from 'react'

interface IMenuIcon {
  height?: number
  color?: string
  className?: string
  onClick?: () => void
}

function MenuIcon({ height = 15, color, className, onClick }: IMenuIcon) {
  return (
    <svg
      height={height || 16}
      width={height || 16}
      onClick={onClick}
      className={className}
      style={{ cursor: onClick && 'pointer' }}
      viewBox='0 0 18 12'
    >
      <g id='Icons' stroke='none' strokeWidth='1' fillRule='evenodd' fill={color || '#5D7EBE'}>
        <g id='Rounded' transform='translate(-885.000000, -3438.000000)'>
          <g id='Navigation' transform='translate(100.000000, 3378.000000)'>
            <g id='-Round-/-Navigation-/-menu' transform='translate(782.000000, 54.000000)'>
              <g transform='translate(0.000000, 0.000000)'>
                <polygon id='Path' points='0 0 24 0 24 24 0 24'></polygon>
                <path
                  d='M4,18 L20,18 C20.55,18 21,17.55 21,17 C21,16.45 20.55,16 20,16 L4,16 C3.45,16 3,16.45 3,17 C3,17.55 3.45,18 4,18 Z M4,13 L20,13 C20.55,13 21,12.55 21,12 C21,11.45 20.55,11 20,11 L4,11 C3.45,11 3,11.45 3,12 C3,12.55 3.45,13 4,13 Z M3,7 C3,7.55 3.45,8 4,8 L20,8 C20.55,8 21,7.55 21,7 C21,6.45 20.55,6 20,6 L4,6 C3.45,6 3,6.45 3,7 Z'
                  id='🔹-Icon-Color'
                  fill='#1D1D1D'
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default MenuIcon
