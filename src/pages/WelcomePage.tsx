import * as React from 'react'
import { Button } from '../components/Button'

export type OnBegin = () => void

interface Props {
  numQuestions: number
  onBegin: OnBegin
}

export const WelcomePage = ({ numQuestions, onBegin }: Props) => (
  <React.Fragment>
    <h1>Welcome to the Trivia Challenge!</h1>

    <p>
      You will be presented with {numQuestions} <strong>True</strong> or <strong>False</strong> questions.
    </p>

    <p>
      Can you score 100%?
    </p>

    <div>
      <Button onClick={() => onBegin()}>Begin</Button>
    </div>
  </React.Fragment>
)
