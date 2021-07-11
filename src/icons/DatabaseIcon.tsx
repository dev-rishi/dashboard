import React from 'react'

interface IDatabaseIcon {
  height?: number
  color?: string
  className?: string
}

function DatabaseIcon({ height, color, className }: IDatabaseIcon) {
  return (
    <svg viewBox='0 0 1792 1792' height={height || 16} width={height || 16} className={className}>
      <path
        fill={color || '#5D7EBE'}
        d='M896 768q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zm0 768q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zm0-384q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zm0-1152q208 0 385 34.5t280 93.5 103 128v128q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-128q0-69 103-128t280-93.5 385-34.5z'
      />
    </svg>
  )
}

export default DatabaseIcon
