import * as React from 'react'
import { Button } from '../components/Button'
import { Quiz } from '../quiz'

export type OnPlayAgain = () => void

interface Props {
  quiz: Quiz
  onPlayAgain: OnPlayAgain
}

export const ResultsPage = ({ quiz, onPlayAgain }: Props) => {
  const questions: JSX.Element[] = []

  for (let i = 0; i < quiz.numQuestions; i++) {
    const q = quiz.getQuestion(i)
    questions.push((
      <div key={i} className='pv2 flex'>
        <div className='w1 mr2 flex-none'>
          {
            quiz.isAnswerCorrectAt(i)
              ? '+'
              : '-'
          }
        </div>
        <div>
          <div>
            {q.questionText}
          </div>
          <div className='f7 i'>
            Correct answer: "{q.correctAnswer}"
          </div>
        </div>
      </div>
    ))
  }

  return (
    <React.Fragment>
      <h1>You scored {quiz.score}/{quiz.numQuestions}</h1>

      <div className='tl'>
        {questions}
      </div>

      <div>
        <Button onClick={() => onPlayAgain()}>Play Again?</Button>
      </div>
    </React.Fragment>
  )
}
