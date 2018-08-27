import * as React from 'react'

type OnTryAgain = () => void

interface Props {
  error: string
  onTryAgain: OnTryAgain
}

export const ErrorPage = ({ error, onTryAgain }: Props) => (
  <div>
    <p className='red'>
      {error}
    </p>

    <div>
      <button onClick={() => onTryAgain()}>Try Again</button>
    </div>
  </div>
)
