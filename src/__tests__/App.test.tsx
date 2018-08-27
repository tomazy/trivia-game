import { shallow } from 'enzyme'
import 'jest-enzyme'
import * as React from 'react'

import { App } from '../App'
import { QuestionPage } from '../pages/QuestionPage'
import { WelcomePage } from '../pages/WelcomePage'
import { Quiz } from '../quiz'

const SAMPLE_QUESTIONS = [{
  category: 'X',
  correctAnswer: 'True',
  questionText: 'q1',
}, {
  category: 'Y',
  correctAnswer: 'False',
  questionText: 'q2',
}]

describe(App, () => {
  it('has the happy path', async () => {
    const quiz = new Quiz(SAMPLE_QUESTIONS)
    const createQuizMock = jest.fn().mockResolvedValue(quiz)
    const app = shallow(<App createQuiz={createQuizMock} />)

    await allPromisesResolved()

    // Welcome Page
    expect(app.find(WelcomePage)).toExist()
    app.find(WelcomePage).props().onBegin()

    // Question Page #1
    expect(app.find(WelcomePage)).not.toExist()
    expect(app.find(QuestionPage)).toExist()
    app.find(QuestionPage).props().onAnswer(0, 'A')

    // Question Page #2
    expect(app.find(QuestionPage)).toExist()
    app.find(QuestionPage).props().onAnswer(1, 'B')

    // Results Page
    expect(app.find(QuestionPage)).not.toExist()
  })
})

async function allPromisesResolved() {
  return Promise.resolve()
}
