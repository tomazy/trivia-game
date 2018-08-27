import * as React from 'react'
import { Button } from '../components/Button'
import { Answer, Question } from '../quiz'

export type OnAnswer = (questionIndex: number, answer: Answer) => void

interface Props {
  question: Question
  numQuestions: number
  questionIndex: number
  onAnswer: OnAnswer
}

const ANSWER_TRUE = 'True'
const ANSWER_FALSE = 'False'

export const QuestionPage = ({ question, questionIndex, numQuestions, onAnswer }: Props) => (
  <React.Fragment>
    <h2 className='f5 b mt3'>{question.category}</h2>

    <p className='f4 pa4 shadow-2 overflow-auto' style={{minHeight: '10rem'}}>
      {question.questionText}
    </p>

    <div className='f6 mv3'>
      {questionIndex + 1} of {numQuestions}
    </div>

    <div className='flex justify-around'>
      <Button className={'green'} onClick={() => onAnswer(questionIndex, ANSWER_TRUE)}>True</Button>
      <Button className={'red'} onClick={() => onAnswer(questionIndex, ANSWER_FALSE)}>False</Button>
    </div>
  </React.Fragment>
)
