import { mount, shallow } from 'enzyme'
import 'jest-enzyme'
import * as React from 'react'

import { Question } from '../../quiz'
import { OnAnswer, QuestionPage } from '../QuestionPage'

describe(QuestionPage, () => {
  let onAnswerMock: OnAnswer
  const question: Question = {
    category: 'Cat A',
    correctAnswer: 'True',
    questionText: 'Q1',
  }

  beforeEach(() => {
    onAnswerMock = jest.fn()
  })

  it('renders the category', () => {
    const page = shallow(
      <QuestionPage question={question} questionIndex={0} numQuestions={5} onAnswer={onAnswerMock}/>
    )
    expect(page).toIncludeText(question.category)
  })

  it('renders the question text', () => {
    const page = shallow(
      <QuestionPage question={question} questionIndex={0} numQuestions={5} onAnswer={onAnswerMock}/>
    )
    expect(page).toIncludeText(question.questionText)
  })

  it('renders the progress', () => {
    const page = shallow(
      <QuestionPage question={question} questionIndex={3} numQuestions={5} onAnswer={onAnswerMock}/>
    )
    expect(page).toIncludeText('4 of 5')
  })

  it('handles answers', () => {
    const page = shallow(
      <QuestionPage question={question} questionIndex={3} numQuestions={5} onAnswer={onAnswerMock}/>
    )
    const trueButton = page.find('button').at(0)
    const falseButton = page.find('button').at(1)

    trueButton.simulate('click')
    expect(onAnswerMock).toHaveBeenCalledWith(3, 'True')

    falseButton.simulate('click')
    expect(onAnswerMock).toHaveBeenCalledWith(3, 'False')
  })
})
