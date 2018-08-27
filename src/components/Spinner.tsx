import * as React from 'react'

export const Spinner = () =>
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'>
    <circle
      cx='50'
      cy='50'
      r='40'
      fill='none'
      strokeLinecap='round'
      strokeWidth='4'
      stroke='rgba(25%,22%,21%,0.843)'
      strokeDasharray='62.83 62.83'
      transform='rotate(77.118 50 50)'>
        <animateTransform
          attributeName='transform'
          type='rotate'
          calcMode='linear'
          values='0 50 50;360 50 50'
          keyTimes='0;1'
          dur='1s'
          begin='0s'
          repeatCount='indefinite'/>
    </circle>
  </svg>
