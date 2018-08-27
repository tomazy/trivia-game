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
    <div className='f4 b'>{question.category}</div>

    <p>
      {question.questionText}
    </p>

    <div>
      {questionIndex + 1} of {numQuestions}
    </div>

    <div>
      <Button className={'green'} onClick={() => onAnswer(questionIndex, ANSWER_TRUE)}>True</Button>
      <Button className={'red'} onClick={() => onAnswer(questionIndex, ANSWER_FALSE)}>False</Button>
    </div>
  </React.Fragment>
)
