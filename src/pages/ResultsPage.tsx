import * as React from 'react'
import { DefaultButton } from '../components/Button'
import { CorrectMark } from '../components/CorrectMark'
import { WrongMark } from '../components/WrongMark'
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
              ? <CorrectMark />
              : <WrongMark />
          }
        </div>
        <div>
          <div>
            {q.questionText}
          </div>
          <div className='f7 i'>
            correct answer: {q.correctAnswer}
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className='pt3'>
      <h1 className='mt0'>You scored {quiz.score}/{quiz.numQuestions}</h1>

      <div className='tl mb3'>
        {questions}
      </div>

      <div className='pb3'>
        <DefaultButton onClick={() => onPlayAgain()}>Play Again?</DefaultButton>
      </div>
    </div>
  )
}
