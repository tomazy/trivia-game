import * as React from 'react'

export type OnBegin = () => void

interface Props {
  numQuestions: number
  onBegin: OnBegin
}

export const WelcomePage = ({ numQuestions, onBegin }: Props) => (
  <div>
    <h1>Welcome to the Trivia Challenge!</h1>

    <p>
      You will be presented with {numQuestions} <strong>True</strong> or <strong>False</strong> questions.
    </p>

    <p>
      Can you score 100%?
    </p>

    <div>
      <button onClick={() => onBegin()}>Begin</button>
    </div>
  </div>
)
