import * as React from 'react'
import { Button } from '../components/Button'

type OnTryAgain = () => void

interface Props {
  error: string
  onTryAgain: OnTryAgain
}

export const ErrorPage = ({ error, onTryAgain }: Props) => (
  <div className='h-100 flex flex-column justify-center items-center'>
    <p className='red'>
      {error}
    </p>

    <div>
      <Button onClick={() => onTryAgain()}>Try Again</Button>
    </div>
  </div>
)
