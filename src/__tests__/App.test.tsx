import { shallow } from 'enzyme'
import 'jest-enzyme'
import * as React from 'react'

import { App } from '../App'
import { LoadingPage } from '../pages/LoadingPage'
import { QuestionPage } from '../pages/QuestionPage'
import { ResultsPage } from '../pages/ResultsPage'
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
    const createQuizMock = jest.fn().mockResolvedValue(new Quiz(SAMPLE_QUESTIONS))
    const app = shallow(<App createQuiz={createQuizMock} />)

    // Loading Page
    expect(app.find(LoadingPage)).toExist()

    await allPromisesResolved()
    expect(app.find(LoadingPage)).not.toExist()

    // Welcome Page
    expect(app.find(WelcomePage)).toExist()
    expect(app.find(WelcomePage)).toHaveProp('numQuestions', SAMPLE_QUESTIONS.length)
    app.find(WelcomePage).props().onBegin()
    expect(app.find(WelcomePage)).not.toExist()

    // Question Page #1
    expect(app.find(QuestionPage)).toExist()
    expect(app.find(QuestionPage)).toHaveProp('question', SAMPLE_QUESTIONS[0])
    expect(app.find(QuestionPage)).toHaveProp('questionIndex', 0)
    expect(app.find(QuestionPage)).toHaveProp('numQuestions', SAMPLE_QUESTIONS.length)
    app.find(QuestionPage).props().onAnswer(0, 'True')

    // Question Page #2
    expect(app.find(QuestionPage)).toExist()
    expect(app.find(QuestionPage)).toHaveProp('question', SAMPLE_QUESTIONS[1])
    expect(app.find(QuestionPage)).toHaveProp('questionIndex', 1)
    expect(app.find(QuestionPage)).toHaveProp('numQuestions', SAMPLE_QUESTIONS.length)
    app.find(QuestionPage).props().onAnswer(1, 'True')
    expect(app.find(QuestionPage)).not.toExist()

    // Results Page
    expect(app.find(ResultsPage)).toExist()
    expect(app.find(ResultsPage)).toHaveProp('quiz')
    {
      const quiz = app.find(ResultsPage).props().quiz
      expect(quiz.numAnswers).toBe(SAMPLE_QUESTIONS.length)
      expect(quiz.score).toBe(1)
    }
    app.find(ResultsPage).props().onPlayAgain()
    expect(app.find(ResultsPage)).not.toExist()

    // Loading...
    expect(app.find(LoadingPage)).toExist()

    await allPromisesResolved()
    expect(app.find(LoadingPage)).not.toExist()

    // Welcome Page
    expect(app.find(WelcomePage)).toExist()
    app.find(WelcomePage).props().onBegin()
    expect(app.find(WelcomePage)).not.toExist()

    // Question Page #1
    expect(app.find(QuestionPage)).toExist()
    app.find(QuestionPage).props().onAnswer(0, 'A')

    // ... and so on.
  })
})

async function allPromisesResolved() {
  return Promise.resolve()
}
