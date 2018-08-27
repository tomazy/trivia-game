import * as React from 'react'
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
  <div>
    <div className='f4 b'>{question.category}</div>

    <p>
      {question.questionText}
    </p>

    <div>
      {questionIndex + 1} of {numQuestions}
    </div>

    <div>
      <button onClick={() => onAnswer(questionIndex, ANSWER_TRUE)}>True</button>
      <button onClick={() => onAnswer(questionIndex, ANSWER_FALSE)}>False</button>
    </div>
  </div>
)
