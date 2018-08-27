import * as React from 'react'
import { Button } from '../components/Button'

type OnTryAgain = () => void

interface Props {
  error: string
  onTryAgain: OnTryAgain
}

export const ErrorPage = ({ error, onTryAgain }: Props) => (
  <React.Fragment>
    <p className='red'>
      {error}
    </p>

    <div>
      <Button onClick={() => onTryAgain()}>Try Again</Button>
    </div>
  </React.Fragment>
)
